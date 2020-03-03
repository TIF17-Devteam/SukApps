import React, { Component } from 'react';
import { View } from 'react-native';
import PilihanMenu from '../../../components/moleculs/PilihanMenu';
import HeaderOnly from './../../../components/moleculs/HeaderOnly';
class PresensiHomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                <HeaderOnly titleHeader="Presensi Pegawai" subTitle="Silahka pilih menu yang tersedia" kembali={ () => this.props.navigation.goBack()} />
                <View style={{ flex: 1, marginHorizontal: '8%', }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginVertical: 20 }}>
                        <PilihanMenu namaMenu="Presensi" imgMenu={require('./../../../assets/images/absen.png')} tekan={() => this.props.navigation.navigate('PresensiScreen')} />
                        <PilihanMenu namaMenu="Pilih Izin" imgMenu={require('./../../../assets/images/inbox.png')} tekan={() => this.props.navigation.navigate('IzinScreen')} />
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginVertical: 10 }}>
                        <PilihanMenu namaMenu="History" imgMenu={require('./../../../assets/images/history.png')} tekan={() => this.props.navigation.navigate('HistoryScreen')} />
                        <PilihanMenu namaMenu="Approval Izin" imgMenu={require('./../../../assets/images/check.png')} tekan={() => this.props.navigation.navigate('ApprovalScreen')} />
                    </View>
                </View>
            </View>
        )
    }
}

export default PresensiHomeScreen;