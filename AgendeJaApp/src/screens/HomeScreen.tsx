import React from "react"
import{View, Text} from "react-native"
import {globalStyles} from "../styles/global"

export default function HomeScreen(){
    return(
        <View style={globalStyles.container}>
            <Text style ={globalStyles.title}>
                Bem-Vindo ao AgendeJa!
                </Text>
            
            
        </View>
    )
}