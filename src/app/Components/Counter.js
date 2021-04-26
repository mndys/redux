import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import {
    add2IfOdd,
    decremented,
    decrementedBy5,
    incremented,
    incrementedBy5,
    resetCounter,
    subtract2IfEven,
} from '../../redux/actions'

function Counter() {
    const { value } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <Wrapper>
            <h1>The Counter is: {value}</h1>
            <Button onClick={() => dispatch(incrementedBy5())}>+5</Button>
            <Button onClick={() => dispatch(incremented())}>+1</Button>
            <Button onClick={() => dispatch(add2IfOdd())}>+2 if odd</Button>
            <Button onClick={() => dispatch(resetCounter())}>0</Button>
            <Button onClick={() => dispatch(subtract2IfEven())}>
                -2 if even
            </Button>
            <Button onClick={() => dispatch(decremented())}>-1</Button>
            <Button onClick={() => dispatch(decrementedBy5())}>-5</Button>
        </Wrapper>
    )
}

export default Counter

const Wrapper = styled.section`
    display: grid;
    place-content: center;
    place-items: center;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr 1fr;
    width: 80vw;
    height: fit-content;

    h1 {
        grid-column: 1 / 100;
    }
`

const Button = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    background-color: #ddd;
    border-radius: 15px;
`
