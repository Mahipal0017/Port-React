export const getRequiredField = (t) => {

    return {
        presence: {
            message: "Please enter required field",
            //empty fields or white-space input is NOT ALLOWED
            allowEmpty: false
        }
    }
}