var NumberOfWords = 35
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://stfly.io/Wd79u"
words[2] = "https://stfly.io/Z79Aashg"
words[3] = "https://stfly.io/DTH4U"
words[4] = "https://stfly.io/mlKaQd"
words[5] = "https://stfly.io/1Pqxb"
words[6] = "https://stfly.io/r7PpM0x"
words[7] = "https://stfly.io/dq4XM1EY"
words[8] = "https://stfly.io/yHPqQQY"
words[9] = "https://stfly.io/g28hVM"
words[10] = "https://stfly.io/GV8hhxU"
words[11] = "https://stfly.io/1Ec4Es1"
words[12] = "https://stfly.io/udXN"
words[13] = "https://stfly.io/56KE"
words[14] = "https://stfly.io/CFB2x1AS"
words[15] = "https://stfly.io/9cjiSrdpu"
words[16] = "https://stfly.io/EOyprU6w2"
words[17] = "https://stfly.io/ia8IToOy"
words[18] = "https://stfly.io/1G3hs"
words[19] = "https://stfly.io/hgHfywbE"
words[20] = "https://stfly.io/TvOR7qM"
words[21] = "https://stfly.io/9BfwH30e"
words[22] = "https://stfly.io/xiMowT5"
words[23] = "https://stfly.io/chXt5LXp"
words[24] = "https://stfly.io/8cNsxVFd"
words[25] = "https://stfly.io/oZVTb"
words[26] = "https://stfly.io/jTuoW0gKP"
words[27] = "https://stfly.io/LyfW9esq"
words[28] = "https://stfly.io/nSJhqrRB"
words[29] = "https://stfly.io/CGlms"
words[30] = "https://stfly.io/Gee1479b"
words[31] = "https://stfly.io/ep6p3n9F"
words[32] = "https://stfly.io/n60iJG"
words[33] = "https://stfly.io/WE5ybf9"
words[34] = "https://stfly.io/8Vego"
words[35] = "https://stfly.io/7Vmq6"




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
