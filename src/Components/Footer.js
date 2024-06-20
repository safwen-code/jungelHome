import { useState } from "react";
import "../Styles/Footer.css";
function Footer() {
  const [valueInput, setvalueInput] = useState();
  function onhundlerChange(e) {
    let emailvalue = e.target.value;
    setvalueInput(emailvalue);
    console.log("email val", emailvalue);
  }
  function checkEmail() {
    if (!valueInput.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    }
  }
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre mail"
        value={valueInput}
        onChange={(e) => onhundlerChange(e)}
        onBlur={checkEmail}
      />
    </footer>
  );
}
export default Footer;
