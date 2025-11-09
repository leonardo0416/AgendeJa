import { ImageSourcePropType } from "react-native";

//Interface de dados

/**
 * Define a estrutura de um item na lista horizontal de serviços.
 * A ImageSourcePropType é o tipo esperado pelo source do componente <Image> do RN.
 */

export interface Service {
    id:string
    name: string
    icon: ImageSourcePropType
}

//define a estrutura de um item na lista horizontal de promocoes ou destaques. 

export interface Promotion {
    id:string
    name: string
    image: ImageSourcePropType
    tag: string // ex "20% OFF " ,  review 4.9"
}

/**
 * Define a estrutura de um estabelecimento que aparece na lista principal.
 * Adicionamos rating para a funcionalidade de avaliação.
 */

export interface OpenPlace {
    id:string
    name: string
    status: string //ex aberto hoje!
    image: ImageSourcePropType
    rating: number; //Avaliacao numerica ex 4.8 4.9

}

// --- Interfaces de Componentes ---

/**
 * Define as propriedades (props que serao passadas para o componente OpenPlaceItem.
 */

export interface OpenPlaceItemProps{
    place: OpenPlace 
    //se tivermos uma funcao de click, isso seria definido aqui. por ex o onPress:() => void 
}

