function onku() 
{ 
//���input���������� 
var shuru = document.getElementById('ccdd').value; 
var object = document.getElementsByTagName('select'); 
var obj = object[0]; 
//������������Ϊ�գ����е�ѡ�ƥ�� 
if(shuru!= '') 
{ 
//alert(shuru); 
//���option�е��������� 
var allText = getSelectText(); 
//alert(allText); 
// ÿ��option�����ݷָ�� 
var eachOptin = new Array(); 
eachOptin=allText.split(","); //�ַ��ָ� 
var f = 1; 
for (i=1;i<eachOptin.length-1 ;i++ ) 
{ 
//alert(eachOptin[i]); 
//���option����������������ݾͷ��ص�һ��ƥ���λ�ã����ڵ���0�������û��ƥ��ľͷ���-1 
var flag = eachOptin[i].indexOf(shuru) ; 
if(flag >=0) 
{ 
//alert(i); 
//��indexΪf��option��������һ�飬��ʾ����� 
obj.options.add(new Option(obj[i].innerText,obj[f].value)); 
//�����Ϊf��option���¸�ֵ����ֵΪ���������ĵ�һ��option 
obj.options[f]=new Option(eachOptin[i],eachOptin[i]); 
//ɾ��������ڵķ���������option 
obj.remove(i); 
f++; 
} 
} 
} 
} 
function getSelectText() 
{ 
//�������select��ǩ 
var object = document.getElementsByTagName('select'); 
//��Ϊ��html��ֻ��һ��select��ǩ�����Ծ���name = "aabb"����ı�ǩ 
var obj = object[0]; 
//alert(obj.length); 
//alert(obj[0]); 
//��������option ��ֵ 
var allText; 
for(i=0;i<obj.length;i++) 
{ 
//alert(obj[i].index);//���option��index��� 
//alert(obj[i].value);//���option��value��ֵ 
allText+= obj[i].innerText+','; //�ؼ���ͨ��option�����innerText���Ի�ȡ��ѡ���ı� 
} 
return allText; 
} 