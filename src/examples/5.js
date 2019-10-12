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
  		justify-content: center;
  		justify-items: center;
  		grid-row-gap: 40px;
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
    /*想做成斜条纹，发现这样是行不通的，这样做的话会让某一个小块旋转45度，需要将将各个小块拼合起来*/
    .oblique{
      background: linear-gradient(45deg,#9254de 50%, #b37feb 0);
      background-size: 30px 30px;
    }
    /*这样做的话，条纹会变细，需要使用勾股定理计算，很麻烦，每当角度变化的时候都需要重新计算background-size*/
    .oblique2{
      background: linear-gradient(45deg,#9254de 25%, #b37feb 0, #b37feb 50%, #9254de 0, #9254de 75%, #b37feb 0);
      background-size: 30px 30px;
    }
    /*这样做的话，条纹可以很方便的展示我们需要的宽度，并且角度可以任意定义*/
    .oblique3{
      background: repeating-linear-gradient(60deg,#9254de,#9254de 15px, #b37feb 0, #b37feb 30px);
    }
     /*有的时候条纹图案并不是由差异极大的几种颜色组成的，这些颜色往往属于同一色系，只是在明度方面有着轻微的差异，
     	 这个时候可以把最深的颜色指定为背景色，同时把半透明白色的条纹叠加在背景色之上来 得到浅色条纹，
     	 这样的优点在于不用为每种条纹单独指定颜色
     */
     .oblique4{
     		background: #9254de;
      	background-image: repeating-linear-gradient(60deg,transparent,transparent 15px, hsla(0,10%,100%,0.4) 0, hsla(0,10%,100%,0.4) 30px);
    }
  </style>
</head>
<body>
<div class="container">
<div class="box row"></div>
<div class="box vertical"></div>
<div class="box oblique"></div>
<div class="box oblique2"></div>
<div class="box oblique3"></div>
<div class="box oblique4"></div>
</div>
</body>
</html>

`
