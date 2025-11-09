import React from "react"
import{View, Text, TouchableOpacity, FlatList,  Image, ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/native"
import {globalStyles} from "../styles/global"
import { homeStyles, COLORS } from "../styles/homeStyles"
import { OpenPlaceItem } from "../componentes/OpenPlaceItem"
import{Service, Promotion, OpenPlace} from "../types"


const services: Service[] = [
    {id: "1", name:"Barbeiro", icon: require("../../assets/images/barber.jpg")},

    {id: "2", name:"Manicure", icon: require ("../../assets/images/nail.jpg")},
    {id: "3" , name:"Massagem" , icon: require ("../../assets/images/massage.jpg")},
    {id: "4" , name: "Maquiagem" , icon: require("../../assets/images/makeup.jpg")}
]

//avaliacao ou desconto
const promotions: Promotion[] = [
    {id: "1" , name: "Barbearia do Marcelo" , image: require("../../assets/images/barbershop.jpg") , tag: "20% OFF"},
    {id: "2" , name: "Studio da Janja" , image: require("../../assets/images/nail-salon.jpg") , tag: "Top ⭐ 4.9"}, 
]
//locais com a nota de avaliacao
const openPlaces: OpenPlace [] = [
    {id: "1" , name:"Barbearia do Bolsonaro" , status:"Aberto hoje✅" , image: require ("../../assets/images/barber-studio.jpg"), rating: 4.9},
    {id: "2" , name:"Spa & Relax" , status:"Aberto hoje ✅ " , image: require("../../assets/images/spa.jpg"), rating :5.0}, 
    {id: "3" , name:"Jones Tattoo" , status:"Fechado Hoje 🚫 " , image: require("../../assets/images/tattoo-studio.jpg"), rating :4.7}, 
]







export default function HomeScreen(){
    const navigation = useNavigation<any>();
    //variaveis de smulacao de agendamento
    const hasAppointment = true 
    const nextAppointment = "Barbearia do Bolsonaro - Amanhã as 14h ✂️ "


    //componentes inline para o card de servico
    const ServiceCard: React.FC <{item:Service}> = ({item}) =>(
        <TouchableOpacity
        style = {homeStyles.serviceCard} //usando o estilo global

        onPress={() =>{
            /*logica de navegacao para a tela de pesquisa filtrando pela categoria*/
             navigation.navigate("Pesquisar", {category:item.name})
        }}
        >
       
            <Image source={item.icon} style={homeStyles.serviceImage} />
            <Text style={homeStyles.serviceName}>{item.name}</Text>
        </TouchableOpacity>
    );
        
            

 
        
          return (
                <ScrollView style = {homeStyles.ScreenContainer}>
                    {/*estilo fundo principal*/}
        <View style={homeStyles.contentPadding}>
            {/*padding em volta*/}
            
            <Text style={[globalStyles.title , homeStyles.headerTitle]}>
            Agende Ja 
            </Text>

            <Text style={[globalStyles.subtitle , homeStyles.sectionTitle, {marginTop: 0}]}>
                Tipo de Servicos
            </Text>

            <FlatList 
            data={services} // dados tipados
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => < ServiceCard item={item}/>}/>


            {/*secao 2 : agendamento */}
            <View style ={[
                //aplicar a cor de destaque na borda esquerda se tiver agentamento
                homeStyles.appointmentWidget, {borderLeftColor: hasAppointment ? COLORS.Highlight:"transparent "}, //usando uma cor global
            ]}
            >

                <Text style={homeStyles.appointmentHighlight}>
                    {hasAppointment ? "Proximo Agendamento" : "Status do Agendamento"}
                </Text>

                <Text style={homeStyles.appointmentText}>
                    {hasAppointment ? nextAppointment : "Nenhum agendamento ativo. Que tal reservar um agora?"}
                </Text>

               
                    <TouchableOpacity 
                        style={[globalStyles.button, homeStyles.appointmentButton]} 
                        onPress={() => {
                            navigation.navigate("Agendar");
                        }}
                    >
                        <Text style={globalStyles.buttonText}>Ver meus agendamentos</Text>
                    </TouchableOpacity>
                    
                </View>


{/* --- SEÇÃO 3: PROMOÇÕES E DESTAQUES --- */}
        <Text style={[globalStyles.subtitle , homeStyles.sectionTitle]}>
                        Promocoes e Destaques
                    </Text>

                    <FlatList

                data={promotions}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}

          renderItem={({ item }) => (
            <TouchableOpacity style={homeStyles.promotionCard}> 

              <Image source={item.image} style={homeStyles.promotionImage} /> 

              <View style={homeStyles.promotionInfo}> 

                <Text style={homeStyles.promotionName}>{item.name}</Text>

                <Text style={homeStyles.promotionTag}>{item.tag}</Text>

              </View>
            </TouchableOpacity>
          )}
        />

          {/* --- SEÇÃO 4: LOCAIS ABERTOS (COM AVALIAÇÕES) --- */}
    <Text style={[globalStyles.subtitle, homeStyles.sectionTitle]}>
          Locais abertos hoje
        </Text>
        {/* COMENTÁRIO: Esta seção usa o componente OpenPlaceItem.tsx, que deve ser criado */}
        {openPlaces.map((place) => (
          <OpenPlaceItem key={place.id} place={place} /> 
        ))}

        {/* --- SEÇÃO 5: BOTÕES DE PESQUISA RÁPIDA (Menos Movimentados / Mais Próximo) --- */}
        <View style={homeStyles.quickSearchContainer}>
            <TouchableOpacity 
                style={[globalStyles.button, homeStyles.quickSearchButton, homeStyles.quickSearchButtonMargin]}
                onPress={() => {
                  // COMENTÁRIO: Lógica para navegar e aplicar filtro de disponibilidade
                  console.log("Pesquisar locais menos movimentados");
                }}
            >
             <Text style={globalStyles.buttonText}>Menos Movimentados ⬇️</Text>
        </TouchableOpacity>
       <TouchableOpacity 
                style={[globalStyles.button, homeStyles.quickSearchButton]}
                onPress={() => {
                  // COMENTÁRIO: Lógica para obter a localização do usuário e filtrar por distância
                  console.log("Pesquisar locais próximos");
                }}
            >
            <Text style={globalStyles.buttonText}>Mais Próximo 📍</Text>
            </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )

}