export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>多重边框</title>
  <style>
    .container{
  		display: grid;
  		grid-template-columns: repeat(2, 300px);
  		grid-template-rows: repeat(2, 300px);
  		justify-items: center;
  		align-items: center;
  		justify-content: center;
  		align-content: center;
  	}
  	.box{
      width: 200px;
      height: 200px;
      border: 10px solid #9254de;
      cursor: pointer;
      color: white;
      /*border-radius: 10px;*/
  	}
    .box-shadow {
      box-shadow: 0 0 0 10px #b37feb,
                  0 0 0 20px #d3adf7,
                  0 0 0 30px #efdbff;
    }

    .box-shadow-insert {
      box-shadow: 0 0 0 10px inset #b37feb,
                  0 0 0 20px inset #d3adf7,
                  0 0 0 35px inset #efdbff;
    }
    .outline-out{
      outline: 10px solid #b37feb;
    }
    .outline-insert{
      outline: 10px dashed #b37feb;
      outline-offset: -20px;
    }
  </style>
</head>
<body>
<div class="container">
<!--
使用box-shadow模拟边框需要注意：
1.box-shadow不占空间，需要使用外边距或者内边距来模拟所占的空间
2.如果做一个按钮，需要鼠标移入的效果，需要考虑insert
-->
<div class="box box-shadow">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque, eos explicabo hic
</div>
<div class="box box-shadow-insert">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque, eos explicabo hic
</div>
 <!--
  outline的优点是边框可以设置虚线，box-shadow就不能满足
  outline只支持双层边框的场景，因为outline不支持逗号隔开
  如果是在外层加边框，并且有圆角的情况，outline也是不支持
  -->
  <div class="box outline-out">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque, eos explicabo hic
</div>
  <div class="box outline-insert">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque, eos explicabo hic
</div>
</div>
</body>
</html>

`
