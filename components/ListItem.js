import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default ListItem = ({item}) => {
    const imFinePath1 = require('../assets/im-fine-remix.jpeg')
    const imFinePath2 = require('../assets/im-fine.jpeg')
    return (
        <View style={styles.listItemView}>
            <Text style={styles.num}>{item.id}</Text>
            <Image style={styles.listItemImage} source={eval('imFinePath' + item.id)}/>
            <View style={styles.listItemInfo}>
                <Text style={styles.listItemText}>{item.title}</Text>
                <Text style={styles.viewCount}>{item.viewCount}</Text>
            </View>
            <Icon style={styles.listItemIcon} name="dots-three-horizontal" size={20} color="#a6a6a6"/>
        </View>
    )
}

const styles = StyleSheet.create({
    listItemIcon: {
        flex: 1
    },
    listItemImage: {
        width: 50,
        height: 50,
    },
    listItemInfo: {
        flex: 6,
        paddingLeft: 12
    },
    listItemText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'CircularSpotifyText-Light'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    num: {
        color: 'white',
        flex: 1,
        alignSelf: 'center',
        fontSize: 16,
        paddingLeft: 16,
        fontFamily: 'CircularSpotifyText-Light'
    },
    viewCount: {
        color: '#a6a6a6',
        fontSize: 14,
        fontFamily: 'CircularSpotifyText-Light'
    }
});