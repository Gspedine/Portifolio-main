/** @file themedStyles.js - StileSheet centralizado com elementos responsivos e suporte a temas */

import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isMobile = width < 768;

export const getStyles = (theme) => StyleSheet.create({
  appContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: theme.bg,
  },

  sidebar: {
    width: isMobile ? '100%' : 260,
    backgroundColor: theme.card,
    padding: 24,
    borderRightWidth: isMobile ? 0 : 1,
    borderRightColor: theme.border,
    height: '100%',
  },

  logo: {
    fontSize: 28,
    fontWeight: '900',
    color: theme.primary,
    marginBottom: 40,
  },

  sidebarItem: {
    paddingVertical: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.border + '40',
  },

  sidebarText: {
    color: theme.text,
    fontSize: 18,
    fontWeight: '500',
  },

  themeToggleSidebar: {
    marginTop: 'auto',
    padding: 16,
    alignItems: 'center',
  },

  mainContent: {
    flex: 1,
    padding: isMobile ? 16 : 32,
  },

  screenContainer: {
    flex: 1,
    backgroundColor: theme.bg,
  },

  particlesBg: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },

  heroContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  heroTitle: {
    fontSize: isMobile ? 36 : 56,
    fontWeight: '800',
    color: theme.primary,
    textAlign: 'center',
    marginBottom: 16,
    textShadowColor: theme.primary + '80',
    textShadowRadius: 20,
  },

  heroSubtitle: {
    fontSize: isMobile ? 18 : 24,
    color: theme.textSecondary,
    textAlign: 'center',
    marginBottom: 32,
    maxWidth: 800,
  },

  heroAvatar: {
    width: isMobile ? 180 : 240,
    height: isMobile ? 180 : 240,
    borderRadius: 999,
    borderWidth: 4,
    borderColor: theme.avatarBorder,
    shadowColor: theme.primary,
    shadowOpacity: 0.6,
    shadowRadius: 30,
    elevation: 15,
  },

  sectionTitle: {
    fontSize: isMobile ? 28 : 40,
    fontWeight: '800',
    color: theme.primary,
    marginBottom: 24,
    textAlign: 'center',
  },

  paragraph: {
    fontSize: 17,
    lineHeight: 28,
    color: theme.textSecondary,
    marginBottom: 20,
    textAlign: 'justify',
  },

  experienceCard: {
    backgroundColor: theme.card,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: theme.border,
  },

  expRole: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.text,
  },

  expCompany: {
    fontSize: 16,
    color: theme.primary,
    marginTop: 4,
  },

  expPeriod: {
    fontSize: 14,
    color: theme.textSecondary,
    marginTop: 4,
  },

  expDesc: {
    fontSize: 16,
    color: theme.textSecondary,
    marginTop: 12,
  },

  skillCategory: {
    backgroundColor: theme.card,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: theme.border,
  },

  categoryTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.primary,
    marginBottom: 12,
  },

  skillList: {
    fontSize: 16,
    color: theme.textSecondary,
    lineHeight: 28,
  },

  repoCard: {
    backgroundColor: theme.card,
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: theme.border,
  },

  repoName: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.primary,
  },

  repoDesc: {
    fontSize: 16,
    color: theme.textSecondary,
    marginTop: 8,
  },

  repoMeta: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 16,
  },

  repoMetaText: {
    fontSize: 14,
    color: theme.textSecondary,
  },

  input: {
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    color: theme.text,
    fontSize: 16,
  },

  textArea: {
    minHeight: 140,
    textAlignVertical: 'top',
  },

  sendButton: {
    backgroundColor: theme.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },

  sendButtonDisabled: {
    opacity: 0.6,
  },

  sendButtonText: {
    color: theme.buttonText,
    fontSize: 18,
    fontWeight: '700',
  },

  loadingText: {
    fontSize: 18,
    color: theme.textSecondary,
    textAlign: 'center',
    marginTop: 40,
  },

  emptyText: {
    fontSize: 18,
    color: theme.textSecondary,
    textAlign: 'center',
    marginTop: 40,
  },
});