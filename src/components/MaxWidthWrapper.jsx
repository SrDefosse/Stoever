import { cn } from '@/lib/utils'

const MaxWidthWrapper = ({
  className,
  children
}) => {
  return (
    <div className={cn(
      'mx-auto w-full max-w-[1400px] px-2.5 md:px-2',
      className
    )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper 