import { StyleSheet } from "react-native";
import { SIZE } from "./Dimensions";
const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  imageStyle: {
    width: SIZE.width - 100,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  titleStyle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#EAECEF",
    borderRadius: 8,
    padding: 10,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginLeft: 10,
  },
  viewButtonStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconSignupStyle: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  orTextStyle: {
    marginVertical: 10,
    fontSize: 14,
    color: "#666666",
  },
  textInputContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  textInputStyle: {
    width: "48%",
    borderColor: "#CED0CE",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 14,
    color: "#333",
  },
  textInputStyleFullWidth: {
    width: "80%",
    borderColor: "#CED0CE",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 14,
    color: "#333",
    marginBottom: 15,
  },
  datePickerContainer: {
    width: "80%",
    marginBottom: 20,
    justifyContent: "center",
  },
  datePickerLabel: {
    marginBottom: 5,
    color: "#333",
    fontSize: 14,
  },
  datePicker: {
    borderColor: "#CED0CE",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 14,
    color: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontSize: 14,
    color: "#333",
  },
  genderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "center",
    width: "80%",
  },
  genderText: {
    fontSize: 16,
    color: "#333",
    marginRight: 10,
  },
  genderButton: {
    borderColor: "#CED0CE",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  selectedGender: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  genderButtonText: {
    color: "#333",
    fontSize: 14,
  },
  passwordContainer: {
    position: "relative",
    width: "80%",
    marginBottom: 20,
  },
  showPasswordButton: {
    position: "absolute",
    right: 12,
    top: 10,
  },
  showPasswordText: {
    color: "#4CAF50",
    fontSize: 14,
  },
  signUpButtonStyle: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  signUpButtonTextStyle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default styles;
