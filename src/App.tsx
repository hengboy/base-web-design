import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/lib/theme'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AppLayout } from '@/components/layout/AppLayout'
import { Dashboard } from '@/pages/Dashboard'
import { ButtonsPage } from '@/pages/ButtonsPage'
import { FormsPage } from '@/pages/FormsPage'
import { FeedbackPage } from '@/pages/FeedbackPage'
import { NavigationPage } from '@/pages/NavigationPage'
import { DataDisplayPage } from '@/pages/DataDisplayPage'
import { OverlaysPage } from '@/pages/OverlaysPage'
import { MenusPage } from '@/pages/MenusPage'
import { LayoutPage } from '@/pages/LayoutPage'
import { CalendarPage } from '@/pages/CalendarPage'
import { CommandPage } from '@/pages/CommandPage'
import { DrawerPage } from '@/pages/DrawerPage'
import { InputOTPPage } from '@/pages/InputOTPPage'
import { CarouselPage } from '@/pages/CarouselPage'
import { StepperPage } from '@/pages/StepperPage'
import { TimelinePage } from '@/pages/TimelinePage'
import { TreePage } from '@/pages/TreePage'
import { ChartsPage } from '@/pages/ChartsPage'
import { AIChatPage } from '@/pages/AIChatPage'
import { Toaster } from '@/components/ui/sonner'

export default function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/buttons" element={<ButtonsPage />} />
              <Route path="/forms" element={<FormsPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/navigation" element={<NavigationPage />} />
              <Route path="/data-display" element={<DataDisplayPage />} />
              <Route path="/overlays" element={<OverlaysPage />} />
              <Route path="/menus" element={<MenusPage />} />
              <Route path="/layout" element={<LayoutPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/command" element={<CommandPage />} />
              <Route path="/drawer" element={<DrawerPage />} />
              <Route path="/input-otp" element={<InputOTPPage />} />
              <Route path="/carousel" element={<CarouselPage />} />
              <Route path="/stepper" element={<StepperPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/tree" element={<TreePage />} />
              <Route path="/charts" element={<ChartsPage />} />
              <Route path="/ai-chat" element={<AIChatPage />} />
            </Route>
          </Routes>
          <Toaster />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  )
}
