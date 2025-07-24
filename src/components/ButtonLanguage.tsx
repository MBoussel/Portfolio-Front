import "../assets/styles/buttonlanguage.css";
import EnglishFlag from "../assets/pictures/icons8-anglais-96.png";


function ButtonLanguage() {
 

  return (
    <button className="buttonDark buttonLight" type="button" >
      <img src={EnglishFlag} alt="English Flag" />
    </button>
  );
}
export default ButtonLanguage;
