/** @file Projects.js - Seção de projetos com cards clicáveis */

import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

// Contexto e componentes
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';
import FadeInSection from './FadeInSection';
import StaggeredItem from './StaggeredItem';

const sampleProjects = [
  {
    id: 1,
    title: 'Projeto Integrador FATEC (em desenvolvimento)',
    desc: 'Aplicações e sistemas desenvolvidos durante o curso de Desenvolvimento de Software na FATEC Votorantim.',
    url: '#',
  },
  {
    id: 2,
    title: 'Automação / Monitoramento Técnico (em planejamento)',
    desc: 'Ideias e protótipos para monitoramento de parâmetros em ambientes técnicos/científicos.',
    url: '#',
  },
  // Adicione seus projetos reais conforme forem criados
];

const Projects = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <FadeInSection style={styles.section} direction="up">
      <View nativeID="divProjetos">
        <Text style={styles.sectionTitle}>Projetos</Text>
        <View style={styles.projectsRow}>
          {sampleProjects.map((p, index) => (
            <StaggeredItem key={p.id} index={index} style={styles.projectCard}>
              <TouchableOpacity onPress={() => Linking.openURL(p.url)}>
                <Text style={styles.projectTitle}>{p.title}</Text>
                <Text style={styles.paragraph}>{p.desc}</Text>
              </TouchableOpacity>
            </StaggeredItem>
          ))}
        </View>
      </View>
    </FadeInSection>
  );
};

export default Projects;