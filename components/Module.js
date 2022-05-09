import React from "react";
import Icon from 'react-native-vector-icons/Entypo';
import { Text,View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default Module = () => {
return (
    <LinearGradient colors={['#2a2a2a', '#141414']} style={styles.moduleContainer}>
        <View style={styles.moduleLeft}>
            <Text style={styles.body}>Abalaleli benyanga anbangu-166,307</Text>
            <View style={styles.options}>
                <Text style={styles.followBtn}>OBALANDELAYO</Text>
                <View style={styles.moduleOptionIconContainer}>
                    <Icon style={styles.moduleOptionIcon} color="#a6a6a6" size={25} name="dots-three-horizontal"/>
                </View>
                <View style={styles.emptyContainer}></View>
            </View>
        </View>
        <View style={styles.moduleRight}>
            <View style={styles.playIconContainer}>
                <Icon style={styles.playIcon} name="controller-play" color="white" size={40}/>
            </View>
            <View style={styles.shuffleIconContainer}>
                <Icon style={styles.shuffleIcon} name="shuffle" color="#1bb956" size={10}/>
            </View>
        </View>
    </LinearGradient>
)}

const styles = StyleSheet.create({
    body: {
        color: '#a6a6a6',
        fontSize: 16
    },
    emptyContainer: {
        flex: 0.1
    },
    followBtn: {
        color: 'white',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        padding: 8,
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        // fontWeight: 'bold',
        textAlign: "center",
        fontFamily: 'CircularStd-Medium'
    },
    moduleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.8,
        paddingRight: 10
    },
    moduleLeft: {
        justifyContent: 'space-evenly',
        paddingLeft: 15
    },
    moduleOptionIconContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    moduleRight: {
        justifyContent: 'center',
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    playIconContainer: {
        backgroundColor: '#1bb956',
        height: 65,
        width: 65,
        borderRadius: 65 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shuffleIconContainer: {
        position: 'absolute',
        bottom: 5,
        right: 0,
        backgroundColor: 'white',
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});