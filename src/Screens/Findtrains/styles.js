import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
export default styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ItemStyle: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 10,
    padding: 0,
    backgroundColor: '#8da6a5',
    marginTop: 10,
    overflow: 'hidden',
  },
  TextViewStyle: {
    width: '60%',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  imageStyle: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  UpdatebuttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonStyle: {
    marginVertical: 30,
    width: '40%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  // dateViewStyle: {
  //   width: '70%',
  // },
});
