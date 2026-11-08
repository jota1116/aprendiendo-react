import React, { useState, useEffect } from 'react'

const ContadorEfect = () => {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log(`El contador es ${contador}`)
  }, [contador])

  return (
    <div>
      <p>Has hecho click {contador} veces</p>
      <button onClick={() => setContador(prev => prev + 2)}>Incrementar</button>
    </div>
  )
}

export default ContadorEfect
