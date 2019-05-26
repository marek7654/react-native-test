import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddUserButton = props => {
    return(
        <View>
            <TouchableOpacity style={styles.addUserBtn} onPress={props.addUser}>
                <Text style={styles.addUserBtnText}>＋</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    addUserBtn: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 50/2,
        backgroundColor: 'crimson'
    },
    addUserBtnText: {
        color: 'white',
        fontSize: 35
    }
})

export default AddUserButton;