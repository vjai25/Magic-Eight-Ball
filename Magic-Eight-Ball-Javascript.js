var userName = 'Jane!';

userName ? console.log('Hello ' + userName ) : console.log('Hello' ) ;

let userQuestion = 'Am I smart';

console.log(userName+ ' asked... ' +userQuestion )

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = randomNumber;

let magicBallanswer = 'The Magic Eight Ball\'s answer is...';


if(eightBall === 0){
  console.log( magicBallanswer+' It is certain');
}
else if(eightBall === 1){
   console.log(magicBallanswer+' It is decidedly so');
}
else if(eightBall === 2){
   console.log(magicBallanswer+' Reply hazy try again');
}
else if(eightBall === 3){
   console.log(magicBallanswer+' Cannot predict now');
}
else if(eightBall === 4){
   console.log(magicBallanswer+' Do not count on it');
}
else if(eightBall === 5){
   console.log(magicBallanswer+' My sources say no');
}
else if(eightBall === 6){
   console.log(magicBallanswer+' Outlook not so good');
}
else if(eightBall === 7){
   console.log(magicBallanswer+' Signs point to yes');
}
else{
   console.log(magicBallanswer+' You\'re unfortunate!')
}
