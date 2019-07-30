const questionAns = [
    {painting: "The Mona Lisa", artist: "Leonardo da Vinci", pImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg", aImg: "https://static-s.aa-cdn.net/img/ios/867480044/22d5c8d1e441684db43598a3d8ebac2f?v=1"},
    {painting: "Campbell's Soup", artist: "Andy Warhol", pImg: "https://nyoobserver.files.wordpress.com/2011/06/andy-warhol-campbells-colored-soup-can-1965-iii-l-m.jpg?w=204&h=300", aImg: "https://media.newyorker.com/photos/590970c42179605b11ad78f0/master/w_727,c_limit/100111_r19205_p646.jpg"},
    {painting: "The Hallucinogenic Toreador", artist: "Salvador Dali", pImg: "https://upload.wikimedia.org/wikipedia/en/c/cc/The_Hallucinogenic_Toreador.png", aImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/220px-Salvador_Dal%C3%AD_1939.jpg"},
    {painting: "Primordial Chaos", artist: "Hilma Af Klint", pImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Hilma_af_Klint%2C_1906-07%2C_Primordial_Chaos_-_No_16.jpg/220px-Hilma_af_Klint%2C_1906-07%2C_Primordial_Chaos_-_No_16.jpg", aImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Hilma_af_Klint%2C_portrait_photograph_published_in_1901.jpg/220px-Hilma_af_Klint%2C_portrait_photograph_published_in_1901.jpg"},
    {painting: "Mountains and Sea", artist: "Helen Frankenthaler", pImg: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Frankenthaler_Helen_Mountains_and_Sea_1952.jpg/250px-Frankenthaler_Helen_Mountains_and_Sea_1952.jpg", aImg: "https://static01.nyt.com/images/2011/12/27/obituaries/27frankenthaler_cnd/27frankenthaler_cnd-jumbo.jpg"},
    {painting: "Self Portrait", artist: "Frida Kahlo", pImg: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Frida_Kahlo_%28self_portrait%29.jpg/220px-Frida_Kahlo_%28self_portrait%29.jpg", aImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/220px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg"},
    {painting: "Flowers Blooming in the World", artist: "Takeshi Murakami", pImg: "https://d5wt70d4gnm1t.cloudfront.net/media/a-s/artworks/takashi-murakami/None-134819438327/takashi-murakami-flowers-blooming-in-thie-world-and-the-land-of-nir-800x800.jpg", aImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Takashi_Murakami_at_Versailles_Sept._2010_%28crop%29.jpg/220px-Takashi_Murakami_at_Versailles_Sept._2010_%28crop%29.jpg"},
    {painting: "Naked Man", artist: "Banksy", pImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Banksy-ps.jpg/170px-Banksy-ps.jpg", aImg: "https://static1.squarespace.com/static/58c65b7c6a4963946cafbdff/58fc50b9197aea6d06a54a0a/58fd356203596e8981ca1461/1492989290495/banksy-monkey-mask-session-james-pfaff.jpg?format=750w"},
    {painting: "Ram's Head", artist: "Georgia O'Keefe", pImg: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/O%27Keeffe_Georgia_Ram%27s_Head.jpg/220px-O%27Keeffe_Georgia_Ram%27s_Head.jpg", aImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/O%27Keeffe-%28hands%29.jpg/220px-O%27Keeffe-%28hands%29.jpg"},
    {painting: "Woman with a Pearl Neckalce", artist: "Mary Cassat", pImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Mary_Stevenson_Cassatt%2C_American_-_Woman_with_a_Pearl_Necklace_in_a_Loge_-_Google_Art_Project.jpg/200px-Mary_Stevenson_Cassatt%2C_American_-_Woman_with_a_Pearl_Necklace_in_a_Loge_-_Google_Art_Project.jpg", aImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mary_Stevenson_Cassatt_-_Mary_Cassatt_Self-Portrait_-_Google_Art_Project.jpg/220px-Mary_Stevenson_Cassatt_-_Mary_Cassatt_Self-Portrait_-_Google_Art_Project.jpg"},
]
let questionCounter= 0;
let scoreCounter= 0;

function startQuiz(){
    $('.js-restartBtn').on('click', function(){
        restartQuiz();
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
    $('.js-Q-box').html(`<h2 class='js-qPrompt'>Who painted ${currentPainting}?</h2><img src="${questionAns[currentQ].pImg}" alt="${currentPainting}">`);
    $('.js-A-box').html(
        `<button type="button" class="responseBtn js-deleter buttonCSS">${scrambleAns[0]}</button>`+
        `<button type="button" class="responseBtn js-deleter buttonCSS">${scrambleAns[1]}</button>`+
        `<button type="button" class="responseBtn js-deleter buttonCSS">${scrambleAns[2]}</button>`+ 
        `<button type="button" class="responseBtn js-deleter buttonCSS">${scrambleAns[3]}</button>`);
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
        $('.js-A-box').html('<button type="button" class="nextQBtn buttonCSS">Next Question</button>')
    }else{
        $('.js-qPrompt').remove();
        $('.responseBtn').remove();
        $('.js-Q-box').html('<h2>INCORRECT</h2>');
        $('.js-A-box').html('<button type="button" class="nextQBtn buttonCSS">Next Question</button>')
    }
    $('.nextQBtn').on('click', function(e){
        renderQuestion();
    })
}
function restartQuiz(){
    $('.js-qPrompt').remove();
    $('.js-deleter').remove();
    $('.responseBtn').remove();
    $('.js-Q-box').html('<h1 class="js-startPg">Who Painted This?</h1>');
    $('.js-A-box').html('<input type="button" value="start" class="js-startBtn js-startPg buttonCSS">');
    questionCounter = 0;
    scoreCounter = 0;
    $('.js-Q-Counter').html(`Question: ${questionCounter}/10`);
    $('.js-S-Counter').html(`Score: ${scoreCounter}/10`);
    startQuiz();
}
function finishedQuiz(){
    $('.js-qPrompt').remove();
    $('.responseBtn').remove();
    $('.js-Q-box').html('<h2 class="js-qPrompt">Quiz Complete!</h2>' + `<h3 class="js-qPrompt">Score: ${scoreCounter}/10</h3>`);
    $('.js-A-box').html('<button type="reset" class="js-restartBtn2 js-deleter buttonCSS">Take Quiz Again</button>')
    $('.js-restartBtn2').on('click', function(){
        restartQuiz();
    });
}
$(startQuiz());