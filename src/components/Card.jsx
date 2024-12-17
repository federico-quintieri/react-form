export function Card({ titolo , funzioneModifica}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 onClick={funzioneModifica}>X</h5>
        <h5 className="card-title">{titolo}</h5>
      </div>
    </div>
  );
}
