import { Book, Code, Cloud, Container, Box, Server, Home, GitBranch, Activity, Terminal, Users, Boxes, DollarSign } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Terraform",
    url: "/terraform",
    icon: Code,
  },
  {
    title: "Azure Core",
    url: "/azure",
    icon: Cloud,
  },
  {
    title: "Azure DevOps",
    url: "/azure-devops",
    icon: Server,
  },
  {
    title: "Docker",
    url: "/docker",
    icon: Container,
  },
  {
    title: "Kubernetes",
    url: "/kubernetes",
    icon: Box,
  },
  {
    title: "Git",
    url: "/git",
    icon: GitBranch,
  },
  {
    title: "Azure Monitor",
    url: "/azure-monitor",
    icon: Activity,
  },
  {
    title: "Linux",
    url: "/linux",
    icon: Terminal,
  },
  {
    title: "Behavioral/HR",
    url: "/behavioral",
    icon: Users,
  },
  {
    title: "Miscellaneous",
    url: "/miscellaneous",
    icon: Boxes,
  },
  {
    title: "FinOps",
    url: "/finops",
    icon: DollarSign,
  },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold">
            {open && <Book className="mr-2 h-4 w-4 inline" />}
            Documentation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <NavLink
                    to={item.url}
                    end
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2 transition-smooth ${
                        isActive
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-accent"
                      }`
                    }
                  >
                    <item.icon className="h-4 w-4" />
                    {open && <span>{item.title}</span>}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
