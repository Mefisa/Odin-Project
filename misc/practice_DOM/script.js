const container = document.querySelector('.content')

const pTagRed = document.createElement('p');
pTagRed.textContent = 'Hey I\'m red!'
pTagRed.style.color = 'red'

container.appendChild(pTagRed);


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("hello!");    
});
btn.addEventListener('click', (e) => {
  e.target.style.background = 'red';
});

