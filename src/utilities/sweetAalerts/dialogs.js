
import Swal from 'sweetalert2'

// Success
export const success_MSG = (TITLE) => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: TITLE,
    showConfirmButton: false,
    timer: 2000
  })
}

//   Error
export const error_MSG = (TITLE) => {

  Swal.fire({
    position: 'center',
    icon: 'error',
    title: TITLE,
    showConfirmButton: false,
    timer: 2000
  })
}

// Question ?
export const question_MSG = async (TITLE, TEXT) => {

  let confirmacion = false;

  await Swal.fire({
    title: TITLE,
    text: TEXT,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar'
  }).then((result) => {
    if (result.isConfirmed) {
      confirmacion = true;

    } else {
      confirmacion = false;
    }

  })
  return confirmacion;
}


/* EXAMPLE:   DIALOGO CONFIRMAR ACCION

   await question_MSG('Desea Finalizar ?', 'Finalizando Registro') ?
     //confirmed
     axios.post("url-para-validar", userData)
         .then(response => {
             response.request.status == '201' ?
                 success_MSG('Registro Exitoso') : error_MSG('Error al registrar los datos')
             console.log(response);
         })
         .catch(error => {
             error_MSG('Error al registrar los datos');
         })
 
     : console.log('Accion Cancelada!')*/