function onku() 
{ 
//获得input输入框的内容 
var shuru = document.getElementById('ccdd').value; 
var object = document.getElementsByTagName('select'); 
var obj = object[0]; 
//如果输入的内容为空，所有的选项都匹配 
if(shuru!= '') 
{ 
//alert(shuru); 
//获得option中的所有内容 
var allText = getSelectText(); 
//alert(allText); 
// 每个option的内容分割开来 
var eachOptin = new Array(); 
eachOptin=allText.split(","); //字符分割 
var f = 1; 
for (i=1;i<eachOptin.length-1 ;i++ ) 
{ 
//alert(eachOptin[i]); 
//如果option内容中有输入的内容就返回第一次匹配的位置（大于等于0），如果没有匹配的就返回-1 
var flag = eachOptin[i].indexOf(shuru) ; 
if(flag >=0) 
{ 
//alert(i); 
//将index为f的option重新新增一遍，显示在最后 
obj.options.add(new Option(obj[i].innerText,obj[f].value)); 
//将编号为f的option重新赋值，赋值为符合条件的第一个option 
obj.options[f]=new Option(eachOptin[i],eachOptin[i]); 
//删除最初存在的符合条件的option 
obj.remove(i); 
f++; 
} 
} 
} 
} 
function getSelectText() 
{ 
//获得所有select标签 
var object = document.getElementsByTagName('select'); 
//因为该html中只有一个select标签，所以就是name = "aabb"代表的标签 
var obj = object[0]; 
//alert(obj.length); 
//alert(obj[0]); 
//保存所有option 的值 
var allText; 
for(i=0;i<obj.length;i++) 
{ 
//alert(obj[i].index);//获得option的index编号 
//alert(obj[i].value);//获得option的value的值 
allText+= obj[i].innerText+','; //关键是通过option对象的innerText属性获取到选项文本 
} 
return allText; 
} 