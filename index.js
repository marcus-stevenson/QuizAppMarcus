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
    let dummyArray = questionAns.slice();
    let currentPainting = questionAns[questionCounter].painting;
    let currentCorrect = questionAns[questionCounter].artist;
    let currentQ = questionCounter;
    let falseAnsArray = arrayShuffler(currentQ, dummyArray);
    questionCounter +=1;
    let scrambleAns = [falseAnsArray[7].artist, falseAnsArray[6].artist, falseAnsArray[4].artist, falseAnsArray[2].artist, currentCorrect];
    arrayShuffler(1, scrambleAns);
    $('.js-Q-Counter').html(`Question: ${questionCounter}/10`);
    $('.js-Q-box').html(`<h2 class='js-qPrompt'>Who painted ${currentPainting}?</h2>`);
    $('.js-A-box').html(
        `<button type="button" class="responseBtn">${scrambleAns[0]}</button>`+
        `<button type="button" class="responseBtn">${scrambleAns[1]}</button>`+
        `<button type="button" class="responseBtn">${scrambleAns[2]}</button>`+ 
        `<button type="button" class="responseBtn">${scrambleAns[3]}</button>`);
    onAnsClick(currentCorrect);
}
function onAnsClick(correctAns){
    //listen for click on answer buttons
    //on click, run function that renders user feedback page, pass argument 
    //if answer is correct or incorrect
    //record score
    $('.responseBtn').on('click', function(e){
        if(questionCounter===10){
            finishedQuiz();
        }else if($(this).text()===correctAns){
            scoreCounter += 1;
            renderFeedbackPg(1);
        }else{
            renderFeedbackPg(0);
        }
    })
}
function renderFeedbackPg(ansNum){
    if(ansNum===1){
        $('.js-qPrompt').remove();
        $('.responseBtn').remove();
        $('.js-S-Counter').html(`Score: ${scoreCounter}/10`);
        $('.js-Q-box').html('<h2>CORRECT!</h2>');
        $('.js-A-box').html('<button type="button" class="nextQBtn">Next Question</button>')
    }else{
        $('.js-qPrompt').remove();
        $('.responseBtn').remove();
        $('.js-Q-box').html('<h2>INCORRECT</h2>');
        $('.js-A-box').html('<button type="button" class="nextQBtn">Next Question</button>')
    }
    $('.nextQBtn').on('click', function(e){
        renderQuestion();
    })
}
function finishedQuiz(){
    $('.js-qPrompt').remove();
    $('.responseBtn').remove();
    $('.js-Q-box').html('<h2>Quiz Complete!</h2>' + `Score: ${scoreCounter}/10`);
    $('.js-A-box').html('<button type="reset">Take Quiz Again</button>')
}
$(startQuiz());