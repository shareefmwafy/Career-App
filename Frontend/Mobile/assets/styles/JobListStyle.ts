import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: "#f8f9fa",
    },
    searchRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      justifyContent: "space-between",
    },
    searchInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 10,
      marginRight: 10,
    },
    jobList: {
      paddingBottom: 20,
    },
    jobCard: {
      backgroundColor: "#fff",
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: "#ddd",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    cardHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    jobTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 10,
    },
    cardBody: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    jobLocation: {
      color: "#555",
    },
    jobPrice: {
      color: "#28a745",
      fontWeight: "bold",
    },
  
    filterRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    dayRateRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    dayRateInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 10,
      textAlign: "center",
    },
    dayRateDivider: {
      marginHorizontal: 10,
      fontSize: 16,
    },
  
    toggleButtonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
    },
    toggleButtonActive: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#007bff",
      width: "48%",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    toggleButtonInactive: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#ccc",
      width: "48%",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    toggleButtonText: {
      color: "#fff",
      fontWeight: "bold",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      height: "80%",
    },
    modalContent: {
      width: "90%",
      backgroundColor: "#ffffff",
      borderRadius: 20,
      padding: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      height: "80%",
    },
  
    modalTitle: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#333",
    },
    filterCategory: {
      fontSize: 18,
      fontWeight: "600",
      marginVertical: 10,
      color: "#555",
    },
    cityOption: {
      padding: 10,
      marginBottom: 8,
      borderRadius: 8,
      backgroundColor: "#f5f5f5",
      borderWidth: 1,
      borderColor: "#ddd",
    },
    cityOptionText: {
      fontSize: 16,
      color: "#333",
    },
  
    ratingSliderContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      // marginVertical: 10,
    },
    ratingValue: {
      fontSize: 18,
      color: "#555",
      fontWeight: "bold",
    },
    ratingValueDivider: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
    },
    sliderRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 10,
    },
    ratingInput: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 8,
      paddingHorizontal: 10,
      textAlign: "center",
      backgroundColor: "#f9f9f9",
    },
    sliderDivider: {
      marginHorizontal: 10,
      fontSize: 16,
      fontWeight: "bold",
      color: "#333",
    },
    modalButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },
    modalButton: {
      flex: 1,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginHorizontal: 5,
    },
    cancelButton: {
      backgroundColor: "#dc3545",
    },
    applyButton: {
      backgroundColor: "#28a745",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
    selectedOption: {
      backgroundColor: "#007bff",
      borderColor: "#0056b3",
    },
    selectedOptionText: {
      color: "#fff",
      fontWeight: "bold",
    },
    searchBar: {
      backgroundColor: "#e0e0e0",
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
    },
    placeholderText: {
      color: "#888",
    },
  });
export default styles;