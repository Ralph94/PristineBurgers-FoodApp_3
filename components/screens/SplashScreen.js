import React, { useContext, useRef, useState } from "react"; // we are importing the react library and the useContext hook from react and we are importing the Context from the global context file
import { Context } from "../globalContext/globalContext.js"
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Sound from 'react-native-sound';
import Video from 'react-native-video';
import { Button, Input, Image, Tile } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import changeSVGColor from '@killerwink/lottie-react-native-color';
import {PulseAnimation} from 'react-native-animated-pulse';
import * as Animatable from 'react-native-animatable';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    //Image,
    ImageBackground,
    Animated,
    StatusBar,
    TouchableOpacity,
    Pressable,
    Alert,

} from 'react-native';


function SplashScreen({ navigation, route, props }) {
    const AnimatedText = new Animated.Value(0);
    
    // create text animation
    const textAnimation = () => {
        Animated.timing(AnimatedText, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }




    // create interpolate function
    const textInterpolate = AnimatedText.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    // create animated styles
    const animatedStyles = {
        opacity: textInterpolate,
        transform: [
            {
                translateY: textInterpolate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0]
                })
            }
        ]
    };

    // create pulse animation
    const pulseAnimation = useRef(new Animated.Value(0)).current;
    const pulse = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnimation, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }),
                Animated.timing(pulseAnimation, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                })
            ])
        ).start();
    }
   


    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
           <LottieView style={styles.lottie} source={require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/59677-fast-food.json')} autoPlay loop  />
            <View style={styles.header}>
             <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.text_header}>Pristine Burgers</Animatable.Text><FontAwesome5 name="hamburger" size={15} color="gold" />
            </View>
            <View style={styles.footer}>
                <Animated.View style={[styles.textWrapper, animatedStyles]}>
                    <Text style={styles.text_footer}>Take More Then Just A Bite</Text>
                </Animated.View>
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        textAnimation();
                        setTimeout(() => {
                        navigation.navigate('HomeScreen');
                        }, 1000);
                    }}
                >
                  <TouchableOpacity  onPress={() => {
                        textAnimation();
                        setTimeout(() => {
                        navigation.navigate('HomeScreen');
                        }, 1000);
                    }}>
                    <LottieView style={styles.lottie2} source={changeSVGColor(require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/91089-pulse.json'), '#FF0000')} autoPlay loop />
                    <LottieView style={styles.lottie3} source={changeSVGColor(require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/96663-arrow-right.json'), '#FF0000')} autoPlay loop />
                    </TouchableOpacity>
                </Pressable>
            </View>
        </View>
    );
}























const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
     
        
    },

    lottie: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        zIndex: -1,
        marginLeft: 30,
        marginRight: 30,

    },

    lottie2: {
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',
        top: 0,  

    },

    lottie3: {
        position: 'absolute',
        top: -45,
        left: 20,

        
    },


    header: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',

    },

    text_header: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#FF0000',
        fontSize: 60,
        fontFamily: 'DancingScript-VariableFont_wght',
        marginTop: 30,
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'JosefinSans-Bold',
        marginTop: 30,
    },

    footer: {
        alignItems: 'center',
    },

    text_footer: {
        color: '#FFE5B4',
        fontSize: 35.5,
        fontFamily: 'DancingScript-VariableFont_wght',
    },


   

  
});


export default SplashScreen;