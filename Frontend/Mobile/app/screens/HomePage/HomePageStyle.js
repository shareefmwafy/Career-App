import { StyleSheet } from 'react-native';
import { COLORS, SIZE } from "@/assets/styles/Dimensions";


const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: COLORS.pageBackgroundColor,
      alignItems: "center",
      flex: 1,
      width: "100%",
    },
    infoNav: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: 5,
      backgroundColor: COLORS.tabBarBackgroundColor,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
      shadowColor: COLORS.shadowColor,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    locationContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      borderColor: COLORS.introductionColor,
      borderWidth: 1,
    },
    locationText: {
      fontSize: SIZE.h3,
      fontWeight: "bold",
      color: COLORS.textColor,
      marginRight: 8,
    },
    heroSection: {
      width: "100%",
      height: 200,
      borderRadius: 15,
      overflow: "hidden",
      marginTop: 5,
    },
    heroImage: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    categoriesSection: {
      width: "100%",
      paddingVertical: 15,
      borderRadius: 15,
      marginTop: 15,
      marginBottom: 15,
      alignItems: "center",
      overflow: "hidden",
      backgroundColor: COLORS.containerColor,
    },
    categoriesTitle: {
      fontSize: SIZE.h2,
      fontWeight: "bold",
      color: COLORS.grayTextColor,
      marginBottom: 15,
      textAlign: "center",
      alignSelf: "flex-start",
      paddingLeft: 8,
    },
    flatList: {
      width: "100%",
      paddingBottom: 10,
    },
    flatListContent: {
      paddingHorizontal: 15,
    },
    categoryCard: {
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      backgroundColor: "#fff",
      borderRadius: 15,
      marginHorizontal: 10,
      shadowColor: COLORS.shadowColor,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 3,
    },
    categoryImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      resizeMode: "cover",
    },
    categoryTitle: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: "bold",
      color: "#333",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      backgroundColor: COLORS.tabBarBackgroundColor,
      padding: 20,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      maxHeight: "50%",
    },
    modalTitle: {
      fontSize: SIZE.h2,
      fontWeight: "bold",
      color: COLORS.introductionColor,
      marginBottom: 15,
    },
    cityItem: {
      fontSize: SIZE.h3,
      color: COLORS.textColor,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.textInputBorderColor,
    },
    
    sidebarContainer: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 0,
      height: "100%",
      backgroundColor: "red",
      zIndex: 1,
      
    },
    sidebarContainer1:{
      position: "absolute",
      top: 0,
      right: 0,
      width:"70%",
      height: "100%",
      backgroundColor: "red",
      zIndex: 1,
  
    },
    // sidebarContent: {
    //   flex: 1,
    //   padding: 20,
    //   justifyContent: "flex-start",
    //   elevation: 5,
    // },
    // sidebarTitle: {
    //   fontSize: SIZE.h2,
    //   fontWeight: "bold",
    //   color: COLORS.introductionColor,
    //   marginBottom: 20,
    // },
    // sidebarItem: {
    //   fontSize: SIZE.h3,
    //   color: COLORS.textColor,
    //   paddingVertical: 10,
    //   borderBottomWidth: 1,
    //   borderBottomColor: COLORS.textInputBorderColor,
  
    // },
    ReservationDepartment: {
      width: "100%",
      padding: 20,
      backgroundColor: COLORS.containerColor,
      borderRadius: 15,
      marginTop: 20,
    },
  });

export default styles;