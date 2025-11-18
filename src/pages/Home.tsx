import React, { useEffect, useState } from "react";
import {
  Code,
  Cloud,
  Container,
  Box,
  Server,
  ArrowRight,
  BookOpen,
  GitBranch,
  Monitor,
  Cpu,
  FileText,
  DollarSign,
  Grid,
  Database,
  Terminal,
  ShieldCheck,
  Settings,
  Network,
  Layers,
  Activity,
  Wrench,
  Bug,
  Key,
  Globe,
  HardDrive,
  Gauge,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const topics = [
  {
    title: "Terraform",
    description: "Infrastructure as Code - Master Terraform basics, state management, modules, and best practices",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    link: "/terraform",
  },
  {
    title: "Azure Core",
    description: "Cloud Computing - Azure fundamentals, services, networking, and security concepts",
    icon: Cloud,
    color: "from-blue-500 to-cyan-500",
    link: "/azure",
  },
  {
    title: "Azure DevOps",
    description: "CI/CD Pipelines - Learn about pipelines, repos, boards, and automation",
    icon: Server,
    color: "from-indigo-500 to-blue-500",
    link: "/azure-devops",
  },
  {
    title: "Docker",
    description: "Containerization - Docker containers, images, networking, and orchestration",
    icon: Container,
    color: "from-cyan-500 to-teal-500",
    link: "/docker",
  },
  {
    title: "Kubernetes",
    description: "Container Orchestration - K8s architecture, pods, services, and deployments",
    icon: Box,
    color: "from-blue-600 to-indigo-600",
    link: "/kubernetes",
  },
];

// premium icon map (common devops topics -> icon + gradient)
const iconMap: Record<string, { icon: any; color: string }> = {
  terraform: { icon: Layers, color: "from-purple-500 to-pink-500" },
  azure: { icon: Cloud, color: "from-blue-500 to-cyan-500" },
  "azure-devops": { icon: Server, color: "from-indigo-500 to-blue-500" },
  docker: { icon: Container, color: "from-cyan-500 to-teal-500" },
  kubernetes: { icon: Globe, color: "from-blue-600 to-indigo-600" },
  git: { icon: GitBranch, color: "from-slate-600 to-slate-500" },
  "azure-monitor": { icon: Gauge, color: "from-emerald-500 to-green-400" },
  linux: { icon: Terminal, color: "from-orange-500 to-yellow-400" },
  behavioral: { icon: BookOpen, color: "from-violet-500 to-purple-400" },
  miscellaneous: { icon: Grid, color: "from-rose-500 to-pink-400" },
  finops: { icon: DollarSign, color: "from-amber-500 to-yellow-400" },

  // CI/CD & automation
  jenkins: { icon: Settings, color: "from-red-500 to-orange-500" },
  sonarqube: { icon: ShieldCheck, color: "from-sky-500 to-cyan-500" },
  nexus: { icon: Database, color: "from-teal-500 to-green-400" },
  helm: { icon: Wrench, color: "from-indigo-500 to-purple-500" },
  ansible: { icon: Wrench, color: "from-red-600 to-rose-500" },

  // monitoring & observability
  prometheus: { icon: Monitor, color: "from-orange-500 to-red-500" },
  grafana: { icon: Gauge, color: "from-yellow-500 to-orange-500" },

  // scripting/programming
  scripting: { icon: Code, color: "from-gray-500 to-slate-400" },
  python: { icon: Cpu, color: "from-yellow-400 to-orange-400" },
  shell: { icon: Terminal, color: "from-gray-500 to-gray-700" },

  // networking & infra
  networking: { icon: Network, color: "from-blue-500 to-sky-400" },
  storage: { icon: HardDrive, color: "from-amber-500 to-orange-400" },
  databases: { icon: Database, color: "from-green-600 to-emerald-500" },
  security: { icon: ShieldCheck, color: "from-rose-500 to-red-400" },

  // misc tools
  cicd: { icon: Activity, color: "from-cyan-500 to-indigo-500" },
  devops: { icon: Layers, color: "from-indigo-500 to-blue-600" },
  automation: { icon: Wrench, color: "from-teal-500 to-cyan-500" },
  troubleshooting: { icon: Bug, color: "from-orange-400 to-red-500" },
  secrets: { icon: Key, color: "from-yellow-500 to-amber-400" },
  observability: { icon: Monitor, color: "from-green-500 to-emerald-400" },
};

export default function Home() {
  // keep your static topics intact and append discovered pages into this state
  const [topicsState, setTopicsState] = useState(() => topics);

  useEffect(() => {
    try {
      // Because this file lives in src/pages, use a relative glob for the same folder
      const modules = import.meta.glob("./*.tsx", { eager: true }) as Record<string, any>;

      const filenameToHref = (filename: string) =>
        "/" +
        filename
          .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
          .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
          .toLowerCase();

      const filenameToTitle = (filename: string) =>
        filename
          .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
          .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");

      // helper pages that should NOT appear in Explore Topics
      const excludeNames = new Set(["index", "home", "notfound", "not-found", "404"]);

      const discovered = Object.keys(modules)
        .map((path) => {
          const filename = path.split("/").pop()!.replace(".tsx", "");
          const key = filename.toLowerCase();
          const mod = modules[path];
          const meta = mod?.meta ?? {};

          // skip helpers and pages that explicitly opt-out
          if (excludeNames.has(key)) return null;
          if (meta.hideFromExplore) return null;

          const href = filenameToHref(filename);
          const title = filenameToTitle(filename);
          const description = meta.description ?? `Explore questions and notes for ${title}`;

          const mapKey = href.replace(/^\//, "");
          const mapped = iconMap[mapKey] ?? iconMap[filename.toLowerCase()] ?? null;

          return {
            title,
            description,
            icon: mapped?.icon ?? Box,
            color: mapped?.color ?? "from-gray-500 to-gray-600",
            link: href,
          };
        })
        .filter(Boolean) as any[];

      // avoid duplicates with your static topics by comparing links
      const existingLinks = new Set(topics.map((t) => t.link.toLowerCase()));
      const newEntries = discovered.filter((d) => !existingLinks.has(d.link.toLowerCase()));

      if (newEntries.length > 0) {
        setTopicsState((prev) => [...prev, ...newEntries]);
      }
    } catch (err) {
      // don't let discovery break the page — inspect console for details
      // eslint-disable-next-line no-console
      console.error("Explore Topics discovery error:", err);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container relative px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm">
              <BookOpen className="h-4 w-4 text-primary" />
              <span>Your Complete DevOps Interview Preparation Guide</span>
            </div>
            <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
              Master{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                DevOps
              </span>{" "}
              Interviews
            </h1>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              Comprehensive collection of interview questions for Terraform, Azure, Azure DevOps, Docker, and Kubernetes.
              Everything you need to ace your next DevOps interview.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/terraform">
                <Button size="lg" className="gap-2 shadow-glow hover-lift w-full">
                  Start Learning
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="https://github.com/hrutviatri/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 hover-lift w-full">
                  Ritesh Sharma's GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="container px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Explore Topics</h2>
          <p className="text-lg text-muted-foreground">
            Choose a topic to start your interview preparation journey
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topicsState.map((topic, index) => {
            const Icon = topic.icon ?? Box;
            return (
              <Link key={topic.link ?? topic.title + index} to={topic.link}>
                <Card
                  className="group h-full transition-smooth hover-lift border-2 hover:border-primary cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${topic.color} shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-smooth">{topic.title}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      Explore questions
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">Why This Guide?</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Comprehensive</h3>
                <p className="text-sm text-muted-foreground">Covers all major DevOps tools and technologies in depth</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold">Well-Organized</h3>
                <p className="text-sm text-muted-foreground">Questions categorized by topics for easy navigation</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <ArrowRight className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold">Interview Ready</h3>
                <p className="text-sm text-muted-foreground">Real-world questions asked in actual DevOps interviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
