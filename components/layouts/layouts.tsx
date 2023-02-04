import styled from 'styled-components'
import { Nav, NavItemProps } from '../Nav'

const urlLinks: NavItemProps[] = [
  {
    url: '/',
    label: 'Home',
  },

  {
    url: '/photos',
    label: 'Photos',
  },

  {
    url: '/upload',
    label: 'Upload',
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
  max-width: 1000px;
  margin: auto;
  padding: 1rem 0;
`
