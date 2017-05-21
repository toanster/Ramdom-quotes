const txtQuote = document.querySelector('.quote');
const txtAuthor = document.querySelector('.author');
const txtCitation = document.querySelector('.citation');
const txtYear = document.querySelector('.year');
const txtTags = document.querySelector('.tags');
const btnLoad = document.querySelector('#loadQuote');
const bgLoader = document.querySelector('.loader');
const arrColours = ['#27ae60','#2980b9','#d35400','#2c3e50','#8e44ad']

var numCurrent = -1;
var bgCurrent = -1;

function ranNum (){
  while (true) {
    var i = Math.floor(Math.random()*quotes.length);
    if (i!=numCurrent) {
      break;
    }
  }
  numCurrent = i;
  return i;
}

function getTags(id) {
  let i = '#'+quotes[id].tags[0];
  for (let y = 1; y < quotes[id].tags.length; y++) {
    i += ', #'+quotes[id].tags[y];
  }
  return i;
}

function ranBg(){
  while (true) {
    let ran = Math.floor(Math.random()*arrColours.length);
    let i = arrColours[ran];
    if (bgCurrent!=ran) {
      bgCurrent = ran;
      return i;
    }
  }

}
function reloadQuotes(){
  let i = ranNum();
  txtQuote.textContent = quotes[i].quote;
  txtAuthor.textContent = quotes[i].author;
  txtCitation.textContent = quotes[i].citation;
  txtYear.textContent = quotes[i].year;
  txtTags.textContent = getTags(i);
  document.body.style.background = ranBg();
  timeCount=0;
}

reloadQuotes();
btnLoad.addEventListener('click',reloadQuotes);
var timeCount= 0;
var bgTimer = setInterval(function(){
  bgLoader.style.width = timeCount+'%';
  if (timeCount>=100) {
    reloadQuotes();
  }
  timeCount+=.1;
},1);
