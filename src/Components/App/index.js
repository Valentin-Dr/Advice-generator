import './index.scss';
import diceIcon from '../../images/icon-dice.svg';
import { useState } from 'react';
import API from '../../middleware';

function App() {
  
  const getAdvice = () => {
    const config = {
      method:'get'
    };
    API(config)
    .then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        setAdviceTitle(response.data.slip.id);
        setAdviceDescription(response.data.slip.advice);
      }
    })
  }

  const [adviceTitle, setAdviceTitle] = useState("117");
  const [adviceDescription, setAdviceDescription] = useState("It is easy to sit up and take notice, what's difficults is getting up and taking action.");

  return (
    <div className="App">
      <div className="advice-container">
        <h1 className="advice-number">Advice #{adviceTitle}</h1>
        <div className="advice-description">{adviceDescription}</div>
        <div className="divider" />
      </div>
      <div className="advice-roll"
        onClick={getAdvice}
      ><img src={diceIcon} alt="dice icon" /></div>
    </div>
  );
}

export default App;
