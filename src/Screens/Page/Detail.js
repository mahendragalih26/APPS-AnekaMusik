import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Container, Icon, Button, Footer} from 'native-base';
import Header from '../Components/Header';

import {connect} from 'react-redux';
import {
  addWishlist,
  deleteWishlist,
  getWishlistDetail,
} from '../../Publics/Action/wishlist';

import Logo from '../../assets/Violin.png';

class detailContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.getParam('item'),
      field: 'id_product',
      isWishList: false,
      id_product: '',
      dataWishlist: [],
      dataMatch: '',
    };
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  componentDidMount = async () => {
    await this.props.dispatch(
      getWishlistDetail(this.state.field, this.state.data.id),
    );
    this.setState(
      {
        dataMatch: this.props.dataWishlist,
        id_product: this.state.data.id,
      },
      () => {
        console.log('statenya', this.state.dataMatch.id_product);
        if (this.state.dataMatch.id_product === this.state.id_product) {
          this.setState({isWishList: true});
        }
      },
    );
  };

  handleWishAdd = async (id_user, id_product) => {
    const NewData = {
      id_user,
      id_product,
    };
    await this.props.dispatch(addWishlist(NewData)).then(() => {
      this.setState({isWishList: true});
    });
    await this.props.dispatch(getWishlistDetail(this.state.field, id_product));
  };

  handleWishRemove = id_product => {
    this.props.dispatch(deleteWishlist(id_product)).then(() => {
      this.setState({isWishList: false});
    });
  };

  render() {
    const {data} = this.state;
    console.log('data', data);
    console.log('data wish', this.state.dataWishlist);
    return (
      <>
        <Header />
        <ScrollView>
          <Container style={styles.container}>
            <View style={styles.image}>
              <Image source={Logo} style={styles.image} />
            </View>
            <View style={styles.desc}>
              <Text style={styles.subTittle}>Available In</Text>
              <Text style={styles.textBot}>{data.branch}</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.subTittle}>Price</Text>
              <Text style={styles.textBot}>
                Rp. {this.formatNumber(data.price)}
              </Text>
            </View>
            <View style={styles.stock}>
              <Text style={styles.subTittle}>Stock</Text>
              <Text style={styles.textBot}>{data.stock}</Text>
            </View>
            <View style={{margin: 10}}>
              {this.state.isWishList ? (
                <TouchableOpacity
                  style={styles.subIcon}
                  onPress={() => {
                    this.handleWishRemove(1, data.id);
                    this.setState({
                      id_product: data.id,
                    });
                    console.log('added oi = ');
                  }}>
                  <Icon name="heart" style={styles.fontMI} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.subIcon}
                  onPress={() => {
                    this.handleWishAdd(1, data.id);
                    this.setState({
                      id_product: data.id,
                    });
                    console.log('added oi = ');
                  }}>
                  <Icon name="heart-empty" style={styles.fontMI} />
                </TouchableOpacity>
              )}

              <Text style={styles.mainTitle}>{data.name}</Text>
              <Text style={styles.text}>{data.description}</Text>
            </View>
          </Container>
        </ScrollView>
        <TouchableOpacity>
          <Footer style={styles.footer}>
            <Text style={styles.cart}>Add To cart</Text>
          </Footer>
        </TouchableOpacity>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataWishlist: state.Wishlist.wishlistDetail,
  };
};

export default connect(mapStateToProps)(detailContent);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    backgroundColor: '#fff',
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black',
    marginHorizontal: 25,
    alignItems: 'flex-start',
    position: 'absolute',
  },
  desc: {
    paddingVertical: 20,
    position: 'absolute',
    alignItems: 'flex-start',
  },
  price: {
    paddingTop: 80,
    position: 'absolute',
    alignItems: 'flex-start',
  },
  stock: {
    paddingTop: 145,
    position: 'absolute',
    alignItems: 'flex-start',
  },
  cart: {
    paddingTop: 15,
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
  },
  mainIcon: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  fontMI: {
    fontSize: 35,
    color: 'red',
  },
  footer: {
    backgroundColor: '#edbc5a',
    borderRadius: 10,
  },
  subIcon: {
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 10,
  },
  text: {
    fontSize: 15,
    color: 'gray',
    marginHorizontal: 25,
    alignItems: 'flex-start',
    paddingTop: 20,
  },
  textBot: {
    fontSize: 15,
    color: 'gray',
    marginHorizontal: 25,
    alignItems: 'flex-start',
  },
  subTittle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginHorizontal: 25,
    alignItems: 'flex-start',
  },
  image: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});
