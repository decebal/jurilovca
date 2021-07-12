import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PropTypes from 'prop-types'
import Navbar from './Navbar/Navbar'
import NavbarContainer from './Navbar/NavbarContainer'
import NavbarWrapper from './Navbar/NavbarWrapper'
import NavbarBrand from './Navbar/NavbarBrand'
import NavbarToggler from './Navbar/NavbarToggler'
import NavbarCollapse from './Navbar/NavbarCollapse'
import Nav from './Nav/Nav'
import NavItem from './Nav/NavItem'
import Icon from './Icon/Icon'

export default function IndexNavbar({navigationEntries}) {
  const [openNavbar, setOpenNavbar] = useState(false)

  return (
    <Navbar color="transparent" navbar className="border-b-2 max-h-20">
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>
            <Link href="/">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>
                <Image
                  src={require('public/images/logo/logo.svg')}
                  height={33}
                  width={207}
                />
              </a>
            </Link>
          </NavbarBrand>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple="dark"
            color="gray"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            {navigationEntries.map((entry) => (
              <Link href={entry.href} key={entry.href}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                  <NavItem ripple="light">
                    {entry.icon && <Icon name={entry.icon} />}
                    <p className="flex items-center">{entry.label}</p>
                  </NavItem>
                </a>
              </Link>
            ))}
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  )
}

IndexNavbar.propTypes = {
  navigationEntries: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
}
