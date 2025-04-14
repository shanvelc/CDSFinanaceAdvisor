export default {
	PredictButtononClick () {
	{{ 
  predictRisk.run(
    () => showAlert("Prediction: " + predictRisk.data, "success"),
    () => showAlert("Prediction failed!", "error")
  ) 
}}
	}
}