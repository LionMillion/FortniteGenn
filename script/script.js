var NumberOfWords = 40
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://iir.ai/GgaAei"
words[2] = "https://iir.ai/xSiowAS"
words[3] = "https://iir.ai/7eMRDHi"
words[4] = "https://iir.ai/wSuxb8f2"
words[5] = "https://iir.ai/r7uf8"
words[6] = "https://iir.ai/jCAW7Ca8"
words[7] = "https://iir.ai/LmaCCF"
words[8] = "https://iir.ai/naA9lTa0"
words[9] = "https://iir.ai/5udPl5"
words[10] = "https://iir.ai/C1ynD"
words[11] = "https://iir.ai/TeHeKuXY"
words[12] = "https://iir.ai/HpFNAQo"
words[13] = "https://iir.ai/95bW9E"
words[14] = "https://iir.ai/4Tu1GFw"
words[15] = "https://iir.ai/Bs0M"
words[16] = "https://iir.ai/zY1m0"
words[17] = "https://iir.ai/fDkyejB"
words[18] = "https://iir.ai/2ckxxolY"
words[19] = "https://iir.ai/xfKcHj9"
words[20] = "https://iir.ai/jY49vLke"
words[21] = "https://iir.ai/0vwSV"
words[22] = "https://iir.ai/wHLM"
words[23] = "https://iir.ai/GVE0vEXG"
words[24] = "https://iir.ai/iTNDPW8"
words[25] = "https://iir.ai/GLpVFJGV"
words[26] = "https://iir.ai/7NReEq"
words[27] = "https://iir.ai/uRqoSQ"
words[28] = "https://iir.ai/LABwB"
words[29] = "https://iir.ai/LV1GyrVT"
words[30] = "https://iir.ai/U6YaqxN"
words[31] = "https://iir.ai/tN5Rg7"
words[32] = "https://iir.ai/gtMF7"
words[33] = "https://iir.ai/qGfCFuF"
words[34] = "https://iir.ai/KJteS"
words[35] = "https://iir.ai/hUli2"
words[36] = "https://iir.ai/Pxv9ta7s"
words[37] = "https://iir.ai/oRoa2b"
words[38] = "https://iir.ai/kUtl"
words[39] = "https://iir.ai/gJn72aE"
words[40] = "https://iir.ai/S2k4n"



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
