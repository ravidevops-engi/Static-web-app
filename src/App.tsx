import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import Terraform from "./pages/Terraform";
import Azure from "./pages/Azure";
import AzureDevOps from "./pages/AzureDevOps";
import Docker from "./pages/Docker";
import Kubernetes from "./pages/Kubernetes";
import Git from "./pages/Git";
import AzureMonitor from "./pages/AzureMonitor";
import Linux from "./pages/Linux";
import Behavioral from "./pages/Behavioral";
import Miscellaneous from "./pages/Miscellaneous";
import FinOps from "./pages/FinOps";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="devops-guide-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* <BrowserRouter basename="/DevOps-Interview-Guide/"> */}
        {/* <Router basename="/DevOps-Interview-Guide/"> */}
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/terraform" element={<Terraform />} />
              <Route path="/azure" element={<Azure />} />
              <Route path="/azure-dev-ops" element={<Navigate to="/azure-devops" replace />} />
              <Route path="/azure-devops" element={<AzureDevOps />} />
              <Route path="/docker" element={<Docker />} />
              <Route path="/kubernetes" element={<Kubernetes />} />
              <Route path="/git" element={<Git />} />
              <Route path="/azure-monitor" element={<AzureMonitor />} />
              <Route path="/linux" element={<Linux />} />
              <Route path="/behavioral" element={<Behavioral />} />
              <Route path="/miscellaneous" element={<Miscellaneous />} />
              <Route path="/fin-ops" element={<Navigate to="/finops" replace />} />
              <Route path="/finops" element={<FinOps />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
        {/* </BrowserRouter> */}
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
