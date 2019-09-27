import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Button} from 'native-base';

import splash from '../../assets/load.gif';

class mySplash extends Component {
  splashLoading = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('result');
      }, 2000);
    });
  };

  componentDidMount = async () => {
    const data = await this.splashLoading();

    if (data !== null) {
      this.props.navigation.navigate('Auth');
    }
  };

  render() {
    return (
      <>
        <View style={Styles.container}>
          <Image source={splash}></Image>
        </View>
      </>
    );
  }
}

const Styles = {
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  splash: {
    width: '100%',
    height: '100%',
  },
};

export default mySplash;
