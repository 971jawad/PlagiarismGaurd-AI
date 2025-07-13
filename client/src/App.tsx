import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import Home from "@/pages/home";
import Features from "@/pages/features";
import Pricing from "@/pages/pricing";
import ApiDocs from "@/pages/api-docs";
import Support from "@/pages/support";
import About from "@/pages/about";
import Integrations from "@/pages/integrations";
import QATest from "@/pages/qa-test";
import NotFound from "@/pages/not-found";
import Documentation from "@/pages/docs";
import Contact from "@/pages/contact";
import SystemStatus from "@/pages/status";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Security from "@/pages/security";
import Compliance from "@/pages/compliance";
import Login from "@/pages/login";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/api-docs" component={ApiDocs} />
          <Route path="/support" component={Support} />
          <Route path="/about" component={About} />
          <Route path="/integrations" component={Integrations} />
          <Route path="/qa-test" component={QATest} />
          <Route path="/docs" component={Documentation} />
          <Route path="/contact" component={Contact} />
          <Route path="/status" component={SystemStatus} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/security" component={Security} />
          <Route path="/compliance" component={Compliance} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
