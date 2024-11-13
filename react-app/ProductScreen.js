import { View,Text,ScrollView } from 'react-native';
import React from 'react';
import dataProduct from './dataProduct.json'

const ProductScreen = () => {
    console.log(dataProduct)
    return(
        <View style={{flex: 1}}>
            <ScrollView>
                <Text>{ietm.id}</Text>
                <Text>{ietm.name}</Text>
                <Text>{ietm.category}</Text>
                <Text>{ietm.price}</Text>
                <Text>{ietm.stock}</Text>
                <Text>{ietm.image}</Text>
                <Text>{ietm.description}</Text>
            </ScrollView>
        </View>
    )
}

export default ProductScreen;