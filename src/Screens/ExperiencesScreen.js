import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from '../components/themedStyles';

const experiences = [
  {
    role: 'Técnico em Química',
    company: 'AMAZUL – Amazônia Azul Tecnologias de Defesa S.A.',
    period: 'Set/2014 – atual',
    desc: 'Atuação em Pesquisa e Desenvolvimento no âmbito do PROSUB (Programa de Desenvolvimento de Submarinos). Participação em projetos de alta complexidade relacionados à energia nuclear e defesa nacional.',
  },
  // ... adicione os outros como no original
];

const ExperiencesScreen = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.sectionTitle}>Experiências Profissionais</Text>

      {experiences.map((exp, index) => (
        <View key={index} style={styles.experienceCard}>
          <Text style={styles.expRole}>{exp.role}</Text>
          <Text style={styles.expCompany}>{exp.company}</Text>
          <Text style={styles.expPeriod}>{exp.period}</Text>
          <Text style={styles.expDesc}>{exp.desc}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ExperiencesScreen;