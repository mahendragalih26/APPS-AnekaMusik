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
import {getProduct} from '../../../Publics/Action/product';
import Logo from '../../../assets/Gitar.png';

class contentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCategory: '',
      dataProduct: [],
      field: 'id_category',
      id_search: '',
    };
  }

  handleGetCategory = id_category => {
    this.props
      .dispatch(getProduct(this.state.field, id_category))
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

  componentDidMount = async () => {
    await this.props
      .dispatch(getCategory())
      .then(() => {
        this.setState(
          {
            dataCategory: this.props.categorys.categoryList,
          },
          () => console.log('data from header', this.state),
        );
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const {dataCategory} = this.state;
    const {id_search} = this.state;
    console.log('id searchnya = ', id_search);
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
                        this.handleGetCategory(res.id);
                      }}
                      key={index}>
                      <View style={styles.mainCard}>
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
    products: state.Products,
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
