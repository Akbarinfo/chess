let elListBox = document.querySelector('#listbox');
let elX = document.querySelector('#x')
let elY = document.querySelector('#y')

//chees item
let elKing = document.querySelector('#king')
let elQueen = document.querySelector('#queen')
let elCastle = document.querySelector('#castle')
let elKnight = document.querySelector('#knight')
let elBishop = document.querySelector('#bishop')
let elPawn = document.querySelector('#pawn')


chessObj.forEach((arr, ind) => {
  arr.forEach((obj) => {
    let li = document.createElement('li')
    li.className = `chess__item ${obj.x} ${obj.y}`
    li.setAttribute('id', obj.id)
    if(ind % 2 == 0 && obj.id % 2 != 0 || ind % 2 != 0 && obj.id % 2 == 0) {
      li.style.backgroundColor = "#f0d9b5"
      li.style.backgroundImage = 'url(/img/wood-white.jpeg)'
    }
    li.addEventListener('mouseover', (e) => {
      if(obj.id == e.target.id) {
        elX.textContent = `x = ${obj.x}`
        elY.textContent = `y = ${obj.y}`
      }
    })
    li.addEventListener('mouseout', (e) => {
      if(obj.id == e.target.id) {
        elX.textContent = `x = 0`
        elY.textContent = `y = 0`
      }
    })
    elListBox.appendChild(li)
  })
})


function funKing () {

}

elKing.addEventListener('click', (e) => {
  elKing.style.backgroundColor = "#b58863"
})


let lilar = document.querySelectorAll('.chess__item')


let tower = document.querySelector('#castle');
tower.addEventListener('click', () => {
  lilar.forEach((item) => {
    chessObj.forEach((elem) => {
      elem.forEach((ids, i) => {
      item.addEventListener('mouseover', () => {
            if (item.id == i) {
              lilar.forEach((el, id) => {
                if (el.className.includes(`${ids.y}`)) {
                    el.classList.add('green')
                    console.log('ishladi')
                    }
                    if (el.className.includes(`${ids.x}`)) {
                        el.classList.add('green')
                    }
                })

            }
        })
        item.addEventListener("mouseout", () => {
            if (item.id == i) {
              lilar.forEach((el, id) => {
                        el.classList.remove('green')
                })

            }
        })
    })
    })
  })
})