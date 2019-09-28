import React, {Component, Fragment} from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {Col, Row} from 'react-native-easy-grid';

import {login} from '../../Publics/Action/auth';
import Logo from '../../assets/icon1.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        password: '',
      },
      showToast: false,
    };
  }

  handleChange = (name, value) => {
    let newFormData = {...this.state.formData};
    newFormData[name] = value;
    this.setState({
      formData: newFormData,
    });
    console.log(newFormData);
  };

  handleSubmit = () => {
    this.props
      .dispatch(login(this.state.formData))
      .then(async res => {
        console.log('ini res = ', res);
        if (res.action.payload.data.data.token !== undefined) {
          await AsyncStorage.setItem(
            'token',
            res.action.payload.data.data.token,
          );
          // await AsyncStorage.setItem('id', res.action.payload.data.data.id);
          this.props.navigation.navigate('HomeScreen');
        }
      })
      .catch(() => {
        console.log(this.props.user.errMsg);
        Toast.show({
          text: this.props.user.errMsg,
          buttonText: 'Okay',
          type: 'danger',
          position: 'top',
          duration: 4000,
        });
      });
  };

  componentDidMount = async () => {
    await AsyncStorage.getItem('token', (err, res) => {
      console.log(err, res);
      console.log('ini responnya =', res);
      if (res) this.props.navigation.navigate('HomeScreen');
    });
  };

  render() {
    return (
      <Fragment>
        <StatusBar translucent />
        <Container style={styles.container}>
          <Content showsVerticalScrollIndicator={false}>
            <View style={styles.title}>
              <Image source={Logo} style={styles.image} />
            </View>
            <Form style={styles.formSignin}>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  keyboardType="email-address"
                  autoCompleteType="email"
                  onChangeText={text => this.handleChange('email', text)}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  onChangeText={text => this.handleChange('password', text)}
                />
              </Item>
              <Button
                full
                dark
                rounded
                style={styles.btnSignin}
                // onPress={() => {
                //   this.props.navigation.navigate('HomeScreen');
                // }}
                onPress={this.handleSubmit}>
                <Text style={styles.textSignin}>Sign In</Text>
              </Button>
            </Form>
            <Row style={styles.foot}>
              <Col>
                <Text
                  style={styles.btnSignup}
                  onPress={() => {
                    this.props.navigation.navigate('SignupScreen');
                  }}>
                  Sign Up
                </Text>
              </Col>
              <Col>
                <Text
                  style={styles.btnForgot}
                  onPress={() => {
                    this.props.navigation.navigate('HomeScreen');
                  }}>
                  as Guest...
                </Text>
              </Col>
            </Row>
          </Content>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Login);

let btnSignup = {
  textDecorationLine: 'underline',
  color: '#4B4C72',
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  containerHead: {
    height: 0,
  },
  container: {
    marginLeft: 20,
    marginRight: 35,
  },
  title: {
    padding: 10,
    alignItems: 'center',
  },

  btnSignin: {
    marginTop: 50,
    marginLeft: 15,
    backgroundColor: '#f79231',
  },
  textSignin: {
    color: 'white',
  },
  foot: {
    marginTop: 100,
    marginBottom: 50,
    marginLeft: 15,
  },
  btnSignup: {
    ...btnSignup,
  },
  btnForgot: {
    ...btnSignup,
    textAlign: 'right',
  },
});
