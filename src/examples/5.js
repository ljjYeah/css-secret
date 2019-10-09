export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>条纹背景</title>
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
      width: 200px;
      height: 200px;
    }
    .row{
      /*如果把第二个色标的位置值设置为 0，那它的位置就总是会被浏览器调整为前一个色标的位置值*/
      background: linear-gradient(#9254de 33.3%, #b37feb 0, #b37feb 66.6%, #d3adf7 0);
      background-size: 100% 30px;
    }
    .vertical{
      background: linear-gradient(to right,#9254de 33.3%, #b37feb 0, #b37feb 66.6%, #d3adf7 0);
      background-size: 30px 100%;
    }
    /*想做成斜条纹，发现这样是行不通的*/
    .oblique{
      background: linear-gradient(45deg,#9254de 50%, #b37feb 0);
      background-size: 30px 30px;
    }
  </style>
</head>
<body>
<div class="container">
<div class="box row"></div>
<div class="box vertical"></div>
<div class="box oblique"></div>
<div class="box oblique2"></div>
</div>
</body>
</html>

`
