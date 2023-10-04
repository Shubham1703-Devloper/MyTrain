import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
export default styles = StyleSheet.create({

    InputStyleView: {
        borderColor: 'black',
        width: '100%',
        // height:windowHeight / 15,
        borderRadius: 0,
        backgroundColor: '#E2E9F3',
        borderRadius: 12,
        justifyContent: 'center'

    },
    outlineStyle: {
        borderRadius: 12,
        borderWidth: 1.2
    },

    placeholderStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    SearchbarStyl: {
        borderColor: 'black',
        width: '100%',
        height: windowHeight / 16,
        backgroundColor: '#E2E9F3',
        borderRadius: 12,
    },
    modalstyle:{
        height:300,
        backgroundColor:'rgba(100, 100, 100, 0.5)'
    },
    modalView:{
        height: 400,
        marginTop: 300,
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    DissmissiconStyle:{
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
