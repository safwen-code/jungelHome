import { useState } from "react";
function QuestionForm() {
  const [inputValue, setinputValue] = useState("yr question please");

  function hundelChange(e) {
    if (!e.target.value.includes("f")) {
      setinputValue(e.target.value);
    }
  }
  function HandelSubmit(inputValue) {
    alert(`do you want to post this ${inputValue}`);
  }
  return (
    <form onSubmit={() => HandelSubmit(inputValue)}>
      <input
        type="text"
        name="MyInput"
        value={inputValue}
        onChange={(e) => hundelChange(e)}
      />
      <button type="submit">Entrer</button>
    </form>
  );
}
export default QuestionForm;
