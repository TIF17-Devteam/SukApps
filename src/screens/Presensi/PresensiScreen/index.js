import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PresensiScreen = () => {
    return (
        <View style={styles.container}>
      <Text>Presensi Pegawai</Text>
    </View>
    )
}

export default PresensiScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
