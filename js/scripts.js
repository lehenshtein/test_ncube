window.addEventListener('load', function(){
    
    if(document.querySelector('.help-button')) {
         var plusBtn = document.querySelector('.help-button'),
       firstCard = document.querySelector('.card'),
       showBlock = document.querySelector('.read-more'),
       secondCard = document.querySelector('.card-info'),
       close = document.querySelector('.close');
    
    
        plusBtn.onclick = function(){
            firstCard.classList.toggle('active');
        }

        showBlock.onclick = function(){
            secondCard.classList.add('active');
        }
        close.onclick = function(){
            secondCard.classList.remove('active');
        }
    }

});