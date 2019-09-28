import React, {Component} from 'react';
import {Container, Header, View, Button, Icon, Fab} from 'native-base';

import {connect} from 'react-redux';

import {getWishlist} from '../../../Publics/Action/wishlist';

class FABExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      dataWishlist: [],
    };
  }

  componentDidMount = async () => {
    await this.props
      .dispatch(getWishlist())
      .then(() => {
        this.setState(
          {
            dataWishlist: this.props.data.wishlistList,
          },
          () => console.log('data from fab', this.state),
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log('data wishlist = ', this.state.dataWishlist);
    return (
      <View style={{flex: 1}}>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: '#5067FF'}}
          position="bottomRight"
          onPress={() => this.setState({active: !this.state.active})}>
          <Icon name="navigate" />
          <Button style={{backgroundColor: '#3B5998'}}>
            <Icon name="cart" />
          </Button>
          <Button
            style={{backgroundColor: '#DD5144'}}
            onPress={() => {
              this.props.navigation.navigate('WishListScreen', {
                data: this.state.dataWishlist,
              });
            }}>
            <Icon name="heart" />
          </Button>
        </Fab>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.Wishlist,
  };
};

export default connect(mapStateToProps)(FABExample);
