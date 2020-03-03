import React, { Component } from 'react';
import { View } from 'react-native';
import { Image, Text, TouchableOpacity } from 'react-native';
import PilihanMenu from './../../components/moleculs/PilihanMenu';
import HeaderOnly from './../../components/moleculs/HeaderOnly';


class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                {/* <HeaderOnly titleHeader="Presensi dan Surat Izin" subTitle="Silahka pilih menu yang tersedia" kembali={ () => this.props.navigation.goBack()} /> */}
                <HeaderOnly titleHeader="Selamat Datang" subTitle="Di aplikasi Suka Apps" />
                <View style={{ flex: 1, marginHorizontal: '8%', }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginVertical: 20 }}>
                    <PilihanMenu namaMenu="E-Learning" imgMenu={require('./../../assets/images/check.png')} tekan={() => this.props.navigation.navigate('ELearningHomeScreen')} />
                    <PilihanMenu namaMenu="Surat" imgMenu={require('./../../assets/images/check.png')} tekan={() => this.props.navigation.navigate('SuratHomeScreen')} />
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginVertical: 10 }}>
                        <PilihanMenu namaMenu="Presensi" imgMenu={require('./../../assets/images/check.png')} tekan={() => this.props.navigation.navigate('Presensi')} />
                        <PilihanMenu namaMenu="Chats" imgMenu={require('./../../assets/images/check.png')} tekan={() => this.props.navigation.navigate('ChatHomeScreen')} />
                    </View>
                </View>
            </View>
        )
    }
}

export default Home;