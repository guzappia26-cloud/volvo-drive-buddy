import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComparativoSelectorPage from "./pages/ComparativoSelectorPage";
import ComparativoPage from "./pages/ComparativoPage";
import ComparativoNonPremiumPage from "./pages/ComparativoNonPremiumPage";
import ConfiguradorPage from "./pages/ConfiguradorPage";
import DadosTecnicosPage from "./pages/DadosTecnicosPage";
import HomeChargePage from "./pages/HomeChargePage";
import GestaoComercialPage from "./pages/GestaoComercialPage";
import ClienteDetalhePage from "./pages/ClienteDetalhePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comparativo" element={<ComparativoSelectorPage />} />
          <Route path="/comparativo/premium" element={<ComparativoPage />} />
          <Route path="/comparativo/non-premium" element={<ComparativoNonPremiumPage />} />
          <Route path="/configurador" element={<ConfiguradorPage />} />
          <Route path="/dados-tecnicos" element={<DadosTecnicosPage />} />
          <Route path="/home-charge" element={<HomeChargePage />} />
          <Route path="/gestao-comercial" element={<GestaoComercialPage />} />
          <Route path="/gestao-comercial/cliente/:id" element={<ClienteDetalhePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
