import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, Button, Image} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors  from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return(
        <ScrollView>
            <View style = {styles.screen}>
                <TitleText>The Game is Over</TitleText>
                <View style = {styles.imageContainer}>
                <Image 
                    fadeDuration = {1000}
                    source = {require('../assets/image1.png')} 
                    style = {styles.image}
                    resizeMode = "cover"/>
                </View>
                <View style= {styles.resultContainer}>
                    <BodyText style = {styles.resultText}>
                        Your phone needed{' '} 
                        <Text style = {styles.highlight}>{props.roundsNumber}</Text>{' '} 
                        rounds to guess the Number {' '} 
                        <Text style = {styles.highlight}>{props.userNumber}</Text>{'.'}
                    </BodyText>
                </View>
                <MainButton onPress = {props.onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    resultContainer:{
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    image:{
        width:  '100%',
        height:'100%' 
    },
    imageContainer: {
        borderRadius: 150,
        borderColor: Dimensions.get('window').width * 0.7 /2,
        borderWidth: 3,
        width:  Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    resultText:{
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
        

    }
});

export default GameOverScreen;