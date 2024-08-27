function choosing() {
  let monthNum = prompt("oyni kiriting")
  monthNum = +monthNum

  if (monthNum >= 1 && monthNum <= 12) {
    switch (monthNum) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        console.log("31 ta kun bor")
        break

      case 2:
        console.log("29 ta kun bor")
        break

      case 4:
      case 6:
      case 9:
      case 11:
        console.log("30 ta kun bor")
        break
    }
  }

  else {
    console.log("unday oy yo'q")
  }

}

choosing()