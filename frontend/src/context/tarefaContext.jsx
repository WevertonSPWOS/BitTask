import React, { createContext } from 'react'

export const TarefaGlobal = createContext()

export const TarefaContext = ({children}) => {
  const [dados, setDados] = React.useState()
  return(
    <TarefaGlobal.Provider value={dados}>
        {children}
    </TarefaGlobal.Provider>

  ) 
}


