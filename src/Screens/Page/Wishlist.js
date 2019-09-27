import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  ImageBackground,
  Text,
} from 'react-native';

import Header from '../Components/Header';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

import Logo from '../../assets/Violin.png';

function Item({title}) {
  // return <View style={styles.item}></View>;
  return (
    <View style={styles.item}>
      <ImageBackground source={Logo} style={{width: 100, height: 100}}>
        <Text>{title}</Text>
      </ImageBackground>
    </View>
  );
}

const myWishlist = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      {console.log(
        'props data wish = ',
        this.props.navigation.getParam('data'),
      )}
    </SafeAreaView>
  );
};

export default myWishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
