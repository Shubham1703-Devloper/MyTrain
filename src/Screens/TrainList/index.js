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
import {Button, Searchbar, Text} from 'react-native-paper';
import styles from './styles';

import Icon from 'react-native-vector-icons/Fontisto';
import Arrow from 'react-native-vector-icons/FontAwesome';
import Custommodal from '../../Componants/Custommodal';
// import NetInfo from '@react-native-community/netinfo';

const TrainList = Props => {
  const [visible, setVisible] = React.useState(false);
  const [price, setprice] = useState({price: 250, class: 'GN'});
  const [data, setdata] = useState({});
  const hideModal = () => setVisible(false);

  const item = Props?.route?.params?.Traindata.data
    ? Props?.route?.params?.Traindata.data
    : '';
  const values = Props?.route?.params?.values
    ? Props?.route?.params?.values
    : '';

  const BookTicket = elem => {
   
    setdata({...elem});
    console.log('elem----',elem);
    switch (elem.elem) {
      case 'SL':
        setprice({price: 460, class: 'SL'});
        break;
      case '3A':
        setprice({price: 1170, class: '3A'});
      case '2A':
        setprice({price: 1890, class: '2A'});
        break;
      case '1A':
        setprice({price: 2780, class: '1A'});
        break;
      case 'CC':
        setprice({price: 760, class: 'CC'});
        break;
      default:
        setprice({price: 250, class: 'GN'});
    }
  };
  return (
    <View>
      <Custommodal visible={visible} hideModal={() => hideModal()} />
      <View style={styles.DestinationStyle}>
        <Text style={styles.TrainameText}>{values.startpoint.start}</Text>

        <TouchableOpacity
          onPress={() => {
            Exchange();
          }}
          style={styles.iconStyle}>
          <Image
            source={require('./pngwing.com.png')}
            style={styles.imagestyle}
          />
        </TouchableOpacity>

        <Text style={styles.TrainameText}>{values.endpoint.end}</Text>
      </View>
      <View style={styles.maincontainer}>
        <FlatList
          data={item}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Itemlist
              onPress={elem => {
                BookTicket(elem);
              }}
              item={item}
            />
          )}
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => {
            Props.navigation.navigate('TicketBook');
          }}
          style={styles.Bookbutton}>
          <Text style={[styles.TrainameText, styles.TextColor]}>
            {'Rs '}
            {price.price} Fare Breakup
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Props.navigation.navigate('TicketBook', {...price,...values,...data});
            // console.log('values====',data);
          }}
          style={styles.pessengerbutton}>
          <Text style={[styles.TrainameText, styles.TextColor]}>
            Pessenger Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrainList;

const Itemlist = ({item, onPress}) => {
  const [selectedId, setSelectedId] = useState();

  return (
    <TouchableOpacity style={styles.itemStyle}>
      <View style={styles.itemViewStyle}>
        <View style={styles.container}>
          <View style={styles.Trainnumber}>
            <Text style={styles.TrainnumberText}>{item.train_number}</Text>
          </View>

          <View style={styles.TimeTextStyle}>
            <Text style={styles.startTime}>{item.from_std}</Text>
            <Icon name={'arrow-right-l'} size={30} />
            <Text style={styles.startTime}>{item.to_std}</Text>
          </View>
        </View>

        <View>
          <Text>days</Text>
        </View>
      </View>
      <View style={styles.itemViewStyle2}>
        <View style={styles.trainanme}>
          <Text style={styles.TrainameText}>{item.train_name}</Text>
        </View>
        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.TrainameText}>{price.class}</Text>
          <Text style={styles.TrainameText}>{price.price}</Text>
        </View> */}
      </View>
      <View style={styles.memerlist}>
        {item.class_type.map((elem, index) => {
          return (
            <Component
              index={index}
              elem={elem}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              onclick={elem => {
                onPress({...elem, item: item});
              }}
            />
          );
        })}
      </View>
    </TouchableOpacity>
  );
};

const Component = ({index, elem, selectedId, setSelectedId, onclick}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={
        index === selectedId
          ? [styles.class_type, {backgroundColor: 'green'}]
          : [styles.class_type]
      }
      onPress={() => {
        setSelectedId(index);
        onclick({elem: elem, index: index});
      }}>
      <Text>{elem}</Text>
    </TouchableOpacity>
  );
};
