import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

const HeaderOnly = (props) => {
    return (
        <View style={{ height: '20%' }}>
            <View style={{ flex: 1, flexDirection: 'row', position: 'relative', marginHorizontal: '8%' }}>
                <TouchableOpacity style={{ flex: 1, top: '106%', left: -10, position: 'absolute' }} onPress={props.kembali} >
                    <SvgUri
                        widths={36}
                        height={36}
                        uri="https://svgur.com/i/GyX.svg"
                    />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', top: '25%' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#121212', }}>{props.titleHeader}</Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', marginHorizontal: '8%' }}>
                <Text style={{ color: '#A8A8A8', fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>{props.subTitle}</Text>
            </View>
        </View>
    )
}

export default HeaderOnly;