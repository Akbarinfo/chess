function bishopCardinata(id) {
  chessObj.forEach((item) => {
    item.forEach((elem) => {
      if(id == elem.id) {
        bishop(elem.x, elem.y)
      }
    })
  })
}
function bishop(x, y) {
  chessObj.forEach((obj) => {
    obj.forEach((ids) => {
      if(
        //y o'qi bo'yicha chap tepaga tamonga
        x - 1 == ids.x && y - 1 == ids.y ||
        x - 2 == ids.x && y - 2 == ids.y ||
        x - 3 == ids.x && y - 3 == ids.y ||
        x - 4 == ids.x && y - 4 == ids.y ||
        x - 5 == ids.x && y - 5 == ids.y ||
        x - 6 == ids.x && y - 6 == ids.y ||
        x - 7 == ids.x && y - 7 == ids.y ||

        //y o'qi bo'yicha chap pastga tamonga
        x + 1 == ids.x && y + 1 == ids.y ||
        x + 2 == ids.x && y + 2 == ids.y ||
        x + 3 == ids.x && y + 3 == ids.y ||
        x + 4 == ids.x && y + 4 == ids.y ||
        x + 5 == ids.x && y + 5 == ids.y ||
        x + 6 == ids.x && y + 6 == ids.y ||
        x + 7 == ids.x && y + 7 == ids.y ||

        //y o'qi bo'yicha o'ng pastga tamonga
        x + 1 == ids.x && y - 1 == ids.y ||
        x + 2 == ids.x && y - 2 == ids.y ||
        x + 3 == ids.x && y - 3 == ids.y ||
        x + 4 == ids.x && y - 4 == ids.y ||
        x + 5 == ids.x && y - 5 == ids.y ||
        x + 6 == ids.x && y - 6 == ids.y ||
        x + 7 == ids.x && y - 7 == ids.y ||

        //y o'qi bo'yicha o'ng pastga tamonga
        x - 1 == ids.x && y + 1 == ids.y ||
        x - 2 == ids.x && y + 2 == ids.y ||
        x - 3 == ids.x && y + 3 == ids.y ||
        x - 4 == ids.x && y + 4 == ids.y ||
        x - 5 == ids.x && y + 5 == ids.y ||
        x - 6 == ids.x && y + 6 == ids.y ||
        x - 7 == ids.x && y + 7 == ids.y

        ){
        let efekt = document.querySelector('.efekt'+ ids.id)
        efekt.classList.add('green')
      }
    })
  })
}