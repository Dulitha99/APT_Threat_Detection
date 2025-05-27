import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';

interface ResponsiveBarChartProps {
  data: any[];
  xAxisKey: string;
  yAxisKey: string;
  yAxisLabel?: string;
  barColor?: string; // CSS variable string, e.g., 'var(--accent-color)'
}

const ResponsiveBarChart: React.FC<ResponsiveBarChartProps> = ({
  data,
  xAxisKey,
  yAxisKey,
  yAxisLabel = '',
  barColor = 'var(--accent-color)', // Default to accent color
}) => {
  const { theme } = useTheme(); // To trigger re-render on theme change

  const [resolvedBarColor, setResolvedBarColor] = useState('');
  const [resolvedGridStroke, setResolvedGridStroke] = useState('');
  const [resolvedTickFill, setResolvedTickFill] = useState('');
  const [resolvedTooltipBg, setResolvedTooltipBg] = useState('');
  const [resolvedTooltipBorder, setResolvedTooltipBorder] = useState('');
  const [resolvedTooltipText, setResolvedTooltipText] = useState('');
  const [resolvedCursorFill, setResolvedCursorFill] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rootStyle = getComputedStyle(document.documentElement);
      
      const getVarValue = (cssVar: string) => {
        const match = cssVar.match(/var\(([^)]+)\)/);
        return match ? rootStyle.getPropertyValue(match[1]).trim() : cssVar;
      };

      setResolvedBarColor(getVarValue(barColor));
      setResolvedGridStroke(getVarValue('var(--border-color)'));
      setResolvedTickFill(getVarValue('var(--secondary-text)'));
      setResolvedTooltipBg(getVarValue('var(--card-bg)'));
      setResolvedTooltipBorder(getVarValue('var(--border-color)'));
      setResolvedTooltipText(getVarValue('var(--primary-text)'));
      // For cursor fill, Recharts expects a direct color value.
      // '--primary-bg-hover' might not be a defined variable, let's use a safer default or a more appropriate variable.
      // Using a semi-transparent version of a text or accent color is common for cursor.
      // Let's use a semi-transparent version of the resolvedTickFill or a new variable if available.
      // For now, I'll use a slightly more opaque version of the grid stroke, or a fixed light/dark color.
      // Or, better, use a variable like --tertiary-bg for the cursor fill.
      setResolvedCursorFill(getVarValue('var(--tertiary-bg)')); // Updated to use tertiary-bg for cursor
    }
  }, [theme, barColor]);

  if (!data || data.length === 0) {
    return (
      <div style={{ 
        color: resolvedTickFill || 'var(--secondary-text)', // Fallback if not resolved yet
        textAlign: 'center', 
        padding: 'var(--spacing-md)', // Assuming var(--spacing-md) is globally available
        height: 300, // Match chart height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        No data available
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={resolvedGridStroke} />
        <XAxis dataKey={xAxisKey} tick={{ fill: resolvedTickFill }} />
        <YAxis 
          label={{ 
            value: yAxisLabel, 
            angle: -90, 
            position: 'insideLeft', 
            fill: resolvedTickFill, 
            dy: yAxisLabel ? 40 : 0, // Adjust dy based on label presence
            style: { textAnchor: 'middle' }
          }} 
          tick={{ fill: resolvedTickFill }} 
        />
        <Tooltip
          contentStyle={{
            backgroundColor: resolvedTooltipBg,
            border: `1px solid ${resolvedTooltipBorder}`,
            borderRadius: 'var(--border-radius-md)', 
          }}
          itemStyle={{ color: resolvedTooltipText }}
          cursor={{ fill: resolvedCursorFill, fillOpacity: 0.6 }} // Added fillOpacity for cursor
        />
        <Legend wrapperStyle={{ color: resolvedTickFill, paddingTop: '10px' }}/>
        <Bar dataKey={yAxisKey} fill={resolvedBarColor} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ResponsiveBarChart;
