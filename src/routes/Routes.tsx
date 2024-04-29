import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import CadastroPage from "../pages/cadastroAlura/Index";
import ErrorPage from "../pages/Error/ErrorPage";
import Footer from "../componentes/PROJETO ALURA/Footer/Index";
import PrivatePage from "../pages/Privada/PrivatePage";
import RequireAuth from "../contexts/Auth/RequireAuth";
import LoginRegister from "../pages/Login-Register/Login-Register";

function Routers() {
  return (
    <>
      <header>
        <nav className="">
        <Link to="/">Home</Link>
        <Link to="/login-register">Login - Registrar</Link>
        <Link to="/cadastrar-card">Cadastrar Card</Link>
        <Link to="/private">Página Privada</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/login-register" element={ <LoginRegister /> } />
          <Route path="/cadastrar-card" element={ <CadastroPage /> } />
          <Route path="/private" element={<RequireAuth><PrivatePage /></RequireAuth>}/>
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Routers;
