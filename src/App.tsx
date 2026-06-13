import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/lib/theme'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AppLayout } from '@/components/layout/AppLayout'
import { Dashboard } from '@/pages/Dashboard'
import { ChartsPage } from '@/pages/ChartsPage'
import { Toaster } from '@/components/ui/sonner'
import { ComponentDemoPage } from '@/pages/components/ComponentDemoPage'
import { componentPageEntries } from '@/pages/components/registry'

export default function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Dashboard />} />
              {componentPageEntries.map((entry) => (
                <Route
                  key={entry.slug}
                  path={`/${entry.slug}`}
                  element={<ComponentDemoPage slug={entry.slug} />}
                />
              ))}
              <Route path="/charts" element={<ChartsPage />} />
            </Route>
          </Routes>
          <Toaster position="top-right" />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  )
}
