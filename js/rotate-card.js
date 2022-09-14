const cards = document.querySelector('.card');  
    
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventlistener('mousemove', 'startRotate');
    card.addEventlistener('mouseout', 'stopRotate');
};

function startRotate(event) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2;
    cardItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfHeight) / 5 + 'deg)';

}

function stopRotate(event) {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)';
}
