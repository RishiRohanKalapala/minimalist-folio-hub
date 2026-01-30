import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AbhayaDocs from "./pages/AbhayaDocs";
import NotFound from "./pages/NotFound";
import Agency from "./pages/Agency";
import CaseStudies from "./pages/CaseStudies";
import CaseStudies2026 from "./pages/CaseStudies2026";
import AllProjects from "./pages/AllProjects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies-2026" element={<CaseStudies2026 />} />
          <Route path="/abhaya-docs" element={<AbhayaDocs />} />
          <Route path="/agency" element={<Agency />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
