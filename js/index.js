var button_audio=new Audio("http://www.monoame.com/awi_class/ballsound/click14.wav");


$(".i5").click(function(){
$(".phone").css("width","");
   $(".screen").css("height","");
  $(".phonename").html("iphone5");
  button_audio.play();//產生聲音
});

$(".i5s").click(function(){
$(".phone").css("width","250px");
  $(".screen").css("height","400px");//注意scerrn,phone的差別
  $(".phonename").text($(this).text());
  //等於$(phonename").html("iphone5s");
  button_audio.play();
});

$(".i6").click(function(){
$(".phone").css("width","270px");
  $(".screen").css("height","420px");//注意scerrn,phone的差別
  $(".phonename").html("iphone6");
  button_audio.play();
});

$(".i6s").click(function(){
$(".phone").css("width","300px");
  $(".screen").css("height","440px");//注意scerrn,phone的差別
  $(".phonename").text($(this).text());
  button_audio.play();
});
var page=0;
var right
var screen_audio=new Audio("http://www.monoame.com/awi_class/ballsound/click18.wav");

$(".screenright").click(function(){
    
  //相對定位   
  if(page!=2){
  screen_audio.play();
    }
  page=page+1;
  if(page>2)   {page=2}
   $(".pages").css("left","-"+page*100+"%")
});
$(".screenleft").click(function(){
    
  //相對定位
  if(page!=0)
    {
  screen_audio.play();
    }
  page=page-1; 
  if(page<0)     {page=0}
   $(".pages").css("left","-"+page*100+"%")
   
});

var square_audio=new 
Audio("http://www.monoame.com/awi_class/ballsound/click23.wav");

$(".square").click(function(){
  if(page!=0)
    {
  square_audio.play();
     }
  page=0;
  $(".pages").css("left","0%")
    });
var thedeg=0;
$(".turn").click(function(){
  thedeg+=90
  $(".phone").css("transform","rotate("+ thedeg+"deg)");
});

var wiggle_audio=new 
Audio("http://www.monoame.com/awi_class/ballsound/phonevi.mp3");



var wiggletime=11;
$(".wiggle").click(function(){
 wiggletime=0;
});
setInterval(function(){
  if(wiggletime<=10){
  wiggletime+=1;
  wiggle_audio.play();
  if(wiggletime%2==0){
    $(".phone").css("left","-30px");//給初始值
  }else{
    $(".phone").css("left","30px");
  }
    if(wiggletime==11){
       $(".phone").css("left","");
    }
  }
},60);