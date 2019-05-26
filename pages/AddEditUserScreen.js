import React from 'react';  
import {View, Button } from 'react-native';
import UserService from '../services/UserService';

import MyTextInput from './components/MyTextInput';

export default class AddEditUserScreen extends React.Component {

    constructor(props) {
        super(props);
        const _this = this;
        const userId = this.props.navigation.getParam('userKey', false);
        this.state = {
            userId: userId, 
            name: "",
            surname: "",
            phone: "",
            address: ""
        }
        if(userId) {
            UserService.getUserData(userId)
                .then(function(data){
                    _this.setState({
                        name : data.name,
                        surname: data.surname,
                        phone: data.phone,
                        address: data.address
                    });
                }
            )
        }
        this.deleteUser = UserService.deleteUser.bind(this, this.props.navigation);
        this.saveUser = UserService.saveUser.bind(this, this.props.navigation);
    }

    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('userKey', false) ? 'Edit user' : 'Add user';
        return { title: title }
    }

    render() {
        return (
            <View>
                <MyTextInput
                    label="Name"
                    placeholder="Enter Name"
                    style={{ padding:10 }}
                    onChangeText={(text) => this.setState({name: text})}
                    value={this.state.name}
                />
                <MyTextInput
                    label="Surname"
                    placeholder="Enter Surname"
                    style={{ padding:10 }}
                    onChangeText={(text) => this.setState({surname: text})}
                    value={this.state.surname}
                />
                <MyTextInput
                    label="Phone"
                    placeholder="Enter Phone"
                    style={{ padding:10 }}
                    onChangeText={(text) => this.setState({phone: text})}
                    value={this.state.phone}
                />
                <MyTextInput
                    label="Address"
                    placeholder="Enter Address"
                    style={{ padding:10 }}
                    onChangeText={(text) => this.setState({address: text})}
                    value={this.state.address}
                />
                <Button onPress={() => this.saveUser(this.state)} title="Save" color="limegreen" />
                { this.state.userId ? <Button onPress={() => this.deleteUser(this.state.userId)} title="Delete" color="crimson" /> : null }
            </View>
        );
    }

}