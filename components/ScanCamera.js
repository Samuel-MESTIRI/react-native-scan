import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { Camera } from 'expo-camera';


export default function ScanCamera() {


  // on set no variable a differente valeurs
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [scanned, setScanned] = useState(false);

	const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);	
    fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`) 
      .then((response) => response.json())
      .then((responseJson) => {
        this.props.navigation.navigate('FoodScanned', {
          screen: 'FoodScanned',
          params: { product: responseJson.product },
        });
      })
      .catch((error) =>{
          console.error(error);
      });
	};

  // demande la permission au device d'utiliser la camera
	useEffect(() => {
		(async () => {
		const { status } = await Camera.requestPermissionsAsync();
		setHasPermission(status === 'granted');
		})();
	}, []);

  // si on a pas la permission return une vue vide
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</Text>
      <Camera 
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }} 
        type={type}
        // detecte quand un code barre est scanned et appel la fonction seulement si scanned == true
		    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        {/* bouton pour reset la variable setScanned */}
        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
        )}
         
      </Camera>
    </View>
  );
}