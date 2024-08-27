function choosing() {
  let birlik = +prompt("uzunlik birligi")
  let length = +prompt("kesma uzunligini kiriting")
  let changing = 0

  switch (birlik) {

    case 1:
      console.log(`kesma uzunligi metrlarda: ${changing = length / 10}  m ga teng`)
      break
    case 2:
      console.log(`kesma uzunligi metrlarda: ${changing = length * 1000}  m ga teng`)
      break

    case 3:
      console.log(`kesma uzunligi metrlarda: ${changing = length}  m ga teng`)
      break

    case 4:
      console.log(`kesma uzunligi metrlarda: ${changing = length / 1000}  m ga teng`)
      break

    case 5:
      console.log(`kesma uzunligi metrlarda: ${changing = length / 100}  m ga teng`)
      break

    default:
      console.log("error")
      break


  }

}

choosing()