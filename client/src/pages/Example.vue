<template>
  <div class="container" v-if="dataHasGet">
    <section class="show">
      <div class="nav">
        <h1>{{example.current.title}}</h1>
        <div class="chapter">
          <span v-if="example.pre.id!=='-1'" @click="changeExample(example.pre.id)">
            上一章：{{example.pre.title}}
          </span>
          <span v-if="example.next.id!=='-1'" @click="changeExample(example.next.id)">
            下一章：{{example.next.title}}
          </span>
        </div>
      </div>
      <div class="icons">
        <span class="iconfont icon-home" @click="$router.push('/list')"></span>
        <span :class="`iconfont icon-${isShowCode ? 'show' : 'hide'}`" @click="toggleShow"></span>
        <!--<span class="iconfont icon-restart"></span>-->
      </div>
      <div class="iframe-container">
        <iframe :srcdoc="example.current.html"></iframe>
      </div>
    </section>
    <section class="code-container" v-if="isShowCode">
      <codemirror
        class="codemirror"
        ref="codeContainer"
        v-model="example.current.html"
        :options="options"
        @ready="cmReady"
      />
    </section>
  </div>
</template>

<script>
	import { codemirror } from "vue-codemirror";
	import 'codemirror/lib/codemirror.css'
	import 'codemirror/mode/htmlmixed/htmlmixed'
	import 'codemirror/theme/monokai.css'
	import 'codemirror/addon/hint/css-hint'
	import 'codemirror/addon/hint/html-hint'
	import { getInfoById } from '../service/index'

	export default {
		name: 'app',
		data() {
			return {
				isShowCode: false,
				dataHasGet: false,
				example: {},
				options: {
					mode: 'text/html',
					lineNumbers: true,
					styleActiveLine: true,
					theme: 'monokai',
					lineWrapping: true,
				}
			}
		},
		computed: {
			currentId() {
				return this.$route.params.id
			},
		},
		created() {
			this.getInfoById()
		},
		methods: {
			// 获取详情
			async getInfoById() {
				const resData = (await getInfoById({ id: this.currentId })).data;
				this.$set(this, 'example', resData);
				this.dataHasGet = true
			},
			cmReady() {
				this.$refs.codeContainer.codemirror.setSize('100%', '100%');
			},
			changeExample(id) {
				this.$router.push(`/example/${id}`);
				this.getInfoById();
				// this.isShowCode = false;
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
      grid-template-rows: 115px 1fr 30px;
      position: relative;
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
      .iframe-container {
        margin-top: 30px;
        iframe {
          height: 100%;
          width: 100%;
          border: none;
        }
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
