import React from 'react'
import Seta from '../seta/seta'
import Tag from '../tag/tag'
import { Modal } from '@mui/material'
import { ModalApresentarP } from '../modal/modalApresentar'


const CardProjeto = ({nome, decricao, categoria, tarefa, img, fundo, corTexto, ...props}) => {
    const [aberto,setAberto] = React.useState(false)
    const handleClose = (() =>  setAberto(false))
    function hanldeModal(){
        setAberto(true)
    }

  return (
    <section className='box-card-projeto' aria-label="projeto" style={{backgroundColor : fundo}}{...props}>
        <section className='inner-card-projeto'>
            <section className='titulo-card-projeto'>
                <h3 style={{color: corTexto}}>{nome}</h3>
                <Seta f={hanldeModal} />
                <ModalApresentarP aberto={aberto} fechado={handleClose} />

            </section>
            <p id='card-descricao-projeto'>{decricao}</p>
            <section className='card-categoria-tarefa'>
               <Tag nome={categoria} cor='#3D77FB' />
               <Tag nome={tarefa} cor='#CFCFCF' />
            </section>

        </section>

    
    </section>
  )
}

export default CardProjeto
