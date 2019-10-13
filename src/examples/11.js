export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>菱形图片</title>
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
    }
  </style>
</head>
<body>
<div class="container">
  <div class="box box1"></div>
</div>
</body>
</html>

`