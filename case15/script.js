function choosing(N, M) {
  let kartaQiymati = ""
  let kartaTuri = ""

  switch (N) {
    case 11:
      kartaQiymati = "valet"
      break;
    case 12:
      kartaQiymati = "dama"
      break;
    case 13:
      kartaQiymati = "qirol"
      break
    case 14:
      kartaQiymati = "tuz"
      break
    default:
      console.log(N)
      return;
  }

  switch (M) {
    case 1:
      kartaTuri = "g'isht"
      break
    case 2:
      kartaTuri = "olma"
      break
    case 3:
      kartaTuri = "chillak"
      break
    case 4:
      kartaTuri = "qarg'a"
      break

    default:
      console.log(M)
      return;
  }

  console.log(N + " " + kartaQiymati + ", " + M + " " + kartaTuri)

}

choosing(11, 4)