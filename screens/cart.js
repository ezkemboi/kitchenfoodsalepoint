import React from 'react';
import {
    View, Text, Button,
    Content, List, ListItem,
    Left, Body, Right, Thumbnail,
    Container, Icon, Toast
} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import food from '../food.png';

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: [],
            user: {},
            isVisible: false
        }
    }
    componentDidMount() {
        /**
         * Set user details in the local to help when deleting and updating cart items
        */
        this.getItemToLocalStorage('user').then(response => {
            this.setState({
                user: response
            })
            // Return user cart items using the local storage stored user details
            console.log('--------', response.id)
            return axios
                .get(`https://murmuring-peak-67663.herokuapp.com/cart/${response.id}`)
                .then(response => {
                    console.log('This is response', response)
                    const { data } = response.data;
                    this.setState({
                        cartItems: data
                    })
                })
                .catch(err => {
                    console.log("------This is err ---------", err);
                });
        })
        // return axios
        //     .get(`https://murmuring-peak-67663.herokuapp.com/cart/${5}`)
        //     .then(response => {
        //         const { data } = response.data;
        //         this.setState({
        //             cartItems: data
        //         })
        //     })
        //     .catch(err => {
        //         console.log("------This is err ---------", err);
        //     });
    }

    // Method to get an item stored for user credentials
    getItemToLocalStorage = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)
            return JSON.parse(value)
        } catch (err) {
            console.log('---------errror setting token----', err)
            return false
        }
    }

    // Update the cart items in cart
    handleUpdateCart = productId => {
        const { id } = this.state.user;
        console.log('I am updating the cart')
    }

    // Delete cart item in screen
    handleDeleteCartItem = productId => {
        const { id } = this.state.user;
        console.log('This is id for user', id)
        return (
            axios.delete(`https://murmuring-peak-67663.herokuapp.com/cart/${id}/${productId}`)
                .then(response => {
                    console.log('----------removed item response----', response)
                    Toast.show({
                        text: "Item removed from cart",
                        position: "top",
                        buttonText: "Okay",
                        type: "success",
                        duration: 2000
                    });
                    return axios.get(`https://murmuring-peak-67663.herokuapp.com/cart/${id}`)
                        .then(response => {
                            const { data } = response.data;
                            this.setState({
                                cartItems: data
                            })
                        })
                })
                .catch(err => {
                    console.log('This is the log error for this case', err)
                    Toast.show({
                        text: "An error occurred while removing item",
                        position: "top",
                        buttonText: "Okay",
                        type: "danger",
                        duration: 2000
                    });
                })
        )
    }

    render() {
        // Return products now
        const { cartItems } = this.state;
        let cart;
        if (cartItems) {
            cart = cartItems.map((cartItem, index) => {
                console.log('This is the cart item', cartItem)
                return (
                    <ListItem avatar key={index}>
                        <Body
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: 1
                            }}
                        >
                            <Thumbnail
                                square
                                source={food}
                            />
                            <Text
                                style={{
                                    flex: 0.4,
                                    alignSelf: "center",
                                    paddingLeft: 10
                                }}
                            >
                                Food Name
                                </Text>
                            <Text
                                style={{
                                    flex: 0.2,
                                    alignSelf: "center"
                                }}
                            >
                                {3}
                            </Text>
                            <Text
                                style={{
                                    flex: 0.3,
                                    alignSelf: "center"
                                }}
                            >
                                € {cartItem.amount}.00
                            </Text>
                            <Icon
                                style={{
                                    flex: 0.2,
                                    alignSelf: "center"
                                }}
                                type="FontAwesome"
                                name="edit"
                                onPress={() => this.handleUpdateCart(cartItem.productId)}
                            />
                            <Icon
                                style={{
                                    flex: 0.2,
                                    alignSelf: "center",
                                    color: "red"
                                }}
                                type="FontAwesome"
                                name="trash"
                                onPress={() => this.handleDeleteCartItem(cartItem.productId)}
                            />
                        </Body>
                    </ListItem>
                )
            })
        }
        return (
            <Container
                style={{
                    backgroundColor: "#709BA5"
                }}
            >
                <Text
                    style={{
                        alignSelf: 'center',
                        marginTop: 20,
                        marginBottom: 10,
                        fontSize: 20,
                        color: 'blue'
                    }}
                >Cart Dashboard</Text>
                <Content
                    style={{
                        backgroundColor: "white"
                    }}
                >
                    <List>
                        {cart}
                    </List>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            flex: 1
                        }}
                    >
                        <Icon
                            type="FontAwesome"
                            name="backward"
                            style={{
                                marginTop: 10,
                                marginLeft: 20,
                                alignSelf: 'flex-start',
                                flex: 0.5,
                            }}
                            onPress={() => this.props.navigation.navigate('Menu')}
                        />
                        <Button
                            style={{
                                marginTop: 10,
                                alignSelf: 'flex-end'
                            }}
                        >
                            <Text>Purchase Items</Text>
                        </Button>
                    </View>

                </Content>

            </Container >
        )
    }
}

export default Cart;
