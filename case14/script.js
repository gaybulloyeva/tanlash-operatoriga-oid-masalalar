function choosing() {
  let a, R1, R2, S;

  let element = prompt()

  switch (element) {

    case "a":
      a = prompt("qiymatni kiriting")
      R1 = a * Math.sqrt(3) / 6
      R2 = 2 * R1
      S = a ** 2 * Math.sqrt(3) / 4
      break
    case "R1":
      R1 = prompt("qiymatni kiriting")
      a = R1 * 6 / Math.sqrt(3)
      R2 = R1 * 2
      S = a ** 2 * Math.sqrt(3) / 4
      break

    case "R2":
      R2 = prompt("qiymatni kiriting")
      R1 = R2 / 2
      a = R1 * 6 / Math.sqrt(3)
      S = a ** 2 * Math.sqrt(3) / 4
      break

    case "S":
      S = prompt("qiymatini kiriting")
      a = Math.sqrt(S * 4 / Math.sqrt(3))
      R1 = a * Math.sqrt(3) / 6
      R2 = 2 * R1
      break

    default:
      console.log("error")
      break
      return;

  }

  console.log(`a= ${a}, R1= ${R1}, R2= ${R2}, S= ${S}`)

}

choosing()