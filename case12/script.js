function choosing() {
  let R, D, L, S;
  const pi = 3.14

  let element = prompt()

  switch (element) {

    case "R":
      R = prompt("qiymatni kiriting")
      D = 2 * R
      L = 2 * pi * R
      S = pi * (R ** 2)
      break
    case "D":
      D = prompt("qiymatni kiriting")
      R = D / 2
      L = 2 * pi * R
      S = pi * (R ** 2)
      break

    case "L":
      L = prompt("qiymatni kiriting")
      R = L / (2 * pi)
      D = 2 * R
      S = pi * (R ** 2)
      break

    case "S":
      S = prompt("qiymatini kiriting")
      R = Math.sqrt(S / pi)
      D = 2 * R
      L = 2 * pi * R
      break

    default:
      console.log("error")
      break
      return;

  }

  console.log(`R= ${R}, D= ${D}, L= ${L}, S= ${S}`)

}

choosing()