var NumberOfWords = 35
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[5] = "https://stfly.io/6Q52I"
words[6] = "https://stfly.io/G2SzWL"
words[7] = "https://stfly.io/baRZtF"
words[8] = "https://stfly.io/7vbdbK"
words[9] = "https://stfly.io/hyVSjf"
words[10] = "https://stfly.io/P0T6"
words[11] = "https://stfly.io/Ksts2"
words[12] = "https://stfly.io/y27X"
words[13] = "https://stfly.io/vw5ef1St"
words[14] = "https://stfly.io/rIdjY"
words[15] = "https://stfly.io/fbv5bSsuU"
words[16] = "https://stfly.io/oITRvD"
words[17] = "https://stfly.io/85DAaO4QJ"
words[18] = "https://stfly.io/kqxPuO"
words[19] = "https://stfly.io/ilQw"
words[20] = "https://stfly.io/1WLUx"
words[21] = "https://stfly.io/8ZagM"
words[22] = "https://stfly.io/DKLzG8s"
words[23] = "https://stfly.io/WUhR3t"
words[24] = "https://stfly.io/EYa1eoM"
words[25] = "https://stfly.io/dVJrauAK6"
words[26] = "https://stfly.io/EyPQFKN"
words[27] = "https://stfly.io/p2VY"
words[28] = "https://stfly.io/sqUGvcNK"
words[29] = "https://stfly.io/p8dRD"
words[30] = "https://stfly.io/iehsXZdu7"
words[31] = "https://stfly.io/yiaTOGWS"
words[32] = "https://stfly.io/gmXGB4oQ"
words[33] = "https://stfly.io/v2zQ9nm"
words[34] = "https://stfly.io/sVXJD5"
words[35] = "https://stfly.io/E7How"




function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}


function usersOnline() {
  var rndUser;
  rndUser = Math.floor(Math.random() * 50) + 200;
  document.getElementsByClassName("wtf")[0].innerHTML ="Users online: " + rndUser;
  setInterval(function(){
    rndUser = Math.floor(Math.random() * 50) + 200;
    document.getElementsByClassName("wtf")[0].innerHTML ="Users online: " + rndUser;
  }, 5020);
}
