/** @file About.js - Seção 'Sobre' com animação de fade-in */

import React from 'react';
import { View, Text } from 'react-native';

// Contexto e componentes
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';
import FadeInSection from './FadeInSection';

const About = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <FadeInSection style={styles.section} direction="up">
      <View nativeID="divSobre">
        <Text style={styles.sectionTitle}>Sobre</Text>
        <Text style={styles.paragraph}>
          Com 13 anos de atuação na AMAZUL, dedico minha carreira ao setor de Pesquisa e Desenvolvimento de energia nuclear, 
          integrando a equipe técnica do PROSUB. Minha trajetória é pautada pelo rigor científico e pela busca constante 
          por inovação em projetos de alta complexidade nacional.
        </Text>
        <Text style={styles.paragraph}>
          Atualmente, estou expandindo meus horizontes na área de tecnologia, cursando Desenvolvimento de Software na 
          FATEC Votorantim. Acredito que a convergência entre a experiência em P&D e a engenharia de software é a chave 
          para soluções disruptivas.
        </Text>
        <Text style={styles.paragraph}>
          Fora do laboratório e dos códigos, sou um homem de 33 anos, casado e pai, que encontra repertório estratégico 
          na literatura de fantasia e nos jogos virtuais. Sou movido pela curiosidade sobre como a ciência, a geopolítica 
          e a tecnologia moldam o futuro — e trabalho para ser parte ativa dessa transformação.
        </Text>

        <FadeInSection direction="up" delay={200}>
          <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Resumo Profissional</Text>
          <Text style={styles.paragraph}>
            Iniciei minha carreira como Auxiliar de Faturamento (01/01/2011 – 03/02/2013) na Fundação Ubaldino do Amaral. 
            Segui como Estagiário Técnico em Química (04/02/2013 – 01/12/2013) no CELQA Análises Químicas. 
            Atuei como Técnico em Radioproteção (02/12/2013 – 01/08/2014) na Competitividade Ltda., com lotação no Centro Tecnológico da Marinha em São Paulo. 
            Desde 10/09/2014 sou Técnico em Química na AMAZUL.
          </Text>
        </FadeInSection>
      </View>
    </FadeInSection>
  );
};

export default About;