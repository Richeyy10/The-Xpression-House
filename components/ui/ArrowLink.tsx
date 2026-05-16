import { ReactNode } from 'react'
import { IconArrowRight } from '@tabler/icons-react'

interface ArrowLinkProps {
  href?: string
  children: ReactNode
  className?: string
}

export default function ArrowLink({ href = '#', children, className }: ArrowLinkProps) {
  return (
    <a href={href} className={`link--arrow${className ? ` ${className}` : ''}`}>
      {children} <IconArrowRight size={14} aria-hidden />
    </a>
  )
}
