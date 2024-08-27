function choosing() {
  let a, c, h, S;

  let element = prompt()

  switch (element) {

    case "a":
      a = prompt("qiymatni kiriting")
      c = a * Math.sqrt(2)
      h = c / 2
      S = (c * h) / 2
      break
    case "c":
      c = prompt("qiymatni kiriting")
      a = c / Math.sqrt(2)
      h = c / 2
      S = (c * h) / 2
      break

    case "h":
      h = prompt("qiymatni kiriting")
      c = 2 * h
      a = c / Math.sqrt(2)
      S = (c * h) / 2

      break

    case "S":
      S = prompt("qiymatini kiriting")
      c = Math.sqrt(2 * S / h)
      a = c / Math.sqrt(2)
      h = c / 2
      break

    default:
      console.log("error")
      break
      return;

  }

  console.log(`a= ${a}, c= ${c}, h= ${h}, S= ${S}`)

}

choosing()