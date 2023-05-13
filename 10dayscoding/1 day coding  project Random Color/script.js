var r,g,b,cstring;
function colapply(){
color();
r=newcolor.slice(1,3);
g=newcolor.slice(3,5);
b=newcolor.slice(5,7);
r=parseInt(r,16);
g=parseInt(g,16);
b=parseInt(b,16);
cstring="rgb("+r+","+g+","+b+")";
$(".col").html("<"+"div class="+"'"+"dot"+"'"+">"+"<"+"/"+"div"+">"+newcolor+"<span class='rgb'>"+cstring+"</span>");
$("body").css({
"background":newcolor
});
$(".col").css({
"color":newcolor
});

$(".dot").css({
"background":cstring
});
}
var newcolor;
function color(){
newcolor="#"+(Math.random()*0xFFFFFF<<0).toString(16);
if(newcolor.length<7){
color();
}
}
$(".col").click(colapply);
colapply();
 