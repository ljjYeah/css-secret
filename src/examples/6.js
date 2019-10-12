export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>复杂的背景图案</title>
  <style>
  	.container{
  		display: grid;
  		grid-template-columns: repeat(auto-fit, 300px);
  		grid-template-rows: repeat(auto-fit, 300px);
  		place-content: center center;
  		justify-items: center;
  		align-items: center;
  	}
    .box{
      width: 200px;
      height: 200px;
    }
    /*把多个渐变图案组合起来，制作桌布效果*/
    .box1{
    	background: #f9f0ff;
    	background-image: linear-gradient(90deg,rgba(146,84,222,0.5) 50%, transparent 0),
    										linear-gradient(rgba(146,84,222,0.5) 50%, transparent 0);
    	background-size: 30px 30px;
    }
    /*网格中每个格子的大小可以调整，而网格线条的粗细同时保持固定,这个时候就使用长度而不是百分比*/
    .box2{
    	background: #9254de;
    	background-image: linear-gradient(90deg,#f9f0ff 1px, transparent 0),
    										linear-gradient(#f9f0ff 1px, transparent 0);
    	background-size: 30px 30px;
    }
    .box3{
    	background: #9254de;
    	background-image:
	    linear-gradient(white 2px, transparent 0),
	    linear-gradient(90deg, white 2px, transparent 0),
	    linear-gradient(rgba(249,240,255,0.3) 1px,transparent 0),
	    linear-gradient(90deg, rgba(249,240,255,0.3) 1px,transparent 0);
			background-size: 75px 75px, 75px 75px,
	                 		 15px 15px, 15px 15px;
    }
    /*波点*/
    .box4{
    	background: #f9f0ff;
    	background-image: radial-gradient(#9254de 30%, transparent 0);
    	background-size: 30px 30px;
    }
    /*更加逼真的波点*/
     .box5{
	    background: #f9f0ff;
	    background-image: radial-gradient(#9254de 30%, transparent 0), radial-gradient(#9254de 30%, transparent 0);
	    background-size: 30px 30px;
	    background-position: 0 0, 15px 15px;
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
