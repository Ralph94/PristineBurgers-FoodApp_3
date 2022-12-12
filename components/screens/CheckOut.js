import React, { useContext, useRef, useState } from "react"; // we are importing the react library and the useContext hook from react and we are importing the Context from the global context file
import { Context } from "../globalContext/globalContext.js"
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Sound from 'react-native-sound';
import { Button, Input,  Tile } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import changeSVGColor from '@killerwink/lottie-react-native-color';
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-reanimated-carousel';
import SoundEffect from 'C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/sounds/pop.mp3';
import Modal from "react-native-modal";
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


    const [price, setPrice] = useState(parseFloat(item.price.replace("$", "")));
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState();

    const [sound, setSound] = useState(new Sound(SoundEffect, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ');

    // Volume 0.5
    sound.setVolume(1);


        
}));
  
      // This is our function that plays the sound when the user presses the button on the checkout page and it is called in the render function below
  const playSound = () => {
    sound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    })

    };



     const handleOnChangeQuantity = (qty) => {
        if (qty > 0) setQuantity(qty);
    }

    // create modal function
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        playSound();
        
    };

    // create bounce animation
    const bounceValue = useRef(new Animated.Value(0)).current;
    const bounce = () => {
        Animated.sequence([
            Animated.timing(bounceValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),

            Animated.timing(bounceValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    };

 


   








 return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
             <Text style={styles.header_text}>{item.title}</Text>
             <View style={styles.imageContainer}>
                 <Image source={item.image} style={styles.image} />
             </View>

             <View style={styles.quantityContainer}>
                 <Text style={styles.quantityText}>Quantity</Text>
                 <View style={styles.quantityButtons}>
                     <TouchableOpacity onPress={() => handleOnChangeQuantity(quantity - 1)}>
                         <AntDesign name="minuscircleo" size={30} color="#000" />
                     </TouchableOpacity>
                     <Text style={styles.quantityText}>{quantity}</Text>
                     <TouchableOpacity onPress={() => handleOnChangeQuantity(quantity + 1)}>
                         <AntDesign name="pluscircleo" size={30} color="#000" />
                     </TouchableOpacity>
                     
                 </View>
                 <View style={styles.button}>
                     <TouchableOpacity onPress={toggleModal}>
                         <Text style={styles.textSign}>Check Out</Text>
                     </TouchableOpacity>
                 </View>
                </View>
             
             
                 
                
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.text_footer}>Total</Text>
                <View style={styles.action}>
                    <FontAwesome name="dollar" color="#05375a" size={20} />
                    <Text style={styles.textInput}>{price * quantity}</Text>
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
             <View style={styles.modalContainer}>
                 <Modal style={{backgroundColor: 'grey',}} isVisible={isModalVisible}>
                     <View style={styles.modal}>
                         <Image source={require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/courier.png')} style={styles.modalImage} />
                         <Animatable.Text animation="fadeInUpBig" style={styles.modalText}>Your order has been placed!</Animatable.Text>
                         <Text style={styles.modalText2}>Our Courier is already rushing to your location!</Text>
                         <Text style={styles.modalNumber}>{quantity} {item.title} {item.emoji}</Text>
                        <Text style={styles.modalTotal}>Total: ${price * quantity}</Text>
                         <FontAwesome5 style={styles.font} name="window-close" size={30} color="#26619c" onPress={toggleModal} />
                     </View>
                 </Modal>
             </View>
             <View style={styles.button}>
                 <TouchableOpacity
                     style={styles.signIn}
                     onPress={toggleModal}
                 >
                        <Text style={[styles.textSign, {
                            color: '#000100'
                     }]}>Place Order</Text>
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
        paddingBottom: 20
    },

    header_text: {
        color: 'white',
        fontFamily: 'DancingScript-VariableFont_wght',
        fontSize: 32
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

    imageContainer: {
        width: 90,
        height: 90,
        borderRadius: 100,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'white',
        marginTop: 15,
        marginLeft: 15,
        position: 'absolute',
        top: 0,
        left: 250,
    },

    image: {
        width: '100%',
        height: '100%'
    },

    quantityContainer: {
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginTop: 15,
        marginLeft: 15,
        position: 'absolute',
        top: 0,
        left: 0,
    },

    quantityButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
        marginTop: 10
    },

    quantityText: {
        fontSize: 18.5,
        fontFamily: 'DancingScript-VariableFont_wght',
        color: 'white'
    },

    modalText: {
        fontSize: 40.5,
        fontFamily: 'RobotoSlab-VariableFont_wght',
        color: '#26619c',
        position: 'absolute',
        top: 0,
        left: 50,
    },

    modalText2: {
        fontSize: 30.5,
        fontFamily: 'RobotoSlab-VariableFont_wght',
        color: '#000100',
        position: 'absolute',
        top: 200,
        left: 20,
    },

    font: {
        position: 'absolute',
        top: -340,
        left: 310,
    },

    modalContainer: {
        width: 300,
        height: 300,
        marginTop: 15,
        marginLeft: 15,
        position: 'absolute',
        top: 0,
        left: 0,

    },

    lottie: {
        width: 300,
        height: 300,
        position: 'absolute',
        top: 0,
        left: 0,
    },

    modalImage: {
        width: 300,
        height: 300,
        position: 'absolute',
        top: -350,
        left: -50,
    },

    modalNumber: {
        fontSize: 20.5,
        fontFamily: 'RobotoSlab-VariableFont_wght',
        color: '#26619c',
        position: 'absolute',
        top: -300,
        left: 130,
    },

    modalTotal: {
        fontSize: 20.5,
        fontFamily: 'RobotoSlab-VariableFont_wght',
        color: '#26619c',
        position: 'absolute',
        top: -250,
        left: 200,
    },

    



});


export default CheckOut;


