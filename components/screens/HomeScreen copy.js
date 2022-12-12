import React, { useContext, useRef, useState } from "react"; // we are importing the react library and the useContext hook from react and we are importing the Context from the global context file
import { Context } from "../globalContext/globalContext.js"
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Sound from 'react-native-sound';
import Video from 'react-native-video';
import { Button, Input,  Tile } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import changeSVGColor from '@killerwink/lottie-react-native-color';
import {PulseAnimation} from 'react-native-animated-pulse';
import * as Animatable from 'react-native-animatable';
import { undefined } from 'undefined-is-a-function';
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

} from 'react-native';



function HomeScreen({ navigation, route, props }) {
    const letterAnimation = {
        0: { opacity: 0, translateY: -42 },
        1: { opacity: 1, translateY: 0 }

    }

    // split text into words so they can appear one at a time
    const words = "Steak".split("Burger");

    // create animation for each word
    const wordAnimations = words.map((word, index) => {
        return {
            0: { opacity: 0, translateY: -42 },
            1: { opacity: 1, translateY: 0 }
        }
    });

    // create bounce animation
    const bounceAnimation = {
        0: { scale: 0.5 },
        0.5: { scale: 1.2 },
        1: { scale: 1 }
    }

    const circleSize = Math.sqrt(Math.pow(200, 2.5) + Math.pow(200, -2.5));

    const [informationBlock, setInformationBlock] = useState([
        {
            title: 'SteakBurger',
            subtitle: 'SteakBurger',
            image: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/steakburger.png'),
            key: '1',
            description: 'Our SteakBurger is made with 100% grass-fed beef, topped with a fried egg, and served on a toasted brioche bun. It’s a burger that’s as good for you as it is delicious.',
            ingredients: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/patty.png'),
            ingredientsImage: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/patty.png'),
            ingredientsImage2: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/bun.png'),
            ingredientsImage3: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/lettuce.png'),
            ingredientsImage4: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/tomato.png'),
        },
        
    ]);





    return (
    <View style={styles.container}>
            <StatusBar barStyle="light-content" />
        <View style={{ position: 'absolute', width: circleSize, height: circleSize, borderRadius: circleSize / 2, opacity: 0.2, backgroundColor: '#dcdbd6', top: 0, left: 0, transform: [{ translateX: -circleSize / 2 }, { translateY: -circleSize / 2 }] }} />
            <Animatable.Image source={require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/steakburger.png')} style={styles.image} animation={"bounceIn"} duration={2500} />
            <View style={{ position: 'absolute', width: circleSize, height: circleSize, borderRadius: circleSize / 2, opacity: 0.2, backgroundColor: '#630330', top: 300, left: 400, transform: [{ translateX: -circleSize / 2 }, { translateY: -circleSize / 2 }] }} />
            <View style={{ flexDirection: 'row', overflow: 'hidden', position: 'absolute', top: 0, left: 10, right: 0 }}>
                <Animatable.Text
                    animation={letterAnimation}
                    duration={1000}
                    style={styles.text}
                >
                    Steak
                </Animatable.Text>
                <Animatable.Text
                    animation={letterAnimation}
                    duration={1000}
                    delay={1000}
                    style={styles.text}
                >
                    Burger
                </Animatable.Text>
            </View>
            <View style={styles.AnimatedContainer}>
                <FlatList 
                    data={informationBlock}
                    renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { item })}>
                <Animatable.Text
                    animation={bounceAnimation}
                    duration={1000}
                    delay={2000}
                    style={styles.text2}>
                    Information
                    </Animatable.Text>
                </TouchableOpacity>
                    )}
                />
            </View> 
    </View>
    );
}










const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcdbd6',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'DancingScript-VariableFont_wght',
    },

    text: {
        color: '#000100',
        fontSize: 42,
        fontFamily: 'DancingScript-VariableFont_wght',
       
        
        
    },

    image: {
        justifyContent: "center",
        width: '100%',
        resizeMode: 'contain',
        alignItems: 'center',
        alignSelf: 'center',
      
    },

    // set text vertical alignment
    text2: {
        color: '#000100',
        fontSize: 32,
        fontFamily: 'DancingScript-VariableFont_wght',
        textAlignVertical: 'center',

        
        
    },

    // make AnimatedContainer horizontally centered
    AnimatedContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        position: 'absolute',
        top: 600,
        left: -10,
        transform: [
            { rotate: '-90deg' }
        ],
    
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        position: 'absolute',
        top: 600,
        left: -10,
        transform: [
            { rotate: '-90deg' }
        ],
    },



  
});











export default HomeScreen;
