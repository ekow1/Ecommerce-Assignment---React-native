import React from 'react';
import {View, StyleSheet} from 'react-native';
import { MaterialCommunityIcons , SimpleLineIcons ,Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';

const Search = () => {
    return (
        <View>
      <View style={styles.head} >
        
          <Ionicons name="search-circle-sharp" size={25} color="#fff" style={styles.icon}/>
        <TextInput placeholder='Search ........'  placeholderTextColor={'white'} style={styles.textInput} />
            
         </View>
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
    marginTop: 30,
    flexDirection : 'row',
    justifyContent : 'flex-start',
    // alignItems : 'center',
    backgroundColor: '#0D0D0D',
    borderRadius:5,
    gap :10,
    width: 350,
    elevation: 3,
    shadowColor:"#242B2E"

    
   
  },

  icon:{
 
    padding:10,
    
  },

  textInput:{
    color:'white',
  }
})

export default Search;
