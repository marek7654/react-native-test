import React from 'react';  
import { StyleSheet, View, FlatList} from 'react-native';

import UserService from '../services/UserService';

import AllUsersListItem from './components/AllUsersListItem';
import AddUserBtn from './components/AddUserButton';




export default class AllUsersScreen extends React.Component {
  
    constructor(props) {
        super(props);
        const _this = this;
        this.state = {
            allUsers: []
        };
        UserService.getUsers(props).then(function(data) {
            _this.setState({allUsers : data })
        });
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={styles.mainConatinerStyle}>
            <FlatList
              data={this.state.allUsers}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View key={item.userId} style={{ backgroundColor: '#F3F9F7' }}>
                    <AllUsersListItem user={item} />
                </View>
              )}
            />
            <AddUserBtn addUser={() => navigate('AddEditUserScreen')} />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
});