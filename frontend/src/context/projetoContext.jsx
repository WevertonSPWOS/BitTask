import React, { createContext } from 'react'
import useAxios from "../hooks/useAxios";


export const ProjetoGlobal = createContext()

export const ProjetoContext = ({children}) => { 
    const {requisicao} = useAxios();
    const [dados, setDados] = React.useState()
    const [erro, setErro] = React.useState()
    const [loading, setLoading] = React.useState()
    const token = window.localStorage.getItem('token');

    
    async function CriarProj(dados){
      const req = await requisicao("http://localhost:3001/api/projetos/",dados,"POST",  {Authorization : `Bearer ${token}`})
      console.log(req)
      return req

    }
    async function ObterProj(){
      
        const req = await requisicao(`http://localhost:3001/api/projetos/`,null, "GET", {Authorization : `Bearer ${token}`})
        return req
    }

    async function EditarProj(dados,id){
      const req = await requisicao(`http://localhost:3001/api/projetos/${id}`,dados, "PUT", {Authorization : `Bearer ${token}`})
      return req
    }

    async function DeletarProj(id){
      const req = await requisicao(`http://localhost:3001/api/projetos/${id}`,null, "DELETE", {Authorization : `Bearer ${token}`})
      return req
    }
    
    return(
      <ProjetoGlobal.Provider value={{dados, erro, loading, CriarProj,ObterProj, EditarProj, DeletarProj}}>
        {children}
      </ProjetoGlobal.Provider>
    )
}


