import Link from 'next/link'
import styled from 'styled-components'

export interface NavItemProps {
  url: string
  label: string
}

export type NavProps = {
  url: NavItemProps[]
}

export const Nav = ({ url }: NavProps) => {
  return (
    <Wrapper>
      <ul>
        {url.map((item, ind) => (
          <li key={ind}>
            <NavLink {...item} />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export const NavLink = ({ url, label }: NavItemProps) => {
  return <Link href={url}> {label} </Link>
}

const Wrapper = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid black;
  ul {
    display: flex;
    list-style: none;
    padding-left: 0;
  }
  ul > li {
    margin-right: 1rem;
    &:hover {
      color: red;
      cursor: pointer;
    }
  }
`
