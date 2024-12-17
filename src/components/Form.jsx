
// Componente Form
export function Form({ inpValue, callbackOnChange,callbackArray }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("Ho cliccato submit e aggiorno arrayState");
        callbackArray(inpValue)
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
    </form>
  );
}
