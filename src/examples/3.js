export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>灵活的背景定位</title>
  <style>
  	.container{
  		display: grid;
  		grid-template-columns: repeat(auto-fit, 300px);
  		justify-content: center;
  		justify-items: center;
  		grid-row-gap: 40px;
  	}
    .box{
      padding: 20px;
      width: 200px;
      height: 200px;
      background-color: #9254de;
      border: 10px solid rgba(146,84,222,0.44);
      background-image: url("https://liujuanjuan-resource.oss-cn-beijing.aliyuncs.com/css-secret-files/img.jpg");
      background-size: 50px 50px;
      background-repeat: no-repeat;
      box-sizing: border-box;
      background-clip: padding-box;
    }
    .extend{
      background-position: right 20px bottom 20px;
    }
    .percent{
      background-position: calc(100% - 20px) calc(100% - 20px);
    }
    .origin{
      background-position: right bottom;
      background-origin: content-box;
    }
  </style>
</head>
<body>
	<div class="container">
		<!--
  background-position的定位是根据左、上两边进行定位的，如果整个盒子的大小固定，没有影响，但是如果盒子不固定，但是背景图片需要固定在右下角20px的地方，需要使用右、下定位，针对任意边定位一些先进的浏览器可以支持
  -->
  <div class="box extend"></div>
  <!--
    针对上面的不足，可以使用calc进行优化
  -->
  <div class="box percent"></div>
  <!--很多场景下背景图片和内边距同宽，就可以使用position-origin,这样，内边距改变的时候也不用修改多处数据-->
  <div class="box origin"></div>
</div>
</body>
</html>

`
