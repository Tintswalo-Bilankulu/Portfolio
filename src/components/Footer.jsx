import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <a className="footer__brand" href="#home">
          <img
            className="footer__mark"
            src="/beelas-mark.png"
            alt=""
            width="314"
            height="271"
          />
          Tintswalo Bilankulu
        </a>
        <p className="footer__copy">
          © {year} Tintswalo Bilankulu. All rights reserved.
        </p>
        <p className="footer__note">
          Built with React and Vite. Designed with a Beelas-inspired identity.
        </p>
      </div>
    </footer>
  )
}

export default Footer
