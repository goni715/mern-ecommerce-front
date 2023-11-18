import Swal from "sweetalert2";




export async function PaymentSuccessAlert() {



    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })



    return await swalWithBootstrapButtons.fire(
        'Payment Success!',
        'Your Payment has been completed successfully.',
        'success'
    )

}





