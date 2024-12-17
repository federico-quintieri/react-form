import { useState } from "react";
import { Form } from "./components/Form";
import { Card } from "./components/Card";

function App() {
  // State per valore input
  const [inputValue, setInputValue] = useState("");

  // State per arrayCard
  const [arrayCard, setarrayCard] = useState([]);

  // Faccio funzione callback che mando a onChange dell'input
  const callbackOnChange = (nuovoInpuValue) => {
    setInputValue(nuovoInpuValue);
  };

  const callbackArrayState = (nuovoElemento) => {
    // Faccio nuovo array copiando il precedente ed aggiungendo il nuovo elemento

    const newArray = [...arrayCard, nuovoElemento];
    // Sostituisco il valore della variabile ArrayState con questo nuovo array
    setarrayCard(newArray);
  };

  const callbackArrayStateRimuovi = (elementoRimosso) => {
    const newArray = arrayCard.filter(
      (currElement) => currElement !== elementoRimosso
    );
    setarrayCard(newArray);
  };

  return (
    <div className="container">
      <h1>Inserisci articolo</h1>
      {/* Passo la variabile reattiva collegata a input */}
      <Form
        inpValue={inputValue}
        callbackOnChange={callbackOnChange}
        callbackArray={callbackArrayState}
      />

      {arrayCard !== null &&
        arrayCard.map((currElement, currIndex) => (
          <Card
            key={currIndex}
            titolo={currElement}
            funzioneModifica={() => callbackArrayStateRimuovi(currElement)}
          />
        ))}
    </div>
  );
}

export default App;
