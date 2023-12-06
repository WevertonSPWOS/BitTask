import React from 'react'
import BarraNavegacao from '../../components/barraNavegacao'
import Header from '../../components/header/header'
import Container from '../../components/containers/container'
import CardProjeto from '../../components/card/cardProjeto'


const Projeto = () => {
  const dados = [
    {
      nome : 'teste',
      descricao : 'arquivo de teste',
      tarefas : 5,
      categoria : "profissional"
    },
    {
      nome : 'teste',
      descricao : 'arquivo de teste',
      tarefas : 5,
      categoria : "profissional"
    },
    {
      nome : 'teste',
      descricao : 'arquivo de teste',
      tarefas : 5,
      categoria : "profissional"
    }
]

  return (
    <div className='body-home'>
      <header>
        <BarraNavegacao  fundo="#F0F5FF"/>
      </header>
      <section className='box-projeto'>
        <header>
          <Header titulo="Projetos"/>
        </header>

        <main className='main-projeto' aria-label=''>
          {dados.map((item) =>{
            return(
              <CardProjeto
                key={item.nome} 
                nome={item.nome}
                decricao={item.descricao}
                categoria={item.categoria}
                tarefa={item.tarefas}
                fundo="#2F2F2F"
                corTexto="#FFFFFF"
              />

            )

          })}
        </main>

      </section>
    </div>
  )
}

export default Projeto
