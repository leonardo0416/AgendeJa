import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {View, Text} from "react-native"
import { Ionicons } from "@expo/vector-icons";
import {globalStyles} from "../styles/global"
import HomeScreen from "../screens/HomeScreen";


const Tab = createBottomTabNavigator();



function SearchScreen(){
    return(
     <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Pesquisar</Text>
        <Text style={globalStyles.subtitle}>Encontre servicos proximos ou com desconto</Text>
    </View>)
}

function AppointmentScreen(){
    return(
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Agendamento</Text>
        <Text style={globalStyles.subtitle}>Veja seus agendamentos</Text>
    </View>)
}
function ProfileScreen(){
    return(
     <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Perfil</Text>
        <Text style={globalStyles.subtitle}>Seu Perfil</Text>
    </View>)
}


export default function BottonTabs() {
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({ focused,color}) =>{let iconName = "";

                if(route.name === "Home"){
                    iconName = focused ? "home" : "home-outline"
                }else if (route.name ==="Pesquisar") {
                    iconName = focused ? "search" : "search-outline"
                } else if (route.name === "Agendar") {
                    iconName = focused ? "calendar" : "calendar-outline"; 
                } else if (route.name === "Perfil") {
                    iconName = focused ? "person" : "person-outline"
                }

                return <Ionicons name ={iconName as any} size={24} color={color}/>
            },
            tabBarActiveTintColor: "#FFA500", 
            tabBarInactiveTintColor: "#ccc",
            tabBarStyle: {
          backgroundColor: '#1E1E1E', // Preto fosco
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
          paddingBottom: 5,
        },
        headerShown: false,
      })}
    >
        {/*componente real*/}
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Pesquisar" component={SearchScreen} />
      <Tab.Screen name="Agendar" component={AppointmentScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  


        
    );
}