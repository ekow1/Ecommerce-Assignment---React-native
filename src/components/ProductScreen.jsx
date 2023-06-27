import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItem from './ProductItem';





const ProductScreen = () => {



  const products =[

    {

        id : 1,
        name : "SuperStar - Adidas",
        price : 250,
        image : require("../data/pink.png")
    },
    {

        id : 2,
        name : "Yeezy - Adidas",
        price : 350,
        image : require("../data/Yeezy.png")
    },
    {

        id : 3,
        name : "Skate - Nike",
        price : 500,
        image : require("../data/image-1.png")
    },
    {

        id : 4,
        name : "Baseball - Nike",
        price : 1000,
        image : require("../data/image-2.png")
    },
    {

        id : 5,
        name : "Bag Pack -Puma",
        price : 450,
        image : require("../data/bag.png")
    },
    {

        id : 6,
        name : "T-Shirt - Puma",
        price : 200,
        image : require("../data/shirt.png")
    },
    
  ]


   const productList = ({ item}) =>{
        return <ProductItem  name={item.name} price={item.price}  image={item.image} />
   }


    return (
        <View style={{flex: 1}}>
            <FlatList 

             data={products}

             renderItem={productList}
             showsVerticalScrollIndicator={false}
            
            
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProductScreen;
