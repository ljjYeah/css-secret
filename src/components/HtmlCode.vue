<template>
  <codemirror
    ref="codeContainer"
    v-model="examples[currentIndex].html"
    :options="options"
  />
</template>

<script>
	import { codemirror } from "vue-codemirror";
	import 'codemirror/lib/codemirror.css'
	import 'codemirror/mode/markdown/markdown'
	import 'codemirror/theme/monokai.css'

	export default {
		name: 'htmlCode',
		props: ['examples', 'currentIndex'],
		data() {
			return {
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
			codemirror() {
				return this.$refs.codeContainer.codemirror
			}
		},
    mounted() {
			this.init()
    },
    methods: {
			init() {
				this.codemirror.setSize('100%', '100%');
      }
    },
		components: {
			codemirror
		}
	}
</script>

<style lang="less" scoped>

</style>
