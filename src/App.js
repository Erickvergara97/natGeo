import NavBar from "./components/navBar/navBar";
import Main from "./components/main/Main";
import Footer from "./components/footer/footer";
import Copyright from "./components/copyright/copyright";
import './styles/app/App.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;