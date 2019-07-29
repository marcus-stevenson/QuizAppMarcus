const questionAns = [
    {painting: "The Mona Lisa", artist: "Leonardo da Vinci", pImg: "", aImg: ""},
    {painting: "Campbell's Soup", artist: "Andy Warhol", pImg: "", aImg: ""},
    {painting: "The Hallucinogenic Toreador", artist: "Salvador Dali", pImg: "", aImg: ""},
    {painting: "Primordial Chaos", artist: "Hilma Af Klint", pImg: "", aImg: ""},
    {painting: "Mountains and Sea", artist: "Helen Frankenthaler", pImg: "", aImg: ""},
    {painting: "Self Portrait", artist: "Frida Kahlo", pImg: "", aImg: ""},
    {painting: "Flowers Blooming in the World", artist: "Takeshi Murakami", pImg: "", aImg: ""},
    {painting: "Naked Man", artist: "Banksy", pImg: "", aImg: ""},
    {painting: "Ram's Head", artist: "Georgia O'Keefe", pImg: "", aImg: ""},
    {painting: "Woman with a Pearl Neckalce", artist: "Mary Cassat", pImg: "", aImg: ""},
]
let questionCounter= 0;
let scoreCounter= 0;

function startQuiz(){
    //render start page
    //listen for click on start button and render first queston screen
    // listen for click on restart button and render first question, reset score
    $('.js-restartBtn').on('click', function(){
        alert('this');
    });
    $('.js-startBtn').on('click', function(e){
        $('.js-startPg').remove();
        renderQuestion();
    });
}
function arrayShuffler(currentQNum, inArray){
    let ansArray = inArray;
    ansArray.splice(currentQNum, 1);
    let currentIndex = ansArray.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
       randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = ansArray[currentIndex];
        ansArray[currentIndex] = ansArray[randomIndex];
        ansArray[randomIndex] = temporaryValue;
    }
    return ansArray;
}
function renderQuestion(){
    //display painting in prompt element
    //pick 3 random artists from the other paintings
    //populate answer buttons with resources/info
    let currentPainting = questionAns[questionCounter].painting;
    let currentCorrect = questionAns[questionCounter].artist;
    let currentQ = questionCounter;
    let falseAnsArray = arrayShuffler(currentQ, questionAns);
    questionCounter +=1;
    let scrambleAns = [falseAnsArray[0].artist, falseAnsArray[1].artist, falseAnsArray[4].artist, falseAnsArray[2].artist, currentCorrect];
    arrayShuffler(1, scrambleAns);
    alert(currentCorrect);
    $('.js-Q-Counter').html(`Question: ${questionCounter}/10`);
    $('.js-Q-box').html(`<h2>Who painted ${currentPainting}?</h2>`);
    $('.js-A-box').html(
        `<button type="button" class="responseBtn">${scrambleAns[0]}</button>`+
        `<button type="button" class="responseBtn">${scrambleAns[1]}</button>`+
        `<button type="button" class="responseBtn">${scrambleAns[2]}</button>`+ 
        `<button type="button" class="responseBtn">${scrambleAns[3]}</button>`);
}
function onAnsClick(){
    //listen for click on answer buttons
    //on click, run function that renders user feedback page, pass argument 
    //if answer is correct or incorrect
    //record score
}
function renderFeedbackPg(){
    //if argument supplied is correct, populuate 'correct info'
    //otherwise populate 'incorrect info'
    //listen for click on 'next question' button and render next question when clicked
}
function lastQuestion(){
    //after all objects in questionAns array have been displayed,
    //show the end screen and final score, and listen for click on restart btn
}
$(startQuiz());