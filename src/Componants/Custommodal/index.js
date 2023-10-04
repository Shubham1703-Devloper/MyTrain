import React, {PureComponent} from 'react';
import {
  Pressable,
  Modal,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Button,
  PaperProvider,
  Portal,
  Text,
  TextInput,
} from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import {Formik} from 'formik';
import SelectDropdown from 'react-native-select-dropdown'
import Down from 'react-native-vector-icons/AntDesign';
const Custommodal = ({visible, onOkClick, hideModal, showModal}) => {
  var data = [];
  const Gender = ["Male", "Female", "other"]

  return (
    <Modal
      animationType="slide"
      visible={visible}
      style={styles.modalstyle}
      onDismiss={hideModal}
      transparent>
      <KeyboardAvoidingView behavior={'position'}>
        <View style={{backgroundColor: 'rgba(100, 100, 100, 0.5)'}}>
          <View
            style={styles.modalView}>
            <TouchableOpacity
              onPress={hideModal}
              style={styles.DissmissiconStyle}>
              <Icon name={'circle-with-cross'} size={27} color={'#ff6e3d'} />
            </TouchableOpacity>

            <Formik
              initialValues={{
                name: '',
                age: '',
                // gender: '',
                // nationality: '',
                // Berth_preferrence: '',
              }}
              onSubmit={values => {
                onOkClick(values);
                hideModal();
              }}>
              {({
                handleChange,
                setFieldValue,
                handleBlur,
                handleSubmit,
                values,
              }) => (
                <View style={{padding: 10}}>
                  <View>
                    <TextInput
                      style={{marginBottom: 20, backgroundColor: 'transparent'}}
                      placeholder="Enter Your Name"
                      onChangeText={values => setFieldValue('name', values)}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                    <TextInput
                      keyboardType="numeric"
                      style={{marginBottom: 20, backgroundColor: 'transparent'}}
                      placeholder="Enter Your Age (above 4 yearss)"
                      onChangeText={values => setFieldValue('age', values)}
                      onBlur={handleBlur('age')}
                      value={values.age}
                    />
                  </View>

                  <SelectDropdown
                    data={Gender}
                    buttonTextStyle={{textAlign:'left',fontSize:16}}
                    searchPlaceHolder='Enter Gender'
                    buttonStyle={{backgroundColor:'white',justifyContent:'flex-start',borderBottomWidth:0.5,width:'100%',marginBottom:20}}
                    onSelect={(selectedItem, index) => {
                      setFieldValue('gender',selectedItem)
                    }}
                    dropdownIconPosition={'right'}
                    renderDropdownIcon={()=><Down name={'down'} size={25}/>}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      
                      // console.log('selectedItem',selectedItem);
                      // text represented after item is selected
                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                      return selectedItem;
                    }}



                    rowTextForSelection={(item, index) => {
                     
                      // text represented for each item in dropdown
                      // if data array is an array of objects then return item.property to represent item in dropdown
                      return item;
                    }}
                  />

                  

                  <Button style={{height:40,justifyContent:'center',marginTop:30}}
                    onPress={() => handleSubmit(values)}
                    buttonColor="#ff6e3d"
                    textColor="white">
                    Add Member
                  </Button>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default Custommodal;
