import './AnimalCard.css';

export default function AnimalCard({ name, type, says, top, left }) {
  return (

    <div className = 'animal' style={{ top: top, left: left }}>
      <img src = {`/animals/${type}.svg`}></img>
      <p>{name}</p>
      <p>{says}</p>
    </div>

  );
}