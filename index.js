var current = "";

window.onload = function () {

setTimeout(function () {

var load = document.getElementById("loading");

if(load){
load.style.opacity="0";

setTimeout(function () {

load.style.display="none";

},500);

}

},2000);

};

function hideAll(){

var arr=[

"about_container",

"work_container",

"contact_container",

"contact_container",

"projects_container"

];

for(let i=0;i<arr.length;i++){

var el=document.getElementById(arr[i]);

if(el){

el.style.display="none";

}

}

current="";

}

function openPage(id){

hideAll();

var page=document.getElementById(id);

if(page){

page.style.display="block";

current=id;

}

}

function showabout(){

openPage("about_container");

}

function showwork(){

openPage("work_container");

}

function showcontact(){

openPage("contact_container");

}

function showprojects(){

openPage("projects_container");

}

function closeabout(){

var x=document.getElementById("about_container");

if(x){

x.style.display="none";

}

current="";

}

function closework(){

var x=document.getElementById("work_container");

if(x){

x.style.display="none";

}

current="";

}

function closecontact(){

var x=document.getElementById("contact_container");

if(x){

x.style.display="none";

}

current="";

}

function closeprojects(){

var x=document.getElementById("projects_container");

if(x){

x.style.display="none";

}

current="";

}

document.addEventListener(

"keydown",

function(e){

if(e.key==="Escape"){

hideAll();

}

}

);

document.addEventListener(

"click",

function(e){

if(!current)return;

var container=

document.getElementById(current);

if(

container&&

container.style.display==="block"

){

if(

!container.contains(e.target)

&&

!e.target.closest(

"#about"

)

&&

!e.target.closest(

"#work"

)

&&

!e.target.closest(

"#contact"

)

&&

!e.target.closest(

"#projects"

)

&&

!e.target.closest(

"#menu"

)

){

hideAll();

}

}

}

);

window.addEventListener(

"popstate",

function(){

hideAll();

}

);

document.addEventListener(

"touchstart",

function(e){

if(!current)return;

var container=

document.getElementById(current);

if(

container&&

!container.contains(e.target)

){

hideAll();

}

}

);
