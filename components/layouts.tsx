import Link from 'next/link'
import styled from 'styled-components'
import { Nav, NavItemProps } from './nav'

const urlLinks: NavItemProps[] = [
  {
    url: '/',
    label: 'Home',
  },

  {
    url: '/photos',
    label: 'Photos',
  },
]

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Nav url={urlLinks} />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1000px;
  margin: auto;
  padding: 1rem 0;
`
