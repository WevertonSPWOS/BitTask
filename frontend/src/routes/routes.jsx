import { BrowserRouter,Route,Routes } from "react-router-dom";
import TelaIncial                     from "../pages/tela_inicial/telaInicial";
import Cadastro                       from "../pages/cadastro/cadastro";
import Login                          from "../pages/login/login";
import Home                           from "../pages/home/home";
import Tarefa                         from "../pages/tarefa/tarefa";
import Projeto                        from "../pages/projeto/projeto";
import { UserProvider } from "../context/userContext";
import { TarefaContext } from "../context/tarefaContext";
import { ProjetoContext } from "../context/projetoContext";
const Rotas = () =>{
    return(
    <BrowserRouter>
        <UserProvider>
            <ProjetoContext>
                <TarefaContext>
                    <Routes>
                        <Route path="/"          element = {<TelaIncial />} />
                        <Route path="/cadastro"  element = {<Cadastro />}/>
                        <Route path="/login"     element = {<Login />}/>
                        <Route path="/home"      element = {<Home />}/>
                        <Route path="/tarefa"    element = {<Tarefa />}/>
                        <Route path="/projeto"   element = {<Projeto />}/>
                    </Routes>
                </TarefaContext>
            </ProjetoContext>
        </UserProvider>
    </BrowserRouter>

    )
}

export default Rotas;