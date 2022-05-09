import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Entypo"


export default User = () => {
    return(
        <View style={styles.userContainer}>
            <View style={styles.imageContainer}>
                <ImageBackground imageStyle={{borderRadius: 22.5}} source={require('../assets/highklassified.jpg')} style={styles.favImage}>
                </ImageBackground>
                <View style={styles.heartIconContainer}>
                    <View style={styles.heartIconCircle}>
                        <Icon name="heart" color="white" size={16} style={styles.heartIcon}/>
                    </View>
                </View>
            </View>
            <View style={styles.artistInfo}>
                <Text style={styles.userName}>Inzingoma Ezithandiwe</Text>
                <Text style={styles.numFav}>5 izingoma • High Klassified</Text>
            </View>
            <View style={styles.userIconContainer}>
                <Icon styles={styles.userIcon} name="chevron-thin-right" size={20} color="#a6a6a6"/>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    artistInfo: {
        flex: 6,
        paddingLeft: 20,
        justifyContent: 'space-evenly'
    },
    favImage: {
        width: 45,
        height: 45,
        flex: 0.8,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    heartIconCircle: {
        backgroundColor: '#1bb956',
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        borderColor: '#121212',
        borderWidth: 3, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    heartIconContainer: {
        position: 'absolute',
        right: 5,
        bottom: 10
    },
    imageContainer: {
        flex: 1.4,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 15
    },
    numFav: {
        color: '#a6a6a6'
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.7,
        paddingBottom: 10
    },
    userIconContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    userName: {
        color: 'white',
        fontSize: 18
    }
})