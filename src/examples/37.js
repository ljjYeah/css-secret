export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <style>
    table{
      margin-top: 20px;
      width: 500px;
      border: 1px solid black;
    }
    table.special{
      table-layout: fixed;
    }
  </style>
</head>
<body>
<!--
 table-layout：它的默认值是 auto，其行为模式被称作自动表格布局算法，也就是我们最为熟悉的表格布局行为。
 不过，它还接受另外一个值 fixed，这个值的行为要明显可控一些。

 这种固定表格布局算法不仅更容易预测、便于使用，同时也明显更快。
 因为表格的内容并不会影响单元格的宽度，所以在页面的下载过程中，表格 不需要频繁重绘。
-->
<table>
  <tr>
    <th>Lorem ipsum dolor sit amet</th>
    <th>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi fugit in repellendus sapiente, tenetur?</th>
  </tr>
</table>
<table class="special">
  <tr>
    <th>Lorem ipsum dolor sit amet</th>
    <th>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi fugit in repellendus sapiente, tenetur?</th>
  </tr>
</table>
</body>
</html>
`
