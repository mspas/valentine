import { useState, useRef } from 'react';
import '../styles/order.scss'
import { scrollInto } from '../Utils';
import Details from './Details';
import kiss from'../assets/kiss1.png';

function Order() {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  
  const handleButtonClick = () => {
    setShowDetails(true);
    scrollInto(detailsRef);
  };

  return (
    <>
      <div className="container order-container">
        <div className="delivery-status">
        <img src={kiss} alt="kiss"/>
          <div className="delivery-status__details">
            <p className="delivery-status__header">Szczegóły zamówienia nr 1 z dnia <b>6 stycznia 2024</b></p>
            <p className="delivery-status__content">Status: <span className="delivery-status__content__status">W trakcie realizacji</span></p>
            <p className="delivery-status__content">Data wysyłki: <b>26 lutego 2024</b></p>
          </div>
        </div>

        <div className="delivery-details-container">
            <div className="order-box">
              <p className="order-box__header">Sposób dostawy</p>

              <div className="order-box__content">
                Odbiór osobisty
              </div>
            </div>

            <div className="order-box">
              <p className="order-box__header">Dane do dostawy</p>

              <div className="order-box__content">
                <p>Dominika Ziomkowska,</p>
                <p>prosto do serduszka <span className="emoji">🙈</span></p>
              </div>
            </div>
            
            <div className="order-box">
              <p className="order-box__header">Płatność</p>

              <div className="order-box__content">
                Do negocjacji <span className="emoji">😏</span>
              </div>
            </div>
          </div>

          <div className="details-box-container">
            <div className="order-box order-box--big">
              <p className="order-box__header">Podsumowanie zamówienia</p>

              <table className="order-box__table">
                <thead>
                  <tr>
                    <th>Zakupione produkty</th>
                    <th>Ilość</th>
                    <th>Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div id="wrapper">
                        <div id="pulsingheart"></div>
                      </div>
                      <span className="order-box__table__item-title">Miłość na zawsze</span>
                    </td>
                    <td className="emoji">♾️</td>
                    <td className="emoji">😘</td>
                  </tr>
                </tbody>
              </table>

              <button className="overview" onClick={handleButtonClick}>
                <span className="overview__icon">😍</span>
                Podgląd
              </button>
            </div>
          </div>
        </div>
      
        {showDetails && <div ref={detailsRef}><Details /></div>}
    </>
  )
}

export default Order
