import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

import BarraNavegacao       from '../../components/barraNavegacao'
import CardCriar            from '../../components/card/cardCriar';
import ilustracaoTarefa     from '../../assets/ilustracaoTarefa.svg';
import ilustracaoProjeto    from "../../assets/ilustracaoProj.svg";
import Container            from '../../components/containers/container';
import { ModalEnviarProjeto,ModalEnviarTarefa } from '../../components/modal/modal';
import Desempenho from '../../components/desempenho/desempenho';
import { UserGlobal } from '../../context/userContext';

const Home = () => {

    const {data,login,loading,nome,userLogin,erro} = React.useContext(UserGlobal)

    const [tarefa, setTarefa] = React.useState(false)
    const [projeto, setProjeto] = React.useState(false)
    const handleCloseTarefa = () => setTarefa(false);
    const handleCloseProjeto = () => setProjeto(false);
  return (
    <div className='body-home'>
        <header className='box-nav'>
            <BarraNavegacao ariaLabel={"navegação primária"} fundo="#F0F5FF"/>
        </header>

        <div>
            <header className='box-header-secun'>
                <p>Bom dia </p>
                <section aria-label='dia de hoje' id='dia'>
                    <p>{moment().format('DD-MM-YYYY')}</p>
            
                </section>
            </header>

            <main id='box-main-home'>
                <section className='card-criar'>
                    <CardCriar
                        titulo="Criar Tarefa"
                        descricao={"Crie tarefas com data de entrega e com nível de prioridade "}
                        img={ilustracaoTarefa}
                        open={projeto}
                        setOpen={setTarefa} 
                        />
                    <ModalEnviarTarefa aberto={tarefa} sair={handleCloseTarefa}/>
                    <CardCriar 
                        titulo="Criar Projeto"
                        descricao={"Crie uma lista de tarefas para organizar seu dia-a-dia."}
                        img={ilustracaoProjeto}
                        open={tarefa}
                        setOpen={setProjeto} 
                        />
                    <ModalEnviarProjeto aberto={projeto} sair={handleCloseProjeto} />
                </section>

                <section className='' aria-label="informações gerais">
                    <Container />
                </section>

                <section className='body-desempenho'>
                    <Desempenho />
                </section>
            </main>

        </div>
      
    </div>
  )
}

export default Home
