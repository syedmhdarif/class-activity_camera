/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import React, {Component} from 'react';
import ImagePicker from 'react-native-image-picker';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default class App extends Component {
  state = {
    imagesnap: null,
  };
  constructor(props) {
    super(props);
    this.pickphoto = this.pickphoto.bind(this);
  }
  pickphoto() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        this.setState({
          imagePicked: source,
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.body}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            textAlign: 'center',
            fontSize: 20,
            paddingBottom: 10,
            marginBottom: 100,
          }}>
          Pick Images from Camera & Gallery
        </Text>

        <View style={styles.mainSection}>
          <Image style={styles.images} source={this.state.imagesnap} />

          <TouchableOpacity
            onPress={this.pickphoto.bind(this)}
            style={styles.button}>
            <Text style={styles.buttonText}>Pick a photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: '100%',
    width: '100%',
  },

  mainSection: {
    alignItems: 'center',
    marginTop: 10,
  },

  button: {
    width: 225,
    height: 60,
    backgroundColor: '#a29bfe',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  images: {
    width: 400,
    height: 400,
    marginBottom: 200,
  },
});
