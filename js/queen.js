function queenCardinata(id) {
  chessObj.forEach((item) => {
    item.forEach((elem) => {
      if(id == elem.id) {
        queen(elem.x, elem.y)
      }
    })
  })
}
function queen(x, y) {
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
        x + 1 == ids.x && y + 1 == ids.y ||

        //x o'qi chap tamponga yurishlar
        y == ids.y && x - 2 == ids.x ||
        y == ids.y && x - 3 == ids.x ||
        y == ids.y && x - 4 == ids.x ||
        y == ids.y && x - 5 == ids.x ||
        y == ids.y && x - 6 == ids.x ||
        y == ids.y && x - 7 == ids.x ||

        //x o'qi o'ng tamponga yurishlar
        y == ids.y && x + 2 == ids.x ||
        y == ids.y && x + 3 == ids.x ||
        y == ids.y && x + 4 == ids.x ||
        y == ids.y && x + 5 == ids.x ||
        y == ids.y && x + 6 == ids.x ||
        y == ids.y && x + 7 == ids.x ||

        //y o'qi boyicha tepaga yurish
        x == ids.x && y - 2 == ids.y ||
        x == ids.x && y - 3 == ids.y ||
        x == ids.x && y - 4 == ids.y ||
        x == ids.x && y - 5 == ids.y ||
        x == ids.x && y - 6 == ids.y ||
        x == ids.x && y - 7 == ids.y ||

        //y o'qi boyicha pastga yurish
        x == ids.x && y + 2 == ids.y ||
        x == ids.x && y + 3 == ids.y ||
        x == ids.x && y + 4 == ids.y ||
        x == ids.x && y + 5 == ids.y ||
        x == ids.x && y + 6 == ids.y ||
        x == ids.x && y + 7 == ids.y ||

        //y o'qi bo'yicha chap tepaga tamonga
        x - 2 == ids.x && y - 2 == ids.y ||
        x - 3 == ids.x && y - 3 == ids.y ||
        x - 4 == ids.x && y - 4 == ids.y ||
        x - 5 == ids.x && y - 5 == ids.y ||
        x - 6 == ids.x && y - 6 == ids.y ||
        x - 7 == ids.x && y - 7 == ids.y ||

        //y o'qi bo'yicha chap pastga tamonga
        x + 2 == ids.x && y + 2 == ids.y ||
        x + 3 == ids.x && y + 3 == ids.y ||
        x + 4 == ids.x && y + 4 == ids.y ||
        x + 5 == ids.x && y + 5 == ids.y ||
        x + 6 == ids.x && y + 6 == ids.y ||
        x + 7 == ids.x && y + 7 == ids.y ||

        //y o'qi bo'yicha o'ng pastga tamonga
        x + 2 == ids.x && y - 2 == ids.y ||
        x + 3 == ids.x && y - 3 == ids.y ||
        x + 4 == ids.x && y - 4 == ids.y ||
        x + 5 == ids.x && y - 5 == ids.y ||
        x + 6 == ids.x && y - 6 == ids.y ||
        x + 7 == ids.x && y - 7 == ids.y ||

        //y o'qi bo'yicha o'ng pastga tamonga
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