import { type ComponentType, type HTMLAttributes, type ReactNode } from 'react'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Optional large Tabler icon to render as a 3-D watermark */
  BgIcon?: ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>
  bgIconSize?: number
  children: ReactNode
}

/**
 * Reusable glass-morphism card.
 * Wraps children in the shared glass-card style.
 * Pass a Tabler icon component via `BgIcon` to get the 3-D perspective watermark.
 */
export default function GlassCard({
  BgIcon,
  bgIconSize = 130,
  className = '',
  children,
  ...rest
}: GlassCardProps) {
  return (
    <div className={`glass-card${className ? ` ${className}` : ''}`} {...rest}>
      {BgIcon && (
        <BgIcon
          size={bgIconSize}
          className="glass-card__bg-icon"
          aria-hidden={true}
        />
      )}
      {children}
    </div>
  )
}
