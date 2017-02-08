var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.clockwise {-webkit-animation: clockwiseSpin 10s infinite linear; animation: clockwiseSpin 100s infinite linear; font-size:50px;} @-webkit-keyframes clockwiseSpin { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg)} 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); font-size:90px;}}';
document.getElementsByTagName('head')[0].appendChild(style);


var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '@-webkit-keyframes clockwiseSpin { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg)} 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg);}}';
document.getElementsByTagName('head')[0].appendChild(style);


var links = document.querySelectorAll('a');
for (i=0; i < links.length; i++){
links[i].className = 'clockwise' ;
}

var imgH = document.createElement('img');
imgH.setAttribute('src', 'http://www.gifsdahora.com.br/gifs_animados/gifs/01Animais//pinguim_44.gif');
imgH.style.position = 'absolute';
imgH.style.top = '500px';
imgH.style.left= '50%';
imgH.style.zIndez = '100';
imgH.style.width = '1000px';
document.getElementsByTagName('body')[0].appendChild(imgH);
﻿
var img2 = document.createElement('img');
img2.setAttribute('src', 'http://tobystereo.com/wp-content/uploads/2014/05/VVBatchExportergiphy_dog.gif');
img2.style.position = 'absolute';
img2.style.top = '400px';
img2.style.left= '3%';
img2.style.zIndez = '100';
img2.style.width = '500px';
document.getElementsByTagName('body')[0].appendChild(img2);


var img3 = document.createElement('img');
img3.setAttribute('src', 'https://media.giphy.com/media/jWexOOlYe241y/giphy.gif');
img3.style.position = 'absolute';
img3.style.top = '200px';
img3.style.left= '40%';
img3.style.zIndez = '100';
img3.style.width = '500px';
document.getElementsByTagName('body')[0].appendChild(img3);
﻿
