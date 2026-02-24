import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppLayout } from './components/layout/AppLayout';
import { Loader2 } from 'lucide-react';

// Initialize QueryClient for performant state management
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Lazy load pages for performance optimization (Code Splitting)
const Landing = lazy(() => import('./pages/Landing'));
const TheLab = lazy(() => import('./pages/TheLab'));
const TheWork = lazy(() => import('./pages/TheWork'));
const TheNetwork = lazy(() => import('./pages/TheNetwork'));
const ThePlaybook = lazy(() => import('./pages/ThePlaybook'));

/**
 * PageLoader Fallback
 * Accessible, themed fallback for lazy-loaded routes.
 */
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-gw-blue">
    <Loader2 className="animate-spin" size={32} />
    <span className="text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">
      Loading Workspace...
    </span>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppLayout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/the-lab" element={<TheLab />} />
              <Route path="/the-work" element={<TheWork />} />
              <Route path="/the-network" element={<TheNetwork />} />
              <Route path="/the-playbook" element={<ThePlaybook />} />
            </Routes>
          </Suspense>
        </AppLayout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
