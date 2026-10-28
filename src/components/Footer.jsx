import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <a className="footer__brand" href="#home">
          <svg
            className="footer__mark"
            viewBox="0 0 32 32"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M16 3 L28 10 V22 L16 29 L4 22 V10 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M16 10 L21 13 V19 L16 22 L11 19 V13 Z"
              fill="#e8b84a"
            />
          </svg>
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
