import { useState } from 'react'
import styled from 'styled-components'

function Counter() {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter((prevCounter) => prevCounter + 1)
    }
    const decrement = () => {
        setCounter((prevCounter) => prevCounter - 1)
    }

    return (
        <Wrapper>
            <h1>The Counter is: {counter}</h1>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
        </Wrapper>
    )
}

export default Counter

const Wrapper = styled.section`
    display: grid;
    place-content: center;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 80vw;
    height: fit-content;

    h1 {
        grid-column: 1 / 5;
    }
`

const Button = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    background-color: #ddd;
    border-radius: 15px;
    grid-column: 2 / 3;

    :last-child {
        grid-column: 3 / 4;
    }
`
