import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Badge, Icon} from 'native-base';
import {connect} from 'react-redux';

import {getCategory} from '../../../Publics/Action/category';
import Logo from '../../../assets/Gitar.png';

class contentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCategory: '',
    };
  }

  componentDidMount = async () => {
    await this.props
      .dispatch(getCategory())
      .then(() => {
        this.setState(
          {
            dataCategory: this.props.categorys.categoryList,
          },
          () => console.warn('AIYOYO', this.state),
        );
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const {dataCategory} = this.state;
    return (
      <>
        <View>
          <Text style={styles.title}>Category</Text>
        </View>
        <View style={styles.container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              {dataCategory.length > 0 ? (
                dataCategory.map((res, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        this.props.navigation.navigate('HomeScreen', {
                          id_category: res.id,
                        });
                        console.log('id category', res.id);
                      }}>
                      <View style={styles.mainCard} key={index}>
                        <View>
                          <Image source={{uri: res.img}} style={styles.image} />
                          <Badge style={styles.badge}>
                            <Text style={styles.text}>{res.name}</Text>
                          </Badge>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })
              ) : (
                <Text>Loading..</Text>
              )}
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    categorys: state.Categorys,
  };
};

export default connect(mapStateToProps)(contentHeader);

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
