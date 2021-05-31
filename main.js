
const newGameId = document.getElementById('new-game');

newGameId.addEventListener('click', async () => {
  newGameId.disabled = true;
  // todo: 初期状態に戻す
  const shaffleCard = await dealCards();
  shaffleCard.then((value) => {
      console.log('then');
      newGameId.disabled = false;
      document.getElementById('player-1-score').textContent = 0;
      document.getElementById('player-2-score').textContent = 0;
      const children = document.getElementsByTagName('td');
      
      //console.log(children);
      for(let i=0; i<children.length; i++) {
        children[i].classList.add('card-back');
      }
     }
  )
})