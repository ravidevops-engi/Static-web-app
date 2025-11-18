export interface QuestionAnswer {
  question: string;
  answer?: string;      // plain text or markdown
  answerHtml?: string;  // rich HTML version
}


export const terraformSections = [
  {
    title: "1. Terraform – Fundamentals & Core Concepts",
    questions: [
      {
        question: "What is Terraform?",
        answerHtml: ` <div class="answer-rich">
        <h3>🌍 <strong>Terraform Overview</strong></h3>
        <p>Terraform is an <strong>Infrastructure as Code (IaC)</strong> tool by HashiCorp used to provision, manage, and version cloud infrastructure declaratively.</p>
        <ul style="margin-left:1.2rem;">
          <li>Supports multiple clouds (Azure, AWS, GCP, VMware, etc.) using providers.</li>
          <li>Executes infra creation via a dependency graph and plans changes before applying.</li>
          <li>Ensures reproducibility & consistency — same code = same infra every time.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Terraform to manage multi-env infra (Dev, QA, Prod) from same codebase using workspaces and variables.</p>
      </div>`
      },
      {
        question: "What is a provider in Terraform?",
        answerHtml: ` <div class="answer-rich">
        <h3>🔌 <strong>Providers – the Cloud API connectors</strong></h3>
        <p>Providers are plugins that let Terraform interact with specific cloud services (e.g., AzureRM, AWS, Google).</p>
        <pre><code>provider "azurerm" {
  features {}
}</code></pre>
        <p><strong>In Practice:</strong> Each provider manages authentication, resource definitions, and version pinning to ensure consistency across deployments.</p>
      </div>`
      },
      {
        question: "What is a resource block?",
        answerHtml: `<div class="answer-rich">
        <h3>🏗️ <strong>Resource Blocks – define actual infra</strong></h3>
        <p>A resource block represents a single piece of infrastructure (VM, VNet, S3 bucket, etc.) managed by Terraform.</p>
        <pre><code>resource "azurerm_resource_group" "rg" {
  name     = "prod-rg"
  location = "East US"
}</code></pre>
        <p>Each resource block maps to an API object in the provider. Terraform tracks its state for drift detection and lifecycle operations.</p>
      </div>`
      },
      {
        question: "What is a variable in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Input Variables – parameterize configurations</strong></h3>
        <p>Variables make Terraform code reusable and dynamic by accepting values at runtime or via tfvars files.</p>
        <pre><code>variable "location" {
  type    = string
  default = "East US"
}</code></pre>
        <p><strong>In Practice:</strong> I keep environment-specific values in separate tfvars files and inject them through pipelines.</p>
      </div>`
      },
      {
        question: "What is the use of output block and how to pass it in pipeline?",
        answerHtml: `<div class="answer-rich">
        <h3>📤 <strong>Output Blocks – expose values from Terraform</strong></h3>
        <p>Outputs are used to display or export values (like resource IDs, IPs) post-deployment. Useful in CI/CD to pass data between stages.</p>
        <pre><code>output "rg_name" {
  value = azurerm_resource_group.rg.name
}</code></pre>
        <p><strong>Pipeline Usage:</strong> Terraform CLI exposes outputs via <code>terraform output -json</code> which can be parsed and passed to next job or script.</p>
      </div>`
      },
      {
        question: "What is data block in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🔍 <strong>Data Blocks – fetch existing infra</strong></h3>
        <p>Data blocks query existing infrastructure instead of creating new resources.</p>
        <pre><code>data "azurerm_resource_group" "existing" {
  name = "shared-rg"
}</code></pre>
        <p><strong>In Practice:</strong> I use data sources to reference shared infra (like existing VNets, subnets, key vaults) to avoid duplication.</p>
      </div>`
      },
      {
        question: "How to write code with module and for_each?",
        answerHtml: `<div class="answer-rich">
        <h3>🧱 <strong>Modules + for_each – scalable infra pattern</strong></h3>
        <p>Modules package reusable Terraform code. <code>for_each</code> helps deploy multiple instances dynamically.</p>
        <pre><code>module "vm" {
  source   = "./modules/vm"
  for_each = var.vm_list
  name     = each.key
  size     = each.value.size
}</code></pre>
        <p><strong>In Practice:</strong> I maintain a shared modules repo and use for_each to deploy consistent infra for multiple environments.</p>
      </div>`
      },
      {
        question: "What is terraform show?",
        answerHtml: `<div class="answer-rich">
        <h3>📋 <strong>terraform show – inspect current state</strong></h3>
        <p>Displays details of the latest Terraform state or plan in a readable format.</p>
        <pre><code>terraform show</code></pre>
        <p>Useful for debugging outputs, resource attributes, or reviewing infra without logging into cloud portals.</p>
      </div>`
      },
      {
        question: "What is terraform fmt?",
        answerHtml: `<div class="answer-rich">
        <h3>🧹 <strong>terraform fmt – auto-format Terraform code</strong></h3>
        <p>Automatically formats <code>.tf</code> files according to Terraform's canonical style guide.</p>
        <pre><code>terraform fmt -recursive</code></pre>
        <p><strong>In Practice:</strong> I integrate fmt checks into pipelines to enforce consistent code formatting and PR hygiene.</p>
      </div>`
      },
      {
        question: "What is terraform function?",
        answerHtml: `<div class="answer-rich">
        <h3>🧠 <strong>Terraform Functions – logic within HCL</strong></h3>
        <p>Terraform provides built-in functions to transform data or compute values dynamically (e.g., <code>concat()</code>, <code>lookup()</code>, <code>join()</code>).</p>
        <pre><code>tags = merge(var.common_tags, { env = var.env })</code></pre>
        <p><strong>In Practice:</strong> Functions reduce code repetition and make variable-driven configs more intelligent.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "2. Terraform – Workspaces, Execution & State Management",
    questions: [
      {
        question: "What is terraform workspace and why we use it?",
        answerHtml: ` <div class="answer-rich">
        <h3>🗂️ <strong>Terraform Workspaces – manage multiple environments</strong></h3>
        <p>Workspaces allow maintaining separate state files for different environments (e.g., dev, qa, prod) using the same configuration.</p>
        <pre><code>terraform workspace new dev
terraform workspace select dev</code></pre>
        <p><strong>In Practice:</strong> I use workspaces to isolate state per environment, so changes in one don’t impact others.</p>
      </div> `
      },
      {
        question: "What is the use of terraform slug?",
        answerHtml: `<div class="answer-rich">
        <h3>🔖 <strong>Terraform Slug – unique identifier concept</strong></h3>
        <p>Terraform doesn’t have a direct command called slug — it’s often used to denote unique resource naming conventions (like environment + app + region).</p>
        <p><strong>In Practice:</strong> I implement slugs using <code>locals</code> to create predictable resource names.</p>
        <pre><code>locals {
  slug = "&dollar;{var.env}-&dollar;{var.app}-&dollar;{var.region}"
}</code></pre>
      </div>`
      },
      {
        question: "What is terraform init?",
        answerHtml: `<div class="answer-rich">
        <h3>🚀 <strong>terraform init – initialize project</strong></h3>
        <p>Initializes Terraform configuration directory — downloads providers, initializes backend, and prepares workspace for execution.</p>
        <pre><code>terraform init</code></pre>
        <p><strong>In Practice:</strong> Always run after adding new providers or changing backend configurations.</p>
      </div>`
      },
      {
        question: "What is the difference between terraform plan and terraform apply?",
        answerHtml: `<div class="answer-rich">
        <h3>🧭 <strong>Plan vs Apply – dry-run and execution</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>terraform plan:</strong> Shows proposed changes without executing them.</li>
          <li><strong>terraform apply:</strong> Executes the actual infra changes.</li>
        </ul>
        <pre><code>terraform plan -out=tfplan
terraform apply tfplan</code></pre>
        <p><strong>In Practice:</strong> I always review plan output in PR before apply step in pipeline.</p>
      </div>`
      },
      {
        question: "What is the purpose of terraform import?",
        answerHtml: `<div class="answer-rich">
        <h3>📦 <strong>terraform import – bring existing infra under management</strong></h3>
        <p>Imports existing cloud resources into Terraform state so they can be managed as code.</p>
        <pre><code>terraform import azurerm_resource_group.rg /subscriptions/.../resourceGroups/my-rg</code></pre>
        <p><strong>In Practice:</strong> I use it during migration of manual infra to Terraform-managed infra.</p>
      </div>`
      },
      {
        question: "What is the use of dynamic block?",
        answerHtml: `<div class="answer-rich">
        <h3>🔁 <strong>Dynamic Blocks – generate nested blocks dynamically</strong></h3>
        <p>Used when nested configuration needs to repeat based on input variables (like NSG rules, tags).</p>
        <pre><code>dynamic "security_rule" {
  for_each = var.rules
  content {
    name        = each.key
    description = each.value.description
    priority    = each.value.priority
    direction   = each.value.direction
  }
}</code></pre>
        <p><strong>In Practice:</strong> Makes HCL clean and scalable when working with repetitive configurations.</p>
      </div>`
      },
      {
        question: "How do you secure your Terraform setup?",
        answerHtml: `<div class="answer-rich">
        <h3>🔒 <strong>Securing Terraform – Best Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use remote backend with encryption (Azure Blob / S3 + KMS).</li>
          <li>Never hardcode credentials — use env vars or service principals.</li>
          <li>Restrict access to state file.</li>
          <li>Rotate secrets & use Terraform Cloud/Enterprise for RBAC.</li>
        </ul>
        <p><strong>In Practice:</strong> I integrate Terraform with Key Vault / Secrets Manager for sensitive variables.</p>
      </div>`    },
      {
        question: "What is drift condition in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>⚖️ <strong>Drift – when real infra diverges from state</strong></h3>
        <p>Drift occurs when infrastructure is modified outside of Terraform (e.g., manual portal changes).</p>
        <p>Detected using:</p>
        <pre><code>terraform plan</code></pre>
        <p><strong>In Practice:</strong> Regularly run plans in CI/CD to detect drift early.</p>
      </div>`    },
      {
        question: "How do you handle state management with multiple people?",
        answerHtml: `<div class="answer-rich">
        <h3>👥 <strong>Collaborative State Management</strong></h3>
        <p>Store state remotely using a shared backend (e.g., Azure Blob, S3, Terraform Cloud) with locking enabled.</p>
        <pre><code>backend "azurerm" {
  resource_group_name  = "tfstate-rg"
  storage_account_name = "tfstateacc"
  container_name       = "tfstate"
  key                  = "infra.tfstate"
}</code></pre>
        <p><strong>In Practice:</strong> Enables team collaboration, ensures locking, and prevents concurrent apply issues.</p>
      </div>`    },
      {
        question: "What is Terraform Core?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Terraform Core – the engine</strong></h3>
        <p>Terraform Core is the binary that reads configuration, builds dependency graph, compares state, and executes CRUD operations via providers.</p>
        <p><strong>In Practice:</strong> Core is provider-agnostic and handles the entire lifecycle orchestration.</p>
      </div>`    }
    ]
  }
  ,
  {
    title: "3. Terraform – Configuration Language, State & Variables",
    questions: [
      {
        question: "What is Terraform Configuration Language?",
        answerHtml: `<div class="answer-rich">
        <h3>🧱 <strong>HCL – HashiCorp Configuration Language</strong></h3>
        <p>Terraform uses <strong>HCL (HashiCorp Configuration Language)</strong> — a declarative language optimized for describing infrastructure.</p>
        <ul style="margin-left:1.2rem;">
          <li>Readable and supports JSON as alternate syntax.</li>
          <li>Combines variables, resources, outputs, locals, and expressions.</li>
          <li>Fully supports loops (<code>for_each</code>, <code>count</code>) and conditionals.</li>
        </ul>
        <p><strong>In Practice:</strong> I structure Terraform code with <code>main.tf</code>, <code>variables.tf</code>, <code>outputs.tf</code> for clarity.</p>
      </div>`    },
      {
        question: "What are Terraform Providers?",
        answerHtml: `<div class="answer-rich">
        <h3>🔌 <strong>Providers – the API bridges</strong></h3>
        <p>Providers act as plugins to communicate with specific platforms or services (AzureRM, AWS, Google, Kubernetes, etc.).</p>
        <pre><code>provider "azurerm" {
  features {}
  subscription_id = var.sub_id
}</code></pre>
        <p><strong>In Practice:</strong> I pin provider versions to avoid breaking updates across environments.</p>
      </div>`    },
      {
        question: "What are Terraform Modules?",
        answerHtml: `<div class="answer-rich">
        <h3>📦 <strong>Modules – reusable infra packages</strong></h3>
        <p>Modules organize Terraform code into reusable components.</p>
        <pre><code>module "network" {
  source = "./modules/vnet"
  vnet_name = "prod-vnet"
}</code></pre>
        <p><strong>In Practice:</strong> I use versioned Git modules for shared infra patterns across projects.</p>
      </div>`    },
      {
        question: "What is Terraform State?",
        answerHtml: `<div class="answer-rich">
        <h3>💾 <strong>State – Terraform’s source of truth</strong></h3>
        <p>The state file (<code>terraform.tfstate</code>) tracks real resource mappings and metadata.</p>
        <ul style="margin-left:1.2rem;">
          <li>Used by Terraform to detect drift and plan changes.</li>
          <li>Can be stored locally or remotely for collaboration.</li>
        </ul>
        <p><strong>In Practice:</strong> I always use remote backends with locking (Azure Blob / S3 + DynamoDB).</p>
      </div>`    },
      {
        question: "What is the difference between Terraform Core and Provider?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Core vs Provider</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Core:</strong> The engine that reads configs, builds dependency graph, and applies changes.</li>
          <li><strong>Provider:</strong> The plugin that implements CRUD operations for specific platforms.</li>
        </ul>
        <p><strong>In Practice:</strong> Core is provider-agnostic; providers act like drivers for specific clouds.</p>
      </div>`    },
      {
        question: "What is a .tf file?",
        answerHtml: `<div class="answer-rich">
        <h3>📄 <strong>.tf Files – configuration units</strong></h3>
        <p><code>.tf</code> files define resources, variables, outputs, and data sources written in HCL.</p>
        <p><strong>In Practice:</strong> I split code into <code>main.tf</code>, <code>variables.tf</code>, <code>outputs.tf</code>, and <code>provider.tf</code> for modularity.</p>
      </div>`    },
      {
        question: "What is a .tfstate file?",
        answerHtml: `<div class="answer-rich">
        <h3>🗃️ <strong>.tfstate – the actual infra snapshot</strong></h3>
        <p>JSON file containing mappings between Terraform config and deployed resources.</p>
        <pre><code>terraform show terraform.tfstate</code></pre>
        <p><strong>In Practice:</strong> I never commit tfstate to Git — always store it remotely and encrypted.</p>
      </div>`    },
      {
        question: "What are input variables in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Input Variables – dynamic parameters</strong></h3>
        <p>Used to make Terraform configurations flexible and reusable.</p>
        <pre><code>variable "location" {
  type    = string
  default = "East US"
}</code></pre>
        <p>Values are passed via CLI, environment variables, or tfvars files.</p>
      </div>`    },
      {
        question: "What are output variables in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>📤 <strong>Output Variables – share deployment results</strong></h3>
        <p>Outputs expose information from Terraform for use in other modules or pipelines.</p>
        <pre><code>output "rg_name" {
  value = azurerm_resource_group.rg.name
}</code></pre>
        <p><strong>In Practice:</strong> I use outputs to pass resource IDs and endpoints to CI/CD jobs.</p>
      </div>`    },
      {
        question: "What is the use of backend in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🧠 <strong>Backend – where Terraform stores state</strong></h3>
        <p>Defines how and where Terraform stores its state (local or remote).</p>
        <pre><code>terraform {
  backend "azurerm" {
    resource_group_name  = "tfstate-rg"
    storage_account_name = "tfstateacc"
    container_name       = "tfstate"
    key                  = "prod.tfstate"
  }
}</code></pre>
        <p><strong>In Practice:</strong> Remote backends enable locking, collaboration, and disaster recovery.</p>
      </div>`    }
    ]
  }
  ,
  {
    title: "4. Terraform – Resources, Meta-Arguments, Loops & Provisioners",
    questions: [
      {
        question: "What is a resource in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🏗️ <strong>Resource – actual infra components</strong></h3>
        <p>Resources represent the real cloud components (VMs, VNets, Buckets) that Terraform manages via providers.</p>
        <pre><code>resource "azurerm_virtual_network" "vnet" {
  name                = "prod-vnet"
  address_space       = ["10.0.0.0/16"]
  location            = var.location
  resource_group_name = var.rg_name
}</code></pre>
        <p><strong>In Practice:</strong> Each resource maps to an API call that Terraform tracks in the state for lifecycle operations.</p>
      </div>`    },
      {
        question: "What are meta-arguments in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Meta-Arguments – control how resources behave</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>depends_on</strong> – define explicit dependency.</li>
          <li><strong>count</strong> / <strong>for_each</strong> – loop resources.</li>
          <li><strong>provider</strong> – use a specific provider config.</li>
          <li><strong>lifecycle</strong> – customize creation/deletion rules.</li>
        </ul>
        <p><strong>In Practice:</strong> I use these to control infra flow and avoid race conditions in resource creation.</p>
      </div>`    },
      {
        question: "What is the lifecycle block in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🔄 <strong>Lifecycle Block – fine-tune resource behavior</strong></h3>
        <p>Defines how Terraform should handle create/update/delete actions.</p>
        <pre><code>lifecycle {
  prevent_destroy = true
  ignore_changes  = [tags]
}</code></pre>
        <p><strong>In Practice:</strong> I enable <code>prevent_destroy</code> for production databases or core networking components.</p>
      </div>`    },
      {
        question: "What is the purpose of depends_on in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🔗 <strong>depends_on – enforce resource ordering</strong></h3>
        <p>Explicitly declares dependency between resources to ensure Terraform creates them in the correct order.</p>
        <pre><code>resource "azurerm_subnet" "subnet" {
  depends_on = [azurerm_virtual_network.vnet]
}</code></pre>
        <p><strong>In Practice:</strong> Useful when Terraform can’t automatically infer dependency (e.g., role assignments or custom scripts).</p>
      </div>`    },
      {
        question: "What is the function of count and for_each in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🔢 <strong>count & for_each – loops for resource creation</strong></h3>
        <p><strong>count:</strong> Used for simple numeric iterations.</p>
        <pre><code>resource "azurerm_storage_account" "sa" {
  count = 3
  name  = "st&dollar;{count.index}"
}</code></pre>
        <p><strong>for_each:</strong> Used for map/object-based dynamic deployments.</p>
        <pre><code>for_each = var.vm_config
name     = each.key
size     = each.value.size</code></pre>
        <p><strong>In Practice:</strong> I prefer <code>for_each</code> for environment-based resource provisioning.</p>
      </div>`    },
      {
        question: "What is the use of locals in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🧮 <strong>Locals – reusable computed values</strong></h3>
        <p>Locals store intermediate values or computed expressions to avoid repetition.</p>
        <pre><code>locals {
  common_tags = {
    env  = var.env
    team = "DevOps"
  }
}</code></pre>
        <p><strong>In Practice:</strong> I use locals for consistent tagging and resource naming conventions.</p>
      </div>`    },
      {
        question: "What are provisioners in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🧰 <strong>Provisioners – execute scripts post-deployment</strong></h3>
        <p>Provisioners run commands or scripts on resources during creation or destruction.</p>
        <pre><code>provisioner "remote-exec" {
  inline = ["sudo apt update", "sudo apt install nginx -y"]
}</code></pre>
        <p><strong>In Practice:</strong> I only use provisioners for last-mile setup when configuration management tools aren’t available.</p>
      </div>`    },
      {
        question: "What is the use of data block in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>📡 <strong>Data Blocks – read existing resources</strong></h3>
        <p>Used to fetch and reference existing infrastructure details.</p>
        <pre><code>data "azurerm_resource_group" "shared" {
  name = "core-rg"
}</code></pre>
        <p><strong>In Practice:</strong> I use data blocks to reference shared VNet, subnets, or Key Vaults without creating duplicates.</p>
      </div>`    },
      {
        question: "What is the use of Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🌐 <strong>Terraform – automate infra lifecycle</strong></h3>
        <p>Terraform simplifies infrastructure provisioning, scaling, and management using code.</p>
        <ul style="margin-left:1.2rem;">
          <li>Ensures consistency across environments.</li>
          <li>Automates infra creation using CI/CD.</li>
          <li>Supports multi-cloud deployments.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Terraform in pipelines to auto-provision environments on pull request merges.</p>
      </div>`    },
      {
        question: "What are Terraform Meta Arguments overall purpose?",
        answerHtml: `<div class="answer-rich">
        <h3>⚡ <strong>Meta Arguments – execution control switches</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><code>count / for_each</code> → Loop over resources.</li>
          <li><code>depends_on</code> → Explicit dependency order.</li>
          <li><code>provider</code> → Multi-provider management.</li>
          <li><code>lifecycle</code> → Control update/destroy behavior.</li>
        </ul>
        <p><strong>In Practice:</strong> These give full control over how Terraform executes and manages dependencies.</p>
      </div>`    }
    ]
  }
  ,
  {
    title: "5. Terraform – Installation & Setup",
    questions: [
      {
        question: "How to install Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Installing Terraform – CLI setup</strong></h3>
        <p>Terraform can be installed using OS package managers or by downloading the binary from HashiCorp releases.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Windows:</strong> Download ZIP → extract → add to PATH.</li>
          <li><strong>macOS:</strong> <code>brew tap hashicorp/tap &amp;&amp; brew install hashicorp/tap/terraform</code></li>
          <li><strong>Linux:</strong> <code>wget https://releases.hashicorp.com/terraform/&lt;version&gt;/terraform_&lt;version&gt;_linux_amd64.zip</code></li>
        </ul>
        <p><strong>In Practice:</strong> I use Terraform via CI/CD runners (Azure DevOps, GitHub Actions) using pre-installed Terraform tasks or container images.</p>
      </div>`    },
      {
        question: "What is the latest version of Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>📦 <strong>Terraform Versioning</strong></h3>
        <p>The latest stable version can be checked on <a href="https://developer.hashicorp.com/terraform/downloads" target="_blank">Terraform Downloads</a>.</p>
        <p>As of 2025, it’s typically around <strong>v1.9.x</strong> (updated frequently).</p>
        <p><strong>In Practice:</strong> Always pin provider and Terraform versions in code to avoid breaking changes.</p>
      </div>`    },
      {
        question: "Which command is used to check Terraform version?",
        answerHtml: `<div class="answer-rich">
        <h3>🧾 <strong>Check Terraform version</strong></h3>
        <p>Use the following CLI command to verify installed Terraform version:</p>
        <pre><code>terraform version</code></pre>
        <p>Shows Terraform binary and provider plugin versions.</p>
        <p><strong>In Practice:</strong> I include version check in CI pipeline pre-steps to ensure environment consistency.</p>
      </div>`    },
      {
        question: "How do you upgrade Terraform to the latest version?",
        answerHtml: `<div class="answer-rich">
        <h3>⬆️ <strong>Upgrading Terraform</strong></h3>
        <p>Upgrade steps depend on OS:</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Windows:</strong> Replace old binary in PATH with the new one.</li>
          <li><strong>macOS/Linux:</strong> <code>brew upgrade hashicorp/tap/terraform</code> or re-download binary.</li>
        </ul>
        <p>Post upgrade, run:</p>
        <pre><code>terraform -v</code></pre>
        <p><strong>In Practice:</strong> Always test upgrade in non-prod first and check provider compatibility using <code>terraform init -upgrade</code>.</p>
      </div>`    },
      {
        question: "Which file is created after running “terraform init”?",
        answerHtml: `<div class="answer-rich">
        <h3>🗂️ <strong>terraform init – generates .terraform directory</strong></h3>
        <p>Running <code>terraform init</code> creates a <strong>.terraform</strong> directory that stores provider plugins and backend metadata.</p>
        <ul style="margin-left:1.2rem;">
          <li>Downloads providers & modules.</li>
          <li>Initializes backend connection.</li>
          <li>Prepares working directory for execution.</li>
        </ul>
        <pre><code>terraform init</code></pre>
        <p><strong>In Practice:</strong> I commit a <code>.terraform.lock.hcl</code> file to lock provider versions.</p>
      </div>`    },
      {
        question: "What is the terraform block?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>terraform {} block – core configuration</strong></h3>
        <p>The <code>terraform</code> block defines backend, required providers, and Terraform version constraints.</p>
        <pre><code>terraform {
  required_version = ">= 1.8.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.100"
    }
  }
}</code></pre>
        <p><strong>In Practice:</strong> I always define version constraints to avoid unexpected provider updates.</p>
      </div>`    },
      {
        question: "What is the syntax of provider block?",
        answerHtml: `<div class="answer-rich">
        <h3>🔌 <strong>Provider Block – authentication & setup</strong></h3>
        <p>Defines connection details and authentication method for the target platform.</p>
        <pre><code>provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
  tenant_id       = var.tenant_id
  client_id       = var.client_id
  client_secret   = var.client_secret
}</code></pre>
        <p><strong>In Practice:</strong> I prefer using environment variables or service principals instead of hardcoded secrets.</p>
      </div>`    }
    ]
  }
  ,
  {
    title: "6. Terraform – Workflow (Init, Plan, Apply, Destroy, etc.)",
    questions: [
      {
        question: "What is the use of terraform init?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>terraform init – initialize working directory</strong></h3>
        <p>Initializes a Terraform working directory, downloads provider plugins, and configures backend for state storage.</p>
        <pre><code>terraform init</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Downloads provider binaries.</li>
          <li>Initializes backend (like AzureRM, S3, etc.).</li>
          <li>Prepares module dependencies.</li>
        </ul>
        <p><strong>In Practice:</strong> I always run this first in CI pipelines to ensure backend & providers are properly synced.</p>
      </div>`    },
      {
        question: "What is the use of terraform init -upgrade?",
        answerHtml: `<div class="answer-rich">
        <h3>🔄 <strong>terraform init -upgrade – refresh provider versions</strong></h3>
        <p>Forces Terraform to check the registry for newer versions of providers or modules defined in configuration.</p>
        <pre><code>terraform init -upgrade</code></pre>
        <p><strong>Use Case:</strong> When upgrading to new provider releases or changing required_version in terraform block.</p>
        <p><strong>In Practice:</strong> I use it in staging before production rollout to validate provider compatibility.</p>
      </div>`    },
      {
        question: "What is the use of terraform plan?",
        answerHtml: `<div class="answer-rich">
        <h3>📋 <strong>terraform plan – preview infrastructure changes</strong></h3>
        <p>Generates an execution plan showing what Terraform will create, update, or destroy.</p>
        <pre><code>terraform plan</code></pre>
        <p><strong>Output:</strong> Additions (+), Changes (~), Deletions (-)</p>
        <p><strong>In Practice:</strong> I review plan output in PRs to avoid accidental resource deletion or misconfigurations.</p>
      </div>`    },
      {
        question: "What is the use of terraform plan -out=<fileName>?",
        answerHtml: `<div class="answer-rich">
        <h3>🧾 <strong>terraform plan -out=plan.tfplan – save plan for later apply</strong></h3>
        <p>Stores the execution plan in a binary file that can be safely used later for apply step.</p>
        <pre><code>terraform plan -out=tfplan</code></pre>
        <p><strong>In Practice:</strong> I use this in pipelines to separate “planning” and “apply” stages (CI/CD safety measure).</p>
      </div>`    },
      {
        question: "What is the use of terraform apply?",
        answerHtml: `<div class="answer-rich">
        <h3>🚀 <strong>terraform apply – execute changes</strong></h3>
        <p>Applies the planned changes to reach desired state defined in .tf files.</p>
        <pre><code>terraform apply</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Creates, modifies, or deletes resources as per plan.</li>
          <li>Asks for manual confirmation unless <code>-auto-approve</code> is used.</li>
        </ul>
        <p><strong>In Practice:</strong> I run this with <code>-auto-approve</code> only in automated pipelines.</p>
      </div>`    },
      {
        question: "What is the use of terraform apply <filename>?",
        answerHtml: `<div class="answer-rich">
        <h3>📦 <strong>terraform apply tfplan – apply from saved plan</strong></h3>
        <p>Applies a previously generated plan file created using <code>terraform plan -out</code>.</p>
        <pre><code>terraform apply tfplan</code></pre>
        <p><strong>In Practice:</strong> Ensures that only the reviewed plan is applied — avoids runtime configuration drift in CI/CD.</p>
      </div>`    },
      {
        question: "What is the use of terraform destroy?",
        answerHtml: `<div class="answer-rich">
        <h3>💣 <strong>terraform destroy – delete all managed infrastructure</strong></h3>
        <p>Destroys all resources defined in Terraform configuration files.</p>
        <pre><code>terraform destroy</code></pre>
        <p><strong>In Practice:</strong> Used in non-prod environments or cleanup stages after temporary infra testing.</p>
      </div>`    },
      {
        question: "What is the use of terraform validate?",
        answerHtml: `<div class="answer-rich">
        <h3>✅ <strong>terraform validate – syntax and logic check</strong></h3>
        <p>Validates Terraform configuration files for syntax errors and structural correctness before running plan.</p>
        <pre><code>terraform validate</code></pre>
        <p><strong>In Practice:</strong> I run this in pre-commit hook or as a pipeline step before plan stage.</p>
      </div>`    },
      {
        question: "What is the use of terraform fmt?",
        answerHtml: `<div class="answer-rich">
        <h3>🧹 <strong>terraform fmt – auto-format configuration files</strong></h3>
        <p>Automatically formats all .tf files to follow HashiCorp style conventions.</p>
        <pre><code>terraform fmt -recursive</code></pre>
        <p><strong>In Practice:</strong> Keeps code consistent across teams and avoids merge conflicts due to spacing differences.</p>
      </div>`    },
      {
        question: "What is the use of terraform show?",
        answerHtml: `<div class="answer-rich">
        <h3>🔍 <strong>terraform show – view current state or plan</strong></h3>
        <p>Displays the details of the current Terraform state or a saved plan in human-readable or JSON format.</p>
        <pre><code>terraform show
terraform show -json > state.json</code></pre>
        <p><strong>In Practice:</strong> Useful for auditing current infra or debugging state data.</p>
      </div>`    },
      {
        question: "What is the use of terraform output?",
        answerHtml: `<div class="answer-rich">
        <h3>📤 <strong>terraform output – view defined outputs</strong></h3>
        <p>Displays values from output blocks of your configuration.</p>
        <pre><code>terraform output
terraform output resource_id</code></pre>
        <p><strong>In Practice:</strong> I use outputs in pipelines to pass dynamic data (like IPs, IDs) to next steps.</p>
      </div>`    },
      {
        question: "What is the use of terraform taint?",
        answerHtml: `<div class="answer-rich">
        <h3>⚠️ <strong>terraform taint – mark resource for recreation</strong></h3>
        <p>Marks a resource for forced recreation on next apply.</p>
        <pre><code>terraform taint azurerm_virtual_machine.vm1</code></pre>
        <p><strong>In Practice:</strong> Used to rebuild faulty or misconfigured resources without deleting the entire infra.</p>
      </div>`    },
      {
        question: "What is the use of terraform untaint?",
        answerHtml: `<div class="answer-rich">
        <h3>🩹 <strong>terraform untaint – remove taint mark</strong></h3>
        <p>Removes taint from a resource so that it won’t be recreated in the next apply.</p>
        <pre><code>terraform untaint azurerm_virtual_machine.vm1</code></pre>
        <p><strong>In Practice:</strong> I use it to reverse accidental tainting in shared environments.</p>
      </div>`    },
      {
        question: "What is the use of terraform import?",
        answerHtml: `<div class="answer-rich">
        <h3>📥 <strong>terraform import – bring existing infra under Terraform management</strong></h3>
        <p>Imports existing resources from cloud into Terraform state without re-creating them.</p>
        <pre><code>terraform import azurerm_resource_group.rg /subscriptions/{id}/resourceGroups/myRG</code></pre>
        <p><strong>In Practice:</strong> I use it while onboarding legacy infrastructure into IaC pipelines.</p>
      </div>`    },
      {
        question: "What is the use of terraform graph?",
        answerHtml: `<div class="answer-rich">
        <h3>🌐 <strong>terraform graph – visualize resource dependencies</strong></h3>
        <p>Generates a visual representation of resource dependency graph.</p>
        <pre><code>terraform graph | dot -Tpng > graph.png</code></pre>
        <p><strong>In Practice:</strong> Helpful in understanding complex module relationships in large projects.</p>
      </div>`    },
      {
        question: "What is the use of terraform state?",
        answerHtml: `<div class="answer-rich">
        <h3>🗄️ <strong>terraform state – manage state file entries</strong></h3>
        <p>Used to inspect, list, move, or remove resources in the Terraform state.</p>
        <pre><code>terraform state list
terraform state show azurerm_resource_group.rg</code></pre>
        <p><strong>In Practice:</strong> I use it for debugging or manually syncing state when resources are renamed.</p>
      </div>`    },
      {
        question: "What is the use of terraform workspace?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>terraform workspace – manage multiple environment states</strong></h3>
        <p>Allows creation of isolated state files for different environments (dev, test, prod).</p>
        <pre><code>terraform workspace new dev
terraform workspace select prod</code></pre>
        <p><strong>In Practice:</strong> I use workspaces for small setups; for large orgs, prefer remote backend separation.</p>
      </div>`    }
    ]
  }
  ,
  {
    title: "7. Terraform – Variables, tfvars & Type Handling",
    questions: [
      {
        question: "What is variable.tf and terraform.tfvars? Difference?",
        answerHtml: `<div class="answer-rich">
        <h3>📁 <strong>variable.tf vs terraform.tfvars</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>variable.tf:</strong> Defines variable declarations (name, type, description, default).</li>
          <li><strong>terraform.tfvars:</strong> Holds actual values for declared variables.</li>
        </ul>
        <pre><code>// variable.tf
variable "region" { type = string }

// terraform.tfvars
region = "eastus"</code></pre>
        <p><strong>In Practice:</strong> I keep variable definitions in <code>variables.tf</code> and environment-specific values in <code>*.tfvars</code> files.</p>
      </div>`    },
      {
        question: "What is difference between variable.tf and variables.tf?",
        answerHtml: `<div class="answer-rich">
        <h3>🧾 <strong>variable.tf vs variables.tf – naming convention</strong></h3>
        <p>No functional difference. Terraform loads all <code>*.tf</code> files in the same directory. Naming is purely for organization.</p>
        <p><strong>In Practice:</strong> I use <code>variables.tf</code> for clarity since it usually holds multiple variable definitions.</p>
      </div>`    },
      {
        question: "How to save sensitive data in state file?",
        answerHtml: `<div class="answer-rich">
        <h3>🔒 <strong>Securing sensitive data in state</strong></h3>
        <p>Terraform state may still contain sensitive data in plaintext. To protect it:</p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>remote backend</strong> (Azure Blob, S3, Terraform Cloud).</li>
          <li>Enable <strong>encryption at rest</strong> (Storage-level encryption).</li>
          <li>Avoid exposing sensitive outputs.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Azure Blob backend with SSE and limited RBAC access to secure state.</p>
      </div>`    },
      {
        question: "If you mark a variable as sensitive, how will you see it in terraform state?",
        answerHtml: `<div class="answer-rich">
        <h3>🙈 <strong>Sensitive variables in state</strong></h3>
        <p>Even if a variable is marked <code>sensitive = true</code>, Terraform still stores its value in the state file (for idempotency).</p>
        <p>It only hides the value from CLI and plan output.</p>
        <p><strong>In Practice:</strong> To view, use <code>terraform state show</code> carefully or secure backend access strictly.</p>
      </div>`    },
      {
        question: "How do you provide default value to a variable?",
        answerHtml: `<div class="answer-rich">
        <h3>💡 <strong>Setting default values</strong></h3>
        <pre><code>variable "region" {
  type    = string
  default = "eastus"
}</code></pre>
        <p><strong>In Practice:</strong> I use defaults for non-sensitive, common values to reduce pipeline input complexity.</p>
      </div>`    },
      {
        question: "What are type constraints in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>📐 <strong>Type constraints – enforce input types</strong></h3>
        <p>Used to restrict input variable types (string, list, map, object, bool, number).</p>
        <pre><code>variable "tags" {
  type = map(string)
}</code></pre>
        <p><strong>In Practice:</strong> Helps catch input errors early and enforce input contracts in modules.</p>
      </div>`    },
      {
        question: "Difference between list and map?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>list vs map</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>List:</strong> Ordered collection (indexed numerically).</li>
          <li><strong>Map:</strong> Key-value pairs (unordered).</li>
        </ul>
        <pre><code>list = ["dev", "test"]
map  = { env = "dev", region = "eastus" }</code></pre>
        <p><strong>In Practice:</strong> Lists for ordered items (like subnets), maps for tagging or configurations.</p>
      </div>`    },
      {
        question: "What are the data types in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🔠 <strong>Terraform data types</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>string</li>
          <li>number</li>
          <li>bool</li>
          <li>list(type)</li>
          <li>map(type)</li>
          <li>object({})</li>
          <li>tuple([types])</li>
        </ul>
        <p><strong>In Practice:</strong> I use objects for structured variables (e.g., VM config with name, size, tags).</p>
      </div>`    },
      {
        question: "If you don’t want to hardcode IP in main.tf, how will you handle that?",
        answerHtml: `<div class="answer-rich">
        <h3>🌐 <strong>Avoid hardcoding by using variables or data sources</strong></h3>
        <p>Options:</p>
        <ul style="margin-left:1.2rem;">
          <li>Declare variable → define in <code>terraform.tfvars</code>.</li>
          <li>Fetch dynamically via <code>data</code> block (e.g., existing network).</li>
        </ul>
        <pre><code>variable "vm_ip" {}
// terraform.tfvars
vm_ip = "10.0.0.5"</code></pre>
        <p><strong>In Practice:</strong> I prefer to fetch IPs dynamically using data sources or remote state outputs.</p>
      </div>`    },
      {
        question: "How do you manage secrets or sensitive variables in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🔐 <strong>Managing sensitive variables securely</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>environment variables</strong> (TF_VAR_ prefix).</li>
          <li>Integrate with <strong>Azure Key Vault / AWS Secrets Manager</strong>.</li>
          <li>Mark variables <code>sensitive = true</code>.</li>
          <li>Avoid committing .tfvars with secrets to git.</li>
        </ul>
        <p><strong>In Practice:</strong> I inject secrets into CI pipelines via secured variable groups linked to Vault.</p>
      </div>`    },
      {
        question: "What are variable types in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🧮 <strong>Variable types</strong></h3>
        <p>Terraform supports primitive, complex, and structural types:</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Primitive:</strong> string, number, bool</li>
          <li><strong>Complex:</strong> list, map, set</li>
          <li><strong>Structural:</strong> object, tuple</li>
        </ul>
      </div>`    },
      {
        question: "What is the precedence of variable values?",
        answerHtml: `<div class="answer-rich">
        <h3>⚖️ <strong>Variable precedence order (lowest → highest)</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Default value in variable declaration</li>
          <li>terraform.tfvars or *.auto.tfvars</li>
          <li>Environment variables (TF_VAR_)</li>
          <li>CLI flag (<code>-var</code>)</li>
          <li>Terraform Cloud / workspace variables</li>
        </ol>
        <p><strong>In Practice:</strong> I prefer using tfvars for env configs and CLI vars for overrides in CI/CD.</p>
      </div>`    },
      {
        question: "How to declare variables in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🧾 <strong>Declaring variables</strong></h3>
        <pre><code>variable "region" {
  description = "Azure region"
  type        = string
  default     = "eastus"
}</code></pre>
        <p><strong>In Practice:</strong> Always include descriptions for clarity in large projects.</p>
      </div>`    },
      {
        question: "What is the default value in variable declaration?",
        answerHtml: `<div class="answer-rich">
        <h3>🎯 <strong>Default value</strong></h3>
        <p>When no value is provided, Terraform uses the <code>default</code> value from the variable block.</p>
        <pre><code>variable "env" {
  default = "dev"
}</code></pre>
        <p><strong>In Practice:</strong> Useful for simplifying non-prod deployments.</p>
      </div>`    },
      {
        question: "What is the difference between var.name and local.name?",
        answerHtml: `<div class="answer-rich">
        <h3>📦 <strong>var.name vs local.name</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>var.name:</strong> References an input variable.</li>
          <li><strong>local.name:</strong> Refers to a computed or derived local value inside locals block.</li>
        </ul>
        <pre><code>locals {
  full_name = "&dollar;{var.env}-app"
}</code></pre>
        <p><strong>In Practice:</strong> I use locals for computed naming conventions or reusing expressions.</p>
      </div>`    },
      {
        question: "What does sensitive = true mean?",
        answerHtml: `<div class="answer-rich">
        <h3>🙊 <strong>sensitive = true – hide output or input</strong></h3>
        <p>Prevents Terraform from displaying variable or output value in CLI logs or plan output.</p>
        <pre><code>variable "password" {
  type      = string
  sensitive = true
}</code></pre>
        <p><strong>In Practice:</strong> Protects secrets in CI logs but does not encrypt state.</p>
      </div>`    },
      {
        question: "How to define environment variables for Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🌍 <strong>Defining environment variables</strong></h3>
        <p>Prefix variable names with <code>TF_VAR_</code> so Terraform can auto-load them.</p>
        <pre><code>export TF_VAR_region=eastus
terraform apply</code></pre>
        <p><strong>In Practice:</strong> Useful for injecting values securely in pipelines.</p>
      </div>`    },
      {
        question: "What are the different ways to assign values to variables?",
        answerHtml: `<div class="answer-rich">
        <h3>🧰 <strong>Ways to assign variable values</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Default in variable block</li>
          <li>terraform.tfvars or *.auto.tfvars</li>
          <li>Command line: <code>-var</code> or <code>-var-file</code></li>
          <li>Environment variables (TF_VAR_)</li>
          <li>Terraform Cloud workspace variables</li>
        </ol>
        <p><strong>In Practice:</strong> I use tfvars for static configs, CLI vars for dynamic pipeline overrides.</p>
      </div>`    },
      {
        question: "What is the difference between input variables and output values?",
        answerHtml: `<div class="answer-rich">
        <h3>🔁 <strong>Input vs Output</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Input variables:</strong> Take values from user/environment into Terraform.</li>
          <li><strong>Output values:</strong> Expose data from Terraform to external systems or modules.</li>
        </ul>
        <p><strong>In Practice:</strong> Inputs = incoming configs, Outputs = results shared to pipeline or modules.</p>
      </div>`    },
      {
        question: "How to pass variables from CLI?",
        answerHtml: `<div class="answer-rich">
        <h3>💻 <strong>Passing variables from CLI</strong></h3>
        <p>Use <code>-var</code> flag or <code>-var-file</code> option.</p>
        <pre><code>terraform apply -var="region=eastus"
terraform apply -var-file="prod.tfvars"</code></pre>
        <p><strong>In Practice:</strong> I use <code>-var-file</code> for environment segregation and automation consistency.</p>
      </div>`    }
    ]
  }
  ,
  {
    title: "8. Terraform – State File & Backend",
    questions: [
      {
        question: "What is state file and where do we store it?",
        answerHtml: `<div class="answer-rich">
        <h3>📄 <strong>Terraform State File</strong></h3>
        <p>The state file (<code>terraform.tfstate</code>) tracks the mapping between Terraform resources and real-world infrastructure.</p>
        <p><strong>Storage:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Local backend:</strong> Stored in your working directory.</li>
          <li><strong>Remote backend:</strong> Stored in remote storage (S3, Azure Blob, Terraform Cloud, etc.)</li>
        </ul>
        <p><strong>In Practice:</strong> Always store state remotely to enable collaboration and prevent data loss.</p>
      </div>`    },
      {
        question: "When will the state file be created?",
        answerHtml: `<div class="answer-rich">
        <h3>🕒 <strong>State creation timing</strong></h3>
        <p>Terraform creates the state file after the first successful <code>terraform apply</code>.</p>
        <p><strong>In Practice:</strong> Before apply, plan just simulates changes — no state file exists until resources are actually provisioned.</p>
      </div>`    },
      {
        question: "After which command is the state file created?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Command that creates the state file</strong></h3>
        <p>After <code>terraform apply</code> — once resources are deployed successfully.</p>
        <p><strong>Note:</strong> The <code>terraform plan</code> command only reads configuration; it doesn’t modify or create state.</p>
      </div>`    },
      {
        question: "How do you encrypt the state file?",
        answerHtml: `<div class="answer-rich">
        <h3>🔐 <strong>Encrypting the state file</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Local backend:</strong> Use OS-level encryption (BitLocker, FileVault).</li>
          <li><strong>Cloud backend:</strong> Use backend encryption options:
            <ul>
              <li><strong>S3:</strong> Enable SSE (Server-Side Encryption) or KMS.</li>
              <li><strong>Azure Blob:</strong> Enable Storage Service Encryption.</li>
              <li><strong>Terraform Cloud:</strong> Encrypted by default.</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> I rely on Azure Blob + SSE with role-based access to protect tfstate.</p>
      </div>`    },
      {
        question: "What is statefile management?",
        answerHtml: `<div class="answer-rich">
        <h3>🧭 <strong>State file management</strong></h3>
        <p>It means maintaining, securing, and organizing the Terraform state file to ensure consistency and collaboration.</p>
        <ul style="margin-left:1.2rem;">
          <li>Using remote backend</li>
          <li>Versioning and backups</li>
          <li>Locking mechanism</li>
          <li>Controlled access (RBAC)</li>
        </ul>
        <p><strong>In Practice:</strong> I use versioned blob containers to roll back accidental state corruption.</p>
      </div>`    },
      {
        question: "What is state locking in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🔒 <strong>State locking</strong></h3>
        <p>Prevents concurrent modifications to state file during Terraform operations.</p>
        <p><strong>Example:</strong> Two people running <code>terraform apply</code> at the same time — lock ensures only one runs.</p>
        <p><strong>In Practice:</strong> Remote backends like S3 + DynamoDB or Terraform Cloud provide automatic locking.</p>
      </div>`    },
      {
        question: "What is a lock file and why is it created?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>.terraform.lock.hcl – Dependency Lock File</strong></h3>
        <p>This file locks provider versions to ensure consistent builds across environments.</p>
        <ul style="margin-left:1.2rem;">
          <li>Auto-created after <code>terraform init</code>.</li>
          <li>Contains provider version & checksum details.</li>
        </ul>
        <p><strong>In Practice:</strong> Commit it to version control so team members use the same provider versions.</p>
      </div>`    },
      {
        question: "What are the different backends you’ve used?",
        answerHtml: `<div class="answer-rich">
        <h3>🗄️ <strong>Common Terraform Backends</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Local</li>
          <li>Azure Blob Storage</li>
          <li>AWS S3 + DynamoDB (for locking)</li>
          <li>GCS (Google Cloud Storage)</li>
          <li>Terraform Cloud / Enterprise</li>
        </ul>
        <p><strong>In Practice:</strong> I prefer remote backends with state locking and versioning enabled for team setups.</p>
      </div>`    },
      {
        question: "What happens if local tfstate is deleted accidentally?",
        answerHtml: `<div class="answer-rich">
        <h3>⚠️ <strong>Accidental state deletion</strong></h3>
        <p>If deleted and not stored remotely — Terraform loses track of all infrastructure.</p>
        <p><strong>In Practice:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>If resources exist in cloud — Terraform will try to recreate them (duplicate issue).</li>
          <li>Recovery possible only if backup or remote backend exists.</li>
        </ul>
        <p><strong>Best Practice:</strong> Always use remote backend with versioning.</p>
      </div>`    },
      {
        question: "How do you recover a lost local state file?",
        answerHtml: `<div class="answer-rich">
        <h3>🧰 <strong>Recovering lost state file</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Recover from <strong>VCS / backup</strong> if committed.</li>
          <li>Use <code>terraform import</code> to re-import resources manually.</li>
          <li>If using cloud backend — restore from <strong>version history</strong>.</li>
        </ul>
        <p><strong>In Practice:</strong> I once used Azure Blob’s version restore to recover accidentally deleted tfstate.</p>
      </div>`    },
      {
        question: "How do you manage multiple state files in team environments?",
        answerHtml: `<div class="answer-rich">
        <h3>👥 <strong>Managing multiple state files</strong></h3>
        <p>By using <strong>workspaces</strong> or <strong>separate backend configurations</strong> per environment.</p>
        <ul style="margin-left:1.2rem;">
          <li>dev, test, prod each with its own state file.</li>
          <li>Backend key parameter differentiates state locations.</li>
        </ul>
        <pre><code>key = "terraform/state/prod.tfstate"</code></pre>
        <p><strong>In Practice:</strong> Helps isolate environments and avoid cross-deployment impact.</p>
      </div>`    },
      {
        question: "What if 150 people use the same backend — how do you identify changes?",
        answerHtml: `<div class="answer-rich">
        <h3>🕵️‍♂️ <strong>Tracking changes in shared backend</strong></h3>
        <p>Use remote backend that provides:</p>
        <ul style="margin-left:1.2rem;">
          <li>Audit logging (e.g., Terraform Cloud, S3 Access Logs).</li>
          <li>State versioning for change diffs.</li>
          <li>Access control (who can <code>apply</code> vs <code>plan</code>).</li>
        </ul>
        <p><strong>In Practice:</strong> Terraform Cloud records who applied each run and the exact diff — perfect for large teams.</p>
      </div>`    }
    ]
  }
  ,
  {
    title: "9. Terraform – Provisioners & Lifecycle",
    questions: [
      {
        question: "What is a provisioner in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Provisioner – Post-deployment automation</strong></h3>
        <p>Provisioners let you execute scripts or commands on resources after they're created or destroyed — often used for bootstrapping or configuration.</p>
        <p><strong>Example:</strong> Installing packages or configuring an app after VM deployment.</p>
        <pre><code>provisioner "remote-exec" {
  inline = ["sudo apt update", "sudo apt install nginx -y"]
}</code></pre>
        <p><strong>In Practice:</strong> I use provisioners only when config management tools (like Ansible) are not available.</p>
      </div>`    },
      {
        question: "What is file provisioner?",
        answerHtml: `<div class="answer-rich">
        <h3>📁 <strong>File Provisioner – Transfer files to VM</strong></h3>
        <p>Used to copy files or directories from local machine to the target VM.</p>
        <pre><code>provisioner "file" {
  source      = "install.ps1"
  destination = "C:/temp/install.ps1"
}</code></pre>
        <p><strong>In Practice:</strong> Handy for sending scripts or configs during bootstrap of Windows/Linux VMs.</p>
      </div>`    },
      {
        question: "What is a null resource?",
        answerHtml: `<div class="answer-rich">
        <h3>🌀 <strong>Null Resource – Generic execution placeholder</strong></h3>
        <p>It doesn’t create cloud resources but allows you to trigger scripts or commands conditionally.</p>
        <pre><code>resource "null_resource" "postconfig" {
  triggers = { build_id = var.build_id }
  provisioner "local-exec" {
    command = "echo Deploying build &dollar;{var.build_id}"
  }
}</code></pre>
        <p><strong>In Practice:</strong> I use null_resource for CI/CD hooks or tagging existing infra.</p>
      </div>`    },
      {
        question: "What is a lifecycle block in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🔄 <strong>Lifecycle block – Resource behavior control</strong></h3>
        <p>Defines how Terraform should treat a resource during plan/apply operations.</p>
        <pre><code>lifecycle {
  prevent_destroy = true
  ignore_changes  = [tags]
}</code></pre>
        <p><strong>In Practice:</strong> I use it to prevent accidental deletion of critical infra like prod VMs or databases.</p>
      </div>`    },
      {
        question: "What arguments can be used in lifecycle block?",
        answerHtml: `<div class="answer-rich">
        <h3>⚡ <strong>Lifecycle arguments</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>create_before_destroy</strong> – create new before deleting old</li>
          <li><strong>prevent_destroy</strong> – block accidental delete</li>
          <li><strong>ignore_changes</strong> – skip drift on specified attributes</li>
        </ul>
        <p><strong>In Practice:</strong> “ignore_changes” is useful when an external process modifies tags or IPs.</p>
      </div>`    },
      {
        question: "Which provisioner is used to join a VM to a domain using PowerShell?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Remote-exec with PowerShell</strong></h3>
        <p>Use the <strong>remote-exec</strong> provisioner with a PowerShell command to join domain post VM creation.</p>
        <pre><code>provisioner "remote-exec" {
  inline = ["Add-Computer -DomainName corp.local -Credential (Get-Credential) -Restart"]
}</code></pre>
        <p><strong>In Practice:</strong> Common in hybrid infra where AD join is part of post-deploy automation.</p>
      </div>`    },
      {
        question: "What happens if you manually install MS Office and re-run terraform apply?",
        answerHtml: `<div class="answer-rich">
        <h3>⚠️ <strong>Manual changes vs Terraform apply</strong></h3>
        <p>Terraform manages only defined resources. Manual installations (like MS Office) aren’t tracked — so <code>terraform apply</code> won’t affect them unless managed explicitly.</p>
        <p><strong>In Practice:</strong> Manual drift detection possible via <code>terraform plan</code> — shows differences if state and infra diverge.</p>
      </div>`    },
      {
        question: "What is a provisioner block — how is it used with VM deployment?",
        answerHtml: `<div class="answer-rich">
        <h3>🧱 <strong>Provisioner block in VM resource</strong></h3>
        <p>Attached inside a resource (like <code>azurerm_linux_virtual_machine</code>) to run post-deployment commands.</p>
        <pre><code>resource "azurerm_linux_virtual_machine" "vm" {
  name     = "webvm01"
  ...
  provisioner "remote-exec" {
    inline = ["sudo apt install nginx -y"]
  }
}</code></pre>
        <p><strong>In Practice:</strong> Used for quick bootstrap or post-provision setup.</p>
      </div>`    },
      {
        question: "What is the use of remote-exec?",
        answerHtml: `<div class="answer-rich">
        <h3>💻 <strong>remote-exec – Execute commands on remote VM</strong></h3>
        <p>Runs shell or PowerShell commands on a VM after creation via SSH or WinRM.</p>
        <pre><code>provisioner "remote-exec" {
  inline = ["sudo apt update", "sudo apt install nginx -y"]
}</code></pre>
        <p><strong>In Practice:</strong> Useful for provisioning scripts or service restarts post-deployment.</p>
      </div>`    },
      {
        question: "What is the use of local-exec?",
        answerHtml: `<div class="answer-rich">
        <h3>🧰 <strong>local-exec – Execute command locally</strong></h3>
        <p>Runs commands on the local machine (where Terraform runs), not on the remote target.</p>
        <pre><code>provisioner "local-exec" {
  command = "echo Deployment complete &gt;&gt; deploy.log"
}</code></pre>
        <p><strong>In Practice:</strong> I use it for triggering external pipelines, sending notifications, or executing scripts locally after apply.</p>
      </div>`    },
      {
        question: "When to use provisioners?",
        answerHtml: `<div class="answer-rich">
        <h3>🎯 <strong>When to use provisioners</strong></h3>
        <p>Use them only when configuration can’t be handled by cloud-init, userdata, or external tools.</p>
        <ul style="margin-left:1.2rem;">
          <li>Bootstrap setup (e.g., install agent or software)</li>
          <li>Post-deploy orchestration</li>
          <li>Triggering CI/CD hooks</li>
        </ul>
        <p><strong>In Practice:</strong> Keep provisioners minimal — use Ansible or DSC for heavy configuration.</p>
      </div>`    },
      {
        question: "What are the drawbacks of using provisioners?",
        answerHtml: `<div class="answer-rich">
        <h3>⚠️ <strong>Drawbacks of provisioners</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Not idempotent — re-runs can cause errors.</li>
          <li>Dependency on SSH/WinRM connectivity.</li>
          <li>Difficult to debug failures.</li>
          <li>Can break declarative model of Terraform.</li>
        </ul>
        <p><strong>In Practice:</strong> Use provisioners only as a last resort, not for core infrastructure logic.</p>
      </div>`    },
      {
        question: "What is a null resource and how is it used?",
        answerHtml: `<div class="answer-rich">
        <h3>🔧 <strong>Null resource usage</strong></h3>
        <p>Acts as a trigger for local or remote actions without managing real infrastructure.</p>
        <pre><code>resource "null_resource" "deploy" {
  provisioner "local-exec" {
    command = "az vm start myVM"
  }
}</code></pre>
        <p><strong>In Practice:</strong> Great for running custom commands, calling APIs, or integrating with CI/CD.</p>
      </div>`    },
      {
        question: "How do you automate post-deployment configuration with provisioners?",
        answerHtml: `<div class="answer-rich">
        <h3>🪄 <strong>Automating post-deployment steps</strong></h3>
        <p>Attach <strong>remote-exec</strong> or <strong>file</strong> provisioners to VM resource blocks to handle configuration after deployment.</p>
        <pre><code>provisioner "remote-exec" {
  inline = ["sudo systemctl enable nginx", "sudo systemctl start nginx"]
}</code></pre>
        <p><strong>In Practice:</strong> I integrate post-provision steps (agents, monitoring, tagging) using remote-exec inside VM blocks.</p>
      </div>`    }
    ]
  }
  ,
  {
    title: "10. Terraform – Modules (Child, Root, Registry, Reuse) & Patterns",
    questions: [
      {
        question: "What is a module in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>📦 <strong>Terraform Module – Logical grouping of resources</strong></h3>
        <p>A <strong>module</strong> is a container for multiple resources that are used together. It helps structure, reuse, and organize Terraform configurations.</p>
        <p><strong>In Practice:</strong> Every Terraform configuration is a module — even the root one.</p>
      </div>`    },
      {
        question: "What is the difference between child module and root module?",
        answerHtml: `<div class="answer-rich">
        <h3>🌳 <strong>Root vs Child Modules</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Root module:</strong> The main Terraform configuration directory where you run commands (contains main.tf, variables.tf, outputs.tf).</li>
          <li><strong>Child module:</strong> A reusable submodule called from the root or another module.</li>
        </ul>
        <p><strong>In Practice:</strong> I use root modules for environment orchestration (dev/prod) and child modules for reusable infra units (VNet, VM, Storage).</p>
      </div>`    },
      {
        question: "What is a pattern module?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Pattern module – Standardized reusable module</strong></h3>
        <p>A pattern module encapsulates best practices and pre-approved configurations for a specific resource type, promoting consistency across environments.</p>
        <p><strong>Example:</strong> A “networking” pattern module with VNet, subnets, and NSGs bundled.</p>
        <p><strong>In Practice:</strong> Pattern modules reduce rework and ensure compliance in large orgs.</p>
      </div>`    },
      {
        question: "Difference between pattern module and root-child module?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Pattern vs Root-Child Modules</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Root-child:</strong> Structural hierarchy for one deployment.</li>
          <li><strong>Pattern module:</strong> Organization-level reusable module template (generic + versioned).</li>
        </ul>
        <p><strong>In Practice:</strong> I build pattern modules once, then call them in root modules per environment.</p>
      </div>`    },
      {
        question: "What is resource and pattern module?",
        answerHtml: `<div class="answer-rich">
        <h3>🏗️ <strong>Resource module vs Pattern module</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Resource module:</strong> Manages a single resource type (e.g., storage, VM).</li>
          <li><strong>Pattern module:</strong> Combines multiple resource modules into a design pattern (e.g., full app environment).</li>
        </ul>
        <p><strong>In Practice:</strong> Resource modules = building blocks, pattern modules = solutions.</p>
      </div>`    },
      {
        question: "Can you explain your module structure?",
        answerHtml: `<div class="answer-rich">
        <h3>📁 <strong>Typical Terraform Module Structure</strong></h3>
        <pre><code>modules/
 ├── network/
 │   ├── main.tf
 │   ├── variables.tf
 │   ├── outputs.tf
 ├── vm/
 │   ├── main.tf
 │   ├── variables.tf
 │   ├── outputs.tf
envs/
 ├── dev/
 │   ├── main.tf
 │   ├── terraform.tfvars
 └── prod/
     ├── main.tf
     ├── terraform.tfvars</code></pre>
        <p><strong>In Practice:</strong> Keeps code DRY (Don’t Repeat Yourself) and enables modular CI/CD pipelines.</p>
      </div>`    },
      {
        question: "How did you upgrade your Terraform template recently?",
        answerHtml: `<div class="answer-rich">
        <h3>🔄 <strong>Upgrading Terraform templates</strong></h3>
        <p>I used <strong>terraform 0.13upgrade</strong> and <strong>terraform validate</strong> to refactor old syntax, followed by provider version updates and module version tagging.</p>
        <p><strong>Steps:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Update provider constraints in <code>terraform</code> block.</li>
          <li>Run <code>terraform init -upgrade</code>.</li>
          <li>Test in non-prod workspace.</li>
          <li>Commit and tag module version.</li>
        </ol>
        <p><strong>In Practice:</strong> Always test upgrades using a sandbox environment before production rollout.</p>
      </div>`    },
      {
        question: "What kind of modular approach do you follow to provision resources?",
        answerHtml: `<div class="answer-rich">
        <h3>🧱 <strong>My Modular Strategy</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Reusable resource-level modules (VNet, VM, NSG).</li>
          <li>Pattern modules for common stacks (WebApp + DB).</li>
          <li>Root modules per environment (dev, test, prod).</li>
        </ul>
        <p><strong>In Practice:</strong> This structure simplifies maintenance, versioning, and parallel team development.</p>
      </div>`    },
      {
        question: "What is a root module?",
        answerHtml: `<div class="answer-rich">
        <h3>🌐 <strong>Root module – Entry point</strong></h3>
        <p>The root module is the main working directory where Terraform commands (<code>init, plan, apply</code>) are executed.</p>
        <p><strong>In Practice:</strong> It orchestrates multiple child modules and manages environment-specific configs.</p>
      </div>`    },
      {
        question: "What are child modules?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Child modules – Reusable components</strong></h3>
        <p>Reusable Terraform modules called from root modules or other modules using the <code>module</code> block.</p>
        <p><strong>In Practice:</strong> Each infra unit (network, compute, storage) is a separate child module for isolation and reuse.</p>
      </div>`    },
      {
        question: "How to call a module?",
        answerHtml: `<div class="answer-rich">
        <h3>📞 <strong>Calling a module</strong></h3>
        <pre><code>module "network" {
  source = "../modules/network"
  vnet_name = var.vnet_name
  address_space = var.vnet_cidr
}</code></pre>
        <p><strong>In Practice:</strong> Keep source path relative in local modules, and versioned for registry modules.</p>
      </div>`    },
      {
        question: "What is the use of module block?",
        answerHtml: `<div class="answer-rich">
        <h3>🧱 <strong>module {} block – Calling reusable code</strong></h3>
        <p>The <code>module</code> block is used to reference a child or registry module with input variables.</p>
        <p>It ensures consistent provisioning and reusability.</p>
      </div>`    },
      {
        question: "What arguments are required in a module block?",
        answerHtml: `<div class="answer-rich">
        <h3>📋 <strong>Module block arguments</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>source:</strong> Path or registry address of module.</li>
          <li><strong>version:</strong> (optional) specific version for module.</li>
          <li><strong>Input variables:</strong> key-value pairs for module parameters.</li>
        </ul>
      </div>`    },
      {
        question: "How to pass variables from root to child module?",
        answerHtml: `<div class="answer-rich">
        <h3>🔗 <strong>Passing variables from root → child</strong></h3>
        <p>Root module passes values via <code>module</code> block using key-value pairs matching child’s <code>variable</code> definitions.</p>
        <pre><code>module "vm" {
  source  = "../modules/vm"
  vm_name = var.vm_name
}</code></pre>
        <p><strong>In Practice:</strong> Keeps configuration DRY and easy to modify per environment.</p>
      </div>`    },
      {
        question: "Can a module call another module?",
        answerHtml: `<div class="answer-rich">
        <h3>🔁 <strong>Nested module calls</strong></h3>
        <p>Yes. A module can call another module to form a layered or composable design.</p>
        <p><strong>In Practice:</strong> I use nested modules in pattern modules — e.g., a “web-app” pattern calls VM, NSG, and storage modules internally.</p>
      </div>`    },
      {
        question: "What is module source in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>📦 <strong>Module source – Where module code is fetched from</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Local path (<code>../modules/vm</code>)</li>
          <li>GitHub repo (<code>git::https://github.com/org/module.git</code>)</li>
          <li>Terraform Registry (<code>terraform-aws-modules/vpc/aws</code>)</li>
        </ul>
        <p><strong>In Practice:</strong> Always version control remote sources for consistent builds.</p>
      </div>`    },
      {
        question: "How to use modules from Terraform Registry?",
        answerHtml: `<div class="answer-rich">
        <h3>🌍 <strong>Terraform Registry modules</strong></h3>
        <pre><code>module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.0.0"
  name    = "myvpc"
  cidr    = "10.0.0.0/16"
}</code></pre>
        <p><strong>In Practice:</strong> I prefer verified registry modules to reduce boilerplate and speed up deployments.</p>
      </div>`    },
      {
        question: "How to organize modules in a Terraform project?",
        answerHtml: `<div class="answer-rich">
        <h3>📁 <strong>Organizing modules effectively</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>modules/</strong> folder for reusable components</li>
          <li><strong>envs/</strong> folder for environment-specific root configs</li>
          <li>Version each module for controlled updates</li>
        </ul>
        <p><strong>In Practice:</strong> This separation allows parallel development & simplified CI/CD pipelines.</p>
      </div>`    },
      {
        question: "How do you upgrade Terraform templates?",
        answerHtml: `<div class="answer-rich">
        <h3>🧭 <strong>Upgrading Terraform templates safely</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Backup state and version files.</li>
          <li>Upgrade Terraform binary.</li>
          <li>Run <code>terraform init -upgrade</code>.</li>
          <li>Validate and plan changes.</li>
          <li>Fix deprecated syntax and test in non-prod.</li>
        </ol>
        <p><strong>In Practice:</strong> I maintain module version tags (v1.0, v1.1) to isolate new template versions.</p>
      </div>`    }
    ]
  }
  ,
  {
    title: "11. Terraform – Dependencies & Logic",
    questions: [
      {
        question: "What are implicit and explicit dependencies?",
        answerHtml: `<div class="answer-rich">
        <h3>🔗 <strong>Implicit vs Explicit Dependencies</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Implicit Dependency:</strong> Automatically inferred when one resource references another. Example:<br/>
          <code>subnet_id = azurerm_subnet.main.id</code> — Terraform knows subnet must be created before the VM.</li>
          <li><strong>Explicit Dependency:</strong> Manually defined using <code>depends_on</code> when references are indirect or non-existent.</li>
        </ul>
        <p><strong>In Practice:</strong> I prefer implicit dependencies wherever possible to reduce graph complexity, and use explicit only for edge cases (like provisioners or module ordering).</p>
      </div>`    },
      {
        question: "Difference between depends_on and implicit dependency?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>depends_on vs Implicit Dependency</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>depends_on:</strong> Manually enforces creation/destruction order even if there’s no direct attribute reference.</li>
          <li><strong>Implicit Dependency:</strong> Automatically inferred through attribute references.</li>
        </ul>
        <p><strong>In Practice:</strong> I use <code>depends_on</code> in modules when dependencies cross boundaries (e.g., NSG depends on VNet but not referenced directly).</p>
      </div>`    },
      {
        question: "What is the move block in Terraform? Does it affect infrastructure?",
        answerHtml: `<div class="answer-rich">
        <h3>🚚 <strong>move block – State-only refactor</strong></h3>
        <p>The <strong>move block</strong> (introduced in Terraform 1.1+) is used to rename or relocate resources/modules in state without re-creating infrastructure.</p>
        <pre><code>moved {
  from = aws_instance.old_name
  to   = aws_instance.new_name
}</code></pre>
        <p><strong>Important:</strong> It only updates the state file mapping — actual infra remains unchanged.</p>
        <p><strong>In Practice:</strong> I use this during module refactoring or resource renaming to prevent accidental re-creation.</p>
      </div>`    },
      {
        question: "What is count and for_each? Which one will you use for creating 10 storage accounts?",
        answerHtml: `<div class="answer-rich">
        <h3>🔢 <strong>count vs for_each</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>count:</strong> Creates multiple identical resources using index-based iteration.</li>
          <li><strong>for_each:</strong> Creates resources using key-value mapping (map or set) – more readable and predictable for unique resources.</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>resource "azurerm_storage_account" "sa" {
  for_each = toset(["dev", "test", "prod"])
  name     = "storage&dollar;{each.key}"
}</code></pre>
        <p><strong>In Practice:</strong> For 10 storage accounts with unique names, I prefer <code>for_each</code> — easier tracking and no index shift risk.</p>
      </div>`    },
      {
        question: "Why is delete operation tricky when using count?",
        answerHtml: `<div class="answer-rich">
        <h3>⚠️ <strong>Count Deletion Issue</strong></h3>
        <p>With <code>count</code>, Terraform tracks resources by index. If you remove an element from the middle, all subsequent indices shift — causing unwanted deletions and re-creations.</p>
        <p><strong>Example:</strong> Deleting element 2 of 5 may cause 3–5 to be destroyed and re-created.</p>
        <p><strong>In Practice:</strong> I use <code>for_each</code> when each resource needs stable identity (e.g., named VMs or Storage Accounts).</p>
      </div>`    },
      {
        question: "What is lifecycle block and how does it handle dependencies?",
        answerHtml: `<div class="answer-rich">
        <h3>🔄 <strong>lifecycle block – Behavior control</strong></h3>
        <p><strong>Lifecycle block</strong> defines how Terraform manages create/update/delete of a resource and handles dependent behavior.</p>
        <pre><code>lifecycle {
  prevent_destroy = true
  ignore_changes  = [tags]
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li><strong>create_before_destroy:</strong> Ensures new resource is created before destroying old one.</li>
          <li><strong>ignore_changes:</strong> Avoids unnecessary updates when dependent attributes change.</li>
        </ul>
        <p><strong>In Practice:</strong> I use this to avoid downtime for VMs or production network resources during dependent changes.</p>
      </div>`    },
      {
        question: "How do you manage inter-resource dependencies in a module?",
        answerHtml: `<div class="answer-rich">
        <h3>🧠 <strong>Managing Dependencies Inside Modules</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>output → input chaining</strong> between modules (network output → VM input).</li>
          <li>Use <code>depends_on</code> only when implicit references don’t exist (e.g., tagging sequence).</li>
          <li>Use <code>lifecycle.create_before_destroy</code> for resource replacements to maintain order.</li>
        </ul>
        <p><strong>In Practice:</strong> I maintain dependency flow at module level to keep root module clean and predictable.</p>
      </div>`    },    
      {
        question: "What is a provider in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Terraform Provider — The Cloud Plugin</strong></h3>
        <p>A <strong>provider</strong> in Terraform acts as a bridge between Terraform and the target platform (like Azure, AWS, GCP, GitHub, Kubernetes, etc.).</p>
        <ul style="margin-left:1.2rem;">
          <li>Each provider exposes resources and data sources specific to that platform.</li>
          <li>Terraform uses providers to authenticate, create, update, and destroy infrastructure.</li>
          <li>Providers are downloaded automatically from the <strong>Terraform Registry</strong> or private registries.</li>
        </ul>
        <p><strong>Example:</strong> AzureRM, AWS, Kubernetes, Helm, GitHub are common providers.</p>
        <p><strong>In Practice:</strong> In an AKS project, I used <code>azurerm</code> for infra provisioning and <code>kubernetes</code> provider for post-deployment configuration (ConfigMaps, Secrets, etc.).</p>
      </div>`
      },
      {
        question: "How to configure a provider in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Provider Configuration</strong></h3>
        <p>Provider configuration is defined using the <code>provider</code> block inside your Terraform code.</p>
        <pre><code>provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
  tenant_id       = var.tenant_id
  client_id       = var.client_id
  client_secret   = var.client_secret
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li><strong>features {}</strong> is mandatory for AzureRM provider (acts as initialization block).</li>
          <li>Credentials can be passed via variables, environment variables, or managed identities.</li>
        </ul>
        <p><strong>In Practice:</strong> We use Service Principal credentials from Azure Key Vault in DevOps pipelines to initialize the AzureRM provider securely.</p>
      </div>`
      },
      {
        question: "What is the use of version argument in provider block?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Provider Version Argument</strong></h3>
        <p>The <code>version</code> argument ensures Terraform uses a specific version of the provider — preventing breaking changes from future releases.</p>
        <pre><code>provider "azurerm" {
  features {}
  version = "=3.89.0"
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Version locking guarantees consistent behavior across environments.</li>
          <li>You can specify exact, minimum, or range versions like <code>>= 3.0, < 4.0</code>.</li>
        </ul>
        <p><strong>In Practice:</strong> We fixed AzureRM version to <code>3.89.0</code> after a breaking change in the 4.x preview release broke Terraform apply in production.</p>
      </div>`
      },
      {
        question: "How to restrict provider version?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Restricting Provider Versions</strong></h3>
        <p>Provider versions are restricted using the <code>required_providers</code> block inside <code>terraform</code> configuration.</p>
        <pre><code>terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.89.0"
    }
  }
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li><code>~></code> allows patch-level updates (e.g., 3.89.x but not 3.90).</li>
          <li>Helps ensure reproducible builds and safe upgrades.</li>
        </ul>
        <p><strong>In Practice:</strong> This version restriction prevented developers from unintentionally upgrading provider versions during <code>terraform init -upgrade</code>.</p>
      </div>`
      },
      {
        question: "What is required_providers block?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📋 <strong>required_providers — Declaration of Dependencies</strong></h3>
        <p>The <code>required_providers</code> block defines which providers Terraform needs and where to download them from.</p>
        <pre><code>terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.15.0"
    }
  }
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Ensures consistent provider versions across developer and CI/CD environments.</li>
          <li>Also supports custom provider sources (e.g., private registries).</li>
        </ul>
        <p><strong>In Practice:</strong> Our Terraform repo used AzureRM + Helm providers to deploy AKS workloads with consistent provider versions via <code>required_providers</code>.</p>
      </div>`
      },
      {
        question: "What is alias in provider block?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Provider Aliasing — Multi-Account Config</strong></h3>
        <p>The <code>alias</code> keyword allows multiple configurations of the same provider (for example, deploying resources in multiple subscriptions or regions).</p>
        <pre><code>provider "azurerm" {
  features {}
  subscription_id = var.sub1
  alias           = "primary"
}

provider "azurerm" {
  features {}
  subscription_id = var.sub2
  alias           = "secondary"
}

resource "azurerm_resource_group" "rg1" {
  name     = "rg-primary"
  location = "eastus"
  provider = azurerm.primary
}</code></pre>
        <p><strong>In Practice:</strong> We used alias to deploy networking in shared subscription and compute resources in app subscription.</p>
      </div>`
      },
      {
        question: "How to use multiple providers in one configuration?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Multi-Provider Configuration</strong></h3>
        <p>You can use multiple providers (e.g., Azure + Kubernetes + Helm) in a single Terraform setup.</p>
        <pre><code>provider "azurerm" {
  features {}
}

provider "kubernetes" {
  host                   = azurerm_kubernetes_cluster.aks.kube_config[0].host
  client_certificate     = base64decode(azurerm_kubernetes_cluster.aks.kube_config[0].client_certificate)
  client_key             = base64decode(azurerm_kubernetes_cluster.aks.kube_config[0].client_key)
  cluster_ca_certificate = base64decode(azurerm_kubernetes_cluster.aks.kube_config[0].cluster_ca_certificate)
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>AzureRM provider creates AKS cluster.</li>
          <li>Kubernetes provider uses cluster credentials to deploy workloads.</li>
        </ul>
        <p><strong>In Practice:</strong> After creating AKS via AzureRM, we used Kubernetes provider to deploy Helm charts automatically from the same Terraform pipeline.</p>
      </div>`
      },
      {
        question: "What is provider inheritance?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🪶 <strong>Provider Inheritance</strong></h3>
        <p>Child modules automatically inherit the provider configuration from the parent module unless overridden.</p>
        <pre><code>module "network" {
  source = "./modules/network"
  # inherits default azurerm provider
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>If a module needs a different provider, you can explicitly pass it using the <code>providers</code> argument:</li>
          <pre><code>module "compute" {
  source    = "./modules/compute"
  providers = {
    azurerm = azurerm.secondary
  }
}</code></pre>
        </ul>
        <p><strong>In Practice:</strong> Networking module inherited main provider, but logging module used aliased provider pointing to a different subscription.</p>
      </div>`
      },
      {
        question: "How to authenticate Terraform with cloud providers?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Provider Authentication Methods</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Environment variables:</strong> Set credentials via env vars like <code>ARM_CLIENT_ID</code>, <code>ARM_CLIENT_SECRET</code>, etc.</li>
          <li><strong>Service Principal (Azure):</strong> Pass credentials in provider block or via pipeline variables.</li>
          <li><strong>Managed Identity:</strong> Use system-assigned or user-assigned identity for Terraform runner VM or pipeline agent.</li>
          <li><strong>Azure CLI login:</strong> If logged in via <code>az login</code>, provider automatically picks credentials.</li>
        </ul>
        <p><strong>In Practice:</strong> In DevOps pipelines, we use Azure service connection (SPN) and pass credentials as environment variables for non-interactive authentication.</p>
      </div>`
      },
      {
        question: "What is AzureRM provider and how is it configured?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>AzureRM Provider Configuration</strong></h3>
        <p><strong>AzureRM</strong> provider is used to manage Azure resources using Terraform.</p>
        <pre><code>terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.90.0"
    }
  }
}

provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
  tenant_id       = var.tenant_id
  client_id       = var.client_id
  client_secret   = var.client_secret
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li><strong>features {}</strong> is mandatory.</li>
          <li>Supports multiple auth methods: SPN, Azure CLI, Managed Identity.</li>
          <li>Used to deploy Azure resources like RG, VNet, AKS, Key Vault, etc.</li>
        </ul>
        <p><strong>In Practice:</strong> We configured AzureRM provider with service principal via Key Vault and deployed infra via Azure DevOps YAML pipelines.</p>
      </div>`
      },
    ]
  }
  ,
  {
    title: "12. Terraform – Basics & Core Concepts",
    questions: [
      {
        question: "What is Terraform and why do we use it in infrastructure provisioning?",
        answerHtml: `<div class="answer-rich">
        <h3>🌍 <strong>Terraform – Infrastructure as Code tool</strong></h3>
        <p><strong>Terraform</strong> is an open-source IaC tool by HashiCorp that automates the provisioning and management of cloud, on-prem, and hybrid infrastructure using declarative configuration files.</p>
        <p><strong>Why we use it:</strong> To ensure consistency, repeatability, and version control across infrastructure deployments.</p>
        <p><strong>In Practice:</strong> I use Terraform for provisioning complete cloud stacks (network, VMs, AKS, storage) with automated drift detection and rollback safety.</p>
      </div>`    },
      {
        question: "What are Terraform’s main features?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Key Features of Terraform</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Declarative language (HCL)</li>
          <li>State management</li>
          <li>Execution plan & change preview</li>
          <li>Multi-cloud orchestration</li>
          <li>Dependency graph management</li>
          <li>Module reusability</li>
          <li>Immutable infrastructure principle</li>
        </ul>
        <p><strong>In Practice:</strong> These features let me manage infra at scale with versioned, auditable changes.</p>
      </div>`    },
      {
        question: "What is Infrastructure as Code (IaC)?",
        answerHtml: `<div class="answer-rich">
        <h3>💻 <strong>Infrastructure as Code (IaC)</strong></h3>
        <p>IaC is a method of managing and provisioning infrastructure using code instead of manual processes.</p>
        <p><strong>Terraform implements IaC</strong> through HCL configurations that define desired infrastructure state.</p>
        <p><strong>In Practice:</strong> IaC helps me automate infra creation via CI/CD pipelines and maintain consistency across environments.</p>
      </div>`    },
      {
        question: "What are the benefits of Terraform in DevOps?",
        answerHtml: `<div class="answer-rich">
        <h3>🚀 <strong>Benefits of Terraform in DevOps</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Faster environment provisioning</li>
          <li>Version-controlled infrastructure</li>
          <li>Reusable modular code</li>
          <li>Cross-cloud automation (Azure, AWS, GCP)</li>
          <li>Integrates easily with CI/CD pipelines</li>
        </ul>
        <p><strong>In Practice:</strong> Using Terraform in my DevOps workflows reduces deployment time and improves infra reliability.</p>
      </div>`    },
      {
        question: "How does Terraform differ from Ansible, Puppet, or Chef?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Terraform vs Configuration Management Tools</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Terraform:</strong> Focuses on provisioning and managing infrastructure (IaC).</li>
          <li><strong>Ansible/Puppet/Chef:</strong> Focus on configuration management inside provisioned servers.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Terraform to build infra (VMs, networks) and Ansible for post-provisioning configuration (install software, patching).</p>
      </div>`    },
      {
        question: "What is Terraform Core and what are Providers?",
        answerHtml: `<div class="answer-rich">
        <h3>🏗️ <strong>Terraform Core & Providers</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Terraform Core:</strong> The engine that parses configs, builds dependency graphs, creates plans, and applies infrastructure changes.</li>
          <li><strong>Providers:</strong> Plugins that let Terraform interact with APIs (e.g., AzureRM, AWS, Kubernetes).</li>
        </ul>
        <p><strong>In Practice:</strong> Core drives orchestration; providers handle communication with actual infra services.</p>
      </div>`    },
      {
        question: "What are .tf and .tfstate files?",
        answerHtml: `<div class="answer-rich">
        <h3>📂 <strong>.tf vs .tfstate</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>.tf:</strong> Configuration files written in HCL that define desired infra.</li>
          <li><strong>.tfstate:</strong> JSON file that records the current state of deployed resources.</li>
        </ul>
        <p><strong>In Practice:</strong> I store state files in remote backends (Azure Storage, S3) for team collaboration and state locking.</p>
      </div>`    },
      {
        question: "When does the state file get created (init/plan/apply)?",
        answerHtml: `<div class="answer-rich">
  <h3>🕒 <strong>State File Creation</strong></h3>
  <p>The state file is created <strong>after the first successful terraform apply</strong>.</p>
  <p><strong>init</strong> – initializes backend & providers.<br/>
  <strong>plan</strong> – simulates execution (doesn’t write state).<br/>
  <strong>apply</strong> – actually creates/updates resources and writes state.</p>
  </div>`
      },
      {
        question: "What are the different stages in Terraform deployment?",
        answerHtml: `<div class="answer-rich">
        <h3>🪜 <strong>Terraform Deployment Stages</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Write:</strong> Define resources in .tf files.</li>
          <li><strong>Init:</strong> Initialize provider plugins and backend.</li>
          <li><strong>Plan:</strong> Preview the execution plan.</li>
          <li><strong>Apply:</strong> Execute and create/update resources.</li>
          <li><strong>Destroy:</strong> Tear down infrastructure.</li>
        </ol>
        <p><strong>In Practice:</strong> I integrate these stages in pipelines for automated infra promotion (dev → prod).</p>
      </div>`    },
      {
        question: "What is the lifecycle of a Terraform deployment?",
        answerHtml: `<div class="answer-rich">
        <h3>🔄 <strong>Terraform Deployment Lifecycle</strong></h3>
        <p>Lifecycle defines the flow from defining infrastructure to managing its updates and deletion.</p>
        <p><strong>Steps:</strong> Write → Init → Plan → Apply → Monitor → Destroy.</p>
        <p><strong>In Practice:</strong> I maintain versioned templates and use workspaces for environment-specific lifecycle management.</p>
      </div>`    },
      {
        question: "What is the Terraform workflow — init, plan, apply, destroy?",
        answerHtml: `<div class="answer-rich">
        <h3>⚡ <strong>Terraform Workflow Commands</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>init:</strong> Initializes backend and providers.</li>
          <li><strong>plan:</strong> Creates an execution plan (what will change).</li>
          <li><strong>apply:</strong> Applies the plan to build/update infra.</li>
          <li><strong>destroy:</strong> Destroys managed infra.</li>
        </ul>
        <p><strong>In Practice:</strong> I always review the plan before applying to avoid accidental changes.</p>
      </div>`    },
      {
        question: "What is terraform plan and apply command?",
        answerHtml: `<div class="answer-rich">
        <h3>🧠 <strong>terraform plan & apply</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>plan:</strong> Shows the execution plan – what will be created, modified, or destroyed.</li>
          <li><strong>apply:</strong> Executes the plan and applies the actual changes.</li>
        </ul>
        <p><strong>In Practice:</strong> I store plan output using <code>terraform plan -out=planfile</code> and apply it with <code>terraform apply planfile</code> for predictable deployments.</p>
      </div>`    },
      {
        question: "What is terraform fmt and why is it important?",
        answerHtml: `<div class="answer-rich">
        <h3>🧾 <strong>terraform fmt – Code formatting</strong></h3>
        <p><strong>terraform fmt</strong> formats Terraform files to canonical style for consistency and readability.</p>
        <p><strong>In Practice:</strong> I use it in pre-commit hooks in CI/CD so that all team members maintain consistent Terraform code style.</p>
      </div>`    },
      {
        question: "What is terraform validate used for?",
        answerHtml: `<div class="answer-rich">
        <h3>✅ <strong>terraform validate – Syntax & semantic check</strong></h3>
        <p><strong>terraform validate</strong> checks if the configuration is syntactically correct and internally consistent, without contacting providers.</p>
        <p><strong>In Practice:</strong> I run it as an early gate in CI to catch typos or missing variable references before planning.</p>
      </div>`    },
      {
        question: "What is the advantage of running terraform plan before apply?",
        answerHtml: `<div class="answer-rich">
        <h3>🔍 <strong>Why run plan before apply</strong></h3>
        <p><strong>terraform plan</strong> lets you preview the exact changes Terraform will make before execution.</p>
        <ul style="margin-left:1.2rem;">
          <li>Detect unwanted resource deletions or modifications</li>
          <li>Review and approve changes safely</li>
          <li>Generate reproducible plan files for apply</li>
        </ul>
        <p><strong>In Practice:</strong> I always use <code>terraform plan -out</code> in CI/CD to ensure human validation before apply.</p>
      </div>`    }
    ]
  }
  ,
  {
    title: "13. Terraform – State Management & Backend",
    questions: [
      {
        question: "What is Terraform state file and why is it required?",
        answerHtml: `<div class="answer-rich">
        <h3>📘 <strong>Terraform State File (terraform.tfstate)</strong></h3>
        <p>The <strong>state file</strong> is a JSON document that tracks the current real-world infrastructure Terraform manages.</p>
        <p><strong>Why it’s needed:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Maps Terraform resources to real cloud resources.</li>
          <li>Stores metadata and dependencies.</li>
          <li>Enables Terraform to detect drift and perform incremental updates.</li>
        </ul>
        <p><strong>In Practice:</strong> Without state, Terraform cannot know what already exists, leading to potential re-creation of resources.</p>
      </div>`    },

      {
        question: "What is a backend in Terraform?",
        answerHtml: `<div class="answer-rich">
        <h3>🏗️ <strong>Backend in Terraform</strong></h3>
        <p>A <strong>backend</strong> defines where Terraform stores its state file and how operations like locking are handled.</p>
        <p><strong>Example:</strong> Local backend stores state on disk, while remote backends (e.g., AzureRM, S3) store it centrally for team access.</p>
      </div>`    },
      {
        question: "What is the difference between local and remote backend?",
        answerHtml: `<div class="answer-rich">
        <h3>🌐 <strong>Local vs Remote Backend</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Local backend:</strong> State stored locally on machine ("terraform.tfstate").</li>
          <li><strong>Remote backend:</strong> State stored remotely (e.g., Azure Blob, AWS S3, Terraform Cloud).</li>
        </ul>
        <p><strong>In Practice:</strong> I use remote backend with state locking (via Azure Storage or DynamoDB) for team-based infra projects.</p>
      </div>`    },
      {
        question: "What are Terraform backends, and why are they important?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Importance of Backends</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Enable team collaboration via shared remote state.</li>
          <li>Provide state locking to avoid concurrent conflicts.</li>
          <li>Improve security with encryption and versioning.</li>
        </ul>
        <p><strong>In Practice:</strong> Remote backends also ensure centralized state recovery and drift detection.</p>
      </div>`    },
      {
        question: "How do you configure a remote backend in Azure?",
        answerHtml: `<div class="answer-rich">
        <h3>☁️ <strong>Remote Backend Configuration – Azure</strong></h3>
        <pre><code>
terraform {
  backend "azurerm" {
    resource_group_name  = "tfstate-rg"
    storage_account_name = "tfsatestorage"
    container_name       = "tfstate"
    key                  = "infra.tfstate"
  }
}
        </code></pre>
        <p><strong>In Practice:</strong> I enable <code>blob versioning</code> and <code>Soft Delete</code> on the container to prevent accidental loss.</p>
      </div>`    },
      {
        question: "How do you store Terraform state securely?",
        answerHtml: `<div class="answer-rich">
        <h3>🔐 <strong>Secure Storage of State File</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use remote backend (AzureRM/S3) with encryption-at-rest.</li>
          <li>Enable storage account access control (RBAC/Policies).</li>
          <li>Store secrets separately in Key Vault instead of plain text.</li>
          <li>Enable state versioning for rollback capability.</li>
        </ul>
      </div>`    },
      {
        question: "How do you manage Terraform state file locking?",
        answerHtml: `<div class="answer-rich">
        <h3>🔒 <strong>State File Locking</strong></h3>
        <p>State locking prevents multiple users from modifying the same state simultaneously.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Azure:</strong> Native locking via blob lease.</li>
          <li><strong>AWS:</strong> Locking with DynamoDB table.</li>
          <li><strong>Terraform Cloud:</strong> Automatically managed locking.</li>
        </ul>
      </div>`    },
      {
        question: "What is state locking and why is it important?",
        answerHtml: `<div class="answer-rich">
        <h3>🧱 <strong>State Locking Importance</strong></h3>
        <p>Locks prevent race conditions where two applies could overwrite each other’s changes, leading to inconsistent infra.</p>
        <p><strong>In Practice:</strong> Always ensure backend supports locking before enabling team collaboration.</p>
      </div>`    },
      {
        question: "How do you handle Terraform state file corruption?",
        answerHtml: `<div class="answer-rich">
        <h3>🧯 <strong>State File Corruption Recovery</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Restore previous version (from backend versioning).</li>
          <li>Run <code>terraform refresh</code> to rebuild state from real infra.</li>
          <li>Manually import missing resources with <code>terraform import</code>.</li>
        </ul>
        <p><strong>In Practice:</strong> Always enable state file versioning and soft delete for safe recovery.</p>
      </div>`
      },
      {
        question: "What happens if Terraform apply fails midway?",
        answerHtml: `<div class="answer-rich">
        <h3>⚠️ <strong>Apply Failure Handling</strong></h3>
        <p>If apply fails midway, Terraform updates the state with only successfully created resources.</p>
        <p>Next run of <code>terraform apply</code> continues from that partial state.</p>
        <p><strong>In Practice:</strong> I validate the plan before applying to reduce mid-run failures.</p>
      </div>`
      },
      {
        question: "How do you resolve state file lock issues?",
        answerHtml: `<div class="answer-rich">
        <h3>🔓 <strong>Resolving Lock Issues</strong></h3>
        <p>If a process crashes leaving the lock active, use:</p>
        <pre><code>terraform force-unlock &lt;LOCK_ID&gt;</code></pre>
        <p><strong>Note:</strong> Use cautiously — ensure no one else is applying simultaneously.</p>
      </div>`
      },
      {
        question: "What happens if state file is deleted? How do you recover it?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Recovering Deleted State File</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Restore from backend versioning or backup.</li>
          <li>If unavailable, re-import existing infra with <code>terraform import</code>.</li>
          <li>Manually recreate state structure if needed (last resort).</li>
        </ul>
        <p><strong>In Practice:</strong> I always enable blob versioning + daily backup for remote state containers.</p>
      </div>`
      },
      {
        question: "You have 1000 resource groups but lost state file — how will you rebuild infra?",
        answerHtml: `<div class="answer-rich">
        <h3>💪 <strong>Rebuilding Lost State at Scale</strong></h3>
        <p>Use <code>terraform import</code> in automation:</p>
        <pre><code>
for rg in &dollar;(az group list --query "[].name" -o tsv); do
  terraform import azurerm_resource_group.&dollar;rg /subscriptions/&lt;sub&gt;/resourceGroups/&dollar;rg
done
        </code></pre>
        <p><strong>In Practice:</strong> I script imports for large infra recovery when state is lost.</p>
      </div>`
      },
      {
        question: "What is terraform refresh command and what does it do?",
        answerHtml: ` <div class="answer-rich">
        <h3>🔄 <strong>terraform refresh</strong></h3>
        <p><strong>terraform refresh</strong> updates the state file to match the actual infrastructure.</p>
        <p><strong>Use Case:</strong> Detect manual changes made outside Terraform and bring the state back in sync.</p>
      </div>`
      },
      {
        question: "How will you determine a zero drift condition?",
        answerHtml: ` <div class="answer-rich">
        <h3>🧭 <strong>Zero Drift Verification</strong></h3>
        <p>Run:</p>
        <pre><code>terraform plan</code></pre>
        <p>If the plan shows <strong>“No changes. Infrastructure is up-to-date”</strong> → zero drift condition confirmed.</p>
      </div>`
      },
      {
        question: "What is drift detection in Terraform?",
        answerHtml: ` <div class="answer-rich">
        <h3>🌊 <strong>Drift Detection</strong></h3>
        <p><strong>Drift</strong> occurs when actual infrastructure deviates from Terraform state (e.g., manual change).</p>
        <p><strong>Detection:</strong> Using <code>terraform plan</code> or <code>terraform refresh</code>.</p>
        <p><strong>In Practice:</strong> I schedule drift detection checks in CI/CD pipelines to detect manual modifications early.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "14. Infrastructure as Code (IaC) & Automation",
    questions: [
      {
        question: "What is Infrastructure as Code (IaC)?",
        answerHtml: `<div class="answer-rich">
        <h3>🏗️ <strong>Infrastructure as Code (IaC) — Concept</strong></h3>
        <p>IaC means defining and provisioning infrastructure using code instead of manual configurations. It brings DevOps principles (version control, CI/CD, automation) into infrastructure management.</p>
        <p><strong>Example:</strong> Using Terraform scripts to create VNets, VMs, and Storage instead of clicking in Azure Portal.</p>
        <p><strong>Benefits:</strong> Consistency, repeatability, scalability, rollback capability, and full infrastructure version control.</p>
        <p><strong>In practice:</strong> I manage infra via Terraform pipelines integrated with Azure DevOps to ensure automated, auditable deployments.</p>
      </div>`
      },
      {
        question: "What is the difference between Terraform and ARM templates?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Terraform vs ARM Templates</strong></h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Aspect</th><th>Terraform</th><th>ARM Template</th></tr>
          <tr><td>Language</td><td>HCL (HashiCorp Configuration Language)</td><td>JSON</td></tr>
          <tr><td>Provider Support</td><td>Multi-cloud (Azure, AWS, GCP)</td><td>Azure only</td></tr>
          <tr><td>State Management</td><td>Maintains a state file (.tfstate)</td><td>No explicit state file</td></tr>
          <tr><td>Reusability</td><td>Supports modules and remote backends</td><td>Less modular, hard to reuse</td></tr>
          <tr><td>Learning Curve</td><td>Simple, declarative syntax</td><td>Complex JSON structure</td></tr>
        </table>
        <p><strong>In real projects:</strong> I prefer Terraform because it’s cloud-agnostic, integrates with CI/CD, and offers versioned state management.</p>
      </div>`
      },
      {
        question: "What is Infrastructure Drift, and how do you manage it?",
        answerHtml: `<div class="answer-rich">
        <h3>🌊 <strong>Infrastructure Drift & Management</strong></h3>
        <p><strong>Drift</strong> happens when someone changes infrastructure manually (outside Terraform), so the actual cloud resources no longer match your IaC code.</p>
        <p><strong>Detection:</strong> Run <code>terraform plan</code> or <code>terraform refresh</code> to compare real resources vs state.</p>
        <p><strong>Management strategy:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Restrict manual changes via RBAC & policies.</li>
          <li>Use CI/CD pipelines for all infra updates.</li>
          <li>Run periodic drift detection jobs in pipelines.</li>
        </ul>
        <p><strong>Example:</strong> I set up a nightly pipeline that runs <code>terraform plan -detailed-exitcode</code> to detect any drift automatically.</p>
      </div>`
      },
      {
        question: "How do you handle state management in IaC tools?",
        answerHtml: `<div class="answer-rich">
        <h3>🗂️ <strong>Terraform State Management</strong></h3>
        <p>Terraform maintains a <strong>state file (.tfstate)</strong> that maps resources defined in code to actual cloud resources.</p>
        <p><strong>Best practices:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>remote backend</strong> (like Azure Storage, S3) for shared team access.</li>
          <li>Enable <strong>state locking</strong> (using Azure Blob or DynamoDB) to prevent concurrent modifications.</li>
          <li>Never commit <code>.tfstate</code> in Git; it may contain sensitive data.</li>
        </ul>
        <pre><code>backend "azurerm" {
  resource_group_name  = "riteshrg"
  storage_account_name = "riteshstorageacc"
  container_name       = "riteshcontainer"
  key                  = "main.tfstate"
}</code></pre>
        <p><strong>In practice:</strong> I store all Terraform states in a secured Azure Storage backend with RBAC-controlled access.</p>
      </div>`
      },
      {
        question: "How will you pass custom scripts to VMs during creation?",
        answerHtml: `<div class="answer-rich">
        <h3>💻 <strong>Custom Script Execution on VM</strong></h3>
        <p>You can use Terraform <strong>custom_data</strong> or <strong>provisioners</strong> to execute shell/PowerShell scripts during VM provisioning.</p>
        <p><strong>Common options:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>custom_data:</strong> Base64-encoded script runs at first boot via cloud-init (Linux).</li>
          <li><strong>Custom Script Extension:</strong> Executes scripts post-deployment for configuration.</li>
        </ul>
        <pre><code>resource "azurerm_virtual_machine_extension" "init" {
  name                 = "vm-init"
  virtual_machine_id   = azurerm_linux_virtual_machine.myvm.id
  publisher            = "Microsoft.Azure.Extensions"
  type                 = "CustomScript"
  type_handler_version = "2.1"
  settings = <<SETTINGS
    {
      "script": "sudo apt update && sudo apt install nginx -y"
    }
  SETTINGS
}</code></pre>
        <p><strong>Use case:</strong> I use it to bootstrap monitoring agents or app dependencies post-VM deployment.</p>
      </div>`
      },
      {
        question: "What is the difference between local-exec and remote-exec provisioners?",
        answerHtml: `<div class="answer-rich">
        <h3>🔧 <strong>local-exec vs remote-exec</strong></h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Provisioner</th><th>Runs Where</th><th>Use Case</th></tr>
          <tr><td>local-exec</td><td>On the machine running Terraform</td><td>To trigger local scripts, CLI commands, or API calls post-deploy (e.g., send Slack message, trigger pipeline).</td></tr>
          <tr><td>remote-exec</td><td>Inside the target resource (e.g., VM)</td><td>To execute configuration commands directly on the resource (e.g., install packages).</td></tr>
        </table>
        <p><strong>In real use:</strong> I use <code>remote-exec</code> for in-VM setup and <code>local-exec</code> for notifying external systems like monitoring or CI/CD pipelines.</p>
      </div>`
      },
      {
        question: "Explain modular approach in Terraform — how child and parent modules interact.",
        answerHtml: `<div class="answer-rich">
        <h3>📦 <strong>Modular Terraform Architecture</strong></h3>
        <p>Modules help organize Terraform code by grouping reusable resources together. The <strong>root (parent) module</strong> calls <strong>child modules</strong> and passes inputs/outputs.</p>
        <p><strong>Structure example:</strong></p>
        <pre><code>modules/
 ├─ vnet/
 │   └─ main.tf
 ├─ vm/
 │   └─ main.tf
main.tf (root)
</code></pre>
        <p><strong>Parent to Child Interaction:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Child exposes <code>variables.tf</code> for input parameters.</li>
          <li>Parent passes those values during module call.</li>
          <li>Child outputs are returned to parent using <code>output.tf</code>.</li>
        </ol>
        <pre><code>module "vm" {
  source     = "./modules/vm"
  vnet_name  = module.vnet.name
  subnet_id  = module.vnet.subnet_id
}</code></pre>
        <p><strong>In practice:</strong> I maintain separate modules per resource type (network, compute, storage) and reuse them across environments (dev, QA, prod).</p>
      </div>`
      },
      {
        question: "What is the strategy to update IaC for a new feature without impacting production?",
        answerHtml: `<div class="answer-rich">
        <h3>🧠 <strong>Safe IaC Update Strategy</strong></h3>
        <p><strong>Goal:</strong> Introduce new infra features while keeping production stable.</p>
        <p><strong>Best practices I follow:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Branch-based workflow:</strong> Create feature branch → test infra in non-prod.</li>
          <li><strong>Use workspaces:</strong> Separate state files for dev / qa / prod.</li>
          <li><strong>Run terraform plan:</strong> Always validate impact before apply.</li>
          <li><strong>Use targeted apply:</strong> <code>terraform apply -target=module.new_component</code> for isolated rollout.</li>
          <li><strong>Implement approvals:</strong> Include manual approval step in Azure DevOps pipeline for prod changes.</li>
        </ol>
        <p><strong>Example:</strong> When I added a new subnet for AKS, I first tested in staging workspace, validated routing, and then merged to production branch after approval.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "15. Terraform Providers & Authentication",
    questions: [
      {
        question: "What are Terraform providers?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Terraform Providers — Bridge to External Systems</strong></h3>
        <p><strong>Providers</strong> are plugins in Terraform that enable interaction with APIs of various platforms — cloud, SaaS, or infrastructure tools.</p>
        <ul style="margin-left:1.2rem;">
          <li>They define <strong>resources</strong> (what you can create) and <strong>data sources</strong> (what you can read).</li>
          <li>Examples: <code>azurerm</code> (Azure), <code>aws</code> (AWS), <code>google</code> (GCP), <code>kubernetes</code> (K8s).</li>
        </ul>
        <pre><code>provider "azurerm" {
  features {}
}</code></pre>
        <p><strong>In Practice:</strong> I use multiple providers to provision both Azure infrastructure and Kubernetes workloads from a single Terraform project.</p>
      </div>`
      },
      {
        question: "How does Terraform provider authentication work?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Provider Authentication — Secure API Access</strong></h3>
        <p>Terraform authenticates with cloud providers via environment variables, CLI sessions, or service principals.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>AzureRM:</strong> Auth via <code>az login</code> or a Service Principal (App ID + Secret).</li>
          <li><strong>AWS:</strong> Auth via <code>AWS_ACCESS_KEY_ID</code> and <code>AWS_SECRET_ACCESS_KEY</code>.</li>
          <li><strong>GCP:</strong> Auth via <code>GOOGLE_CREDENTIALS</code> (JSON key file).</li>
        </ul>
        <pre><code>provider "azurerm" {
  features {}
  subscription_id = var.sub_id
  tenant_id       = var.tenant_id
  client_id       = var.client_id
  client_secret   = var.client_secret
}</code></pre>
        <p><strong>Best Practice:</strong> Use environment variables or secret managers (Key Vault, Vault, etc.) — never hardcode credentials.</p>
      </div>`
      },
      {
        question: "How do you use AzureRM provider?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>AzureRM Provider — Manage Azure Resources</strong></h3>
        <p><strong>AzureRM</strong> is Terraform’s official provider for Azure.</p>
        <pre><code>terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.100.0"
    }
  }
}

provider "azurerm" {
  features {}
}</code></pre>
        <p><strong>Authentication Methods:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Azure CLI (<code>az login</code>)</li>
          <li>Service Principal (client_id / client_secret)</li>
          <li>Managed Identity (for pipelines or AKS)</li>
        </ul>
        <p><strong>In Practice:</strong> I use Managed Identity in DevOps pipelines to authenticate Terraform automatically without storing secrets.</p>
      </div>`
      },
      {
        question: "Can Terraform handle multiple providers?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Multi-Provider Support in Terraform</strong></h3>
        <p>Yes — Terraform can use multiple providers simultaneously (e.g., Azure + AWS + Kubernetes).</p>
        <pre><code>provider "azurerm" {
  alias  = "azure"
  features {}
}

provider "aws" {
  alias  = "aws"
  region = "us-east-1"
}</code></pre>
        <p>You can then reference provider aliases in resources:</p>
        <pre><code>resource "azurerm_resource_group" "rg" {
  provider = azurerm.azure
  name     = "rg-demo"
  location = "East US"
}</code></pre>
        <p><strong>In Practice:</strong> I use this approach for hybrid deployments — e.g., deploying Azure network + AWS backup.</p>
      </div>`
      },
      {
        question: "What are provider version constraints?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Provider Version Constraints — Stability Control</strong></h3>
        <p>Version constraints lock provider versions to ensure consistent builds across environments.</p>
        <pre><code>terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.100.0"
    }
  }
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li><code>~> 3.100.0</code> → allows minor updates but not breaking changes.</li>
          <li><code>= 3.90.0</code> → exact version only.</li>
          <li><code>>= 3.80.0</code> → any version above minimum.</li>
        </ul>
        <p><strong>In Practice:</strong> I pin versions to avoid unexpected behavior when HashiCorp releases new provider updates.</p>
      </div>`
      },
      {
        question: "What is the difference between provider and provisioner?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Provider vs Provisioner — Core Difference</strong></h3>
        <table border="1" style="border-collapse:collapse; width:100%;">
          <tr><th>Aspect</th><th>Provider</th><th>Provisioner</th></tr>
          <tr><td>Purpose</td><td>Manages cloud/infrastructure resources via APIs</td><td>Executes scripts or configuration inside created resources</td></tr>
          <tr><td>Scope</td><td>High-level (Azure, AWS, etc.)</td><td>Low-level (e.g., file copy, remote-exec)</td></tr>
          <tr><td>Example</td><td><code>azurerm</code>, <code>aws</code>, <code>kubernetes</code></td><td><code>local-exec</code>, <code>remote-exec</code></td></tr>
        </table>
        <p><strong>In Practice:</strong> I rarely use provisioners — prefer automation via configuration management (Ansible, cloud-init).</p>
      </div>`
      },
      {
        question: "How do you manage provider versioning?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📌 <strong>Managing Provider Versions</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Specify provider version constraints in <code>required_providers</code>.</li>
          <li>Lock versions using <code>.terraform.lock.hcl</code> (auto-generated on init).</li>
          <li>Update manually with:
            <pre><code>terraform init -upgrade</code></pre>
          </li>
        </ul>
        <p><strong>In Practice:</strong> I commit <code>.terraform.lock.hcl</code> to source control for consistent builds across Dev, QA, and Prod.</p>
      </div>`
      },
      {
        question: "How do you authenticate Terraform with Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔑 <strong>Authenticating Terraform with Azure</strong></h3>
        <p>Terraform can authenticate to Azure in multiple ways:</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Azure CLI:</strong> Use local login session.<br><code>az login</code></li>
          <li><strong>Service Principal:</strong> Recommended for CI/CD.<br>
            <pre><code>export ARM_CLIENT_ID=xxxx
export ARM_CLIENT_SECRET=xxxx
export ARM_TENANT_ID=xxxx
export ARM_SUBSCRIPTION_ID=xxxx</code></pre>
          </li>
          <li><strong>Managed Identity:</strong> For Azure DevOps agents or AKS.
            <pre><code>provider "azurerm" {
  use_msi = true
  features {}
}</code></pre>
          </li>
        </ul>
        <p><strong>Best Practice:</strong> Use Managed Identity or Key Vault integration — never store credentials in code or state files.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "16. Terraform Variables, Locals & Outputs",
    questions: [
      {
        question: "What are input variables and output variables?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔤 <strong>Input & Output Variables — Parameterization in Terraform</strong></h3>
        <p><strong>Input Variables:</strong> Used to pass dynamic values into Terraform configurations (like parameters).</p>
        <p><strong>Output Variables:</strong> Used to display or export information after resource creation (e.g., IP, IDs).</p>
        <pre><code># Input variable
variable "location" {
  type    = string
  default = "eastus"
}

# Output variable
output "vm_ip" {
  value = azurerm_public_ip.myip.ip_address
}</code></pre>
        <p><strong>In Practice:</strong> Inputs make modules reusable; outputs help pass values between modules or to CI/CD pipelines.</p>
      </div>`
      },
      {
        question: "What is the difference between locals and variables?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Locals vs Variables — Simplifying Code Logic</strong></h3>
        <p><strong>Variables:</strong> Take user or external input.</p>
        <p><strong>Locals:</strong> Used for computed or derived values inside Terraform code — cannot be overridden externally.</p>
        <pre><code>variable "env" {
  default = "prod"
}

locals {
  rg_name = "rg-&dollar;{var.env}"
}</code></pre>
        <p><strong>In Practice:</strong> I use <code>locals</code> to simplify expressions and avoid repeating long interpolations.</p>
      </div>`
      },
      {
        question: "What are Terraform variable types (string, map, object, list)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔢 <strong>Terraform Variable Types</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>string</strong> → single value (<code>"eastus"</code>)</li>
          <li><strong>number</strong> → numeric (<code>3</code>)</li>
          <li><strong>bool</strong> → true/false</li>
          <li><strong>list</strong> → ordered list of values (<code>["dev","qa","prod"]</code>)</li>
          <li><strong>map</strong> → key-value pairs (<code>{ env="prod", region="eastus" }</code>)</li>
          <li><strong>object</strong> → complex structured data</li>
        </ul>
        <pre><code>variable "tags" {
  type = map(string)
  default = {
    owner = "team-devops"
    env   = "prod"
  }
}</code></pre>
        <p><strong>In Practice:</strong> I use maps and objects to define structured configs like tags, network ranges, or security rules.</p>
      </div>`
      },
      {
        question: "What is the use of a variable group?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Variable Groups — Centralized Variable Management</strong></h3>
        <p>Variable Groups are used in CI/CD pipelines (like Azure DevOps) to store and reuse Terraform variables across multiple stages or pipelines.</p>
        <ul style="margin-left:1.2rem;">
          <li>Securely manage shared variables.</li>
          <li>Centralized update instead of editing multiple pipelines.</li>
        </ul>
        <p><strong>In Practice:</strong> I keep environment-wide variables (subscription ID, location, resource prefix) in variable groups for reusability and consistency.</p>
      </div>`
      },
      {
        question: "How do you handle sensitive variables in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Handling Sensitive Variables Securely</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Mark variable as <code>sensitive = true</code> in Terraform.</li>
          <li>Use environment variables or secret managers (Azure Key Vault, Vault, GitHub Secrets).</li>
          <li>Never commit sensitive data (client secrets, passwords) to Git.</li>
        </ul>
        <pre><code>variable "client_secret" {
  type      = string
  sensitive = true
}</code></pre>
        <p><strong>In Practice:</strong> I integrate Terraform with Azure Key Vault to dynamically pull secrets during runtime.</p>
      </div>`
      },
      {
        question: "How do you secure sensitive outputs in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Securing Sensitive Outputs</strong></h3>
        <p>Mark outputs as <code>sensitive = true</code> to prevent them from being displayed in logs or CLI output.</p>
        <pre><code>output "admin_password" {
  value     = azurerm_linux_virtual_machine.vm.admin_password
  sensitive = true
}</code></pre>
        <p><strong>In Practice:</strong> I use this for outputs like passwords, keys, and connection strings — keeps them hidden in DevOps logs.</p>
      </div>`
      },
      {
        question: "What is the use of terraform output block?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📤 <strong>Terraform Output Block — Exposing Key Information</strong></h3>
        <p>Used to display or pass computed values (like IPs or IDs) after resource creation.</p>
        <pre><code>output "public_ip" {
  value = azurerm_public_ip.myip.ip_address
}</code></pre>
        <p><strong>Use Cases:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Debugging and validation after apply.</li>
          <li>Sharing outputs with other modules or pipelines.</li>
        </ul>
        <p><strong>In Practice:</strong> I use output blocks to feed values into downstream deployment stages (like AKS or App Services).</p>
      </div>`
      },
      {
        question: "Write the steps of output block in Terraform.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Steps to Create an Output Block</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Identify the resource attribute to output (e.g., IP, name).</li>
          <li>Create an <code>output</code> block in your Terraform file.</li>
          <li>Assign value using resource reference.</li>
          <li>Run <code>terraform apply</code> to view output values.</li>
        </ol>
        <pre><code>output "rg_name" {
  value = azurerm_resource_group.main.name
}</code></pre>
        <p><strong>In Practice:</strong> I often pipe outputs to scripts or use them for chaining module deployments.</p>
      </div>`
      },
      {
        question: "How do you provide default values to variables?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Default Variable Values</strong></h3>
        <p>Set default values in the <code>variable</code> block. If not overridden, Terraform uses the default.</p>
        <pre><code>variable "location" {
  type    = string
  default = "eastus"
}</code></pre>
        <p><strong>In Practice:</strong> I assign defaults for non-sensitive, environment-wide values like region or SKU.</p>
      </div>`
      },
      {
        question: "How do you pass variables from CLI or tfvars file?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💻 <strong>Passing Variables — Multiple Options</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>CLI:</strong> <code>terraform apply -var="location=eastus"</code></li>
          <li><strong>TFVARS file:</strong>
            <pre><code># terraform.tfvars
location = "eastus"
vm_count = 2</code></pre>
            Run: <code>terraform apply -var-file="terraform.tfvars"</code>
          </li>
          <li><strong>Environment Variables:</strong> <code>export TF_VAR_location=eastus</code></li>
        </ul>
        <p><strong>In Practice:</strong> I prefer <code>.tfvars</code> files for environment-based configuration management.</p>
      </div>`
      },
      {
        question: "What are local values and how are they used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧮 <strong>Local Values — Simplify Repetitive Logic</strong></h3>
        <p><code>locals</code> define intermediate values to make code cleaner and avoid duplication.</p>
        <pre><code>locals {
  prefix = "&dollar;{var.env}-&dollar;{var.app}"
}

resource "azurerm_resource_group" "rg" {
  name     = "&dollar;{local.prefix}-rg"
  location = var.location
}</code></pre>
        <p><strong>In Practice:</strong> I use locals to standardize naming conventions and reduce code repetition.</p>
      </div>`
      },
      {
        question: "Difference between data source and local block?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📘 <strong>Data Source vs Local Block</strong></h3>
        <table border="1" style="border-collapse:collapse; width:100%;">
          <tr><th>Aspect</th><th>Data Source</th><th>Local Block</th></tr>
          <tr><td>Purpose</td><td>Fetch existing resource info from provider</td><td>Compute or store intermediate values</td></tr>
          <tr><td>Source</td><td>External (API / cloud resource)</td><td>Internal (Terraform logic)</td></tr>
          <tr><td>Example</td><td><code>data "azurerm_resource_group" "rg" { name = "prod-rg" }</code></td><td><code>locals { rg_name = "prod-rg" }</code></td></tr>
        </table>
        <p><strong>In Practice:</strong> I use <code>data</code> blocks for referencing pre-existing infra and <code>locals</code> for computed names or tags.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "17. Terraform - Modules & Reusability",
    questions: [
      {
        question: "What are modules in Terraform and why are they important?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Terraform Modules — Reusable Infrastructure Blocks</strong></h3>
        <p><strong>Definition:</strong> A Terraform <code>module</code> is a container for multiple resources used together. Every Terraform configuration has at least one root module, and you can create child modules for reusability.</p>
        <p><strong>Importance:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Encapsulates reusable infrastructure logic.</li>
          <li>Improves code maintainability and DRY (Don’t Repeat Yourself).</li>
          <li>Allows version control and standardization across environments.</li>
        </ul>
        <pre><code>module "network" {
  source = "./modules/network"
  vnet_name = "vnet-prod"
  location  = var.location
}</code></pre>
        <p><strong>In Practice:</strong> I modularize common components like VNets, AKS clusters, and storage accounts for use across multiple projects.</p>
      </div>`
      },
      {
        question: "What is the difference between Terraform modules and resources?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Modules vs Resources — Abstraction Levels</strong></h3>
        <table border="1" style="border-collapse:collapse; width:100%;">
          <tr><th>Aspect</th><th>Resources</th><th>Modules</th></tr>
          <tr><td>Purpose</td><td>Define individual infrastructure components.</td><td>Group related resources for reuse and organization.</td></tr>
          <tr><td>Granularity</td><td>Fine-grained (e.g., VM, Storage Account)</td><td>High-level abstraction (e.g., Full network stack)</td></tr>
          <tr><td>Reusability</td><td>Limited</td><td>Highly reusable across environments</td></tr>
          <tr><td>Example</td><td><code>resource "azurerm_vnet"</code></td><td><code>module "vnet_module"</code></td></tr>
        </table>
        <p><strong>In Practice:</strong> Modules are like templates that call multiple resources under one logical block.</p>
      </div>`
      },
      {
        question: "How do you create a reusable module?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧰 <strong>Creating a Reusable Module</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Create a folder (e.g., <code>modules/vnet</code>).</li>
          <li>Add <code>main.tf</code>, <code>variables.tf</code>, and <code>outputs.tf</code> files.</li>
          <li>Define resources inside <code>main.tf</code>.</li>
          <li>Use <code>variable</code> blocks for configurable values.</li>
          <li>Expose key attributes using <code>output</code> blocks.</li>
          <li>Call the module in root config:</li>
        </ol>
        <pre><code>module "vnet" {
  source = "./modules/vnet"
  vnet_name = "vnet-prod"
  location  = var.location
}</code></pre>
        <p><strong>In Practice:</strong> I keep all reusable modules (network, compute, AKS, storage) in a common repo for team-wide use.</p>
      </div>`
      },
      {
        question: "What is a child module and how do you call it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>👶 <strong>Child Modules — Nested Reusable Blocks</strong></h3>
        <p>A <strong>child module</strong> is any module called from another module (the root module or another child module).</p>
        <p>They are defined using the <code>module</code> block inside another configuration.</p>
        <pre><code># Root module (main.tf)
module "vnet" {
  source = "./modules/vnet"
  location = var.location
}</code></pre>
        <p><strong>In Practice:</strong> I use child modules to separate application layers — for example, networking, AKS, and database modules within one environment.</p>
      </div>`
      },
      {
        question: "What are shared modules and how do you manage them?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Shared Modules — Centralized Reusability</strong></h3>
        <p><strong>Definition:</strong> Shared modules are reusable modules stored in a shared repository or Terraform Registry, used across teams or environments.</p>
        <p><strong>Best Practices:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Store in a centralized Git repo (e.g., <code>git::https://.../terraform-modules.git//network</code>).</li>
          <li>Use semantic versioning for stability (<code>ref=v1.2.0</code>).</li>
          <li>Keep consistent structure: <code>main.tf</code>, <code>variables.tf</code>, <code>outputs.tf</code>.</li>
        </ul>
        <pre><code>module "network" {
  source = "git::https://github.com/org/terraform-modules.git//vnet?ref=v1.0.0"
}</code></pre>
        <p><strong>In Practice:</strong> My teams maintain a shared repo of Terraform modules for Azure networking, compute, and storage.</p>
      </div>`
      },
      {
        question: "What are parent and child modules in a 3-tier app?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Parent & Child Modules in a 3-Tier Architecture</strong></h3>
        <p>In a 3-tier setup (Web, App, DB):</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Parent module:</strong> The root configuration that orchestrates the overall deployment.</li>
          <li><strong>Child modules:</strong> Individual module blocks for each layer (web tier, app tier, db tier).</li>
        </ul>
        <pre><code># parent/main.tf
module "web_tier" {
  source = "../modules/web"
}

module "app_tier" {
  source = "../modules/app"
}

module "db_tier" {
  source = "../modules/db"
}</code></pre>
        <p><strong>In Practice:</strong> I structure 3-tier environments using one parent (root) that calls tier-specific child modules for modular deployment.</p>
      </div>`
      },
      {
        question: "What are Terraform best practices for module versioning?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Best Practices for Module Versioning</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>semantic versioning</strong> (<code>v1.0.0</code>, <code>v1.1.0</code>, <code>v2.0.0</code>).</li>
          <li>Pin module versions explicitly using <code>?ref=</code> in source URL or <code>version</code> in registry.</li>
          <li>Tag releases in Git to control stability.</li>
          <li>Test module updates in staging before production rollout.</li>
        </ul>
        <pre><code>module "aks" {
  source  = "git::https://github.com/org/terraform-modules.git//aks?ref=v2.1.0"
}</code></pre>
        <p><strong>In Practice:</strong> I always lock module versions to avoid breaking changes from upstream updates.</p>
      </div>`
      },
      {
        question: "How do you manage Terraform modules in version control?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Managing Modules in Version Control (Git)</strong></h3>
        <p><strong>Approach:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Keep modules in a separate <strong>Terraform Modules Repo</strong> (e.g., <code>terraform-modules</code>).</li>
          <li>Each module resides in its own folder (network, compute, AKS).</li>
          <li>Use Git tags and branches for version control and stability.</li>
          <li>Implement CI checks for <code>terraform fmt</code>, <code>validate</code>, and <code>plan</code>.</li>
        </ul>
        <pre><code>source = "git::https://github.com/org/terraform-modules.git//network?ref=v1.2.0"</code></pre>
        <p><strong>In Practice:</strong> My teams manage modules via Git repos with tagging, branching, and automated testing to ensure module integrity.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "18. Terraform - Lifecycle & Dependencies",
    questions: [
      {
        question: "What is a lifecycle block and why is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Terraform Lifecycle Block — Resource Behavior Control</strong></h3>
        <p>The <code>lifecycle</code> block allows you to control how Terraform manages the creation, update, and destruction of resources.</p>
        <p><strong>Used for:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Controlling resource replacement logic.</li>
          <li>Preserving critical resources from deletion.</li>
          <li>Ignoring specific attribute changes to prevent unnecessary recreation.</li>
        </ul>
        <pre><code>resource "azurerm_storage_account" "example" {
  name = "examplestorage"
  lifecycle {
    prevent_destroy = true
  }
}</code></pre>
        <p><strong>In Practice:</strong> I use lifecycle blocks to avoid accidental deletion of production resources like storage accounts or VNETs.</p>
      </div>`
      },
      {
        question: "What are lifecycle arguments like create_before_destroy, prevent_destroy, ignore_changes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Lifecycle Arguments Explained</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>create_before_destroy:</strong> Ensures new resource is created before old one is destroyed (useful for zero downtime).</li>
          <li><strong>prevent_destroy:</strong> Prevents Terraform from deleting a resource (adds safety for prod resources).</li>
          <li><strong>ignore_changes:</strong> Ignores specific attributes during <code>terraform apply</code> (useful when certain values change outside Terraform).</li>
        </ul>
        <pre><code>lifecycle {
  create_before_destroy = true
  prevent_destroy        = false
  ignore_changes         = [tags, metadata]
}</code></pre>
        <p><strong>In Practice:</strong> I use <code>create_before_destroy</code> for AKS node pools and <code>ignore_changes</code> for fields auto-updated by Azure.</p>
      </div>`
      },
      {
        question: "Where did you use lifecycle in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Practical Lifecycle Usage</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>AKS clusters:</strong> Used <code>create_before_destroy</code> to avoid downtime during upgrades.</li>
          <li><strong>Storage Accounts:</strong> Used <code>prevent_destroy</code> to avoid accidental deletion of data.</li>
          <li><strong>VM NICs:</strong> Used <code>ignore_changes</code> for IP assignments managed outside Terraform.</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>lifecycle {
  prevent_destroy = true
  ignore_changes  = [tags]
}</code></pre>
        <p><strong>In Practice:</strong> This ensures Terraform operations are safe, predictable, and production-friendly.</p>
      </div>`
      },
      {
        question: "What is the use of depends_on?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>depends_on — Enforcing Explicit Dependencies</strong></h3>
        <p>The <code>depends_on</code> argument ensures Terraform creates or destroys resources in a specific order when automatic detection fails.</p>
        <pre><code>resource "azurerm_network_interface" "example" {
  depends_on = [azurerm_virtual_network.vnet]
}</code></pre>
        <p><strong>In Practice:</strong> I use <code>depends_on</code> when resource references aren’t direct (e.g., output dependencies or module boundaries).</p>
      </div>`
      },
      {
        question: "How do you handle resource dependencies in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Handling Resource Dependencies</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Terraform automatically infers dependencies via references (<code>resource_a.id</code>).</li>
          <li>When implicit dependency isn’t clear, use <code>depends_on</code>.</li>
          <li>For module-level dependencies, use module outputs and variables for chaining.</li>
        </ul>
        <pre><code>resource "azurerm_network_interface" "nic" {
  subnet_id = azurerm_subnet.subnet.id
}</code></pre>
        <p><strong>In Practice:</strong> I rely mostly on implicit references but add <code>depends_on</code> for complex setups like AKS cluster waiting for network provisioning.</p>
      </div>`
      },
      {
        question: "If there are interdependent resources (VM, NSG, subnet), how will you serialize deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Serializing Interdependent Resource Deployments</strong></h3>
        <p>Terraform handles dependencies automatically when outputs are referenced properly.</p>
        <pre><code>resource "azurerm_network_security_group" "nsg" {}
resource "azurerm_subnet" "subnet" {
  network_security_group_id = azurerm_network_security_group.nsg.id
}
resource "azurerm_network_interface" "nic" {
  subnet_id = azurerm_subnet.subnet.id
}</code></pre>
        <p><strong>In Practice:</strong> By chaining IDs between resources, Terraform automatically deploys them in the correct order — NSG → Subnet → NIC → VM.</p>
      </div>`
      },
      {
        question: "What happens when we rename a Terraform resource?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚨 <strong>Resource Rename — Terraform Perception</strong></h3>
        <p>Terraform treats a renamed resource as a <strong>new resource</strong> and plans to destroy the old one and create a new one.</p>
        <p><strong>To prevent unwanted recreation:</strong> Use <code>terraform state mv</code> to rename in state.</p>
        <pre><code>terraform state mv azurerm_storage_account.old azurerm_storage_account.new</code></pre>
        <p><strong>In Practice:</strong> I always migrate state before renaming to avoid data loss or downtime.</p>
      </div>`
      },
      {
        question: "What happens if a resource name changes in map?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗺️ <strong>Resource Name Change in Map Variables</strong></h3>
        <p>If you’re using <code>for_each</code> with a map, changing the key name means Terraform will:</p>
        <ul style="margin-left:1.2rem;">
          <li>Destroy the old resource (old key removed).</li>
          <li>Create a new resource (new key added).</li>
        </ul>
        <p><strong>In Practice:</strong> Always manage map keys carefully — key change = resource recreation.</p>
      </div>`
      },
      {
        question: "What if an item in input map is deleted — how will Terraform behave?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧨 <strong>Deleted Item in Input Map — Resource Destruction</strong></h3>
        <p>If an item in a <code>for_each</code> map is removed, Terraform destroys the corresponding resource.</p>
        <pre><code>for_each = {
  vm1 = "eastus"
  # vm2 removed
}</code></pre>
        <p>Terraform plan output will show a <strong>destroy</strong> action for the removed key.</p>
        <p><strong>In Practice:</strong> I use <code>lifecycle.prevent_destroy</code> temporarily when removing keys to ensure safe manual cleanup.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "19. Terraform - Count, for_each & Dynamic Blocks",
    questions: [
      {
        question: "What is the difference between count and for_each?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔢 <strong>count vs for_each — Core Difference</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>count</strong> — used for simple repetition based on index (0,1,2...).</li>
          <li><strong>for_each</strong> — used for mapping unique resources using keys (map or set).</li>
        </ul>
        <pre><code># count example
resource "azurerm_resource_group" "rg" {
  count = 3
  name  = "rg-&dollar;{count.index}"
}

# for_each example
resource "azurerm_resource_group" "rg" {
  for_each = toset(["dev","qa","prod"])
  name     = "rg-&dollar;{each.key}"
}</code></pre>
        <p><strong>In Practice:</strong> I use <code>count</code> for numeric loops and <code>for_each</code> for object-based, named resources.</p>
      </div>`
      },
      {
        question: "When will you use count and when for_each?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Choosing between count and for_each</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>count</strong> — when resources are identical and order-based (like 3 subnets).</li>
          <li>Use <strong>for_each</strong> — when each item has a unique identity (map or object data).</li>
        </ul>
        <p><strong>In Practice:</strong> I prefer <code>for_each</code> for maintainability and clear references (e.g., <code>each.key</code> = "prod").</p>
      </div>`
      },
      {
        question: "for_each ko directly list ke saath kyu nahi use kar sakte?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚠️ <strong>for_each with list — Why not allowed directly?</strong></h3>
        <p>Terraform doesn’t allow <code>for_each</code> with plain lists because list items don’t have unique keys.</p>
        <p>To use it, convert list → set:</p>
        <pre><code>for_each = toset(["dev", "qa", "prod"])</code></pre>
        <p><strong>In Practice:</strong> I always use <code>toset()</code> to ensure uniqueness and predictable referencing.</p>
      </div>`
      },
      {
        question: "for_each me map use karte waqt each.key aur each.value kya represent karte hain?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗺️ <strong>each.key vs each.value in for_each map</strong></h3>
        <pre><code>for_each = {
  dev  = "eastus"
  prod = "westus"
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li><strong>each.key</strong> → "dev" / "prod"</li>
          <li><strong>each.value</strong> → "eastus" / "westus"</li>
        </ul>
        <p><strong>In Practice:</strong> Helpful when defining environment-specific configurations dynamically.</p>
      </div>`
      },
      {
        question: "toset() ka kya role hota hai jab list ko for_each me convert karte ho?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>toset() role — converting list for for_each</strong></h3>
        <p><code>toset()</code> converts a list into a set of unique values so <code>for_each</code> can use it.</p>
        <pre><code>for_each = toset(["eastus", "westus"])</code></pre>
        <p><strong>In Practice:</strong> Without <code>toset()</code>, Terraform throws a type error for <code>for_each</code> using list.</p>
      </div>`
      },
      {
        question: "Kya for_each ke andar duplicates allowed hain?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚫 <strong>No Duplicates Allowed in for_each</strong></h3>
        <p><code>for_each</code> requires unique keys — duplicates cause a plan error.</p>
        <pre><code>for_each = toset(["eastus", "eastus"]) # ❌ Error</code></pre>
        <p><strong>In Practice:</strong> Always ensure uniqueness using <code>toset()</code> or <code>distinct()</code>.</p>
      </div>`
      },
      {
        question: "Agar tum ek for_each ke resource ka index chahte ho to kya karoge?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔢 <strong>Index Access for for_each Resources</strong></h3>
        <p>There’s no direct <code>index</code> like count, but you can emulate it:</p>
        <pre><code>locals {
  regions = tolist(toset(["eastus", "westus"]))
}

for_each = toset(local.regions)
region_index = index(local.regions, each.key)</code></pre>
        <p><strong>In Practice:</strong> I use <code>index()</code> function for generating order-based logic with <code>for_each</code>.</p>
      </div>`
      },
      {
        question: "Kya tum for_each ke sath dynamic blocks use kar sakte ho? Agar haan, kaise?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Yes — for_each with Dynamic Blocks</strong></h3>
        <p>You can use <code>dynamic</code> blocks inside resources managed by <code>for_each</code> to generate nested configurations.</p>
        <pre><code>resource "azurerm_network_security_group" "nsg" {
  for_each = var.rules

  dynamic "security_rule" {
    for_each = each.value
    content {
      name = security_rule.key
      priority = security_rule.value.priority
    }
  }
}</code></pre>
        <p><strong>In Practice:</strong> Useful for defining multiple NSG rules dynamically from variable maps.</p>
      </div>`
      },
      {
        question: "for_each resource ko dusre for_each resource se refer kaise karte ho?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Cross-Referencing for_each Resources</strong></h3>
        <p>Use matching keys between resources.</p>
        <pre><code>resource "azurerm_subnet" "subnet" {
  for_each = var.subnets
}

resource "azurerm_network_interface" "nic" {
  for_each = var.subnets
  subnet_id = azurerm_subnet.subnet[each.key].id
}</code></pre>
        <p><strong>In Practice:</strong> This ensures 1:1 mapping between dependent for_each resources.</p>
      </div>`
      },
      {
        question: "for_each me condition lagana chahte ho (e.g. kuch resources hi create ho) — kaise karoge?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Conditional for_each — Filtering Resources</strong></h3>
        <pre><code>for_each = {
  for k, v in var.subnets : k => v
  if v.enabled == true
}</code></pre>
        <p><strong>In Practice:</strong> I use conditional expressions to deploy only enabled resources dynamically.</p>
      </div>`
      },
      {
        question: "Ek for_each loop me tum locals ka use kaise kar sakte ho?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Using Locals with for_each</strong></h3>
        <p>Use <code>locals</code> to pre-process data before looping.</p>
        <pre><code>locals {
  envs = { dev = "eastus", prod = "westus" }
}

for_each = local.envs
location = each.value</code></pre>
        <p><strong>In Practice:</strong> Locals simplify loops by cleaning variable logic.</p>
      </div>`
      },
      {
        question: "Multi-level nesting (RG → VNet → Subnet) for_each kaise handle karoge using map of objects?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Nested for_each — Multi-level Infra</strong></h3>
        <pre><code>variable "vnet_config" {
  type = map(object({
    address_space = list(string)
    subnets       = map(object({ cidr = string }))
  }))
}

resource "azurerm_virtual_network" "vnet" {
  for_each = var.vnet_config
  name     = each.key

  resource "azurerm_subnet" "subnet" {
    for_each = each.value.subnets
    name     = each.key
    address_prefixes = [each.value.cidr]
  }
}</code></pre>
        <p><strong>In Practice:</strong> Ideal for hierarchical deployment like RG → VNet → Subnets using maps of objects.</p>
      </div>`
      },
      {
        question: "What are dynamic blocks and how are they used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Dynamic Blocks — Reusable Nested Configs</strong></h3>
        <p>Dynamic blocks are used to generate nested arguments dynamically within a resource.</p>
        <pre><code>dynamic "security_rule" {
  for_each = var.rules
  content {
    name     = security_rule.key
    priority = security_rule.value.priority
  }
}</code></pre>
        <p><strong>In Practice:</strong> I use dynamic blocks for NSG rules, tags, or multiple sub-resources inside modules.</p>
      </div>`
      },
      {
        question: "What is Terraform’s behavior when for_each resource renamed?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚨 <strong>Renaming for_each Resource — Recreation Behavior</strong></h3>
        <p>If key names change in <code>for_each</code> map, Terraform destroys the old resource and creates a new one.</p>
        <p><strong>To prevent recreation:</strong></p>
        <pre><code>terraform state mv "module.old" "module.new"</code></pre>
        <p><strong>In Practice:</strong> I use <code>terraform state mv</code> when refactoring module or key names to preserve existing infrastructure.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "20. Terraform - Provisioners & Null Resources",
    questions: [
      {
        question: "What is a provisioner block?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Provisioner Block — Definition</strong></h3>
        <p>
          A <code>provisioner</code> block in Terraform allows you to run scripts or commands 
          on a local or remote machine during the resource creation or destruction phase.
          It acts as a bridge between infrastructure provisioning and configuration tasks.
        </p>
        <h4>🧩 Syntax Example:</h4>
        <pre><code>resource "azurerm_virtual_machine" "vm" {
  name = "myvm"
  
  provisioner "remote-exec" {
    inline = [
      "sudo apt update",
      "sudo apt install -y nginx"
    ]
  }
}</code></pre>
        <h4>🧠 Key Concepts:</h4>
        <ul style="margin-left:1.2rem;">
          <li>Provisioners are executed only <strong>after resource creation</strong>.</li>
          <li>They are considered a <strong>last resort</strong> — use configuration management tools (like Ansible) instead if possible.</li>
          <li>They can run during <strong>create</strong> or <strong>destroy</strong> phases.</li>
        </ul>
        <p><strong>In Practice:</strong> I use provisioners for post-deployment setup (e.g., bootstrapping, agent installation, custom config).</p>
      </div>`
      },
      {
        question: "What is the difference between local-exec and remote-exec?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🖥️ <strong>local-exec vs remote-exec</strong></h3>
        <table class="comparison-table">
          <tr><th>Aspect</th><th>local-exec</th><th>remote-exec</th></tr>
          <tr><td>Where it runs</td><td>On your local machine (where Terraform runs)</td><td>Inside the remote VM or target system</td></tr>
          <tr><td>Connection</td><td>No SSH needed</td><td>Requires SSH/WinRM connection</td></tr>
          <tr><td>Typical Use</td><td>Trigger pipelines, scripts, API calls</td><td>Configure server, install packages</td></tr>
          <tr><td>Example</td><td><code>local-exec { command = "echo done" }</code></td><td><code>remote-exec { inline = ["sudo apt update"] }</code></td></tr>
        </table>
        <p><strong>In Practice:</strong> I use <code>local-exec</code> to trigger Ansible or shell scripts post-apply, and <code>remote-exec</code> to configure a VM once it’s up.</p>
      </div>`
      },
      {
        question: "What are use cases of provisioners?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧰 <strong>Common Use Cases for Provisioners</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Bootstrapping servers with agents (Datadog, Azure Monitor, CloudWatch).</li>
          <li>Triggering <strong>external automation</strong> (Ansible, Jenkins jobs, scripts).</li>
          <li>Running <strong>final configuration commands</strong> not supported natively in Terraform.</li>
          <li>Registering systems with external services (DNS, CMDB, etc.).</li>
          <li>Destroy-time cleanup (via <code>when = destroy</code>).</li>
        </ul>
        <pre><code>provisioner "local-exec" {
  when    = destroy
  command = "echo 'Cleaning up...'"
}</code></pre>
        <p><strong>In Practice:</strong> I mostly avoid heavy logic in provisioners and keep them for short, idempotent setup tasks.</p>
      </div>`
      },
      {
        question: "What is a null_resource in Terraform and when do you use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>null_resource — A Dummy Resource for Logic Execution</strong></h3>
        <p>
          <code>null_resource</code> doesn’t create any real infrastructure; it acts as a placeholder 
          to trigger provisioners or scripts based on conditions, dependencies, or file changes.
        </p>
        <pre><code>resource "null_resource" "setup" {
  triggers = {
    build_id = var.build_id
  }

  provisioner "local-exec" {
    command = "echo 'Running post-build setup for &dollar;{self.triggers.build_id}'"
  }
}</code></pre>
        <h4>🔍 Use Cases:</h4>
        <ul style="margin-left:1.2rem;">
          <li>Triggering external scripts or tools during pipeline runs.</li>
          <li>Running local/remote configuration after infra is created.</li>
          <li>Re-running provisioners when <code>triggers</code> change.</li>
          <li>Glue logic between Terraform and CI/CD workflows.</li>
        </ul>
        <p><strong>In Practice:</strong> I use <code>null_resource</code> to run scripts when versioned inputs or templates change — without touching infra.</p>
      </div>`
      },
      {
        question: "What happens if you install software manually and rerun Terraform apply?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Terraform Behavior — Manual Changes Outside Terraform</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Terraform <strong>does not detect manual changes</strong> inside the VM (like installed packages).</li>
          <li>State file only tracks what Terraform created, not OS-level configuration.</li>
          <li>If provisioners ran before, Terraform <strong>won’t re-run them automatically</strong> unless resource is recreated or triggers change.</li>
        </ul>
        <h4>💡 Best Practice:</h4>
        <p>Provisioners should always be <strong>idempotent</strong> (safe to run multiple times).</p>
        <pre><code>provisioner "remote-exec" {
  inline = [
    "which nginx || sudo apt install -y nginx"
  ]
}</code></pre>
        <p><strong>In Practice:</strong> I avoid relying on provisioners for system config — instead, I use Ansible or Packer for image pre-bake. Terraform should focus only on infra state.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "21. Terraform - Data Sources",
    questions: [
      {
        question: "What is a data source and how is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Data Source — Definition</strong></h3>
        <p>
          A <code>data</code> source in Terraform is used to <strong>fetch or reference existing resources</strong> 
          that are <em>not managed</em> by your current Terraform configuration.
        </p>
        <p>
          Instead of creating new infrastructure, data sources allow Terraform to read information 
          (like IDs, names, or secrets) from existing infrastructure.
        </p>
        <h4>🧩 Example:</h4>
        <pre><code>data "azurerm_resource_group" "rg" {
  name = "prod-rg"
}

resource "azurerm_storage_account" "sa" {
  name                     = "tfstorage001"
  resource_group_name      = data.azurerm_resource_group.rg.name
  location                 = data.azurerm_resource_group.rg.location
}</code></pre>
        <p><strong>In Practice:</strong> I use data sources to pull details of existing Azure resources — like VNets, Key Vaults, or Subnets — 
        instead of hardcoding them.</p>
      </div>`
      },
      {
        question: "What is the difference between data block and locals block?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Data Block vs Locals Block</strong></h3>
        <table class="comparison-table">
          <tr><th>Aspect</th><th>Data Block</th><th>Locals Block</th></tr>
          <tr><td>Purpose</td><td>Fetches data from existing infrastructure (read from provider)</td><td>Stores computed or reusable values within Terraform</td></tr>
          <tr><td>Data Source</td><td>External (Azure, AWS, etc.)</td><td>Internal (Terraform expressions)</td></tr>
          <tr><td>Example</td><td><code>data "azurerm_resource_group" "rg"</code></td><td><code>locals { rg_name = "prod-rg" }</code></td></tr>
          <tr><td>Dynamic?</td><td>Yes, based on external infra</td><td>Static, derived from code logic</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use <code>locals</code> for transformations and <code>data</code> for real infra lookups — both together make code modular and DRY.</p>
      </div>`
      },
      {
        question: "Do data sources become part of state file?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗂️ <strong>Data Sources & State File</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Yes ✅, data sources are recorded in the state file — but only their <strong>fetched values</strong>, not their configuration.</li>
          <li>Terraform caches data lookups in state for consistency and performance.</li>
          <li>If the external resource changes, you must run <code>terraform refresh</code> or <code>terraform apply</code> to sync it.</li>
        </ul>
        <pre><code># To refresh data source values
terraform refresh</code></pre>
        <p><strong>In Practice:</strong> This behavior ensures Terraform doesn’t re-fetch data every time unless explicitly refreshed.</p>
      </div>`
      },
      {
        question: "What is the purpose of terraform data lookup?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Purpose of Data Lookup</strong></h3>
        <p>
          Terraform data lookup allows modules and configurations to <strong>reference existing infrastructure</strong> 
          without needing to recreate or hardcode values.
        </p>
        <h4>💡 Use Cases:</h4>
        <ul style="margin-left:1.2rem;">
          <li>Fetch existing Resource Group or VNet details.</li>
          <li>Read Key Vault secrets or Storage Account keys.</li>
          <li>Retrieve Azure AD object IDs, subscription info, etc.</li>
        </ul>
        <p><strong>In Practice:</strong> Using data lookups keeps Terraform code flexible across multiple environments (e.g., dev, test, prod) without hardcoding names or IDs.</p>
      </div>`
      },
      {
        question: "How do you use Key Vault data source in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Azure Key Vault Data Source</strong></h3>
        <p>
          You can use <code>azurerm_key_vault</code> and <code>azurerm_key_vault_secret</code> data sources to fetch secrets securely 
          without exposing them in code.
        </p>
        <pre><code>data "azurerm_key_vault" "kv" {
  name                = "my-keyvault"
  resource_group_name = "rg-secure"
}

data "azurerm_key_vault_secret" "db_password" {
  name         = "db-pass"
  key_vault_id = data.azurerm_key_vault.kv.id
}

resource "azurerm_app_service" "app" {
  name     = "secure-app"
  app_settings = {
    "DB_PASSWORD" = data.azurerm_key_vault_secret.db_password.value
  }
}</code></pre>
        <p><strong>In Practice:</strong> I integrate Key Vault lookups in Terraform for credentials, storage keys, and SSL certs — ensuring zero secret exposure in plain text.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "22. Terraform - Workspaces & Multi-Environment Management",
    questions: [
      {
        question: "What is Terraform workspace and why do we use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Terraform Workspaces — Logical Environment Separation</strong></h3>
        <p>
          A <strong>workspace</strong> is an isolated state environment within a single Terraform configuration.  
          It lets you use the <strong>same code</strong> for multiple environments like <code>dev</code>, <code>uat</code>, and <code>prod</code> — each having its own state file.
        </p>
        <pre><code># create and switch workspace
terraform workspace new dev
terraform workspace select prod</code></pre>
        <p>
          Each workspace maintains its <strong>own terraform.tfstate</strong>, stored under the backend (local or remote).  
          This ensures isolation — so changes in dev don’t impact prod.
        </p>
        <p><strong>In Practice:</strong> I use workspaces for small/mid projects or when state isolation is enough, without duplicating code folders.</p>
      </div>`
      },
      {
        question: "How do you manage multiple environments (dev, uat, prod)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Multi-Environment Management — Best Practices</strong></h3>
        <p>There are two main strategies for managing multiple environments:</p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Workspaces:</strong> Use one set of Terraform files and separate states using workspaces (<code>terraform workspace new dev</code>).</li>
          <li><strong>Folder-based structure:</strong> Create separate folders like <code>/environments/dev</code>, <code>/environments/prod</code> with their own backend configs.</li>
        </ol>
        <pre><code>terraform/
├── main.tf
├── variables.tf
└── environments/
    ├── dev/
    └── prod/</code></pre>
        <p><strong>In Practice:</strong> I prefer folders for enterprise-grade setups — easier integration with pipelines and variable overrides via tfvars.</p>
      </div>`
      },
      {
        question: "What is the difference between workspaces and folders?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Workspaces vs Folders</strong></h3>
        <table class="comparison-table">
          <tr><th>Aspect</th><th>Workspaces</th><th>Folders</th></tr>
          <tr><td>State Separation</td><td>Single codebase, multiple states</td><td>Separate code + separate states</td></tr>
          <tr><td>Code Reuse</td><td>High</td><td>Medium (some duplication)</td></tr>
          <tr><td>Backend</td><td>Same backend, multiple states</td><td>Independent backends per env</td></tr>
          <tr><td>Best For</td><td>Small to medium infra</td><td>Large scale production setups</td></tr>
        </table>
        <p><strong>In Practice:</strong> Workspaces = lightweight separation,  
        Folders = enterprise-style governance with stronger isolation.</p>
      </div>`
      },
      {
        question: "How do you handle multi-subscription deployments using Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🪐 <strong>Multi-Subscription Deployments in Terraform (AzureRM)</strong></h3>
        <p>For Azure, you can authenticate to multiple subscriptions by configuring multiple <code>provider</code> blocks with different <code>alias</code> names.</p>
        <pre><code>provider "azurerm" {
  features {}
  subscription_id = "1111-aaaa"
  alias = "prod"
}

provider "azurerm" {
  features {}
  subscription_id = "2222-bbbb"
  alias = "dev"
}

resource "azurerm_resource_group" "rg_prod" {
  provider = azurerm.prod
  name     = "rg-prod"
  location = "eastus"
}</code></pre>
        <p><strong>In Practice:</strong> I often combine provider aliases + workspace or environment variable logic 
        to dynamically select the subscription based on deployment target.</p>
      </div>`
      },
      {
        question: "How do you manage environment isolation in pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Environment Isolation in Pipelines (Azure DevOps / GitHub Actions)</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>separate state files</strong> per environment (keyed by workspace or environment name).</li>
          <li>Store <strong>environment-specific variables</strong> in separate variable groups or YAML variable templates.</li>
          <li>Lock state backend using remote locking (Azure Blob / Terraform Cloud).</li>
          <li>Use <code>TF_WORKSPACE</code> or <code>terraform workspace select</code> step dynamically in pipeline.</li>
        </ul>
        <pre><code>- script: terraform workspace select &dollar;(env) || terraform workspace new &dollar;(env)
  displayName: "Select Terraform Workspace"</code></pre>
        <p><strong>In Practice:</strong> This keeps pipeline execution isolated and prevents cross-environment overwrites.</p>
      </div>`
      },
      {
        question: "What is the purpose of terraform workspace command?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>terraform workspace command — Environment Management CLI</strong></h3>
        <p>It’s used to create, switch, list, and delete workspaces.</p>
        <pre><code># Common commands
terraform workspace list
terraform workspace new dev
terraform workspace select prod
terraform workspace show
terraform workspace delete test</code></pre>
        <p><strong>In Practice:</strong> I script workspace creation and selection inside CI/CD to auto-isolate Terraform states for every environment or branch deployment.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "23. Terraform - Integration with Azure DevOps",
    questions: [
      {
        question: "How do you integrate Terraform with Azure DevOps pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Terraform + Azure DevOps Integration (End-to-End Flow)</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Store Terraform code in an <strong>Azure Repos Git repository</strong>.</li>
          <li>Create a <strong>Service Connection</strong> in ADO (type: Azure Resource Manager → Service Principal).</li>
          <li>In pipeline YAML, add Terraform tasks for <code>init</code>, <code>plan</code>, <code>apply</code>.</li>
          <li>Configure remote backend in <strong>Azure Blob Storage</strong> for state management.</li>
          <li>Use ADO <strong>Variable Groups</strong> and <strong>Key Vault linkage</strong> for secure credentials.</li>
        </ol>
        <pre><code>- task: TerraformCLI@1
  inputs:
    command: 'init'
    backendType: 'azurerm'</code></pre>
        <p><strong>In Practice:</strong> I create a 3-stage YAML pipeline — init, plan, and apply — triggered via PR validation and approvals.</p>
      </div>`
      },
      {
        question: "How do you use Terraform code in CI/CD pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>CI/CD Flow for Terraform in ADO</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>CI Stage:</strong> Validate syntax using <code>terraform fmt</code> and <code>terraform validate</code>.</li>
          <li><strong>CD Stage:</strong> Run <code>terraform plan</code> → approval → <code>terraform apply</code>.</li>
          <li>Use artifact publishing to share plan files between stages.</li>
        </ul>
        <pre><code>- stage: Plan
  jobs:
  - script: terraform plan -out=tfplan
    displayName: "Terraform Plan"
- stage: Apply
  dependsOn: Plan
  approval: required
  jobs:
  - script: terraform apply tfplan</code></pre>
        <p><strong>In Practice:</strong> I enforce approval gates before <code>apply</code> in prod for governance and safety.</p>
      </div>`
      },
      {
        question: "What is the difference between classic and YAML pipeline for Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📜 <strong>Classic vs YAML Pipelines — Key Differences</strong></h3>
        <table class="comparison-table">
          <tr><th>Aspect</th><th>Classic Pipeline</th><th>YAML Pipeline</th></tr>
          <tr><td>Definition</td><td>UI-based (visual designer)</td><td>Code-based (.yaml in repo)</td></tr>
          <tr><td>Version Control</td><td>Not versioned</td><td>Versioned with code</td></tr>
          <tr><td>Reusability</td><td>Limited</td><td>Reusable templates & conditions</td></tr>
          <tr><td>Governance</td><td>Less control</td><td>Full control via YAML logic</td></tr>
        </table>
        <p><strong>In Practice:</strong> I always use YAML — easier to maintain, review, and re-run across branches.</p>
      </div>`
      },
      {
        question: "How do you fetch secrets from Azure Key Vault into pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Fetching Secrets from Key Vault in ADO</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Create a Key Vault and store secrets (like client_id, client_secret).</li>
          <li>In ADO, create a <strong>Variable Group</strong> linked to Key Vault.</li>
          <li>Grant ADO service principal <strong>Get & List</strong> access on Key Vault.</li>
          <li>Reference secrets in YAML pipeline using <code>&dollar;(secretName)</code>.</li>
        </ol>
        <pre><code>variables:
- group: kv-linked-vars

steps:
- script: echo "Client ID: &dollar;(azure-client-id)"</code></pre>
        <p><strong>In Practice:</strong> This ensures no secrets are hard-coded — everything pulled securely from vault.</p>
      </div>`
      },
      {
        question: "How do you secure Terraform pipeline execution in Azure DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Terraform Pipeline Security Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Azure Key Vault</strong> for secrets (never store plain text vars).</li>
          <li>Enable <strong>RBAC</strong> on Service Connection — least privilege access.</li>
          <li>Use <strong>branch policies + approvals</strong> for prod applies.</li>
          <li>Restrict pipeline execution using <strong>environment approvals</strong>.</li>
          <li>Store state in <strong>secured Azure Blob</strong> with container-level SAS restrictions.</li>
        </ul>
        <p><strong>In Practice:</strong> I enable RBAC and Key Vault for full compliance & audit trail.</p>
      </div>`
      },
      {
        question: "How do you handle Terraform state in Azure Blob backend via pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗂️ <strong>Terraform Remote State via Azure Blob Backend</strong></h3>
        <p>Define backend configuration in <code>backend.tf</code>:</p>
        <pre><code>terraform {
  backend "azurerm" {
    resource_group_name  = "tfstate-rg"
    storage_account_name = "tfstatestorage"
    container_name       = "tfstate"
    key                  = "prod.terraform.tfstate"
  }
}</code></pre>
        <p><strong>In Pipeline:</strong> Make sure Service Principal has Storage Blob Contributor access.  
        Terraform automatically locks state during apply.</p>
        <p><strong>In Practice:</strong> For multi-envs, I dynamically change <code>key</code> based on workspace or branch name.</p>
      </div>`
      },
      {
        question: "How do you handle multi-stage pipelines (init, plan, apply)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Multi-Stage Terraform Pipeline</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Stage 1 — Init:</strong> Initialize backend and providers.</li>
          <li><strong>Stage 2 — Plan:</strong> Generate plan file and publish as artifact.</li>
          <li><strong>Stage 3 — Apply:</strong> Manual approval → apply using plan file.</li>
        </ul>
        <pre><code>- stage: Plan
  jobs:
  - script: terraform plan -out=tfplan
- stage: Apply
  dependsOn: Plan
  approvals: required
  jobs:
  - script: terraform apply tfplan</code></pre>
        <p><strong>In Practice:</strong> Keeps deployments auditable and controlled, especially for prod.</p>
      </div>`
      },
      {
        question: "Which branching strategy do you follow for Terraform code?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌿 <strong>Branching Strategy (Git Flow)</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Main:</strong> Stable production-ready code.</li>
          <li><strong>Develop:</strong> Active integration branch.</li>
          <li><strong>Feature/*:</strong> New infra or resource changes.</li>
          <li><strong>Hotfix/*:</strong> Urgent fixes to prod infra.</li>
        </ul>
        <p>PR → Validation → Plan → Manual Approval → Apply to main.</p>
        <p><strong>In Practice:</strong> I automate validation (terraform fmt/validate) on PR creation.</p>
      </div>`
      },
      {
        question: "How to create ADO global variables in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>ADO Global Variables Integration</strong></h3>
        <p>You can pass ADO pipeline variables into Terraform as environment variables:</p>
        <pre><code>- script: |
    terraform plan -var "env=&dollar;(Environment)" -var "location=&dollar;(Location)"</code></pre>
        <p>Or define global variable groups in ADO Library and reference them:</p>
        <pre><code>variables:
- group: global-terraform-vars</code></pre>
        <p><strong>In Practice:</strong> I use YAML variable templates per environment for consistency.</p>
      </div>`
      },
      {
        question: "How to reinitialize Terraform when backend config changes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Reinitializing Terraform Backend</strong></h3>
        <p>Whenever backend configuration (like storage account name or container) changes, run:</p>
        <pre><code>terraform init -reconfigure</code></pre>
        <p>This forces Terraform to reinitialize the backend without deleting local state.  
        Optionally, you can migrate existing state using <code>-migrate-state</code>.</p>
      </div>`
      },
      {
        question: "What happens when plan shows 1 to add, 1 to delete — do you apply or not?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚠️ <strong>Interpreting “1 to add, 1 to delete” in Terraform Plan</strong></h3>
        <p>This means a <strong>resource replacement</strong> will occur — often due to changes in immutable attributes (e.g., VM size, subnet association).</p>
        <p><strong>In Practice:</strong> I always verify in <code>plan</code> output what’s being destroyed and recreated before applying — to avoid downtime.</p>
        <p>For critical resources, I use <code>lifecycle.prevent_destroy = true</code> for safety.</p>
      </div>`
      },
      {
        question: "How do you handle errors during pipeline execution?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐞 <strong>Error Handling in Terraform Pipelines</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <code>set -e</code> in bash to fail pipeline on first error.</li>
          <li>Review logs from Terraform output and <strong>Azure Activity Logs</strong>.</li>
          <li>Use <strong>terraform show</strong> or <strong>terraform state list</strong> to inspect partial state.</li>
          <li>If failure occurs post-apply, run <code>terraform refresh</code> to sync state.</li>
        </ul>
        <p><strong>In Practice:</strong> I also use conditional pipeline steps for retries on transient Azure API failures.</p>
      </div>`
      },
      {
        question: "What happens if two people run the same pipeline simultaneously?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Concurrent Pipeline Execution</strong></h3>
        <p>Terraform locks the state file during <code>apply</code> — only one process can modify it.</p>
        <p>If another run starts while one is in progress, it will fail with:</p>
        <pre><code>Error: Error acquiring the state lock</code></pre>
        <p><strong>In Practice:</strong> I enable remote locking (Azure Blob or Terraform Cloud) and restrict concurrent approvals for safety.</p>
      </div>`
      },
      {
        question: "If pipeline error occurs, what’s your troubleshooting process?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Terraform Pipeline Troubleshooting Approach</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Check <strong>ADO job logs</strong> → identify failed step.</li>
          <li>Check <strong>Terraform output</strong> for syntax or dependency errors.</li>
          <li>Verify <strong>Service Principal permissions</strong> (especially if deployment permissions failed).</li>
          <li>Run <code>terraform plan</code> locally to reproduce.</li>
          <li>Reinit backend with <code>terraform init -reconfigure</code> if state mismatch occurs.</li>
          <li>For Azure issues — check <strong>Activity Logs</strong> or <strong>Resource Locks</strong>.</li>
        </ol>
        <p><strong>In Practice:</strong> I keep <code>TF_LOG=DEBUG</code> enabled temporarily for deeper trace.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "24. Terraform - Security, RBAC & Compliance",
    questions: [
      {
        question: "What are Terraform best practices for security?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Terraform Security Best Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Store state remotely</strong> — use secured backend (Azure Blob / S3) with encryption at rest & access control.</li>
          <li><strong>Never hardcode secrets</strong> — use Key Vault or environment variables instead.</li>
          <li><strong>Use least privilege</strong> for Service Principals and IAM roles.</li>
          <li>Enable <strong>RBAC</strong> and use Terraform-managed policies instead of manual assignments.</li>
          <li>Regularly <strong>validate and scan</strong> IaC code with tools like <code>Checkov</code> or <code>TFSec</code>.</li>
          <li>Keep <strong>provider versions pinned</strong> to avoid unintended behavior from updates.</li>
          <li>Use <strong>terraform fmt</strong> and <strong>validate</strong> in pipelines to detect syntax & structure issues early.</li>
        </ul>
        <p><strong>In Practice:</strong> I follow the principle of “least privilege + no secrets in code” and run Checkov scans before every apply.</p>
      </div>`
      },
      {
        question: "How do you secure Terraform state file?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗂️ <strong>Securing Terraform State File</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Always use a <strong>remote backend</strong> (Azure Blob / S3 / Terraform Cloud) — never store local state in repo.</li>
          <li>Enable <strong>encryption at rest</strong> (Azure Storage encryption or SSE-KMS).</li>
          <li>Restrict state file access with <strong>RBAC & container-level permissions</strong>.</li>
          <li>Enable <strong>state locking</strong> (Terraform automatically handles via blob lease).</li>
          <li>Do not expose state via <code>terraform output</code> for sensitive values (mark as <code>sensitive = true</code>).</li>
          <li>Backup state file automatically using blob versioning or Terraform Cloud workspace history.</li>
        </ul>
        <pre><code>terraform {
  backend "azurerm" {
    resource_group_name  = "tfstate-rg"
    storage_account_name = "tfstatestorage"
    container_name       = "tfstate"
    key                  = "prod.tfstate"
  }
}</code></pre>
        <p><strong>In Practice:</strong> My state backend is isolated in a separate subscription with strict access controls.</p>
      </div>`
      },
      {
        question: "How have you implemented RBAC in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Implementing RBAC via Terraform</strong></h3>
        <p>Terraform can assign roles to users, groups, or service principals directly using AzureRM role assignment resources.</p>
        <pre><code>resource "azurerm_role_assignment" "sp_rbac" {
  principal_id   = var.sp_id
  role_definition_name = "Contributor"
  scope          = azurerm_resource_group.main.id
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Define <strong>role assignments</strong> declaratively to ensure consistency across environments.</li>
          <li>Use <strong>custom roles</strong> for fine-grained permissions if Contributor is too broad.</li>
          <li>Integrate Terraform with <strong>Azure AD groups</strong> for identity-based access control.</li>
        </ul>
        <p><strong>In Practice:</strong> I maintain separate SPs per environment (Dev/Test/Prod) — each with specific RBAC scopes.</p>
      </div>`
      },
      {
        question: "How do you manage secrets securely in Terraform (Vault, Key Vault, Env vars)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Secret Management in Terraform</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Store all sensitive values in <strong>Azure Key Vault</strong> (not .tfvars files).</li>
          <li>Use <code>data.azurerm_key_vault_secret</code> to fetch secrets dynamically:</li>
        </ul>
        <pre><code>data "azurerm_key_vault_secret" "sp_secret" {
  name         = "client-secret"
  key_vault_id = data.azurerm_key_vault.main.id
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Pass environment variables securely via CI/CD (ADO pipeline vars → env vars).</li>
          <li>Mark outputs as <code>sensitive = true</code> to avoid exposing them in logs.</li>
          <li>For large enterprises, integrate HashiCorp Vault with Terraform provider for dynamic secret retrieval.</li>
        </ul>
        <p><strong>In Practice:</strong> I use a combination of Key Vault for infra secrets + environment variables for transient credentials.</p>
      </div>`
      },
      {
        question: "How to restrict provider access using Service Principals?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Restricting Terraform Provider Access</strong></h3>
        <p>Terraform authenticates to Azure via a Service Principal — ensure it has minimal privileges:</p>
        <pre><code>provider "azurerm" {
  features {}
  client_id       = var.client_id
  client_secret   = var.client_secret
  tenant_id       = var.tenant_id
  subscription_id = var.subscription_id
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Assign only required <strong>RBAC roles</strong> (e.g., Reader, Network Contributor, not Owner).</li>
          <li>Use <strong>separate SPs</strong> per environment to isolate access scopes.</li>
          <li>Enable <strong>conditional access</strong> or MFA for privileged roles.</li>
          <li>Rotate SP credentials regularly and store them in Key Vault.</li>
        </ul>
        <p><strong>In Practice:</strong> My SPs are created per environment, scoped to RG/subscription, with no cross-env access.</p>
      </div>`
      },
      {
        question: "How to ensure compliance and drift monitoring using tools like Checkov/TFSec?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Terraform Compliance & Drift Management</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Checkov / TFSec:</strong> Static code analysis tools to catch security misconfigurations before apply.</li>
          <li>Integrate Checkov in pipeline (pre-plan stage):</li>
        </ul>
        <pre><code>- script: |
    pip install checkov
    checkov -d . --quiet</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Detects missing encryption, public access, open security groups, etc.</li>
          <li>Use <code>terraform plan</code> regularly to detect <strong>drift</strong> — mismatch between state and actual infra.</li>
          <li>For automation, integrate <strong>Terraform Cloud drift detection</strong> or schedule plan runs in CI/CD.</li>
        </ul>
        <p><strong>In Practice:</strong> My pipelines fail automatically if Checkov reports any “high severity” security issues.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "25. Terraform - Advanced / Enterprise / Cloud",
    questions: [
      {
        question: "What is Terraform Cloud?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>Terraform Cloud Overview</strong></h3>
        <p><strong>Terraform Cloud</strong> is HashiCorp’s managed SaaS platform that provides a secure, collaborative environment for teams to run Terraform workflows.</p>
        <ul style="margin-left:1.2rem;">
          <li>Manages <strong>remote execution</strong> and <strong>state files</strong> centrally.</li>
          <li>Supports <strong>VCS integrations</strong> (GitHub, Azure DevOps, GitLab, Bitbucket).</li>
          <li>Includes <strong>workspaces</strong>, <strong>RBAC</strong>, <strong>drift detection</strong>, and <strong>Sentinel policy enforcement</strong>.</li>
          <li>Provides <strong>Terraform Cloud Agents</strong> for private network execution.</li>
        </ul>
        <p><strong>In Practice:</strong> We used Terraform Cloud to centralize all infra deployments, removing the need for local state files or manual applies.</p>
      </div>`
      },
      {
        question: "What are the benefits of Terraform Cloud over CLI?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Terraform Cloud vs CLI</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr><th style="border-bottom:1px solid #ccc;">Feature</th><th style="border-bottom:1px solid #ccc;">CLI</th><th style="border-bottom:1px solid #ccc;">Terraform Cloud</th></tr>
          </thead>
          <tbody>
            <tr><td>State Management</td><td>Local or remote manually configured</td><td>Managed & encrypted automatically</td></tr>
            <tr><td>Collaboration</td><td>Single user</td><td>Team-based runs, RBAC, VCS integration</td></tr>
            <tr><td>Policy Enforcement</td><td>Manual</td><td>Sentinel Policies</td></tr>
            <tr><td>Execution</td><td>Local</td><td>Remote with controlled access & approvals</td></tr>
            <tr><td>Audit & History</td><td>No built-in logs</td><td>Full audit logs and run history</td></tr>
          </tbody>
        </table>
        <p><strong>In Practice:</strong> Using Terraform Cloud removed the need for managing storage accounts and lock files manually.</p>
      </div>`
      },
      {
        question: "What is Sentinel Policy in Terraform Cloud?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Sentinel Policy Framework</strong></h3>
        <p><strong>Sentinel</strong> is HashiCorp’s Policy-as-Code framework that allows enforcing organizational compliance within Terraform Cloud/Enterprise.</p>
        <ul style="margin-left:1.2rem;">
          <li>Used to validate <strong>plans before apply</strong> — e.g., block public S3 buckets or restrict instance sizes.</li>
          <li>Supports <strong>enforcement levels</strong>: <code>advisory</code>, <code>soft-mandatory</code>, <code>hard-mandatory</code>.</li>
          <li>Written in <strong>Sentinel language</strong> and can access Terraform plan/state data.</li>
        </ul>
        <pre><code>import "tfplan/v2" as tfplan
deny if tfplan.resource_changes["aws_s3_bucket"].change.after.acl == "public-read"</code></pre>
        <p><strong>In Practice:</strong> We used Sentinel to enforce naming conventions and prevent deployment in non-approved regions.</p>
      </div>`
      },
      {
        question: "How does Terraform handle concurrent operations in team environments?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Handling Concurrency</strong></h3>
        <p>Terraform uses <strong>state locking</strong> to prevent multiple users or pipelines from modifying infrastructure simultaneously.</p>
        <ul style="margin-left:1.2rem;">
          <li>When a <code>terraform apply</code> starts, the backend (e.g. S3, Azure Blob, or Terraform Cloud) <strong>locks the state file</strong>.</li>
          <li>Other runs wait or fail until the lock is released.</li>
          <li>Terraform Cloud handles this automatically with <strong>remote execution queues</strong>.</li>
        </ul>
        <p><strong>In Practice:</strong> Our pipelines never conflict — Terraform Cloud ensures serialized execution per workspace.</p>
      </div>`
      },
      {
        question: "How do you recover state after accidental deletion in a team setup?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>State Recovery Process</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use backend <strong>versioning</strong> (Azure Blob / S3 / Terraform Cloud) to restore previous versions of state.</li>
          <li>Terraform Cloud automatically keeps <strong>state snapshots</strong> for each run.</li>
          <li>If lost locally, you can use <code>terraform refresh</code> or <code>terraform import</code> to rebuild missing state entries.</li>
          <li>In extreme cases, re-import resources manually using <code>terraform import</code>.</li>
        </ul>
        <p><strong>In Practice:</strong> I’ve recovered state by restoring a blob snapshot and re-linking it to the backend config.</p>
      </div>`
      },
      {
        question: "How do you handle DR scenario using Terraform for primary & secondary environments?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏥 <strong>Disaster Recovery with Terraform</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Maintain separate <strong>workspaces or state files</strong> for primary & DR environments.</li>
          <li>Use same modules, but parameterize regions & naming via <code>tfvars</code>.</li>
          <li>Deploy DR infra (e.g., secondary VMs, storage, network) in standby mode.</li>
          <li>Sync data (e.g., database replication, blob geo-redundancy) outside Terraform scope.</li>
          <li>In failover, switch DNS / load balancer endpoints to DR region.</li>
        </ul>
        <pre><code>terraform workspace select dr
terraform apply -var-file="dr.tfvars"</code></pre>
        <p><strong>In Practice:</strong> We manage DR infra with separate state + pipeline trigger, keeping both regions consistent.</p>
      </div>`
      },
      {
        question: "How do you implement cross-account provisioning?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Cross-Account / Cross-Subscription Provisioning</strong></h3>
        <p>Terraform can manage resources across multiple accounts/subscriptions using multiple provider blocks:</p>
        <pre><code>provider "azurerm" {
  alias           = "prod"
  subscription_id = var.prod_sub_id
  ...
}

provider "azurerm" {
  alias           = "dr"
  subscription_id = var.dr_sub_id
  ...
}

resource "azurerm_resource_group" "dr_rg" {
  name     = "dr-rg"
  provider = azurerm.dr
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Use provider aliases and specify per-resource provider context.</li>
          <li>Store credentials (SP IDs/secrets) securely via Key Vault or Terraform Cloud variables.</li>
        </ul>
        <p><strong>In Practice:</strong> We manage shared networking in one subscription and workloads in another using provider aliasing.</p>
      </div>`
      },
      {
        question: "What happens when an S3 bucket is manually modified (policy drift)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚠️ <strong>Drift Detection Scenario</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Manual changes (e.g., public ACL added) cause <strong>drift</strong> between state and real infra.</li>
          <li>Terraform detects drift during <code>terraform plan</code> — it will show changes to revert bucket policy.</li>
          <li>If you reapply, Terraform <strong>overwrites manual changes</strong> to match configuration.</li>
          <li>Use <code>ignore_changes</code> in lifecycle if certain attributes are managed externally.</li>
        </ul>
        <p><strong>In Practice:</strong> We schedule nightly <code>terraform plan -detailed-exitcode</code> runs to auto-detect drift.</p>
      </div>`
      },
      {
        question: "How to handle infrastructure drift detection automatically?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Automatic Drift Detection</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Terraform Cloud automatically runs <strong>drift detection checks</strong> for each workspace periodically.</li>
          <li>In self-managed setup — schedule <code>terraform plan</code> in CI/CD (daily/weekly) to detect mismatches.</li>
          <li>Use <strong>terraform plan -detailed-exitcode</strong> → exit code <code>2</code> means drift found.</li>
          <li>Integrate with Slack or email notifications for alerting when drift detected.</li>
          <li>Combine with <strong>Checkov/TFSec</strong> to validate compliance continuously.</li>
        </ul>
        <p><strong>In Practice:</strong> I’ve implemented automated drift checks via ADO nightly pipeline — posting plan diffs to Teams channel.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "26. Terraform - Troubleshooting & Real-World Scenarios",
    questions: [
      {
        question: "What happens if apply fails midway?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💥 <strong>Partial Apply Failure</strong></h3>
        <p>If <code>terraform apply</code> fails midway, Terraform may have already created or modified some resources successfully.</p>
        <ul style="margin-left:1.2rem;">
          <li>The <strong>state file</strong> is still updated for resources successfully created before failure.</li>
          <li>Subsequent runs detect partially created resources and try to continue from that point.</li>
          <li>If the failure was due to dependency error or invalid config, fix the code and re-run <code>terraform apply</code>.</li>
          <li>If a resource was created incorrectly, use <code>terraform destroy -target</code> or <code>terraform taint</code> to recreate.</li>
        </ul>
        <p><strong>In Practice:</strong> I had a situation where half of the subnets were deployed; I re-ran apply after fixing NSG rule dependencies — Terraform reconciled automatically.</p>
      </div>`
      },
      {
        question: "How do you rollback infrastructure changes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>↩️ <strong>Rollback Strategy</strong></h3>
        <p>Terraform doesn’t have a direct “rollback” command — rollback is achieved through version control and previous state restore.</p>
        <ul style="margin-left:1.2rem;">
          <li>Keep your Terraform code versioned in Git.</li>
          <li>Revert to previous Git commit and run <code>terraform apply</code> — Terraform reconciles state to the earlier version.</li>
          <li>Alternatively, restore previous <strong>state file version</strong> from backend (Azure Blob / S3 / Terraform Cloud).</li>
          <li>In Terraform Cloud, rollback is as simple as selecting a previous run and re-applying it.</li>
        </ul>
        <p><strong>In Practice:</strong> For a production rollback, we restored the previous blob snapshot and re-ran apply with known stable tag.</p>
      </div>`
      },
      {
        question: "What is Terraform taint and when to use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>terraform taint</strong></h3>
        <p><code>terraform taint</code> marks a resource for recreation during the next <code>apply</code>.</p>
        <ul style="margin-left:1.2rem;">
          <li>Used when a resource is unhealthy or manually corrupted.</li>
          <li>Example: A VM deployed successfully but failed post-config — you taint it to force re-creation.</li>
          <li>Command: <code>terraform taint azurerm_virtual_machine.appvm</code></li>
          <li>From Terraform v0.15+, use <code>terraform apply -replace</code> instead (recommended).</li>
        </ul>
        <p><strong>In Practice:</strong> We tainted an App Gateway when SSL cert binding failed due to expired cert file.</p>
      </div>`
      },
      {
        question: "What’s the difference between terraform destroy and terraform apply -destroy?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💣 <strong>Destroy vs Apply -destroy</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><code>terraform destroy</code> – Explicit command that destroys all managed resources in current workspace.</li>
          <li><code>terraform apply -destroy</code> – Equivalent to <code>destroy</code> but runs through the same “plan → approval → apply” workflow.</li>
          <li>Useful in CI/CD pipelines to review destruction plan before execution.</li>
          <li>Both commands update the state file to reflect deleted resources.</li>
        </ul>
        <p><strong>In Practice:</strong> We use <code>apply -destroy</code> in sandbox teardown pipelines to ensure approval before destruction.</p>
      </div>`
      },
      {
        question: "How do you handle resource drift due to manual changes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚠️ <strong>Resource Drift Handling</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Run <code>terraform plan</code> — it shows any differences between current config/state and actual cloud infra.</li>
          <li>To fix drift, either:</li>
          <ul>
            <li>Re-apply Terraform code (overwrites manual changes), or</li>
            <li>Use <code>terraform refresh</code> to sync new values into state (if manual change should persist).</li>
          </ul>
          <li>Optionally use <code>ignore_changes</code> lifecycle argument for attributes managed outside Terraform.</li>
        </ul>
        <p><strong>In Practice:</strong> A team member modified NSG rules manually — Terraform plan caught drift and reverted them to code-defined rules.</p>
      </div>`
      },
      {
        question: "How do you debug Terraform apply errors?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐞 <strong>Terraform Debugging Techniques</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Enable verbose logging with <code>TF_LOG</code> env variable:</li>
          <pre><code>export TF_LOG=DEBUG
terraform apply</code></pre>
          <li>Redirect logs to a file: <code>TF_LOG_PATH=./tf.log</code></li>
          <li>Validate configs: <code>terraform validate</code> and <code>terraform fmt -check</code></li>
          <li>Use <code>terraform plan -out=planfile</code> to verify before apply.</li>
          <li>For provider issues, re-init with <code>terraform init -upgrade</code>.</li>
        </ul>
        <p><strong>In Practice:</strong> I traced an intermittent ACR auth error via TF_LOG output showing expired SP token — fixed by rotating credentials.</p>
      </div>`
      },
      {
        question: "How do you troubleshoot VM configuration mismatch (A4 → A5)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>VM SKU Mismatch Troubleshooting</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Check <strong>plan output</strong> — Terraform will show size change (A4 → A5).</li>
          <li>If Azure rejects due to quota or unsupported region, error appears during apply.</li>
          <li>To fix: update <code>vm_size</code> and re-apply after ensuring region supports SKU.</li>
          <li>If VM already running, Terraform will recreate it (destroy + create) unless you use <code>ignore_changes</code> on vm_size.</li>
        </ul>
        <p><strong>In Practice:</strong> During DR testing, A4 SKU deprecated — changed to A5 and re-deployed after checking quota in Azure Portal.</p>
      </div>`
      },
      {
        question: "How do you import existing resources (Azure, AWS VPC, etc.)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Terraform Import</strong></h3>
        <p>Use <code>terraform import</code> to bring existing infra under Terraform management without recreating it.</p>
        <ul style="margin-left:1.2rem;">
          <li>Create resource block in .tf file that matches existing infra.</li>
          <li>Run import command:</li>
          <pre><code>terraform import azurerm_resource_group.prod_rg /subscriptions/xxxx/resourceGroups/prod-rg</code></pre>
          <li>After import, run <code>terraform plan</code> to ensure code matches actual configuration.</li>
        </ul>
        <p><strong>In Practice:</strong> We imported existing VNets and Key Vaults into Terraform to standardize across all environments.</p>
      </div>`
      },
      {
        question: "How to handle manual updates done outside Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Manual Changes Outside Terraform</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Run <code>terraform plan</code> to detect drift.</li>
          <li>Decide whether to revert (apply Terraform) or accept (update state).</li>
          <li>Use <code>terraform refresh</code> or <code>terraform import</code> to sync correct values.</li>
          <li>To prevent this: enforce RBAC so only Terraform pipelines have modify rights.</li>
        </ul>
        <p><strong>In Practice:</strong> One engineer manually added tags — Terraform detected drift, and we updated locals block to include new tags permanently.</p>
      </div>`
      },
      {
        question: "How to re-sync Terraform with Prod state after changes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Re-Sync Terraform with Production State</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Run <code>terraform refresh</code> – updates state to match actual infra.</li>
          <li>If new resources exist, import them using <code>terraform import</code>.</li>
          <li>If removed resources exist in state, run <code>terraform state rm</code> to clean orphaned entries.</li>
          <li>Finally, re-run <code>terraform plan</code> to verify all in sync.</li>
        </ul>
        <p><strong>In Practice:</strong> After a hotfix deployment outside Terraform, we re-synced via import & refresh to align prod infra with Terraform state.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "27. Terraform – State Management",
    questions: [
      {
        question: "What is terraform.tfstate?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📘 <strong>terraform.tfstate — The Source of Truth</strong></h3>
        <p><code>terraform.tfstate</code> is a JSON file that stores the actual state of your deployed infrastructure — it maps your Terraform configuration to real cloud resources.</p>
        <ul style="margin-left:1.2rem;">
          <li>Tracks every resource’s ID, metadata, dependencies, and current configuration.</li>
          <li>Used by Terraform to determine what needs to be created, updated, or destroyed during the next <code>plan/apply</code>.</li>
        </ul>
        <p><strong>Example:</strong> The file contains resource entries like <code>azurerm_resource_group.rg</code> with its ID and properties.</p>
        <p><strong>In Practice:</strong> Never edit <code>tfstate</code> manually — instead, use <code>terraform state mv</code>, <code>rm</code>, or <code>import</code> commands.</p>
      </div>`
      },
      {
        question: "What is terraform.tfstate.backup?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>terraform.tfstate.backup — Safety Copy</strong></h3>
        <p>Terraform automatically creates a backup file (<code>terraform.tfstate.backup</code>) before modifying the main state file.</p>
        <ul style="margin-left:1.2rem;">
          <li>Used to recover in case the main <code>tfstate</code> becomes corrupted or overwritten.</li>
          <li>It ensures rollback capability after failed <code>apply</code> or <code>plan</code>.</li>
        </ul>
        <p><strong>In Practice:</strong> We store both <code>tfstate</code> and <code>tfstate.backup</code> in Azure Blob (remote backend) with versioning enabled for quick recovery.</p>
      </div>`
      },
      {
        question: "What is the use of state file?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Purpose of Terraform State File</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Maintains mapping between Terraform configuration and real resources.</li>
          <li>Detects drift (changes outside Terraform).</li>
          <li>Improves performance by caching resource attributes locally.</li>
          <li>Enables dependency resolution during resource creation.</li>
        </ul>
        <p><strong>In Practice:</strong> During <code>terraform plan</code>, Terraform compares the state file with actual cloud infra to determine changes.</p>
      </div>`
      },
      {
        question: "What is the difference between local and remote state?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏠 vs ☁️ <strong>Local vs Remote State</strong></h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse;width:100%;">
          <thead><tr><th>Aspect</th><th>Local State</th><th>Remote State</th></tr></thead>
          <tbody>
            <tr><td>Storage</td><td>Stored on local machine as <code>terraform.tfstate</code></td><td>Stored in cloud storage (Azure Blob, S3, Terraform Cloud)</td></tr>
            <tr><td>Collaboration</td><td>Not suitable for teams</td><td>Ideal for shared environments</td></tr>
            <tr><td>Security</td><td>Less secure, local exposure risk</td><td>Can use encryption, RBAC, and versioning</td></tr>
            <tr><td>Locking</td><td>No locking</td><td>Supports locking to avoid parallel edits</td></tr>
          </tbody>
        </table>
        <p><strong>In Practice:</strong> Local state is fine for POC, but in production, always use remote backend (like Azure Blob or Terraform Cloud).</p>
      </div>`
      },
      {
        question: "What are the benefits of remote state?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>Benefits of Remote State</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔒 <strong>Centralized storage</strong> – accessible by all team members.</li>
          <li>🧩 <strong>State locking</strong> – prevents concurrent apply operations.</li>
          <li>🕵️ <strong>Versioning & backup</strong> – automatic snapshot history for rollback.</li>
          <li>🔐 <strong>Encryption</strong> – protects sensitive data (passwords, keys).</li>
          <li>⚙️ <strong>Integration</strong> – works well with CI/CD and pipelines.</li>
        </ul>
        <p><strong>In Practice:</strong> Azure DevOps pipelines use remote backend in Azure Storage with locking enabled via Azure Blob leases.</p>
      </div>`
      },
      {
        question: "What is a backend in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Terraform Backend — State Management Engine</strong></h3>
        <p>A <strong>backend</strong> defines where and how Terraform stores its state file.</p>
        <ul style="margin-left:1.2rem;">
          <li>Determines state storage location (local or remote).</li>
          <li>Handles locking, encryption, and consistency.</li>
          <li>Examples: <code>local</code>, <code>azurerm</code>, <code>s3</code>, <code>gcs</code>, <code>remote</code> (Terraform Cloud).</li>
        </ul>
        <p><strong>In Practice:</strong> We used <code>azurerm</code> backend to store tfstate in an Azure Blob container with SAS or SPN auth.</p>
      </div>`
      },
      {
        question: "What is the syntax of backend block?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Backend Block Syntax</strong></h3>
        <pre><code>terraform {
  backend "azurerm" {
    resource_group_name  = "tfstate-rg"
    storage_account_name = "tfstate1234"
    container_name       = "tfstate"
    key                  = "prod.terraform.tfstate"
  }
}</code></pre>
        <p><strong>Notes:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>This block must be initialized using <code>terraform init</code>.</li>
          <li>Backend settings are not stored in the state — they are part of the config only.</li>
        </ul>
        <p><strong>In Practice:</strong> Different workspaces (dev, uat, prod) use different state keys in the same storage account.</p>
      </div>`
      },
      {
        question: "What are supported backends in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Supported Terraform Backends</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Local</strong> – stores state locally.</li>
          <li><strong>Remote</strong> – Terraform Cloud or Enterprise.</li>
          <li><strong>azurerm</strong> – Azure Blob Storage backend.</li>
          <li><strong>s3</strong> – AWS S3 backend with DynamoDB for locking.</li>
          <li><strong>gcs</strong> – Google Cloud Storage backend.</li>
          <li><strong>consul</strong> – HashiCorp Consul backend for HA setups.</li>
          <li><strong>http</strong> / <strong>etcd</strong> – custom or API-based storage.</li>
        </ul>
        <p><strong>In Practice:</strong> For Azure-based orgs, <code>azurerm</code> is the most used backend for state centralization.</p>
      </div>`
      },
      {
        question: "How to configure remote backend?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔧 <strong>Remote Backend Configuration (Azure Example)</strong></h3>
        <pre><code>terraform {
  backend "azurerm" {
    resource_group_name  = "tfstate-rg"
    storage_account_name = "tfstateglobal"
    container_name       = "tfstate"
    key                  = "dev.terraform.tfstate"
  }
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Initialize with <code>terraform init -backend-config="key=prod.tfstate"</code>.</li>
          <li>Requires storage account, blob container, and access credentials.</li>
          <li>Locking supported via Azure blob leases.</li>
        </ul>
        <p><strong>In Practice:</strong> In our CI/CD, backend config values are injected dynamically from DevOps variable groups.</p>
      </div>`
      },
      {
        question: "What is state locking?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Terraform State Locking</strong></h3>
        <p>State locking prevents concurrent operations (like two applies) from modifying the same state at the same time.</p>
        <ul style="margin-left:1.2rem;">
          <li>Implemented differently by each backend:
            <ul>
              <li><strong>azurerm:</strong> Uses Blob Storage leases.</li>
              <li><strong>s3:</strong> Uses DynamoDB table.</li>
              <li><strong>Terraform Cloud:</strong> Handles automatically.</li>
            </ul>
          </li>
          <li>If another user tries to apply, Terraform shows a “state lock” message.</li>
        </ul>
        <p><strong>In Practice:</strong> We rely on locking to prevent DevOps pipeline and local runs from corrupting the shared state.</p>
      </div>`
      },
      {
        question: "What is state file encryption?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Terraform State Encryption</strong></h3>
        <p>Since state file can contain sensitive information (like secrets, passwords, connection strings), encryption is crucial.</p>
        <ul style="margin-left:1.2rem;">
          <li>Azure Blob backend supports <strong>encryption-at-rest</strong> (via SSE).</li>
          <li>S3 supports <strong>KMS encryption</strong>.</li>
          <li>Terraform Cloud encrypts state automatically.</li>
          <li>Additional layer: Use Vault or Key Vault to store sensitive variables instead of state.</li>
        </ul>
        <p><strong>In Practice:</strong> We enforce encryption policies via Azure Policy on all Terraform storage accounts.</p>
      </div>`
      },
      {
        question: "How do you recover if local tfstate is deleted?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧯 <strong>Recovering Deleted State</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>If using remote backend → state is safe in cloud (Azure Blob, etc.).</li>
          <li>If local backend → restore from <code>terraform.tfstate.backup</code>.</li>
          <li>If both lost → use <code>terraform import</code> to recreate state manually.</li>
        </ul>
        <pre><code>terraform import azurerm_resource_group.rg /subscriptions/.../resourceGroups/rg1</code></pre>
        <p><strong>In Practice:</strong> We enabled blob versioning so any deleted or corrupted tfstate can be restored instantly.</p>
      </div>`
      },
      {
        question: "How do you handle state file in a team setup?",
        answerHtml: `
      <div class="answer-rich">
        <h3>👥 <strong>Team State Management Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>remote backend</strong> (Azure Blob, Terraform Cloud) — single source of truth.</li>
          <li>Enable <strong>locking</strong> to avoid conflicts.</li>
          <li>Enable <strong>versioning</strong> for rollback.</li>
          <li>Restrict write access — only CI/CD pipelines should apply changes.</li>
          <li>Store backend configuration securely (not in code).</li>
        </ul>
        <p><strong>In Practice:</strong> We disabled direct <code>terraform apply</code> locally — all state changes go through controlled DevOps pipelines using remote backend.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "28. Terraform – Backend (Azure, S3, etc.)",
    questions: [
      {
        question: "What is the Azure backend in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>AzureRM Backend — Centralized State Management on Azure</strong></h3>
        <p>The <strong>azurerm backend</strong> in Terraform stores your state file (<code>terraform.tfstate</code>) securely inside an <strong>Azure Storage Account</strong> container.</p>
        <ul style="margin-left:1.2rem;">
          <li>Enables collaboration — multiple team members can share the same state remotely.</li>
          <li>Supports <strong>state locking</strong> via Azure Blob leases (prevents parallel applies).</li>
          <li>Provides <strong>encryption-at-rest</strong> and integration with Azure AD / Service Principals.</li>
        </ul>
        <pre><code>terraform {
  backend "azurerm" {
    resource_group_name  = "tfstate-rg"
    storage_account_name = "tfstateglobal"
    container_name       = "tfstate"
    key                  = "prod.terraform.tfstate"
  }
}</code></pre>
        <p><strong>In Practice:</strong> This backend is the standard in Azure environments — especially when integrating Terraform with Azure DevOps pipelines.</p>
      </div>`
      },
      {
        question: "What arguments are required for Azure backend?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Required Arguments for AzureRM Backend</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>resource_group_name</strong> → Name of the Resource Group containing the Storage Account.</li>
          <li><strong>storage_account_name</strong> → The Storage Account where state will be stored.</li>
          <li><strong>container_name</strong> → The Blob container to hold the state file.</li>
          <li><strong>key</strong> → Path and name of the state file (acts like a unique key per environment).</li>
        </ul>
        <p><strong>Optional Arguments:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>subscription_id</strong> — if deploying across subscriptions.</li>
          <li><strong>access_key</strong> — manual authentication (not recommended, use SPN or Managed Identity).</li>
          <li><strong>sas_token</strong> — for temporary access.</li>
          <li><strong>use_msi = true</strong> — to use Managed Identity in pipelines.</li>
        </ul>
        <p><strong>In Practice:</strong> In Azure DevOps, we pass these arguments dynamically using <code>-backend-config</code> to keep backend flexible per environment.</p>
      </div>`
      },
      {
        question: "How to configure S3 backend in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🪣 <strong>S3 Backend — For AWS-based Remote State Storage</strong></h3>
        <p>The <strong>S3 backend</strong> stores Terraform state in an AWS S3 bucket and optionally uses DynamoDB for state locking.</p>
        <pre><code>terraform {
  backend "s3" {
    bucket         = "terraform-state-bucket"
    key            = "prod/network/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}</code></pre>
        <ul style="margin-left:1.2rem;">
          <li><strong>bucket</strong> → S3 bucket name where state is stored.</li>
          <li><strong>key</strong> → Path of the tfstate file inside the bucket.</li>
          <li><strong>region</strong> → AWS region of the bucket.</li>
          <li><strong>dynamodb_table</strong> → Optional — used for state locking.</li>
          <li><strong>encrypt</strong> → Enables SSE (Server-Side Encryption) for security.</li>
        </ul>
        <p><strong>In Practice:</strong> In AWS-based projects, this setup is used with IAM roles or access keys provided via environment variables in CI/CD.</p>
      </div>`
      },
      {
        question: "What is the difference between S3 and Azure backend?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🆚 <strong>Comparison: S3 vs AzureRM Backend</strong></h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse;width:100%;">
          <thead><tr><th>Aspect</th><th>AzureRM Backend</th><th>S3 Backend</th></tr></thead>
          <tbody>
            <tr><td>Storage Service</td><td>Azure Blob Storage</td><td>AWS S3 Bucket</td></tr>
            <tr><td>Locking Mechanism</td><td>Blob Lease</td><td>DynamoDB Table</td></tr>
            <tr><td>Encryption</td><td>Azure SSE + RBAC</td><td>S3 SSE + KMS</td></tr>
            <tr><td>Authentication</td><td>Service Principal / MSI / SAS</td><td>Access Keys / IAM Role</td></tr>
            <tr><td>Config Simplicity</td><td>Few parameters (4 required)</td><td>More granular config (region, table, encrypt)</td></tr>
            <tr><td>Common Usage</td><td>Azure DevOps pipelines</td><td>AWS CodePipeline, Jenkins, GitHub Actions</td></tr>
          </tbody>
        </table>
        <p><strong>In Practice:</strong> Both are functionally identical in Terraform behavior — only their authentication and locking mechanisms differ.</p>
      </div>`
      },
      {
        question: "What is the use of key argument in backend block?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗝️ <strong>key — Unique Identifier for State File</strong></h3>
        <p>The <code>key</code> argument defines the path and name of the state file inside your backend storage.</p>
        <ul style="margin-left:1.2rem;">
          <li>It acts as a “namespace” for your state within the storage.</li>
          <li>Used to separate environments (e.g. dev.tfstate, prod.tfstate).</li>
          <li>Supports folder-like hierarchy in cloud storage.</li>
        </ul>
        <pre><code>key = "env/dev/app1/terraform.tfstate"</code></pre>
        <p><strong>In Practice:</strong> We dynamically assign key values using variables — e.g. <code>key = "\&dollar;{var.env}/\&dollar;{var.module}.tfstate"</code> to separate per-environment states.</p>
      </div>`
      },
      {
        question: "What is the role of access_key and secret_key in backend configuration?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔑 <strong>Authentication Parameters — access_key & secret_key</strong></h3>
        <p>These are used to authenticate Terraform with the backend service (Azure or AWS) when no other identity mechanism is configured.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>access_key</strong> → Identifies the user or application.</li>
          <li><strong>secret_key</strong> → Secret credential used to verify access.</li>
          <li>Can be passed in <code>backend-config</code> or environment variables (more secure).</li>
        </ul>
        <pre><code>terraform init -backend-config="access_key=XXXX" -backend-config="secret_key=YYYY"</code></pre>
        <p><strong>Best Practice:</strong> Avoid hardcoding credentials in code. Use:</p>
        <ul style="margin-left:1.2rem;">
          <li>Azure: Managed Identity / Service Principal + Azure CLI login.</li>
          <li>AWS: IAM Role / Environment Variables.</li>
        </ul>
        <p><strong>In Practice:</strong> In CI/CD pipelines, credentials are injected at runtime via secure DevOps variable groups or secrets store.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "29. Terraform – Lifecycle, Dependencies & Meta-Arguments",
    questions: [
      {
        question: "What is lifecycle block in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Lifecycle Block — Controlling Resource Behavior</strong></h3>
        <p>The <code>lifecycle</code> block in Terraform is a <strong>meta-argument</strong> that lets you control how Terraform creates, updates, or destroys a resource.</p>
        <p><strong>Purpose:</strong> To customize the default “create → update → destroy” flow of Terraform.</p>
        <pre><code>resource "azurerm_virtual_machine" "vm" {
  name = "app-vm"
  lifecycle {
    create_before_destroy = true
    prevent_destroy       = false
    ignore_changes        = [tags]
  }
}</code></pre>
        <p><strong>Common Use Cases:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Maintain zero downtime during updates (create_before_destroy).</li>
          <li>Protect critical infra from accidental deletion (prevent_destroy).</li>
          <li>Ignore certain changes like tags or OS updates (ignore_changes).</li>
        </ul>
      </div>`
      },
      {
        question: "What is create_before_destroy?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>create_before_destroy — Ensures Zero Downtime</strong></h3>
        <p>This lifecycle argument ensures that a new resource is created <strong>before</strong> Terraform destroys the old one.</p>
        <pre><code>lifecycle {
  create_before_destroy = true
}</code></pre>
        <p><strong>Use Case:</strong> When updating load balancers, VMs, or NICs that should not go down during replacement.</p>
        <p><strong>Note:</strong> It requires Terraform to be able to create duplicates temporarily. If the resource name or unique constraint prevents duplication, it will fail.</p>
      </div>`
      },
      {
        question: "What is prevent_destroy?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛑 <strong>prevent_destroy — Protect Critical Resources</strong></h3>
        <p>When set to true, Terraform will <strong>refuse to destroy</strong> the resource even if it is removed from code or replaced.</p>
        <pre><code>lifecycle {
  prevent_destroy = true
}</code></pre>
        <p><strong>Use Case:</strong> Protect production resources like databases, storage accounts, or state buckets from accidental deletion.</p>
        <p><strong>In Practice:</strong> During CI/CD or shared infra, we use this for any data-bearing resource (SQL, S3, Storage Account).</p>
        <p><strong>Terraform Behavior:</strong> Shows error: <em>“Resource is marked prevent_destroy = true”</em> during apply.</p>
      </div>`
      },
      {
        question: "What is ignore_changes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🙈 <strong>ignore_changes — Avoid Unnecessary Drift Updates</strong></h3>
        <p>Used to tell Terraform to <strong>ignore modifications</strong> made to specific attributes outside Terraform.</p>
        <pre><code>lifecycle {
  ignore_changes = [ tags, "os_disk" ]
}</code></pre>
        <p><strong>Use Case:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Ignore OS updates or metadata that change dynamically.</li>
          <li>Prevent Terraform from replacing VMs when tags are modified manually.</li>
        </ul>
        <p><strong>In Practice:</strong> Often used in DevOps pipelines to allow cloud automation tools (like Azure Policy or AWS Config) to modify tags or settings without breaking Terraform state alignment.</p>
      </div>`
      },
      {
        question: "What is the purpose of depends_on?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>depends_on — Explicit Dependency Management</strong></h3>
        <p>Terraform usually determines dependencies <strong>implicitly</strong> through references, but if not, we can force dependency using <code>depends_on</code>.</p>
        <pre><code>resource "azurerm_network_interface" "nic" {
  name = "vm-nic"
}

resource "azurerm_virtual_machine" "vm" {
  name = "app-vm"
  depends_on = [azurerm_network_interface.nic]
}</code></pre>
        <p><strong>Purpose:</strong> To ensure a resource is created only after another is ready, even if no attribute reference exists.</p>
        <p><strong>Use Case:</strong> Custom dependencies, null_resources, provisioners, or module-level sequencing.</p>
      </div>`
      },
      {
        question: "What is count and for_each?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>count & for_each — Resource Iteration Meta-Arguments</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>count</strong> — Used to create multiple resources based on an integer value.</li>
          <li><strong>for_each</strong> — Used to create resources based on a map or set of strings, providing fine-grained control.</li>
        </ul>
        <pre><code># Using count
resource "azurerm_resource_group" "rg" {
  count = 3
  name  = "rg-&dollar;{count.index}"
}

# Using for_each
resource "azurerm_resource_group" "rg" {
  for_each = toset(["dev", "qa", "prod"])
  name     = "rg-&dollar;{each.key}"
}</code></pre>
        <p><strong>Key Difference:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>count</strong> when resources are identical and index-based.</li>
          <li>Use <strong>for_each</strong> when resources are distinct and map-based (for stable addressing).</li>
        </ul>
      </div>`
      },
      {
        question: "What is a dynamic block?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Dynamic Block — Generate Nested Blocks Programmatically</strong></h3>
        <p>Dynamic blocks are used to create multiple nested configuration blocks dynamically, based on loops or variable data.</p>
        <pre><code>resource "azurerm_network_security_group" "nsg" {
  name = "app-nsg"

  dynamic "security_rule" {
    for_each = var.rules
    content {
      name                       = each.key
      priority                   = each.value.priority
      direction                  = each.value.direction
      access                     = each.value.access
      protocol                   = each.value.protocol
    }
  }
}</code></pre>
        <p><strong>Use Case:</strong> Useful when nested attributes (like security rules, tags, users) need to be created dynamically from a list/map.</p>
      </div>`
      },
      {
        question: "What is a conditional expression?",
        answerHtml: `
      <div class="answer-rich">
        <h3>❓ <strong>Conditional Expression — Ternary Logic in Terraform</strong></h3>
        <p>Terraform supports <strong>ternary conditional logic</strong> to assign values dynamically.</p>
        <pre><code>name = var.env == "prod" ? "app-prod" : "app-dev"</code></pre>
        <p><strong>Use Case:</strong> Enable/disable certain resources, choose sizes, or set tags based on environment.</p>
        <p><strong>Example:</strong></p>
        <pre><code>count = var.enable_vm ? 1 : 0</code></pre>
        <p>This conditionally creates the resource only if <code>enable_vm</code> is true.</p>
      </div>`
      },
      {
        question: "What is implicit vs explicit dependency?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Implicit vs Explicit Dependencies</strong></h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse;width:100%;">
          <thead><tr><th>Type</th><th>Description</th><th>Example</th></tr></thead>
          <tbody>
            <tr>
              <td>Implicit</td>
              <td>Automatically inferred by Terraform when one resource references another.</td>
              <td><code>subnet_id = azurerm_subnet.main.id</code></td>
            </tr>
            <tr>
              <td>Explicit</td>
              <td>Manually declared using <code>depends_on</code> when no attribute reference exists.</td>
              <td><code>depends_on = [azurerm_network_security_group.nsg]</code></td>
            </tr>
          </tbody>
        </table>
        <p><strong>In Practice:</strong> Prefer implicit dependencies — explicit should be last resort when required for orchestration.</p>
      </div>`
      },
      {
        question: "What is the move block and what does it do?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚚 <strong>move Block — Safely Renaming or Refactoring Resources</strong></h3>
        <p>The <strong>move block</strong> (introduced in Terraform 1.6+) is used to instruct Terraform to move state from one resource address to another — typically during refactor or renaming.</p>
        <pre><code>moved {
  from = azurerm_resource_group.old_rg
  to   = azurerm_resource_group.new_rg
}</code></pre>
        <p><strong>Use Case:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Renaming resource labels safely without re-creation.</li>
          <li>Moving state between modules or resource types.</li>
          <li>Refactoring modules or flattening nested structures.</li>
        </ul>
        <p><strong>In Practice:</strong> Prevents accidental destroy/create cycle during refactoring. Used with <code>terraform plan</code> to validate safe migration.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "30. Terraform – Functions & Expressions",
    questions: [
      {
        question: "What are functions in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Functions in Terraform</strong></h3>
        <p>Functions in Terraform are <strong>built-in helpers</strong> that allow you to transform, compute, or extract data dynamically inside configuration files.</p>
        <p><strong>Purpose:</strong> To make configurations dynamic instead of hardcoding values.</p>
        <pre><code>resource "azurerm_storage_account" "sa" {
  name = lower(join("", ["App", var.env, "Storage"]))
}</code></pre>
        <p><strong>Explanation:</strong> Here <code>lower()</code> and <code>join()</code> functions are used to build a lowercase dynamic name based on variables.</p>
        <p><strong>Key Point:</strong> Terraform doesn’t allow user-defined functions — only built-in ones.</p>
      </div>`
      },
      {
        question: "What are built-in functions in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Built-in Functions — Terraform’s Power Tools</strong></h3>
        <p>Terraform includes 100+ built-in functions categorized into:</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>String functions:</strong> lower(), upper(), replace(), substr(), join(), split()</li>
          <li><strong>Collection functions:</strong> length(), element(), contains(), lookup(), keys(), values()</li>
          <li><strong>File functions:</strong> file(), templatefile(), filebase64()</li>
          <li><strong>Numeric functions:</strong> min(), max(), abs(), floor(), ceil()</li>
          <li><strong>Date/time functions:</strong> timestamp(), formatdate()</li>
          <li><strong>Encoding functions:</strong> jsonencode(), base64encode()</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>tags = {
  environment = upper(var.env)
  created_at  = timestamp()
}</code></pre>
        <p>These make infrastructure code dynamic, consistent, and reusable.</p>
      </div>`
      },
      {
        question: "What is the use of lookup function?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>lookup() — Safe Map Access</strong></h3>
        <p>The <code>lookup()</code> function retrieves a value from a map safely — with an optional default value if key is missing.</p>
        <pre><code>lookup(map, key, default)</code></pre>
        <p><strong>Example:</strong></p>
        <pre><code>lookup(var.vm_sizes, var.env, "Standard_B2s")</code></pre>
        <p>If <code>var.env</code> key exists in <code>var.vm_sizes</code>, it returns that; otherwise it returns the default “Standard_B2s”.</p>
        <p><strong>Use Case:</strong> Handling environment-based configurations safely without errors.</p>
      </div>`
      },
      {
        question: "What is the use of join function?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>join() — Combine List into a String</strong></h3>
        <p><code>join()</code> merges list elements into a single string separated by a delimiter.</p>
        <pre><code>join(delimiter, list)</code></pre>
        <p><strong>Example:</strong></p>
        <pre><code>join("-", ["app", var.env, "eastus"]) → "app-dev-eastus"</code></pre>
        <p><strong>Use Case:</strong> Useful for naming conventions, resource IDs, or labels.</p>
      </div>`
      },
      {
        question: "What is the use of split function?",
        answerHtml: `
      <div class="answer-rich">
        <h3>✂️ <strong>split() — Break String into List</strong></h3>
        <p>The <code>split()</code> function splits a string into a list based on a given separator.</p>
        <pre><code>split(delimiter, string)</code></pre>
        <p><strong>Example:</strong></p>
        <pre><code>split(",", "dev,qa,prod") → ["dev", "qa", "prod"]</code></pre>
        <p><strong>Use Case:</strong> Parse comma-separated environment lists or tags.</p>
      </div>`
      },
      {
        question: "What is the use of length function?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📏 <strong>length() — Count Elements</strong></h3>
        <p>The <code>length()</code> function returns number of elements in a list, map, or number of characters in a string.</p>
        <pre><code>length(var.subnets) → 3</code></pre>
        <p><strong>Use Case:</strong> For validations, dynamic loop counts, or naming logic.</p>
        <p><strong>Example:</strong></p>
        <pre><code>count = length(var.subnets)</code></pre>
      </div>`
      },
      {
        question: "What is the use of element function?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔢 <strong>element() — Fetch Element by Index</strong></h3>
        <p>The <code>element()</code> function returns the item at a specific index in a list.</p>
        <pre><code>element(list, index)</code></pre>
        <p><strong>Example:</strong></p>
        <pre><code>element(["dev", "qa", "prod"], 1) → "qa"</code></pre>
        <p><strong>Use Case:</strong> Access specific subnet or environment value from a list dynamically.</p>
      </div>`
      },
      {
        question: "What is the use of contains function?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>contains() — Check Membership</strong></h3>
        <p>The <code>contains()</code> function checks if a list or set contains a given value and returns a boolean.</p>
        <pre><code>contains(["dev", "qa", "prod"], "qa") → true</code></pre>
        <p><strong>Use Case:</strong> Conditional logic based on environment or feature inclusion.</p>
        <p><strong>Example:</strong></p>
        <pre><code>count = contains(var.envs, "prod") ? 2 : 1</code></pre>
      </div>`
      },
      {
        question: "What is the use of file function?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📂 <strong>file() — Read File Content</strong></h3>
        <p>The <code>file()</code> function reads raw text from a local file and returns its content as a string.</p>
        <pre><code>file("userdata.sh")</code></pre>
        <p><strong>Use Case:</strong> To pass script files or JSON templates into resources like VM extensions, cloud-init, etc.</p>
        <p><strong>Example:</strong></p>
        <pre><code>custom_data = file("&dollar;{path.module}/init.sh")</code></pre>
      </div>`
      },
      {
        question: "What is the use of templatefile function?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>templatefile() — Parameterized File Rendering</strong></h3>
        <p>The <code>templatefile()</code> function allows you to load an external template file and replace variables dynamically.</p>
        <pre><code>templatefile(path, vars)</code></pre>
        <p><strong>Example:</strong></p>
        <pre><code>templatefile("&dollar;{path.module}/userdata.tpl", {
  env  = var.env
  name = var.app_name
})</code></pre>
        <p><strong>Use Case:</strong> Ideal for dynamic bash scripts, ARM templates, or YAML manifests where placeholders need runtime replacement.</p>
        <p><strong>Difference:</strong> <code>file()</code> reads plain text, <code>templatefile()</code> substitutes variables.</p>
      </div>`
      },
      {
        question: "What is a conditional expression in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>❓ <strong>Conditional Expression — Dynamic Logic Control</strong></h3>
        <p>Conditional expressions are used to dynamically select a value based on a condition (similar to ternary operator).</p>
        <pre><code>condition ? true_value : false_value</code></pre>
        <p><strong>Example:</strong></p>
        <pre><code>vm_size = var.env == "prod" ? "Standard_D2s_v3" : "Standard_B1s"</code></pre>
        <p><strong>Use Case:</strong> Enable/disable resources, choose configuration or tag values based on environment.</p>
        <p><strong>Advanced Example:</strong></p>
        <pre><code>count = contains(["prod","uat"], var.env) ? 1 : 0</code></pre>
      </div>`
      }
    ]
  }
  ,
  {
    title: "31. Terraform – Debugging, Logs & Error Handling",
    questions: [
      {
        question: "How to enable debug logs in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🪵 <strong>Enable Debug Logs in Terraform</strong></h3>
        <p>Terraform debugging is controlled via environment variables. You can enable detailed logs by setting <code>TF_LOG</code> before running a command.</p>
        <pre><code>export TF_LOG=DEBUG
terraform apply</code></pre>
        <p><strong>Log Levels:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>TRACE</strong> – Most detailed (internal function traces)</li>
          <li><strong>DEBUG</strong> – Detailed troubleshooting info</li>
          <li><strong>INFO</strong> – General operational information</li>
          <li><strong>WARN</strong> – Warnings that don’t stop execution</li>
          <li><strong>ERROR</strong> – Critical errors only</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>export TF_LOG=TRACE
terraform plan</code></pre>
        <p>This prints detailed logs directly to the console.</p>
      </div>`
      },
      {
        question: "What is TF_LOG?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>TF_LOG — Logging Level Controller</strong></h3>
        <p><code>TF_LOG</code> is an environment variable used to control the verbosity of Terraform logs.</p>
        <pre><code>export TF_LOG=DEBUG</code></pre>
        <p><strong>Available Levels:</strong></p>
        <ul>
          <li>TRACE</li>
          <li>DEBUG</li>
          <li>INFO</li>
          <li>WARN</li>
          <li>ERROR</li>
        </ul>
        <p><strong>Use Case:</strong> Quickly enable on-screen logs for troubleshooting without modifying configuration files.</p>
      </div>`
      },
      {
        question: "What is TF_LOG_PATH?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>TF_LOG_PATH — Save Logs to File</strong></h3>
        <p><code>TF_LOG_PATH</code> defines where the Terraform debug log should be written.</p>
        <pre><code>export TF_LOG=DEBUG
export TF_LOG_PATH="terraform-debug.log"
terraform apply</code></pre>
        <p>This creates a detailed log file for review instead of cluttering your console.</p>
        <p><strong>Best Practice:</strong> Always use TF_LOG_PATH during CI/CD runs for post-mortem debugging.</p>
      </div>`
      },
      {
        question: "How to troubleshoot Terraform issues?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Terraform Troubleshooting Steps</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Run <code>terraform validate</code> to check syntax and provider errors.</li>
          <li>Use <code>terraform plan -out=tfplan</code> to see proposed changes safely.</li>
          <li>Enable logs with <code>TF_LOG=DEBUG</code> to inspect provider operations.</li>
          <li>Inspect <code>.terraform</code> directory for provider plugins or lock file mismatches.</li>
          <li>Check <code>terraform state list</code> for missing resources or drift.</li>
          <li>Reinitialize with <code>terraform init -reconfigure</code> if backend or provider changed.</li>
        </ol>
        <p><strong>Pro Tip:</strong> If you face state corruption, take a backup of <code>terraform.tfstate</code> before manual edits.</p>
      </div>`
      },
      {
        question: "How do you handle validation or dependency errors?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚠️ <strong>Validation & Dependency Error Handling</strong></h3>
        <p><strong>1️⃣ Validation Errors</strong> — occur when syntax, variable types, or missing attributes are detected.</p>
        <p><strong>Fix:</strong></p>
        <pre><code>terraform validate
terraform fmt</code></pre>
        <p>→ Correct syntax and type mismatches.</p>
        <p><strong>2️⃣ Dependency Errors</strong> — happen when resources rely on others that don’t exist or are misordered.</p>
        <p><strong>Fix:</strong></p>
        <ul>
          <li>Use <code>depends_on</code> to explicitly define dependencies.</li>
          <li>Check module outputs/inputs mismatches.</li>
          <li>Re-run <code>terraform graph</code> to visualize dependencies.</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>resource "azurerm_network_interface" "nic" {
  depends_on = [azurerm_virtual_network.vnet]
}</code></pre>
      </div>`
      },
      {
        question: "How do you perform dry-run debugging in CI/CD?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧪 <strong>Dry-run (No Changes) Debugging in CI/CD</strong></h3>
        <p>In pipelines, you can use <code>terraform plan</code> to simulate an apply without changing resources.</p>
        <pre><code>terraform plan -detailed-exitcode</code></pre>
        <p><strong>Exit Codes:</strong></p>
        <ul>
          <li>0 → No changes</li>
          <li>1 → Error</li>
          <li>2 → Changes present</li>
        </ul>
        <p><strong>Use in CI/CD:</strong></p>
        <pre><code>terraform init
terraform validate
terraform plan -detailed-exitcode -out=tfplan || EXIT_CODE=&dollar;?
if [ &dollar;EXIT_CODE -eq 1 ]; then
  echo "Error detected!"
  exit 1
elif [ &dollar;EXIT_CODE -eq 2 ]; then
  echo "Changes detected!"
else
  echo "No changes!"
fi</code></pre>
        <p><strong>Pro Tip:</strong> Combine with <code>TF_LOG_PATH</code> for full pipeline logs to debug silently failing plans.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "32. Terraform – Cloud & Enterprise",
    questions: [
      {
        question: "What is Terraform Cloud?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>Terraform Cloud — Hosted Terraform Platform</strong></h3>
        <p><strong>Terraform Cloud</strong> is a SaaS (managed) version of Terraform provided by HashiCorp. It centralizes Terraform operations like plan, apply, state management, and policy enforcement.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>🗂️ Remote & secure <strong>state storage</strong> (no need for backend setup)</li>
          <li>👥 Team-based access control and audit logs</li>
          <li>🚀 Remote <strong>runs & applies</strong> in a controlled environment</li>
          <li>🔐 Sensitive variable storage with encryption</li>
          <li>🧩 Integration with VCS (GitHub, GitLab, Azure Repos, Bitbucket)</li>
          <li>⚖️ Policy enforcement using <strong>Sentinel</strong></li>
        </ul>
        <p><strong>Example Use Case:</strong> Instead of running Terraform locally, you connect your GitHub repo → push code → Terraform Cloud automatically triggers <code>plan</code> and <code>apply</code>.</p>
      </div>`
      },
      {
        question: "What is Terraform Enterprise?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏢 <strong>Terraform Enterprise — Self-Hosted Terraform Cloud</strong></h3>
        <p><strong>Terraform Enterprise (TFE)</strong> is the <em>self-hosted</em> commercial version of Terraform Cloud for organizations needing full control, compliance, and internal security.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>🏗️ Installed in your private datacenter or VPC</li>
          <li>🔒 Enhanced security & compliance (SSO, audit logs, private networking)</li>
          <li>📦 Private module & policy registries</li>
          <li>⚙️ Full integration with corporate identity (Azure AD, LDAP, Okta)</li>
          <li>🧠 Advanced policy control using Sentinel and custom workflows</li>
        </ul>
        <p><strong>When to Use:</strong> Enterprise-grade companies with strict data residency and compliance requirements (like BFSI, healthcare, or govt).</p>
      </div>`
      },
      {
        question: "What are workspaces in Terraform Cloud?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Terraform Cloud Workspaces</strong></h3>
        <p>A <strong>workspace</strong> in Terraform Cloud represents one isolated instance of a Terraform configuration and its state.</p>
        <p>Each workspace has:</p>
        <ul>
          <li>🔑 Its own <strong>state file</strong></li>
          <li>🔐 Its own <strong>variables</strong> (env vars, TF vars)</li>
          <li>⚙️ Independent <strong>execution runs</strong></li>
        </ul>
        <p><strong>Example:</strong> You can create separate workspaces for <code>dev</code>, <code>uat</code>, <code>prod</code> — all using the same Terraform code.</p>
        <pre><code>terraform workspace new dev
terraform workspace select prod</code></pre>
        <p>In Terraform Cloud UI, each workspace is linked to a VCS branch or directory.</p>
      </div>`
      },
      {
        question: "What is Sentinel policy in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Sentinel — Policy as Code Framework</strong></h3>
        <p><strong>Sentinel</strong> is HashiCorp’s <em>policy-as-code</em> framework integrated into Terraform Cloud/Enterprise.</p>
        <p>It allows you to enforce organizational rules automatically during <code>plan</code> or <code>apply</code> stages.</p>
        <p><strong>Example Use Cases:</strong></p>
        <ul>
          <li>Prevent creation of public S3 buckets</li>
          <li>Ensure all resources have tags</li>
          <li>Disallow costly VM SKUs in non-prod environments</li>
        </ul>
        <pre><code>main = rule { all resources.tags contains "Environment" }</code></pre>
        <p><strong>Sentinel Enforcement Levels:</strong></p>
        <ul>
          <li><strong>Advisory</strong> – Warns, but allows apply</li>
          <li><strong>Soft Mandatory</strong> – Allows override</li>
          <li><strong>Hard Mandatory</strong> – Blocks apply</li>
        </ul>
      </div>`
      },
      {
        question: "What is the difference between Terraform Cloud and CLI?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Terraform Cloud vs CLI Comparison</strong></h3>
        <table>
          <thead><tr><th>Feature</th><th>Terraform CLI (Local)</th><th>Terraform Cloud</th></tr></thead>
          <tbody>
            <tr><td>Execution</td><td>Runs on local machine</td><td>Runs remotely on HashiCorp servers</td></tr>
            <tr><td>State Management</td><td>Local or custom backend</td><td>Automatically managed & locked</td></tr>
            <tr><td>Team Collaboration</td><td>Manual sharing</td><td>Role-based access control</td></tr>
            <tr><td>Policy Enforcement</td><td>Manual checks</td><td>Built-in Sentinel policies</td></tr>
            <tr><td>VCS Integration</td><td>Manual triggers</td><td>Automatic plan/apply on git push</td></tr>
            <tr><td>Cost</td><td>Free (open-source)</td><td>Free tier + paid plans</td></tr>
          </tbody>
        </table>
      </div>`
      },
      {
        question: "What is the use of VCS integration in Terraform Cloud?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>VCS Integration in Terraform Cloud</strong></h3>
        <p><strong>Version Control System (VCS) Integration</strong> connects Terraform Cloud with your Git repository (GitHub, GitLab, Azure Repos, Bitbucket, etc.).</p>
        <p><strong>Purpose:</strong></p>
        <ul>
          <li>Automatically trigger <code>terraform plan</code> when code is pushed</li>
          <li>Enable pull-request based infrastructure review</li>
          <li>Ensure auditability and collaboration (who changed what, when)</li>
        </ul>
        <p><strong>Example Flow:</strong></p>
        <ol>
          <li>Push change to <code>main.tf</code> in GitHub</li>
          <li>Terraform Cloud detects change via webhook</li>
          <li>Triggers <code>plan</code> → stores results in workspace</li>
          <li>Admin reviews and approves → <code>apply</code> executes remotely</li>
        </ol>
        <p><strong>Pro Tip:</strong> Combine VCS integration with Sentinel policies to enforce compliance before deployment.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "33. Terraform – Registry",
    questions: [
      {
        question: "What is Terraform Registry?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Terraform Registry — Central Module & Provider Hub</strong></h3>
        <p>The <strong>Terraform Registry</strong> is a public or private repository where Terraform <em>modules and providers</em> are published and shared.</p>
        <p><strong>Types:</strong></p>
        <ul>
          <li>🌍 <strong>Public Registry</strong> — Managed by HashiCorp (<a href="https://registry.terraform.io">registry.terraform.io</a>), contains verified modules for AWS, Azure, GCP, etc.</li>
          <li>🏢 <strong>Private Registry</strong> — Available in Terraform Cloud/Enterprise for internal organizational modules.</li>
        </ul>
        <p><strong>Purpose:</strong> Enables standardization, reuse, and consistency in infrastructure automation across teams.</p>
        <p><strong>Example:</strong></p>
        <pre><code>module "vnet" {
  source  = "Azure/network/azurerm"
  version = "3.5.0"
  address_space = ["10.0.0.0/16"]
}</code></pre>
        <p><strong>In Practice:</strong> Teams avoid reinventing the wheel by consuming tested modules from Registry, ensuring compliance and quality.</p>
      </div>`
      },
      {
        question: "How to publish a module to Registry?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Publishing Modules to Terraform Registry</strong></h3>
        <p>Modules can be published to the public or private registry depending on your use case.</p>
        <p><strong>✅ Requirements for Public Registry:</strong></p>
        <ul>
          <li>Must be a public GitHub repo.</li>
          <li>Repo name format: <code>terraform-&lt;PROVIDER&gt;-&lt;NAME&gt;</code> (e.g., <code>terraform-azurerm-vnet</code>).</li>
          <li>Root directory must contain a valid <code>main.tf</code>, <code>variables.tf</code>, and <code>outputs.tf</code>.</li>
          <li>Include <code>README.md</code> with usage examples and input/output descriptions.</li>
        </ul>
        <p><strong>Steps:</strong></p>
        <ol>
          <li>Push your module repo to GitHub (public or private).</li>
          <li>Go to <a href="https://registry.terraform.io">Terraform Registry</a> → Sign in with GitHub.</li>
          <li>Click <strong>Publish Module</strong> → select repo.</li>
          <li>Registry automatically detects provider, version, and documentation.</li>
        </ol>
        <p><strong>For Private Registry:</strong> In Terraform Cloud → <code>Modules → Publish → From VCS → Select Org Repo</code>.</p>
        <p><strong>Pro Tip:</strong> Tag your module releases (e.g., <code>v1.0.0</code>) for versioning and stability.</p>
      </div>`
      },
      {
        question: "How to use modules from Terraform Registry?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Using Modules from Terraform Registry</strong></h3>
        <p>Modules from the registry can be easily integrated using the <code>source</code> and <code>version</code> attributes.</p>
        <pre><code>module "storage" {
  source   = "Azure/storage-account/azurerm"
  version  = "2.8.0"
  resource_group_name = "rg-demo"
  account_tier        = "Standard"
}</code></pre>
        <p><strong>Usage Guidelines:</strong></p>
        <ul>
          <li>Always specify a <code>version</code> to avoid breaking changes.</li>
          <li>Check module’s documentation for required/optional inputs.</li>
          <li>Use <code>terraform get</code> to fetch modules and dependencies.</li>
          <li>For private registries, ensure Terraform Cloud/Enterprise authentication is configured.</li>
        </ul>
        <p><strong>Pro Tip:</strong> Prefer using verified modules from trusted vendors (e.g., HashiCorp, Microsoft, AWS).</p>
      </div>`
      },
      {
        question: "How do you version modules and maintain registry hygiene?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧹 <strong>Versioning & Hygiene in Terraform Registry</strong></h3>
        <p>Versioning modules ensures stability, compatibility, and rollback capability.</p>
        <p><strong>Best Practices:</strong></p>
        <ul>
          <li>Use <strong>Semantic Versioning (SemVer)</strong>: <code>vMAJOR.MINOR.PATCH</code> (e.g., <code>v1.2.3</code>).</li>
          <li><strong>MAJOR</strong> → Breaking changes</li>
          <li><strong>MINOR</strong> → Backward-compatible enhancements</li>
          <li><strong>PATCH</strong> → Bug fixes</li>
          <li>Maintain a clean <code>CHANGELOG.md</code> documenting updates.</li>
          <li>Remove deprecated outputs, variables, and unused files regularly.</li>
          <li>For private registries — enforce module review before publish.</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>module "network" {
  source  = "git::https://github.com/org/terraform-azurerm-network.git?ref=v2.1.0"
}</code></pre>
        <p><strong>Pro Tip:</strong> Automate publishing using CI/CD pipelines (e.g., GitHub Actions → tag → push → auto publish to Registry).</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "34. Terraform – Security & Best Practices",
    questions: [
      {
        question: "What are Terraform best practices?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Terraform Best Practices</strong></h3>
        <p>Following best practices ensures maintainability, scalability, and security of your Infrastructure-as-Code.</p>
        <ul>
          <li>📁 <strong>Use Modular Structure:</strong> Split configurations into reusable modules (<code>network</code>, <code>vm</code>, <code>storage</code>).</li>
          <li>🔒 <strong>Never commit secrets</strong> (keys, passwords, tokens) to code or Git.</li>
          <li>📦 <strong>Use Remote State Backend</strong> with locking (e.g., S3 + DynamoDB or Azure Blob + State Locking).</li>
          <li>📜 <strong>Version control</strong> all Terraform code (Git).</li>
          <li>⚙️ <strong>Pin versions</strong> of providers and modules (avoid breaking changes).</li>
          <li>🧪 <strong>Use <code>terraform validate</code>, <code>fmt</code>, <code>plan</code></strong> before apply.</li>
          <li>👥 <strong>Use workspaces</strong> for environment separation (dev/test/prod).</li>
          <li>🧰 <strong>Integrate CI/CD</strong> for testing and automated deployments.</li>
          <li>✅ <strong>Enable policy-as-code</strong> with Sentinel/OPA for compliance.</li>
        </ul>
        <p><strong>Example Folder Layout:</strong></p>
        <pre><code>├── modules/
│   ├── network/
│   ├── compute/
│   └── storage/
├── environments/
│   ├── dev/
│   ├── prod/
│   └── staging/
└── main.tf</code></pre>
      </div>`
      },
      {
        question: "How to manage secrets securely in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Secure Secrets Management in Terraform</strong></h3>
        <p>Terraform should never directly store secrets in code or state file. Use one of the following approaches:</p>
        <ul>
          <li>🌫️ <strong>Environment Variables:</strong> Inject secrets dynamically (<code>TF_VAR_password</code>).</li>
          <li>🏦 <strong>HashiCorp Vault:</strong> Use Vault provider to fetch secrets securely at runtime.</li>
          <li>☁️ <strong>Cloud Key Vaults:</strong> Use <strong>Azure Key Vault</strong>, <strong>AWS Secrets Manager</strong>, or <strong>GCP Secret Manager</strong>.</li>
          <li>📜 <strong>Terraform Cloud Variables:</strong> Mark sensitive variables as <code>sensitive=true</code>.</li>
          <li>🧹 <strong>Never output secrets</strong> in <code>outputs.tf</code> (use <code>sensitive = true</code> flag).</li>
        </ul>
        <pre><code>variable "db_password" {
  type      = string
  sensitive = true
}</code></pre>
        <p><strong>Pro Tip:</strong> Enable state encryption (AES-256) and store secrets outside tfvars.</p>
      </div>`
      },
      {
        question: "What is Vault provider and when do you use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏦 <strong>Vault Provider in Terraform</strong></h3>
        <p>The <strong>Vault provider</strong> integrates Terraform with <strong>HashiCorp Vault</strong> to dynamically read secrets or credentials.</p>
        <p><strong>Use Case:</strong> Securely inject secrets like DB passwords, API tokens, certificates during apply — without storing them in code.</p>
        <p><strong>Example:</strong></p>
        <pre><code>provider "vault" {
  address = "https://vault.example.com"
  token   = var.vault_token
}

data "vault_generic_secret" "db" {
  path = "secret/data/db-creds"
}

resource "azurerm_sql_server" "db" {
  administrator_login          = "admin"
  administrator_login_password = data.vault_generic_secret.db.data["password"]
}</code></pre>
        <p><strong>When to Use:</strong> In enterprises where Vault is centralized secret store and compliance requires rotation and audit.</p>
      </div>`
      },
      {
        question: "How to use environment variables securely?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌫️ <strong>Using Environment Variables Securely</strong></h3>
        <ul>
          <li>Use <code>TF_VAR_&lt;variable&gt;</code> convention for passing values.</li>
          <li>Store them in CI/CD secret managers (e.g., GitHub Secrets, Azure DevOps Library).</li>
          <li>Do not echo or log them in scripts or Terraform output.</li>
          <li>Mark variables <code>sensitive = true</code> to hide values in CLI and state file.</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code># Bash
export TF_VAR_client_secret="super-secret-key"</code></pre>
        <p><strong>In Terraform:</strong></p>
        <pre><code>variable "client_secret" {
  type      = string
  sensitive = true
}</code></pre>
      </div>`
      },
      {
        question: "How to manage Terraform state securely?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Securing Terraform State File</strong></h3>
        <p><strong>tfstate</strong> contains sensitive data (like passwords, tokens, IDs). Best practices:</p>
        <ul>
          <li>🗄️ Store state in a <strong>remote backend</strong> (Azure Blob, S3, GCS) — never local.</li>
          <li>🔐 Enable <strong>state encryption at rest</strong> (e.g., AES-256).</li>
          <li>🔒 Enable <strong>state locking</strong> (DynamoDB/Azure Storage).</li>
          <li>🧑‍🤝‍🧑 Use role-based access control (RBAC) to limit who can read/write state.</li>
          <li>⚠️ Avoid storing tfstate in public version control.</li>
          <li>🪣 Use Terraform Cloud for managed and encrypted state with team permissions.</li>
        </ul>
        <p><strong>Example (Azure Backend):</strong></p>
        <pre><code>terraform {
  backend "azurerm" {
    resource_group_name  = "tfstate-rg"
    storage_account_name = "tfstateprod"
    container_name       = "tfstate"
    key                  = "prod.tfstate"
  }
}</code></pre>
      </div>`
      },
      {
        question: "What is least privilege principle in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧍‍♂️ <strong>Least Privilege Principle (LPP)</strong></h3>
        <p>Grant Terraform only the minimal permissions necessary to perform its tasks.</p>
        <ul>
          <li>⚙️ Create a dedicated <strong>service principal</strong> or IAM role for Terraform.</li>
          <li>🚫 Avoid giving Terraform <code>Owner</code> or <code>Admin</code> roles unnecessarily.</li>
          <li>✅ Limit Terraform’s role to create/update infrastructure only.</li>
          <li>🧩 Rotate credentials periodically.</li>
        </ul>
        <p><strong>Example (Azure):</strong></p>
        <pre><code>az ad sp create-for-rbac --name "terraform" \\
  --role "Contributor" --scopes /subscriptions/&lt;sub-id&gt;</code></pre>
      </div>`
      },
      {
        question: "How to enforce policies for secure IaC?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧑‍⚖️ <strong>Enforcing Security Policies (Policy as Code)</strong></h3>
        <p>Terraform allows policy enforcement using <strong>Sentinel</strong> (Terraform Cloud) or <strong>OPA (Open Policy Agent)</strong>.</p>
        <ul>
          <li>🏛️ Define rules like — “No public S3 buckets”, “All resources must have tags”, etc.</li>
          <li>🚦 Policies are evaluated before apply — to block non-compliant infrastructure.</li>
        </ul>
        <p><strong>Example (Sentinel):</strong></p>
        <pre><code>import "tfplan"
main = rule {
  all tfplan.resources.aws_s3_bucket as bucket {
    bucket.applied.private == true
  }
}</code></pre>
        <p><strong>Pro Tip:</strong> Integrate policies in CI/CD to ensure every commit passes security checks before apply.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "35. Terraform – Azure",
    questions: [
      {
        question: "How to use Terraform with Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>Using Terraform with Azure</strong></h3>
        <p>Terraform automates Azure infrastructure creation using the <strong>AzureRM provider</strong>.</p>
        <p>✅ Steps to use Terraform with Azure:</p>
        <ol>
          <li>🔹 Install Terraform and Azure CLI</li>
          <li>🔹 Login to Azure using <code>az login</code></li>
          <li>🔹 Configure <code>provider "azurerm"</code> block</li>
          <li>🔹 Define resources (e.g., resource groups, VMs, VNets)</li>
          <li>🔹 Initialize, plan, and apply</li>
        </ol>
        <pre><code>terraform init
terraform plan
terraform apply</code></pre>
        <p><strong>Pro Tip:</strong> Use a remote backend like Azure Blob Storage for storing state securely.</p>
      </div>`
      },
      {
        question: "What is AzureRM provider?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔧 <strong>AzureRM Provider</strong></h3>
        <p>The <strong>AzureRM provider</strong> is the official Terraform provider used to interact with Azure resources.</p>
        <p>It defines how Terraform connects to Azure APIs to manage resources like RGs, VNets, VMs, etc.</p>
        <pre><code>provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
  tenant_id       = var.tenant_id
  client_id       = var.client_id
  client_secret   = var.client_secret
}</code></pre>
        <p><strong>Key point:</strong> The <code>features {}</code> block is mandatory (even if empty).</p>
      </div>`
      },
      {
        question: "How to create Resource Group using Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Creating Azure Resource Group</strong></h3>
        <pre><code>resource "azurerm_resource_group" "rg" {
  name     = "rg-demo"
  location = "East US"
  tags = {
    environment = "dev"
  }
}</code></pre>
        <p>✅ This creates a new resource group <strong>rg-demo</strong> in <em>East US</em>.</p>
        <p><strong>Command Flow:</strong></p>
        <pre><code>terraform init
terraform plan
terraform apply</code></pre>
      </div>`
      },
      {
        question: "How to authenticate to Azure in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Authentication Methods</strong></h3>
        <ul>
          <li>🔹 <strong>Azure CLI Authentication:</strong> Run <code>az login</code> → Terraform picks up credentials automatically.</li>
          <li>🔹 <strong>Service Principal Authentication:</strong> Provide <code>client_id</code>, <code>client_secret</code>, <code>tenant_id</code>, and <code>subscription_id</code>.</li>
          <li>🔹 <strong>Managed Identity:</strong> When running Terraform from Azure VM or DevOps agent with a system-assigned identity.</li>
        </ul>
        <pre><code>provider "azurerm" {
  features {}
  use_msi = true
}</code></pre>
        <p><strong>Best Practice:</strong> Always use a Service Principal or Managed Identity — avoid using personal credentials.</p>
      </div>`
      },
      {
        question: "How to use service principal with Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>👤 <strong>Using Azure Service Principal for Terraform</strong></h3>
        <p>1️⃣ Create a Service Principal:</p>
        <pre><code>az ad sp create-for-rbac --name "terraform" --role="Contributor" \\
  --scopes="/subscriptions/&lt;sub-id&gt;"</code></pre>
        <p>2️⃣ Capture the output:</p>
        <pre><code>{
  "appId": "xxxx",
  "password": "xxxx",
  "tenant": "xxxx"
}</code></pre>
        <p>3️⃣ Use it in provider block:</p>
        <pre><code>provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
  client_id       = var.client_id      # appId
  client_secret   = var.client_secret  # password
  tenant_id       = var.tenant_id
}</code></pre>
        <p><strong>Pro Tip:</strong> Store these credentials in Azure Key Vault or CI/CD secret variables — never in code.</p>
      </div>`
      },
      {
        question: "How to deploy VM using Terraform in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💻 <strong>Deploying Azure VM with Terraform</strong></h3>
        <pre><code>resource "azurerm_resource_group" "rg" {
  name     = "rg-vm"
  location = "East US"
}

resource "azurerm_virtual_network" "vnet" {
  name                = "vnet-demo"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
}

resource "azurerm_subnet" "subnet" {
  name                 = "subnet1"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.0.1.0/24"]
}

resource "azurerm_network_interface" "nic" {
  name                = "nic1"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.subnet.id
    private_ip_address_allocation = "Dynamic"
  }
}

resource "azurerm_linux_virtual_machine" "vm" {
  name                  = "vm-demo"
  resource_group_name   = azurerm_resource_group.rg.name
  location              = azurerm_resource_group.rg.location
  size                  = "Standard_B1s"
  admin_username        = "azureuser"
  admin_password        = var.vm_password
  network_interface_ids = [azurerm_network_interface.nic.id]
  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }
  source_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "18.04-LTS"
    version   = "latest"
  }
}</code></pre>
        <p><strong>Tip:</strong> Always parameterize location, size, and credentials using variables.</p>
      </div>`
      },
      {
        question: "How to connect on-prem to Azure via Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌉 <strong>Connecting On-Prem to Azure using Terraform</strong></h3>
        <p>You can configure hybrid connectivity using Terraform to automate VPN or ExpressRoute setup.</p>
        <p><strong>Example: Site-to-Site VPN (On-prem ↔ Azure)</strong></p>
        <ol>
          <li>Create a <strong>Virtual Network</strong> in Azure.</li>
          <li>Create a <strong>Virtual Network Gateway</strong>.</li>
          <li>Create a <strong>Local Network Gateway</strong> (representing on-prem network).</li>
          <li>Create a <strong>Connection</strong> between both gateways.</li>
        </ol>
        <pre><code>resource "azurerm_local_network_gateway" "onprem" {
  name                = "onprem-gateway"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  gateway_address     = "203.0.113.1"
  address_space       = ["10.10.0.0/16"]
}

resource "azurerm_virtual_network_gateway_connection" "vpn" {
  name                = "vpn-connection"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  type                = "IPsec"
  virtual_network_gateway_id = azurerm_virtual_network_gateway.vng.id
  local_network_gateway_id   = azurerm_local_network_gateway.onprem.id
  shared_key          = "YourSharedKey"
}</code></pre>
        <p><strong>Use Case:</strong> For hybrid deployments (e.g., connecting datacenter to Azure VNet).</p>
      </div>`
      },
      {
        question: "How to use Key Vault integration with Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏦 <strong>Azure Key Vault Integration</strong></h3>
        <p>Terraform can read secrets directly from Azure Key Vault using the <strong>azurerm_key_vault_secret</strong> data source.</p>
        <p><strong>Example:</strong></p>
        <pre><code>data "azurerm_key_vault" "kv" {
  name                = "my-keyvault"
  resource_group_name = "rg-secure"
}

data "azurerm_key_vault_secret" "db_pwd" {
  name         = "db-password"
  key_vault_id = data.azurerm_key_vault.kv.id
}

resource "azurerm_mssql_server" "sql" {
  name                         = "sql-prod"
  resource_group_name          = "rg-secure"
  location                     = "East US"
  administrator_login          = "adminuser"
  administrator_login_password = data.azurerm_key_vault_secret.db_pwd.value
}</code></pre>
        <p><strong>Benefit:</strong> Secrets never appear in tfvars or state file — they are fetched dynamically at runtime.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "36. Terraform – Miscellaneous / Advanced Topics",
    questions: [
      {
        question: "What is the difference between Terraform and ARM template?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚔️ <strong>Terraform vs ARM Templates</strong></h3>
        <table>
          <tr><th>Aspect</th><th>Terraform</th><th>ARM Template</th></tr>
          <tr><td>Language</td><td>HCL (HashiCorp Configuration Language)</td><td>JSON</td></tr>
          <tr><td>Multi-Cloud</td><td>✅ Yes (Azure, AWS, GCP)</td><td>❌ Azure-only</td></tr>
          <tr><td>Reusability</td><td>Modules for reuse</td><td>Linked templates</td></tr>
          <tr><td>State Management</td><td>Maintains <code>terraform.tfstate</code></td><td>No state file</td></tr>
          <tr><td>Ease of Use</td><td>Declarative + Modular</td><td>JSON-heavy, verbose</td></tr>
        </table>
        <p><strong>Summary:</strong> Terraform is cross-platform and modular; ARM is Azure-native but limited in flexibility.</p>
      </div>`
      },
      {
        question: "What is drift in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌊 <strong>Drift in Terraform</strong></h3>
        <p><strong>Drift</strong> occurs when the actual cloud infrastructure changes outside of Terraform’s control.</p>
        <p>🔹 For example: Someone deletes or modifies an Azure VM manually from the portal.</p>
        <p><strong>Detection:</strong> Run <code>terraform plan</code> — it shows differences between real infra & state file.</p>
        <p><strong>Prevention:</strong> Use RBAC, state locking, and restrict manual portal access.</p>
      </div>`
      },
      {
        question: "What is Terraform refresh?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Terraform Refresh</strong></h3>
        <p><code>terraform refresh</code> updates the <strong>state file</strong> with the latest values from the cloud.</p>
        <pre><code>terraform refresh</code></pre>
        <p>It doesn’t change infrastructure — it only syncs state to match reality.</p>
        <p><strong>Note:</strong> In newer versions (1.1+), refresh happens automatically during <code>plan</code> and <code>apply</code>.</p>
      </div>`
      },
      {
        question: "What is import in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Terraform Import</strong></h3>
        <p>Used to bring existing resources (created manually or by another team) under Terraform management.</p>
        <pre><code>terraform import azurerm_resource_group.rg /subscriptions/&lt;sub_id&gt;/resourceGroups/myRG</code></pre>
        <p><strong>Steps:</strong></p>
        <ol>
          <li>1️⃣ Create Terraform config for that resource.</li>
          <li>2️⃣ Run <code>terraform import</code> with resource ID.</li>
          <li>3️⃣ Terraform adds it to the state file without creating it again.</li>
        </ol>
        <p><strong>Use Case:</strong> Migrating existing Azure infra into IaC control.</p>
      </div>`
      },
      {
        question: "What is the difference between apply and plan?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>terraform plan vs terraform apply</strong></h3>
        <table>
          <tr><th>Command</th><th>Purpose</th></tr>
          <tr><td><code>terraform plan</code></td><td>Shows what changes Terraform will make (preview only)</td></tr>
          <tr><td><code>terraform apply</code></td><td>Executes the changes and applies them to real infra</td></tr>
        </table>
        <p><strong>Pro Tip:</strong> Use <code>terraform apply planfile.tfplan</code> in CI/CD for controlled deployments.</p>
      </div>`
      },
      {
        question: "What is the use of target in terraform apply?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🎯 <strong>Using -target flag</strong></h3>
        <p>Used to apply or destroy a specific resource or module only.</p>
        <pre><code>terraform apply -target=azurerm_resource_group.rg</code></pre>
        <p><strong>Use Case:</strong> Debugging or testing specific resources without full infra apply.</p>
        <p><strong>⚠️ Caution:</strong> Avoid using frequently — it can cause dependency mismatch in state.</p>
      </div>`
      },
      {
        question: "How to write reusable Terraform code?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Reusable Terraform Code</strong></h3>
        <p>✅ Use <strong>Modules</strong> to group related resources and reuse them across environments.</p>
        <pre><code>module "network" {
  source = "./modules/network"
  vnet_name = var.vnet_name
}</code></pre>
        <p>✅ Parameterize using <strong>variables</strong>, <strong>locals</strong>, and <strong>outputs</strong>.</p>
        <p>✅ Maintain module versions in source control or private registry.</p>
      </div>`
      },
      {
        question: "What is Terraform linting?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧹 <strong>Terraform Linting</strong></h3>
        <p>Terraform linting ensures your code follows syntax & style best practices.</p>
        <ul>
          <li>🔹 Use <code>terraform fmt</code> — auto-formats code.</li>
          <li>🔹 Use <code>terraform validate</code> — checks for syntax errors.</li>
          <li>🔹 Use <strong>tflint</strong> — checks code quality & provider-specific best practices.</li>
        </ul>
        <p><strong>Benefit:</strong> Prevents syntax, naming, and unused variable issues before deployment.</p>
      </div>`
      },
      {
        question: "What are common Terraform errors you faced?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚨 <strong>Common Terraform Errors</strong></h3>
        <ul>
          <li>❌ <strong>State Lock Error</strong> — occurs when another operation is holding the state.</li>
          <li>⚙️ <strong>Provider Authentication Error</strong> — wrong credentials or expired SPN.</li>
          <li>📂 <strong>Backend Init Error</strong> — missing or incorrect backend block.</li>
          <li>🔗 <strong>Dependency Cycle</strong> — circular depends_on references.</li>
          <li>💡 <strong>Plan mismatch</strong> — drift or manual infra changes.</li>
        </ul>
        <p><strong>Debugging Tips:</strong> Enable logs → <code>TF_LOG=DEBUG</code> or <code>TF_LOG_PATH</code>.</p>
      </div>`
      },
      {
        question: "How do you handle module version upgrades safely?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⬆️ <strong>Handling Module Upgrades Safely</strong></h3>
        <p>Steps:</p>
        <ol>
          <li>1️⃣ Pin module version in your configuration:
            <pre><code>source  = "git::https://repo//modules/network.git"
version = "1.0.2"</code></pre></li>
          <li>2️⃣ Test new version in lower environment (dev / sandbox).</li>
          <li>3️⃣ Use <code>terraform plan</code> to preview impact.</li>
          <li>4️⃣ Apply incrementally after validation.</li>
        </ol>
        <p><strong>Best Practice:</strong> Always tag module releases (v1.0.0, v1.0.1) and never use “latest”.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "37 . Scripting & Tools (Automation, Bash, PowerShell, Linters)",
    questions: [
      {
        question: "Have you worked on Bash or PowerShell scripting?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🖥️ <strong>Bash & PowerShell — Practical Scripting Experience</strong></h3>
        <p>Yes — I use Bash for Linux-based CI agents, automation, and glue scripts; PowerShell for Windows hosts and Azure-specific automation (Az modules).</p>
        <p><strong>Common tasks I script:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>CI pipeline steps (init → plan → upload artifacts → notify)</li>
          <li>Secrets fetch & inject (Key Vault / Vault) into runtime env</li>
          <li>Automated rollbacks, health checks & remediation (restart service, reclaim disk)</li>
          <li>Release packaging and module publish (tag → build → push)</li>
        </ul>
        <h4>Examples</h4>
        <pre><code># Bash: basic terraform pipeline step
set -e
export TF_IN_AUTOMATION=true
terraform init -input=false
terraform fmt -check
terraform validate
terraform plan -out=tfplan

# PowerShell: fetching secret from Key Vault (Az module)
&dollar;secret = Get-AzKeyVaultSecret -VaultName "kv-prod" -Name "dbPassword"
Write-Output "Secret length: &dollar;(&dollar;secret.SecretValueText.Length)"</code></pre>
        <p><strong>In Practice:</strong> I wrap CLI calls with retries and health checks (3 tries + exponential backoff) and log to central file for post-mortem.</p>
      </div>`
      },
      {
        question: "How will you ensure password is removed from repo after it was exposed?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Removing Exposed Passwords from Git History</strong></h3>
        <p>Immediate steps:</p>
        <ol style="margin-left:1.2rem;">
          <li>Revoke & rotate the exposed credential immediately (rotate secrets in Key Vault/Secrets Manager).</li>
          <li>Remove the secret from repo and local working copies: <code>git rm --cached &lt;file&gt;</code> + commit.</li>
          <li>Rewrite Git history to purge the secret using BFG or git filter-repo (preferred):</li>
        </ol>
        <pre><code># Using git filter-repo (recommended)
git clone --mirror git@github.com:org/repo.git
cd repo.git
git filter-repo --invert-paths --path path/to/secret.txt

# Or replace a secret string
git filter-repo --replace-text replacements.txt

# Push cleaned repo (force)
git push --force --all
git push --force --tags</code></pre>
        <p><strong>Notify:</strong> Inform team, rotate any leaked credentials, update CI secrets, and run a repo scan (TruffleHog/TruffleHog3) to confirm no other leaks.</p>
        <p><strong>In Practice:</strong> I always rotate the secret first, then scrub history, then enforce pre-commit hooks + secret scanners to avoid re-introduction.</p>
      </div>`
      },
      {
        question: "What is TFLint?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧹 <strong>TFLint — Terraform Linter & Best-Practice Checker</strong></h3>
        <p>TFLint is a pluggable linter for Terraform that checks provider-specific best practices, detects deprecated attributes, and enforces coding standards.</p>
        <p><strong>Benefits:</strong> catches issues that terraform validate misses (unused vars, deprecated fields, region mismatches, potential security issues).</p>
        <h4>Usage</h4>
        <pre><code># Install & run
brew install tflint       # or choco / apt
tflint --init             # initialize provider rules
tflint                    # run checks</code></pre>
        <p><strong>In Practice:</strong> I run tflint in CI (fail on error, warn on lower-severity rules) and keep custom rules for org policies.</p>
      </div>`
      },
      {
        question: "What is a linter in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔎 <strong>Terraform Linter — Purpose</strong></h3>
        <p>Linters (terraform fmt, tflint, tfsec integration) analyze Terraform code for formatting, syntax, provider-specific issues, security smells, and style consistency.</p>
        <ul style="margin-left:1.2rem;">
          <li><code>terraform fmt</code> — enforces HCL formatting.</li>
          <li><code>terraform validate</code> — validates config semantics and provider schemas.</li>
          <li><code>tflint</code> — deeper linting & provider best practices.</li>
        </ul>
        <p><strong>In Practice:</strong> Enforce fmt & tflint in pre-commit + CI to maintain consistent code and reduce human-review noise.</p>
      </div>`
      },
      {
        question: "What is Checkov and how do you integrate it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Checkov — IaC Security Static Analysis</strong></h3>
        <p>Checkov scans Terraform (and other IaC) for security misconfigurations (open S3 buckets, unencrypted disks, weak NSG rules) using a rich rule set.</p>
        <h4>Integration</h4>
        <pre><code># Install
pip install checkov

# Run locally or in CI
checkov -d . --framework terraform

# CI (example step)
- script: |
    pip install checkov
    checkov -d . --quiet --output json > checkov-report.json
  displayName: "Run Checkov"</code></pre>
        <p><strong>Best Practice:</strong> Fail pipeline on "high" or "critical" findings; keep a policy baseline and suppress only with documented exceptions.</p>
        <p><strong>In Practice:</strong> I gate "apply" in prod unless Checkov passes and findings are triaged.</p>
      </div>`
      },
      {
        question: "What is TruffleHog and where do you use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>TruffleHog — Secret Scanning Tool</strong></h3>
        <p>TruffleHog scans git history and repos for high-entropy strings and known secret patterns (API keys, tokens).</p>
        <h4>Use Cases</h4>
        <ul style="margin-left:1.2rem;">
          <li>Scan new repos during initial onboarding</li>
          <li>Nightly scans to detect accidental check-ins</li>
          <li>Pre-merge hook scans for PRs</li>
        </ul>
        <pre><code># Simple run
trufflehog git https://github.com/org/repo

# GitHub Action: runs on PRs or pushes</code></pre>
        <p><strong>In Practice:</strong> We run TruffleHog during PR checks; if it flags a secret, CI fails and reviewer is alerted to rotate & scrub.</p>
      </div>`
      },
      {
        question: "How will you integrate SonarQube using scripting?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>SonarQube Integration — Static Code Analysis</strong></h3>
        <p>SonarQube inspects code quality and security for languages (including HCL via plugins). Integration steps:</p>
        <ol style="margin-left:1.2rem;">
          <li>Install & configure SonarQube server (or use SonarCloud).</li>
          <li>Add sonar scanner to CI agent.</li>
          <li>Run scanner in pipeline and publish report to Sonar server.</li>
        </ol>
        <pre><code># Bash: SonarCloud/Server run example
export SONAR_TOKEN=...
sonar-scanner \
  -Dsonar.projectKey=myproj \
  -Dsonar.sources=. \
  -Dsonar.host.url=https://sonar.example.com \
  -Dsonar.login=&dollar;SONAR_TOKEN</code></pre>
        <p><strong>In Practice:</strong> I script sonar-scanner invocation in CI after unit tests and before merge — break build on new critical/blocker issues.</p>
      </div>`
      },
      {
        question: "How do you automate Terraform and security checks in pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Automating Terraform + Security in CI/CD</strong></h3>
        <p>Typical multi-stage pipeline pattern I implement (YAML / GitHub Actions):</p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Pre-checks</strong>: terraform fmt, terraform validate, tflint</li>
          <li><strong>Security scan</strong>: Checkov, tfsec, TruffleHog</li>
          <li><strong>Plan</strong>: terraform init → terraform plan -out=tfplan</li>
          <li><strong>Store plan</strong> as artifact for apply stage</li>
          <li><strong>Approval gate</strong> for prod</li>
          <li><strong>Apply</strong>: terraform apply tfplan (run with limited SPN)</li>
          <li><strong>Post-check</strong>: run drift detection or run Checkov again on resulting state</li>
        </ol>
        <pre><code># Simplified YAML step sequence (GitHub Actions)
jobs:
  validate:
    steps:
      - run: terraform fmt -check
      - run: tflint
      - run: checkov -d .
  plan:
    needs: validate
    steps:
      - run: terraform init
      - run: terraform plan -out=tfplan
  apply:
    needs: plan
    if: github.ref == 'refs/heads/main'
    steps:
      - run: terraform apply tfplan</code></pre>
        <p><strong>In Practice:</strong> I fail fast on lint/security; only allow apply when plan artifact + security gates are green.</p>
      </div>`
      },
      {
        question: "How will you integrate Azure Key Vault in pipeline via script?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Azure Key Vault Integration in Pipelines</strong></h3>
        <p>Options (choose based on CI platform):</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Native variable group linking (Azure DevOps):</strong> Link Key Vault to variable group → pipeline consumes secrets as variables automatically.</li>
          <li><strong>az cli fetch (generic):</strong> Use service principal to fetch secrets at runtime.</li>
          <li><strong>Terraform data source:</strong> Use <code>data.azurerm_key_vault_secret</code> in TF modules (secrets not stored in code).</li>
        </ul>
        <h4>Example — Bash (using az cli)</h4>
        <pre><code># Login using service principal (in CI, use secure vars)
az login --service-principal -u &dollar;SP_APPID -p &dollar;SP_SECRET --tenant &dollar;TENANT

# Fetch secret
DB_PASS=&dollar;(az keyvault secret show --vault-name my-kv --name db-password --query value -o tsv)
export TF_VAR_db_password="&dollar;DB_PASS"

# Then run terraform plan/apply
terraform plan -var "db_password=&dollar;DB_PASS"</code></pre>
        <h4>Example — Azure DevOps variable group</h4>
        <pre><code>variables:
- group: KeyVault-Linked-Variables  # secrets are injected automatically</code></pre>
        <p><strong>In Practice:</strong> I prefer linking Key Vault to pipeline variable groups for secure, auditable, and least-privilege secret retrieval. For ephemeral runs, I fetch via az cli and store in memory-only env vars, never write to disk.</p>
      </div>`
      }
      ,
      {
        question: "How do you use scripting to detect secret leaks?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Detecting Secret Leaks via Scripting</strong></h3>
        <p>Secret leak detection scripts scan repositories, commits, or config files for sensitive patterns (API keys, tokens, passwords, certificates).</p>
        <h4>💡 Methods:</h4>
        <ul style="margin-left:1.2rem;">
          <li><strong>Regex scan</strong> for known secret formats (AWS, Azure, JWT, etc.).</li>
          <li><strong>Entropy check</strong> — detect random high-entropy strings (likely secrets).</li>
          <li><strong>Integration with tools</strong> like <code>TruffleHog</code>, <code>gitleaks</code>, or <code>detect-secrets</code>.</li>
        </ul>
        <h4>🧾 Example — Bash script using grep + regex</h4>
        <pre><code>#!/bin/bash
# secret-scan.sh
echo "🔍 Scanning repo for potential secrets..."
grep -rEn --color "AKIA[0-9A-Z]{16}|password\s*=\s*|secret|key\s*=\s*" . --exclude-dir=.git
if [ &dollar;? -eq 0 ]; then
  echo "⚠️ Potential secrets found! Please review above lines."
else
  echo "✅ No obvious secrets detected."
fi</code></pre>
        <p><strong>In Practice:</strong> I run secret scans in pre-commit hooks & CI pipelines using TruffleHog or Gitleaks. If secrets are found → block PR + alert DevSecOps.</p>
      </div>`
      },
      {
        question: "What is AWK command in Linux?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>AWK Command — Linux Text Processing Utility</strong></h3>
        <p><strong>AWK</strong> is a powerful text processing tool used to extract, manipulate, and format data from structured text files like CSV, logs, or system outputs.</p>
        <h4>🧠 Syntax:</h4>
        <pre><code>awk 'pattern { action }' filename</code></pre>
        <h4>🔧 Examples:</h4>
        <ul style="margin-left:1.2rem;">
          <li>Print second column: <code>awk '{print &dollar;2}' file.txt</code></li>
          <li>Filter CPU usage &gt; 80%: <code>ps aux | awk '&dollar;3&gt;80 {print &dollar;1, &dollar;3, &dollar;11}'</code></li>
          <li>Sum column: <code>awk '{sum+=&dollar;3} END {print sum}' usage.csv</code></li>
        </ul>
        <p><strong>In Practice:</strong> I use <code>awk</code> in monitoring scripts (CPU, memory usage) and in parsing Terraform outputs or log files.</p>
      </div>`
      },
      {
        question: "What is &dollar;_ and &dollar;? in shell scripting?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Special Shell Variables — &dollar;_ and &dollar;?</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><code>&dollar;_</code> → holds the <strong>last argument</strong> of the previous command.</li>
          <li><code>&dollar;?</code> → holds the <strong>exit status</strong> of the last command (0 = success, non-zero = failure).</li>
        </ul>
        <h4>🧾 Example:</h4>
        <pre><code>echo "Hello"
echo &dollar;_       # Output: Hello
ls /tmp
echo &dollar;?       # Output: 0 (if successful)</code></pre>
        <p><strong>In Practice:</strong> I use <code>&dollar;?</code> in monitoring & retry logic — e.g., rerun a failed API call automatically if exit code != 0.</p>
      </div>`
      },
      {
        question: "Write a bash script for sending alert mail if VM disk is 80% full.",
        answerHtml: `
      <div class="answer-rich">
        <h3>📨 <strong>Bash Script — Disk Utilization Alert</strong></h3>
        <pre><code>#!/bin/bash
THRESHOLD=80
EMAIL="admin@example.com"
HOST=&dollar;(hostname)

df -H | grep -vE '^Filesystem|tmpfs|cdrom' | awk '{print &dollar;5 " " &dollar;1}' | while read output; do
  usage=&dollar;(echo &dollar;output | awk '{print &dollar;1}' | sed 's/%//')
  partition=&dollar;(echo &dollar;output | awk '{print &dollar;2}')
  if [ &dollar;usage -ge &dollar;THRESHOLD ]; then
    echo "🚨 Disk usage on &dollar;HOST (&dollar;partition) is at &dollar;{usage}%!" | \
    mail -s "Disk Alert: &dollar;HOST &dollar;partition &dollar;{usage}%" &dollar;EMAIL
  fi
done</code></pre>
        <p><strong>In Practice:</strong> I run such scripts via cron (every 10 mins) or include them in health-monitoring pods in AKS to send alerts via SMTP or webhook.</p>
      </div>`
      },
      {
        question: "Write “Hello bash” script using loop function.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Simple Loop Example in Bash</strong></h3>
        <pre><code>#!/bin/bash
for i in {1..5}
do
  echo "Hello Bash! — iteration &dollar;i"
done</code></pre>
        <p><strong>Output:</strong><br>
        Hello Bash! — iteration 1<br>
        Hello Bash! — iteration 2 ...</p>
        <p><strong>In Practice:</strong> Loops are often used to automate repetitive tasks — e.g., looping over multiple Terraform workspaces or VM IDs.</p>
      </div>`
      },
      {
        question: "What are loops in bash scripting?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Loops in Bash — for, while, until</strong></h3>
        <p>Loops allow execution of a block of commands multiple times.</p>
        <h4>🧾 Types:</h4>
        <ul style="margin-left:1.2rem;">
          <li><strong>for loop</strong>: Iterate over list or range.</li>
          <li><strong>while loop</strong>: Execute while condition is true.</li>
          <li><strong>until loop</strong>: Execute until condition becomes true.</li>
        </ul>
        <h4>Examples:</h4>
        <pre><code># for loop
for file in *.log; do echo &dollar;file; done

# while loop
count=1
while [ &dollar;count -le 5 ]; do echo &dollar;count; ((count++)); done

# until loop
until [ -f /tmp/ready.flag ]; do sleep 5; done</code></pre>
        <p><strong>In Practice:</strong> I use loops for log rotation, multi-resource deletion, or retry logic during provisioning.</p>
      </div>`
      },
      {
        question: "What is PowerShell and how is it used in automation?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>PowerShell — Task Automation Framework</strong></h3>
        <p>PowerShell is a command-line shell and scripting language built on .NET for automating administrative tasks in Windows and Azure.</p>
        <h4>🔧 Common Automation Use-Cases:</h4>
        <ul style="margin-left:1.2rem;">
          <li>Azure resource management using Az modules</li>
          <li>VM lifecycle management (create, reboot, patch)</li>
          <li>File system & registry automation</li>
          <li>CI/CD orchestration (invoke REST APIs, send notifications)</li>
        </ul>
        <h4>Example:</h4>
        <pre><code># Create Resource Group in Azure
Connect-AzAccount
New-AzResourceGroup -Name "RG-Demo" -Location "EastUS"</code></pre>
        <p><strong>In Practice:</strong> I use PowerShell in hybrid setups (Windows nodes in AKS or Azure Arc VMs) for provisioning & patch automation.</p>
      </div>`
      },
      {
        question: "How do you automate patching using scripting?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🩹 <strong>Automated VM Patching via Script</strong></h3>
        <p>Patching is automated using Bash (Linux) or PowerShell (Windows) scripts scheduled via cron or Task Scheduler.</p>
        <h4>Example — Linux (Bash)</h4>
        <pre><code>#!/bin/bash
LOG=/var/log/patching.log
echo "🔧 Starting patching: &dollar;(date)" >> &dollar;LOG
sudo apt update -y && sudo apt upgrade -y >> &dollar;LOG
if [ &dollar;? -eq 0 ]; then
  echo "✅ Patch successful: &dollar;(date)" >> &dollar;LOG
else
  echo "❌ Patch failed!" >> &dollar;LOG
fi</code></pre>
        <h4>Example — PowerShell (Windows)</h4>
        <pre><code>Install-Module PSWindowsUpdate -Force
Get-WindowsUpdate -AcceptAll -Install -AutoReboot</code></pre>
        <p><strong>In Practice:</strong> I schedule these scripts via Azure Automation Account or runbooks, integrated with Log Analytics for compliance tracking.</p>
      </div>`
      },
      {
        question: "How do you run Terraform scripts in CI/CD pipeline automatically?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🤖 <strong>Automating Terraform in CI/CD</strong></h3>
        <p>Terraform automation is typically implemented in pipelines (Azure DevOps, GitHub Actions, Jenkins) triggered by code commits or PR merges.</p>
        <h4>Pipeline Steps:</h4>
        <ol style="margin-left:1.2rem;">
          <li><strong>Checkout code</strong></li>
          <li><strong>Setup Terraform</strong> and init backend</li>
          <li><strong>Validate and plan</strong></li>
          <li><strong>Manual approval</strong> for prod</li>
          <li><strong>Apply infrastructure changes</strong></li>
        </ol>
        <h4>Example — Azure DevOps YAML</h4>
        <pre><code>trigger:
- main

stages:
- stage: Plan
  jobs:
  - job: Terraform_Plan
    steps:
    - script: |
        terraform init -backend-config=backend.tfvars
        terraform validate
        terraform plan -out=tfplan
      displayName: "Terraform Init & Plan"

- stage: Apply
  dependsOn: Plan
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
  jobs:
  - job: Terraform_Apply
    steps:
    - script: terraform apply -auto-approve tfplan
      displayName: "Terraform Apply"</code></pre>
        <p><strong>In Practice:</strong> I include Checkov/TFLint steps pre-plan and use Key Vault variable groups for secure secrets injection. The entire workflow is automated via pipeline triggers.</p>
      </div>`
      },
            {
        question: "Have you worked with Bash or PowerShell scripting?",
        answerHtml: `
      <div class="answer-rich">
        <h3>✅ <strong>Experience with Bash & PowerShell</strong></h3>
        <p>
          Yes — I use <strong>Bash</strong> daily for Linux automation, CI tasks, and lightweight glue scripts; and <strong>PowerShell</strong> for Windows automation, Azure CLI/ARM tasks, and cross-platform scripts where richer object handling is required.
        </p>
        <p><strong>Practical:</strong> Bash for container hosts, cron jobs, and pipeline steps; PowerShell for Windows VM provisioning, Azure runbooks, and scripting complex Azure AD interactions.</p>
      </div>`
      },
      {
        question: "What is a shell script and how to create one?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📜 <strong>Shell Script — Definition & Creation</strong></h3>
        <p>
          A shell script is a plain-text file containing shell commands (Bash, sh, PowerShell) executed by the shell interpreter to automate tasks.
        </p>
        <ol style="margin-left:1.2rem;">
          <li>Create a file <code>script.sh</code>.</li>
          <li>Add a shebang: <code>#!/usr/bin/env bash</code> at the top for Bash.</li>
          <li>Make it executable: <code>chmod +x script.sh</code>.</li>
          <li>Run: <code>./script.sh</code> or <code>bash script.sh</code>.</li>
        </ol>
        <pre><code>#!/usr/bin/env bash
echo "Hello from shell script"</code></pre>
        <p><strong>Tip:</strong> Add error handling (<code>set -euo pipefail</code>) and logging for production scripts.</p>
      </div>`
      },
      {
        question: "What is the difference between Bash and PowerShell?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Bash vs PowerShell — Key Differences</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Platform:</strong> Bash native to Unix/Linux (also available on Windows via WSL). PowerShell is cross-platform (PowerShell Core) but traditionally Windows-first.</li>
          <li><strong>Data model:</strong> Bash deals with text streams; PowerShell uses objects (PSObjects) which is powerful for passing structured data.</li>
          <li><strong>Syntax:</strong> Different syntax and built-in cmdlets. PowerShell has a rich module ecosystem for Windows APIs and Azure modules; Bash relies on CLI tools and text utilities (sed, awk, jq).</li>
          <li><strong>Use cases:</strong> Bash for lightweight shell automation, container hosts; PowerShell for Windows admin tasks, Azure automation with Az module, and complex orchestration needing objects.</li>
        </ul>
        <p><strong>Practical:</strong> Choose Bash for portability in Linux containers and PowerShell when manipulating structured data or using Windows-specific APIs.</p>
      </div>`
      },
      {
        question: "How do you automate Terraform commands using scripting?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🤖 <strong>Automating Terraform via Scripts</strong></h3>
        <p>
          Wrap Terraform steps in a script or pipeline job to make runs repeatable and idempotent.
        </p>
        <pre><code>#!/usr/bin/env bash
set -euo pipefail

export ARM_SUBSCRIPTION_ID="..."; export ARM_CLIENT_ID="..."; export ARM_CLIENT_SECRET="..."; export ARM_TENANT_ID="..."

cd infra/terraform
terraform init -input=false -backend-config=\"key=env/prod.tfstate\"
terraform validate
terraform plan -out=tfplan -input=false
# optional: publish tfplan artifact or require approval
terraform apply -input=false -auto-approve tfplan</code></pre>
        <p><strong>Best practices:</strong> - Use remote state (Azure blob) with locking - Use <code>plan -out</code> and apply saved plan - Avoid embedding secrets: pass via env or Key Vault - Add retries/timeouts in CI.</p>
      </div>`
      },
      {
        question: "What is a null resource and how can scripting trigger it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔧 <strong>Terraform null_resource & Provisioners</strong></h3>
        <p>
          <code>null_resource</code> is a Terraform resource with no provider-managed infrastructure; used to run provisioners or trigger actions based on changes (using <code>triggers</code>).
        </p>
        <pre><code>resource "null_resource" "run_script" {
  triggers = {
    timestamp = timestamp()   # change to force run
    config_hash = sha1(file("config.yml"))
  }

  provisioner "local-exec" {
    command = "bash ./scripts/post_deploy.sh &dollar;{var.some_value}"
  }
}</code></pre>
        <p><strong>How scripting triggers it:</strong> The <code>local-exec</code> runs the script when Terraform creates/changes the null_resource. Use deterministic triggers (file hash, var change) to run only when needed.</p>
        <p><strong>Warning:</strong> Prefer external orchestration (CI/CD) over Terraform provisioners for complex tasks to keep Terraform declarative.</p>
      </div>`
      },
      {
        question: "What are environment variables and how to use them in scripts?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Environment Variables — Use & Examples</strong></h3>
        <p>
          Environment variables are key/value pairs available to processes — used to pass configuration and secrets to scripts without hardcoding.
        </p>
        <pre><code># set
export DB_USER='appuser'
export DB_PASS='s3cret'

# use in Bash
echo \"DB user is &dollar;DB_USER\"

# use in PowerShell
&dollar;env:DB_USER</code></pre>
        <p><strong>Best practices:</strong> - Mark secrets as pipeline secrets so agents mask them - Avoid echoing secrets in logs - Use managed identities where possible instead of secrets.</p>
      </div>`
      },
      {
        question: "How to pass dynamic values from script to pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Passing Values from Script to Pipeline</strong></h3>
        <p>
          CI systems provide mechanisms to set pipeline variables from scripts. Example for Azure DevOps (Bash):
        </p>
        <pre><code># compute value in script
IMAGE_TAG=&dollar;(git rev-parse --short HEAD)
echo \"##vso[task.setvariable variable=IMAGE_TAG]&dollar;IMAGE_TAG\"

# later in pipeline use &dollar;(IMAGE_TAG)</code></pre>
        <p><strong>Other CI:</strong> GitHub Actions uses <code>::set-output</code> or environment files; GitLab uses <code>echo \"VAR=value\" &gt;&gt; &dollar;GITHUB_ENV</code>-style mechanisms. Always mark secrets as secret variables.</p>
      </div>`
      },
      {
        question: "What is the AWK command in Linux?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛠️ <strong>AWK — Text Processing Utility</strong></h3>
        <p>
          <strong>awk</strong> is a powerful text-processing language used to parse and transform structured text (like columns in logs / CSV).
        </p>
        <pre><code># print 1st and 3rd column from whitespace-separated file
awk '{print &dollar;1, &dollar;3}' /var/log/syslog

# filter and sum a numeric column
awk '/ERROR/ {sum += &dollar;5} END {print sum}' logfile</code></pre>
        <p><strong>In Practice:</strong> I use awk with tail/grep/jq for quick one-liners in debugging and pipelines where installing heavy tools isn't desired.</p>
      </div>`
      },
      {
        question: "What is &dollar;_ and &dollar;? in shell scripting?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔎 <strong>Special Shell Variables: &dollar;_ and &dollar;?</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><code>&dollar;?</code> — Exit status of the last executed command (0 = success, non-zero = failure). Useful for conditional checks.</li>
          <li><code>&dollar;_</code> — In many shells, holds the last argument of the previous command. In interactive shells also used by some utilities; behavior can vary between shells.</li>
        </ul>
        <pre><code>some_command
if [ &dollar;? -ne 0 ]; then
  echo 'command failed'
fi

echo \"Last arg of previous cmd: &dollar;_\"</code></pre>
        <p><strong>Practical:</strong> Prefer explicit variables for clarity in scripts; rely on <code>&dollar;?</code> for quick error handling.</p>
      </div>`
      },
      {
        question: "Write a simple Bash script to print “Hello Bash”.",
        answerHtml: `
      <div class="answer-rich">
        <h3>👋 <strong>Hello Bash Script</strong></h3>
        <pre><code>#!/usr/bin/env bash
# hello.sh
set -euo pipefail

echo "Hello Bash"</code></pre>
        <p>Make executable: <code>chmod +x hello.sh</code>. Run: <code>./hello.sh</code>.</p>
      </div>`
      },
      {
        question: "Write a script with loop function example.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Loop Example (Bash)</strong></h3>
        <pre><code>#!/usr/bin/env bash
set -euo pipefail

for i in {1..5}; do
  echo \"Iteration: &dollar;i\"
  sleep 1
done

# function with while loop
countdown() {
  local n=&dollar;1
  while [ &dollar;n -gt 0 ]; do
    echo \"Countdown: &dollar;n\"
    n=&dollar;((n-1))
  done
}

countdown 3</code></pre>
      </div>`
      },
      {
        question: "Write a Bash script to send email alert when disk usage exceeds 80%.",
        answerHtml: `
      <div class="answer-rich">
        <h3>📣 <strong>Disk Usage Alert Script (Bash)</strong></h3>
        <p>
          This example uses <code>mailx</code> (or <code>sendmail</code>/SMTP relay) available on many Linux systems. In production use centralized alerting (Prometheus Alertmanager, Azure Monitor).
        </p>
        <pre><code>#!/usr/bin/env bash
set -euo pipefail

THRESHOLD=80
EMAIL=\"ops@company.com\"

usage=&dollar;(df / | tail -1 | awk '{print &dollar;5}' | sed 's/%//')
if [ \"&dollar;usage\" -ge \"&dollar;THRESHOLD\" ]; then
  subject=\"ALERT: Disk usage &dollar;{usage}% on &dollar;(hostname)\"
  body=\"Disk usage is &dollar;{usage}% on &dollar;(hostname) at &dollar;(date)\"
  echo \"&dollar;body\" | mailx -s \"&dollar;subject\" \"&dollar;EMAIL\"
  echo \"Alert sent to &dollar;EMAIL\"
else
  echo \"Disk usage &dollar;{usage}% — OK\"
fi</code></pre>
        <p><strong>Notes:</strong> Configure mail relay or use API-based notifications (SendGrid, Teams webhook) in cloud environments to avoid managing SMTP.</p>
      </div>`
      },
      {
        question: "What are loops in Bash (for, while, until)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Bash Loops — for, while, until</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>for</strong> — iterate a known list or range:
            <pre><code>for item in a b c; do
  echo &dollar;item
done</code></pre>
          </li>
          <li><strong>while</strong> — run while condition is true:
            <pre><code>n=3
while [ &dollar;n -gt 0 ]; do
  echo &dollar;n
  n=&dollar;((n-1))
done</code></pre>
          </li>
          <li><strong>until</strong> — run until condition becomes true (opposite of while):
            <pre><code>x=0
until [ &dollar;x -ge 5 ]; do
  echo &dollar;x
  x=&dollar;((x+1))
done</code></pre>
          </li>
        </ul>
        <p><strong>Practical tip:</strong> Use <code>set -euo pipefail</code> plus proper quoting to avoid subtle loop bugs when iterating filenames or command outputs.</p>
      </div>`
      },
      {
        question: "What is cron job and how to schedule it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⏰ <strong>Cron Job — Schedule recurring tasks</strong></h3>
        <p>
          A <strong>cron job</strong> is a scheduled task on Unix-like systems run by the <code>crond</code> daemon. You schedule it by adding entries to a crontab file with the format:
        </p>
        <pre><code>┌──────── minute (0 - 59)
│ ┌────── hour   (0 - 23)
│ │ ┌──── day    (1 - 31)
│ │ │ ┌─── month  (1 - 12)
│ │ │ │ ┌─ weekday (0 - 6) (Sunday=0)
* * * * *  command-to-run</code></pre>
        <p><strong>Examples:</strong></p>
        <pre><code># run backup at 02:00 daily
0 2 * * * /usr/local/bin/backup.sh

# run every 15 minutes
*/15 * * * * /usr/local/bin/healthcheck.sh</code></pre>
        <p><strong>Commands:</strong> <code>crontab -e</code> to edit current user's crontab, <code>crontab -l</code> to list.</p>
        <p><strong>Best practice:</strong> Redirect output to log files, set PATH in crontab, and use a wrapper that handles locking (flock) to prevent overlapping runs.</p>
      </div>`
      },
      {
        question: "How to remove sensitive passwords from scripts or repos?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧹 <strong>Remove secrets from repo — Steps & Tools</strong></h3>
        <p>
          If secrets were committed, remove them and rotate credentials. Recommended tools:
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>BFG Repo-Cleaner</strong> — fast for removing files/strings from Git history.</li>
          <li><strong>git filter-repo</strong> — recommended modern tool for rewriting history precisely.</li>
        </ul>
        <pre><code># Example (git filter-repo)
pip install git-filter-repo
git clone --mirror git@repo:project.git
cd project.git
git filter-repo --path passwords.txt --invert-paths
git push --force --all
git push --force --tags</code></pre>
        <p><strong>Critical next steps:</strong> rotate the compromised secrets (API keys, passwords), invalidate old tokens, inform stakeholders, and add pre-commit hooks / scanners (TruffleHog) to prevent re-commit.</p>
      </div>`
      },
      {
        question: "How to securely store API keys used in automation scripts?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Secure storage for API keys</strong></h3>
        <p>Prefer a secrets manager over embedding keys in code:</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Azure Key Vault:</strong> Use Key Vault + Managed Identity or Service Principal to fetch secrets at runtime.</li>
          <li><strong>Environment variables:</strong> Inject at runtime by pipeline (marked secret) or container runtime (Kubernetes Secrets or CSI Key Vault).</li>
          <li><strong>Vaults:</strong> HashiCorp Vault for multi-cloud or advanced rotation policies.</li>
        </ul>
        <pre><code># Example: fetch secret using Managed Identity (Azure CLI)
secret=&dollar;(az keyvault secret show --vault-name myVault --name APIKey --query value -o tsv)
export API_KEY=&dollar;secret</code></pre>
        <p><strong>Best practices:</strong> use short-lived tokens, rotate regularly, restrict Key Vault access using RBAC & firewall, and audit access via logs.</p>
      </div>`
      },
      {
        question: "What are linters and how are they used (TFLint, Checkov, TruffleHog)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔎 <strong>Linters & Security Scanners</strong></h3>
        <p>
          Linters/statics scanners analyse IaC/code for correctness, best-practices, or secrets:
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>TFLint:</strong> Linter for Terraform — finds provider-specific misconfigurations and style issues.</li>
          <li><strong>Checkov:</strong> Policy-as-code scanner for Terraform/CloudFormation — flags insecure resources against CIS/OWASP-like rules.</li>
          <li><strong>TruffleHog:</strong> Scans Git history and commits for high-entropy strings (possible secrets).</li>
        </ul>
        <pre><code># Typical pipeline snippet
tflint --config .tflint.hcl
checkov -d .
trufflehog filesystem --directory .</code></pre>
        <p><strong>Integration:</strong> run them in PR pipelines; fail PR if critical findings; publish reports as artifacts or comments on PR for developer visibility.</p>
      </div>`
      },
      {
        question: "How do you integrate SonarQube using script?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔬 <strong>SonarQube integration via script</strong></h3>
        <p>
          Use the SonarScanner CLI to analyze code and submit results to SonarQube server. Provide authentication token from secret store.
        </p>
        <pre><code># Example Bash script (basic)
#!/usr/bin/env bash
set -euo pipefail

export SONAR_HOST_URL=https://sonarqube.example.com
export SONAR_TOKEN=&dollar;(az keyvault secret show --vault-name myVault --name SonarToken --query value -o tsv)

sonar-scanner \
  -Dsonar.projectKey=myproject \
  -Dsonar.sources=. \
  -Dsonar.host.url=&dollar;{SONAR_HOST_URL} \
  -Dsonar.login=&dollar;{SONAR_TOKEN}</code></pre>
        <p><strong>In CI:</strong> run scanner in build stage, and use SonarQube quality gates (fail pipeline if gate fails) via REST or plugin integrations.</p>
      </div>`
      },
      {
        question: "How to integrate Azure Key Vault in pipeline via script?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔑 <strong>Key Vault from script in pipelines</strong></h3>
        <p>
          Two common approaches:
        </p>
        <ol style="margin-left:1.2rem;">
          <li><strong>AzureCLI task (Script):</strong> Use service connection; fetch secrets via az cli and set pipeline variables.</li>
          <li><strong>Key Vault-linked variable group:</strong> Configure variable group in ADO that pulls secrets from Key Vault — no script required.</li>
        </ol>
        <pre><code>- task: AzureCLI@2
  inputs:
    azureSubscription: 'sc-azure-prod'
    scriptType: bash
    scriptLocation: inlineScript
    inlineScript: |
      secret=&dollar;(az keyvault secret show --vault-name myVault --name AppSecret --query value -o tsv)
      echo "##vso[task.setvariable variable=APP_SECRET;issecret=true]&dollar;secret"</code></pre>
        <p><strong>Security:</strong> Mark variable as secret (issecret=true), avoid echoing secret, and prefer Managed Identity over SPN for runtime access.</p>
      </div>`
      },
      {
        question: "How to fetch Key Vault secrets automatically when updated?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Automatic secret refresh patterns</strong></h3>
        <p>
          Options depend on use-case (apps vs pipelines):
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Applications (runtime):</strong> Use Key Vault SDK / CSI Secrets Store in Kubernetes — it can pull secrets on demand or via refresh controllers.</li>
          <li><strong>Event-driven:</strong> Subscribe to Key Vault events via <strong>Event Grid</strong> (SecretNearExpiry / SecretNewVersion) → trigger Azure Function / Logic App to notify or update config.</li>
          <li><strong>Pipelines:</strong> Re-run pipelines or have a small job that checks secret version via <code>az keyvault secret show --id</code> and refreshes stored variables.</li>
        </ul>
        <pre><code># Example: Event Grid -> Azure Function idea
Key Vault (SecretNewVersion) -> Event Grid -> Function -> call deployment pipeline or push new config to AppConfig</code></pre>
        <p><strong>Practical note:</strong> For Kubernetes, CSI + rotation sidecars or HashiCorp Vault Agent auto-updating is a robust pattern for in-cluster secret refresh.</p>
      </div>`
      },
      {
        question: "How to use scripting for CI/CD automation and notifications?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📣 <strong>Scripting for automation & notifications</strong></h3>
        <p>
          Scripts glue steps, read outputs, and call APIs for orchestration and notifications.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔁 Orchestration: scripts run terraform/helm/az cli commands and set pipeline variables using built-in commands (<code>##vso[task.setvariable]</code> for ADO).</li>
          <li>📡 Notifications: use curl to send messages to Slack/Teams/Email or call Azure DevOps REST API to update PR status.</li>
        </ul>
        <pre><code># Example: send Teams notification via webhook
payload='{\"text\":\"Deployment succeeded: &dollar;APP_NAME - &dollar;BUILD_ID\"}'
curl -H 'Content-Type: application/json' -d \"&dollar;payload\" &dollar;TEAMS_WEBHOOK_URL</code></pre>
        <p><strong>Best practice:</strong> mask secrets, implement retry/backoff for webhook calls, and centralize notification logic in small reusable scripts or functions.</p>
      </div>`
      },
      {
        question: "How to automate Terraform validation, plan, and apply steps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Automating Terraform lifecycle in scripts/pipeline</strong></h3>
        <p>
          Use a controlled multi-stage flow: <strong>validate → plan → (approve) → apply</strong>. Example script that runs safely in CI/CD:
        </p>
        <pre><code>#!/usr/bin/env bash
set -euo pipefail

# env vars for Azure auth must be set (ARM_* or use az login)
terraform init -input=false -backend-config=\"key=env/prod.tfstate\"
terraform validate

# plan and save artifact
terraform plan -out=tfplan -input=false
terraform show -json tfplan > tfplan.json
# publish tfplan.json as pipeline artifact (pipeline step)

# In Apply stage: download artifact and apply
terraform apply -input=false -auto-approve tfplan</code></pre>
        <p><strong>Production safeguards:</strong> require manual approval before apply, use saved plan file to guarantee apply matches plan, and implement retries with exponential backoff on transient failures. Always have an emergency unlock/runbook for state lock issues.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "38. Infra & Architecture Scenarios",
    questions: [
      {
        question: "If you're an architect, how would you propose infra to a customer?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏛️ <strong>How I propose infrastructure — practical architecture approach</strong></h3>
        <p>As an architect I follow a repeatable pattern: requirements → constraints → design options → cost/ops trade-offs → implementation plan.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Gather requirements:</strong> SLA, RPO/RTO, traffic patterns, compliance, peak loads, multi-region needs, budget, team skills.</li>
          <li><strong>Define constraints:</strong> e.g., legacy apps, license limitations, required regions, required on-prem connectivity (ExpressRoute/VPN).</li>
          <li><strong>Choose topology:</strong> Hub-and-spoke for multi-team orgs (hub: security, shared services; spokes: apps/tenant isolation).</li>
          <li><strong>Security & governance:</strong> Azure AD for auth, network segmentation with NSGs/UDRs, Azure FW/NVA, Private Endpoints, Key Vault for secrets, RBAC least privilege, policy enforcement via Azure Policy.</li>
          <li><strong>Resiliency & scale:</strong> Use Availability Zones/sets, autoscaling (VMSS/AKS HPA + Cluster Autoscaler), multi-region DR (ASR/replication), caching/CDN for performance.</li>
          <li><strong>Automation & IaC:</strong> Provision with Terraform + CI/CD, store state remotely (Azure Storage + blob locking), enforce code reviews and policy-as-code.</li>
          <li><strong>Observability:</strong> Logging/metrics (Azure Monitor / Log Analytics, Prometheus + Grafana), alerting, runbooks for ops runbooks + playbooks.</li>
          <li><strong>Deliverables:</strong> high-level diagram, cost estimate, security controls list, pilot implementation plan, rollback/drill plan.</li>
        </ul>
        <p><strong>Why this works:</strong> it's practical, repeatable and balances cost, security and operability — and maps directly to deployment automation and runbooks.</p>
      </div>`
      },
      {
        question: "How to create 10 storage accounts in 10 subscriptions using a single pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Create storage accounts across subscriptions — CI/CD pattern</strong></h3>
        <p>Two practical options: (A) Terraform with aliased providers or (B) pipeline loop/matrix that switches subscription context and runs the same IaC per subscription.</p>
        <h4>Option A — Terraform (preferred for declarative repeatability)</h4>
        <pre><code># providers.tf
provider "azurerm" {
  alias = "sub1"
  subscription_id = "00000000-0000-0000-0000-000000000001"
  features = {}
}
provider "azurerm" {
  alias = "sub2"
  subscription_id = "00000000-0000-0000-0000-000000000002"
  features = {}
}
# resources with for_each over providers
locals { subs = { sub1 = azurerm.sub1, sub2 = azurerm.sub2 /*...*/ } }

resource "azurerm_storage_account" "sa" {
  for_each = local.sub_map
  provider = azurerm.&dollar;{each.key}
  name = "st&dollar;{each.key}001"
  resource_group_name = each.value.rg
  location = each.value.location
  account_tier = "Standard"
  account_replication_type = "LRS"
}
</code></pre>
        <p>Use a service principal that has Contributor role in all target subscriptions or grant it scoped RBAC.</p>
        <h4>Option B — Pipeline Matrix (Azure DevOps / GitHub Actions)</h4>
        <pre><code># Azure DevOps YAML (concept)
strategy:
  matrix:
    sub1: { subscriptionId: 'id1', rg: 'rg1' }
    sub2: { subscriptionId: 'id2', rg: 'rg2' }
steps:
- script: az login --service-principal -u &dollar;(spId) -p &dollar;(spSecret) --tenant &dollar;(tenant)
- script: az account set --subscription &dollar;(subscriptionId)
- script: az storage account create --name mystorage&dollar;(subscriptionIndex) --resource-group &dollar;(rg) --location ...
</code></pre>
        <p><strong>Notes:</strong> Use managed identity or SP with least privilege, parallelize via matrix, and centralize naming and tagging rules.</p>
      </div>`
      },
      {
        question: "If VM created with a custom image is updated, what happens on terraform apply?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Terraform behaviour when custom image changes</strong></h3>
        <p>It depends on how the VM references the image:</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Managed Image / image_id changed in config:</strong> Terraform will usually plan to replace the VM (create new → destroy old) because OS disk/image is an immutable property for many providers.</li>
          <li><strong>Using a Shared Image Gallery version:</strong> If you update to a new image version in the VM resource, it may trigger an in-place update only if the provider supports it; often a replacement occurs.</li>
          <li><strong>If image content changed but image resource ID unchanged:</strong> Terraform won't detect change unless image resource attributes used by VM change — you must explicitly update VM resource to point to new version or force replacement (<code>terraform taint</code> or change a lifecycle).</li>
        </ul>
        <p><strong>Practical steps I follow:</strong> publish immutable images with versions (Shared Image Gallery), update VM image reference in Terraform to a new version, then run <code>terraform plan</code> to see replacement. Use rolling replacement strategies for scale sets or orchestrate redeploys to avoid downtime.</p>
      </div>`
      },
      {
        question: "What if a user hardcoded values in Terraform — will it show in plan?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Hardcoded values and Terraform plan visibility</strong></h3>
        <p>Yes — hardcoded values in .tf files are part of the configuration and therefore appear in <code>terraform plan</code>. A few important points:</p>
        <ul style="margin-left:1.2rem;">
          <li>🔎 <strong>Plan shows diffs:</strong> If the code has changed (hardcoded value changed), plan shows difference between planned and current state.</li>
          <li>⚠️ <strong>Secrets risk:</strong> If secrets are hardcoded (passwords, keys), they may appear in plan output and logs — avoid this.</li>
          <li>✅ <strong>Best practice:</strong> Use variables (with <code>sensitive = true</code>), pass via environment/Terrafrom Cloud variables or Key Vault, and never commit secrets to repo.</li>
          <li>🔁 <strong>Detecting hardcoded values:</strong> Use linters (tflint, checkov, tfsec) and pre-commit hooks to catch anti-patterns before pipeline runs.</li>
        </ul>
      </div>`
      },
      {
        question: "How to get VM output in JSON format using Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>Get VM details in JSON</strong></h3>
        <p>Multiple ways depending if you want Terraform outputs or Azure CLI:</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Terraform outputs (if you declare outputs):</strong>
            <pre><code>terraform output -json vm_public_ip</code></pre>
            <p>Outputs are defined in <code>outputs.tf</code> and <code>-json</code> gives machine-readable format.</p>
          </li>
          <li><strong>Azure CLI (direct from Azure):</strong>
            <pre><code>az vm show --name vmname --resource-group rgname -o json</code></pre>
          </li>
          <li><strong>State file query (advanced):</strong>
            <pre><code>terraform state show azurerm_linux_virtual_machine.vm -no-color -json</code></pre>
          </li>
        </ul>
        <p><strong>Practical tip:</strong> Export <code>terraform output -json</code> into CI artifacts for downstream jobs to consume reliably.</p>
      </div>`
      },
      {
        question: "How to securely access resources in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Secure access patterns in Azure</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔑 <strong>Managed Identities:</strong> Use system/user-assigned managed identities for VMs/AKS to access Key Vault, Storage, etc., eliminating static credentials.</li>
          <li>🧾 <strong>Azure AD + RBAC:</strong> Enforce least-privilege RBAC roles. Use Privileged Identity Management (PIM) for elevated access.</li>
          <li>🔒 <strong>Key Vault:</strong> Store secrets/certificates and use Key Vault access policies or Azure RBAC + Key Vault references.</li>
          <li>🔗 <strong>Private Endpoints:</strong> Use Private Endpoint / Service Endpoint for PaaS to avoid public endpoints.</li>
          <li>🛡️ <strong>Network controls:</strong> NSGs, Azure Firewall, Application Gateway WAF, UDRs, and IDS/IPS where needed.</li>
          <li>🧭 <strong>Jump access:</strong> Bastion for admin access, break-glass accounts controlled via PIM, and Just-In-Time access for VMs.</li>
          <li>📜 <strong>Audit & policy:</strong> Azure Policy to enforce configurations, Azure Monitor / Log Analytics for audit logs and alerts.</li>
        </ul>
        <p><strong>Operationally:</strong> Prefer Managed Identities & Key Vault for app-to-service auth, use short-lived tokens and avoid embedding secrets in code or pipelines.</p>
      </div>`
      },
      {
        question: "What is the network topology you worked with?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Network topologies I commonly design & operate</strong></h3>
        <p>I primarily use Hub-and-Spoke and Hybrid topologies depending on scale and isolation needs:</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Hub-and-Spoke</strong>
            <ul style="margin-left:1.2rem;">
              <li>Hub: central shared services (Azure Firewall, Bastion, DNS, jumpboxes, central logging).</li>
              <li>Spokes: application VNets, each spoke isolated per team/env, peered with hub for shared services.</li>
              <li>Benefits: separation of duties, centralized security, easier routing and egress control.</li>
            </ul>
          </li>
          <li><strong>Flat VNet (small infra)</strong> — single VNet with multiple subnets and NSGs — simple but less isolation.</li>
          <li><strong>Hybrid (on-prem + cloud)</strong> — ExpressRoute or Site-to-Site VPN connecting on-prem networks to hub VNet; UDRs route to network virtual appliances for inspection.</li>
          <li><strong>Micro-segmentation:</strong> Use NSGs + Network Policies (AKS) to isolate workloads within VNet/subnets.</li>
        </ul>
        <p><strong>Example stack I deployed:</strong> Hub VNet with Azure Firewall and Transit Gateway, three spokes (prod, staging, dev), AKS in its own spoke with Azure CNI, Private AKS API, Private Link to Key Vault and Storage, ASR configured to paired region for DR.</p>
      </div>`
      },
      {
        question: "How to connect on-prem apps to cloud?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Connecting On-Prem to Cloud — Practical Patterns</strong></h3>
        <p>
          Choose connection type based on SLA, bandwidth, security and cost:
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>ExpressRoute:</strong> Private, high-throughput, low-latency link (recommended for production, sensitive data, hybrid DB replication).</li>
          <li><strong>Site-to-Site VPN:</strong> Encrypted tunnel over internet (good for dev/test or lower bandwidth needs).</li>
          <li><strong>Point-to-Site VPN / Azure AD Conditional Access:</strong> For admin/dev remote access to resources in a secure manner.</li>
          <li><strong>Azure Firewall / NVA + UDRs:</strong> Centralized egress/inspection in hub VNet.</li>
          <li><strong>Private Endpoint & Private Link:</strong> Expose PaaS services privately into on-prem networks without public endpoints.</li>
        </ul>
        <p><strong>Typical design:</strong> Hub-and-spoke VNet where hub holds ExpressRoute gateway or VPN gateway + Azure Firewall. Spokes host workloads (AKS, VMSS, App Services) peered to hub. Use UDRs to force egress through firewall/NVA and Private Endpoints for PaaS.</p>
        <p><strong>Operational notes:</strong> configure BGP with ExpressRoute for route propagation, run throughput tests, monitor via Network Watcher, enforce NSGs and Firewall policies, and secure management traffic via Bastion or jumpbox accessible only over private connectivity.</p>
      </div>`
      },
      {
        question: "How do you deploy a 3-tier architecture app?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏛️ <strong>3-Tier App — Infrastructure & Deployment Steps</strong></h3>
        <p>
          Typical tiers: Presentation (web), Application (API), Data (DB). Deploy with isolation, security, and CI/CD:
        </p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Network:</strong> Create VNet with separate subnets (web/subnet, app/subnet, db/subnet). Apply NSGs and network segmentation rules.</li>
          <li><strong>Presentation Tier:</strong> App Service / VMSS / AKS Ingress behind Application Gateway (WAF) + Public IP or Front Door for global traffic.</li>
          <li><strong>Application Tier:</strong> AKS or VMSS running API services, Cluster/VM scale, Cluster Autoscaler/HPA for AKS, internal LoadBalancer / ClusterIP services.</li>
          <li><strong>Data Tier:</strong> Managed DB (Azure SQL / PostgreSQL / MySQL) or StatefulSet DB in AKS with Private Endpoint. Deploy with zone-redundant storage or read replicas for HA.</li>
          <li><strong>Security & Secrets:</strong> Key Vault for secrets/certs, Private Endpoints to DB and Storage, RBAC & Managed Identity for service-to-service auth.</li>
          <li><strong>CI/CD & Release Strategy:</strong> Use Azure DevOps / GitHub Actions for pipeline: build → image registry (ACR) → deploy (helm for AKS / slot swap for App Service). Implement blue-green or canary for low-risk releases.</li>
          <li><strong>Observability:</strong> App Insights + Prometheus/Grafana + centralized logging (Fluent Bit → Log Analytics / Loki).</li>
          <li><strong>DR & Backup:</strong> Automated DB backups, snapshots for disks, ASR for VMs if needed, and runbooks for failover.</li>
        </ol>
        <p><strong>Example command snippets:</strong></p>
        <pre><code># Create App Gateway (concept)
az network application-gateway create --name appgw --resource-group rg-prod --sku WAF_v2 --vnet-name prod-vnet --subnet appgw-subnet
# Deploy app to AKS via Helm
helm upgrade --install webapi ./charts/webapi -f values.prod.yaml</code></pre>
      </div>`
      },
      {
        question: "Which type of modular approach do you follow in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Terraform Modular Pattern — Practical Approach</strong></h3>
        <p>
          I follow a layered, reusable module strategy focused on separation of concerns, reuse, and clear boundaries:
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Root modules per environment:</strong> A thin root that composes child modules (network, compute, storage, aks, security).</li>
          <li><strong>Reusable child modules:</strong> Small focused modules (vnet, subnet, nsg, vmss, aks, keyvault) kept in a central registry or Git submodule.</li>
          <li><strong>Module inputs/outputs:</strong> Well-defined variables & outputs to compose infra without tight coupling.</li>
          <li><strong>State management:</strong> Remote backend per environment / tenant (Azure Blob with locking). One state per logical boundary (e.g., per subscription or per environment) to limit blast radius.</li>
          <li><strong>Workspaces / Environments:</strong> Use separate workspaces or separate state backends for dev/staging/prod (avoid overloading workspaces for major infra).</li>
          <li><strong>Policy & linting:</strong> Use pre-commit hooks, tflint, checkov, and Terraform Cloud/Enterprise policy enforcement for governance.</li>
          <li><strong>Optional:</strong> Terragrunt for DRY/templating and orchestration across many accounts/subscriptions if you need advanced orchestration and dependencies.</li>
        </ul>
        <p><strong>Why this works:</strong> Modules reduce duplication, make testing easier, and enable a clear upgrade path. Keep modules versioned and break changes with major versions.</p>
      </div>`
      },
      {
        question: "How do you manage large scale subscriptions in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📂 <strong>Managing Large-Scale Subscriptions — Governance & Automation</strong></h3>
        <p>
          Scale requires governance, naming, automation, and observability:
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Management Groups & Landing Zones:</strong> Use Management Groups aligned to org structure (prod, non-prod, security). Implement Azure CAF / landing zone patterns for consistent guardrails.</li>
          <li><strong>Azure Policy & Blueprints:</strong> Enforce tagging, SKUs, allowed regions, diagnostic settings, and resource locks at scale.</li>
          <li><strong>RBAC Design:</strong> Principle of least privilege through built-in & custom roles; use PIM for elevation.</li>
          <li><strong>Subscription Strategy:</strong> Subscription per business unit / environment / compliance domain to limit blast radius and billing segregation.</li>
          <li><strong>Automation:</strong> CI/CD for infra (Terraform), automation for onboarding subscriptions (ARM templates/Terraform + scripts), and automation for resource tagging and quotas.</li>
          <li><strong>Monitoring & Cost Management:</strong> Centralized Log Analytics workspaces or per-spoke with cross-workspace queries; budgets, alerts and chargeback via Cost Management and tagging.</li>
          <li><strong>Operations:</strong> Use Azure Lighthouse for multi-tenant management and delegated access when managing customer subscriptions at scale.</li>
        </ul>
        <p><strong>Operational checklist:</strong> automated onboarding pipeline, standard RBAC & policies, central logging + security posture (Secure Score), and periodic cost/security reviews.</p>
      </div>`
      },
      {
        question: "How to set up DR (Disaster Recovery) in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌀 <strong>DR Setup — Multi-layer Strategy</strong></h3>
        <p>
          DR must be tiered: data, app, and infra. Approach:
        </p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Define RPO/RTO:</strong> Business-driven SLAs (e.g., RPO ≤ 15 min, RTO ≤ 1 hr).</li>
          <li><strong>Data Replication:</strong> For storage use GRS/RA-GRS, for DBs use geo-replication or read-replicas (Azure SQL geo-replication, Cosmos DB multi-region).</li>
          <li><strong>Workload Replication:</strong> Use Azure Site Recovery (ASR) for VMs and specialized replication for other services.</li>
          <li><strong>Infrastructure as Code:</strong> Keep ARM/Terraform templates for full environment reprovisioning in target region.</li>
          <li><strong>Network & Failover:</strong> Configure DNS failover (Traffic Manager / Front Door) or runbooks to update DNS to the recovery region.</li>
          <li><strong>Testing & Runbooks:</strong> Schedule test failovers, maintain runbooks for failover/failback, and run regular DR drills.</li>
          <li><strong>Automation & Orchestration:</strong> Orchestrate failover steps (db failover, app bring-up, cutover) with Azure Automation / Logic Apps / pipelines.</li>
          <li><strong>Cost vs RTO tradeoff:</strong> Warm standby (reduced capacity) vs Hot (fully provisioned) vs Cold (on-demand provisioning) depends on budget and SLA.</li>
        </ol>
        <p><strong>Example:</strong> For critical VMs: ASR replicates to paired region, use private endpoints in DR VNet, and automated DNS switch via Traffic Manager on failover.</p>
      </div>`
      },
      {
        question: "What is your approach to cost optimization as an architect?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💸 <strong>Cost Optimization — Architecture & Process</strong></h3>
        <p>
          Cost optimisation is continuous: design-time choices + run-time controls:
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Right-size compute:</strong> Right-size VMs/VMSS/AKS node pools based on observed metrics; use autoscaling).</li>
          <li><strong>Reserved Instances & Savings Plans:</strong> Use 1/3-year Reserved VM Instances or Savings Plans for steady-state workloads.</li>
          <li><strong>Spot Instances:</strong> Use Spot/Low-priority VMs for cheaper, fault-tolerant batch/worker jobs.</li>
          <li><strong>Storage tiering:</strong> Move cold data to Cool/Archive tiers; use lifecycle policies for Blob Storage.</li>
          <li><strong>Use PaaS:</strong> Prefer managed services (App Service, Azure SQL) where TCO is lower than self-managed VMs.</li>
          <li><strong>Scheduling non-prod:</strong> Auto-shutdown dev/test resources outside business hours using automation to save costs.</li>
          <li><strong>Optimize networking:</strong> Avoid unnecessary egress, choose regional services wisely, and consolidate gateways where possible.</li>
          <li><strong>Visibility & governance:</strong> Enforce tagging for chargeback, use Azure Cost Management + Budgets + Alerts, and run monthly cost reviews driven by Cloud FinOps principles.</li>
          <li><strong>Continuous improvement:</strong> Use Azure Advisor, Cost recommendations, and custom scripts to detect unused resources (orphaned disks, unattached IPs).</li>
        </ul>
        <p><strong>Outcome:</strong> I combine architectural choices (reserved capacity, spot, serverless) with operational controls (auto-shutdown, rightsizing, tagging & budgets) to reduce cloud spend while meeting business SLAs.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "39. General / Uncategorized",
    questions: [
      {
        question: "Introduce yourself.",
        answerHtml: `
      <div class="answer-rich">
        <h3>👋 <strong>Introduction</strong></h3>
        <p>
          Hi, I’m <strong>Ritesh Sharma</strong>, a DevOps and Cloud Engineer with over <strong>10 years of experience</strong> in infrastructure automation, cloud deployments, and CI/CD implementations. 
        </p>
        <p>
          Currently, I’m working at <strong>Litmus Information System LLP</strong> where I handle end-to-end DevOps activities — from VM provisioning, patching, and monitoring to containerization and Azure DevOps pipelines.
        </p>
        <p>
          I specialize in <strong>Azure, Terraform, Docker, Kubernetes (AKS), GitHub Actions, Jenkins, and monitoring stacks</strong> like Prometheus and Grafana.
        </p>
        <p>
          My focus is always on <strong>automation, scalability, and reliability</strong> — ensuring our environments are secure, cost-optimized, and ready for continuous delivery.
        </p>
      </div>`
      },
      {
        question: "Tell me about your recent project.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Recent Project Overview</strong></h3>
        <p>
          Recently, I worked on a <strong>centralized patient monitoring system</strong> for a European healthcare provider. The goal was to collect, process, and visualize real-time health data from IoT-connected devices across hospitals.
        </p>
        <h4>🔹 Key Responsibilities:</h4>
        <ul style="margin-left:1.2rem;">
          <li>Designed and deployed the environment on <strong>Azure</strong> using <strong>Terraform</strong> with remote state storage in Azure Storage Account.</li>
          <li>Containerized microservices using <strong>Docker</strong> and orchestrated with <strong>AKS (Azure Kubernetes Service)</strong>.</li>
          <li>Implemented <strong>CI/CD pipelines</strong> in Azure DevOps for automated builds, security scans (SonarQube), and rolling deployments.</li>
          <li>Set up monitoring using <strong>Prometheus + Grafana</strong> and integrated alerting into Slack for real-time notifications.</li>
          <li>Used <strong>Azure Key Vault</strong> for managing sensitive secrets and certificates securely.</li>
        </ul>
        <p><strong>Outcome:</strong> Reduced release time by 60%, improved uptime with autoscaling, and ensured full compliance with healthcare data regulations.</p>
      </div>`
      },
      {
        question: "What all projects do you work on?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💼 <strong>Projects I Work On</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>Healthcare Monitoring System:</strong> Built centralized data aggregation for patient telemetry using AKS, Azure Monitor, and IoT Hub.</li>
          <li>🔹 <strong>Logistics Visibility Platform:</strong> Developed real-time shipment tracking similar to FourKites — deployed microservices using Kubernetes and Azure DevOps.</li>
          <li>🔹 <strong>Cloud Migration:</strong> Migrated legacy apps from on-prem to Azure, leveraging Terraform and VMSS for scalable deployment.</li>
          <li>🔹 <strong>DevOps Pipelines:</strong> Automated build and deploy using YAML pipelines, SonarQube quality gates, and ACR for image management.</li>
          <li>🔹 <strong>Monitoring & Cost Optimization:</strong> Integrated Prometheus-Grafana and Azure Cost Management for proactive performance and spend control.</li>
        </ul>
        <p><strong>Focus Areas:</strong> IaC automation, CI/CD pipelines, container orchestration (AKS), and implementing secure, resilient architectures.</p>
      </div>`
      },
      {
        question: "What are the next rounds of interviews?",
        "answerHtml:": `
      <div class="answer-rich">
        <h3>🧭 <strong>Typical Interview Rounds</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ <strong>Technical Round:</strong> Covers cloud fundamentals, Terraform, CI/CD, Docker, Kubernetes, and troubleshooting.</li>
          <li>2️⃣ <strong>Scenario / Hands-on Round:</strong> Given a real-world DevOps problem (like building a pipeline or fixing YAML deployment).</li>
          <li>3️⃣ <strong>Architectural / Design Round:</strong> Focuses on designing end-to-end infrastructure or solution architecture in Azure.</li>
          <li>4️⃣ <strong>Managerial / HR Round:</strong> Behavioral, communication, project delivery experience, and team collaboration discussions.</li>
        </ul>
        <p><strong>Tip:</strong> Be ready with detailed real-world examples of how you solved deployment, scaling, or monitoring challenges.</p>
      </div>`
      },
      {
        question: "Do we use scripting here?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💻 <strong>Use of Scripting in DevOps</strong></h3>
        <p>
          Yes — scripting is a crucial part of DevOps automation. I use it across multiple areas:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>⚙️ <strong>Bash / Shell:</strong> For VM provisioning, service restarts, log cleanup, patching automation, and container entrypoint scripts.</li>
          <li>🐍 <strong>Python:</strong> For API integrations, report generation, and automation with Azure SDK or REST APIs.</li>
          <li>🪄 <strong>PowerShell:</strong> For Azure resource operations and Windows VM automation.</li>
          <li>🧩 <strong>YAML / Groovy:</strong> For CI/CD pipelines (Azure DevOps, GitHub Actions, Jenkins).</li>
        </ul>
        <p><strong>In Practice:</strong> I maintain reusable shell scripts in pipelines and integrate them with Terraform for deployment orchestration.</p>
      </div>`
      },
      {
        question: "What is your role and responsibilities?",
        answerHtml: `
      <div class="answer-rich">
        <h3>👨‍💻 <strong>Role & Responsibilities</strong></h3>
        <p>
          As a <strong>DevOps Engineer at Litmus Information System LLP</strong>, my role focuses on designing, automating, and maintaining cloud infrastructure and CI/CD processes.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Provision and manage infrastructure using Terraform (Azure as provider).</li>
          <li>🔹 Develop and maintain CI/CD pipelines for AKS and App Service deployments.</li>
          <li>🔹 Containerize applications with Docker and manage AKS clusters (scaling, monitoring, and security).</li>
          <li>🔹 Implement monitoring and alerting via Grafana, Prometheus, and Azure Monitor.</li>
          <li>🔹 Manage patching, OS upgrades, NFS setup, and VM lifecycle management.</li>
          <li>🔹 Enforce DevSecOps practices using SonarQube and Checkov for code quality and compliance.</li>
        </ul>
        <p><strong>Goal:</strong> Ensure every deployment is automated, repeatable, and aligned with infrastructure best practices.</p>
      </div>`
      },
      {
        question: "What is VNet in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>VNet — Azure Virtual Network</strong></h3>
        <p>
          A <strong>VNet (Virtual Network)</strong> is a private, isolated section of Azure where you can securely run your resources such as VMs, AKS clusters, and PaaS services.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Acts like an on-prem data center network in the cloud.</li>
          <li>🔹 You define subnets, IP ranges, and routing rules.</li>
          <li>🔹 Supports hybrid connectivity using VPN Gateway or ExpressRoute.</li>
          <li>🔹 Enables network segmentation with NSGs and route control via UDRs.</li>
          <li>🔹 Connect VNets using peering for inter-environment communication (e.g., hub-spoke model).</li>
        </ul>
        <p><strong>In Practice:</strong> I design VNets per environment (prod, stage, dev), implement NSGs for subnet-level isolation, and integrate them with Private Endpoints for PaaS services.</p>
      </div>`
      },
      {
        question: "What is NAT and Application Gateway?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>NAT vs Application Gateway — Network Services</strong></h3>
        <p>
          Both manage traffic flow, but serve different purposes:
        </p>
        <h4>🔹 NAT (Network Address Translation):</h4>
        <ul style="margin-left:1.2rem;">
          <li>Converts private IPs to public IPs for outbound traffic (egress).</li>
          <li>In Azure, implemented using <strong>Azure NAT Gateway</strong> for consistent outbound IP and better scalability than SNAT from load balancers.</li>
          <li>Attached to subnets — all outbound traffic routes through NAT Gateway.</li>
        </ul>
        <h4>🔹 Application Gateway:</h4>
        <ul style="margin-left:1.2rem;">
          <li>Layer 7 (HTTP/HTTPS) load balancer with advanced routing (path-based, host-based).</li>
          <li>Supports SSL termination, Web Application Firewall (WAF), and redirection.</li>
          <li>Used for inbound traffic distribution to backend pools (VMs, AKS Ingress, App Services).</li>
        </ul>
        <p><strong>In Practice:</strong> I use NAT Gateway for consistent outbound traffic from private subnets, and Application Gateway (WAF_v2) for inbound web app traffic in 3-tier or AKS architectures.</p>
      </div>`
      },
      {
        question: "What is Load Balancer?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Azure Load Balancer — Overview</strong></h3>
        <p>
          A <strong>Load Balancer</strong> distributes incoming network traffic across multiple backend resources (like VMs or VMSS) to ensure high availability, fault tolerance, and optimal resource utilization.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Operates at <strong>Layer 4 (TCP/UDP)</strong> of the OSI model.</li>
          <li>🔹 Supports inbound and outbound scenarios.</li>
          <li>🔹 Provides health probes to detect unhealthy instances and reroute traffic automatically.</li>
          <li>🔹 Integrates with Azure Virtual Machines, Scale Sets, and AKS nodes for distribution.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Load Balancer for distributing API traffic across backend VMSS nodes with health probe monitoring and NAT rules for admin access.</p>
      </div>`
      },
      {
        question: "How many types of load balancers exist?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Types of Load Balancers in Azure</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🌐 <strong>Azure Load Balancer (Layer 4):</strong> Works at the transport layer; supports both <strong>Public</strong> (internet-facing) and <strong>Internal</strong> (private) load balancing.</li>
          <li>🕸️ <strong>Application Gateway (Layer 7):</strong> Web traffic (HTTP/HTTPS) load balancer with routing, SSL termination, and WAF (Web Application Firewall).</li>
          <li>☁️ <strong>Traffic Manager (DNS-based):</strong> Global load balancing via DNS routing based on endpoint health, priority, or geographic location.</li>
          <li>🧭 <strong>Front Door (Layer 7, Global):</strong> Global application acceleration with caching, routing, and security for web apps (CDN + WAF integration).</li>
        </ul>
        <p><strong>In Practice:</strong> For AKS and web apps, I prefer Application Gateway (WAF_v2) with path-based routing; for multi-region DR, I use Azure Front Door or Traffic Manager.</p>
      </div>`
      },
      {
        question: "What is Public and Private IP?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Public vs Private IP in Azure</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Public IP:</strong> Accessible from the internet; assigned to Azure resources like Load Balancers, Application Gateways, or VMs with public exposure.</li>
          <li><strong>Private IP:</strong> Internal IP address within a VNet/subnet; used for secure communication between Azure resources or hybrid setups.</li>
        </ul>
        <p><strong>Public IP Example:</strong> Used by web servers, gateways, or VPN endpoints.</p>
        <p><strong>Private IP Example:</strong> Used for backend databases, app-tier VMs, and private endpoints.</p>
        <p><strong>In Practice:</strong> I ensure production workloads use <strong>Private IP + NAT Gateway</strong> for outbound traffic, keeping resources off the public internet.</p>
      </div>`
      },
      {
        question: "What is a Service Endpoint and Private Link?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Service Endpoint vs Private Link</strong></h3>
        <p>
          Both secure Azure PaaS resources, but differ in approach:
        </p>
        <h4>🔹 <strong>Service Endpoint:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Extends your VNet’s private IP space to Azure PaaS services (like Storage, SQL, Cosmos DB).</li>
          <li>Traffic flows over Microsoft’s backbone network — not over the public internet.</li>
          <li>Still uses the PaaS service’s public IP — no private endpoint created.</li>
        </ul>
        <h4>🔹 <strong>Private Link (Private Endpoint):</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Provides a <strong>private IP</strong> inside your VNet for a PaaS resource.</li>
          <li>Fully isolates access — PaaS service becomes part of your private network.</li>
          <li>Preferred for highly secure and regulated environments.</li>
        </ul>
        <p><strong>In Practice:</strong> I use <strong>Private Link</strong> for all sensitive workloads (e.g., SQL DBs, Key Vault, Storage) and <strong>Service Endpoints</strong> for lower-risk internal services.</p>
      </div>`
      },
      {
        question: "How do you securely access your Azure resources?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Secure Access to Azure Resources</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🧩 <strong>Private Endpoints:</strong> Access PaaS services privately within VNets.</li>
          <li>🧱 <strong>Network Controls:</strong> Use NSGs, ASGs, and Azure Firewall to control inbound/outbound access.</li>
          <li>🔑 <strong>Azure AD & RBAC:</strong> Role-based access and conditional MFA for user and service access.</li>
          <li>🗝️ <strong>Managed Identities:</strong> Eliminate credentials; use MI for VM, AKS, and Function authentication to Key Vault and Storage.</li>
          <li>🛡️ <strong>Bastion:</strong> Secure RDP/SSH over TLS directly from Azure Portal without public IPs.</li>
          <li>📋 <strong>Azure Policy:</strong> Enforce allowed SKUs, region restrictions, and mandatory tagging.</li>
          <li>📊 <strong>Logging & Alerts:</strong> Azure Monitor and Defender for Cloud for continuous auditing and alerting.</li>
        </ul>
        <p><strong>In Practice:</strong> I enforce private endpoints for all data services, access control via RBAC + PIM, and automate identity rotation using Managed Identity.</p>
      </div>`
      },
      {
        question: "What is Bastion and why is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Azure Bastion — Secure VM Access</strong></h3>
        <p>
          Azure Bastion allows <strong>secure, browser-based RDP/SSH access</strong> to Azure VMs directly through the Azure Portal, without exposing any public IPs.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔒 Removes the need for public IP or inbound NSG rules for management ports (22/3389).</li>
          <li>🌐 Sessions run entirely over SSL within the Azure Portal.</li>
          <li>⚙️ Deployed inside a subnet named <code>AzureBastionSubnet</code>.</li>
          <li>💰 Integrated with NSGs and private subnets for minimal attack surface.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Bastion for admin SSH/RDP access to private VMs and jump servers — fully replacing jumpboxes in secure architectures.</p>
      </div>`
      },
      {
        question: "What are NSG rules and priorities?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚧 <strong>NSG Rules & Priorities</strong></h3>
        <p>
          <strong>Network Security Groups (NSG)</strong> control inbound/outbound traffic to Azure resources using rules defined by priority, direction, protocol, and source/destination.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📜 <strong>Priority:</strong> Range 100–4096 (lower number = higher priority).</li>
          <li>🔹 Rules evaluated in order until a match is found (allow or deny).</li>
          <li>🔹 Default rules exist for VNet, AzureLoadBalancer, and Internet traffic.</li>
          <li>🔹 You can apply NSGs at subnet or NIC level.</li>
        </ul>
        <pre><code># Example
Priority: 100
Direction: Inbound
Source: Internet
Port: 443
Action: Allow</code></pre>
        <p><strong>In Practice:</strong> I use subnet-level NSGs for broad rules and NIC-level NSGs for fine-grained restrictions, keeping least-privilege principle intact.</p>
      </div>`
      },
      {
        question: "How to restrict any service on a resource?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛑 <strong>Restricting Services in Azure</strong></h3>
        <p>To restrict specific services or access patterns, combine network and policy-based controls:</p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>NSG Rules:</strong> Block inbound/outbound ports or IP ranges.</li>
          <li>🔹 <strong>Azure Firewall / NVA:</strong> Apply Layer 7 filtering to restrict URLs/domains.</li>
          <li>🔹 <strong>Private Endpoints:</strong> Disable public network access for PaaS services (like SQL, Storage).</li>
          <li>🔹 <strong>Azure Policy:</strong> Deny creation of public IP-enabled resources or restrict SKUs/regions.</li>
          <li>🔹 <strong>RBAC:</strong> Restrict user/service principal permissions (e.g., no delete or write access).</li>
          <li>🔹 <strong>Conditional Access:</strong> Apply identity-level controls via Azure AD.</li>
        </ul>
        <p><strong>Example:</strong> To restrict SQL DB public access — enable Private Endpoint and set <code>publicNetworkAccess = Disabled</code> in Terraform/portal.</p>
      </div>`
      },
      {
        question: "How to identify who is using port 80 in the system?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Identify Port Usage on a System</strong></h3>
        <p>
          You can identify which process or service is using port 80 using OS-level commands:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>💻 <strong>Linux:</strong>
            <pre><code>sudo netstat -tulnp | grep :80
sudo lsof -i :80
sudo ss -tuln | grep :80</code></pre>
          </li>
          <li>🪟 <strong>Windows:</strong>
            <pre><code>netstat -ano | findstr :80
tasklist /fi "PID eq <PID>"</code></pre>
          </li>
          <li>🔎 <strong>PowerShell (Windows):</strong>
            <pre><code>Get-Process -Id (Get-NetTCPConnection -LocalPort 80).OwningProcess</code></pre>
          </li>
        </ul>
        <p><strong>In Practice:</strong> I use these commands to trace conflicts when multiple services (like nginx, IIS, or Apache) try to bind port 80 during deployment validation.</p>
      </div>`
      },
      {
        question: "How to close any running process?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Closing Running Processes in Linux</strong></h3>
        <p>
          To terminate a running process, you can use the <code>kill</code> or <code>killall</code> commands. First, identify the process using <code>ps</code> or <code>top</code>.
        </p>
        <pre><code># Step 1: Find process ID (PID)
ps -ef | grep nginx

# Step 2: Kill process by PID
kill &lt;PID&gt;

# Step 3: Force kill if it doesn't stop
kill -9 &lt;PID&gt;

# Alternative: kill by process name
killall nginx
        </code></pre>
        <p><strong>In Practice:</strong> I generally check active processes via <code>ps -aux | grep &lt;app&gt;</code> before killing them, to avoid terminating critical system services.</p>
      </div>`
      },
      {
        question: "What is the purpose of -9 command?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💣 <strong>Purpose of the <code>-9</code> Option</strong></h3>
        <p>
          The <code>-9</code> flag in Linux is used with the <code>kill</code> command to send the <strong>SIGKILL</strong> signal — it immediately terminates the process without giving it a chance to clean up.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>⚙️ <code>kill -9 &lt;PID&gt;</code> — Forces the OS to stop the process instantly.</li>
          <li>🚫 The process cannot ignore or trap this signal.</li>
          <li>⚠️ Should be used as a last resort — it may leave temporary files or locks behind.</li>
        </ul>
        <p><strong>In Practice:</strong> I use <code>-9</code> only when a process hangs and does not respond to a normal <code>kill</code> or <code>SIGTERM</code>.</p>
      </div>`
      },
      {
        question: "What is the top command in Linux?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>top — Real-Time Process Monitoring</strong></h3>
        <p>
          The <code>top</code> command displays a dynamic, real-time view of running processes — showing CPU, memory, and load usage.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧠 Displays system summary and per-process statistics.</li>
          <li>⚙️ Sorts by CPU usage, memory usage, or process ID.</li>
          <li>🔁 Updates every few seconds by default.</li>
          <li>⌨️ Use <code>k</code> inside <code>top</code> to kill a process, or <code>q</code> to quit.</li>
        </ul>
        <pre><code># Example
top
# Show threads
top -H
# Interactive filter by process name
top | grep nginx</code></pre>
        <p><strong>In Practice:</strong> I use <code>top</code> for quick debugging of CPU/memory spikes before moving to <code>htop</code> or Grafana dashboards for detailed analysis.</p>
      </div>`
      },
      {
        question: "What is a cron job?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⏰ <strong>Cron Job — Linux Task Scheduler</strong></h3>
        <p>
          A <strong>cron job</strong> is a scheduled task in Linux that runs automatically at predefined times or intervals using the <code>crond</code> daemon.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📅 Configured in the <code>/etc/crontab</code> or user crontab (<code>crontab -e</code>).</li>
          <li>🕒 Format: <code>minute hour day month weekday command</code>.</li>
        </ul>
        <pre><code># Run backup script every day at 2 AM
0 2 * * * /usr/local/bin/db_backup.sh

# List user cron jobs
crontab -l
        </code></pre>
        <p><strong>In Practice:</strong> I use cron jobs for routine tasks like log cleanup, health checks, and backup scripts across Linux VMs and container hosts.</p>
      </div>`
      },
      {
        question: "What is the sudo command and when do we use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧑‍💻 <strong>sudo — Superuser Do Command</strong></h3>
        <p>
          The <code>sudo</code> command lets a permitted user run a command as the superuser (root) or another user, as defined in the <code>/etc/sudoers</code> file.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Adds administrative privileges without switching to root.</li>
          <li>🔹 Logs command usage for audit and security.</li>
          <li>🔹 Safer than logging in as root directly.</li>
        </ul>
        <pre><code># Example
sudo apt update
sudo systemctl restart nginx
        </code></pre>
        <p><strong>In Practice:</strong> I use <code>sudo</code> for package installation, service restarts, and modifying system files during patching and configuration management.</p>
      </div>`
      },
      {
        question: "How to change directory permissions in Linux?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛠️ <strong>Changing Directory Permissions</strong></h3>
        <p>
          Use the <code>chmod</code> and <code>chown</code> commands to modify permissions and ownership.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>chmod:</strong> Changes read (r), write (w), and execute (x) permissions.</li>
          <li><strong>chown:</strong> Changes file/directory ownership.</li>
        </ul>
        <pre><code># Give full permissions to owner
chmod 700 /data/app

# Allow read/write to owner and group
chmod 770 /var/logs

# Change ownership to user 'azureuser' and group 'devops'
chown azureuser:devops /data/app
        </code></pre>
        <p><strong>In Practice:</strong> I often fix permissions for web directories (nginx logs, docker volumes) to ensure least privilege and prevent permission-denied errors.</p>
      </div>`
      },
      {
        question: "What is middleware and how do you install it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Middleware — The Integration Layer</strong></h3>
        <p>
          <strong>Middleware</strong> is software that connects different systems or applications — enabling communication, messaging, or data management between them.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Examples: Web servers (Apache, Nginx), application servers (Tomcat, JBoss), message brokers (RabbitMQ, Kafka).</li>
          <li>Installed using package managers or container images.</li>
        </ul>
        <pre><code># Example: Install Tomcat
sudo apt install tomcat9 -y

# Example: Install Nginx (middleware for HTTP proxy)
sudo yum install nginx -y

# Container-based installation
docker run -d -p 8080:8080 tomcat:9-jdk11
        </code></pre>
        <p><strong>In Practice:</strong> I deploy middleware as containers (Tomcat, Nginx, Redis) and manage configuration through Helm charts in AKS for easier scaling and rollback.</p>
      </div>`
      },
      {
        question: "What is NAT?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>NAT — Network Address Translation</strong></h3>
        <p>
          <strong>NAT</strong> translates private IP addresses to public IP addresses for outbound traffic, and vice versa for inbound traffic.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Enables private resources to access the internet securely.</li>
          <li>🔹 Hides internal IPs from external networks.</li>
          <li>🔹 In Azure, handled by <strong>Azure NAT Gateway</strong> or Load Balancer SNAT.</li>
        </ul>
        <p><strong>Example:</strong> NAT Gateway provides a consistent outbound IP for a subnet — useful for whitelisting and secure API calls.</p>
        <p><strong>In Practice:</strong> I assign NAT Gateway to AKS subnets for predictable outbound traffic and compliance with firewall whitelisting policies.</p>
      </div>`
      },
      {
        question: "What is DNS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>DNS — Domain Name System</strong></h3>
        <p>
          <strong>DNS</strong> translates human-readable domain names (like <code>www.example.com</code>) into machine-readable IP addresses (like <code>192.168.10.1</code>).
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧭 Acts as the phonebook of the internet.</li>
          <li>🔹 Types of records: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), TXT (metadata), NS (nameserver).</li>
          <li>🔹 Azure provides <strong>Azure DNS</strong> for managing custom domain zones.</li>
        </ul>
        <pre><code># Example: Query DNS record
nslookup www.microsoft.com

# Linux alternative
dig azure.com</code></pre>
        <p><strong>In Practice:</strong> I use Azure DNS for internal and external domains and integrate with Application Gateway or Front Door for routing and SSL management.</p>
      </div>`
      },
      {
        question: "What is Azure Front Door?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌎 <strong>Azure Front Door — Global Application Delivery</strong></h3>
        <p>
          <strong>Azure Front Door</strong> is a globally distributed Layer 7 (HTTP/HTTPS) service that provides <strong>application acceleration, load balancing, and security</strong> using Microsoft's global edge network.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🌐 Global load balancing using anycast and split TCP.</li>
          <li>⚡ Caches static content at edge locations for low latency.</li>
          <li>🔐 Offers built-in Web Application Firewall (WAF) and DDoS protection.</li>
          <li>🔄 Supports URL-based routing, session affinity, and health probes.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Front Door for multi-region app deployments to route users to the nearest region and enable automatic failover during regional outages.</p>
      </div>`
      },
      {
        question: "What is bare metal?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🖥️ <strong>Bare Metal — Physical Server Infrastructure</strong></h3>
        <p>
          <strong>Bare metal</strong> refers to a <strong>physical machine without any virtualization layer</strong>. Applications run directly on the hardware's OS without a hypervisor in between.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>⚙️ Provides full hardware control and highest performance.</li>
          <li>🧠 Common in high-performance computing (HPC) or workloads with licensing restrictions.</li>
          <li>☁️ In cloud: offered via Azure BareMetal Instances (SAP HANA, Oracle DB, etc.).</li>
        </ul>
        <p><strong>In Practice:</strong> I’ve worked with bare metal for database clusters (Oracle RAC, HANA) where performance isolation and low latency were mandatory.</p>
      </div>`
      },
      {
        question: "What is blue-green deployment rollback?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔵🟢 <strong>Blue-Green Deployment & Rollback</strong></h3>
        <p>
          <strong>Blue-Green Deployment</strong> is a release strategy where two environments (Blue - current, Green - new) run simultaneously to enable instant rollback and zero downtime deployments.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🟢 Deploy new version to Green environment while Blue serves users.</li>
          <li>🔁 Test & validate Green environment.</li>
          <li>🔄 Switch traffic (DNS or load balancer) from Blue to Green once validated.</li>
          <li>⚙️ Rollback: Simply switch back to Blue environment if issues are found.</li>
        </ul>
        <p><strong>In Practice:</strong> I implement blue-green in Azure DevOps pipelines using two AKS namespaces or App Service deployment slots for quick rollback within minutes.</p>
      </div>`
      },
      {
        question: "What is a Helm chart?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Helm Chart — Kubernetes Packaging Unit</strong></h3>
        <p>
          A <strong>Helm chart</strong> is a collection of YAML templates that define a Kubernetes application. It simplifies deployment, upgrades, and rollback through parameterized templates.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📄 <code>Chart.yaml</code>: Metadata (name, version).</li>
          <li>⚙️ <code>values.yaml</code>: Default configuration values.</li>
          <li>📁 <code>templates/</code>: Kubernetes manifest templates.</li>
          <li>🔁 <code>helm upgrade/rollback</code> for lifecycle management.</li>
        </ul>
        <p><strong>In Practice:</strong> I create Helm charts for microservices in AKS and manage values via environment-specific YAMLs integrated with CI/CD pipelines.</p>
      </div>`
      },
      {
        question: "What is Replica?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Replica — Ensuring Availability in Kubernetes</strong></h3>
        <p>
          A <strong>Replica</strong> is a copy of a Pod in Kubernetes, maintained by a <strong>ReplicaSet</strong> to ensure the desired number of instances are always running.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧩 Provides fault tolerance and load distribution.</li>
          <li>⚙️ Automatically replaces crashed or terminated Pods.</li>
          <li>📈 Works with Horizontal Pod Autoscaler (HPA) for scaling.</li>
        </ul>
        <pre><code>kubectl scale deployment webapp --replicas=3</code></pre>
        <p><strong>In Practice:</strong> I use 2–3 replicas per microservice in production AKS clusters for HA and scale them dynamically via HPA metrics.</p>
      </div>`
      },
      {
        question: "What is VPC?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>VPC — Virtual Private Cloud</strong></h3>
        <p>
          <strong>VPC (Virtual Private Cloud)</strong> is a private, isolated virtual network in cloud platforms (AWS/GCP) — equivalent to a <strong>VNet (Virtual Network)</strong> in Azure.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🏗️ Provides private IP address space for resources.</li>
          <li>🔒 Enables subnet segmentation, routing, and firewalls.</li>
          <li>🔗 Connects to on-prem using VPN or Direct Connect (ExpressRoute in Azure).</li>
        </ul>
        <p><strong>In Practice:</strong> I design VPCs/VNets per environment and connect them using VPC peering or hub-spoke topology for secure, controlled traffic flow.</p>
      </div>`
      },
      {
        question: "What is API and how is it used in pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔌 <strong>API — Application Programming Interface</strong></h3>
        <p>
          An <strong>API</strong> allows systems to communicate programmatically using HTTP/REST endpoints. In DevOps, APIs are heavily used in pipelines for automation.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📡 Used for triggering builds, deployments, and monitoring.</li>
          <li>⚙️ Integrate with third-party tools (GitHub, SonarQube, Azure DevOps, ACR) via REST APIs.</li>
          <li>🔐 Authenticated using tokens (PAT, OAuth, or service principals).</li>
        </ul>
        <pre><code># Example: Trigger ADO pipeline using REST API
curl -u :&dollar;(ADO_PAT) -X POST \\
https://dev.azure.com/org/project/_apis/pipelines/12/runs?api-version=6.0
        </code></pre>
        <p><strong>In Practice:</strong> I use APIs to trigger downstream pipelines, post deployment statuses to Teams, and automate ACR image tagging post successful build.</p>
      </div>`
      },
      {
        question: "What is difference between App Service and VM Service?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>App Service vs VM — Comparison</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>App Service</th><th>Virtual Machine</th></tr>
          <tr><td>Type</td><td>PaaS (Platform as a Service)</td><td>IaaS (Infrastructure as a Service)</td></tr>
          <tr><td>Management</td><td>Fully managed by Azure (no OS patching)</td><td>User manages OS, updates, and software</td></tr>
          <tr><td>Scaling</td><td>Auto-scale built-in</td><td>Manual or script-based scaling</td></tr>
          <tr><td>Use Case</td><td>Web apps, APIs, microservices</td><td>Custom apps needing OS-level access</td></tr>
          <tr><td>Cost</td><td>Pay for plan tiers</td><td>Pay per compute instance</td></tr>
        </table>
        <p><strong>In Practice:</strong> I prefer App Service for stateless apps and APIs, and VMs/VMSS for stateful or legacy workloads requiring OS customization.</p>
      </div>`
      },
      {
        question: "What is Azure Function?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Azure Function — Serverless Compute</strong></h3>
        <p>
          <strong>Azure Functions</strong> is a serverless compute service that runs code in response to events or triggers without provisioning or managing infrastructure.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📬 Supports triggers — HTTP, Timer, Blob, Queue, Event Hub, etc.</li>
          <li>🔁 Scales automatically based on event load.</li>
          <li>🔐 Integrates with Azure services like Key Vault, Storage, and Cosmos DB.</li>
          <li>💰 Pay-per-execution model — cost-efficient for intermittent workloads.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Azure Functions for automation tasks like VM auto-shutdown, ACR image cleanup, and CI/CD event-based notifications.</p>
      </div>`
      },
      {
        question: "What is Azure Dashboard?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Azure Dashboard — Unified Monitoring View</strong></h3>
        <p>
          <strong>Azure Dashboard</strong> provides a customizable, unified view of metrics, logs, and resources across Azure. It helps monitor infrastructure health and application performance in real time.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📈 Visualize metrics from Monitor, Application Insights, and Log Analytics.</li>
          <li>🧩 Supports custom tiles (VM status, alerts, cost charts).</li>
          <li>👥 Share dashboards among teams for centralized observability.</li>
        </ul>
        <p><strong>In Practice:</strong> I create dashboards combining VM metrics, AKS node health, and cost trends for daily operational visibility.</p>
      </div>`
      },
      {
        question: "What is Availability Set and Zone?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Availability Set vs Availability Zone</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Availability Set</th><th>Availability Zone</th></tr>
          <tr><td>Definition</td><td>Logical grouping within a data center for fault/update domain isolation.</td><td>Physically separate data centers within a region.</td></tr>
          <tr><td>Fault Tolerance</td><td>Protects against rack/power failures.</td><td>Protects against entire datacenter failure.</td></tr>
          <tr><td>Use Case</td><td>High availability within a single datacenter.</td><td>Regional redundancy and DR.</td></tr>
          <tr><td>SLA</td><td>99.95%</td><td>99.99%</td></tr>
        </table>
        <p><strong>In Practice:</strong> I deploy critical VMs in Availability Zones for regional redundancy, while Availability Sets are used for legacy workloads within a single zone.</p>
      </div>`
      },
      {
        question: "What are replication types in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Replication Types in Azure Storage</strong></h3>
        <p>
          Azure provides multiple replication options to ensure durability and high availability of data, both within and across regions.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>LRS (Locally Redundant Storage):</strong> Keeps 3 copies within a single data center. Cheapest, but limited fault tolerance.</li>
          <li>🔹 <strong>GRS (Geo-Redundant Storage):</strong> Replicates data to a paired region (6 total copies). Provides regional disaster recovery.</li>
          <li>🔹 <strong>RA-GRS (Read-Access Geo-Redundant Storage):</strong> Same as GRS, but allows read access from secondary region.</li>
          <li>🔹 <strong>ZRS (Zone-Redundant Storage):</strong> Spreads data across availability zones within a region for higher resiliency.</li>
        </ul>
        <p><strong>In Practice:</strong> I use ZRS for high-availability workloads (AKS logs, Terraform state) and GRS for compliance backups or DR scenarios.</p>
      </div>`
      },
      {
        question: "What is Key Vault?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Azure Key Vault — Secrets, Keys & Certificates Management</strong></h3>
        <p>
          <strong>Azure Key Vault</strong> securely stores and manages sensitive data like API keys, passwords, certificates, and connection strings.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔑 Supports secrets, encryption keys (RSA/HSM), and SSL certificates.</li>
          <li>🧭 Integrated with Azure AD for access control (RBAC, Managed Identity).</li>
          <li>📡 Accessible via REST APIs, CLI, Terraform, or pipelines.</li>
          <li>🔐 Automatically rotates secrets and integrates with Azure services (AKS, App Service).</li>
        </ul>
        <pre><code># Example: Retrieve secret
az keyvault secret show --vault-name myVault --name dbPassword
        </code></pre>
        <p><strong>In Practice:</strong> I store all pipeline secrets in Key Vault and reference them securely in Azure DevOps and Terraform without hardcoding credentials.</p>
      </div>`
      },
      {
        question: "What is Service Principal and Managed Identity?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Service Principal vs Managed Identity</strong></h3>
        <p>
          Both are used to authenticate applications or services in Azure without using user credentials.
        </p>
        <h4>🔹 <strong>Service Principal:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Represents an app/service in Azure AD.</li>
          <li>Requires manual creation and management of credentials (client ID, secret).</li>
          <li>Used by Terraform, pipelines, or APIs for automation.</li>
        </ul>
        <h4>🔹 <strong>Managed Identity (MI):</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Automatically managed identity for Azure resources.</li>
          <li>No secret management required — Azure handles authentication.</li>
          <li>Ideal for secure resource-to-resource access (e.g., VM → Key Vault).</li>
        </ul>
        <p><strong>In Practice:</strong> I use Service Principals for Terraform automation and Managed Identity for AKS, VMs, or App Services that need secure token-based access.</p>
      </div>`
      },
      {
        question: "What is Least Privilege Access?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Least Privilege Access Principle</strong></h3>
        <p>
          <strong>Least Privilege</strong> means giving users or services only the permissions necessary to perform their tasks — nothing more.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Prevents accidental or malicious misuse of resources.</li>
          <li>🔹 Enforced through RBAC roles and custom role definitions.</li>
          <li>🔹 Often combined with <strong>Privileged Identity Management (PIM)</strong> for just-in-time access.</li>
        </ul>
        <p><strong>In Practice:</strong> I assign least-privilege custom roles to CI/CD pipelines (e.g., read-only Key Vault, contributor for resource group) and monitor access through Azure AD logs.</p>
      </div>`
      },
      {
        question: "What is ACR (Azure Container Registry)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>Azure Container Registry — Private Docker Image Storage</strong></h3>
        <p>
          <strong>ACR</strong> is a private, fully-managed Docker registry in Azure used to store and manage container images and Helm charts.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Supports image versioning and Geo-replication.</li>
          <li>🔹 Integrates with AKS, App Service, and pipelines (ADO/GitHub).</li>
          <li>🔹 Authentication via Service Principal or Managed Identity.</li>
        </ul>
        <pre><code># Example: Push Docker image
az acr login --name myRegistry
docker tag myapp:v1 myregistry.azurecr.io/myapp:v1
docker push myregistry.azurecr.io/myapp:v1</code></pre>
        <p><strong>In Practice:</strong> I use ACR for storing application images built in pipelines, integrate it with AKS for auto-deployment via Helm or manifests.</p>
      </div>`
      },
      {
        question: "What is Stateful vs Stateless?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Stateful vs Stateless Applications</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Stateful:</strong> Applications retain client data or session info (e.g., databases, Kafka, Redis). Require persistent storage.</li>
          <li><strong>Stateless:</strong> No session dependency — every request is independent (e.g., APIs, web servers). Easier to scale horizontally.</li>
        </ul>
        <p><strong>In Practice:</strong> I deploy stateless apps in AKS for horizontal scaling, and use StatefulSets for persistent apps like PostgreSQL or RabbitMQ.</p>
      </div>`
      },
      {
        question: "What is difference between Terraform Plan and Apply?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Terraform Plan vs Apply</strong></h3>
        <p>
          Terraform follows a two-step process for infrastructure deployment:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📋 <strong>Plan:</strong> Shows what changes will be made — a dry run that outputs the execution plan (create, modify, destroy).</li>
          <li>⚙️ <strong>Apply:</strong> Executes the planned actions to actually modify the infrastructure.</li>
        </ul>
        <pre><code>terraform plan -out=tfplan
terraform apply tfplan</code></pre>
        <p><strong>In Practice:</strong> I use <code>terraform plan</code> in CI pipelines for approval gates and <code>apply</code> only post manual validation.</p>
      </div>`
      },
      {
        question: "What is the difference between public cloud and private cloud?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>Public Cloud vs Private Cloud</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Public Cloud</th><th>Private Cloud</th></tr>
          <tr><td>Ownership</td><td>Managed by third-party providers (Azure, AWS, GCP)</td><td>Owned and managed by an organization</td></tr>
          <tr><td>Access</td><td>Accessible over the Internet</td><td>Accessible only within organization</td></tr>
          <tr><td>Scalability</td><td>Virtually unlimited</td><td>Limited by internal hardware</td></tr>
          <tr><td>Cost</td><td>Pay-as-you-go</td><td>High upfront infrastructure cost</td></tr>
          <tr><td>Use Case</td><td>Startups, global workloads</td><td>Regulated industries, sensitive data</td></tr>
        </table>
        <p><strong>In Practice:</strong> I’ve designed hybrid setups — combining public Azure resources with on-prem private infrastructure via VPN/ExpressRoute.</p>
      </div>`
      },
      {
        question: "What are key metrics to monitor production health?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Key Production Health Metrics</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>💻 <strong>Compute:</strong> CPU, memory, disk IOPS, and utilization.</li>
          <li>🌐 <strong>Network:</strong> Latency, throughput, dropped packets.</li>
          <li>🧱 <strong>Application:</strong> Response time, request rate, error rate (App Insights).</li>
          <li>📦 <strong>Container/Pod:</strong> Restart count, pending pods, node pressure.</li>
          <li>💰 <strong>Cost Metrics:</strong> Budget consumption, spend per resource group.</li>
          <li>📈 <strong>SLI/SLO metrics:</strong> Uptime %, response time SLA, and availability zone distribution.</li>
        </ul>
        <p><strong>In Practice:</strong> I integrate Prometheus, Grafana, and Azure Monitor dashboards with alerts via Action Groups for proactive health visibility.</p>
      </div>`
      },
      {
        question: "What is load testing vs stress testing?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Load Testing vs Stress Testing</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>Load Testing:</strong> Evaluates system performance under expected real-world load.</li>
          <li>🔹 <strong>Stress Testing:</strong> Pushes system beyond limits to identify breaking points and recovery capability.</li>
        </ul>
        <p><strong>Example:</strong> Load testing ensures an API handles 1000 requests/sec smoothly; stress testing finds when it fails at 5000 requests/sec.</p>
        <p><strong>In Practice:</strong> I use Azure Load Testing or JMeter in CI/CD to simulate traffic before production release and ensure SLA compliance.</p>
      </div>`
      },
      {
        question: "What is rollback and why is it important?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Rollback — Deployment Safety Mechanism</strong></h3>
        <p>
          <strong>Rollback</strong> is reverting an application or infrastructure to a previous stable version in case of failure or instability.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧩 Ensures quick recovery from failed releases.</li>
          <li>🕒 Reduces downtime during production deployment issues.</li>
          <li>⚙️ Implemented via blue-green, canary, or pipeline versioning.</li>
        </ul>
        <p><strong>In Practice:</strong> I configure automated rollback in pipelines using Helm <code>rollback</code> or ADO deployment slots to restore previous app versions instantly.</p>
      </div>`
      },
      {
        question: "What is Infrastructure Drift and how do you manage it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Infrastructure Drift — Configuration Deviation</strong></h3>
        <p>
          <strong>Infrastructure Drift</strong> occurs when the actual cloud infrastructure diverges from the declared Infrastructure-as-Code (IaC) configuration.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📉 Happens due to manual changes in portal or CLI outside Terraform/ARM pipelines.</li>
          <li>🔍 Causes inconsistency, failed deployments, or misconfigurations.</li>
        </ul>
        <h4>🛠️ <strong>How to Manage Drift:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>✅ Use <code>terraform plan</code> regularly to detect drifts.</li>
          <li>🔒 Restrict manual changes using Azure Policy or RBAC.</li>
          <li>📜 Enforce deployment via pipelines only (GitOps model).</li>
          <li>💡 Automate drift detection via Terraform Cloud or Azure DevOps scheduled runs.</li>
        </ul>
        <p><strong>In Practice:</strong> I run nightly Terraform plan checks to detect drift and alert via Slack when infra deviates from code.</p>
      </div>`
      }
    ]
  }
  ,
];
