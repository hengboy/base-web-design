import * as React from 'react'

import { cn } from '@/lib/utils'

function Stepper({
  className,
  orientation = 'horizontal',
  children,
  ...props
}: React.ComponentProps<'div'> & { orientation?: 'horizontal' | 'vertical' }) {
  return (
    <div
      data-slot="stepper"
      data-orientation={orientation}
      className={cn(
        'flex',
        orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        className
      )}
      role="group"
      aria-label="Stepper"
      {...props}
    >
      {children}
    </div>
  )
}

function StepperItem({
  className,
  step,
  active = false,
  completed = false,
  disabled = false,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  step: number
  active?: boolean
  completed?: boolean
  disabled?: boolean
}) {
  return (
    <div
      data-slot="stepper-item"
      data-active={active}
      data-completed={completed}
      data-disabled={disabled}
      className={cn(
        'flex items-center gap-3 flex-1',
        active && 'text-primary',
        completed && 'text-primary',
        disabled && 'text-muted-foreground opacity-50',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors',
          completed && 'bg-primary border-primary text-primary-foreground',
          active && 'border-primary text-primary',
          !active && !completed && 'border-muted-foreground/30 text-muted-foreground',
          disabled && 'border-muted-foreground/20'
        )}
      >
        {completed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          step
        )}
      </div>
      {children}
    </div>
  )
}

function StepperSeparator({
  className,
  orientation = 'horizontal',
  ...props
}: React.ComponentProps<'div'> & { orientation?: 'horizontal' | 'vertical' }) {
  return (
    <div
      data-slot="stepper-separator"
      className={cn(
        'bg-muted-foreground/30 flex-1 shrink-0',
        orientation === 'horizontal' ? 'h-0.5 mx-2' : 'w-0.5 my-2 ml-4',
        className
      )}
      {...props}
    />
  )
}

function StepperTitle({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="stepper-title"
      className={cn('text-sm font-medium', className)}
      {...props}
    />
  )
}

function StepperDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="stepper-description"
      className={cn('text-xs text-muted-foreground', className)}
      {...props}
    />
  )
}

export { Stepper, StepperItem, StepperSeparator, StepperTitle, StepperDescription }
