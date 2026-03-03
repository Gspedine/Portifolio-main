// src/components/Hero.js
import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Linking, Platform, Animated } from 'react-native';
import GustavoImg from '../../assets/Gustavo.jpg';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';

const Hero = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const isWeb = Platform.OS === 'web';
  const fallback = 'https://via.placeholder.com/300.png?text=Gustavo';

  // Animações restantes
  const fadeLeft = useRef(new Animated.Value(0)).current;
  const translateLeft = useRef(new Animated.Value(-50)).current;
  const fadeRight = useRef(new Animated.Value(0)).current;
  const translateRight = useRef(new Animated.Value(50)).current;
  const fadeSocial = useRef(new Animated.Value(0)).current;
  const translateSocial = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    // Animação do lado esquerdo (nome + descrição)
    Animated.parallel([
      Animated.timing(fadeLeft, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(translateLeft, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Animação do lado direito (foto + email)
    Animated.parallel([
      Animated.timing(fadeRight, {
        toValue: 1,
        duration: 800,
        delay: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateRight, {
        toValue: 0,
        duration: 800,
        delay: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // Animação dos ícones sociais
    Animated.parallel([
      Animated.timing(fadeSocial, {
        toValue: 1,
        duration: 600,
        delay: 600,
        useNativeDriver: true,
      }),
      Animated.timing(translateSocial, {
        toValue: 0,
        duration: 600,
        delay: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.hero}>
      {/* Lado esquerdo – nome + descrição */}
      <Animated.View
        style={[
          styles.heroLeft,
          {
            opacity: fadeLeft,
            transform: [{ translateX: translateLeft }],
          },
        ]}
      >
        <Text style={styles.heroTitle}>
          Eu sou <Text style={styles.highlight}>GUSTAVO LOPES FERREIRA</Text>
        </Text>
        <Text style={styles.heroDesc}>
          Com 13 anos de atuação na AMAZUL, dedico minha carreira ao setor de Pesquisa e Desenvolvimento de energia nuclear, integrando a equipe técnica do PROSUB. Minha trajetória é pautada pelo rigor científico e pela busca constante por inovação em projetos de alta complexidade nacional.
          {'\n\n'}
          Atualmente, estou expandindo meus horizontes na área de tecnologia, cursando Desenvolvimento de Software na FATEC Votorantim. Acredito que a convergência entre a experiência em P&D e a engenharia de software é a chave para soluções disruptivas.
        </Text>
      </Animated.View>

      {/* Lado direito – foto + email */}
      <Animated.View
        style={[
          styles.heroRight,
          {
            opacity: fadeRight,
            transform: [{ translateX: translateRight }],
          },
        ]}
      >
        <Image
          source={GustavoImg ? { uri: GustavoImg } : { uri: fallback }}
          style={styles.heroAvatar}
        />
        <Text style={styles.emailText}>gustavo.lopes.ferreira@example.com</Text>
        {/* ↑↑↑ ATUALIZE COM SEU EMAIL REAL */}
      </Animated.View>

      {/* Ícones sociais */}
      <Animated.View
        style={[
          styles.socialLeft,
          {
            opacity: fadeSocial,
            transform: [{ translateY: translateSocial }],
          },
        ]}
      >
        <TouchableOpacity
          style={styles.socialIcon}
          onPress={() => Linking.openURL('https://github.com/SEU_USUARIO')}
        >
          <Text style={styles.socialIconText}>GH</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialIcon}
          onPress={() => Linking.openURL('https://www.linkedin.com/in/SEU-PERFIL')}
        >
          <Text style={styles.socialIconText}>in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialIcon}
          onPress={() => Linking.openURL('mailto:gustavo.lopes.ferreira@example.com')}
        >
          <Text style={styles.socialIconText}>@</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Hero;