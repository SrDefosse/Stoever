// import { cn } from '@/lib/utils' // Remove cn import

const MaxWidthWrapper = ({
  className,
  children
}) => {
  // Combine base classes with the optional className prop using template literals
  const combinedClassName = `mx-auto w-full max-w-[1400px] px-2.5 md:px-2 ${className || ''}`.trim();

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper; 