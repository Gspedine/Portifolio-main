import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions, 
  Platform, 
  StyleSheet 
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';

const Header = () => {
  const { theme, isDark, toggleTheme } = useTheme();
  const styles = getStyles(theme);
  const [menuOpen, setMenuOpen] = useState(false);

  const { width } = Dimensions.get('window');
  const isMobile = width < 768;

  const navItems = [
    { label: 'Sobre mim',     id: 'divSobre'       },
    { label: 'Experiências',  id: 'divExperiencias' },
    { label: 'Projetos',      id: 'divProjetos'    },
    { label: 'Habilidades',   id: 'divHabilidades' },
    { label: 'Contato',       id: 'divContato'     },
  ];

  const handleScroll = (id) => {
    if (Platform.OS === 'web') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMenuOpen(false);
  };

  return (
    <View style={styles.headerContainer}>
      {/* Logo */}
      <View style={styles.logoWrapper}>
        <Text style={styles.logoBig}>GL</Text>
        <Text style={styles.logoSmall}>GUSTAVO LOPES FERREIRA</Text>
      </View>

      {/* Área direita */}
      {isMobile ? (
        <View style={styles.rightMobile}>
          {/* Toggle tema */}
          <TouchableOpacity 
            style={styles.themeButton} 
            onPress={toggleTheme}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Text style={styles.themeIcon}>{isDark ? '☀️' : '🌙'}</Text>
          </TouchableOpacity>

          {/* Hamburger */}
          <TouchableOpacity 
            style={styles.hamburgerButton}
            onPress={() => setMenuOpen(!menuOpen)}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Text style={styles.hamburgerIcon}>
              {menuOpen ? '✕' : '☰'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.rightDesktop}>
          {navItems.map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => handleScroll(item.id)}
              style={styles.navLinkContainer}
            >
              <Text style={styles.navLinkText}>{item.label}</Text>
            </TouchableOpacity>
          ))}

          {/* Toggle tema desktop */}
          <TouchableOpacity 
            style={styles.themeButtonDesktop}
            onPress={toggleTheme}
          >
            <Text style={styles.themeIcon}>{isDark ? '☀️' : '🌙'}</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Menu mobile dropdown */}
      {menuOpen && isMobile && (
        <View style={styles.mobileDropdown}>
          {navItems.map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => handleScroll(item.id)}
              style={styles.mobileItem}
            >
              <Text style={styles.mobileItemText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Header;