import { ReactNode, CSSProperties, MouseEventHandler } from 'react'

type Variant = 'primary' | 'secondary'

interface BaseProps {
  variant?: Variant
  icon?: ReactNode
  children: ReactNode
  className?: string
  style?: CSSProperties
  tabIndex?: number
  'aria-label'?: string
  'aria-disabled'?: boolean | 'true' | 'false'
}

interface AnchorProps extends BaseProps {
  href: string
  target?: string
  rel?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

interface ButtonProps extends BaseProps {
  href?: never
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

type Props = AnchorProps | ButtonProps

export default function Button({ variant = 'primary', icon, children, className, style, tabIndex, 'aria-label': ariaLabel, 'aria-disabled': ariaDisabled, ...rest }: Props) {
  const cls = `btn--${variant}${className ? ` ${className}` : ''}`

  if ('href' in rest) {
    const { href, target, rel, onClick } = rest as AnchorProps
    return (
      <a href={href} className={cls} style={style} tabIndex={tabIndex} target={target} rel={rel} onClick={onClick} aria-label={ariaLabel} aria-disabled={ariaDisabled}>
        {icon}{children}
      </a>
    )
  }

  const { type = 'button', disabled, onClick } = rest as ButtonProps
  return (
    <button className={cls} style={style} tabIndex={tabIndex} type={type} disabled={disabled} onClick={onClick} aria-label={ariaLabel}>
      {icon}{children}
    </button>
  )
}
