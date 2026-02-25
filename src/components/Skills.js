import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';
import FadeInSection from './FadeInSection';
import StaggeredItem from './StaggeredItem';

const skills = {
  'Química & Radioproteção': [
    'Análises Químicas',
    'Radioproteção',
    'Monitoramento Radiológico',
    'Processos Químicos em Ambiente Nuclear',
  ],
  'Pesquisa & Desenvolvimento': [
    'P&D em Energia Nuclear',
    'Projetos Estratégicos (PROSUB)',
    'Inovação Tecnológica de Defesa',
  ],
  'Desenvolvimento de Software (em formação)': [
    'Lógica de Programação',
    'HTML / CSS',
    'JavaScript (básico)',
    'React Native (iniciante)',
    'Git (controle de versão)',
  ],
  'Metodologias & Boas Práticas': [
    'Rigor Científico',
    'Trabalho em Equipe Multidisciplinar',
    'Gestão de Projetos Complexos',
  ],
  'Soft Skills': [
    'Curiosidade Científica',
    'Pensamento Analítico',
    'Leitura Estratégica',
    'Resiliência',
  ],
  'Idiomas': ['Português (Nativo)', 'Inglês Técnico (intermediário)'],
};

const Skills = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <FadeInSection style={styles.section} direction="up">
      <View nativeID="divHabilidades">
        <Text style={styles.sectionTitle}>Habilidades</Text>
        {Object.keys(skills).map((cat, index) => (
          <StaggeredItem key={cat} index={index} style={{ marginBottom: 20 }}>
            <Text style={styles.expRole}>{cat}</Text>
            <Text style={styles.paragraph}>{skills[cat].join(' · ')}</Text>
          </StaggeredItem>
        ))}
      </View>
    </FadeInSection>
  );
};

export default Skills;