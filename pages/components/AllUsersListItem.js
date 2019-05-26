import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';


const AllUsersListItem = props => {
    return (
      <View style={styles.listItem}>
        <Image
            style={styles.image}
            source={require('../../assets/user_icon.png')} 
        />
        <View>
            <Text style={styles.text}>{props.user.userData.name + ' ' + props.user.userData.surname}</Text>
        </View>
        <Button
            onPress={props.user.edit} 
            title="Edit"
            color="#217D9F"
            accessibilityLabel="Edit user"
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    image: {
        width: 50,
        height: 50
    },
    text: {
        fontSize: 20
    },
    button: {
        padding: 10,
        
        backgroundColor: '#217D9F',
    }
  });

export default AllUsersListItem;