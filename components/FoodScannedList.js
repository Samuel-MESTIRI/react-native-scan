import React, { Component } from 'react';
import { Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function FoodScannedList ({navigation, route}){

  console.log(this.props.route.params.product.image_small_url);
  return (
    <View style={styles.container}>
      <Text>{this.props.route.params.product.product_name}</Text>
      <Image 
        source={{uri: this.props.route.params.product.image_small_url }}
        style={{ alignSelf: 'center', width: 200, height: 200, borderRadius: 100 }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginBottom: 32
  },
  title: {
    fontSize: 18,
    padding: 12,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 3,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});








// export default class FoodScannedList extends Component {
//   constructor(props){
//     super(props);          
//     this.state = {
//       isLoading: true,
//       data: null
//     }
//   }

//   getData(){
//     fetch('https://fr-en.openfoodfacts.org/category/pizzas/1.json')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       console.log(responseJson.products[0].product_name)
//       this.setState({
//         data: responseJson.products,
//         isLoading: false,
//       })
//     })
//   }

//   componentDidMount(){
//     this.getData();
//   }

//   render() {
//     if (!this.state.isLoading) {
//       return (
//         <SafeAreaView style={styles.container}>
//           <FlatList
//             data={this.state.data}
//             renderItem={({ item }) => <Text style={styles.title}>{item.product_name}</Text>}
//             keyExtractor={item => item.id}
//           />
//         </SafeAreaView>
//       )
//     }
//     return (
//       <SafeAreaView>
//         <Text>Loading</Text>  
//       </SafeAreaView>
//     )
//   }
// }

