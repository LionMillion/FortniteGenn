var NumberOfWords = 45
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
words[31] = "https://todaynewspk.win/3RhoNqe" 
words[32] = "https://todaynewspk.win/XdN7iC" 
words[33] = "https://todaynewspk.win/H4MOB7" 
words[34] = "https://todaynewspk.win/oCwWo" 
words[35] = "https://todaynewspk.win/uvNzs" 
words[36] = "https://todaynewspk.win/wB5spgz" 
words[37] = "https://todaynewspk.win/x4ad" 
words[38] = "https://todaynewspk.win/whXP3fn" 
words[39] = "https://todaynewspk.win/PG6w" 
words[40] = "https://todaynewspk.win/B7Nb" 
words[41] = "https://todaynewspk.win/0JbTek"
words[42] = "https://todaynewspk.win/ni2hOK"
words[43] = "https://todaynewspk.win/BpxeYev"
words[44] = "https://todaynewspk.win/VpIwAL"
words[45] = "https://todaynewspk.win/wxhKxo"




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
