import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

export function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [range, setRange] = useState<{ from: Date | undefined; to?: Date }>({ from: undefined })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Calendar 日历</h1>
        <p className="text-muted-foreground mt-1">日期选择器组件，支持单选、范围选择和禁用日期</p>
      </div>

      {/* 单日期选择 */}
      <Card>
        <CardHeader>
          <CardTitle>单日期选择</CardTitle>
          <CardDescription>点击选择一个日期</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </CardContent>
      </Card>

      {/* 范围选择 */}
      <Card>
        <CardHeader>
          <CardTitle>范围选择</CardTitle>
          <CardDescription>选择一个日期区间</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="range"
            selected={range}
            onSelect={(value) => setRange({ from: value?.from, to: value?.to })}
            className="rounded-md border"
          />
        </CardContent>
      </Card>

      {/* 禁用日期 */}
      <Card>
        <CardHeader>
          <CardTitle>禁用日期</CardTitle>
          <CardDescription>周末和指定日期不可选</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            disabled={(date) => {
              const day = date.getDay()
              return day === 0 || day === 6
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}
