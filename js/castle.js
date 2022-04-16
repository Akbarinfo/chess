function castleCardinata(id) {
  chessObj.forEach((item) => {
    item.forEach((elem) => {
      if(id == elem.id) {
        castle(elem.x, elem.y, elem.id)
      }
    })
  })
}

function castle(x, y, id) {
  chessObj.forEach((obj) => {
    obj.forEach((ids) => {
     if(
      x == ids.x && y + 1 == ids.y ||
      x == ids.x && y + 2 == ids.y ||
      x == ids.x && y + 3 == ids.y ||
      x == ids.x && y + 4 == ids.y ||
      x == ids.x && y + 5 == ids.y ||
      x == ids.x && y + 6 == ids.y ||
      x == ids.x && y + 7 == ids.y ||

      y == ids.y && x + 1 == ids.x ||
      y == ids.y && x + 2 == ids.x ||
      y == ids.y && x + 3 == ids.x ||
      y == ids.y && x + 4 == ids.x ||
      y == ids.y && x + 5 == ids.x ||
      y == ids.y && x + 6 == ids.x ||
      y == ids.y && x + 7 == ids.x ||

      x == ids.x && y - 1 == ids.y ||
      x == ids.x && y - 2 == ids.y ||
      x == ids.x && y - 3 == ids.y ||
      x == ids.x && y - 4 == ids.y ||
      x == ids.x && y - 5 == ids.y ||
      x == ids.x && y - 6 == ids.y ||
      x == ids.x && y - 7 == ids.y ||

      y == ids.y && x - 1 == ids.x ||
      y == ids.y && x - 2 == ids.x ||
      y == ids.y && x - 3 == ids.x ||
      y == ids.y && x - 4 == ids.x ||
      y == ids.y && x - 5 == ids.x ||
      y == ids.y && x - 6 == ids.x ||
      y == ids.y && x - 7 == ids.x
      ) {
       let efekt = document.querySelector('.efekt'+ ids.id)
       efekt.classList.add('green')
     }
    })
  })
}