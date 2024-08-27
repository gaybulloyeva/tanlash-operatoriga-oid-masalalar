function choosing() {
  let a = +prompt("1-sonni kiriting")
  let b = +prompt("2-sonni kiriting")
  


  switch (step) {

    case 1:
      console.log(a + b)
      break
    case 2:
      console.log(a - b)
      break

    case 3:
      console.log(a / b)
      break

    case 4:
      console.log(a * b)
      break

  }
}



choosing()