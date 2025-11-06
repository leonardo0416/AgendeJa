import React, {useState} from "react"
import {View, Text, TextInput} from "react-native"
import CustomButton from "../components/Button"
import {styles} from "../styles/global"

export default function LoginScreen({navigation}: any){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("")

    const handleLogin = () =>{
        //vou ter que chamar de algum jeito o firebase aqui

        console.log("Login realizado com :" , email , password)
        navigation.navigate("home")//fazendo isso vai redirecionar para home de novo

    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Login</Text>
            <TextInput style={styles.input}
                        placeholder="Email"
                        value="{email}"
                        onChangeText={setEmail} />

            <TextInput style = {styles.input}
                        placeholder="Senha"
                        secureTextEntry
                        value="password"
                        onChangeText={setPassword} />
                        
    <CustomButton title="Entrar" onPress = {handleLogin}/>
                        
        </View>
    )
}