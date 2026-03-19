import React from 'react';
import { useCountUp } from '@/hooks/useScrollAnimation';

interface StatCounterProps {
  /** The full label string, e.g. "21.6M+ Kilos Washed" or "750K+ Happy Families" */
  label: string;
  /** Extra container classNames */
  className?: string;
}

/**
 * Parses a label like "750K+ Happy Families" into:
 *   prefix = ""  value = 750  suffix = "K+ Happy Families"
 * Falls back to plain text if no integer is found.
 */
function parseLabelNumber(label: string): {
  prefix: string;
  value: number;
  suffix: string;
} | null {
  const match = label.match(/^(.*?)(\d+)(.*)/);
  if (!match) return null;
  return {
    prefix: match[1],
    value: parseInt(match[2], 10),
    suffix: match[3],
  };
}

const StatCounter: React.FC<StatCounterProps> = ({ label, className = '' }) => {
  const parsed = parseLabelNumber(label);
  const target = parsed ? parsed.value : 0;
  const { ref, count } = useCountUp(target, 1800);

  if (!parsed) {
    // No number found – render plain text
    return (
      <p className={`text-sm md:text-base font-bold text-foreground leading-tight ${className}`}>
        {label}
      </p>
    );
  }

  return (
    <p
      ref={ref as React.RefObject<HTMLParagraphElement>}
      className={`text-sm md:text-base font-bold text-foreground leading-tight ${className}`}
    >
      {parsed.prefix}
      <span className="tabular-nums">{count}</span>
      {parsed.suffix}
    </p>
  );
};

export default StatCounter;
