import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  ActionSheet,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import Logo from '../../assets/icon1.png';

let BUTTONS = [{text: 'LogOut', icon: 'contact', iconColor: '#fa213b'}];
let BUTTONSGuest = [{text: 'SignIn', icon: 'contact', iconColor: '#fa213b'}];
// let Action = [{component: this.handleSignout}];
let DESTRUCTIVE_INDEX = 3;
let CANCEL_INDEX = 4;

export default class headerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      user: false,
      selected: 0,
    };
  }

  handleSignout = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('SigninScreen');
    console.log('Logout coiy');
  };

  componentDidMount = async () => {
    // this.setState({user: true});
    await AsyncStorage.getItem('token', (err, res) => {
      console.log(err, res);
      console.log('ini responnya =', res);
      if (res) this.setState({user: true});
    });
  };

  render() {
    // const {selected} = this.state;
    // const selectAction = Action[selected];
    return (
      <>
        <Header style={styles.header} noShadow>
          <Left>
            <Button
              // onPress={() => this.props.navigation.goBack('HomeScreen')}
              transparent>
              <Icon name="arrow-back" style={styles.font} />
            </Button>
          </Left>
          <Body>
            <Image source={Logo} style={styles.image} />
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" style={styles.font} />
            </Button>

            {this.state.user ? (
              <Button
                onPress={() => {
                  ActionSheet.show(
                    {
                      options: BUTTONS,
                      cancelButtonIndex: CANCEL_INDEX,
                      destructiveButtonIndex: DESTRUCTIVE_INDEX,
                      title: 'Settings',
                      // onPress: selectAction.component,
                    },
                    buttonIndex => {
                      switch (buttonIndex) {
                        case 0:
                          this.handleSignout();
                          break;
                        // case 1:
                        //   this.props.navigation.navigate('DetailScreen');
                        //   break;
                        // case 2:
                        //   this.props.navigation.navigate('Income');
                        //   break;
                        //   case 3:
                        //   await AsyncStorage.clear();
                        //   this.props.navigation.navigate('Welcome');
                        //   break;
                        default:
                          break;
                      }
                    },
                  );
                }}
                transparent>
                <Icon name="cog" style={styles.font} />
              </Button>
            ) : (
              <Button
                onPress={() => {
                  ActionSheet.show(
                    {
                      options: BUTTONSGuest,
                      cancelButtonIndex: CANCEL_INDEX,
                      destructiveButtonIndex: DESTRUCTIVE_INDEX,
                      title: 'Settings',
                    },
                    buttonIndex => {
                      switch (buttonIndex) {
                        case 0:
                          this.props.navigation.navigate('SigninScreen');
                          break;
                        // case 1:
                        //   this.props.navigation.navigate('DetailScreen');
                        //   break;
                        // case 2:
                        //   this.props.navigation.navigate('Income');
                        //   break;
                        //   case 3:
                        //   await AsyncStorage.clear();
                        //   this.props.navigation.navigate('Welcome');
                        //   break;
                        default:
                          break;
                      }
                    },
                  );
                }}
                transparent>
                <Icon name="more" style={styles.font} />
              </Button>
            )}
          </Right>
        </Header>
      </>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  font: {
    color: 'black',
    fontSize: 32,
  },
  header: {
    backgroundColor: '#edbc5a',
  },
});
