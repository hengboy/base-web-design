import * as React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      navLayout="around"
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-2',
        month: 'relative flex flex-col gap-4',
        month_caption: 'flex h-8 items-center justify-center px-9 whitespace-nowrap',
        caption_label: 'text-sm font-medium',
        nav: 'flex items-center gap-1',
        button_previous: cn(
          buttonVariants({ variant: 'outline' }),
          'absolute left-0 top-0 z-10 size-8 bg-transparent p-0 opacity-70 hover:opacity-100'
        ),
        button_next: cn(
          buttonVariants({ variant: 'outline' }),
          'absolute right-0 top-0 z-10 size-8 bg-transparent p-0 opacity-70 hover:opacity-100'
        ),
        month_grid: 'w-full border-collapse',
        weekdays: 'flex',
        weekday:
          'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
        week: 'mt-2 flex w-full',
        day: cn(
          'relative h-8 w-8 p-0 text-center text-sm focus-within:relative focus-within:z-20',
          props.mode === 'range'
            ? '[&.range_start]:rounded-l-md [&.range_start]:bg-accent [&.range_middle]:bg-accent [&.range_end]:rounded-r-md [&.range_end]:bg-accent first:[&.selected]:rounded-l-md last:[&.selected]:rounded-r-md'
            : '[&.selected]:rounded-md [&.selected>button]:bg-primary [&.selected>button]:text-primary-foreground [&.selected>button]:hover:bg-primary [&.selected>button]:hover:text-primary-foreground'
        ),
        day_button:
          'flex size-8 items-center justify-center rounded-md p-0 font-normal transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        range_start:
          'range_start [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground',
        range_end:
          'range_end [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground',
        selected: props.mode === 'range' ? 'selected' : 'selected',
        today: '[&>button]:bg-accent [&>button]:text-accent-foreground',
        outside:
          'outside text-muted-foreground opacity-50 [&>button]:text-muted-foreground',
        disabled: 'text-muted-foreground opacity-50 [&>button]:cursor-not-allowed',
        range_middle:
          'range_middle [&>button]:rounded-none [&>button]:bg-transparent [&>button]:text-accent-foreground [&>button]:hover:bg-transparent [&>button]:hover:text-accent-foreground',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className, ...props }) =>
          orientation === 'left' ? (
            <ChevronLeftIcon className={cn('size-4', className)} {...props} />
          ) : (
            <ChevronRightIcon className={cn('size-4', className)} {...props} />
          ),
      }}
      {...props}
    />
  )
}

export { Calendar }
