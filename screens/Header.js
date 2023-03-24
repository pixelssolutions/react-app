import { View, Text ,TouchableOpacity,Image,StyleSheet, Modal} from 'react-native'
import React,{useState}from 'react'
import { LogoImage } from '../assets'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigation=useNavigation();
  return (
    <View className="flex-row items-center justify-between px-5">
    <Image source={LogoImage} className="w-10 h-10 object-cover"/><Text className="text-[19px] text-[#0B646B] font-bold">CHHATTISGARH MUNICIPAL</Text>
<TouchableOpacity onPress={() => setIsVisible(!isVisible)}><Ionicons name="ios-menu" size={24} color="black"/></TouchableOpacity>
<Modal  transparent={true} visible={isVisible} style={styles.container}>
        <View style={styles.modalContainer}>
          <Text className="text-md w-15 h-7 font-semibold" onPress={()=>navigation.navigate("HomeScreen")}><Ionicons name="ios-home" size={20} color="black" /> Home</Text>
          {/* <Text className="text-md w-15 h-7 font-semibold"><Ionicons name="ios-settings" size={20} color="black"/> Sttings</Text> */}
          <Text className="text-md w-15 h-7 font-semibold"><Ionicons name="ios-key" size={20} color="black"/> Change Password</Text>
          <Text className="text-md w-15 h-7 font-semibold" onPress={()=>navigation.navigate("Login")}><Ionicons name="ios-power" size={20} color="black" /> Logout</Text>
          <Text className="text-md w-15 h-7 font-semibold" onPress={() => setIsVisible(!isVisible)}><Ionicons name="ios-close" size={20} color="black" /> Close</Text>
          {/* <TouchableOpacity onPress={() => setIsVisible(!isVisible)}><Ionicons name="ios-close" size={20} color="black" />            
          </TouchableOpacity> */}
        </View>
      </Modal>
</View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
        backgroundColor:'lightgray',
        marginTop: 40,
        marginLeft:180,
        marginRight:25,
        borderRadius: 10,
        alignItems: 'flex-start',
        paddingLeft:5,
    },
  });
export default Header