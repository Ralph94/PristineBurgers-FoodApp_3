import React, { useContext, useRef, useState } from "react"; // we are importing the react library and the useContext hook from react and we are importing the Context from the global context file
import { Context } from "../globalContext/globalContext.js"
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Sound from 'react-native-sound';
import Video from 'react-native-video';
import { Button, Input, Image, Tile } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import {PulseAnimation} from 'react-native-animated-pulse';
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

    // create interpolate function
   


    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
           <LottieView style={styles.lottie} source={require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/59677-fast-food.json')} autoPlay loop  />
            <View style={styles.header}>
             <Text style={styles.text_header}>Pristine Burgers</Text><FontAwesome5 name="hamburger" size={15} color="gold" />
            </View>
            <View style={styles.footer}>
                <Animated.View style={[styles.textWrapper, animatedStyles]}>
                    <Text style={styles.text_footer}>Take More Then Just Bite</Text>
                </Animated.View>
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        textAnimation();
                        setTimeout(() => {
                        navigation.navigate('');
                        }, 1000);
                    }}
                >
                    <Text style={styles.text_footer}>Yum!</Text>
                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            pulse();
                            console.log('pressed');
                        }}
                    >
                        <PulseAnimation color={'red'}  numPulses={10} diameter={80} initialDiameter={90} speed={20} duration={2000} pulseStyle={{ borderColor: 'gold', borderWidth: 4, borderRadius: 110 }} style={{ position: 'absolute', top: 20, left: 60 }}/>
                        <AntDesign name="arrowright" size={24} color="white" style={{ position: 'absolute', top: 10, left: 86 }} />
                        <PulseAnimation color={'black'}  numPulses={5} diameter={120} initialDiameter={100} speed={20} duration={2000} pulseStyle={{ borderColor: 'gold', borderWidth: 4, borderRadius: 110 }} style={{ position: 'absolute', top: 20, left: 40 }}/>
                    </Pressable>
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

    icon: {
        marginLeft: 10,
        marginTop: 3,
        fontSize: 20,
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
        color: '#FFE5B4',
        fontSize: 30,
        fontFamily: 'JosefinSans-Bold',
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
        fontSize: 35,
        fontFamily: 'JosefinSans-Bold',
    },

    img: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',

    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        width: 200,
        marginTop: 30,
    },

    logo: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },

  
});


export default SplashScreen;