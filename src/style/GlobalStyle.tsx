import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white"
    },
    centerItem: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginContainer: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 40,
        elevation: 30,
        borderRadius: 15
    },
    textInput: {
        height: 50,
        width: '100%',
        marginBottom: 10,
        paddingLeft: 15,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },
    button: {
        height: 50,
        width: 100,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#6600EE",
        borderRadius: 10,
    },

    buttonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: "700"
    },
    errorText: {
        fontSize: 10,
        color: 'red',
        marginBottom: 10,
        alignSelf: 'flex-start'
    },
    horizontalCenter: {
        alignItems: 'center',
        paddingTop: 50
    },
    productsList: {
        backgroundColor: '#eeeeee',
    },
    productsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginHorizontal: 8,
    },
});

export default styles;