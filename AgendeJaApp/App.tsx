import React from "react" 
import { NavigationContainer } from "@react-navigation/native"

//esse import vai permitir criar uma pilha de telas para a navegacao 
import {createNativeStackNavigator} from "@react-navigation/native-stack"




// se eu importar agora vai dar erro dizendo que o valor nao e declarado

//depois que fiz o export no LoginScreen o erro sumiu
import LoginScreen from "./src/screens/LoginScreen"
import HomeScreen from "./src/screens/HomeScreen"

const Stack = createNativeStackNavigator() // cria a stack de navegacao

export default function App() {
    return(

        //conteiner para a navegacao, toda a navegacao do app vai estar aqui 
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                name = "Login"
                component={LoginScreen} 
                options = {{headerShown:false}} />
                
                <Stack.Screen
                name = "Home"
                component = {HomeScreen}
                options = {{title: "Home"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

