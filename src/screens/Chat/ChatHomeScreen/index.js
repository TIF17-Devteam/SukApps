import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ChatHomeScreen = () => {
    return (
        <View style={styles.container}>
      <Text>Chats Apps</Text>
    </View>
    )
}

export default ChatHomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
