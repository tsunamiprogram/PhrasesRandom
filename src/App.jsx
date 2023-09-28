import { useState } from "react";
import "./App.css";
import quotes from "./db/quotes.json";
import { getRandomElement } from "./utils/getrandom";
import QuoteCard from "./components/QuoteCard";

const backgrounds = ["Bg1", "bg2opt", "bg3opt", "bg4opt"];

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes));
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds));

  return (
    <main className={`main--container ${currentBg}`}>
      <QuoteCard
        quote={quote}
        setQuote={setQuote}
        setCurrentBg={setCurrentBg}
        backgrounds={backgrounds}
      />
    </main>
  );
}

export default App;
