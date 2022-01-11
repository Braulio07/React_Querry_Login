import React from 'react'

export const FormSend = () => {

    const enviarForm = () => {
        console.log('SENDING');
    }
    
    return (
        <form onSubmit={enviarForm}>
            <h4>HOLA ESTAS EN FORM</h4>
        </form>
    )
}
