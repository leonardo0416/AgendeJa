import React from "react"

import { TouchableOpacity,Text } from "react-native"
import {globalStyles} from "../styles/global"

interface ButtonProps{
    title: string //texto para o botao

    onPress:() => void; //funcao que vai ser chamada quando clicar no botao


}

export default function CustomButton({title, onPress} : ButtonProps) {
    return(
        <TouchableOpacity style={globalStyles.button} onPress={onPress}>
            <Text > Testar </Text>
            <Text style={globalStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}