function choosing() {
  let birlik = +prompt("uzunlik birligi")
  let ogirlik = +prompt("og'irlik qiymatini kiriting")
  let changing = 0

  switch (birlik) {

    case 1:
      console.log(`kiritilgan og'irlik kilogramda: ${changing = ogirlik}  kg ga teng`)
      break
    case 2:
      console.log(`kiritilgan og'irlik kilogramda: ${changing = ogirlik / 1000000}  kg ga teng`)
      break

    case 3:
      console.log(`kiritilgan og'irlik kilogramda: ${changing = ogirlik / 1000}  kg ga teng`)
      break

    case 4:
      console.log(`kiritilgan og'irlik kilogramda: ${changing = ogirlik * 1000}  kg ga teng`)
      break

    case 5:
      console.log(`kiritilgan og'irlik kilogramda: ${changing = ogirlik * 100}  kg ga teng`)
      break

    default:
      console.log("error")
      break


  }

}

choosing()