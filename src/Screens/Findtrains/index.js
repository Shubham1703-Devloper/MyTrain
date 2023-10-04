import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  LogBox,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Searchbar, Text, TextInput} from 'react-native-paper';
import styles from './styles';
import DropdownSelect from '../../Componants/DropdownSelect';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import CustomTextInput from '../../Componants/CustomTextInput';
import DatePicker from 'react-native-date-picker';
import CalendarPicker from 'react-native-calendar-picker';

const Traindata = {
  status: true,
  message: 'Success',
  timestamp: 1680379328922,
  data: [
    {
      train_number: '22221',
      train_name: 'MUMBAI CSMT - HAZRAT NIZAMUDDIN Rajdhani Express',
      run_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      train_src: 'CSMT',
      train_dstn: 'NZM',
      from_std: '16:00',
      from_sta: '16:00',
      local_train_from_sta: 960,
      to_sta: '09:55',
      to_std: '09:55',
      from_day: 0,
      to_day: 1,
      d_day: 0,
      from: 'CSMT',
      to: 'NZM',
      from_station_name: 'MUMBAI CSMT',
      to_station_name: 'DELHI HAZRAT NIZAMUDDIN',
      duration: '17:55',
      special_train: false,
      train_type: 'RAJ',
      train_date: '26-05-2023',
      class_type: ['3A', '2A', '1A'],
    },
    {
      train_number: '12951',
      train_name: 'MUMBAI CENTRAL - NEW DELHI Rajdhani Express',
      run_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      train_src: 'MMCT',
      train_dstn: 'NDLS',
      from_std: '17:24',
      from_sta: '17:22',
      local_train_from_sta: 1042,
      to_sta: '08:32',
      to_std: '08:32',
      from_day: 0,
      to_day: 1,
      d_day: 0,
      from: 'BVI',
      to: 'NDLS',
      from_station_name: 'BORIVALI',
      to_station_name: 'NEW DELHI',
      duration: '15:8',
      special_train: false,
      train_type: 'RAJ',
      train_date: '26-05-2023',
      class_type: ['3A', '2A', '1A'],
    },
    {
      train_number: '12953',
      train_name:
        'MUMBAI CENTRAL - HAZRAT NIZAMUDDIN August Kranti Rajdhani Exp',
      run_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      train_src: 'MMCT',
      train_dstn: 'NZM',
      from_std: '17:35',
      from_sta: '17:33',
      local_train_from_sta: 1053,
      to_sta: '09:43',
      to_std: '09:43',
      from_day: 0,
      to_day: 1,
      d_day: 0,
      from: 'BVI',
      to: 'NZM',
      from_station_name: 'BORIVALI',
      to_station_name: 'DELHI HAZRAT NIZAMUDDIN',
      duration: '16:8',
      special_train: false,
      train_type: 'RAJ',
      train_date: '26-05-2023',
      class_type: ['3A', '2A', '1A'],
    },
    {
      train_number: '12925',
      train_name: 'MUMBAI BANDRA T - AMRITSAR Paschim SF Express',
      run_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      train_src: 'MMCT',
      train_dstn: 'ASR',
      from_std: '11:58',
      from_sta: '11:55',
      local_train_from_sta: 715,
      to_sta: '10:40',
      to_std: '11:05',
      from_day: 0,
      to_day: 1,
      d_day: 0,
      from: 'BVI',
      to: 'NDLS',
      from_station_name: 'BORIVALI',
      to_station_name: 'NEW DELHI',
      duration: '22:42',
      special_train: false,
      train_type: 'SUF',
      train_date: '26-05-2023',
      class_type: ['SL', '3A', '2A', '1A'],
    },
    {
      train_number: '12903',
      train_name: 'MUMBAI CENTRAL - AMRITSAR Golden Temple SF Mail',
      run_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      train_src: 'MMCT',
      train_dstn: 'ASR',
      from_std: '19:18',
      from_sta: '19:15',
      local_train_from_sta: 1155,
      to_sta: '13:50',
      to_std: '14:05',
      from_day: 0,
      to_day: 1,
      d_day: 0,
      from: 'BVI',
      to: 'NZM',
      from_station_name: 'BORIVALI',
      to_station_name: 'DELHI HAZRAT NIZAMUDDIN',
      duration: '18:32',
      special_train: false,
      train_type: 'SUF',
      train_date: '26-05-2023',
      class_type: ['SL', '3A', '2A', '1A'],
    },
    {
      train_number: '12137',
      train_name: 'MUMBAI CSMT - FIROZPUR CANTT SF Punjab Mail',
      run_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      train_src: 'CSMT',
      train_dstn: 'FZR',
      from_std: '19:50',
      from_sta: '19:47',
      local_train_from_sta: 1187,
      to_sta: '21:25',
      to_std: '21:40',
      from_day: 0,
      to_day: 1,
      d_day: 0,
      from: 'DR',
      to: 'NDLS',
      from_station_name: 'MUMBAI DADAR CENTRAL',
      to_station_name: 'NEW DELHI',
      duration: '25:35',
      special_train: false,
      train_type: 'SUF',
      train_date: '26-05-2023',
      class_type: ['SL', '3A', '2A', '1A'],
    },
    {
      train_number: '22209',
      train_name: 'MUMBAI CENTRAL - NEW DELHI AC Duronto Exp',
      run_days: ['Mon', 'Fri'],
      train_src: 'MMCT',
      train_dstn: 'NDLS',
      from_std: '23:00',
      from_sta: '23:00',
      local_train_from_sta: 1380,
      to_sta: '15:55',
      to_std: '15:55',
      from_day: 0,
      to_day: 1,
      d_day: 0,
      from: 'MMCT',
      to: 'NDLS',
      from_station_name: 'MUMBAI CENTRAL',
      to_station_name: 'NEW DELHI',
      duration: '16:55',
      special_train: false,
      train_type: 'DRNT',
      train_date: '26-05-2023',
      class_type: ['3A', '2A', '1A'],
    },
    {
      train_number: '12471',
      train_name: 'MUMBAI BANDRA T - SMVD KATRA Swaraj SF Express',
      run_days: ['Sun', 'Mon', 'Thu', 'Fri'],
      train_src: 'BDTS',
      train_dstn: 'SVDK',
      from_std: '11:26',
      from_sta: '11:23',
      local_train_from_sta: 683,
      to_sta: '05:25',
      to_std: '05:40',
      from_day: 0,
      to_day: 1,
      d_day: 0,
      from: 'BVI',
      to: 'NDLS',
      from_station_name: 'BORIVALI',
      to_station_name: 'NEW DELHI',
      duration: '17:59',
      special_train: false,
      train_type: 'SUF',
      train_date: '26-05-2023',
      class_type: ['SL', '3A', '2A', '1A'],
    },
    {
      train_number: '12247',
      train_name: 'MUMBAI BANDRA T - HAZRAT NIZAMUDDIN Yuva Exp',
      run_days: ['Fri'],
      train_src: 'BDTS',
      train_dstn: 'NZM',
      from_std: '17:30',
      from_sta: '17:30',
      local_train_from_sta: 1050,
      to_sta: '10:15',
      to_std: '10:15',
      from_day: 0,
      to_day: 1,
      d_day: 0,
      from: 'BDTS',
      to: 'NZM',
      from_station_name: 'MUMBAI BANDRA TERMINUS',
      to_station_name: 'DELHI HAZRAT NIZAMUDDIN',
      duration: '16:45',
      special_train: false,
      train_type: 'SUF',
      train_date: '26-05-2023',
      class_type: ['CC', '3A'],
    },
    {
      train_number: '19019',
      train_name: 'MUMBAI BANDRA T - HARIDWAR Express',
      run_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      train_src: 'BDTS',
      train_dstn: 'HW',
      from_std: '00:35',
      from_sta: '00:30',
      local_train_from_sta: 30,
      to_sta: '02:30',
      to_std: '02:45',
      from_day: 0,
      to_day: 1,
      d_day: 0,
      from: 'BVI',
      to: 'NZM',
      from_station_name: 'BORIVALI',
      to_station_name: 'DELHI HAZRAT NIZAMUDDIN',
      duration: '25:55',
      special_train: false,
      train_type: 'MEX',
      train_date: '26-05-2023',
      class_type: ['SL', '3A', '2A', '1A'],
    },
    {
      train_number: '11057',
      train_name: 'MUMBAI CSMT - AMRITSAR Express',
      run_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      train_src: 'CSMT',
      train_dstn: 'ASR',
      from_std: '00:05',
      from_sta: '00:02',
      local_train_from_sta: 1442,
      to_sta: '03:40',
      to_std: '03:55',
      from_day: 1,
      to_day: 2,
      d_day: 1,
      from: 'TNA',
      to: 'NDLS',
      from_station_name: 'THANE',
      to_station_name: 'NEW DELHI',
      duration: '27:35',
      special_train: false,
      train_type: 'MEX',
      train_date: '26-05-2023',
      class_type: ['SL', '3A', '2A'],
    },
    {
      train_number: '12216',
      train_name: 'MUMBAI BANDRA T - DELHI SARAI ROHILLA Garib Rath Exp',
      run_days: ['Tue', 'Wed', 'Fri', 'Sun'],
      train_src: 'BDTS',
      train_dstn: 'DEE',
      from_std: '12:24',
      from_sta: '12:21',
      local_train_from_sta: 741,
      to_sta: '11:00',
      to_std: '11:00',
      from_day: 0,
      to_day: 1,
      d_day: 0,
      from: 'BVI',
      to: 'DEE',
      from_station_name: 'BORIVALI',
      to_station_name: 'DELHI SARAI ROHILLA',
      duration: '22:36',
      special_train: false,
      train_type: 'GBR',
      train_date: '26-05-2023',
      class_type: ['3A'],
    },
    {
      train_number: '12617',
      train_name: 'ERNAKULAM - HAZRAT NIZAMUDDIN Mangala Lakshadweep SF Exp',
      run_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      train_src: 'ERS',
      train_dstn: 'NZM',
      from_std: '13:30',
      from_sta: '13:27',
      local_train_from_sta: 2247,
      to_sta: '13:20',
      to_std: '13:20',
      from_day: 1,
      to_day: 2,
      d_day: 1,
      from: 'KYN',
      to: 'NZM',
      from_station_name: 'KALYAN JN',
      to_station_name: 'DELHI HAZRAT NIZAMUDDIN',
      duration: '23:50',
      special_train: false,
      train_type: 'SUF',
      train_date: '26-05-2023',
      class_type: ['SL', '3A', '2A'],
    },
    {
      train_number: '12263',
      train_name: 'PUNE - HAZRAT NIZAMUDDIN AC Duronto Express',
      run_days: ['Tue', 'Fri'],
      train_src: 'PUNE',
      train_dstn: 'NZM',
      from_std: '14:25',
      from_sta: '14:20',
      local_train_from_sta: 860,
      to_sta: '06:45',
      to_std: '06:45',
      from_day: 0,
      to_day: 1,
      d_day: 0,
      from: 'BSR',
      to: 'NZM',
      from_station_name: 'VASAI ROAD',
      to_station_name: 'DELHI HAZRAT NIZAMUDDIN',
      duration: '16:20',
      special_train: false,
      train_type: 'DRNT',
      train_date: '26-05-2023',
      class_type: ['3A', '2A', '1A'],
    },
    {
      train_number: '12431',
      train_name: 'TRIVANDRUM CENTRAL - HAZRAT NIZAMUDDIN Rajdhani Exp',
      run_days: ['Wed', 'Fri', 'Sat'],
      train_src: 'TVC',
      train_dstn: 'NZM',
      from_std: '18:05',
      from_sta: '18:00',
      local_train_from_sta: 2520,
      to_sta: '12:30',
      to_std: '12:30',
      from_day: 1,
      to_day: 2,
      d_day: 1,
      from: 'PNVL',
      to: 'NZM',
      from_station_name: 'PANVEL',
      to_station_name: 'DELHI HAZRAT NIZAMUDDIN',
      duration: '18:25',
      special_train: false,
      train_type: 'RAJ',
      train_date: '26-05-2023',
      class_type: ['3A', '2A', '1A'],
    },
  ],
};

