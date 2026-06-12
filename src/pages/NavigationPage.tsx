import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export function NavigationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Navigation</h1>
        <p className="text-muted-foreground mt-1">
          Breadcrumb 面包屑、Tabs 标签页、Pagination 分页导航
        </p>
      </div>

      {/* Breadcrumb */}
      <Card>
        <CardHeader>
          <CardTitle>Breadcrumb 面包屑</CardTitle>
          <CardDescription>层级导航路径</CardDescription>
        </CardHeader>
        <CardContent>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">首页</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">组件</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>导航</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="mt-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="/">主页</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink href="/settings">设置</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink href="/settings/account">账户</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>安全</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Tabs 标签页</CardTitle>
          <CardDescription>切换不同内容面板</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-full">
            <TabsList>
              <TabsTrigger value="account">账户</TabsTrigger>
              <TabsTrigger value="password">密码</TabsTrigger>
              <TabsTrigger value="notifications">通知</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="mt-4 space-y-4">
              <p className="text-sm text-muted-foreground">
                管理您的账户设置和个人信息。您可以修改昵称、邮箱和头像。
              </p>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">账户信息</h3>
                <p className="mt-1 text-sm text-muted-foreground">用户名: admin@example.com</p>
                <p className="text-sm text-muted-foreground">注册时间: 2024-01-15</p>
              </div>
            </TabsContent>
            <TabsContent value="password" className="mt-4 space-y-4">
              <p className="text-sm text-muted-foreground">
                修改您的登录密码。请确保新密码足够安全。
              </p>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">密码安全</h3>
                <p className="mt-1 text-sm text-muted-foreground">上次修改: 30 天前</p>
                <p className="text-sm text-muted-foreground">强度: 中等</p>
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="mt-4 space-y-4">
              <p className="text-sm text-muted-foreground">
                设置您希望接收的通知类型和方式。
              </p>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">通知设置</h3>
                <p className="mt-1 text-sm text-muted-foreground">邮件通知: 已开启</p>
                <p className="text-sm text-muted-foreground">推送通知: 已关闭</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Pagination */}
      <Card>
        <CardHeader>
          <CardTitle>Pagination 分页</CardTitle>
          <CardDescription>页码导航</CardDescription>
        </CardHeader>
        <CardContent>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>

      {/* Stepper-like Navigation */}
      <Card>
        <CardHeader>
          <CardTitle>步骤导航</CardTitle>
          <CardDescription>使用 Tabs 模拟多步骤流程</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="step1" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="step1">① 基本信息</TabsTrigger>
              <TabsTrigger value="step2">② 联系方式</TabsTrigger>
              <TabsTrigger value="step3">③ 确认</TabsTrigger>
              <TabsTrigger value="step4">④ 完成</TabsTrigger>
            </TabsList>
            <TabsContent value="step1" className="mt-4">
              <div className="rounded-lg border p-6 text-center">
                <h3 className="text-lg font-medium">步骤 1：基本信息</h3>
                <p className="mt-2 text-sm text-muted-foreground">请填写姓名、年龄等基本信息</p>
              </div>
            </TabsContent>
            <TabsContent value="step2" className="mt-4">
              <div className="rounded-lg border p-6 text-center">
                <h3 className="text-lg font-medium">步骤 2：联系方式</h3>
                <p className="mt-2 text-sm text-muted-foreground">请填写邮箱、手机号等联系方式</p>
              </div>
            </TabsContent>
            <TabsContent value="step3" className="mt-4">
              <div className="rounded-lg border p-6 text-center">
                <h3 className="text-lg font-medium">步骤 3：确认信息</h3>
                <p className="mt-2 text-sm text-muted-foreground">请确认您填写的信息是否正确</p>
              </div>
            </TabsContent>
            <TabsContent value="step4" className="mt-4">
              <div className="rounded-lg border border-green-500 p-6 text-center">
                <h3 className="text-lg font-medium text-green-600">步骤 4：提交成功！</h3>
                <p className="mt-2 text-sm text-muted-foreground">您的信息已成功提交</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
