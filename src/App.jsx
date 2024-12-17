import { useState } from "react";
import { Form } from "./components/Form";

function App() {
  const [inputValue, setInputValue] = useState("");

  // Faccio funzione callback che mando a onChange dell'input
  const callbackOnChange = (nuovoInpuValue) => {
    setInputValue(nuovoInpuValue);
  };

  return (
    <div className="container">
      <h1>Inserisci articolo</h1>
      {/* Passo la variabile reattiva collegata a input */}
      <Form inpValue={inputValue} callbackOnChange={callbackOnChange} />
    </div>
  );
}

export default App;
