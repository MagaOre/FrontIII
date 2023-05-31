import React, { useState } from 'react'
import Card from './Card';
import style from '../style.module.css'


export default function Formulario() {

    const [nombre , setNombre] = useState('');
    const [comida , setComida] = useState('');
    const [mensaje, setMensaje] = useState(false)

    const onChangeinput = (event)=>{
        setNombre(event.target.value)
    }

    const onChangeComida = (event)=>{
        setComida(event.target.value)
    }

    const onSubmitForm = (event)=>{

        event.preventDefault();
        const nombreValido = nombre.trim();
        const comidaValido = comida.trim()

        if(nombreValido.length >= 3 && comidaValido.length >= 6){
            setMensaje(true)
        }
        else{
            setMensaje(false)
            alert('Por favor chequea que la información sea correcta')
        }
    }
  return (
    <>
    <h1>Form</h1>
    <form className={style.form} onSubmit={onSubmitForm}>
        <input type="text" placeholder='ingrese su nombre' onChange={onChangeinput} value={nombre}/>
        <input type="text" placeholder='ingresa tu comida fav'onChange={onChangeComida} value={comida}/>
        <button>Enviar</button>
    </form>

    {mensaje ? <Card yourName={nombre} food={comida} /> : null}
    </>

  )
}