import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';

const BackButton = (props) => {
    return (

        <TouchableOpacity style={{ flex: 1, top: '106%', left: -10, position: 'absolute' }} onPress={props.kembali} >
            <SvgUri
                width={36}
                height={36}
                uri="https://svgur.com/i/GyX.svg"
            />
        </TouchableOpacity>

    )
}

export default BackButton;