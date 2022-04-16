function pawnCardinata(id) {
  chessObj.forEach((item) => {
    item.forEach((elem) => {
      if(id == elem.id) {
        pawn(elem.x, elem.y)
      }
    })
  })
}
function pawn(x, y) {
  chessObj.forEach((obj) => {
    obj.forEach((ids) => {
      if(8 == y) {
      }
      else if(7 != y){
        if(
          x == ids.x && y - 1 == ids.y
        )
        {
          let efekt = document.querySelector('.efekt'+ ids.id)
          efekt.classList.add('green')
        }
      }
      else if(7 == y){
        if(
          x == ids.x && y - 1 == ids.y ||
          x == ids.x && y - 2 == ids.y
        )
        {
          let efekt = document.querySelector('.efekt'+ ids.id)
          efekt.classList.add('green')
        }

      }

    })
  })
}