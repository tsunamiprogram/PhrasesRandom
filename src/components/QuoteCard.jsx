import './QuoteCard.css'
import quotes from '../db/quotes.json'
import { getRandomElement } from '../utils/getrandom';


const QuoteCard = ({quote, setQuote, setCurrentBg, backgrounds}) => {

    const handleChangeQuote = () => {
        setQuote(getRandomElement(quotes));
        setCurrentBg(getRandomElement(backgrounds))
    } 

  return (

    <section className='quoteCard'>
        <article className='quoteCard--container'>
            <h1 className='quoteCard--title'>Best Famous Quotes of All Times</h1>
            <p className='quoteCard--phrase'>{quote.phrase} </p>

            <button className='quoteCard--btn' onClick={handleChangeQuote}> <img className='icon' src='/public/\shuffle.png '/> </button>
        </article>

        <footer className='quoteCard--footer'>
            Author: {quote.author}
        </footer>
    </section>
  )
}
export default QuoteCard