export default {
	LoginButtononClick () {{{ 
  loginQuery.run(() => {
    const match = loginQuery.data.find(
      row => row.Username === UsernameInput.text && row.Password === PasswordInput.text
    );
    if (match) {
      storeValue("Username", match.Username);
      navigateTo("UserProfile");
    } else {
      showAlert("Invalid username or password", "error");
    }
  }) 
}}
	}
}