var NumberOfWords = 40
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://shrinkurl.org/Y8ux"
words[2] = "https://shrinkurl.org/TuU5"
words[3] = "https://shrinkurl.org/RrgBNXTa"
words[4] = "https://shrinkurl.org/KcIcG"
words[5] = "https://shrinkurl.org/0B47C6Y"
words[6] = "https://shrinkurl.org/tq9wDCc"
words[7] = "https://shrinkurl.org/QmFk"
words[8] = "https://shrinkurl.org/Hg0t8"
words[9] = "https://shrinkurl.org/Mku6rb"
words[10] = "https://shrinkurl.org/hoAR"
words[11] = "https://shrinkurl.org/V4pGF"
words[12] = "https://shrinkurl.org/uihVJ"
words[13] = "https://shrinkurl.org/WmLip7"
words[14] = "https://shrinkurl.org/oMZDazj"
words[15] = "https://shrinkurl.org/VGkspCR"
words[16] = "https://shrinkurl.org/u9VP"
words[17] = "https://shrinkurl.org/tXyj"
words[18] = "https://shrinkurl.org/XoxaW"
words[19] = "https://shrinkurl.org/VckAB"
words[20] = "https://shrinkurl.org/vZzXDq"
words[21] = "https://shrinkurl.org/nF7n"
words[22] = "https://shrinkurl.org/W3EIsVIs"
words[23] = "https://shrinkurl.org/St0m9Sp"
words[24] = "https://shrinkurl.org/5xMkF"
words[25] = "https://shrinkurl.org/oiKHrU"
words[26] = "https://shrinkurl.org/i3AwOne"
words[27] = "https://shrinkurl.org/pf7hUa1j"
words[28] = "https://shrinkurl.org/rlbG1Ce8"
words[29] = "https://shrinkurl.org/v33m"
words[30] = "https://shrinkurl.org/WvgLs1"
words[31] = "https://shrinkurl.org/8LcsH"
words[32] = "https://shrinkurl.org/leEZkA0"
words[33] = "https://shrinkurl.org/4wD0"
words[34] = "https://shrinkurl.org/DUv5OeYl"
words[35] = "https://shrinkurl.org/6Zrt"
words[36] = "https://shrinkurl.org/mMEwaEqy"
words[37] = "https://shrinkurl.org/M5pfvy6"
words[38] = "https://shrinkurl.org/Lf7XrnaY"
words[39] = "https://shrinkurl.org/HCj6lGA"
words[40] = "https://shrinkurl.org/uCduU"



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
