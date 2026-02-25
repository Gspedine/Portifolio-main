import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from '../components/themedStyles';

const AboutScreen = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.sectionTitle}>Sobre Mim</Text>

      <Text style={styles.paragraph}>
        Com 13 anos de atuação na AMAZUL, dedico minha carreira ao setor de Pesquisa e Desenvolvimento de energia nuclear, integrando a equipe técnica do PROSUB. Minha trajetória é pautada pelo rigor científico e pela busca constante por inovação em projetos de alta complexidade nacional.
      </Text>

      <Text style={styles.paragraph}>
        Atualmente, estou expandindo meus horizontes na área de tecnologia, cursando Desenvolvimento de Software na FATEC Votorantim. Acredito que a convergência entre a experiência em P&D e a engenharia de software é a chave para soluções disruptivas.
      </Text>

      <Text style={styles.paragraph}>
        Fora do laboratório e dos códigos, sou um homem de 33 anos, casado e pai, que encontra repertório estratégico na literatura de fantasia e nos jogos virtuais. Sou movido pela curiosidade sobre como a ciência, a geopolítica e a tecnologia moldam o futuro — e trabalho para ser parte ativa dessa transformação.
      </Text>

      <Text style={[styles.sectionTitle, { marginTop: 40 }]}>Resumo Profissional</Text>

      <Text style={styles.paragraph}>
        Iniciei minha carreira como Auxiliar de Faturamento (01/2011 – 02/2013) na Fundação Ubaldino do Amaral. 
        Segui como Estagiário Técnico em Química (02/2013 – 12/2013) no CELQA Análises Químicas. 
        Atuei como Técnico em Radioproteção (12/2013 – 08/2014) na Competitividade Ltda., com lotação no Centro Tecnológico da Marinha em São Paulo. 
        Desde setembro de 2014 sou Técnico em Química na AMAZUL, com foco em projetos estratégicos do PROSUB.
      </Text>
    </ScrollView>
  );
};

export default AboutScreen;