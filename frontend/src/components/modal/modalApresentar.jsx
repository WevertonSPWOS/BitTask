import  React                                       from 'react'
import { Box, Modal }                               from "@mui/material"
import Tag                                          from '../tag/tag'
import TextArea                                     from '../form/textArea'
import DropMenu                                     from '../menu/dropMenu'
import { InputComp } from '../form/input'
import CardTarefas from '../card/cardTarefas'

export const ModalApresentarP = ({aberto, fechado}) => {
    const [desabilitado, setDesabilitado] = React.useState(true)

    function UseEditar (event){
        event.preventDefault()
        setDesabilitado(!desabilitado)
    }

    function UseExcluir(event){
        event.preventDefault()
        
    }
    const [data,setData] = React.useState([
        {
        id : 1,
        desc : "tarefa",
        check : true
        },
        {
            id : 2,
            desc : "tarefa",
            check : true
        },
        {
            id : 3,
            desc : "tarefa",
            check : false
        }
    ])

  return (
    <Modal className="modal" open={aberto} onClose={fechado}>
        <Box className="box-modal">
            <section className='inner-modal'>
                <section className='tag-menu'>
                    <Tag nome="categoria" cor="#3D77FB" corLetra="#fff" padding="0.4rem" />
                    <DropMenu editar={UseEditar} deletar={UseExcluir} />
                </section>

                <InputComp disabled={desabilitado}  placeholder="nome" />

                <section>
                    <TextArea disabled={desabilitado}  placeholder="descreva o projeto" label="Descrição" linhas={20}/>
                </section>

                <section >
                    <CardTarefas disabled={desabilitado} dados={data} setDados={setData} titulo="Tarefas" fundo="#F6F6F6" />
                </section>

            </section>
        </Box>
    
    
    </Modal>
  )
}

