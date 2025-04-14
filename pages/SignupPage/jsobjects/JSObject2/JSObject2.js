export default {
	SignUpButtononClick () {
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
	.then(() => {
		if (checkIfUserExists.data.length > 0) {
			showAlert("Username already exists", "error");
		} else {
			insertNewUser.run()
			.then(() => {
				showAlert("Sign up successful", "success");
				navigateTo("LoginPage");
			})
			.catch((err) => {
				showAlert("Failed to sign up: " + err.message, "error");
			});
		}
	})
	.catch((err) => {
		showAlert("Something went wrong: " + err.message, "error");
	});
}
	}
}