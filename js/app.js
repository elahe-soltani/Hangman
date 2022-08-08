const secretpharses=["never","elahe","you","better"];
let randomItem="";
let clicked=[];
let result="";
let mistakes=0;
function selectRandomItem(){
    randomItem=secretpharses[Math.floor(Math.random()*secretpharses.length)];
    document.getElementById("letters").addEventListener("click",buttonHandeler);
    window.addEventListener("keydown",keyHandler);
    console.log(randomItem);
}
function letterHandeler(letter){
    letter=letter.toLowerCase();
    clicked.indexOf(letter)===-1?clicked.push(letter):null;
    document.getElementById(letter.toUpperCase()).className="used";
    if(randomItem.indexOf(letter)>=0)
     {
       setUnderScope();
       checkIfWon();
     }else if(randomItem.indexOf(letter)===-1){
       mistakes++;
       checkIflost();
       updateHangmanPicture();
     }
}
function checkIflost(){
    if(mistakes===6){
        document.getElementById("gameover").querySelector("p").style.display="block";
        document.getElementById("clue").innerHTML=`<p>Random Word is: ${randomItem}</p>`;
    }
}
function checkIfWon(){
    if(randomItem===result){
        document.getElementById("gameover").querySelector("p").style.display="block";
        document.getElementById("image").querySelector("img").src="assets/winner.png";
    }
}
function updateHangmanPicture(){
    const image=document.getElementById("image").querySelector("img");
    image.src=`assets/hangman${mistakes}.png`;
}
function setUnderScope(){
    let spliteWord=randomItem.split("");
    console.log(spliteWord);
    let mappedWord=spliteWord.map(letter => (clicked.indexOf(letter) >=0 ? letter :"_"));
    result=mappedWord.join("");
    document.getElementById("clue").innerHTML=`<p> ${result} </p>`;
}


function buttonHandeler(event){
     letterHandeler(event.target.id);
}
function keyHandler(event){
    letterHandeler(event.key);
}
selectRandomItem();
setUnderScope();
