var NumberOfWords = 71
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "http://gestyy.com/eqr2Tn"
words[2] = "http://gestyy.com/eqr2TR"
words[3] = "http://gestyy.com/eqr2TO"
words[4] = "http://gestyy.com/eqr2TF"
words[5] = "http://gestyy.com/eqr2TL"
words[6] = "http://gestyy.com/eqr2TB"
words[7] = "http://gestyy.com/eqr2T3"
words[8] = "http://gestyy.com/eqr2T8"
words[9] = "http://gestyy.com/eqr2Ye"
words[10] = "http://gestyy.com/eqr2Yi"
words[11] = "http://gestyy.com/eqr2Yd"
words[12] = "http://gestyy.com/eqr2Yk"
words[13] = "http://gestyy.com/eqr2Yv"
words[14] = "http://gestyy.com/eqr2YW"
words[15] = "http://gestyy.com/eqr2YU"
words[16] = "http://gestyy.com/eqr2YS"
words[17] = "http://gestyy.com/eqr2YJ"
words[18] = "http://gestyy.com/eqr2YC"
words[19] = "http://gestyy.com/eqr2Y1"
words[20] = "http://gestyy.com/eqr2Y6"
words[21] = "http://gestyy.com/eqr2SZ"
words[22] = "http://gestyy.com/eqr2SN"
words[23] = "http://gestyy.com/eqr2S4"
words[24] = "http://gestyy.com/eqr2S9"
words[25] = "http://gestyy.com/eqr2Dr"
words[26] = "http://gestyy.com/eqr2Do"
words[27] = "http://gestyy.com/eqr2Df"
words[28] = "http://gestyy.com/eqr2Dl"
words[29] = "http://gestyy.com/eqr2Db"
words[30] = "http://gestyy.com/eqr2DE"
words[31] = "http://gestyy.com/eqr2DI"
words[32] = "http://gestyy.com/eqr2DD"
words[33] = "http://gestyy.com/eqr2DK"
words[34] = "http://gestyy.com/eqr2DV"
words[35] = "http://gestyy.com/eqr2D2"
words[36] = "http://gestyy.com/eqr2D7"
words[37] = "http://gestyy.com/eqr2Fw"
words[38] = "http://gestyy.com/eqr2Fu"
words[39] = "http://gestyy.com/eqr2Fs"
words[40] = "http://gestyy.com/eqr21a"
words[41] = "http://gestyy.com/eqr21h"
words[42] = "http://gestyy.com/eqr21x"
words[43] = "http://gestyy.com/eqr21m"
words[44] = "http://gestyy.com/eqr21T"
words[45] = "http://gestyy.com/eqr21P"
words[46] = "http://gestyy.com/eqr21G"
words[47] = "http://gestyy.com/eqr21N"
words[48] = "http://gestyy.com/eqr214"
words[49] = "http://gestyy.com/eqr219"
words[50] = "http://gestyy.com/eqr22r"
words[51] = "http://gestyy.com/eqr22o"
words[52] = "http://gestyy.com/eqr22f"
words[53] = "http://gestyy.com/eqr22l"
words[54] = "http://gestyy.com/eqr22b"
words[55] = "http://gestyy.com/eqr22E"
words[56] = "http://gestyy.com/eqr22I"
words[57] = "http://gestyy.com/eqr22D"
words[58] = "http://gestyy.com/eqr22K"
words[59] = "http://gestyy.com/eqr22V"
words[60] = "http://gestyy.com/eqr27l"
words[61] = "http://gestyy.com/eqr27b"
words[62] = "http://gestyy.com/eqr27E"
words[63] = "http://gestyy.com/eqr27I"
words[64] = "http://gestyy.com/eqr27D"
words[65] = "http://gestyy.com/eqr27K"
words[66] = "http://gestyy.com/eqr27V"
words[67] = "http://gestyy.com/eqr272"
words[68] = "http://gestyy.com/eqr277"
words[69] = "http://gestyy.com/eqr28w"
words[70] = "http://gestyy.com/eqr28u"
words[71] = "http://gestyy.com/eqr28s"



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
