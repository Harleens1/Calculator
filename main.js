
const buttons = document.querySelectorAll('button')

const display = document.getElementById('display')


buttons.forEach(function(button) {
  button.addEventListener('click', calculate)
})

function calculate(event){
  const clickedButton = event.target.value

  if(clickedButton === '='){
    if(display.value !== ''){
      display.value = eval(display.value)
    }
  }else if(clickedButton === 'C'){
      display.value = ''
  }else{
      display.value += clickedButton
  }
}
