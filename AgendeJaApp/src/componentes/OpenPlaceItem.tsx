import React from "react";
import {View, Text , Image, TouchableOpacity, } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { homeStyles, COLORS } from "../styles/homeStyles";
import { OpenPlaceItemProps } from "../types";//vai importar a interface

/**
 * Função auxiliar que gera os ícones de estrela (Ionicons) com base na nota.
 * @param rating Nota numérica (0 a 5).
 * @returns Um array de elementos <Ionicons> para renderizar as estrelas.
 */


const renderStars = (rating: number ) => {
    const fullStars = Math.floor(rating) //numero de estrelas cheias
    const stars = []

    for (let i = 0 ;  i < 5 ; i++ ) {
        let name: "star" | "star-half" | "star-outline" = "star-outline" 
        //isso faz ser o estado padrao, vazio
        let color = COLORS.Highlight; //COR DO DESDAQUE
    
        if (i < fullStars){
            name = "star" ; //estrela cheia
        } else if  (i === fullStars && rating % 1 !==0){
            name = "star-half"
        }

        stars.push(
            <Ionicons key={i} name={name} size={16} color={color} style={{marginRight : 2}} />
        )


    
    
    }

    return stars; 

}

/**
 * Componente que exibe um item da lista 'Locais Abertos', incluindo a avaliação.
 */

export const OpenPlaceItem: React.FC<OpenPlaceItemProps> = ({place}) => ( <TouchableOpacity
    style ={homeStyles.placeItemContainer}
    onPress={() => {
        //aqui vai a logica de navegacao para a tela de detalhes do local
        console.log(`abrir detalhes de ${place.name}`)
    }}
    >

    <Image source={place.image} style={homeStyles.placeImage} />
    <View style = {homeStyles.placeInfo}>

    <Text style={homeStyles.placeName}> {place.name}</Text>

    <View style={homeStyles.ratingContainer}>
        {renderStars(place.rating)}
        <Text style={homeStyles.ratingNumber}>
            {place.rating.toFixed(1)}
            </Text>
    </View>

    <Text style={homeStyles.placeStatus}> {place.status}</Text>
    </View>

    {/*icone de seta a direita*/}
    <Ionicons name="chevron-forward" size={24} color={"#FFA500"} style={homeStyles.placeIcon}/>

    {/*fechar conteiner*/}

    </TouchableOpacity>
 )
