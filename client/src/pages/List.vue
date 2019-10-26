<template>
  <ul class="container">
    <li
      v-for="(example, id) in examples"
      :key="`example-${id}`"
      @click="lookExample(id)"
    >
      {{example.title}}
    </li>
  </ul>
</template>

<script>
	import { getList } from '../service/index'

	export default {
		name: 'list',
		data() {
			return {
				examples: {}
			}
		},
		created() {
			this.getList()
		},
		methods: {
			// 获取列表数据
			async getList() {
				this.examples = (await getList()).data.list
			},
			lookExample(id) {
				this.$router.push(`/example/${id}`)
			}
		}
	}
</script>

<style lang="less" scoped>
  .container {
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
    li {
      list-style: none;
      cursor: pointer;
      height: 200px;
      width: 200px;
      background: #f9f0ff;
      border: 10px solid rgba(255, 255, 255, 0.2);
      background-clip: padding-box;
      font-size: 26px;
      display: flex;
      border-radius: 50%;
      align-items: center;
      text-align: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 10px;
      color: #120338;
      &:hover {
        transform: scale(1.2) rotate(360deg);
        transition: transform 0.5s;
        color: #722ed1;
      }
    }
  }
</style>
