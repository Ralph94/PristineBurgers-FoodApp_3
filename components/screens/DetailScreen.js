import React, { useContext, useRef, useState } from "react"; // we are importing the react library and the useContext hook from react and we are importing the Context from the global context file
import { Context } from "../globalContext/globalContext.js"
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Sound from 'react-native-sound';
import { Button, Input,  Tile } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import changeSVGColor from '@killerwink/lottie-react-native-color';
import * as Animatable from 'react-native-animatable';
import SoundEffect from 'C:/Users/Raffp/Desktop/React Native Projects/React_Native_FoodApp3/CheeseBurgerApp/assets/sounds/exitSound.mp3';
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

} from 'react-native';


function DetailScreen({ navigation, route, props }) {

    item = route.params.item;
    

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


   



    



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={{position: 'absolute', top: 5.5, left: 250}} onPress={() => { navigation.goBack(); playSound() }}>
                <FontAwesome5 name="window-close" size={30} color="white" />
                </Pressable>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.textHeader}>Pristine Burgers</Text>
                </TouchableOpacity>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.claories}>{item.claories}</Text>
                <Animatable.Image source={item.image} style={styles.image} animation="bounceIn" duration={1500} />
            </View>
            <View style={styles.body}>
                <Text style={styles.textTitle}>Ingredients</Text>
                <Text style={styles.text}>{item.ingredients}</Text>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.textFooter}>{item.description}</Text>
                <Animatable.Image source={item.ingredientsImage} style={styles.ingredientsImage} animation="slideInLeft" duration={2000} />
                <Animatable.Image source={item.ingredientsImage2} style={styles.ingredientsImage2} animation="slideInLeft" duration={2000} />
                <Animatable.Image source={item.ingredientsImage3} style={styles.ingredientsImage3} animation="slideInLeft" duration={2000} />
                <Animatable.Image source={item.ingredientsImage4} style={styles.ingredientsImage4} animation="slideInLeft" duration={2000} />
            </Animatable.View>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcdbd6',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'DancingScript-VariableFont_wght',
    },
    header: {
        flex: 1,
        alignItems: 'center',
    },

    textHeader: {
        color: '#000',
        fontSize: 30,
        fontFamily: 'DancingScript-VariableFont_wght',
    },

    text: {
        fontSize: 32.5,
        fontFamily: 'DancingScript-VariableFont_wght',
        position: 'absolute',
        top: 50,
        left: 80,
        color: 'gold',

    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 300,
        borderWidth: 3,
        borderColor: 'gold',
        position: 'absolute',
        top: 80,
        left: -100,
        right: 0,
        bottom: 0,
      
    },

    textTitle: {
        fontSize: 20,
        fontFamily: 'DancingScript-VariableFont_wght',
        color: '#000',
    },

    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },

    textFooter: {
        color: '#000',
        fontSize: 28.5,
        fontFamily: 'Lato-Regular',
    },

    // images for the ingredients

    ingredientsImage: {
        width: 75,
        height: 75,
        borderRadius: 300,
        borderWidth: 3,
        borderColor: 'white',
        position: 'absolute',
        top: -120,
        left: 0,
    },

    ingredientsImage2: {
        width: 75,
        height: 75,
        borderRadius: 300,
        borderWidth: 3,
        borderColor: 'white',
        position: 'absolute',
        top: -120,
        left: 110,
    },

    ingredientsImage3: {
        width: 75,
        height: 75,
        borderRadius: 300,
        borderWidth: 3,
        borderColor: 'white',
        position: 'absolute',
        top: -120,
        right: 110,

    },

    ingredientsImage4: {
        width: 75,
        height: 75,
        borderRadius: 300,
        borderWidth: 3,
        borderColor: 'white',
        position: 'absolute',
        top: -120,
        right: 0,
    },

    claories: {
        fontSize: 40,
        fontFamily: 'DancingScript-VariableFont_wght',
        position: 'absolute',
        top: 150,
        left: 50,
        color: '#000100',
    },



});

export default DetailScreen;

