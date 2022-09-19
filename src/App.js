import styled from 'styled-components';

import Home from './components/Home';

import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (

    <AppStyle className="App">

      <Home />

    </AppStyle>

  )

}

const AppStyle = styled.div`
  flex: 1;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #e4ecf7;
  color: #444;
  transition: background-color .5s, color .5s;
  >div {
    z-index: 10;
  }
  button, a, input {
    color: inherit;
  }
  button, input {
    border: 1px solid #333;
    transition: background-color .5s, color .5s, border .5s;
  }
  svg {
    transition: fill .5s, color .5s, border .5s;
  }
`

export default App;