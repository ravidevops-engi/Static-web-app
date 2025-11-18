import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchDialog } from "@/components/SearchDialog";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center gap-4 px-4">
              <SidebarTrigger className="hover:bg-accent transition-smooth" />
              <div className="flex-1 flex items-center justify-between gap-4">
                <div className="hidden md:block">
                  <h1 className="text-lg font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    DevOps Interview Guide
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <SearchDialog />
                  <ThemeToggle />
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-accent transition-smooth"
                  >
                    <a
                      href="https://github.com/hrutviatri/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t bg-background py-6">
            <div className="container px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-muted-foreground">
                  © 2025 DevOps Interview Guide. All rights reserved.
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/hrutviatri/"
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hrutviatri/"
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  {/* <a
                    href="https://twitter.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a> */}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
