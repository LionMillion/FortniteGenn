var NumberOfWords = 40
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "http://gestyy.com/eqe5uf"
words[2] = "http://gestyy.com/eqe5ul"
words[3] = "http://gestyy.com/eqe5ub"
words[4] = "http://gestyy.com/eqe5uE"
words[5] = "http://gestyy.com/eqe5uI"
words[6] = "http://gestyy.com/eqe5uD"
words[7] = "http://gestyy.com/eqe5uK"
words[8] = "http://gestyy.com/eqe5uV"
words[9] = "http://gestyy.com/eqe5u2"
words[10] = "http://gestyy.com/eqe5u7"
words[11] = "http://gestyy.com/eqe5iw"
words[12] = "http://gestyy.com/eqe5iu"
words[13] = "http://gestyy.com/eqe5is"
words[14] = "http://gestyy.com/eqe5ij"
words[15] = "http://gestyy.com/eqe5ic"
words[16] = "http://gestyy.com/eqe5iQ"
words[17] = "http://gestyy.com/eqe5iY"
words[18] = "http://gestyy.com/eqe5iA"
words[19] = "http://gestyy.com/eqe5iH"
words[20] = "http://gestyy.com/eqe5iX"
words[21] = "http://gestyy.com/eqe5aa"
words[22] = "http://gestyy.com/eqe5ah"
words[23] = "http://gestyy.com/eqe5ax"
words[24] = "http://gestyy.com/eqe5am"
words[25] = "http://gestyy.com/eqe5aT"
words[26] = "http://gestyy.com/eqe5aP"
words[27] = "http://gestyy.com/eqe5aG"
words[28] = "http://gestyy.com/eqe5aZ"
words[29] = "http://gestyy.com/eqe5aN"
words[30] = "http://gestyy.com/eqe5a4"
words[31] = "http://gestyy.com/eqe5a9"
words[32] = "http://gestyy.com/eqe5sr"
words[33] = "http://gestyy.com/eqe5so"
words[34] = "http://gestyy.com/eqe5sf"
words[35] = "http://gestyy.com/eqe5sl"
words[36] = "http://gestyy.com/eqe5sb"
words[37] = "http://gestyy.com/eqe5sI"
words[38] = "http://gestyy.com/eqe5sD"
words[39] = "http://gestyy.com/eqe5sV"
words[40] = "http://gestyy.com/eqe5s2"



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
