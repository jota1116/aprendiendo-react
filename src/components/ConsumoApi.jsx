import React, { useState, useEffect } from 'react'

const ConsumoApi = () => {
  const [data, setData] = useState("")

  const getData = async () => {
    try {
      const respuesta = await fetch("https://api.sampleapis.com/beers/ale")
      const json = await respuesta.json()
      setData(json)
    } catch (error) {
      setData({ mensaje: error.message })
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default ConsumoApi
