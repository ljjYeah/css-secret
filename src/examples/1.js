export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>半透明背景</title>
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
      color: white;
      height:200px;
      width: 200px;
      background-color: #9254de;
      border: 10px solid rgba(146,84,222,0.44);
    }
    .box-special{
      background-clip: content-box;
    }
  </style>
</head>
<body>
<div class="container">
	<div class="box">
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque, eos explicabo hic
</div>
	<div class="box box-special">
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque, eos explicabo hic
</div>
</div>
</body>
</html>

`
