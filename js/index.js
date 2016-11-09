$(function(){
	//head
	$(".fivex").hover(function(){
		var index=$(this).index();
		$(".hengxiang").css("display","none").eq(index).css("display","block");
		$(".yixian").css("display","none").eq(index).css("display","block");
	},function(){
		$(".hengxiang").css("display","none");
		$(".yixian").css("display","none");
	})
	//bannerleft xuanxiangka
	$("li",$(".bannerleft").eq(0)).hover(function(){
		var index=$(this).index();
		$(".cebian").css("display","none").eq(index).css("display","block");
	},function(){
		$(".cebian").css("display","none");
	})
	//banner
   var tB=setInterval(moveB,2000);
   var nowB=0;
   var nextB=0;
   var flagB=true;
   function moveB(){
    nextB=nowB+1;
    if(nextB>=$(".imgsbig").length){
      nextB=0;
    }
    $(".imgsbig").css({"display":"none",opacity:0.5}).eq(nextB).css({display:"block"}).animate({opacity:1},500,function(){flagB=true});
    $("b",$(".xuan10").eq(0)).css({"background":"#fff","height":"3px"}).eq(nextB).css({"background":"#C00","height":"5px"});
    $(".heng",$(".xuan10").eq(0)).next(".posint").css("display","block").end().eq(nextB).siblings(".posint").css("display","none");
    nowB=nextB;
   }
   $(".bannermiddle").eq(0).hover(function(){
        $(".leftbtn").eq(0).css({display:"block"});
        $(".rightbtn").eq(0).css({display:"block"});
        clearInterval(tB);
   },
     function(){
        $(".leftbtn").eq(0).css({display:"none"});
        $(".rightbtn").eq(0).css({display:"none"});
        tB=setInterval(moveB,2000);
     }  
   )
    $(".rightbtn").eq(0).click(function(){
           if(flagB){
            moveB();
           }
           flagB=false;
    })
     $(".leftbtn").eq(0).click(function(){
           if(flagB){
            nextB=nowB-1;
            if(nextB<0){
              nextB=$(".imgsbig").length-1;
            }
            $(".imgsbig").css({"display":"none",opacity:0.5}).eq(nextB).css({display:"block"}).animate({opacity:1},500,function(){flagB=true});
		    $("b",$(".xuan10").eq(0)).css({"background":"#fff","height":"3px"}).eq(nextB).css({"background":"#C00","height":"5px"});
		    $(".heng",$(".xuan10").eq(0)).next(".posint").css("display","block").end().eq(nextB).siblings(".posint").css("display","none");
            nowB=nextB;
           }
           flagB=false;
    })
     for(var i=0;i<$(".posint").length;i++){
                $(".posint").eq(i).data("pp",i);
      }
     $(".posint").hover(function(){
         	var index=$(this).data("pp");
         	$(".posint").css("display","block").eq(index).css("display","none");
     })
      for(var i=0;i<$(".heng",$(".xuan10").eq(0)).length;i++){
                $(".heng",$(".xuan10").eq(0)).eq(i).data("nn",i);
      }
    $(".heng",$(".xuan10").eq(0)).hover(function(){
          var index=$(this).data("nn");
          console.log(index)
          if(nowB<index){
              $(".imgsbig").css({"display":"none",opacity:0.5}).eq(index).css({display:"block"}).animate({opacity:1},500,function(){flagB=true});
    			    $("b",$(".xuan10").eq(0)).css({"background":"#fff","height":"3px"}).eq(index).css({"background":"#C00","height":"5px"});
    			    $(".heng",$(".xuan10").eq(0)).next(".posint").css("display","block").end().eq(index).siblings(".posint").css("display","none");
          }else if(nowB>index){
            $(".imgsbig").css({"display":"none",opacity:0.5}).eq(index).css({display:"block"}).animate({opacity:1},500,function(){flagB=true});
    		    $("b",$(".xuan10").eq(0)).css({"background":"#fff","height":"3px"}).eq(index).css({"background":"#C00","height":"5px"});
    		    $(".heng",$(".xuan10").eq(0)).next(".posint").css("display","block").end().eq(index).siblings(".posint").css("display","none");
          }
          nowB=index;
          nextB=index;
     })
	//littleimages
	var timeT=setInterval(movet,2000);
	var widthT=$(".imgslittle").eq(0).width();
	var now=0;
	var next=0;
	   function movet(){
           next=now+1;
           if(next>=$(".imgslittle").length){
            next=0;
           }
           $(".imgslittle").eq(next).css({"top":widthT}).end().eq(now).animate({"top":-widthT},1500).end().eq(next).animate({"top":0},1500,function(){flag=true});
           now=next;
        }
  //small lunbo
  for(var i=0;i<$(".smalllunbo").length;i++){
		var imgsf12R=$(".imgs",$(".smalllunbo").eq(i))
       var leftf12R=$(".lefttbtn",$(".smalllunbo").eq(i))
       var rightf12R=$(".rightbtn",$(".smalllunbo").eq(i))
       var bottomf12R=$("ul",$(".smalllunbo").eq(i))
       var imgbox12R=$(".smalllunbo").eq(i)
       lunbo(imgbox12R,imgsf12R,leftf12R,rightf12R,bottomf12R)
  }
  function lunbo(imgbox,imgs,left,right,ul){
        var li=ul.eq(0).children("li");
         var now=0;
        var next=0;
        var time=setInterval(move,2000);
        var flag=true;
        var width=imgs.eq(0).width();
        function move(){
           next=now+1;
           if(next>=imgs.length){
            next=0;
           }
           imgs.eq(next).css({"left":width}).end().eq(now).animate({"left":-width},500).end().eq(next).animate({"left":0},500,function(){flag=true});
           li.css({"background":"#3e3e3e"}).eq(next).css({"background":"#b61b1f"});
           now=next;
        }
        imgbox.hover(function(){
            left.eq(0).css("display","block");
            right.eq(0).css("display","block");
            clearInterval(time);
        },function(){
            left.eq(0).css("display","none");
            right.eq(0).css("display","none");
            time=setInterval(move,2000);
        })
           right.eq(0).click(function(){
             if(flag){
              move();
             }
             flag=false;
           })
           left.eq(0).click(function(){
             if(flag){
              next=now-1;
               if(next<0){
                next=imgs.length-1;
               }
               imgs.eq(next).css({"left":-width}).end().eq(now).animate({"left":width},500).end().eq(next).animate({"left":0},500,function(){flag=true});
               li.css({"background":"#3e3e3e"}).eq(now).css({"background":"#b61b1f"});
               now=next;
                 }
             flag=false;
           })
           li.hover(function(){
              var index=$(this).index();
              if(now<index){
                 if(flag){
                  imgs.eq(index).css({"left":width}).end().eq(now).animate({"left":-width},500).end().eq(index).animate({"left":0},500,function(){flag=true});
                  li.css({"background":"#3e3e3e"}).eq(index).css({"background":"#b61b1f"});
                }
                 flag=false;
              }else if(now>index){
                 if(flag){
                  imgs.eq(index).css({"left":-width}).end().eq(now).animate({"left":width},500).end().eq(index).animate({"left":0},500,function(){flag=true});
                  li.css({"background":"#3e3e3e"}).eq(index).css({"background":"#b61b1f"});
                  }
                 flag=false;
              }
              now=index;
              next=index;
           })
      };
  //floor xuanka
  
   $(".rightbox").hover(function(){
             $(".rightbox>.smallbtn").css("display","block");
   },function(){
            $(".rightbox>.smallbtn").css("display","none");
   })
   for(var i=0;i<$(".rightbox").length;i++){
   	var rightbox=$(".rightbox").eq(i);
   	var ftop=$(".ftop").eq(i);
   	xlunbo(rightbox,ftop)
   }
   function xlunbo(rightbox,ftop){
	   	var now=0;
	    var next=0;
	    function move(){
	   	  next=now+1;
	   	  if(next>=$(".xuanxiang2",rightbox).length){
	           next=0;
	   	  }
	   	  $(".xuanxiang2",rightbox).css("display","none").eq(next).css("display","block");
	   	  $("ul li",ftop).css({"background":"#fff"}).eq(next).css({"background":"#333"});
	   	  $("ul li a",ftop).css({"color":"#333"}).eq(next).css({"color":"#fff"});
	   	  now=next;
	   }
	   $(".smallbtn:first",rightbox).click(function(){
	        move();
	   })
	  $("ul li",ftop).hover(function(){
	   	 var index=$(this).index();
	   	 $(".xuanxiang2",rightbox).css("display","none").eq(index).css("display","block");
	   	  $("ul li",ftop).css({"background":"#fff"}).eq(index).css({"background":"#333"});
	   	  $("ul li a",ftop).css({"color":"#333"}).eq(index).css({"color":"#fff"});
	   })
   }
   
//楼层跳转
    //jq
        var floorFirst=$(".floor").eq(0).offset().top;
        $(window).scroll(function(){
            var top=$(document).scrollTop();
            if(top>floorFirst-500){
               $(".tiaozhuan").eq(0).css({"display":"block"});
            }else if(top<floorFirst-500){
                $(".tiaozhuan").eq(0).css({"display":"none"})
            }
            for(var i=0;i<$(".floor").length;i++){
               if(top>$(".floor").eq(i).offset().top-500){
                   $("li p",$(".tiaozhuan").eq(0)).css("color","#5e5e5e").eq(i).css("color","#e3101e");
                   $("li a",$(".tiaozhuan").eq(0)).css("color","#5e5e5e").eq(i).css("color","#e3101e");
                   $(".sanjiao").css({"border-top": "5px solid #fff","border-left": "5px solid #fff"}).eq(i).css({"border-top": "5px solid red","border-left": "5px solid red"})
                }
            }
            for(var i=0;i<$(".tiao").length;i++){
                $(".tiao").hover(function(){
                     $("li p",$(".tiaozhuan").eq(0)).eq($(this).index()-1).css("color","#e3101e");
                     $("li a",$(".tiaozhuan").eq(0)).eq($(this).index()-1).css("color","#e3101e");
                   	 $(".sanjiao").css({"border-top": "5px solid #fff","border-left": "5px solid #fff"}).eq($(this).index()-1).css({"border-top": "5px solid red","border-left": "5px solid red"})

                },function(){
                     $("li p",$(".tiaozhuan").eq(0)).eq($(this).index()-1).css("color","#5e5e5e");
                     $("li a",$(".tiaozhuan").eq(0)).eq($(this).index()-1).css("color","#5e5e5e");                     
                })
            } 
          })
              $(".tiao").click(function(){
                    var index=$(this).index();
                   $(document.body).animate({scrollTop:$(".floor").eq(index-1).offset().top})
                   $(".sanjiao").css({"border-top": "5px solid #fff","border-left": "5px solid #fff"}).eq(index-1).css({"border-top": "5px solid red","border-left": "5px solid red"})
                   $("li p",$(".tiaozhuan").eq(0)).css("color","#5e5e5e").eq($(this).index()-1).css("color","#e3101e");
                   $("li a",$(".tiaozhuan").eq(0)).css("color","#5e5e5e").eq($(this).index()-1).css("color","#e3101e");
              })
  //yincang
   $(".threefather:first").hover(function(){
          $(".threep:first").animate({left:-72},500);
          $(".sizhi:eq(0)").css("display","block");
   },function(){
          $(".threep:first").animate({left:0},500);
          $(".sizhi:eq(0)").css("display","none");
   })

    $(".bottomfix:first li:first").hover(function(){
          $(".yidong:first").animate({left:-140},500);
          $(".zuosanj:first").css("display","block");
   },
   function(){
          $(".yidong:first").animate({left:0},500);
          $(".zuosanj:first").css("display","none");
   })
//lazyload
 $(".lazy").lazyload(function(){
       effect:"fadeIn";
 })
});