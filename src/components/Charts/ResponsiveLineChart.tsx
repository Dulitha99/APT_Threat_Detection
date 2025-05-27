import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';

interface ResponsiveLineChartProps {
  data: any[];
  xAxisKey: string;
  yAxisKey: string;
  yAxisLabel?: string;
  lineColor?: string; // CSS variable string, e.g., 'var(--accent-color)'
}

const ResponsiveLineChart: React.FC<ResponsiveLineChartProps> = ({
  data,
  xAxisKey,
  yAxisKey,
  yAxisLabel = '',
  lineColor = 'var(--accent-color)', // Default to accent color
}) => {
  const { theme } = useTheme(); // To trigger re-render on theme change

  const [resolvedLineColor, setResolvedLineColor] = useState('');
  const [resolvedDotStrokeColor, setResolvedDotStrokeColor] = useState('');
  const [resolvedGridStroke, setResolvedGridStroke] = useState('');
  const [resolvedTickFill, setResolvedTickFill] = useState('');
  const [resolvedTooltipBg, setResolvedTooltipBg] = useState('');
  const [resolvedTooltipBorder, setResolvedTooltipBorder] = useState('');
  const [resolvedTooltipText, setResolvedTooltipText] = useState('');
  const [resolvedCursorStroke, setResolvedCursorStroke] = useState(''); // Changed from fill for line chart cursor

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rootStyle = getComputedStyle(document.documentElement);
      
      const getVarValue = (cssVar: string) => {
        const match = cssVar.match(/var\(([^)]+)\)/);
        return match ? rootStyle.getPropertyValue(match[1]).trim() : cssVar;
      };

      setResolvedLineColor(getVarValue(lineColor));
      setResolvedDotStrokeColor(getVarValue('var(--primary-bg)')); // For dot stroke against line
      setResolvedGridStroke(getVarValue('var(--border-color)'));
      setResolvedTickFill(getVarValue('var(--secondary-text)'));
      setResolvedTooltipBg(getVarValue('var(--card-bg)'));
      setResolvedTooltipBorder(getVarValue('var(--border-color)'));
      setResolvedTooltipText(getVarValue('var(--primary-text)'));
      setResolvedCursorStroke(getVarValue('var(--tertiary-bg)')); // Cursor for line chart is a stroke
    }
  }, [theme, lineColor]);

  if (!data || data.length === 0) {
    return (
      <div style={{ 
        color: resolvedTickFill || 'var(--secondary-text)', 
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
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={resolvedGridStroke} />
        <XAxis dataKey={xAxisKey} tick={{ fill: resolvedTickFill }} />
        <YAxis 
          label={{ 
            value: yAxisLabel, 
            angle: -90, 
            position: 'insideLeft', 
            fill: resolvedTickFill, 
            dy: yAxisLabel ? 40 : 0,
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
          cursor={{ stroke: resolvedCursorStroke, strokeWidth: 1 }} // Cursor for line chart
        />
        <Legend wrapperStyle={{ color: resolvedTickFill, paddingTop: '10px' }}/>
        <Line 
          type="monotone" 
          dataKey={yAxisKey} 
          stroke={resolvedLineColor} 
          strokeWidth={2}
          dot={{ 
            fill: resolvedLineColor, 
            stroke: resolvedDotStrokeColor, 
            strokeWidth: 2, 
            r: 4 
          }}
          activeDot={{ 
            r: 6, 
            fill: resolvedLineColor, 
            stroke: resolvedDotStrokeColor,
            strokeWidth: 2
          }} 
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ResponsiveLineChart;
