<template>
  <div class="container">
    <section class="show">
      <div class="nav">
        <h1>{{examples[currentId].title}}</h1>
        <div class="chapter">
             <span v-if="currentId>1" @click="changeExample(currentId-1)">
            上一章：{{examples[currentId-1].title}}
          </span>
          <span v-if="currentId<Object.keys(examples).length" @click="changeExample(Number(currentId)+1)">
            下一章：{{examples[Number(currentId)+1].title}}
          </span>
        </div>
      </div>
      <div class="icons">
        <span class="iconfont icon-home" @click="$router.push('/list')"></span>
        <span :class="`iconfont icon-${isShowCode ? 'show' : 'hide'}`" @click="toggleShow"></span>
        <span class="iconfont icon-restart"></span>
      </div>
      <iframe :srcdoc="examples[currentId].html"></iframe>
    </section>
    <section class="code-container" v-if="isShowCode">
      <codemirror
        class="codemirror"
        ref="codeContainer"
        v-model="examples[currentId].html"
        :options="options"
        @ready="cmReady"
      />
    </section>
  </div>
</template>

<script>
	import { codemirror } from "vue-codemirror";
	import 'codemirror/lib/codemirror.css'
	import 'codemirror/mode/markdown/markdown'
	import 'codemirror/theme/monokai.css'
	import examples from '../examples/index'

	export default {
		name: 'app',
		data() {
			return {
				isShowCode: false,
				examples: examples,
				options: {
					mode: 'text/html',
					lineNumbers: true,
					styleActiveLine: true,
					theme: 'monokai',
					lineWrapping: true
				}
			}
		},
		computed: {
			currentId() {
				return this.$route.params.id
			},
		},
		methods: {
			cmReady() {
				this.$refs.codeContainer.codemirror.setSize('100%', '100%');
			},
			changeExample(id) {
				this.$router.push(`/example/${id}`)
			},
			toggleShow() {
				this.isShowCode = !this.isShowCode;
			}
		},
		components: {
			codemirror
		}
	}
</script>

<style lang="less" scoped>
  .container {
    height: 100vh;
    overflow: hidden;
    display: flex;
    .show {
      flex: 1;
      display: grid;
      grid-template-rows: 115px 1fr;
      position: relative;
      padding-bottom: 30px;
      .nav {
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        h1 {
          color: #722ed1;
        }
        .chapter {
          span {
            padding: 5px 10px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid white;
            cursor: pointer;
            color: white;
            & + span {
              margin-left: 15px;
            }
            &:hover {
              color: #722ed1;
              border: 1px solid #722ed1;
              transition: all 0.5s;
            }
          }
        }
      }
      .icons {
        position: absolute;
        right: 10px;
        top: 10px;
        display: flex;
        flex-direction: column;
        span {
          display: inline-flex;
          height: 50px;
          width: 50px;
          background: #f9f0ff;
          border-radius: 50%;
          font-size: 26px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #120338;
          & + span {
            margin-top: 15px;
          }
          &:hover {
            color: #722ed1;
            transform: scale(1.2);
            transition: all 0.5s;
          }
        }
      }
      iframe {
        height: 100%;
        width: 100%;
        border: none;
      }
    }
    .code-container {
      flex: 1;
      height: 100vh;
      .codemirror {
        height: 100%;
        overflow: auto;
      }
    }
  }
</style>
