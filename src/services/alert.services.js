import Swal from 'sweetalert2'


export function fireSuccessAlert() {
    Swal.fire({
        title: 'Your Response Had been received!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: 'var(--bs-success)',
        background: 'white'
    })
}


export function fireErrorAlert(err) {
    Swal.fire({
        title: 'There Was An Error, Please Try Again!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: 'var(--bs-success)',
        background: 'white'
    })
    throw err;
}
