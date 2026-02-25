import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from '../components/themedStyles';

const skills = {
  'Química & Radioproteção': ['Análises Químicas', 'Radioproteção', 'Monitoramento Radiológico', 'Processos Químicos em Ambiente Nuclear'],
  'Pesquisa & Desenvolvimento': ['P&D em Energia Nuclear', 'Projetos Estratégicos (PROSUB)', 'Inovação Tecnológica de Defesa'],
  'Desenvolvimento de Software (em formação)': ['Lógica de Programação', 'HTML / CSS', 'JavaScript (básico)', 'React Native (iniciante)', 'Git'],
  'Metodologias & Boas Práticas': ['Rigor Científico', 'Trabalho em Equipe Multidisciplinar', 'Gestão de Projetos Complexos'],
  'Soft Skills': ['Curiosidade Científica', 'Pensamento Analítico', 'Leitura Estratégica', 'Resiliência'],
  'Idiomas': ['Português (Nativo)', 'Inglês Técnico (intermediário)'],
};

const SkillsScreen = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.sectionTitle}>Habilidades</Text>

      {Object.entries(skills).map(([category, items], index) => (
        <View key={index} style={styles.skillCategory}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <Text style={styles.skillList}>{items.join(' • ')}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default SkillsScreen;