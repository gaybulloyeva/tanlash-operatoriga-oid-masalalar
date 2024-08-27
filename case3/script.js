function choosing() {
  let monthNum = prompt("oyni kiriting")
  monthNum = +monthNum

  if (monthNum >= 1 && monthNum <= 12) {
    switch (monthNum) {
      case 1:
        console.log("Qish")
        break
      case 2:
        console.log("Qish")
        break
      case 3:
        console.log("Bahor")
        break
      case 4:
        console.log("Bahor")
        break
      case 5:
        console.log("Bahor")
        break
      case 6:
        console.log("Yoz")
        break
      case 7:
        console.log("Yoz")
        break
      case 8:
        console.log("Yoz")
        break
      case 9:
        console.log("Kuz")
        break
      case 10:
        console.log("Kuz")
        break
      case 11:
        console.log("Kuz")
        break
      case 12:
        console.log("Qish")
        break
    }
  }

  else {
    console.log("unday oy yo'q")
  }

}

choosing()