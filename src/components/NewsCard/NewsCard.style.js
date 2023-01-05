import { Dimensions,StyleSheet, View } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10,
    },
    image: {
         height: Dimensions.get("window").height/4,
         borderTopLeftRadius: 10,
         borderTopRightRadius: 10,

    },
    title: {
        fontWeight: "bold",
        fontsize: 18,
    },
    description: {
        marginTop: 3,
    },
    inner_container:{
        padding: 10,
    },
    author: {
        fontStyle: "italic",
        textAlign: "right",
    },
});
 


