// validate form frmShipAddress
function frmShipAddressValidate() {

    $("#frmShipAddress").validate({
        rules: {
            Email: {
                required: true,
                email: true
            },
            Address1: {
                required: true
            },
            Address2: {
                required: false
            }
        },
        messages: {
            Email: {
                required: "Email field is required",
                email: "Please enter a valid email address"
            },
            Address1: {
                required: "Address1 field is required"
            },
            Address2: {
                required: "Address2 field is required"
            }
        },
        errorElement: 'span',
        errorPlacement: function (error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error);
            } else {
                error.insertAfter(element);
            }
        }
    });
}


module.exports = {
    frmShipAddressValidate
}