let startPoint = document.getElementById('start');
let increaseBtn = document.getElementById('incBtn');
let resetBtn = document.getElementById('resetBtn');
let decreaseBtn = document.getElementById('decBtn');
let message = document.getElementById('msg');

let count = 0;

increaseBtn.addEventListener('click', function () {
    count++;
     startPoint.textContent = count;
    startPoint.style.color = 'green';


    message.innerHTML = 'You are increasing 👍';
    message.style.color = 'green';
    message.style.paddingTop = '10px';
    message.style.fontSize = '30px';
})
startPoint.textContent = count;


decreaseBtn.addEventListener('click', function () {
    count--;
    startPoint.textContent = count;
    startPoint.style.color = 'red';


    message.innerHTML = 'You are decreasing 👎';
    message.style.color = 'red';
    message.style.paddingTop = '10px';
    message.style.fontSize = '30px';

    if (count < 0) {
    //   message.innerHTML = 'You can\'t go below 0';
      return;
    }

})

resetBtn.addEventListener('click', () => {
    count = 0
    startPoint.textContent = count;
    startPoint.style.color = 'burlywood';

    message.innerHTML = 'Reset Successful!';
    message.style.color = 'burlywood';
    message.style.paddingTop = '10px';
    message.style.fontSize = '30px';
})

let x = 0;
console.log(x++);
x = x + 1;
console.log(x);

let y = 0;
console.log(++y);
y = y + 1;
console.log(y);



