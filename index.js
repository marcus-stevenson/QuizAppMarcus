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
function startQuiz(){
    //render start page
    //listen for click on start button and render first queston screen
    // listen for click on restart button and render first question, reset score
}
function renderQuestion(){
    //display painting in prompt element
    //pick 3 random artists from the other paintings
    //populate answer buttons with resources/info
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