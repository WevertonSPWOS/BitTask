import React from 'react'

const RadioCompo = ({options,id,label,f}) => {
  return (
    <section>
      <label className='labelRadio'>{label}</label>
      <section className='box-radio' >
          {options.map((item) =>{  
              return(
                <section className='inner-radio'>
                  <input className='radio-input' type='radio' value={item}  onChange={f} name={id}  id={id}/>
                  
                  <label htmlFor={item} key={item} className='item-radio' >
                      {item}
                  </label>
    
                </section>
              )
          })}
        
      </section>
    
    </section>
  )
}

export default RadioCompo
