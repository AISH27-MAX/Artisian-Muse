import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import { ArtisanLayout } from "@/components/ArtisanLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import StorytellerStudio from "./pages/StorytellerStudio";
import MarketingAssistant from "./pages/MarketingAssistant";
import AudienceInsights from "./pages/AudienceInsights";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ArtisanLayout>
              <Dashboard />
            </ArtisanLayout>
          } />
          <Route path="/storyteller" element={
            <ArtisanLayout>
              <StorytellerStudio />
            </ArtisanLayout>
          } />
          <Route path="/marketing" element={
            <ArtisanLayout>
              <MarketingAssistant />
            </ArtisanLayout>
          } />
          <Route path="/insights" element={
            <ArtisanLayout>
              <AudienceInsights />
            </ArtisanLayout>
          } />
          <Route path="/profile" element={
            <ArtisanLayout>
              <Profile />
            </ArtisanLayout>
          } />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
