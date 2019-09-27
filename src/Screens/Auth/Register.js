import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
} from 'native-base';
import {Col, Row} from 'react-native-easy-grid';
import Logo from '../../assets/icon1.png';

export default class Signin extends Component {
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
      <Container style={styles.container}>
        <Content style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.title}>
            <Image source={Logo} style={styles.image} />
          </View>
          <Form style={styles.formSignin}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input maxLength={15} />
            </Item>
            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input maxLength={30} />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry={true} maxLength={16} />
            </Item>
            <Button full dark rounded style={styles.btnSignin}>
              <Text style={styles.textSignin}>Sign up</Text>
            </Button>
          </Form>
          <Row style={styles.foot}>
            <Col>
              <Text
                style={styles.btnSignup}
                onPress={() => {
                  this.props.navigation.navigate('SigninScreen');
                }}>
                Sign In
              </Text>
            </Col>
          </Row>
        </Content>
      </Container>
    );
  }
}

let btnSignup = {
  textDecorationLine: 'underline',
  color: '#4B4C72',
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  containerHead: {
    height: 0,
  },
  container: {
    marginTop: 50,
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
    marginTop: 20,
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
