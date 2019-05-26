import { AsyncStorage, Alert } from 'react-native';
import md5 from 'md5';

const UserService = {
    
    getUsers: async (props) => {
        try {
            const {navigate} = props.navigation;
            const usersKeys = await AsyncStorage.getAllKeys();
            const usersData = await AsyncStorage.multiGet(usersKeys);
            let tmpArray = []
            usersData.forEach(function( value){
                let tmpKey = value[0];
                let tmpValue = JSON.parse(value[1]);
                tmpArray.push({
                    userId: tmpKey,
                    userData: tmpValue,
                    edit: () => { navigate('AddEditUserScreen', {userKey : tmpKey})}
                });
            })
            return tmpArray;
        } catch(err) {
            alert(err);
            console.log(err);
        }
    },
    
    getUserData: async (userId) => {
        try {
            const userData = await AsyncStorage.getItem(userId);
            return JSON.parse(userData);
        }
        catch(error) {
            console.log(error);
            alert(error);
        }
    },
    
    saveUser: async (navigation, userData) => {
        const oldUserId = userData.userId;
        delete userData.userId;
        const userValues = JSON.stringify(userData);
        const newUserId = md5(userValues);
        const userExist = await UserService.getUserData(newUserId);
        if (userExist) {
            alert("User already exist.");
        } else {
            let alertTxt = oldUserId ? "User data was changed." : "User „" + userData.name + " " + userData.surname + "” was added."
            if (oldUserId) {
                AsyncStorage.removeItem(oldUserId).then(function(){
                    console.log("Old userdata deleted");
                })
            }
            AsyncStorage.setItem(newUserId, userValues).then(function() {
                alert(alertTxt);
                navigation.navigate('AllUsersScreen', console.log("HOW TO REFRESH SCREEN A?"))
            })
        }
    },    

    deleteUser: (navigation, userId) => {
        try {
            Alert.alert(
                "Delete User",
                "Are you sure?",
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => AsyncStorage.removeItem(userId).then(function(){
                                navigation.navigate('AllUsersScreen', console.log("HOW TO REFRESH SCREEN A?"))
                                alert("User deleted");
                            })
                        
                    }
                ]
            )
        }
        catch(error) {
            console.log(error);
            alert(error);
        }
    },

}

export default UserService;