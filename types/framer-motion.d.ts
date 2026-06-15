// Framer Motion v11 removed standard HTML props (className, style, etc.) from
// the TypeScript signatures of motion components, but they still work at runtime.
// This augmentation restores className and style on MotionProps so existing code
// compiles without changes.
import 'framer-motion'

declare module 'framer-motion' {
  interface MotionProps {
    className?: string
    style?: React.CSSProperties
  }
}