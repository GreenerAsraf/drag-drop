//DOM Elements
const boxes = document.querySelectorAll('.box'),
  image = document.querySelector('.image')
text = document.querySelector('.text')

//Loop through each boxes element
boxes.forEach((box) => {
  //When a draggable element dragged over a box element
  box.addEventListener('dragover', (e) => {
    e.preventDefault() //Prevent default behaviour
    box.classList.add('hovered')
  })

  //When a draggable element leaves box element
  box.addEventListener('dragleave', () => {
    box.classList.remove('hovered')
  })

  //When a draggable element is dropped on a box element
  box.addEventListener('drop', () => {
    box.appendChild(image)

    box.appendChild(text)
    box.classList.remove('hovered')
  })
})
function dragstart_handler(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData('text/plain', ev.target.id)
}

window.addEventListener('DOMContentLoaded', () => {
  // Get the element by id
  const element = document.getElementById('p1')
  // Add the ondragstart event listener
  element.addEventListener('drop', dragstart_handler)

  box.appendChild(element)
})
