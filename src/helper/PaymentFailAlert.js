import Swal from "sweetalert2";




export async function PaymentFailAlert() {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })



    return await swalWithBootstrapButtons.fire(
        'Failed',
        'Your Payment has not been completed.',
        'error'
    )

}





