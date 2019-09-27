import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Container, Badge} from 'native-base';
import {connect} from 'react-redux';

import {getProduct} from '../../../Publics/Action/product';

import Logo from '../../../assets/Violin.png';

class contentBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProduct: [],
      field: 'id_category',
      // id: this.props.id_category || 1,
    };
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  componentDidMount = async () => {
    await this.props
      .dispatch(getProduct(this.state.field, this.props.id_category || 1))
      .then(() => {
        this.setState(
          {
            dataProduct: this.props.products.productsList,
          },
          () => console.log('data product = ', this.state),
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  // componentDidMount = () => {
  //   this.subscribe = this.props.navigation.addListener('didFocus', () => {
  //     this.mamank();
  //   });
  // };

  render() {
    const {dataProduct} = this.state;
    console.log('data Produk = ', this.props.navigation);
    return (
      <>
        <Container style={styles.container}>
          <View>
            <Text style={styles.title}>120 Product</Text>
          </View>

          <View style={{flex: 6, flexDirection: 'row', flexWrap: 'wrap'}}>
            {dataProduct.length > 0 ? (
              dataProduct.map((res, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      this.props.navigation.navigate('DetailScreen', {
                        item: res,
                      });
                    }}
                    style={styles.cardWrap}>
                    <View style={styles.card} key={index}>
                      <Text style={styles.mainTitle}>{res.name}</Text>
                      <Text style={styles.stockTittle}>
                        Stock : {res.stock} qty
                      </Text>
                      <Badge style={styles.badge}>
                        <Text style={styles.priceTittle}>
                          Rp.{this.formatNumber(res.price)}
                        </Text>
                      </Badge>
                      <Image source={Logo} style={styles.image} />
                    </View>
                  </TouchableOpacity>
                );
              })
            ) : (
              <Text>Not Found :P</Text>
            )}
          </View>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.Products,
  };
};

export default connect(mapStateToProps)(contentBase);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  cardWrap: {
    width: '47%',
  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 12,
    paddingLeft: 80,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  title: {
    fontSize: 15,
    margin: 15,
  },
  badge: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: 150,
    backgroundColor: 'green',
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    width: 170,
    color: 'black',
    margin: 5,
    marginLeft: 10,
    alignItems: 'flex-start',
    position: 'absolute',
  },
  priceTittle: {
    fontSize: 15,
    color: 'white',
    width: 170,
  },
  stockTittle: {
    fontSize: 15,
    paddingTop: 60,
    bottom: 50,
    left: 10,
    position: 'absolute',
  },
  image: {
    width: 100,
    height: 100,
  },
});
