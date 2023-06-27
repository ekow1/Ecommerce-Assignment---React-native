import React from 'react';
import {View, StyleSheet,Text, TextInput} from 'react-native';
import { MaterialCommunityIcons , SimpleLineIcons ,Ionicons } from '@expo/vector-icons';

const Navbar = () => {
    return (
       <View style={styles.head} >
          <MaterialCommunityIcons name="arrow-left" size={15} color="#fff"   style={styles.icon}   />
          <MaterialCommunityIcons name="cart-outline" size={15} color="#fff"   style={styles.icon}   />
            
        </View>
    );
}

const styles = StyleSheet.create({


     text :{
    fontSize : 18,
    fontWeight : 'bold',
  },

  head : {
    marginBottom : 30,
    marginTop : 20,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    gap :250,
    
   
  },

  icon:{
    backgroundColor: '#000',
    padding:12,
    borderRadius : 50,
  }
})

export default Navbar;
