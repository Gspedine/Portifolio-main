import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from '../components/themedStyles';

const ProjectsScreen = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Gspedine/repos?sort=updated&direction=desc')
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.sectionTitle}>Projetos</Text>

      {loading ? (
        <Text style={styles.loadingText}>Carregando repositórios do GitHub...</Text>
      ) : repos.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum repositório público encontrado.</Text>
      ) : (
        repos.map(repo => (
          <TouchableOpacity
            key={repo.id}
            style={styles.repoCard}
            onPress={() => Linking.openURL(repo.html_url)}
          >
            <Text style={styles.repoName}>{repo.name}</Text>
            <Text style={styles.repoDesc}>{repo.description || 'Sem descrição'}</Text>
            <View style={styles.repoMeta}>
              <Text style={styles.repoMetaText}>★ {repo.stargazers_count}</Text>
              <Text style={styles.repoMetaText}>• {repo.language || '—'}</Text>
            </View>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

export default ProjectsScreen;