// src/components/Charts/chartUtils.ts

/**
 * Primary color for charts, typically used for single-series charts
 * where a consistent brand or accent color is desired.
 * This is a CSS variable string that should be resolved to its actual value
 * by the component using it (e.g., via `resolveChartColor`).
 */
export const CHART_COLORS_PRIMARY = 'var(--accent-color)';

/**
 * A palette of CSS variable strings for multi-series charts or pie charts.
 * These should be resolved to their actual color values by the component
 * or a utility function before being passed to Recharts `fill` or `stroke` props.
 * Ensure these variables are defined in `src/styles/theme.css`.
 */
export const CHART_COLORS_PALETTE: string[] = [
  'var(--accent-color)',    // Blue/Primary Accent
  'var(--success-color)',   // Green
  'var(--purple-color)',    // Purple
  'var(--teal-color)',      // Teal
  'var(--orange-color)',    // Orange
  'var(--pink-color)',      // Pink
  'var(--error-color)',     // Red (can be used for specific highlighting)
  // Add more distinct colors if needed, e.g., from a larger palette
  // 'var(--cyan-color)',
  // 'var(--yellow-color)',
  // 'var(--gray-color)', // (e.g., var(--secondary-text) or a dedicated gray)
];

/**
 * Resolves a CSS variable string (e.g., 'var(--accent-color)') to its computed color value.
 * 
 * @param colorVar The CSS variable string.
 * @returns The computed color string (e.g., '#RRGGBB' or 'rgb(r,g,b)') or the original string if resolution fails or not in browser.
 */
export const resolveChartColor = (colorVar: string): string => {
  if (typeof window !== 'undefined' && colorVar && colorVar.startsWith('var(')) {
    const variableName = colorVar.match(/var\(([^)]+)\)/)?.[1];
    if (variableName) {
      const resolvedValue = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
      return resolvedValue || colorVar; // Return original if resolved value is empty (should not happen for defined vars)
    }
  }
  // If it's not a CSS variable string or not in a browser environment, return it as is.
  // This allows passing direct hex/rgb codes as well.
  return colorVar; 
};

/**
 * Resolves all colors in the CHART_COLORS_PALETTE to their computed string values.
 * 
 * @returns An array of resolved color strings.
 */
export const getResolvedChartPalette = (): string[] => {
  return CHART_COLORS_PALETTE.map(resolveChartColor);
};

/**
 * A simple hashing function to get a somewhat consistent color from the palette based on a string name.
 * This is useful for assigning colors to categories in a pie chart or bar chart
 * where you want the same category to have the same color if the order changes.
 *
 * @param name The string to hash for color selection.
 * @param palette Optional: A specific palette of resolved colors to use. Defaults to resolved CHART_COLORS_PALETTE.
 * @returns A resolved color string from the palette.
 */
export const getColorFromName = (name: string, palette?: string[]): string => {
  const resolvedPalette = palette || getResolvedChartPalette();
  if (!resolvedPalette || resolvedPalette.length === 0) {
    // Fallback if palette is somehow empty or undefined (e.g., CSS vars not loaded yet)
    const fallbackColors = ['#CCCCCC', '#AAAAAA', '#888888', '#666666', '#444444'];
    let hashFallback = 0;
    for (let i = 0; i < name.length; i++) {
      hashFallback = name.charCodeAt(i) + ((hashFallback << 5) - hashFallback);
      hashFallback = hashFallback & hashFallback; 
    }
    return fallbackColors[Math.abs(hashFallback) % fallbackColors.length];
  }
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // Convert to 32bit integer
  }
  const index = Math.abs(hash) % resolvedPalette.length;
  return resolvedPalette[index];
};
