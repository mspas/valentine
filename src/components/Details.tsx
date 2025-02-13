import '../styles/details.scss'
import { detailsTexts } from '../Texts'

function Details() {
  return (
    <>
      <div className="container details-container">
        <div className="card">
          <div className="card__header" dangerouslySetInnerHTML={{__html: detailsTexts.header}}/>

          <div className="card__content" dangerouslySetInnerHTML={{__html: detailsTexts.content}} />

          <div className="card__footer" dangerouslySetInnerHTML={{__html: detailsTexts.footer}} />
        </div>
      </div>
    </>
  )
}

export default Details
