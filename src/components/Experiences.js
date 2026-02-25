import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';
import FadeInSection from './FadeInSection';
import StaggeredItem from './StaggeredItem';

const experiences = [
  {
    id: 1,
    role: 'Técnico em Química',
    company: 'AMAZUL – Amazônia Azul Tecnologias de Defesa S.A.',
    period: '10/09/2014 – atual',
    desc: 'Atuação em Pesquisa e Desenvolvimento no âmbito do PROSUB (Programa de Desenvolvimento de Submarinos). Participação em projetos de alta complexidade relacionados à energia nuclear e defesa nacional.',
  },
  {
    id: 2,
    role: 'Técnico em Radioproteção',
    company: 'Competitividade Ltda. (lotação: Centro Tecnológico da Marinha em São Paulo)',
    period: '02/12/2013 – 01/08/2014',
    desc: 'Monitoramento e controle radiológico em ambiente nuclear.',
  },
  {
    id: 3,
    role: 'Estagiário Técnico em Química',
    company: 'CELQA Análises Químicas',
    period: '04/02/2013 – 01/12/2013',
    desc: 'Atividades de análises químicas e suporte técnico laboratorial.',
  },
  {
    id: 4,
    role: 'Auxiliar de Faturamento',
    company: 'Fundação Ubaldino do Amaral',
    period: '01/01/2011 – 03/02/2013',
    desc: 'Auxílio em processos administrativos e de faturamento.',
  },
];

const Experiences = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <FadeInSection style={styles.section} direction="up">
      <View nativeID="divExperiencias">
        <Text style={styles.sectionTitle}>Experiências</Text>
        {experiences.map((exp, index) => (
          <StaggeredItem key={exp.id} index={index} style={{ marginBottom: 20 }}>
            <Text style={styles.expRole}>{exp.role} — {exp.company}</Text>
            <Text style={styles.expPeriod}>{exp.period}</Text>
            <Text style={styles.paragraph}>{exp.desc}</Text>
          </StaggeredItem>
        ))}
      </View>
    </FadeInSection>
  );
};

export default Experiences;