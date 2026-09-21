import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type GlowCursorProps = Omit<HTMLAttributes<HTMLDivElement>, "color"> & {
  color?: string;
  secondaryColor?: string;
  trailLength?: number;
  trailWidth?: number;
  trailTaper?: number;
  followSpeed?: number;
  glowIntensity?: number;
  glowSpread?: number;
  hotspot?: number;
  brightness?: number;
  opacity?: number;
  pulseSpeed?: number;
  noiseStrength?: number;
  idleFade?: boolean;
  idleTimeout?: number;
  fadeDuration?: number;
  blendMode?: "screen" | "normal" | CSSProperties["mixBlendMode"];
  maxDevicePixelRatio?: number;
  enabled?: boolean;
  children?: ReactNode;
};

declare function GlowCursor(props: GlowCursorProps): import("react").ReactElement;

export default GlowCursor;
