import React, {Component} from 'react';
import {StyleSheet, ScrollView, StatusBar} from 'react-native';
import {Container} from 'native-base';

import Header from '../Components/Header';
import Category from '../Components/content/containerHeader';
import Main from '../Components/content/Content';
import Fab from '../Components/fab/fab';

class CategoryHome extends Component {
  state = {};
  render() {
    const id_category = this.props.navigation.getParam('id_category');
    console.log('my props = ', this.props.navigation.getParam('id_category'));
    return (
      <Container style={styles.container}>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <Category navigation={this.props.navigation} />
          <Main navigation={this.props.navigation} id_category={id_category} />
        </ScrollView>
        <Fab navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    backgroundColor: '#e8e7e6',
  },
});

export default CategoryHome;
