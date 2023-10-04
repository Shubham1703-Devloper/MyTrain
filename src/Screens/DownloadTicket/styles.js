import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
export default styles = StyleSheet.create({
    TimeTextStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      Trainnumber: {
        backgroundColor: 'green',
        padding: 3,
        borderRadius: 5,
      },
      itemViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
      },
      TrainnumberText: {
        fontSize: 18,
        color: 'white',
      },
      TrainameText: {
        fontSize: 16,
        color: 'balck',
        fontWeight: 'bold',
      },
      AdditionalStyle:{

      },
      AdditionalViewStyle:{
justifyContent:'space-between',
flexDirection:'row',
margin:20
      },
      linktext: {
        color: '#0ab2f5',
      },
      buttonView: {
        zIndex: 1,
        width: '100%',
        height: 60,
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: 'green',
        bottom: 0,
      },
      pessengerbutton: {
        zIndex: 1,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff6e3d',
      },
      Bookbutton: {
        zIndex: 1,
        width: '50%',
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      },
      TextColor: {
        color: 'white',
      },
      bottombutton: {
        marginTop: 20,
        marginLeft: 10,
        backgroundColor: '#0b9e06',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      listdata:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 15,
      },
      traindetailsView:{
        backgroundColor: 'white',
                paddingHorizontal: 20,
                borderBottomLeftRadius:30,
                borderBottomRightRadius:30
      },
      traindetailssecondView:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginVertical: 10,
        width: '100%',
      },
      GenralTextView:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
      }
   
});
