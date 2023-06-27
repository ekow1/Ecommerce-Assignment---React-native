import React from 'react';
import {View, StyleSheet,Text, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductItem = ({name , price , image}) => {
    return (
        <View style={styles.container}>

            <Image source={image} style={styles.image} />

            <View  style={styles.desc}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.rating}>
                    <Ionicons name="star" size={15} color="#242B2E" />
                    <Ionicons name="star" size={15} color="#242B2E" />
                    <Ionicons name="star" size={15} color="#242B2E" />
                    <Ionicons name="star" size={15} color="#242B2E" />
                   
                    
                </View>
                <Text >GHS {price} </Text>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container : {
        width : 350,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        gap: 30,
        padding:5,
        
    },


    image:{
        width: 120,
        height: 130,
    },
    desc : {

        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width: 150,
        paddingVertical: 10,
        gap:10,


    },
    
    title :{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'right'
    },

    rating:{
        flexDirection:'row',
        gap: 5,

    }



})

export default ProductItem;
