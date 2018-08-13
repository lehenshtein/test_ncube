var plusBtn = document.querySelector('.help-button');
    var firstCard = document.querySelector('.card');
plusBtn.onclick = function(){
    firstCard.classList.toggle('active');
}

var showBlock = document.querySelector('.card__photos');
    var secondCard = document.querySelector('.card-info');
var close = document.querySelector('.close');
showBlock.onclick = function(){
    secondCard.classList.add('active');
}
close.onclick = function(){
    secondCard.classList.remove('active');
}