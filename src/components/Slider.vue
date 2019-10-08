<template>
  <ul class="slider">
    <li
      v-for="(example, index) in examples"
      :key="`example-${index}`"
      :class="{'active': currentIndex === index}"
      @click="$emit('changeCurrentIndex', index)"
    >
      {{example.title}}
    </li>
  </ul>
</template>

<script>
	export default {
		name: 'slider',
    props: ['examples', 'currentIndex'],
	}
</script>

<style lang="less" scoped>
  .slider{
    border-right: 1px solid gainsboro;
    li{
      cursor: pointer;
      height: 50px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid gainsboro;
      &.active, &:hover{
        color: #f92672;
        font-size: 20px;
      }
    }
  }
</style>
