import {StyleSheet} from "react-native"







export const COLORS = {
    background: "#121212", 
    cardBackground: "#1E1E1E", 
    Highlight: "#FFA500" , 
    text: "#FFF",
    textSecondary:"#CCC",
}

const SHADOWS = {
    elevation:5, 
    shadowColor: COLORS.Highlight, 
    shadowOffset: {width: 0 , height: 2}, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84,
}

export const homeStyles = StyleSheet.create({
    ScreenContainer:{
        flex:1
,
backgroundColor: COLORS.background,  
  },
  contentPadding:{
    padding:20,
  },
  headerTitle: {
    color: COLORS.text, 
    textAlign: "center",
    marginBottom:30,
  },
  sectionTitle:{
    color:COLORS.text,
    fontWeight:"bold", 
    fontSize: 18,
    marginTop:30, 
    marginBottom: 10,
  },

  serviceCard:{
    backgroundColor: COLORS.cardBackground, 
    borderRadius:60, 
    marginRight: 16, 
    padding: 10, 
    alignItems:"center", 
    width:100,

  }, 
  serviceImage: {
    width:60, 
    height: 60,
    borderRadius: 30, 
    marginBottom: 5,
  },
  serviceName:{
    color: COLORS.text, 
    fontSize:14, 
    textAlign: "center",
  },

  appointmentWidget:{
    backgroundColor: COLORS.cardBackground, 
    borderRadius: 12, 
    padding: 16, 
    marginTop: 25, 
    borderLeftWidth: 4,
  },
  appointmentHighlight: {
    color: COLORS.Highlight,
    marginBottom: 10,
    fontWeight: 'bold',
    },
  appointmentText: {
     color: COLORS.text,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    },
    appointmentButton: {
        backgroundColor:COLORS.Highlight,
    },

   promotionCard: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 12,
        marginRight: 16,
        overflow: "hidden",
        width: 180,
    },

    promotionTag: {
        color: COLORS.Highlight, // Usando a cor de destaque
        marginTop: 4, 
        fontWeight: "600"
    },

    promotionImage: {
        width: "100%", 
        height: 100
    },
    promotionInfo:{
        padding:10,
    },
    promotionName:{
        color: COLORS.text,
        fontWeight:"bold"
    }, 
    placeItemContainer: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
    },
    placeImage: {
        width: 80, 
        height: 80
    },
    placeInfo: {
        padding: 10, 
        flex: 1
    },
    placeName: {
        color: COLORS.text, 
        fontWeight: "bold", 
        fontSize: 16
    },
    ratingContainer: {
        flexDirection: "row", 
        alignItems: "center", 
        marginTop: 4
    },
    ratingNumber: {
        color: COLORS.Highlight, 
        marginLeft: 5, 
        fontWeight: "bold"
    },
    placeStatus: {
        color: COLORS.textSecondary, 
        marginTop: 4
    },
    placeIcon: {
        paddingRight: 15
    },

    quickSearchContainer: {
        marginTop: 20, 
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    quickSearchButton: {
        flex: 1, 
        backgroundColor: "#333"
    },
    quickSearchButtonMargin: {
        marginRight: 10
    }
});


