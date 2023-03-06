import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import './styles/App.css'
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Footer from "./components/Footer";
import LogementInfo from "./pages/LogementInfo";
import Erreur404 from "./pages/Erreur";

function App() {
  return (
    <div className="app">
      <div className="global">
        <Navbar/>
        <Routes>
          <Route  path="/" element={<Accueil/>} />
          <Route path="/Apropos" element={<Apropos/>}/>
          <Route path="/Logement" element={<LogementInfo/>}/>
          <Route path="/Erreur" elemement={<Erreur404/>}/>
        </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;