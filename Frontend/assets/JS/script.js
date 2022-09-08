
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

//---------------------------------------------------------//

let back = document.getElementById("back");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
    back.style.display = "block";
  } else {
    back.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

//---------------------------------------------------------//

let count1=setInterval(counts1);
let count2=setInterval(counts2);
let count3=setInterval(counts3);
let upto1=0;
let upto2=0;
let upto3=0;
function counts1(){
    var count1= document.getElementById("count1");
    if(upto1<=606717943)
    {
        count1.innerHTML= (upto1+=303360);
    }
}
function counts2(){
    var count2= document.getElementById("count2");
    if(upto2<=6507525)
    {
        count2.innerHTML= (upto2+=3256);
    }
}
function counts3(){
    var count3= document.getElementById("count3");
    if(upto3<=583017357)
    {
        count3.innerHTML= (upto3+=291508);
    }
}

//--------------------------------------------------------//

        