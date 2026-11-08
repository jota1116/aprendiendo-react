import React, { useEffect } from 'react'

const MensajeConsola = () => {
  useEffect(() => {
    console.log("El componente se ha renderizado")
  }, [])

  return (
    <div>
      <p>Mira la consola para ver el mensaje</p>
    </div>
  )
}

export default MensajeConsola
