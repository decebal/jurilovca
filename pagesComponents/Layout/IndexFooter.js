import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icon from './Icon/Icon'
import NavItem from './Nav/NavItem'
import Nav from './Nav/Nav'

export default function IndexFooter({
  siteTitle,
  navigationEntries,
  socialNavigationEntries,
}) {
  return (
    <>
      <footer className="relative bg-gray-900 pt-8 pb-6">
        <div className="container max-w-7xl mx-auto px-4">
          <hr className="my-6 border-amber-500" />
          <div className="flex flex-wrap items-center md:justify-between justify-center mb-4">
            <div className="w-full md:w-8/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-medium py-1">
                <Nav>
                  {navigationEntries.map((entry) => (
                    <Link href={entry.href} key={entry.href}>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a>
                        <NavItem ripple="light">
                          <p className="text-white-900 flex items-center">
                            {entry.label}
                          </p>
                        </NavItem>
                      </a>
                    </Link>
                  ))}
                  <Link href="/privacy">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                      <NavItem ripple="light">
                        <p className="text-white-900 flex items-center">
                          Privacy
                        </p>
                      </NavItem>
                    </a>
                  </Link>
                </Nav>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center md:justify-between justify-center mb-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-medium py-1">
                {socialNavigationEntries.map((entry) => (
                  <a
                    href={entry.href}
                    target="_blank"
                    className="text-white-900 mr-4 justify-center"
                    rel="noopener noreferrer"
                    key={entry.href}
                  >
                    <Icon
                      color="white"
                      size="base"
                      family="font-awesome"
                      name={`fab ${entry.icon}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-medium py-1">
                Copyright © {new Date().getFullYear()} - {siteTitle}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

IndexFooter.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  navigationEntries: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  socialNavigationEntries: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
}
