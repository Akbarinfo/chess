let elListBox = document.querySelector('#listbox');
let elX = document.querySelector('#x')
let elY = document.querySelector('#y')
//3D
let el3d = document.querySelector('#trid')

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
    li.className = `chess__item ${obj.id} efekt${obj.id}`
    li.setAttribute('id', obj.id)
    if(ind % 2 == 0 && obj.id % 2 != 0 || ind % 2 != 0 && obj.id % 2 == 0) {
      li.className = `chess__item chess__back ${obj.id} efekt${obj.id}`
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



let elItemBox = document.querySelectorAll('.chess__item')


// elCastle.addEventListener('click', (e) => {
//   elCastle.style.backgroundColor = "#b58863"

//   elItemBox.forEach((item) => {
//     item.addEventListener('mouseover', (e) => {
//       let id = e.target.id
//       castleCardinata(id)
//     })
//     item.addEventListener('mouseout', (e) => {
//       console.log()
//       document.querySelectorAll('.green').forEach(el => {
//         el.classList.remove("green")
//       })
//     })
//   })
// })


let elBitem = document.querySelectorAll('.chess__bitem')

let clicked = ['']
elBitem.forEach((item) => {

  item.addEventListener('click', (e) => {
    elBitem.forEach((cname) => {
      if(cname.className.includes('chess__activ')) {
        cname.classList.remove('chess__activ')
      }
    })

    item.classList.add('chess__activ')
    clicked[0] = e.path[1].id
    elItemBox.forEach((items) => {
      items.addEventListener('mouseover', (e) => {
        let id = e.target.id
        if(clicked[0] == 'king') {
          kingCardinata(id)
        }
        if(clicked[0] == 'queen') {
          queenCardinata(id)
        }

        if(clicked[0] == 'castle') {
          castleCardinata(id)
        }

        if(clicked[0] == 'knight') {
          knightCardinata(id)
        }

        if(clicked[0] == 'bishop') {
          bishopCardinata(id)
        }

        if(clicked[0] == 'pawn') {
          pawnCardinata(id)
        }
      })
      items.addEventListener('mouseout', (e) => {
        document.querySelectorAll('.green').forEach(el => {
          el.classList.remove("green")
        })
      })
    })
  })
})

let count = 0

el3d.addEventListener('click', (e) => {

  if(count == 0) {
    elListBox.classList.add('chess__3d')
    el3d.textContent = "2D"
    ++count
  }
  else{
    elListBox.classList.remove('chess__3d')
    el3d.textContent = "3D"
    count = 0
  }
})