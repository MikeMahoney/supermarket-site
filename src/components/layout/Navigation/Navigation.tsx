import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationStyles.scss'
import { BasketIcon } from 'components/common/Icons/BasketIcon/BasketIcon'
import Count from 'components/common/Count/Count'
import { useAppSelector } from 'hooks'

interface INavigation {
  mobile?: boolean
}

const Navigation: React.FC<INavigation> = ({ mobile = false }) => {
  const basketCount = useAppSelector((state) => state.basket.productList.length)

  return (
    <nav className={`navigation ${mobile ? 'navigation--mobile' : ''}`}>
      <Link to={'/'}>{'Products'}</Link>
      <Link to={'/basket'}>
        {'Basket'}
        <BasketIcon />
        {basketCount > 0 && <Count value={basketCount} />}
      </Link>
    </nav>
  )
}

export default Navigation
