/** @file App.js - Componente raiz da aplicação. Configura navegação e contexto de tema. */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Contexto e componentes locais
import { ThemeProvider } from './src/context/ThemeContext';
import Sidebar from './src/components/Sidebar';
import HeroScreen from './src/screens/HeroScreen';
import AboutScreen from './src/screens/AboutScreen';
import ExperiencesScreen from './src/screens/ExperiencesScreen';
import SkillsScreen from './src/screens/SkillsScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import ContactScreen from './src/screens/ContactScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Sidebar>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Hero" component={HeroScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Experiences" component={ExperiencesScreen} />
            <Stack.Screen name="Skills" component={SkillsScreen} />
            <Stack.Screen name="Projects" component={ProjectsScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
          </Stack.Navigator>
        </Sidebar>
      </NavigationContainer>
    </ThemeProvider>
  );
}