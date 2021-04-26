import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import burgers from '../../data/burgers.json'
import { previousBurger, nextBurger } from '../../redux/actions'

export default function Card() {
    const { burgerNumber } = useSelector((state) => state.page)
    const dispatch = useDispatch()

    return (
        <CardGrid>
            <h2>{burgers[burgerNumber].name}</h2>
            <span className="description">
                {burgers[burgerNumber].description}
            </span>
            {burgers[burgerNumber].ingredients && (
                <>
                    <h3 className="ingredients">Ingredients:</h3>
                    <FlexWrapper>
                        {burgers[
                            burgerNumber
                        ].ingredients.map((ingredient, index) =>
                            index <
                            burgers[burgerNumber].ingredients.length - 1 ? (
                                <span key={index}>{ingredient}, </span>
                            ) : (
                                <span key={index}>{ingredient}</span>
                            )
                        )}
                    </FlexWrapper>
                </>
            )}
            <ButtonWrapper>
                <Button
                    onClick={() => dispatch(previousBurger())}
                    disabled={burgerNumber === 0}
                >
                    ◀
                </Button>
                <Button
                    onClick={() => dispatch(nextBurger())}
                    disabled={burgerNumber === burgers.length - 1}
                >
                    ▶
                </Button>
            </ButtonWrapper>
        </CardGrid>
    )
}

const CardGrid = styled.section`
    display: grid;
    justify-content: stretch;
    align-items: center;
    text-align: center;
    grid-template-columns: 1fr, 1fr;
    width: 80vw;
    height: 25vh;
    padding: 30px;
    margin: 30px;
    background-color: whitesmoke;
    border-radius: 15px;
    box-shadow: 0 0 4px #3338;

    h2 {
        margin-bottom: 0.2em;
        grid-column: 1 / 3;
    }

    h3 {
        font-size: 1em;
        justify-self: end;
        grid-column: 1 / 2;
    }

    .description {
        grid-column: 1 / 3;
        margin-bottom: 1em;
    }
`

const FlexWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0 5px;
    flex-wrap: wrap;
    grid-column: 2 / 3;
    margin-left: 5px;
    justify-self: left;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0 5px;
    grid-column: 1 / 3;
    width: 100%;
`

const Button = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background-color: #ddd;
`
