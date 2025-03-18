import styled from 'styled-components'
import { Button } from '../styled/Button'
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src="/images/cubes.png" alt="" />
      </div>
      <div className='content'>
        <h1>Dice Game</h1>
        {/* { toggle } means StartGame is expecting a function from the parent.
When you click the "Play Now" button, it runs toggle().
Since toggle = toggleGamePlay, it changes isGameStarted in App */}
        <Button
        onClick={toggle}
        >Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
max-width: 1180px;
display: flex;
align-items: center;
margin: 0 auto;
height: 100vh;

.content {
  h1{
    font-size: 96px;
    white-space: nowrap;
    margin-bottom: 0;
  }
}

`
