import * as React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts'

const lineData = [
  { month: '1月', users: 400, orders: 240 },
  { month: '2月', users: 300, orders: 139 },
  { month: '3月', users: 500, orders: 380 },
  { month: '4月', users: 280, orders: 390 },
  { month: '5月', users: 590, orders: 480 },
  { month: '6月', users: 730, orders: 530 },
]

const barData = [
  { name: 'React', value: 4200 },
  { name: 'Vue', value: 3100 },
  { name: 'Angular', value: 2200 },
  { name: 'Svelte', value: 1800 },
  { name: 'Solid', value: 1200 },
]

const pieData = [
  { name: '桌面端', value: 55 },
  { name: '移动端', value: 30 },
  { name: '平板', value: 15 },
]

// 读取 CSS 变量解析为 SVG 可用的颜色值
function useChartColors() {
  return React.useMemo(() => {
    if (typeof window === 'undefined') return []
    const root = document.documentElement
    const style = getComputedStyle(root)
    return [
      style.getPropertyValue('--chart-1').trim(),
      style.getPropertyValue('--chart-2').trim(),
      style.getPropertyValue('--chart-3').trim(),
      style.getPropertyValue('--chart-4').trim(),
      style.getPropertyValue('--chart-5').trim(),
    ].filter(Boolean)
  }, [])
}

export function ChartsPage() {
  const colors = useChartColors()

  const tooltipStyle: React.CSSProperties = {
    backgroundColor: 'hsl(var(--card))',
    border: '1px solid hsl(var(--border))',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  }

  const gridStroke = 'hsl(var(--border))'
  const axisStroke = 'hsl(var(--muted-foreground))'

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Charts</h1>
        <p className="text-muted-foreground mt-1">
          使用 Recharts 构建的折线图、柱状图、饼图和面积图
        </p>
      </div>

      {/* Line Chart */}
      <Card>
        <CardHeader>
          <CardTitle>折线图</CardTitle>
          <CardDescription>用户增长与订单趋势</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-visible" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%" style={{ overflow: 'visible' }}>
              <LineChart data={lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} opacity={0.5} />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: axisStroke }} />
                <YAxis tick={{ fontSize: 12, fill: axisStroke }} />
                <Tooltip
                  wrapperStyle={{ zIndex: 9999 }}
                  contentStyle={tooltipStyle}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                  labelStyle={{ color: 'hsl(var(--muted-foreground))', marginBottom: 4 }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="users"
                  name="用户"
                  stroke={colors[0] || 'oklch(0.646 0.222 41.116)'}
                  strokeWidth={2.5}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  name="订单"
                  stroke={colors[1] || 'oklch(0.6 0.118 184.704)'}
                  strokeWidth={2.5}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>柱状图</CardTitle>
          <CardDescription>前端框架受欢迎程度</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-visible" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%" style={{ overflow: 'visible' }}>
              <BarChart data={barData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} opacity={0.5} />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: axisStroke }} />
                <YAxis tick={{ fontSize: 12, fill: axisStroke }} />
                <Tooltip
                  wrapperStyle={{ zIndex: 100 }}
                  cursor={{ fill: axisStroke, opacity: 0.1 }}
                  contentStyle={tooltipStyle}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                  labelStyle={{ color: 'hsl(var(--muted-foreground))', marginBottom: 4 }}
                />
                <Bar
                  dataKey="value"
                  name="Star 数"
                  fill={colors[0] || 'oklch(0.646 0.222 41.116)'}
                  radius={[6, 6, 0, 0]}
                  maxBarSize={60}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Pie + Area Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>饼图</CardTitle>
            <CardDescription>设备分布</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full overflow-visible" style={{ height: 250 }}>
              <ResponsiveContainer width="100%" height="100%" style={{ overflow: 'visible' }}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length] || `oklch(0.646 0.222 41.116)`}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    wrapperStyle={{ zIndex: 9999 }}
                    contentStyle={tooltipStyle}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 text-xs pt-2">
              {pieData.map((item, i) => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <span
                    className="size-2.5 rounded-full"
                    style={{
                      backgroundColor: colors[i] || 'oklch(0.646 0.222 41.116)',
                    }}
                  />
                  <span>{item.name} {item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>面积图</CardTitle>
            <CardDescription>周访问量变化</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full overflow-visible" style={{ height: 250 }}>
              <ResponsiveContainer width="100%" height="100%" style={{ overflow: 'visible' }}>
                <AreaChart data={lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} opacity={0.5} />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: axisStroke }} />
                  <YAxis tick={{ fontSize: 12, fill: axisStroke }} />
                  <Tooltip
                    wrapperStyle={{ zIndex: 9999 }}
                    contentStyle={tooltipStyle}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                    labelStyle={{ color: 'hsl(var(--muted-foreground))', marginBottom: 4 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="users"
                    name="访问量"
                    stroke={colors[2] || 'oklch(0.398 0.07 227.392)'}
                    strokeWidth={2}
                    fill={colors[2] || 'oklch(0.398 0.07 227.392)'}
                    fillOpacity={0.12}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
