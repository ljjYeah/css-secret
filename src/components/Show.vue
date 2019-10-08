<template>
  <iframe :srcdoc="examples[currentIndex].html"></iframe>
</template>

<script>
	export default {
		name: 'show',
		props: ['examples', 'currentIndex'],
	}
</script>

<style lang="less" scoped>
  iframe{
    height: 100%;
    width: 100%;
    border: none;
  }
</style>
