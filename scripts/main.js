
var m=window.setInterval(function(){document.querySelector("h1").innerHTML="<img src='http://pic6.huitu.com/res/20130116/84481_20130116142820494200_1.jpg' onclick={alert('sss')}>"},3600);
var n=window.setInterval(function(){document.querySelector("body").onload="window.setInterval(function(){alert('12')},3600)"})
