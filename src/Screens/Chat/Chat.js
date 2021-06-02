import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Chat extends Component {
    render() {
        return (
            <View>
                <Text> Welcome to Chat Screen</Text>
            </View>
        )
    }
}

Chat.navigationOptions = (navData) => {
    return {
        headerTitle:"Chat Screen"
    }
}
