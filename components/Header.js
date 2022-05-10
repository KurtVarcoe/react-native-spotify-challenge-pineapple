import React from "react";

import { ImageBackground, View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'


export default Header = () => {
    return (
        <ImageBackground source={require("../assets/highklassifiedzoom.png")} style={styles.headerImage}>
          <View style={styles.backIconContainer}>
            <Icon name="chevron-thin-left" color="white" size={25} style={styles.backIcon}/>
          </View>
          <Text style={styles.artistName}>High Klassified</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    artistName: {
      color: 'white',
      fontSize: 50,
      fontFamily: 'CircularStd-Black',
      letterSpacing: -1.5
    },
    backIconContainer: {
      position: 'absolute',
      top: 20,
      left: 15,
      backgroundColor: '#121212',
      opacity: 0.4,
      height: 40,
      width: 40,
      borderRadius: 40 / 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerImage: {
      flex: 3.5,
      justifyContent: 'flex-end',
      paddingLeft: 15
    }
  });