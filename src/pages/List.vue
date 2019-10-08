<template>
  <ul class="container">
    <li
      v-for="(example, index) in examples"
      :key="`example-${index}`"
    >
      {{example.title}}
    </li>
  </ul>
</template>

<script>
	import example_1 from '../examples/1'
	import example_2_1 from '../examples/2-1'
	import example_2_2 from '../examples/2-2'
	import example_3 from '../examples/3'
	import example_4 from '../examples/4'
	import example_5 from '../examples/5'

	export default {
		name: 'list',
		data() {
			return {
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
    }
	}
</script>

<style lang="less" scoped>
  .container{
    height: 100vh;
    overflow: auto;
    box-sizing: border-box;
    padding: 20px;
    display: grid;
    justify-content: space-around;
    align-content: start;
    grid-row-gap: 20px;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-template-rows: repeat(auto-fill, 250px);
    align-items: center;
    justify-items: center;
    position: relative;
    &::after{
      content: ' ';
      position: absolute;
      height: 100%;
      width: 100%;
      background: url("https://liujuanjuan-resource.oss-cn-beijing.aliyuncs.com/css-secret-files/bg.jpg");
      background-size: cover;
      filter: blur(50px);
      z-index: -1;
    }
    li{
      list-style: none;
      cursor: pointer;
      height: 200px;
      width: 200px;
      background: white;
      border: 10px solid rgba(255,255,255,0.2);
      background-clip: padding-box;
      font-size: 30px;
      color: #636363;
      display: flex;
      border-radius: 50%;
      align-items: center;
      text-align: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 10px;
      &:hover{
        transform: scale(1.2);
        transition: transform 0.5s;
        color: #f92672;
      }
      /*border-bottom: 1px solid gainsboro;*/
      /*&.active, &:hover{*/
        /*color: #f92672;*/
        /*font-size: 20px;*/
      /*}*/
    }
  }
</style>
