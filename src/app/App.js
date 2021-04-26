import styled from 'styled-components'
import Card from './Components/Card'
import Counter from './Components/Counter'

function App() {
    return (
        <AppGrid className="App">
            <Card />
            <Counter />
        </AppGrid>
    )
}

export default App

const AppGrid = styled.section`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
`
