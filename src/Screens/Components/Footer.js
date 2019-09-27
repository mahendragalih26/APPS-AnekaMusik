import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge,
} from 'native-base';
export default class footerComponents extends Component {
  render() {
    return (
      <>
        {/* <Header />
        <Content /> */}
        <Footer style={styles.footer}>
          <FooterTab style={styles.bg}>
            <Button badge vertical>
              <Badge>
                <Text>1</Text>
              </Badge>
              <Icon name="pie" style={styles.icon} />
              <Text style={styles.icon}>Report</Text>
            </Button>
            <Button vertical>
              <Icon name="cart" style={styles.icon} />
              <Text style={styles.icon}>Cart</Text>
            </Button>
            <Button active badge vertical>
              <Badge>
                <Text>3</Text>
              </Badge>
              <Icon active name="heart" style={styles.icon} />
              <Text style={styles.icon}>Wishlist</Text>
            </Button>
            <Button vertical>
              <Icon name="person" style={styles.icon} />
              <Text style={styles.icon}>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    color: 'black',
  },
  icon: {
    color: 'white',
  },
  bg: {
    backgroundColor: '#f5b567',
  },
});