const Findtrains = Props => {
  const [newdata, setNewdata] = useState([]); //async()=>JSON.parse(await AsyncStorage.getItem('storedata'))
  const [show, setshow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateinput, setDateinput] = useState('');
  const [open, setOpen] = useState(false);

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  // search Filter of List

  function solve() {
    // arr1.forEach(element => {
    //   var tempobj = {};
    //   arr2.forEach(elem => {
    //     if (element.name1.name2.id == elem.id) {
    //       tempobj = {...element.name1.name2, dob: elem.dob};
    //     }
    //   });
    //   temp.push(tempobj);
    // });
  }

  const Exchange = () => {};

  return (
    <View style={styles.mainView}>
      <View>
        <Text style={styles.HeaderText}>Train Boking App</Text>
      </View>

      <Formik
        initialValues={{startpoint: '', endpoint: '', date: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, setFieldValue, handleSubmit, values}) => (
          <View>
            <DropdownSelect
              searchplaceholder={'From Start Station'}
              dialogData={Traindata.data}
              onCancelClick={() => {}}
              onOkClick={selectedData => {
                setFieldValue('startpoint', {
                  startpoint: selectedData.from_station_name,
                  start: selectedData.from,
                });
                console.log('selectedData===>', selectedData.from_station_name);
                setshow(false);
              }}
              selectedValue={values ? values.startpoint : ''}
              titleText={'sh_apoc_number-portability_step1-1'}
              viewStyle={styles.inputStyle}
              displayText="value"
              keyId={'id'}
              alertText={'please_select_provider'}
              placeHolder={'sh_apoc_number-portability_input1'}
              onPress={() => {
                setshow(true);
              }}
              dontShowRightIcon={true}
              // text={
              //   values.provider
              //     ? JSON.parse(values.provider).value
              //     : 'sh_apoc_number-portability_input1'
              // }
              // errorMsg={errors.provider && touched.provider ? errors.provider : ''}
            />

            <TouchableOpacity
              onPress={() => {
                Exchange();
              }}
              style={styles.iconStyle}>
              <Icon name="exchange" size={30} color="#900" />
            </TouchableOpacity>

            <DropdownSelect
              searchplaceholder={'To End Station'}
              dialogData={Traindata.data}
              show={show}
              onCancelClick={() => {
                setshow(false);
              }}
              onOkClick={selectedData => {
                setFieldValue('endpoint', {
                  endpoint: selectedData.to_station_name,
                  end: selectedData.to,
                });
                console.log('selectedData===>', selectedData.to_station_name);
                setshow(false);
              }}
              selectedValue={values ? values.endpoint : ''}
              titleText={'sh_apoc_number-portability_step1-1'}
              viewStyle={styles.inputStyle}
              displayText="value"
              keyId={'id'}
              alertText={'please_select_provider'}
              placeHolder={'sh_apoc_number-portability_input1'}
              onPress={() => {
                setshow(true);
              }}
              dontShowRightIcon={true}
            />

            <View>
              <View style={styles.dateViewStyle}>
                <CustomTextInput
                  showSoftInputOnFocus={false}
                  mode={'outlied'}
                  outlineColor={'transparent'}
                  activeOutlineColor={'red'}
                  blurOnSubmit={false}
                  outlineStyle
                  value={dateinput ? dateinput : ''}
                  onChangeText={dateinput => setDateinput(dateinput)}
                  rightIcon={
                    <TextInput.Icon
                      style={{}}
                      onPress={() => {
                        setOpen(true);
                        solve();
                      }}
                      icon={'calendar'}
                    />
                  }
                />
              </View>

              <DatePicker
                androidVariant="iosClone"
                modal
                mode="date"
                open={open}
                date={date}
                onConfirm={date => {
                  setDate(date);
                  setDateinput(date + '');
                  setFieldValue('date', date);
                  setOpen(false);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>

            <Button
              style={styles.buttonStyle}
              icon="train"
              mode="contained"
              onPress={() => {
               
                  handleSubmit(values);
                  Props.navigation.navigate('TrainList', {values, Traindata});
              }}>
              Find My Train
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Findtrains;
