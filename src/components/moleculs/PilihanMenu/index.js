import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

const PilihanMenu = (props) => {
    return (
        <TouchableOpacity style={{ width: '46%', height: 162, backgroundColor: '#FEF1E5', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }} onPress={props.tekan}>
            <Image
                style={{ height: 50, width: 50 }}
                source={props.imgMenu} />
            <Text style={{ color: '#918D8A', fontSize: 13, fontWeight: 'bold', top: '16%' }}>{props.namaMenu}</Text>
        </TouchableOpacity>
    )
}

export default PilihanMenu;