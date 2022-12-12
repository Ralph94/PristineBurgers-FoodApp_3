import React, { useContext, useRef, useState } from "react"; // we are importing the react library and the useContext hook from react and we are importing the Context from the global context file
import { Context } from "../globalContext/globalContext.js"
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Sound from 'react-native-sound';
import Video from 'react-native-video';
import { Button, Input,  Tile } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import changeSVGColor from '@killerwink/lottie-react-native-color';
import {PulseAnimation} from 'react-native-animated-pulse';
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-reanimated-carousel';
import SoundEffect from 'C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/sounds/munch.mp3';

import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Animated,
    StatusBar,
    TouchableOpacity,
    Pressable,
    Alert,
    FlatList,
    Dimensions,

} from 'react-native';



function CheckOut({ navigation, route, props }) {
    item = route.params.item;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Check Out</Text>
                <Text>{item.name}</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.text_footer}>Total</Text>
                <View style={styles.action}>
                    <FontAwesome name="dollar" color="#05375a" size={20} />
                    <Text style={styles.textInput}>{item.price}</Text>
                </View>
                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Payment Method</Text>
                <View style={styles.action}>
                    <FontAwesome name="credit-card" color="#05375a" size={20} />
                    <Text style={styles.textInput}>Credit Card</Text>
                </View>
                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Card Number</Text>
                <View style={styles.action}>
                    <FontAwesome name="credit-card" color="#05375a" size={20} />
                    <Text style={styles.textInput}>1234 5678 9101 1121</Text>
                </View>
                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Expiration Date</Text>
                <View style={styles.action}>
                    <FontAwesome name="calendar" color="#05375a" size={20} />
                    <Text style={styles.textInput}>12/25</Text>
                </View>
                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>CVV</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" color="#05375a" size={20} />
                    <Text style={styles.textInput}>123</Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => { navigation.navigate('HomeScreen') }}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Pay</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },

    header_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },

    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },

    text_footer: {
        color: '#000100',
        fontSize: 18
    },

});


export default CheckOut;


