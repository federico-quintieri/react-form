// Componente Form
export function Form({ inpValue, callbackOnChange }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("Ho cliccato submit");
        // Devo richiamare un componente al submit del form
        <h1>{inpValue}</h1>
      }}
    >
      <div className="form-group">
        <label htmlFor="inputTitolo">Titolo</label>
        <input
          type="text"
          className="form-control"
          id="inputTitolo"
          value={inpValue}
          onChange={(event) => {
            callbackOnChange(event.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <h3>{inpValue}</h3>
    </form>
  );
}
