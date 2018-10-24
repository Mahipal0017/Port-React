export const getRequiredField = (t) => {

    return {
        presence: {
            message: "Please enter required field",
            //empty fields or white-space input is NOT ALLOWED
            allowEmpty: false
        }
    }
}

export const getPhoneNumberField = (t) => {
    return {
                presence:{
                    message: `${t("errors.emptyField")}`,
                    allowEmpty: true,
                },
                format: {
                    pattern: `((\\(\\\d{3}\\) ?)|(\\\d{3}-))?\\\d{3}-\\\d{4}`,
                    flags: "gim",
                    message: "Please enter valid number"
                }
            }
 }