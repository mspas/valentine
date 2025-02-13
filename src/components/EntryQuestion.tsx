import { useEffect, useRef, useState } from 'react'
import '../styles/entry-question.scss'
import Order from './Order';
import { scrollInto } from '../Utils';
import { entryLines } from '../Texts';

function EntryQuestion() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({ top: null as number | null, left: null as number | null });
  const [showOrder, setShowOrder] = useState(false);
  const [noText, setNoText] = useState('Nie');
  const orderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < entryLines.length + 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleYesButtonClick = () => {
    setShowOrder(true);
    scrollInto(orderRef);
  };

  const handleNoButtonClick = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setButtonPosition({ top: randomTop, left: randomLeft });
    setNoText('Nie 😶');
  };

  return (
    <>
      <div className="container home-container">
        <div className="text-container">
          {entryLines.map((line, index) => (
            <h1 key={index} className={`text-container__title text-container__title--${index} fade-in ${index < visibleCount ? "visible" : "hidden"}`}>
              {line}
            </h1>
          ))}
        </div>

        <div className={`toolbox fade-in ${visibleCount > entryLines.length ? "visible" : "hidden"}`}>
          <button className='toolbox__button toolbox__button--success' onClick={handleYesButtonClick}>Tak😊</button>

          {!!buttonPosition.top && !!buttonPosition.left && <span className='toolbox__mock'></span>}

          <button 
              className='toolbox__button toolbox__button--error' 
              style={{ position: `${!buttonPosition.top && !buttonPosition.left ? 'relative' : 'absolute'}`, top: `${buttonPosition.top}%`, left: `${buttonPosition.left}%` }} 
              onClick={handleNoButtonClick}
            >
              {noText}
            </button>
        </div>
      </div>

      {showOrder && <div ref={orderRef}><Order /></div>}
    </>
  )
}

export default EntryQuestion
