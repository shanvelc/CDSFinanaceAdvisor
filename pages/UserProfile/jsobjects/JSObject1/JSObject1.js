export default {
	SubmitButtononClick () {{ 
  insertProfile.run(() => {
    showAlert("Profile saved successfully", "success");
  }, () => {
    showAlert("Failed to save profile", "error");
  })
}}
}