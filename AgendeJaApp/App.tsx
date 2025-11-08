import "react-native-reanimated"
import "react-native-gesture-handler";
import React from "react" 

import { NavigationContainer } from "@react-navigation/native"

//esse import vai permitir criar uma pilha de telas para a navegacao 

import {createNativeStackNavigator} from "@react-navigation/native-stack"


import LoginScreen from "./src/screens/LoginScreen"
import BottonTabs from "./src/componentes/BottomTabs"





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
                name = "MainTabs"
                component = {BottonTabs}
                options = {{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

