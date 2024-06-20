
import "../Styles/PlanItem.css";
import CareScale from "./CareScale";

function PlanItem({ id, name, cover, water, light }) {
  
  function handleClick(name) {
    console.log(" ceci est qliquer");
    alert(`vous vouuler acheter cette Plant${name}`);
  }
 
  return (
    <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlanItem;
