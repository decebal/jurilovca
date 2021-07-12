/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline,jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import Ripple from 'material-ripple-effects'

export default function NavbarItem({children, active, ripple, ...rest}) {
  const rippleEffect = new Ripple()

  return (
    <li
      {...rest}
      className={`${active === 'dark' && 'bg-black bg-opacity-20'} ${
        active === 'light' && 'bg-white bg-opacity-20'
      } px-5 py-4 flex gap-1 items-center text-base uppercase leading text-white rounded-lg`}
      onMouseUp={(e) => {
        ripple === 'dark' && rippleEffect.create(e, 'dark')
        ripple === 'light' && rippleEffect.create(e, 'light')
      }}
    >
      {children}
    </li>
  )
}

NavbarItem.defaultProps = {
  active: '',
  ripple: '',
  className: '',
}

NavbarItem.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
  className: PropTypes.string,
  ripple: PropTypes.string,
}
