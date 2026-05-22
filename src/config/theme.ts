/**
 * Central theme config (TS mirror of CSS tokens in src/styles.css).
 * Edit src/styles.css for visual changes — this file exposes the same
 * tokens to TypeScript consumers (e.g. charts, JS animations).
 */
export const theme = {
  brand: {
    name: "Shreemaa Mother and Child Care",
    short: "Shreemaa",
    tagline: "Comprehensive maternal & child care, delivered with compassion.",
  },
  colors: {
    primary: "var(--primary)",
    primarySoft: "var(--primary-soft)",
    accent: "var(--accent)",
    background: "var(--background)",
    foreground: "var(--foreground)",
    card: "var(--card)",
    muted: "var(--muted)",
    border: "var(--border)",
  },
  fonts: {
    heading: "var(--font-heading)",
    body: "var(--font-body)",
  },
  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)",
    "3xl": "var(--radius-3xl)",
  },
  shadows: {
    soft: "var(--shadow-soft)",
    card: "var(--shadow-card)",
    elevated: "var(--shadow-elevated)",
    glow: "var(--shadow-glow)",
  },
  gradients: {
    hero: "var(--gradient-hero)",
    brand: "var(--gradient-brand)",
    soft: "var(--gradient-soft)",
  },
} as const;

export type Theme = typeof theme;
