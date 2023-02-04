import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
`
//Todo: Add Option to view alt text like twitter
export const Photo = ({ url, altText, id }) => {
  return (
    <div>
      <Wrapper>
        <Image src={url} alt={altText} width={300} height={300} />
        <div>
          <span>
            <Link href={`/photo/${id}`}>View Image</Link>
          </span>
        </div>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  outline: none;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 100%;
  overflow: hidden;

  div {
    position: absolute;
    display: none;
    width: 100%;
    bottom: 0;
    padding: 1rem;
    background-color: #0000001e;
  }
  :hover {
    div {
      display: block;
    }
  }
  img {
    width: 100%;
    height: auto;
    position: absolute;
  }
`
