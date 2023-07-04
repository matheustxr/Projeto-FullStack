import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Index";
import Login from "./pages/login/Index";
import Cadastro from "./pages/cadastro/Index";
import ErrorPage from "./pages/Error/Index";
import Footer from "./componentes/Footer/Index";

function App() {

  return (
    <>
      <header>
        <nav className="">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/cadastro" element={ <Cadastro /> } />
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
