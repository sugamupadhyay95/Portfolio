import type { HTMLAttributes } from "react";

export type DotFieldProps = HTMLAttributes<HTMLDivElement> & {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
};

declare const DotField: import("react").MemoExoticComponent<
  (props: DotFieldProps) => import("react").ReactElement | null
>;

export default DotField;
