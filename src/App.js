import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [index, setIndex] = useState("");

  const OriginateIndex = () => {
    setIndex((Math.floor(Math.random() * quotes.length + 1)))
    console.log(setIndex)
  }

  useEffect(() => {
    OriginateIndex()
  }, []) //[] allows the function to only be executed onload of the page

  const quotes = [
    "It’s the job that’s never started as takes longest to finish.",
    "But in the end it’s only a passing thing, this shadow; even darkness must pass.",
    "It is not the strength of the body, but the strength of the spirit.",
    "It is useless to meet revenge with revenge: it will heal nothing.",
    "Deeds will not be less valiant because they are unpraised.",
    "Even the smallest person can change the course of history.",
    "There’s some good in this world, Mr. Frodo… and it’s worth fighting for.",
    "A hunted man sometimes wearies of distrust and longs for friendship.",
    "Yet such is oft the course of deeds that move the wheels of the world: small hands do them because they must, while the eyes of the great are elsewhere.",
    "It is a strange fate that we should suffer so much fear and doubt over so small a thing… such a little thing.",
    "He that breaks a thing to find out what it is, has left the path of wisdom.",
    "All we have to decide is what to do with the time that is given us.",
    "Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be eager to deal out death in judgement. For even the very wise cannot see all ends.",
    "It is not our part to master all the tides of the world, but to do what is in us for the succor of those years wherein we are set, uprooting the evil in the fields that we know, so that those who live after may have clean earth to till.",
    "Many are the strange chances of the world, and help oft shall come from the hands of the weak when the wise falter.",
    "The burned hand teaches best. After that advice about fire goes to the heart."
  ]
  const author = [
    "Sam Gamgee",
    "Sam Gamgee",
    "J.R.R. Tolkien",
    "Frodo Baggins",
    "Aragorn",
    "Lady Galadriel",
    "Sam Gamgee",
    "Aragorn",
    "Elrond",
    "Boromir",
    "Gandalf",
    "Gandalf",
    "Gandalf",
    "Gandalf",
    "Gandalf",
    "Gandalf"
  ];

 const displayQuote = quotes[index];
 const displayAuthor = author[index];

  return (
    <div id="quote-box" onLoad={OriginateIndex}>
      <h1>Random Quote Generator</h1>
      <p id="text">{displayQuote}</p>
      <span id="author">{displayAuthor}</span>
      <button id="new-quote" onClick={OriginateIndex}>Click Me</button>
      <a id="tweet-quote" href="twitter.com/intent/tweet"></a>
    </div>
  );
}

export default App;
