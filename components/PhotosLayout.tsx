import styled from 'styled-components'


export const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.5rem;
`

export const Photo = ({ url }) => {
  return (
    <Wrapper>
      <img src={url} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: #ffff;
  outline: none;
  border-radius: 0.2em;
  border: 1px solid red;
  line-height: 0;

  img{
    width: 100%;
    height: auto;
  }
`
