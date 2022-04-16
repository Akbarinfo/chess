function kingCardinata(id) {
  chessObj.forEach((item) => {
    item.forEach((elem) => {
      if(id == elem.id) {
        king(elem.x, elem.y)
      }
    })
  })
}
function king(x, y) {
  chessObj.forEach((obj) => {
    obj.forEach((ids) => {
      if(
        x == ids.x && y - 1 == ids.y || // y o'qi  bo'yicha - tepaga
        x == ids.x && y + 1 == ids.y || // y o'qi  bo'yicha + tepaga
        y == ids.y && x - 1 == ids.x || // x o'qi  bo'yicha chap tamonga
        y == ids.y && x + 1 == ids.x || // x o'qi  bo'yicha o'ng tamonga
        x - 1 == ids.x && y - 1 == ids.y ||
        x + 1 == ids.x && y - 1 == ids.y ||
        x - 1 == ids.x && y + 1 == ids.y ||
        x + 1 == ids.x && y + 1 == ids.y
        ){
        let efekt = document.querySelector('.efekt'+ ids.id)
        efekt.classList.add('green')
      }
    })
  })
}