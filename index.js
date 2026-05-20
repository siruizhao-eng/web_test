// =========================
// Elden Ring Extra Controls
// =========================

// ESC 返回主页
document.addEventListener("keydown", function(event){

if(event.key==="Escape"){

if(typeof closeabout==="function"){
closeabout();
}

if(typeof closework==="function"){
closework();
}

if(typeof closecontact==="function"){
closecontact();
}

if(typeof closeprojects==="function"){
closeprojects();
}

}

});

// 点击空白退出
document.addEventListener("click", function(e){

const menu=
e.target.closest(
"#about,#work,#contact,#projects,#menu"
);

const containers=[

"about_container",

"work_container",

"contact_container",

"projects_container"

];

let inside=false;

containers.forEach(function(id){

let x=document.getElementById(id);

if(
x&&
x.contains(e.target)
){

inside=true;

}

});

if(!inside&&!menu){

if(typeof closeabout==="function"){
closeabout();
}

if(typeof closework==="function"){
closework();
}

if(typeof closecontact==="function"){
closecontact();
}

if(typeof closeprojects==="function"){
closeprojects();
}

}

});

// 浏览器后退退出页面
window.addEventListener(

"popstate",

function(){

if(typeof closeabout==="function"){
closeabout();
}

if(typeof closework==="function"){
closework();
}

if(typeof closecontact==="function"){
closecontact();
}

if(typeof closeprojects==="function"){
closeprojects();
}

}

);
