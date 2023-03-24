import { View, Text,StyleSheet } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Header';
import { useNavigation } from '@react-navigation/native'

const PropertyHomeScreen = () => {
    const navigation=useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[])
  return (
    <SafeAreaView>
        <Header></Header>
    <View style={styles.buttonStyle}>
            <Text className="text-xl font-semibold uppercase  text-gray-100" onPress={()=>navigation.navigate("PayProperty")}>Pay Property</Text>
    </View>
    <View style={styles.buttonStyle}>
            <Text className="text-xl font-semibold uppercase  text-gray-100">Re print receipt</Text>
    </View>
    <View style={styles.buttonStyle}>
            <Text className="text-xl font-semibold uppercase  text-gray-100">collection summary</Text>
    </View>
    <View style={styles.buttonStyle}>
            <Text className="text-xl font-semibold uppercase  text-gray-100">document upload</Text>
    </View>
    <View style={styles.buttonStyle}>
            <Text className="text-xl font-semibold uppercase  text-gray-100">Property survey</Text>
    </View>
    <View style={styles.buttonStyle}>
            <Text className="text-xl font-semibold uppercase  text-gray-100">acknowledgement upload</Text>
    </View>
    <View style={styles.buttonStyle}>
            <Text className="text-xl font-semibold uppercase  text-gray-100">Geo tagging</Text>
    </View>
    </SafeAreaView>
)}
const styles = StyleSheet.create({
    buttonStyle: {
      backgroundColor:'#006400',
      borderWidth: 0,
      height: 40,
      alignItems: 'center',
      borderRadius: 20,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 25,
    }});
export default PropertyHomeScreen