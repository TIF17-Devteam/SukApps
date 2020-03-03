import * as React from 'react';
import { Image } from 'react-native';

function LogoHeader() {
  return (
    <Image
      style={{ width: 234, height: 50, backgroundColor: '#ffffff' }}
      source={require('./../../../assets/images/logo-uin.png')}
    />
  );
}

export default LogoHeader;
