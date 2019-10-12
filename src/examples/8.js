export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>连续的图像边框</title>
  <style>
  	.container{
  		display: grid;
  		grid-template-columns: repeat(auto-fit, 300px);
  		justify-content: center;
  		justify-items: center;
  		grid-row-gap: 40px;
  	}
    .box{
      width: 200px;
      height: 200px;
      padding: 10px;
    	border: 10px solid transparent;
    }
    /*原背景图片*/
    .box1{
    	background: url("https://liujuanjuan-resource.oss-cn-beijing.aliyuncs.com/css-secret-files/stone.jpg");
      background-size: cover;
       background-origin: border-box;
    }
    .box2{
    	background: linear-gradient(white,white), url("https://liujuanjuan-resource.oss-cn-beijing.aliyuncs.com/css-secret-files/stone.jpg");
      background-size: cover;
      background-clip: padding-box, border-box;
      /*background-origin的默认值为padding-box*/
      background-origin: border-box;
    }
    /*这个写法是box2的简写*/
    .box3{
    	background: linear-gradient(white,white) padding-box, url("https://liujuanjuan-resource.oss-cn-beijing.aliyuncs.com/css-secret-files/stone.jpg") border-box 0/cover;
    }
    /*实现老式信封的效果*/
    .box4{
    	background: linear-gradient(white, white) padding-box,
            repeating-linear-gradient(
            -45deg,
            red 0,
            red 12.5%,
            transparent 0,
            transparent 25%,
            #58a 0,
            #58a 37.5%,
            transparent 0,
            transparent 50%) 0 / 80px 80px;
    }
    /*蚂蚁行军边框是一种虚线边框，看起在不断转动，就好像排队前进的蚂蚁一样*/
    @keyframes ants {
    	to {
    		background-position: 100%
    	}
    }
    .box5{
			border: 1px solid transparent;
			background:
        linear-gradient(white, white) padding-box,
        repeating-linear-gradient(-45deg,
          black 0, black 25%, white 0, white 50%
        ) 0 / 10px 10px;
			animation: ants 12s linear infinite;
    }
  </style>
</head>
<body>
<div class="container">
<div class="box box1"></div>
<div class="box box2"></div>
<div class="box box3"></div>
<div class="box box4"></div>
<div class="box box5"></div>
</div>
</body>
</html>

`
