export default {
	SignUpBtnonClick () {
	{{ 
  checkUsernameExists.run(() => {
    const existingUsers = checkUsernameExists.data.filter(user => user.Username === UsernameInput.text);

    if (existingUsers.length > 0) {
      showAlert("Username already exists. Please choose another.", "warning");
    } else {
      insertNewUser.run(() => {
        showAlert("Signup successful! Redirecting to login...", "success");
        navigateTo('LoginPage', {}, 'SAME_WINDOW');
      }, (err) => {
        showAlert("Signup failed: " + err.message, "error");
      });
    }
  }, (err) => {
    showAlert("Error checking username: " + err.message, "error");
  })
}}

	}
}