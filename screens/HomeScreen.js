import { View, Text,StyleSheet } from 'react-native'
import React,{ useLayoutEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
import jwt_decode from 'jwt-decode'

const HomeScreen = () => {
    const navigation=useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[])
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const [userName, setUserName] = useState(null);
  AsyncStorage.getItem('token').then(token => {
    const decodedToken = jwt_decode(token);
    const user = decodedToken.sub;
    setUserName(user);
  }).catch(error => {
    console.log(error);
  });
 
  return (
    <SafeAreaView className="flex-2 bg-current">
       <Header></Header>
       <View style={styles.SectionStyle}>
        <Text className="font-semibold uppercase">Wellcome: {userName}</Text>
        <Text className="font-semibold">Property Collection of {monthNames[currentDate.getMonth()]}-{currentDate.getFullYear()}:</Text>
      </View>
      <View style={styles.line} />
        <View style={styles.buttonStyle}>
            <Text className="text-xl font-semibold uppercase  text-gray-100" onPress={()=>navigation.navigate("PropertyHomeScreen")}>pay property tax</Text>
        </View>
        <View style={styles.buttonStyle}>
            <Text className="text-xl font-semibold uppercase  text-gray-100">water user charge</Text>
        </View>
        <View style={styles.buttonStyle}>
            <Text className="text-xl font-semibold uppercase  text-gray-100">waste charge</Text>
        </View>
        <View style={styles.buttonStyle}>
            <Text className="text-xl font-semibold uppercase  text-gray-100">shop rent management</Text>
        </View>
        <View style={styles.buttonStyle}>
            <Text className="text-xl font-semibold uppercase  text-gray-100">lease rent</Text>
        </View>
        <View style={styles.buttonStyle}>
            <Text className="text-xl font-semibold uppercase  text-gray-100">visiting report</Text>
        </View>
    </SafeAreaView>
  )
}
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
  },
  SectionStyle: {
    //flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  line: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
    width: '100%',
    marginVertical: 1,
  },
});
export default HomeScreen