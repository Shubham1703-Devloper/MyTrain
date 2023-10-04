import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  LogBox,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Divider, Searchbar, Text} from 'react-native-paper';
import styles from './styles';

import Custommodal from '../../Componants/Custommodal';
// import NetInfo from '@react-native-community/netinfo';

const TicketBook = Props => {
  const [visible, setVisible] = React.useState(false);
  const hideModal = () => setVisible(false);
  const [value, setvalue] = useState({});
  const [data, setdata] = useState([]);

  const item = Props?.route?.params ? Props?.route?.params : '';

  console.log('item===>', item);

  const onOkClick = () => {
    setVisible(true);
  };

  const DeleteItem = itemindex => {
    Alert.alert('Are You Sure Remove Member ?', '', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          var newdata = data.filter((elem, index) => index != itemindex);
          setdata(newdata);
        },
      },
    ]);

    // console.log(newdata,itemindex);
  };
  return (
    <View style={styles.mainView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Custommodal
          onOkClick={e => {
            data.push(e);
            console.log(data);
            onOkClick();
          }}
          visible={visible}
          hideModal={() => hideModal()}
        />
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingTop: 20,
          }}>
          <Text style={styles.TrainameText}>
            {item?.item?.train_name + '(' + item.item.train_number + ')'}
          </Text>
          <Divider style={{marginVertical: 5}} />
        </View>

        <View style={styles.traindetailsView}>
          <View style={styles.traindetailssecondView}>
            <View style={styles.traindetailsinnerView}>
              <Text>{item.item.from_station_name}</Text>
              <Text>{item.item.train_date}</Text>
              <Text>{item.item.from_sta}</Text>
            </View>

            <Text>{'-----' + item.item.duration + 'h-----'}</Text>

            <View style={styles.traindetailsinnerView}>
              <Text>{item.item.to_station_name}</Text>
              <Text>{item.item.train_date}</Text>
              <Text>{item.item.to_sta}</Text>
            </View>
          </View>

          <View style={styles.GenralTextView}>
            <Text>{item.elem + ' | ' + 'GENRAL(GN)'}</Text>
          </View>
        </View>

        {data.map((elem, index) => {
          console.log(index);
          return (
            <View>
              <View style={styles.listdata}>
                <View style={styles.listofmemberView10}>
                  <Text>{index + 1}</Text>
                </View>

                <View style={styles.listofmemberView90}>
                  <View style={styles.listinnerView}>
                    <Text style={styles.linktext}>{elem.name}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        DeleteItem(index);
                      }}>
                      <Text style={styles.linktext}>Delete</Text>
                    </TouchableOpacity>
                  </View>

                  <Text>{elem.age}</Text>
                </View>
              </View>

              <Divider style={{marginVertical: 5}} />
            </View>
          );
        })}

        <TouchableOpacity
          style={styles.bottombutton}
          onPress={() => setVisible(true)}>
          <Text>{'Add New'}</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => {
            // Props.navigation.navigate('TicketBook');
          }}
          style={styles.Bookbutton}>
          <Text style={[styles.TrainameText, styles.TextColor]}>
            {'Pay Amount Rs: ' + item.price * data.length}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Props.navigation.navigate('DownloadTicket', {...item, data: data});
            console.log('values====', data);
          }}
          style={styles.pessengerbutton}>
          <Text style={[styles.TrainameText, styles.TextColor]}>
            Confirm Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TicketBook;
