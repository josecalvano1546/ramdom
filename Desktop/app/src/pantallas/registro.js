import React from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PantallaRegistro({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <Text>Esta es la pantalla de registro</Text>
                <Button 
                    title="Ya tengo una cuenta"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
            </View>
        </SafeAreaView>
    )
}