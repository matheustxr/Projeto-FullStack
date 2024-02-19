import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login2 from "../pages/Login/Login";
import Register from "../pages/Registrar/Registrar";
import Cadastro from "../pages/cadastro/Index";
import ErrorPage from "../pages/Error/Error";
import Footer from "../componentes/Footer/Index";
import Private from "../pages/Privada/Private";
import RequireAuth from "../contexts/Auth/RequiereAuth";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";

function Routers() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await auth.signOut();
    navigate('/');
  }
  return (
    <>
      <header>
        <nav className="">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Registrar</Link>
        <Link to="/cadastrar-card">Cadastrar Card</Link>
        <Link to="/private">Página Privada</Link>
        {auth.user && <button onClick={handleLogOut}>Sair</button>}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login2 /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/cadastrar-card" element={ <Cadastro /> } />
          <Route path="/private" element={<RequireAuth><Private /></RequireAuth>}/>
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
