import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';

// Data items are expected to have a 'fill' property with a resolved color string
export interface PieChartDataItem { // Exporting for use in parent components
  name: string;
  value: number;
  fill: string; // e.g., '#FF8042', must be a resolved color string
}

interface ResponsivePieChartProps {
  data: PieChartDataItem[];
}

const ResponsivePieChart: React.FC<ResponsivePieChartProps> = ({ data }) => {
  const { theme } = useTheme(); // To trigger re-render on theme change

  const [resolvedLegendFill, setResolvedLegendFill] = useState('');
  const [resolvedTooltipBg, setResolvedTooltipBg] = useState('');
  const [resolvedTooltipBorder, setResolvedTooltipBorder] = useState('');
  const [resolvedTooltipText, setResolvedTooltipText] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rootStyle = getComputedStyle(document.documentElement);
      
      const getVarValue = (cssVar: string) => {
        const match = cssVar.match(/var\(([^)]+)\)/);
        return match ? rootStyle.getPropertyValue(match[1]).trim() : cssVar;
      };

      setResolvedLegendFill(getVarValue('var(--secondary-text)')); // For legend text
      setResolvedTooltipBg(getVarValue('var(--card-bg)'));
      setResolvedTooltipBorder(getVarValue('var(--border-color)'));
      setResolvedTooltipText(getVarValue('var(--primary-text)'));
    }
  }, [theme]);

  if (!data || data.length === 0) {
    return (
      <div style={{ 
        color: resolvedLegendFill || 'var(--secondary-text)', 
        textAlign: 'center', 
        padding: 'var(--spacing-md)',
        height: 300, 
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
      <PieChart margin={{ top: 5, right: 5, left: 5, bottom: 20 }}> {/* Increased bottom margin for legend */}
        <Tooltip
          contentStyle={{
            backgroundColor: resolvedTooltipBg,
            border: `1px solid ${resolvedTooltipBorder}`,
            borderRadius: 'var(--border-radius-md)',
          }}
          itemStyle={{ color: resolvedTooltipText }}
        />
        <Legend 
          wrapperStyle={{ 
            color: resolvedLegendFill, 
            paddingTop: '10px' // Default Recharts legend is often too close to chart
          }} 
        />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          // Example for a simple label:
          // label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          outerRadius={80} // Adjust as needed
          dataKey="value"
        >
          {data.map((entry, index) => (
            // entry.fill must be a valid color string (e.g. hex, rgb)
            <Cell key={`cell-${index}`} fill={entry.fill} stroke={resolvedTooltipBg} strokeWidth={entry.value > 0 ? 1 : 0} /> // Adding a subtle border, only if value > 0
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ResponsivePieChart;
