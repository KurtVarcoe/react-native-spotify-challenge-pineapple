import React from "react";
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
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
                    <AntIcon style={styles.moduleOptionIcon} color="#a6a6a6" size={30} name="ellipsis1"/>
                </View>
                <View style={styles.emptyContainer}></View>
            </View>
        </View>
        <View style={styles.moduleRight}>
            <View style={styles.playIconContainer}>
                <Icon style={styles.playIcon} name="controller-play" color="white" size={40}/>
            </View>
            <View style={styles.shuffleIconContainer}>
                <Icon style={styles.shuffleIcon} name="shuffle" color="#1bb956" size={12}/>
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
        paddingLeft: 2,
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        fontFamily: 'CircularStd-Medium'
    },
    moduleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.8,
        paddingRight: 10,
        paddingTop: 10
    },
    moduleLeft: {
        justifyContent: 'space-evenly',
        paddingLeft: 10
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