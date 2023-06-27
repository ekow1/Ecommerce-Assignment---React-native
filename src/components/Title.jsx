import React from 'react';
import {View, StyleSheet, Image ,Text} from 'react-native';

const Title = () => {
    return (
        <View style={styles.main}>

           
                 <Text style={styles.text}>Nutmeg</Text>
            <View style={styles.logo}>
                 <Image  source={require('../data/nutmeg.png')} style={styles.image}/>
                 <Image  source={require('../data/nike.png')} style={styles.image}/>
                 <Image  source={require('../data/puma.png')} style={styles.image}/>
            </View>
            
          
        </View>
    );
}

const styles = StyleSheet.create({

     main:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        gap: 10,
     },

    image:{
        width:80,
        height:50,
        resizeMode:'contain',
    }
    ,
    text:{
        fontSize: 30,
        fontWeight:'500',
    },
    logo:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        width:400,
        gap:20,
    }
})

export default Title;
