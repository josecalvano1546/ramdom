import React from 'react'
import { Button, Text, View, ImageBackground, ViewPropTypes, StyleSheet,Image, TextInput,TouchableOpacity  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


export default function PantallaAutenticacion({ navigation }) {
    
        const [correo, onChangeCorreo] = React.useState('');

        const [contrasena, onChangeContrasena] = React.useState('');
    
    return (
        
        <SafeAreaView style={styles.safe}>
            
           

                <View style={styles.container}>
                  
                    <ImageBackground source={require('../../assets/fondo.png')} style={styles.image}> 

                        <KeyboardAwareScrollView
                            contentContainerStyle={styles.scroll}>  

                            <View style={styles.seccion1}>
                                <View style={styles.imgSec1}>
                                    <Image
                                        style={styles.logo}
                                        resizeMode= 'contain'
                                        source={require('../../assets/logo.png')} 
                                    />
                                </View>   
                            </View>
           
                            <View style={styles.seccion2} >
                    
                                {/* <Button
                                    title="Registrarse"
                                    onPress={() => navigation.push('Registro')}
                                /> */}

                            <View style={styles.correo}>
                                <TextInput
                                    style={styles.textoGris}
                                    placeholder="Correo"
                                    onChangeCorreo={text => onChangeCorreo(text)}
                                    value={correo}
                                />
                            </View>

                            <View style={styles.contrasena}>
                                <TextInput
                                    style={styles.textoGris}
                                    placeholder="Contraseña"
                                    onChangeContrasena={text2 => onChangeContrasena(text2)}
                                    value={contrasena}
                                />
                            </View>
            
                            <View style={styles.olvido}>
                                <TouchableOpacity
                                    //onPress={() => navigation.push('----')} --> Cambiar contraseña !!!!!
                                >
                                <Text style={styles.textoRosa}>  Olvido su contraseña? </Text>
                            </TouchableOpacity>
                            </View> 
                    
                                
                            <View style={styles.iniciarSesion}>
                            <Button
                                //onPress={() => navigation.push('------')} -> Iniciar sesion !!!!!
                                title="Iniciar Sesión"
                                color="#ffffff"
                                disabled 
                                //No se puede hacer click cuando este "disabled " (Hata que se complete los campos) !!!!!!
                            />
                                
                            </View>

                            <View style={styles.registro}>
                                <Text style={styles.textoGris}> No tienes una cuenta?  </Text>
                                <TouchableOpacity
                                    onPress={() => navigation.push('Registro')} // Pantalla de registro
                                >
                                    <Text style={styles.textoRosa}>Registrate</Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </KeyboardAwareScrollView> 
                </ImageBackground>      
            </View>
             
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    scroll:{
        flex:1,
    },
    container:{
        flex:1,
        backgroundColor:"white"
    },
    safe: {
      flex: 1,
    },
    image: {
        flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    seccion1:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    imgSec1:{
        width:"45%",
        height:"45%",
        alignItems:"center"
    },
   logo:{
    flex:1
   },
    seccion2:{
        flex:1,
       
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        backgroundColor:"#FAFAFA",
        shadowColor: "black",
        shadowOffset: {
	        width: 2,
	        height: -10,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 3,
        alignItems:"center"
    },
    correo:{
        
        marginTop: "15%",
        width:"80%",
        height:"11%",
        justifyContent:"center",
        backgroundColor:"white", 
        borderRadius:6,
        shadowColor: "black",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5.46,
        elevation: 3,
        paddingLeft:10

    },
    contrasena:{
        
        marginTop: "6%",
        width:"80%",
        height:"11%",
        justifyContent:"center",
        backgroundColor:"white", 
        borderRadius:6,
        shadowColor: "black",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5.46,
        elevation: 3,
        paddingLeft:10
    },
    olvido:{
        marginLeft:"40%",
        marginTop:"3%",  
    },
    iniciarSesion:{
        width:"80%",
        height:"11%",
        marginTop: "10%",
        backgroundColor:"#EB5C5E", 

        opacity:0.5,
        //Deberia cambiar la opacidad cuando se active el boton. !!!!!!

        borderRadius:6,
        shadowColor: "black",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5.46,
        elevation: 3,
        paddingLeft:10,
        alignItems:"stretch",
        justifyContent:"center",
    },
    registro:{
        display:"flex",
        flexDirection:"row",
        marginTop: "10%",
    },
    textoBlanco: {
      color: "white",
      fontWeight:"bold"
    },
    textoRosa:{
        color: "#EB5C5E",
    },
    textoGris:{
        color: "#A29D9D",
    },
  });
