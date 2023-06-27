import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './src/components/Navbar';
import Search from './src/components/Search';
// import ProductItem from './src/components/ProductItem';
import Title from './src/components/Title';
import ProductScreen from './src/components/ProductScreen';
import ProductDetail from './src/components/ProductDetail';



export default function App() {
  return (

  <SafeAreaView  style={{ flex: 1 }}>
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#ffff"  />
     <Navbar />
     <Title />
     <Search />
     <ProductScreen />
     {/* <ProductDetail /> */}
  

    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems:'center',
    paddingHorizontal:20,
    
    
  
  },
});
