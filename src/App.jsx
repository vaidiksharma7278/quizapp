import Header from "./components/Header";
import QuizPage from "./components/QuizPage";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
function App() {

  return (
   
    <div>
       <Header/>
    <Outlet/>
    <Footer/>
    </div>
  );
}

export default App;

