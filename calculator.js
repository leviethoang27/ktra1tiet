
const resultInput = document.getElementById('result');
function appendToResult(char) {
  resultInput.value += char;
}

function clearResult() {
  resultInput.value = '';
}

function calculate() {
  try {
    const result = eval(resultInput.value);
    resultInput.value = result;
  } catch (error) {
    resultInput.value = 'Error';
  }
}
