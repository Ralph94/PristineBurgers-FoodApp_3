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
import SoundEffect2 from 'C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/sounds/cart.mp3';

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



function PanCakeScreen({ navigation, route, props }) {
    const pancakeBlock = [
    
        {
            id: 1,
            title: "Regular PanCakes",
            claories: "Calories: 580",
            price: "$5.99",
            emoji: "🥞",
            image: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/pancake2.png'),
            description: 'Our PanCakes are soft and warm with a hint of sweetness. They’re made with 100% whole wheat flour and topped with a delicious maple syrup.',
            ingredients: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/flour.png'),
            ingredientsImage: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/eggs.png'),
            ingredientsImage2: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/flour.png'),
            ingredientsImage3: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/buttermilk.png'),
            ingredientsImage4: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/honey.png'),


        },
        {
            id: 2,
            title: "Chocolate PanCakes",
            claories: "Calories: 670",
            price: "$7.99",
            emoji: "🥞",
            image: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/pancake.png'),
            description: 'Our Chocolate PanCakes are tasty and sweet with a hint of chocolate. They’re made with 100% whole wheat flour and topped with a delicious chocolate syrup.',
            ingredients: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/flour.png'),
            ingredientsImage: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/flour.png'),
            ingredientsImage2: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/eggs.png'),
            ingredientsImage3: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/buttermilk.png'),
            ingredientsImage4: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/choc.png'),

        },
        {
            id: 3,
            title: "BlueBerry PanCakes",
            claories: "Calories: 430",
            price: "$8.99",
            emoji: "🥞",
            image: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/pancake3.png'),
            description: 'Our BlueBerry PanCakes are tasty and sweet with a hint of BlueBerry. They’re made with 100% whole wheat flour and topped with a delicious BlueBerry syrup.',
            ingredients: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/flour.png'),
            ingredientsImage: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/flour.png'),
            ingredientsImage2: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/buttermilk.png'),
            ingredientsImage3: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/eggs.png'),
            ingredientsImage4: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/blueberry.png'),

        },
        {
            id: 4,
            title: "StrawBerry PanCakes",
            claories: "Calories: 670",
            price: "$7.99",
            emoji: "🥞",
            image: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/pancake4.png'),
            description: 'Our StrawBerry PanCakes are tasty and sweet with a hint of StrawBerry. They’re made with 100% whole wheat flour and topped with a delicious StrawBerry  syrup.',
            ingredients: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/flour.png'),
            ingredientsImage: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/flour.png'),
            ingredientsImage2: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/eggs.png'),
            ingredientsImage3: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/strawberry.png'),
            ingredientsImage4: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/buttermilk.png'),

        },
        {
            id: 5,
            title: "Pecan PanCakes",
            claories: "Calories: 670",
            price: "$9.99",
            emoji: "🥞",
            image: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/pancake5.png'),
            description: 'Our Pecan PanCakes are tasty and sweet with a hint of chocolate. They’re made with 100% whole wheat flour and topped with a delicious chocolate syrup.',
            ingredientsImage: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/flour.png'),
            ingredientsImage2: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/eggs.png'),
            ingredientsImage3: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/pecan.png'),
            ingredientsImage4: require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/imgs/buttermilk.png'),

        },
         
         
         

    ]
    
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


       // create sound
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

    // create second sound
    const [sound2, setSound2] = useState(new Sound(SoundEffect2, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + sound2.getDuration() + 'number of channels: ');
        // Volume 0.5
        sound2.setVolume(1.1);


            
  }));
  
      // This is our function that plays the sound when the user presses the button on the checkout page and it is called in the render function below
  const playSound2 = () => {
    sound2.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    })

    };
    
  
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


    const { width, height } = Dimensions.get('screen');

    const scrollX = React.useRef(new Animated.Value(0)).current;

    const Indicator = ({ scrollX }) => {
        return <View style={{ position: 'absolute', top: 700, left: 165, bottom: 100, flexDirection: 'row',}}>
            {pancakeBlock.map((_, i) => {
                return <View
                    key={`indicator-${i}`}
                    style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: '#333',
                
                    }}
                />
            })}
        </View>
    }
                
        




    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            
            <Animated.FlatList
                data={pancakeBlock}
                keyExtractor={(item) => item.id}
                horizontal
                scrollEventThrottle={32}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToAlignment={"center"}
                renderItem={({ item }) => {
        return (
            <View style={{ width, alignItems: 'center', padding: 20, }} >
            <View style={{ position: 'absolute', width: circleSize, height: circleSize, borderRadius: circleSize / 2, opacity: 0.2, backgroundColor: '#dcdbd6', top: 0, left: 0, transform: [{ translateX: -circleSize / 2 }, { translateY: -circleSize / 2 }] }} />
            <View style={{ position: 'absolute', width: circleSize, height: circleSize, borderRadius: circleSize / 2, opacity: 0.2, backgroundColor: '#630330', top: 300, left: 400, transform: [{ translateX: -circleSize / 2 }, { translateY: -circleSize / 2 }] }} />
            <View style={{ flexDirection: 'row', overflow: 'hidden', position: 'absolute', top: 0, left: 10, right: 0 }}>
                <Animatable.Text
                    animation={letterAnimation}
                    duration={1000}
                    delay={1000}
                    style={styles.text}
                >
                    {item.title}
                </Animatable.Text>
                </View>
                        <View style={{
                            flex: 0.7,
                            justifyContent: 'center',
                        }}>
                            <Image
                                source={item.image}
                                style={{
                                    width: 200, height: 200, resizeMode: 'contain'
                                }}
                    />
                </View>
                <View style={{ flex: 0.3, }}> 
                <View style={{ flex: 0.3, justifyContent: 'center', padding: 10, }}>
                    <TouchableOpacity onPress={() => navigation.navigate('CheckOut', { item }, playSound2())}>
                            <FontAwesome5 style={styles.FontAwesome} name="shopping-cart" size={24} color="black" />
                        </TouchableOpacity>
                </View>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { item }, playSound())}>
                    <Animatable.Text
                        animation={bounceAnimation}
                        duration={1000}
                        delay={2000}
                        style={{ fontSize: 24, fontFamily: 'Lato-Bold', marginBottom: 10, color: '#630330' }}>
                        {item.title}
                        </Animatable.Text>
                </TouchableOpacity>
        
                    <Animatable.Text
                        animation={bounceAnimation}
                        duration={1000}
                        delay={2000}
                        style={{ fontSize: 18, fontFamily: 'Lato-Bold', marginBottom: 10, color: '#630330' }}>
                        {item.description}
                    </Animatable.Text>
                   <View style={{ flexDirection: 'row', }}>
                        <Image
                            source={item.ingredientsImage}
                            style={{ width: 40, height: 40, resizeMode: 'contain', }}
                        />
                        <Image
                            source={item.ingredientsImage2}
                            style={{ width: 40, height: 40, resizeMode: 'contain', }}
                        />
                        <Image
                            source={item.ingredientsImage3}
                            style={{ width: 40, height: 40, resizeMode: 'contain', }}
                        />
                        <Image
                            source={item.ingredientsImage4}
                            style={{ width: 40, height: 40, resizeMode: 'contain', }}
                        />

                    
                    </View>
                    <Pressable style={{ position: "absolute", top: 220, left: 0 }} onPress={() => { navigation.goBack(); playSound() }}>
                        <MaterialCommunityIcons style={{ position: "absolute", top: 0, left: 300 }} name="food" size={24} color="#630330" />
                        </Pressable>
                </View>
                    </View>
                    );
                }}
            />
            <Indicator scrollX={scrollX} />
        </View>
    );
}


styles = StyleSheet.create({
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

    PancakeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [
            { rotate: '-90deg' }
        ],
    },

     FontAwesome: {
        width: 75,
        height: 75,
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: -100,
        left: 50,

    },



  
});














export default PanCakeScreen;



