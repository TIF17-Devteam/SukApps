import * as React from 'react';
// React Navigation 5
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LogoHeader from './../../components/atoms/LogoHeader';

// Jangan lupa import SCREEN disni agar bisa Jalan! :)
// Import punya Kelompok 1
import { AuthScreen, Home } from './../../screens';

import { ELearningHomeScreen } from './../../screens/ELearning';

// Import punya Kelompok Surat
import { SuratHomeScreen } from './../../screens/Surat';

// Import punya Kelompok Chat
import { ChatHomeScreen } from './../../screens/Chat';

// Import punya Kelompok Presensi
import { ApprovalScreen, HistoryScreen, IzinScreen, PresensiHomeScreen, PresensiScreen } from './../../screens/Presensi';

const Drawer = createDrawerNavigator();
const RootDrawer = createDrawerNavigator();
const Stack = createStackNavigator();

// ==============================================
// Drawer
function DrawerELearning() {
    return (
        <Drawer.Navigator initialRouteName="E-Learning">
            <Drawer.Screen name="E-Learning" component={ ELearningHomeScreen } />
        </Drawer.Navigator>
    );
  }
  
  // Drawer Surat
  function DrawerSurat() {
      return (
          <Drawer.Navigator initialRouteName="Surat">
              <Drawer.Screen name="Surat" component={ SuratHomeScreen } />
          </Drawer.Navigator>
      );
    }

  // ==============================================
  // Drawer Presensi
  function StackPresensi() {
    return (
        <Stack.Navigator initialRouteName="Presensi" >
                  <Stack.Screen name="Presensi" component={ PresensiHomeScreen } />
                  <Stack.Screen name="ApprovalScreen" component={ ApprovalScreen } />
                  <Stack.Screen name="IzinScreen" component={ IzinScreen } />
                  <Stack.Screen name="PresensiScreen" component={ PresensiScreen } />
                  <Stack.Screen name="HistoryScreen" component={ HistoryScreen } />
        </Stack.Navigator>
    )
  }

  function DrawerPresensi() {
      return (
          <Drawer.Navigator initialRouteName="Presensi">
              <Drawer.Screen name="Dashboard" component={ RootNavigator } />
              <Drawer.Screen name="Presensi" component={ StackPresensi } />
              <Drawer.Screen name="ApprovalScreen" component={ ApprovalScreen } />
              <Drawer.Screen name="IzinScreen" component={ IzinScreen } />
              <Drawer.Screen name="PresensiScreen" component={ PresensiScreen } />
              <Drawer.Screen name="HistoryScreen" component={ HistoryScreen } />
          </Drawer.Navigator>
      );
    }
  
  // ==============================================
  // Drawer Chat
  function DrawerChat() {
      return (
          <Drawer.Navigator initialRouteName="Chat">
              <Drawer.Screen name="Dashboard" component={ RootNavigator } />
              <Drawer.Screen name="Chat" component={ ChatHomeScreen } />
          </Drawer.Navigator>
      );
    }

// ==============================================
// Nested Navigation
// RootNavigator
function RootNavigator() {
  return (
          <Stack.Navigator initialRouteName="Home" >
              <Stack.Screen   name="Home" 
                              component={Home} 
                              options={{ headerTitle: props => <LogoHeader /> }} 
              />
              <Stack.Screen name="AuthScreen" component={ AuthScreen } />
              <Stack.Screen name="ChatHomeScreen" component={ ChatHomeScreen } />
              <Stack.Screen name="ELearningHomeScreen" component={ ELearningHomeScreen } />
              <Stack.Screen name="SuratHomeScreen" component={ SuratHomeScreen } />
          </Stack.Navigator>
  );
}

// RootDrawer
function Routers() {
  return (
    <NavigationContainer>
      <RootDrawer.Navigator initialRouteName="Dashboard">
        <RootDrawer.Screen name="Dashboard" component={ RootNavigator } />
        <RootDrawer.Screen name="E-Learning" component={ DrawerELearning } />
        <RootDrawer.Screen name="Surat" component={ DrawerSurat } />
        <RootDrawer.Screen name="Presensi" component={ DrawerPresensi } />
        <RootDrawer.Screen name="Chat" component={ DrawerChat } />
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
}

export default Routers;