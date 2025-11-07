import React from "react"
import{View, Text} from "react-native"
import {styles} from "../styles/global"

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text style ={styles.title}>
                Bem-Vindo ao AgendeJa!
                </Text>
            
            
        </View>
    )
}