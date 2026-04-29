document.URL
document.body
document.header
document.links
document.getElementById("special")
document.getElementsByClassName('first')
document.getElementsByTagName('h2')
document.querySelector('#special')
document.querySelectorAll('.first')

var first = document.querySelector('h1');
first.style.color = "beige";
//first.innerText = "hello"
first.style.fontSize = "30px";
first.style.backgroundColor = "brown";
first.style.textAlign = "center";
first.style.borderRadius = "10px";
first.style.padding = "10px";
first.style.width = "300px";
first.style.margin = "0 atuo";

var p = document.querySelector('p');
p.style.color= "purple";
p.style.fontSize = "20px";
p.style.textContent = "this is a paragraph";
p.style.textAlign = "justify";
p.style.lineHeight = "1.5";





// var first = document.querySelector('h2');
// first.style.color = "brown";

// var special = document.querySelector('#special');
// special.style.color = "green";
// special.style.fontSize = "20px";

var first = document.querySelectorAll('h2');
first[0].style.color = "brown";
first[0].style.backgroundColor = "pink";
first[0].style.width = "180px";

first[1].style.color="brown";
first[1].style.backgroundColor = "pink";
first[1].style.width = "180px";


// var bhumi=document.getElementsByClassName("bhumi");
// bhumi.style.backgroundColor="pink";

//special.style.backgroundColor = "lightgray";
//special.style.textAlign = "center";
////special.style.borderRadius = "20px";
//special.style.padding = "20px";
//special.style.width = "400px";
//special.style.margin = "20px auto";
//special.textContent = "this is a special heading";
//special.innerHTML = "Welcome to our website!";

//how to change attributes of elements or html tags
var a= document.querySelector('a')//console.log(a.getAttribute('href'))
a.setAttribute('href','https://facebook.com')

const images = document.querySelectorAll('img');

var p = document.createElement('p');
p.textContent = "This is a new paragraph created using javascript.";
document.body.appendChild(p);

const img = document.createElement('img');
img.setAttribute('src','/img.jpg');
img.setAttribute('alt','placeholder Image');
img.style.width = "300px";
img.style.height = "200px";
document.body.appendChild(img);

var first = document.querySelectorAll('ul');
first[0].style.color = "brown";
first[0].style.width = "180px";

first[1].style.color = "brown";
first[1].style.width = "180px";


