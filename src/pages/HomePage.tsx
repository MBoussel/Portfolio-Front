import DarkModeButton from "../components/DarkModeButton";
import "../assets/styles/homePage.css";
import ButtonLanguage from "../components/ButtonLanguage";
export default function HomePage() { 
    return (
        <div>
            <h1>Hello HomePage</h1>
            <DarkModeButton/>
            <ButtonLanguage/>
        </div>
    )
}