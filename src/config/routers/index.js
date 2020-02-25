// React Navigation 5
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';


// Jangan lupa import SCREEN disni agar bisa Jalan! :)
// Import punya Kelompok 1
import { AuthScreen, Home } from './../../screens';

import { ELearningHomeScreen } from './../../screens/ELearning';
import { SuratHomeScreen } from './../../screens/Surat';
// Import punya Kelompok Chat
import { ChatHomeScreen } from './../../screens/Chat';

// Import punya Kelompok Presensi
import { ApprovalScreen, HistoryScreen, IzinScreen, PresensiHomeScreen, PresensiScreen } from './../../screens/Presensi';

const Stack = createStackNavigator();

function Routers() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ Home } />
                <Stack.Screen name="AuthScreen" component={ AuthScreen } />
                <Stack.Screen name="PresensiHomeScreen" component={ PresensiHomeScreen } />
                <Stack.Screen name="ApprovalScreen" component={ ApprovalScreen } />
                <Stack.Screen name="IzinScreen" component={ IzinScreen } />
                <Stack.Screen name="PresensiScreen" component={ PresensiScreen } />
                <Stack.Screen name="HistoryScreen" component={ HistoryScreen } />
                <Stack.Screen name="ChatHomeScreen" component={ ChatHomeScreen } />
                <Stack.Screen name="ELearningHomeScreen" component={ ELearningHomeScreen } />
                <Stack.Screen name="SuratHomeScreen" component={ SuratHomeScreen } />
            </Stack.Navigator> 

        </NavigationContainer>
    );
}

export default Routers;