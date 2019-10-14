<template>
  <router-view/>
</template>

<script>
	export default {
		name: 'app',
	}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  body{
    height: 100vh;
    overflow: hidden;
    position: relative;
    user-select: none;
    &::after {
      content: ' ';
      top: 0;
      left: 0;
      position: absolute;
      height: 100%;
      width: 100%;
      background: url("https://liujuanjuan-resource.oss-cn-beijing.aliyuncs.com/css-secret-files/bg.jpeg");
      background-size: cover;
      filter: blur(50px);
      z-index: -1;
    }
  }
</style>
