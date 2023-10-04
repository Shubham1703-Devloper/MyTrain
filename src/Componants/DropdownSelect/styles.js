
import { StyleSheet, Dimensions , Platform} from 'react-native';


export default StyleSheet.create({
customPickermodalView: {
    backgroundColor: 'white',
    // height: Dimensions.get('window').height,
    // paddingTop: Platform.OS === 'ios' ? 20 : 20,
    paddingTop:10
  },
  customPickerokcancelTextStyle: {
    fontSize: 18,
    color:'white',
    alignSelf: 'flex-end',
    marginEnd: 20,
    paddingVertical: 5,
  },
  customPickerinputContainerStyle: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    overflow:'hidden'
  },
  customPickercancelTextStyle: {
    alignSelf: 'center',
  },
  customPickerokCancelViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  customPickertitleStyle: {
    fontSize: 22,
    alignSelf: 'center',
    color:'orage',
    marginLeft: 40,
    textAlign: 'center',
    flex: 1,
  },
  customPickerlistStyle: {
    marginTop: 10,
  },
  customPickertouchableStyle: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  customPickertextStyle: {
    flex: 1,
    marginEnd: 5,
    color:'white',
    fontSize: 14,
    alignSelf: 'center',
    marginVertical: 15,
  },
  customPickerlineStyle: {
    height: 1,
    backgroundColor:'white',
  },
  customPickerinputFildStyle: {
    backgroundColor: 'white',
  },
  customPickernoDataViewStyle: {
    justifyContent: 'center',
  },
  customPickernoDataTextStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    color: 'red',
  },
  customPickerradioAndTextViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  itemSeparatorComponentStyle: {
    height: 7,
},
titleTextStyle:{
  marginTop:33,
  marginBottom:12,
  
}
})