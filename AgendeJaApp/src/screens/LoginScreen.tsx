import React, {useState} from "react"
import {View, Text, TextInput} from "react-native"
import CustomButton from "../componentes/Button"
import {globalStyles} from "../styles/global"

export default function LoginScreen({navigation}: any){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("")
    const isPasswordMode = true;

    const handleLogin = () =>{
        //vou ter que chamar de algum jeito o firebase aqui

        console.log("Login realizado com :" , email , password)
        navigation.navigate("MainTabs")//fazendo isso vai redirecionar para home de novo

    }

    return(
        <View style = {globalStyles.container}>
            <Text style = {globalStyles.title}>Login</Text>
            <TextInput style={globalStyles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail} 
                        keyboardType="email-address" 
                        autoCapitalize="none" />

            <TextInput style = {globalStyles.input}
                        placeholder="Senha"
                        secureTextEntry = {isPasswordMode}
                        value={password}
                        onChangeText={setPassword} />
                        
                        
    <CustomButton title="Entrar" onPress = {handleLogin}/>
                        
        </View>
    )
}