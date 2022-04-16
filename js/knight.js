function knightCardinata(id) {
  chessObj.forEach((item) => {
    item.forEach((elem) => {
      if(id == elem.id) {
        knight(elem.x, elem.y)
      }
    })
  })
}
function knight(x, y) {
  chessObj.forEach((obj) => {
    obj.forEach((ids) => {
      if(
        x - 1 == ids.x && y - 2 == ids.y ||
        x + 1 == ids.x && y - 2 == ids.y ||
        x - 2 == ids.x && y - 1 == ids.y ||
        x + 2 == ids.x && y - 1 == ids.y ||

        // x o'qi boyicha pastga
        x - 1 == ids.x && y + 2 == ids.y ||
        x + 1 == ids.x && y + 2 == ids.y ||
        x - 2 == ids.x && y + 1 == ids.y ||
        x + 2 == ids.x && y + 1 == ids.y 
        ){
        let efekt = document.querySelector('.efekt'+ ids.id)
        efekt.classList.add('green')
      }
    })
  })
}