import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ScanCamera from './components/ScanCamera';
import FoodScannedList from './components/FoodScannedList';
import Example from './components/Example';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// exemple : https://github.com/ftoumi/react-native-simple-scanner

// les composants de chaque tab 
function FoodScanned() {
  return (
    <View>
      <FoodScannedList></FoodScannedList>
    </View>
  );
}

function Scan() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScanCamera />
    </View>
  );
}

function Advice() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Advice</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* toute les tab correspondante au bottom menu, chaque tab correspond a un composant ci-dessus */}
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'food'

            if (route.name === 'Scan') {
              iconName = 'scan'
            } else if (route.name === 'FoodScanned') {
              iconName ='food'
            }
            // return l'icone de la tab
              return <Image source={require('./assets/scan.png')}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="FoodScanned" component={FoodScanned} />
        <Tab.Screen name="Scan" component={Scan} />
        <Tab.Screen name="Advice" component={Advice} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
