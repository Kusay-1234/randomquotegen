const quotes = [
  "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "You only live once, but if you do it right, once is enough.", "Many of life’s failures are people who did not realize how close they were to success when they gave up.", "Money and success don’t change people; they merely amplify what is already there." , "You never really learn much from hearing yourself speak.",  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Love is a gift of one's inner most soul to another so both can be whole.", "If I had to choose between breathing or loving you, I would say ‘I love you’ with my last breath.", "I would rather spend one lifetime with you, than face all the ages of this world alone.", "The best thing to hold onto in life is each other.", "Love her but leave her wild." 
];

const quoteElement = document.getElementById("quote");
const buttonElement = document.getElementById("generateButton");

function genRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

buttonElement.addEventListener("click", function(){
  quoteElement.textContent = genRandomQuote();
});

