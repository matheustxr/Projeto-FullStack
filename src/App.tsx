import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Index";
import Login from "./pages/login/Index";
import Cadastro from "./pages/cadastro/Index";
import ErrorPage from "./pages/Error/Index";
import Footer from "./componentes/Footer/Index";
import Private from "./pages/Privada/Index";
import RequireAuth from "./contexts/Auth/RequiereAuth";

function App() {

  return (
    <>
      <header>
        <nav className="">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/private">Página Privada</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/cadastro" element={ <Cadastro /> } />
          <Route path="/private" element={ <RequireAuth><Private /></RequireAuth> } />
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
