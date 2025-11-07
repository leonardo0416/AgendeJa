
import { StyleSheet } from "react-native"; //SRC/STYLES/GLOBAL.TS


//estilos globais que vao poder ser usados em qualquer arquivo desde que eu importe 
export const styles = StyleSheet.create({

    //container principal para centralizar 
    container:{
        flex: 1, //ocupa a tela toda 
        justifyContent:"center", //centraliza verticalmente
        alignItems: "center", //centraliza horizontalmente
        padding: 16, //espaco interno

    },

    title:{
        //titulos das telas que criamos
        fontSize: 24,
        fontWeight: "bold", //negrito
        marginBottom: 25, //espaco abaixo
    }, 

    input: {
        width: "100%" , //vai preencher todo o espaco de largura
        height: 50, 
        borderColor:"#ccc", //cor da borda
        marginBottom: 16, 
        borderRadius: 8, 
        paddingHorizontal: 12, //espaco horizontal interno
    },
    button :{
        width: "100%", 
        height: 50, 
        backgroundColor:"#007bff" ,
        justifyContent: "center", 
        alignItems: "center",
        borderRadius: 8 , 
        marginTop: 8, //espaco acima

    }, 
    buttonText:{
        color:"#fff", //e para ser uma cor branca
        fontSize: 16, 
        fontWeight:"bold" ,
    }, 
 })