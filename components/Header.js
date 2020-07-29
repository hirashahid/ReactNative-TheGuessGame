import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import TitleText from '../components/TitleText'
import Colors from '../constants/colors';

const Header = props => {
    return(
        <View style = {{...styles.headerBase,
        ...Platform.select({ios: styles.headerIOS,
        android: styles.headerAndroid})}}>
            <TitleText style = {styles.headerTitle}>{props.title}</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        padding: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    headerIOS: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid:{
        backgroundColor: Colors.primary        
    }
});

export default Header;