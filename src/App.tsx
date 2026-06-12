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
import { ComponentsPage } from '@/pages/ComponentsPage'
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
              <Route path="/components" element={<ComponentsPage />} />
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
