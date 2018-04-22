/*
* 通过js对dom节点的操作;查找、增加、删除、更改
* */
var users=document.getElementById('users');
//增加人员
var ul = users.getElementsByTagName('ul')[0];
var li = document.createElement ("li");
li.className = 'user';
ul.insertBefore(li, ul.firstChild);
var img = document.createElement ("img");
img.src = 'images/4.jpg';
li.appendChild(img);
var a = document.createElement ("a");
a.innerText = "lifeng";
a.href = '/user/4';
li.appendChild(a);
//删除
var user2 = users.getElementsByClassName('user')[1];
user2.parentNode.removeChild(user2);
var title = document.getElementsByTagName('h2')[0];
// users.removeChild(title);

//读取人数

var li=users.getElementsByClassName('user');
var h2 = users.getElementsByTagName('h2')[0];
h2.innerText=li.length+h2.textContent;

