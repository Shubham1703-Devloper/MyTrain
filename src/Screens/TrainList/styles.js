import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
export default styles = StyleSheet.create({
  HeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  maincontainer: {
    paddingHorizontal: 10,
    marginBottom:160
  },
  container:{
    flexDirection:'row',
  },
  itemStyle: {
    marginTop:8,
    padding: 5,
    borderRadius: 5,
    justifyContent: 'space-around',
    backgroundColor: 'lightblue',
  },
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
    alignItems:'center'
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
  TextColor: {
   color:'white'
  },
  imagestyle:{
    width: 50, height: 50
  },
  trainanme: {
    width: '85%',
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemViewStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  startTime:{
    marginRight:10,
    marginLeft:10
  },
  DestinationStyle:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'skyblue',
    height:50,
    borderRadius:5,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
  }
  ,
  class_type:{
    padding:5,
    backgroundColor:'#d3e7eb',
    marginHorizontal:10,
    width:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
  },
  buttonView:{
    zIndex:1,
    width:'100%',
    height:60,
    position:'absolute',
    flexDirection:'row',
    backgroundColor:'green',
    bottom:50
  },
  pessengerbutton:{
    zIndex:1,
    width:'50%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ff6e3d',
  },
  Bookbutton:{
    zIndex:1,
    width:'50%',
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center'
  },
  memerlist:{
    flexDirection: 'row', marginVertical: 10
  }
});
