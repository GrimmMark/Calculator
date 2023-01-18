let display = document.getElementById('display');

let arr1 = Array.from(document.getElementsByClassName('btn-operator'));

let arr2 = Array.from(document.getElementsByClassName('btn-number'));

let arr3 = Array.from(document.getElementsByClassName('btn-equal'));

let buttons = arr1.concat(arr2).concat(arr3);

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'x²':
        display.innerText += e.target.innerText;
        break;
      case 'C':
        display.innerText = '';
        break;
      case '=':
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = 'Error';
        }
        break;
      case 'del':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      default:
        display.innerText += e.target.innerText;
    }
  });
});
