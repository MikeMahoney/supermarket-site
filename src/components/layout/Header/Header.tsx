import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import './HeaderStyles.scss'
import Media from 'react-media'
import { HamburgerIcon } from 'components/common/Icons/HamburgerIcon/HamburgerIcon'
import Navigation from '../Navigation/Navigation'

const Header: React.FC = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false)

  const toggleMobileMenu = (): void => {
    setMobileMenuActive(!mobileMenuActive)
  }

  return (
    <header className='header'>
      <div className='header__main'>
        <Link className='header__main__title' to={'/'}>
          {'Supermarket'}
        </Link>
        <Media
          queries={{
            mobile: '(max-width: 768px)',
            desktop: '(min-width: 768px)'
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.desktop && <Navigation />}
              {matches.mobile && (
                <button className='header__main__mobile-button' onClick={toggleMobileMenu}>
                  <HamburgerIcon />
                </button>
              )}
            </Fragment>
          )}
        </Media>
      </div>
      <Media
        queries={{
          mobile: '(max-width: 768px)'
        }}
      >
        {(matches) => mobileMenuActive && matches.mobile && <Navigation mobile={true} />}
      </Media>
    </header>
  )
}

export default Header
