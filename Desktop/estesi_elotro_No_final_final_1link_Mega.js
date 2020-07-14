import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {

  return (
    <View style={{
                  flexDirection: 'column', 
                  backgroundColor: 'royalblue',
                  height:'100%',
                  width: '100%', 
                  justifyContent:'center', 
                  alignItems:'stretch'
                  
                  }}>
      
      <View
      style={{
       // backgroundColor: 'blue',
        
        justifyContent:'center',
        alignItems:'center',
        flex:3,
        flexDirection: 'row', 
      }}>

      <Image
        style={
          { 
            width:'50%',
           
          }
        }
        resizeMode='contain'
        source={
          require('./imagenes/logoo.png') 
        } />
      </View>
        

      
      <View
      style={{
       // backgroundColor: 'blue',
       flex:3,
        justifyContent:'center',
        alignItems:'stretch',
        
      }}
      >
        <View
        style={{
       
          justifyContent:'center',
          alignItems: 'center',
          flex:1,
         
          flexDirection:'row',
          marginLeft:40,
          marginRight:20
        }}
        >
        <View
        style={{
         
          backgroundColor: 'white',
          justifyContent:'center',
          alignItems: 'center',
          flex:2,
           borderRadius:5,
          height:40
        }}
        >
        <TextInput placeholder="Ingrese Cuit/Alias" />
        </View>
        <View
        style={{
          backgroundColor: 'yellow',
          justifyContent:'center',
          alignItems: 'stretch',
         borderRadius:'100%',
          marginLeft:8,  
          
        }}
        >
          <TouchableOpacity
            style={{
              paddingLeft:7,
              paddingRight:7,
              paddingBottom:2,
              paddingTop:2,
              
             
            }}
          >
            <Text style={{color:'blue'}}>?</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View
        style={{
      
          flex:1,
          justifyContent:'center',
          alignItems: 'center',
     
          marginLeft:40,
          marginRight:50,
          flexDirection:'row',
         
        }}
        >

        <View
        style={{
         
          backgroundColor: 'white',
          justifyContent:'center',
          alignItems: 'center',
          flex:2,
         borderRadius:5,
          height:40
        }}
        >
        <TextInput placeholder="Ingrese Contraseña" />
        </View>

        </View>
        <View
        style={{
          justifyContent:'flex-start',
          alignItems: 'center',
          marginLeft:40,
          marginRight:50,
          flexDirection:'row',
          
        }} >
  
          
      
        
          <Text style={{color:'white'}}>Recordar mi usuario</Text>
        </View>

        <View
        style={{
          
          flex:1,
          justifyContent:'center',
          alignItems: 'center',
          marginLeft:40,
          marginRight:50,
          flexDirection:'row',
          
        }}
        >
        
        <View
        style={{
             
          justifyContent:'center',
          alignItems: 'center',
          flex:2,
          borderRadius:'100%',
          height:'50%',
          backgroundColor:'yellow',
          flexDirection:'row',
       
        }}>
        <TouchableOpacity
           style={{
            alignItems: 'center',
            flex:2,
            borderRadius:'100%',
           }}
          >
            <Text style={{color:'blue'}}>Continuar</Text>
          </TouchableOpacity>
          
        </View>
        
        
        
        </View>
        <View
        style={{
        
          alignItems:'center',
        }}
        >
           <TouchableOpacity>
            <Text style={{color:'yellow',
          textDecorationLine: 'underline'}}>
            Recuperar Alias</Text>
          </TouchableOpacity>

        </View>
      </View>

      <View
      style={{
       // backgroundColor: 'green',
        flex:3,
        justifyContent:'center',
        alignItems: 'center',
        
        
        
      }}
      >
        <View
        style={{
         // backgroundColor: 'red',
          flex: 2,
          flexDirection:'row',
          
        }}
        >
          <View
          style={{
           // backgroundColor: 'blue',
            flex: 1,
            justifyContent:'flex-start',
            alignItems: 'flex-end',

          }}
          >
            <Image
              style={
                      { 
                        //backgroundColor:'black',
                      width:'45%',
                      height:'100%',
                      marginRight:'10%'
                      }
                    }
                resizeMode='contain'
                source={
                require('./imagenes/gps1.png') 
                        } />
          </View>
          <View
          style={{
            //backgroundColor: 'blue',
            flex: 1
          }}
          >
          <Image
              style={
                      { 
                        //backgroundColor:'black',
                        width:'45%',
                        height:'100%',
                        marginLeft:'10%'
                      }
                    }
                resizeMode='contain'
                source={
                require('./imagenes/beneficio2.png') 
                        } />
          </View>
        </View>

        <View
        style={{
         // backgroundColor: 'red',
          flex: 2,
          flexDirection:'row',
        }}
        >
          <View
          style={{
            //backgroundColor: 'blue',
            flex: 1,
            alignItems: 'flex-end',
          }}
          >
            <Image
              style={
                      { 
                        //backgroundColor:'black',
                        width:'45%',
                        height:'100%',
                        marginRight:'10%'
                      }
                    }
                resizeMode='contain'
                source={
                require('./imagenes/turno3.png') 
                        } />
          
          </View>
          <View
          style={{
            //backgroundColor: 'blue',
            flex: 1
          }}
          >
          <Image
              style={
                      { 
                        //backgroundColor:'black',
                        width:'45%',
                        height:'100%',
                        marginLeft:'10%'
                      }
                    }
                resizeMode='contain'
                source={
                require('./imagenes/informacion4.png') 
                        } />
          </View>
          
        </View>

      </View>

      <View
      style={{
       //4 backgroundColor: 'blue',
        flex:1,
        justifyContent:'center',
        alignItems: 'flex-end',
        
      }}
      >
        
        <Image
              style={
                      { 
                        //backgroundColor:'black',
                        width:'18%',
                        height:'100%',
                        marginBottom:'13%',
                        marginRight:'3%'
                      }
                    }
                resizeMode='contain'
                source={
                require('./imagenes/soporte.png') 
                        } />
        
  
      </View>

    </View>
    

  );
}
