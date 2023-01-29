import styled from 'styled-components';

export const Container = styled.div`
    background-color: red;
    color: #ffff;
    outline: none;
    border-radius: .2em;
    margin: 1em 1em;
    height: auto;
    width: 500px;
    background-image: url('${props=>props.image}');
    background-position: center;
    background-size: cover;
    overflow: hidden;
`

const ImageFrame = ({src})=> {
    return(
        <Container>
            <img src={src} width="101%" />
        </Container>
    )
}

export default ImageFrame