import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const IzinScreen = () => {
    return (
        <View style={styles.container}>
      <Text>Izin Pegawai</Text>
    </View>
    )
}

export default IzinScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
