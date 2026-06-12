import * as React from 'react'

import { cn } from '@/lib/utils'

function Timeline({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="timeline"
      className={cn('relative flex flex-col', className)}
      {...props}
    >
      {children}
    </div>
  )
}

function TimelineItem({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="timeline-item"
      className={cn('flex gap-4 pb-6 last:pb-0', className)}
      {...props}
    >
      {children}
    </div>
  )
}

function TimelineDot({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive'
}) {
  const variantClasses = {
    default: 'bg-muted-foreground',
    primary: 'bg-primary',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    destructive: 'bg-destructive',
  }

  return (
    <div
      data-slot="timeline-dot"
      data-variant={variant}
      className={cn(
        'mt-1.5 size-3 shrink-0 rounded-full ring-4 ring-background',
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
}

function TimelineHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="timeline-header"
      className={cn('flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </div>
  )
}

function TimelineTitle({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="timeline-title"
      className={cn('text-sm font-medium', className)}
      {...props}
    />
  )
}

function TimelineDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="timeline-description"
      className={cn('mt-1 text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

function TimelineBody({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="timeline-body"
      className={cn('flex-1 pt-1 text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </div>
  )
}

function TimelineSeparator({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="timeline-separator"
      className={cn(
        'absolute left-1.5 ml-px h-full w-0.5 bg-border -translate-x-1/2',
        className
      )}
      {...props}
    />
  )
}

export {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
  TimelineBody,
  TimelineSeparator,
}
