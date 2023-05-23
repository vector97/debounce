const input = document.createElement('input');
const text = document.createElement('p');

document.body.append(input);
document.body.append(text);

function debounce(func, timeout) {
  return function perform(...args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();

    if(previousCall && this.lastCall - previousCall <= timeout) {
      clearTimeout(this.lastCallTimer);
    }

    this.lastCallTimer = setTimeout(() => func(...args), timeout);
  }
}

function handleInput(e) {
  const {value} = e.target;
  text.textContent = value;
}

const debouncedHandle = debounce(handleInput, 300);

input.addEventListener('input', debouncedHandle);
