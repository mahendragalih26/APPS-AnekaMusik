import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Image, Text} from 'react-native';
import {Badge, Icon} from 'native-base';

import Logo from '../../../assets/Gitar.png';
import {white} from 'ansi-colors';

class contentHeader extends Component {
  state = {};
  render() {
    return (
      <>
        <View>
          <Text style={styles.title}>Category</Text>
        </View>
        <View style={styles.container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <View style={styles.mainCard}>
                <View>
                  <Image source={Logo} style={styles.image} />
                  <Badge style={styles.badge}>
                    <Text style={styles.text}>Gitar</Text>
                  </Badge>
                </View>
              </View>

              <View style={styles.mainCard}>
                <View>
                  <Image source={Logo} style={styles.image} />
                  <Badge style={styles.badge}>
                    <Text style={styles.text}>Gitar</Text>
                  </Badge>
                </View>
              </View>

              <View style={styles.mainCard}>
                <View>
                  <Image source={Logo} style={styles.image} />
                  <Badge style={styles.badge}>
                    <Text style={styles.text}>Violin</Text>
                  </Badge>
                </View>
              </View>

              <View style={styles.mainCard}>
                <View>
                  <Image source={Logo} style={styles.image} />
                  <Badge style={styles.badge}>
                    <Text style={styles.text}>Gitar</Text>
                  </Badge>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 13,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'stretch',
    marginLeft: 3,
    marginRight: 3,
    zIndex: 0,
  },
  mainCard: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 17,
  },
  badge: {
    backgroundColor: '#edbc5a',
    position: 'absolute',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },

  title: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black',
    margin: 5,
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default contentHeader;
