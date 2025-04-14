export default {
	SignUpBtnonClick () {
		{{ 
			if (
				InputUsername.text === "" || 
				InputPassword.text === "" || 
				InputConfirmPassword.text === "" ||
				InputFirstName.text === "" ||
				InputLastName.text === "" ||
				InputEmail.text === ""
			) {
				showAlert("All fields are mandatory", "error");
			} else if (InputPassword.text !== InputConfirmPassword.text) {
				showAlert("Passwords do not match", "error");
			} else {
				checkIfUserExists.run()
			}
		}}
	}