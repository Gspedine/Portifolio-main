/** @file HeroScreen.js - Tela Hero para visualização em mobile/tablet */

import React from 'react';
import { View, Text, Image } from 'react-native';

// Assets e contexto
import GustavoImg from '../../assets/Gustavo.jpg';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from '../components/themedStyles';

const HeroScreen = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.particlesBg} />

      <View style={styles.heroContent}>
        <Text style={styles.heroTitle}>Gustavo Lopes Ferreira</Text>
        <Text style={styles.heroSubtitle}>
          Técnico em Química | P&D Nuclear (PROSUB – AMAZUL)  
          Estudante de Desenvolvimento de Software – FATEC Votorantim
        </Text>
        <Image
          source={GustavoImg ? { uri: GustavoImg } : undefined}
          style={styles.heroAvatar}
        />
      </View>
    </View>
  );
};

export default HeroScreen;