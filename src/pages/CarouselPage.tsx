import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'

const colors = [
  'bg-blue-500/10 text-blue-600',
  'bg-emerald-500/10 text-emerald-600',
  'bg-violet-500/10 text-violet-600',
  'bg-amber-500/10 text-amber-600',
  'bg-rose-500/10 text-rose-600',
]

export function CarouselPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Carousel 轮播</h1>
        <p className="text-muted-foreground mt-1">使用 Embla Carousel 构建的轮播组件</p>
      </div>

      {/* 基础轮播 */}
      <Card>
        <CardHeader>
          <CardTitle>基础用法</CardTitle>
          <CardDescription>带前后箭头的单卡片轮播</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>

      {/* 多卡片同时展示 */}
      <Card>
        <CardHeader>
          <CardTitle>多卡片展示</CardTitle>
          <CardDescription>每次展示 3 个卡片项</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel className="w-full max-w-xl mx-auto" opts={{ align: 'start' }}>
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className={`flex aspect-square items-center justify-center rounded-lg border p-6 ${colors[index % colors.length]}`}>
                    <span className="text-2xl font-semibold">卡片 {index + 1}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>

      {/* 带指示器的轮播 */}
      <Card>
        <CardHeader>
          <CardTitle>带指示器</CardTitle>
          <CardDescription>底部圆点指示器展示当前位置</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className={`flex aspect-video items-center justify-center rounded-lg border p-8 ${colors[index % colors.length]}`}>
                    <div className="text-center space-y-2">
                      <span className="text-4xl font-bold">{index + 1}</span>
                      <p className="text-sm text-muted-foreground">Slide {index + 1}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2, 3].map((i) => (
              <Badge key={i} variant="outline" className="w-2 h-2 rounded-full p-0" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
