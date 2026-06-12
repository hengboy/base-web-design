import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { REGEXP_ONLY_DIGITS } from 'input-otp'

export function InputOTPPage() {
  const [otpValue, setOtpValue] = useState('')
  const [mixedValue, setMixedValue] = useState('')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Input OTP 验证码输入</h1>
        <p className="text-muted-foreground mt-1">一次性密码输入框，支持数字和混合模式</p>
      </div>

      {/* 6 位数字验证码 */}
      <Card>
        <CardHeader>
          <CardTitle>数字验证码</CardTitle>
          <CardDescription>6 位纯数字输入</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
              value={otpValue}
              onChange={setOtpValue}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            {otpValue.length === 6 && (
              <Badge variant="default">已输入: {otpValue}</Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 4 位短验证码 */}
      <Card>
        <CardHeader>
          <CardTitle>4 位短验证码</CardTitle>
          <CardDescription>适用于短信验证码场景</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </CardContent>
      </Card>

      {/* 字母+数字混合模式 */}
      <Card>
        <CardHeader>
          <CardTitle>混合模式</CardTitle>
          <CardDescription>支持字母和数字的组合输入</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <InputOTP
              maxLength={6}
              value={mixedValue}
              onChange={setMixedValue}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            {mixedValue.length === 6 && (
              <Badge variant="secondary">已输入: {mixedValue}</Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 带验证的完整示例 */}
      <Card>
        <CardHeader>
          <CardTitle>带验证的示例</CardTitle>
          <CardDescription>输入 123456 验证成功</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button className="w-full">验证</Button>
        </CardContent>
      </Card>
    </div>
  )
}
