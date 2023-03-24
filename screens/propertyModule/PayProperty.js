import { View, Text ,Div} from 'react-native'
import Header from '../Header'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const PayProperty = () => {
    const navigation=useNavigation();
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:false,
      })
    },[])
  return (
    <SafeAreaView>
    <Header></Header>
    <View>
      <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

export default PayProperty