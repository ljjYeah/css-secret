export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>边框内圆角</title>
  <style>
  	.container{
  		display: grid;
  		grid-template-columns: repeat(auto-fit, 300px);
  		grid-template-rows: repeat(auto-fit, 300px);
  		justify-items: center;
  		align-items: center;
  		justify-content: center;
  		align-content: center;
  	}
    .box{
      height: 200px;
      width: 200px;
      background: #9254de;
      border-radius: 10px;
      outline: 10px solid #b37feb;
      box-shadow: 0 0 0 10px #b37feb;
    }
  </style>
</head>
<body>
<div class="container">
	<!--实现边框内圆角，使用两个元素很容易实现，但是如果想用一个元素来实现，可以使用outline+box-shadow来实现-->
<div class="box"></div>
</div>
</body>
</html>

`
