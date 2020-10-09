import FbFlyText from '../public/images/aragon-text.svg'
import FbFlyLogo from '../public/images/aragon-logo.svg'
import '../styles/navbar.sass'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

const Navbar = props => {
  const { t, i18n } = useTranslation();
  const [open, toggleOpen] = useState(false)
  return (
    <nav
      className={open ? 'navbar open' : 'navbar'}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-logo" href="https://aragonchina.org/">
          <img className="logo-img" src={FbFlyLogo} width="50" height="50" />
          <img className="logo-txt" src={FbFlyText} width="120" height="60" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          onClick={() => {
            toggleOpen(open => !open)
          }}
        >
          <div></div>
        </a>
      </div>
      <div
        className="navbar-menu"
        onClick={() => {
          toggleOpen(open => false)
        }}
      >
        <a className="navbar-item" onClick={() => i18n.changeLanguage(i18n.language == 'en' ? 'zh' : 'en')}>{i18n.language == 'en' ? '中文' : 'EN '}</a>

        <a
          className="navbar-item"
          href="https://mainnet.aragon.org/#/aragonchina/"
          target="_blant"
        >
          Aragon China DAO
        </a>
        {/* <a className="navbar-item" href="https://fbfly.xyz/daoList">
          Explore FB DAOs
        </a> */}
        {/* <a className="navbar-item" href="https://docs.fbfly.xyz/">
          About
        </a> */}
        <a href="https://mainnet.aragonchina.org/" className="navbar-item navbar-start-now">
          {t('start-now')}
        </a>
      </div>
    </nav>
  )
}

export default Navbar
