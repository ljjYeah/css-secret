<template>
  <div class="app">
    <slider
      :examples="examples"
      :currentIndex="currentIndex"
      @changeCurrentIndex="changeCurrentIndex"
    />
    <show
      :examples="examples"
      :currentIndex="currentIndex"
    />
    <html-code
      :examples="examples"
      :currentIndex="currentIndex"
    />
  </div>
</template>

<script>
	import Slider from '../components/Slider'
	import Show from '../components/Show'
	import HtmlCode from '../components/HtmlCode'

	import example_1 from '../examples/1'
	import example_2_1 from '../examples/2-1'
	import example_2_2 from '../examples/2-2'
	import example_3 from '../examples/3'
	import example_4 from '../examples/4'
	import example_5 from '../examples/5'

	export default {
		name: 'app',
		data() {
			return {
				currentIndex: 0,
				examples: [
					{
						title: '半透明背景',
						html: example_1
					},
					{
						title: '多重边框1',
						html: example_2_1
					},
					{
						title: '多重边框2',
						html: example_2_2
					},
					{
						title: '灵活的背景定位',
						html: example_3
					},
					{
						title: '边框内圆角',
						html: example_4
					},
					{
						title: '条纹背景',
						html: example_5
					}
				]
			}
		},
		methods: {
			changeCurrentIndex(index) {
				if (index === this.currentIndex) return;
				this.currentIndex = index
			}
		},
		components: {
			Slider,
			Show,
			HtmlCode,
		}
	}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .app {
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
  }
</style>
