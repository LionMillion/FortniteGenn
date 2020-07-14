var NumberOfWords = 71
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "http://gestyy.com/eq5DO6"
words[2] = "http://gestyy.com/eq5DPq"
words[3] = "http://gestyy.com/eq5DPy"
words[4] = "http://gestyy.com/eq5DPa"
words[5] = "http://gestyy.com/eq5DPh"
words[6] = "http://gestyy.com/eq5DPx"
words[7] = "http://gestyy.com/eq5DPm"
words[8] = "http://gestyy.com/eq5DPT"
words[9] = "http://gestyy.com/eq5DPP"
words[10] = "http://gestyy.com/eq5DPG"
words[11] = "http://gestyy.com/eq5DPZ"
words[12] = "http://gestyy.com/eq5DPN"
words[13] = "http://gestyy.com/eq5DP4"
words[14] = "http://gestyy.com/eq5DP9"
words[15] = "http://gestyy.com/eq5DAr"
words[16] = "http://gestyy.com/eq5DAo"
words[17] = "http://gestyy.com/eq5DAf"
words[18] = "http://gestyy.com/eq5DAl"
words[19] = "http://gestyy.com/eq5DAb"
words[20] = "http://gestyy.com/eq5DFU"
words[21] = "http://gestyy.com/eq5DFS"
words[22] = "http://gestyy.com/eq5DFJ"
words[23] = "http://gestyy.com/eq5DFC"
words[24] = "http://gestyy.com/eq5DF1"
words[25] = "http://gestyy.com/eq5DF6"
words[26] = "http://gestyy.com/eq5DGq"
words[27] = "http://gestyy.com/eq5DGy"
words[28] = "http://gestyy.com/eq5DGa"
words[29] = "http://gestyy.com/eq5DGh"
words[30] = "http://gestyy.com/eq5DGx"
words[31] = "http://gestyy.com/eq5DGT"
words[32] = "http://gestyy.com/eq5DGP"
words[33] = "http://gestyy.com/eq5DGG"
words[34] = "http://gestyy.com/eq5DGZ"
words[35] = "http://gestyy.com/eq5DGN"
words[36] = "http://gestyy.com/eq5DG4"
words[37] = "http://gestyy.com/eq5DG9"
words[38] = "http://gestyy.com/eq5DHr"
words[39] = "http://gestyy.com/eq5DHo"
words[40] = "http://gestyy.com/eq5DZT"
words[41] = "http://gestyy.com/eq5DZP"
words[42] = "http://gestyy.com/eq5DZG"
words[43] = "http://gestyy.com/eq5DZZ"
words[44] = "http://gestyy.com/eq5DZN"
words[45] = "http://gestyy.com/eq5DZ4"
words[46] = "http://gestyy.com/eq5DZ9"
words[47] = "http://gestyy.com/eq5DXr"
words[48] = "http://gestyy.com/eq5DXo"
words[49] = "http://gestyy.com/eq5DXf"
words[50] = "http://gestyy.com/eq5DXl"
words[51] = "http://gestyy.com/eq5DXb"
words[52] = "http://gestyy.com/eq5DXE"



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
