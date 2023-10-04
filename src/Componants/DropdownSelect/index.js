import React, {useState} from 'react';
import {
  Modal,
  Platform,
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import CustomTextInput from '../CustomTextInput';
import { Axioscall } from '../../Axioscall';

// TODO: Extend Select properties
// Type = Default = Single Select, MultiSelect, DropDown,
// Icon = True | False,
// Icon Position = START | END,
// Default things to include
// List | Items, Disable, IconComponent, Size, sx<InlineStyle>

/* Component for picker dialog
selectedValue : object that has been selected from the picker dialog
titleText : Title to display on the picker dialog
searchplaceholder : Place holder to display on the search bar in picker dialog
displayText : key value to display on the picker dialog from the data
keyId : unique id of the data
alertText : alert text to diasply on the picker dialog
dialogData : data to display in the picker dialog
onCancelClick : method calls when click on Cancel on picker dialog
onOkClick :  method calls when click on OK on picker dialog
 */
const DropdownSelect = ({
  onCancelClick,
  dialogData,
  displayText,
  keyId,
  onOkClick,
  alertText,
  titleText,
  searchplaceholder,
  textInput,
  selectedValue,
  placeHolder,
  t,
}) => {
  /*     Updating toggle value to true if selected value is not equals to null in dialog every time when dialog opens
   */
  // const Data = dialogData.forEach((elem) => {
  //   elem.toggle = false;
  //   if (selectedValue != null) {
  //     var id = selectedValue[keyId].toString();
  //     if (elem[keyId].toString() === id) {
  //       elem.toggle = true;
  //     }
  //   }
  // });
  const [listData, setListData] = useState([]);
  const [selectedDataItem, setSelectedDataItem] = useState(selectedValue);
  const [selectedItem, setSelectedItem] = useState({});
  const [originallistData, setOrdinalListData] = useState(dialogData);
  const [searchText, setSearchText] = useState('');


  const Apicall = async (stataionname) => {
    // const options = {
    //   method: 'GET',
    //   // url: 'https://irctc1.p.rapidapi.com/api/v1/searchStation',
    //   params: {query: stataionname},
    //   headers: {
    //     'X-RapidAPI-Key': '668097454fmsh48bcecbaae38e37p16da66jsn56f8b237c8cf',
    //     'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
    //   },
    // };

    // try {
    //   await Axioscall.get('v1/searchStation', options).then(Response => {
    //     let a = Response.data;
    //     setListData(a);
    //     return console.log('response===>', a);
    //   });
    // } catch (error) {
    //   console.log('WSError===>', error);
    // }



  };


  /* Method calls to update toggle value and selected item when an item in the dialog is selected */
  const onItemClicked = (index) => {
        setSelectedItem(dialogData[index]);
    
    setListData([]);
    checkSelected();
  };

  //Method to update seleted value and dismiss the dialog
  const checkSelected = () => {
    var selectedValue = {...selectedItem}
          onOkClick(selectedValue);
          console.log('text===>',selectedValue.from_station_name);
          setSearchText(selectedValue.from_station_name);
  };

  //Method to handle search in the dialog
  const handleSearch = text => {
    const formattedQuery = text?.toLowerCase()?.replace(/([()])/g, '');
    const filteredData = originallistData.filter(item => {
     
      return item.from_station_name
        ?.toLowerCase()
        ?.replace(/([()])/g, '')
        ?.match(formattedQuery);
    });


    setListData(filteredData)
    setSearchText(text);
  };

  //Method to clear search in the dialog
  const clearSearch = () => {
    setSearchText('');
    setListData(originallistData);
  };

  return (
    <SafeAreaView behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
      <SafeAreaView style={styles.customPickermodalView}>
        {textInput ? (
          <CustomTextInput
            placeholder={placeHolder}
            value={searchText}
            onChangeText={searchText => handleSearch(searchText)}
            autoCorrect={false}
            onClear={clearSearch}
            returnKeyType="done"
          />
        ) : null}

        {searchplaceholder ? (
          <CustomTextInput
            placeholder={searchplaceholder}
            inputContainerStyle={styles.customPickerinputContainerStyle}
            autoCorrect={false}
            value={searchText}
            onChangeText={text => handleSearch(text)}
            onClear={clearSearch}
            returnKeyType="done"
            style={styles.customPickerinputFildStyle}
          />
        ) : null}

        {listData.length != 0 ? (
          <View>
            <Text style={styles.titleTextStyle}>{titleText}</Text>
          </View>
        ) : null}

        <FlatList
          keyboardShouldPersistTaps={'always'}
          style={styles.customPickerlistStyle}
          data={listData}
          didSelectRow={props => {
            onItemClicked(`${props.index}`);
          }}
          NoDataComponent={
            <View style={styles.customPickernoDataViewStyle}>
              <Text style={styles.customPickernoDataTextStyle}>
                {listData.length != 0
                  ? ''
                  : searchText == selectedItem?.value
                  ? ''
                  : 'NO DATA FOUND'}
              </Text>
            </View>
          }
          ItemSeparatorComponent={() => {
            return <View style={styles.itemSeparatorComponentStyle} />;
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  onItemClicked(index);
                  onCancelClick();
                }}>
                <Text>{item?.from_station_name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default DropdownSelect;
