import React from 'react'
import { DefaultTheme } from '@styles'
import { MainScreen, screens } from '@screens'
import { AppBar, StatusBar } from '@components'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

export default () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={DefaultTheme}>
        <StatusBar />

        <NavigationContainer theme={DefaultTheme}>
          <Navigator
            initialRouteName={screens.MainScreen}
            screenOptions={{
              header: AppBar,
            }}
          >
            <Screen name={screens.MainScreen} component={MainScreen} />
          </Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  )
}
