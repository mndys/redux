import { useSelector } from 'react-redux'
import styled from 'styled-components'

export default function Card() {
    const { burger } = useSelector((state) => state.state)

    return (
        <CardGrid>
            <h2>burger.name</h2>
            <span>burger.description</span>
            <FlexWrapper>
                <span>sole: burger.price.sole</span>
                <span>menu: burger.price.menu</span>
            </FlexWrapper>
        </CardGrid>
    )
}

const CardGrid = styled.section`
    display: grid;
    place-content: center;
    place-items: center;
    width: 80vw;
    padding: 30px;
    margin: 30px;
    background-color: whitesmoke;
    border-radius: 15px;
    box-shadow: 0 0 4px #3338;

    h2 {
        margin-bottom: 0.2em;
    }

    span {
        margin-bottom: 1em;
    }
`

const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;
`
