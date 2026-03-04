/** @file App.js - Componente raiz da aplicação. Configura navegação e contexto de tema. */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Contexto e componentes locais
import { ThemeProvider } from './src/context/ThemeContext';
import Sidebar from './src/components/Sidebar';
import HeroScreen from './src/Screens/HeroScreen';
import AboutScreen from './src/Screens/AboutScreen';
import ExperiencesScreen from './src/Screens/ExperiencesScreen';
import SkillsScreen from './src/Screens/SkillsScreen';
import ProjectsScreen from './src/Screens/ProjectsScreen';
import ContactScreen from './src/Screens/ContactScreen';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: [
    typeof window !== 'undefined' ? window.location.origin : '',
  ],
  config: {
    screens: {
      Hero: '/',
      About: '/about',
      Experiences: '/experiences',
      Skills: '/skills',
      Projects: '/projects',
      Contact: '/contact',
    },
  },
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer linking={linking}>
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