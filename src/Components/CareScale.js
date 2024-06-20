import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function CareScale({ scaleValue, careType }) {
  const tabRequired = {
    1: "peu",
    2: "moderement",
    3: "beaucoup",
  };
  function declencheClick(careType) {
    console.log(careType);
    alert(
      `Cette plante requiert ${tabRequired[scaleValue]} de ${
        careType === "light" ? "lumière" : "/d arrosage"
      }`
    );
  }
  const Range = [1, 2, 3];
  const scaleType = careType === "light" ? "☀️" : "🤽";
  return (
    <div onClick={() => declencheClick(careType)}>
      {Range.map((rangeEle) => (
        <span key={rangeEle.toString()}>
          {scaleValue >= rangeEle ? scaleType : null}
        </span>
      ))}
    </div>
  );
}
export default CareScale;
