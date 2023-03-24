import { View, Text ,TextInput,TouchableOpacity,Image,StyleSheet} from 'react-native'
import React, { useLayoutEffect, useState,useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LogoImage, UserIcon } from '../assets';
import axios from 'axios';
import { user_login } from '../context/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation=useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[])
  const [userName,setUsername]=useState(null);
  const [userPassword,setUserPassword]=useState(null);
  const [error, setError] = useState(null);
  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('http://ec2-44-203-198-42.compute-1.amazonaws.com:8084/login/', {
  //       userName,
  //       userPassword,
  //     });
  //     const { data } = response;
  //     console.log(data);
  //     console.log('Login successful');
  //     navigation.navigate('HomeScreen',{userName});
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };
  const handleLogin = () => {
      user_login({
        userName: userName.toLocaleLowerCase(),
        userPassword: userPassword,
      })
        .then(result => {
          if (result.status == 200) {
            AsyncStorage.setItem('token', result.data.jwtToken);
            navigation.replace('HomeScreen');
          }
        })
        .catch(err => {
          console.error(err);
        });
  };

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row px-16 mt-8 items-center">
        <Image source={LogoImage} className="w-15 h-15 object-cover"/></View>
        <View className="items-center">
        <Image
        source={UserIcon}
        style={{ width: 40, height: 40 }}/><Text className="text-black text-3xl font-semibold">Sign in</Text></View>
        
        <View style={styles.SectionStyle}>  
      <Text style={styles.headerStyle}>Username:</Text>
        <TextInput 
        style={styles.inputStyle} value={userName} onChangeText={(text)=>setUsername(text)} placeholder="Enter Username"/>
        </View>
        <View style={styles.SectionStyle}>
        <Text style={styles.headerStyle}>Password:</Text>
        <TextInput secureTextEntry={true} style={styles.inputStyle} value={userPassword} onChangeText={(text)=>setUserPassword(text)} placeholder="Enter Password"/>
        </View>
        <View>
        {/* <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")} style={styles.buttonStyle}> */}
        <TouchableOpacity onPress={handleLogin} style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor:'#006400',
    borderWidth: 0,
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  headerStyle:{
    paddingRight: 5,
    paddingTop:10,
    fontSize:15
  }
})


export default LoginScreen