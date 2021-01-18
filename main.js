/*$(document).ready (function(){

})
$("button").click(function(){
$("h2").css ("color","blue");
})
$("button").dblclick(function(){
$("h2").fadeout("fast",function() { $ ("span").fadein(1000)})

$("button").mouseenter(function(){
   $(this).css ("color","red");
});
})
$("button").mouseleave(function(){
   $(this).css ("color","orange");
})
$("h2").hover(function(){
   $("button").css ("color","yellow");
});
$(document).ready (function(){

   $(".box").click( function(){

$(".open").slideToggle(3000, function() { $("button").hide();  });
   
});
});*/
$(document).ready (function(){
   $(".open").animate({
      left:'36%',
width:'340px',
height:'350px',
borderRedius:'21px'
 },450);
});


$("button").click(function(){
  $(this).animate({
opacity:'0,7',
padding:'12px',
  backgroundColor:'rgb(86, 123, 138)',},450);
});
$("button").mouseenter(function(){
   $(this).css ("color","black");
});

$("button").mouseleave(function(){
   $(this).css ("color","cornflowerblue");
})