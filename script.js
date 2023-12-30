const font = document.querySelector('#font')
const size = document.querySelector('#size')
const textArea = document.querySelector('.textarea')
const color = document.querySelector('#color')
const undoBtn = document.querySelector('#undo')
const redoBtn = document.querySelector('#redo')


const fontOptions = [
    'Arial',
    'Helvetica',
    'Times New Roman',
    'Verdana',
    'Georgia',
    'Courier New',
    'Arial Black',
    'Tahoma',
    'Trebuchet MS',
    'Impact'
  ];

  fontOptions.map((x)=>{
    let option = document.createElement('option')
    option.innerText = x
    option.value = x
    font.append(option)
  })


  for (let i=8; i <=50; i+=2){
    let length = document.createElement('option')
    length.innerText = i
    length.value = i+'px'
    if (i == 16){
      length.selected = 'selected'
    }
    size.append(length)
  }

const add_btn = document.querySelector('#add')


let actions = []
let currentState = null
let index = -1

const updateState = (list) => {
  index ++
  actions[index] = list
  currentState = index
}

const addText = () => {
    const text = prompt('enter the text you want to enter')
    const fontSelected = font.value
    const numSelected = size.value
    const colorSelected = color.value
    let list = document.createElement('li')
    list.innerText = text;
    list.style.color = colorSelected
    list.style.fontFamily = fontSelected
    list.style.fontSize = numSelected
    textArea.append(list)
    updateState(list)
    
}

add_btn.addEventListener('click',addText)


const undoState = () => {
  if (currentState >= 0){
  list = actions[currentState]
  list.style.display = 'none';
  currentState --
  }
}

undoBtn.addEventListener('click',undoState)

const redoState = () => {
    if (currentState < index){
    currentState ++
    list = actions[currentState]
    list.style.display = 'block'
    }
    
}

redoBtn.addEventListener('click',redoState)



