import { Link } from 'gatsby'
import React from 'react'

import './Header.scss'

type HeaderProps = {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({
  siteTitle = '',
}) => (
  <div
    className="header__container"
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 className="header__text">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export { Header }
