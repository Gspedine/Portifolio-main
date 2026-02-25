import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { getStyles } from './themedStyles';

const Sidebar = ({ children }) => {
  const { theme, isDark, toggleTheme } = useTheme();
  const navigation = useNavigation();
  const styles = getStyles(theme);

  const navItems = [
    { label: 'Home', screen: 'Hero' },
    { label: 'Sobre', screen: 'About' },
    { label: 'Experiências', screen: 'Experiences' },
    { label: 'Habilidades', screen: 'Skills' },
    { label: 'Projetos', screen: 'Projects' },
    { label: 'Contato', screen: 'Contact' },
  ];

  return (
    <View style={styles.appContainer}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Text style={styles.logo}>GL Ferreira</Text>
        
        {navItems.map(item => (
          <TouchableOpacity
            key={item.screen}
            onPress={() => navigation.navigate(item.screen)}
            style={styles.sidebarItem}
          >
            <Text style={styles.sidebarText}>{item.label}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggleSidebar}>
          <Text style={{ fontSize: 24 }}>{isDark ? '☀️' : '🌙'}</Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo principal */}
      <View style={styles.mainContent}>
        {children}
      </View>
    </View>
  );
};

export default Sidebar;