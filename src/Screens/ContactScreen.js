/** @file ContactScreen.js - Tela de contacto com formulário de email via EmailJS */

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import emailjs from '@emailjs/browser';

// Contexto
import { useTheme } from '../context/ThemeContext';
import { getStyles } from '../components/themedStyles';

const ContactScreen = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const sendEmail = () => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert('Atenção', 'Preencha todos os campos');
      return;
    }

    setSending(true);

    // Substitua pelos seus valores do EmailJS (cadastre em emailjs.com)
    emailjs.send(
      'YOUR_SERVICE_ID',      // ex: service_abc123
      'YOUR_TEMPLATE_ID',     // ex: template_xyz456
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'YOUR_PUBLIC_KEY'       // ex: abc123def456
    )
      .then(() => {
        Alert.alert('Sucesso', 'Mensagem enviada com sucesso!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch(err => {
        console.error(err);
        Alert.alert('Erro', 'Não foi possível enviar a mensagem');
      })
      .finally(() => setSending(false));
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.sectionTitle}>Entre em Contato</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        placeholderTextColor={theme.textSecondary}
        value={form.name}
        onChangeText={text => setForm({ ...form, name: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Seu email"
        placeholderTextColor={theme.textSecondary}
        value={form.email}
        onChangeText={text => setForm({ ...form, email: text })}
        keyboardType="email-address"
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Sua mensagem"
        placeholderTextColor={theme.textSecondary}
        value={form.message}
        onChangeText={text => setForm({ ...form, message: text })}
        multiline
        numberOfLines={6}
      />

      <TouchableOpacity
        style={[styles.sendButton, sending && styles.sendButtonDisabled]}
        onPress={sendEmail}
        disabled={sending}
      >
        <Text style={styles.sendButtonText}>
          {sending ? 'Enviando...' : 'Enviar Mensagem'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactScreen;