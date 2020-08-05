import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PantallaCarga from './pantallas/carga'
import PantallaAutenticacion from './pantallas/autenticacion'
import PantallaRegistro from './pantallas/registro';

const Stack = createStackNavigator();

export default function App() {

  // Simulacion de carga por 2 segundos
  const [cargandoRecursos, setCargandoRecursos] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setCargandoRecursos(false)
    }, 2000)
  })

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {cargandoRecursos ? (
          <Stack.Screen name='Carga' component={PantallaCarga} />
        ) : (
            <>

              <Stack.Screen name='Autenticacion' component={PantallaAutenticacion} />
              <Stack.Screen name="Registro" component={PantallaRegistro} />
            </>
          )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}