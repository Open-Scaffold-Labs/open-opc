// Adapted from Open Dentist: flat palette objects, instant root variable writes, persisted picker.
export const THEMES = {
  'clinical-light': {
    label: 'Clean Daylight',
    vars: {
      '--os-bg':            '#F8FAFC',
      '--os-surface':       '#FFFFFF',
      '--os-surface-alt':   '#F1F5F9',
      '--os-border':        '#E2E8F0',
      '--os-ink':           '#0F172A',
      '--os-ink-muted':     '#475569',
      '--os-ink-soft':      '#64748B', // 4.6:1 on page bg, 4.8:1 on surface (captions only)
      '--os-accent':        '#0369A1', // white text 5.9:1 (was #0284C7 at 4.1:1)
      '--os-accent-ink':    '#FFFFFF',
      '--os-success':       '#059669',
      '--os-warning':       '#D97706',
      '--os-danger':        '#DC2626',
      '--os-radius':        '0.5rem',
      '--os-font':          'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
      '--os-font-size':     '14px',
      // Status pairs (fg on bg): positive 6.5, attention 6.4, critical 6.8, info 7.2, neutral 8.4 : 1
      '--os-status-positive-bg':  '#DCFCE7', '--os-status-positive-fg':  '#166534',
      '--os-status-attention-bg': '#FEF3C7', '--os-status-attention-fg': '#92400E',
      '--os-status-critical-bg':  '#FEE2E2', '--os-status-critical-fg':  '#991B1B',
      '--os-status-info-bg':      '#DBEAFE', '--os-status-info-fg':      '#1E40AF',
      '--os-status-neutral-bg':   '#E2E8F0', '--os-status-neutral-fg':   '#334155',
    },
  },
  'warm-editorial': {
    label: 'Open Scaffold Classic · Warm Tan & Forest',
    vars: {
      '--os-bg':            '#E7D9C1',
      '--os-surface':       '#FBF7EF',
      '--os-surface-alt':   '#EFE7D8',
      '--os-border':        '#D3C4AA',
      '--os-ink':           '#243126',
      '--os-ink-muted':     '#505B4C',
      '--os-ink-soft':      '#505B4C', // 5.1:1 on page bg, 6.7:1 on card
      '--os-accent':        '#2F4A34', // 8.5:1 with #F4EFE4
      '--os-accent-ink':    '#F4EFE4',
      '--os-success':       '#2B6435',
      '--os-warning':       '#6B5424',
      '--os-danger':        '#9F2D20',
      '--os-radius':        '0.5rem',
      '--os-font':          '"Source Sans 3", system-ui, -apple-system, sans-serif',
      '--os-font-size':     '14px',
      '--os-status-positive-bg':  '#E7EEE2', '--os-status-positive-fg':  '#2B6435',
      '--os-status-attention-bg': '#F1E6C8', '--os-status-attention-fg': '#6B5424',
      '--os-status-critical-bg':  '#F6E1DC', '--os-status-critical-fg':  '#9F2D20',
      '--os-status-info-bg':      '#DFE8D4', '--os-status-info-fg':      '#243126',
      '--os-status-neutral-bg':   '#EBE4D6', '--os-status-neutral-fg':   '#505B4C',
    },
  },
  'warm-terracotta': {
    label: 'Warm Terracotta',
    vars: {
      '--os-bg':            '#F8F4EE',
      '--os-surface':       '#FFFFFF',
      '--os-surface-alt':   '#F2EDE4',
      '--os-border':        '#DDD5CB',
      '--os-ink':           '#2C2422',
      '--os-ink-muted':     '#6B6157',
      '--os-ink-soft':      '#6B6157', // 5.5:1 on page bg (captions only)
      '--os-accent':        '#B85042',
      '--os-accent-ink':    '#FFFFFF',
      '--os-success':       '#A7BEAE',
      '--os-warning':       '#D99858',
      '--os-danger':        '#B85042',
      '--os-radius':        '0.625rem',
      '--os-font':          'Georgia, serif',
      '--os-font-size':     '15px',
      // Status pairs (fg on bg): positive 7.4, attention 6.2, critical 6.2, info 7.2, neutral 7.7 : 1
      '--os-status-positive-bg':  '#E3EDE2', '--os-status-positive-fg':  '#2F5233',
      '--os-status-attention-bg': '#F8E8CC', '--os-status-attention-fg': '#7A4A0B',
      '--os-status-critical-bg':  '#F6DAD5', '--os-status-critical-fg':  '#8E2F22',
      '--os-status-info-bg':      '#DCE8EE', '--os-status-info-fg':      '#1F4E63',
      '--os-status-neutral-bg':   '#E8E2D8', '--os-status-neutral-fg':   '#4A423A',
    },
  },
  'high-contrast': {
    label: 'High Contrast Accessibility',
    vars: {
      '--os-bg':            '#FFFFFF',
      '--os-surface':       '#FFFFFF',
      '--os-surface-alt':   '#F0F0F0',
      '--os-border':        '#000000',
      '--os-ink':           '#000000',
      '--os-ink-muted':     '#222222',
      '--os-ink-soft':      '#444444', // 9.7:1 (captions only)
      '--os-accent':        '#0000EE',
      '--os-accent-ink':    '#FFFFFF',
      '--os-success':       '#006400',
      '--os-warning':       '#B45309',
      '--os-danger':        '#B00020',
      '--os-radius':        '0.25rem',
      '--os-font':          'system-ui, -apple-system, sans-serif',
      '--os-font-size':     '16px',
      // Status pairs (fg on bg): positive 12.7, attention 9.7, critical 8.6, info 11.6, neutral 16.8 : 1
      '--os-status-positive-bg':  '#CCFFCC', '--os-status-positive-fg':  '#003300',
      '--os-status-attention-bg': '#FFF2B3', '--os-status-attention-fg': '#5C3200',
      '--os-status-critical-bg':  '#FFD6D6', '--os-status-critical-fg':  '#7A0010',
      '--os-status-info-bg':      '#D6E4FF', '--os-status-info-fg':      '#00206B',
      '--os-status-neutral-bg':   '#E6E6E6', '--os-status-neutral-fg':   '#000000',
    },
  },
  'midnight': {
    label: 'Midnight Dark',
    vars: {
      '--os-bg':            '#0B1220',
      '--os-surface':       '#121C2E',
      '--os-surface-alt':   '#1A2540',
      '--os-border':        '#223049',
      '--os-ink':           '#E6EDF5',
      '--os-ink-muted':     '#94A3B8',
      '--os-ink-soft':      '#94A3B8', // 7.3:1 on page bg (captions only)
      '--os-accent':        '#38BDF8',
      '--os-accent-ink':    '#0B1220',
      '--os-success':       '#34D399',
      '--os-warning':       '#FBBF24',
      '--os-danger':        '#F87171',
      '--os-radius':        '0.5rem',
      '--os-font':          'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
      '--os-font-size':     '14px',
      // Status pairs (fg on bg): positive 7.5, attention 7.3, critical 6.9, info 7.3, neutral 8.4 : 1
      '--os-status-positive-bg':  '#14532D', '--os-status-positive-fg':  '#BBF7D0',
      '--os-status-attention-bg': '#78350F', '--os-status-attention-fg': '#FDE68A',
      '--os-status-critical-bg':  '#7F1D1D', '--os-status-critical-fg':  '#FECACA',
      '--os-status-info-bg':      '#1E3A8A', '--os-status-info-fg':      '#BFDBFE',
      '--os-status-neutral-bg':   '#334155', '--os-status-neutral-fg':   '#E2E8F0',
    },
  },
};


for (const [name, theme] of Object.entries(THEMES)) {
  theme.vars['--os-rail'] = name === 'warm-editorial' ? '#1F2B22' : name === 'midnight' ? '#080F1C' : '#17251D';
  theme.vars['--os-rail-ink'] = '#F4EFE4';
}
export const STORAGE_KEY = 'open_opc.theme';
export function applyTheme(name, root = globalThis.document?.documentElement, storage = globalThis.localStorage) {
  const key = THEMES[name] ? name : 'warm-editorial';
  for (const [property, value] of Object.entries(THEMES[key].vars)) root?.style.setProperty(property, value);
  root?.setAttribute('data-os-theme', key);
  try { storage?.setItem(STORAGE_KEY, key); } catch { /* Private browsing may block storage. */ }
  return key;
}
export function loadSavedTheme(root, storage = globalThis.localStorage) {
  let name = 'warm-editorial';
  try { name = storage?.getItem(STORAGE_KEY) || name; } catch { /* Use default. */ }
  return applyTheme(name, root, storage);
}
export function listThemes() { return Object.entries(THEMES).map(([key, theme]) => ({key, label: theme.label})); }
