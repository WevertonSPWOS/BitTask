import React, { createContext } from 'react'
import useAxios from "../hooks/useAxios";


export const ProjetoGlobal = createContext()

export const ProjetoContext = ({children}) => { 
    const {requisicao} = useAxios();
    const [dados, setDados] = React.useState()
    const [erro, setErro] = React.useState()
    const [loading, setLoading] = React.useState()
    const local = window.localStorage.getItem('token');

    async function ObterProj(){
      const req = await requisicao("http://localhost:3001/api/projetos/",null,"POST",  {Authorization : `Bearer ${local}`})
      console.log(req)
    }
    async function EditarProj(){

    }
    async function DeletarProj(){

    }
    return(
      <ProjetoGlobal.Provider value={{dados, erro, loading, ObterProj, EditarProj, DeletarProj}}>
        {children}
      </ProjetoGlobal.Provider>
    )
}


