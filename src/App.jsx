import { useState } from "react";
import "./styles.css";

export default function App() {
  const [jokeList, setjokeList] = useState([]);
  const [showAnswer, setshowAnswer] = useState(false);
  function getJokeData() {
    async function fetchJoke() {
      const url = "https://official-joke-api.appspot.com/random_joke/";
      const res = await fetch(url);
      const joke = await res.json();
      console.log(joke);
      setjokeList([...jokeList, joke]);
    }
    fetchJoke();
  }

  function renderJoke() {
    if (showAnswer) {
      return jokeList.map((eachJoke) => {
        return (
          <div>
            <p>Question: {eachJoke.setup}</p>
            <p>Answer: {eachJoke.punchline}</p>
            <hr />
          </div>
        );
      });
    }
    return jokeList.map((eachJoke) => {
      return (
        <div>
          <p>Question: {eachJoke.setup}</p>
          <hr />
        </div>
      );
    });
  }
  function removeJokeData() {
    jokeList.pop();
    setjokeList([...jokeList]);
  }
  function getAnswer() {
    if (showAnswer) {
      setshowAnswer(false);
    } else {
      setshowAnswer(true);
    }
  }
  return (
    <div className="App">
      <h2>It is time for fun!</h2>
      {renderJoke()}
      <button onClick={getJokeData}>Get question</button>
      <button onClick={getAnswer}>Show answer</button>
      <button onClick={removeJokeData}>Remove joke</button>
    </div>
  );
}
