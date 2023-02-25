
const primary = "#f5424e";
const secondary = "dodgerblue";
const light = "white";

const stlyes = {
    colors:{
        primary: primary,
        secondary: secondary,
    },
    floatingButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: primary,
        borderRadius: 50,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
      },  
      textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "white",
        height: 32,
        margin: 8,
        width: '95%',
        borderRadius: 0,
        color: "white",
        fontSize: 18
      },
      errorTextInput: {
        borderBottomWidth: 1,
        borderBottomColor: "red",
        height: 32,
        margin: 8,
        width: '95%',
        borderRadius: 0,
        color: "white",
        fontSize: 18,
      },  
      buttonOuter:{
        width: '100%',
        borderRadius: 15,
      },
      buttonPrimary:{
        width: '100%',
        backgroundColor: primary,
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 10,
      },buttonTextLight:{
        color: light,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold",
      },
      textMuted: {
        color: "black",
        marginTop: 4 
      }
}

export default stlyes;