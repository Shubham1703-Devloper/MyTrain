import React, {Profiler, useState} from 'react';
import {
  Image,
  ImageBackground,
  PermissionsAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import styles from './styles';
const Profile = Props => {
  const [data, setdata] = useState({});

  const item = 'shubham';
  console.log('item=======>', item);
  return (
    <View style={styles.maincontainer}>
      {/* <TouchableOpacity onPress={()=>Props.navigation.navigate('Download',{item})} style={styles.ProfileView}>
        {item?.picture?.large != null ? (
          <Image
            style={styles.profileStyle}
            resizeMode="contain"
            // source={{uri: item?.picture?.large}}
          />
        ) : (
          <View style={styles.Loadingimg}>
            <Text>Loading...</Text>
          </View>
        )}
      </TouchableOpacity> */}

      <View style={styles.textView}>
        <Text style={styles.textStyle}>FirstName:- </Text>
        <Text style={styles.textStyle}>{item}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>LastName:- </Text>
        <Text style={styles.textStyle}>{item}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>Email:- </Text>
        <Text style={styles.textStyle}>{item}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>Country:- </Text>
        <Text style={styles.textStyle}>{item}</Text>
      </View>
    </View>
  );
};

export default Profile;
