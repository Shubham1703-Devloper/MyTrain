import React, {Profiler, useCallback, useEffect, useRef, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  PermissionsAndroid,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Button, Divider, Text} from 'react-native-paper';
import styles from './styles';
import RNFetchBlob from 'rn-fetch-blob';
import ViewShot from 'react-native-view-shot';
// import RNFetchBlob from 'rn-fetch-blob';
// import RNFetchBlob from 'rn-fetch-blob';

const DownloadTicket = Props => {
  // const [data, setdata] = useState({});
  const item = Props?.route?.params ? Props?.route?.params : '';
  const data = Props?.route?.params ? Props?.route?.params.data : '';

  const [imageurl, setimageurl] = useState('');

  const checkPermission = async () => {
    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for permission

    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          downloadImage();
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };

  const downloadImage = () => {
    // Main function to download the image

    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = imageurl;
    // Getting the extention of the file
    let ext = '.' + 'png';
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        // Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      });
  };

  //View shot

  const ref = useRef();
  let myQRCode = useRef();

  useEffect(() => {
    // on mount
    ref?.current?.capture()?.then(uri => {
      console.log('do=====', uri);
      setimageurl(uri);
      // checkPermission();
      Alert.alert('Image Downloaded Successfully.');
    });
  }, []);

  // const onCapture = useCallback(uri => {
  //   console.log("do=====", uri);
  // }, []);

  // const shareQRCode = async() => {
  
  //     await RNFetchBlob.fs
  //       .writeFile(imageurl, 'hgh', 'utf8')
  //       .then(res => Alert.alert('File created successfully',res))
  //       .catch(error => console.log('error', error));
  //   };
  // // console.log('shareImageBase64',a);
  //   // });

  return (
    <View style={{flex: 1, paddingBottom: 65}}>
      <ViewShot
        ref={ref}
        options={{fileName: 'Your-File-Name', format: 'jpg', quality: 0.9}}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
              <View
                style={{
                  width: '20%',
                }}>
                <Text>{item.item.from_station_name}</Text>
                <Text>{item.item.train_date}</Text>
                <Text>{item.item.from_sta}</Text>
              </View>

              <Text>{'-----' + item.item.duration + 'h-----'}</Text>

              <View
                style={{
                  width: '20%',
                }}>
                <Text>{item.item.to_station_name}</Text>
                <Text>{item.item.train_date}</Text>
                <Text>{item.item.to_sta}</Text>
              </View>
            </View>

            <View style={styles.GenralTextView}>
              <Text>{item.elem + ' | ' + 'GENRAL(GN)'}</Text>
            </View>
          </View>

          <View style={styles.AdditionalViewStyle}>
            <Text style={[styles.TrainameText, styles.AdditionalStyle]}>
              Your Book Tickets:
            </Text>
            <Text style={[styles.TrainameText, styles.AdditionalStyle]}>
              {data.length}
            </Text>
          </View>

          {data.map((elem, index) => {
            console.log(index);
            return (
              <View>
                <View style={styles.listdata}>
                  <View style={{width: '10%'}}>
                    <Text>{index + 1}</Text>
                  </View>

                  <View
                    style={{
                      width: '90%',
                    }}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <Text style={styles.linktext}>{elem.name}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          DeleteItem(index);
                        }}>
                        <Text style={styles.linktext}>Delete</Text>
                      </TouchableOpacity>
                    </View>

                    <Text>{elem.age + ' ' + elem.gender[0]}</Text>
                  </View>
                </View>

                <Divider style={{marginVertical: 5}} />
              </View>
            );
          })}

          <View style={{justifyContent:'center',alignItems:'center',paddingVertical:40}}>
          <QRCode
          getRef={(ref) => (myQRCode = ref)}
          // ref={myQRCode}
          //QR code value
          value={imageurl ? imageurl : 'NA'}
          //size of QR Code
          size={250}
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="white"
          //Center Logo size  (Optional)
        />
          </View>
        </ScrollView>
      </ViewShot>
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
            Props.navigation.navigate('DownloadTicket');
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

export default DownloadTicket;
