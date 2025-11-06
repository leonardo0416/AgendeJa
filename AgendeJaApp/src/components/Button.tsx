import React from "react"

import { TouchableOpacity,Text } from "react-native"
import {styles} from "../styles/global"

interface ButtonProps{
    title: string //texto para o botao

    onPress:() => void; //funcao que vai ser chamada quando clicar no botao


}

export default function CustomButton({title, onPress} : ButtonProps) {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            testar 
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}