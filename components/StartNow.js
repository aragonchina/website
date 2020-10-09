import '../styles/startnow.sass'
import start from '../public/images/start-now-inner-back.svg'
import { useTranslation } from 'react-i18next';
const StartNow = props =>{ 
  const { t, i18n } = useTranslation();
  return(
  <section className="start-now">
    <div className="start-now-inner">
      <img className="logo-watermark" src={start} />
      <span className="start-now-text">
      {t('start-now-text')}
      </span>
      <a href="https://mainnet.aragonchina.org/" className="start-now-button">
      {t('start-now')}
      </a>
    </div>
  </section>
)
}
export default StartNow
