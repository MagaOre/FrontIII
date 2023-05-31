//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react'

function Card({ yourName , food}) {
  return (
    <div>Hola {yourName} me entere que te gustan mucho las/los {food}</div>
  )
}
export default Card