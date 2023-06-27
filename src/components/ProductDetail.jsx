import React from 'react';
import {View, StyleSheet, Text , Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from './Navbar';
import { TouchableOpacity } from 'react-native';

const ProductDetail = () => {
    return (
        <View style={styles.container}>
            <Navbar />
         
         <Image source={require('../data/pink.png')}  style={styles.image}/>
         <View style={styles.desc}>
         <Text style={styles.title}>ADIDAS SUPER STAR</Text>
         <View style={styles.ratingText}>
            <Text style={{fontWeight:'bold'}}>Review</Text>
             <View style={styles.rating}>
                    <Ionicons name="star" size={15} color="#242B2E" />
                    <Ionicons name="star" size={15} color="#242B2E" />
                    <Ionicons name="star" size={15} color="#242B2E" />
                    <Ionicons name="star" size={15} color="#242B2E" />
                   
                    
                </View>
         </View>
         <Text style={{backgroundColor:'#000' , width:30, height:4,borderRadius:20, marginBottom:10}}></Text>
         <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eius aspernatur .</Text>
         <Text style={{backgroundColor:"#000" , color:'#fff' , textAlign:'center' , paddingVertical: 15 ,borderRadius:5, marginTop:30}}>Material : Leather - 91% , Synthetic Fibre - 9% </Text>
         
         <View style={{flexDirection: 'row' , gap:40, marginTop:40, justifyContent:'center', alignItems:'center'} }>

            <Text style={{backgroundColor:'#000' , color:'#fff' , padding:13, borderRadius: 5, fontWeight:'bold' , fontSize:15}}>39</Text>
            <Text style={{backgroundColor:'#000' , color:'#fff' , padding:13, borderRadius: 5, fontWeight:'bold' , fontSize:15}}>40</Text>
            <Text style={{backgroundColor:'#000' , color:'#fff' , padding:13, borderRadius: 5, fontWeight:'bold' , fontSize:15}}>41</Text>
            <Text style={{backgroundColor:'#000' , color:'#fff' , padding:13, borderRadius: 5, fontWeight:'bold' , fontSize:15}}>42</Text>

         </View>
         <View style={{flexDirection: 'row' , gap:50, marginTop:40, justifyContent:'center', alignItems:'center', backgroundColor:'#0D0D0D' , paddingVertical: 5 , borderRadius: 10} }>

             <View style={{flexDirection: 'column' , gap:5,  alignItems:'flex-start' , padding:15}}>
                <Text style={{color:'#fff'}}>Total Amount</Text>
                <Text style={{color:'#fff' , fontWeight:'bold' , fontSize:20}}>GHS 250</Text>

             </View>

             <TouchableOpacity  style={{backgroundColor:"#fff", width: 120, padding:10 , alignItems:'center' , borderRadius:10}}>
               <Text style={{fontWeight:'bold'}}>Add to Cart</Text>
             </TouchableOpacity>

         </View>

         
        </View> 
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
         flex:1,
         width:600,
         alignItems: 'center',
         paddingVertical:20,
         
         
        
    },
    image:{
       width: 250,
       height:250,
       marginTop: 10,
    },
    title:{
      fontSize:25,
      fontWeight:'bold',
    },
    desc:{
        marginTop:10,
        width:350,
        height: 400,
        // backgroundColor:'yellow'
    },
    rating:{
        flexDirection:'row',
        gap: 5,

    }, 
    ratingText:{
       flexDirection:'row',
       alignItems:'center',
       gap: 20,
       marginBottom:10,
    }

    



})

export default ProductDetail;
