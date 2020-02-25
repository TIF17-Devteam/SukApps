import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ApprovalScreen = () => {
    return (
        <View style={styles.container}>
      <Text>Approval Presensi Pegawai</Text>
    </View>
    )
}

export default ApprovalScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
