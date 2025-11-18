# **Terraform**

## **🔷 1\. Terraform – Basics**

• What is Terraform?  
• What is a provider in Terraform?  
• What is a resource block?  
• What is a variable in Terraform?  
• What is the use of output block and how to pass it in pipeline?  
• What is data block in Terraform?  
• How to write code with module and for\_each?  
• What is terraform show?  
• What is terraform fmt?  
• What is terraform function?  
• What is terraform workspace and why we use it?  
• What is the use of terraform slug?  
• What is terraform init?  
• What is the difference between terraform plan and terraform apply?  
• What is the purpose of terraform import?  
• What is the use of dynamic block?  
• How do you secure your Terraform setup?  
• What is drift condition in Terraform?  
• How do you handle state management with multiple people?  
• What is Terraform?  
• What is the use of Terraform?  
• What is Terraform Core?  
• What is Terraform Configuration Language?  
• What are Terraform Providers?  
• What are Terraform Modules?  
• What is Terraform State?  
• What is the difference between Terraform Core and Provider?  
• What is a .tf file?  
• What is a .tfstate file?  
• What are input variables in Terraform?  
• What are output variables in Terraform?  
• What is the use of backend in Terraform?  
• What is a resource in Terraform?  
• What are meta-arguments in Terraform?  
• What is the lifecycle block in Terraform?  
• What is the purpose of “depends\_on” in Terraform?  
• What is the function of count and for\_each in Terraform?  
• What is the use of locals in Terraform?  
• What are provisioners in Terraform?  
• What is the use of data block in Terraform?  
• What is Terraform?  
• What is the use of Terraform?  
• What is Terraform Core?  
• What is Terraform Configuration Language?  
• What are Terraform Providers?  
• What are Terraform Modules?  
• What is Terraform State?  
• What is the difference between Terraform Core and Provider?  
• What is a .tf file?  
• What is a .tfstate file?  
• What are input variables in Terraform?  
• What are output variables in Terraform?  
• What is the use of backend in Terraform?  
• What is a resource in Terraform?  
• What are meta-arguments in Terraform?  
• What is the lifecycle block in Terraform?  
• What is the purpose of “depends\_on” in Terraform?  
• What is the function of count and for\_each in Terraform?  
• What is the use of locals in Terraform?  
• What are provisioners in Terraform?  
• What is the use of data block in Terraform?

---

## **🔷 2\. Terraform – Installation & Setup**

• How to install Terraform?  
• What is the latest version of Terraform?  
• Which command is used to check Terraform version?  
• How do you upgrade Terraform to the latest version?  
• Which file is created after running “terraform init”?  
• What is the terraform block?  
• What is the syntax of provider block?

---

## **🔷 3\. Terraform – Workflow (Init, Plan, Apply, Destroy, etc.)**

• What is the use of terraform init?  
• What is the use of terraform init \-upgrade?  
• What is the use of terraform plan?  
• What is the use of terraform plan \-out=\<fileName\>?  
• What is the use of terraform apply?  
• What is the use of terraform apply \<filename\>?  
• What is the use of terraform destroy?  
• What is the use of terraform validate?  
• What is the use of terraform fmt?  
• What is the use of terraform show?  
• What is the use of terraform output?  
• What is the use of terraform taint?  
• What is the use of terraform untaint?  
• What is the use of terraform import?  
• What is the use of terraform graph?  
• What is the use of terraform state?  
• What is the use of terraform workspace?  
---

## **🔷 4\. Terraform – Variables, tfvars & Type Handling**

• What is variable.tf and terraform.tfvars? Difference?  
• What is difference between variable.tf and variables.tf?  
• How to save sensitive data in state file?  
• If you mark a variable as sensitive, how will you see it in terraform state?  
• How do you provide default value to a variable?  
• What are type constraints in Terraform?  
• Difference between list and map?  
• What are the data types in Terraform?  
• If you don’t want to hardcode IP in main.tf, how will you handle that?  
• How do you manage secrets or sensitive variables in Terraform?  
• What are variable types in Terraform?  
• What is the precedence of variable values?  
• How to declare variables in Terraform?  
• What is the default value in variable declaration?  
• What is the difference between var.name and local.name?  
• What does `sensitive = true` mean?  
• How to define environment variables for Terraform?  
• What are the different ways to assign values to variables?  
• What is the difference between input variables and output values?  
• How to pass variables from CLI?

## **🔷 5\. Terraform – State File & Backend**

• What is state file and where do we store it?  
• When will the state file be created?  
• After which command is the state file created?  
• How do you encrypt the state file?  
• What is statefile management?  
• What is state locking in Terraform?  
• What is a lock file and why is it created?  
• What are the different backends you’ve used?  
• What happens if local tfstate is deleted accidentally?  
• How do you recover a lost local state file?  
• How do you manage multiple state files in team environments?  
• What if 150 people use the same backend — how do you identify changes?

## **🔷 6\. Terraform – Provisioners & Lifecycle**

• What is a provisioner in Terraform?  
• What is file provisioner?  
• What is a null resource?  
• What is a lifecycle block in Terraform?  
• What arguments can be used in lifecycle block?  
• Which provisioner is used to join a VM to a domain using PowerShell?  
• What happens if you manually install MS Office and re-run terraform apply?  
• What is a provisioner block — how is it used with VM deployment?  
• What is a provisioner in Terraform?  
• What is the use of remote-exec?  
• What is the use of local-exec?  
• When to use provisioners?  
• What are the drawbacks of using provisioners?  
• What is a null resource and how is it used?  
• How do you automate post-deployment configuration with provisioners?

## **🔷 7\. Terraform – Modules (Child, Root, Registry, Reuse) & Patterns**

• What is a module in Terraform?  
• What is the difference between child module and root module?  
• What is a pattern module?  
• Difference between pattern module and root-child module?  
• What is resource and pattern module?  
• Can you explain your module structure?  
• How did you upgrade your Terraform template recently?  
• What kind of modular approach do you follow to provision resources?  
• What is a module in Terraform?  
• What is a root module?  
• What are child modules?  
• How to call a module?  
• What is the use of module block?  
• What arguments are required in a module block?  
• How to pass variables from root to child module?  
• Can a module call another module?  
• What is module source in Terraform?  
• How to use modules from Terraform Registry?  
• How to organize modules in a Terraform project?  
• What is the difference between pattern module and root-child module?  
• How do you upgrade Terraform templates?

## **🔷 8\. Terraform – Dependencies & Logic**

• What are implicit and explicit dependencies?  
• Difference between depends\_on and implicit dependency?  
• What is the move block in Terraform? Does it affect infrastructure?  
• What is count and for\_each? Which one will you use for creating 10 storage accounts?  
• Why is delete operation tricky when using count?  
• What is lifecycle block and how does it handle dependencies?  
• How do you manage inter-resource dependencies in a module?

## **🔷 9\. Terraform Basics & Core Concepts**

* What is Terraform and why do we use it in infrastructure provisioning?  
* What are Terraform’s main features?  
* What is Infrastructure as Code (IaC)?  
* What are the benefits of Terraform in DevOps?  
* How does Terraform differ from Ansible, Puppet, or Chef?  
* What is Terraform Core and what are Providers?  
* What are .tf and .tfstate files?  
* What are the different stages in Terraform deployment?  
* What is the lifecycle of a Terraform deployment?  
* What is the Terraform workflow — init, plan, apply, destroy?  
* What is terraform plan and apply command?  
* What is terraform fmt and why is it important?  
* What is terraform validate used for?  
* What is the advantage of running terraform plan before apply?

---

## **🔷 10\. Terraform State Management & Backend**

* What is Terraform state file and why is it required?  
* When does the state file get created (init/plan/apply)?  
* What is a backend in Terraform?  
* What is the difference between local and remote backend?  
* What are Terraform backends, and why are they important?  
* How do you configure a remote backend in Azure?  
* How do you store Terraform state securely?  
* How do you manage Terraform state file locking?  
* What is state locking and why is it important?  
* How do you handle Terraform state file corruption?  
* What happens if Terraform apply fails midway?  
* How do you resolve state file lock issues?  
* What happens if state file is deleted? How do you recover it?  
* You have 1000 resource groups but lost state file — how will you rebuild infra?  
* What is terraform refresh command and what does it do?  
* How will you determine a zero drift condition?  
* What is drift detection in Terraform?

---

## **🔷 11\. Terraform Providers & Authentication**

* What are Terraform providers?  
* How does Terraform provider authentication work?  
* How do you use AzureRM provider?  
* Can Terraform handle multiple providers?  
* What are provider version constraints?  
* What is the difference between provider and provisioner?  
* How do you manage provider versioning?  
* How do you authenticate Terraform with Azure?

---

**🔷 12\. Terraform Variables, Locals & Outputs**

* What are input variables and output variables?  
* What is the difference between locals and variables?  
* What are Terraform variable types (string, map, object, list)?  
* What is the use of a variable group?  
* How do you handle sensitive variables in Terraform?  
* How do you secure sensitive outputs in Terraform?  
* What is the use of terraform output block?  
* Write the steps of output block in Terraform.  
* How do you provide default values to variables?  
* How do you pass variables from CLI or tfvars file?  
* What are local values and how are they used?  
* Difference between data source and local block?

---

## **🔷 13\. Terraform Modules & Reusability**

* What are modules in Terraform and why are they important?  
* What is the difference between Terraform modules and resources?  
* How do you create a reusable module?  
* What is a child module and how do you call it?  
* What are shared modules and how do you manage them?  
* What are parent and child modules in a 3-tier app?  
* What are Terraform best practices for module versioning?  
* How do you manage Terraform modules in version control?

---

## **🔷 14\. Terraform Lifecycle & Dependencies**

* What is a lifecycle block and why is it used?  
* What are lifecycle arguments like `create_before_destroy`, `prevent_destroy`, `ignore_changes`?  
* Where did you use lifecycle in Terraform?  
* What is the use of depends\_on?  
* How do you handle resource dependencies in Terraform?  
* If there are interdependent resources (VM, NSG, subnet), how will you serialize deployment?  
* What happens when we rename a Terraform resource?  
* What happens if a resource name changes in map?  
* What if an item in input map is deleted — how will Terraform behave?

---

## **🔷 15\. Terraform Count, for\_each & Dynamic Blocks**

* What is the difference between count and for\_each?  
* When will you use count and when for\_each?  
* for\_each ko directly list ke saath kyu nahi use kar sakte?  
* for\_each me map use karte waqt each.key aur each.value kya represent karte hain?  
* toset() ka kya role hota hai jab list ko for\_each me convert karte ho?  
* Kya for\_each ke andar duplicates allowed hain?  
* Agar tum ek for\_each ke resource ka index chahte ho to kya karoge?  
* Kya tum for\_each ke sath dynamic blocks use kar sakte ho? Agar haan, kaise?  
* for\_each resource ko dusre for\_each resource se refer kaise karte ho?  
* for\_each me condition lagana chahte ho (e.g. kuch resources hi create ho) — kaise karoge?  
* Ek for\_each loop me tum locals ka use kaise kar sakte ho?  
* Multi-level nesting (RG → VNet → Subnet) for\_each kaise handle karoge using map of objects?  
* What are dynamic blocks and how are they used?  
* What is Terraform’s behavior when for\_each resource renamed?

---

## **🔷 16\. Terraform Provisioners & Null Resources**

* What is a provisioner block?  
* What is the difference between local-exec and remote-exec?  
* What are use cases of provisioners?  
* What is a null\_resource in Terraform and when do you use it?  
* What happens if you install software manually and rerun Terraform apply?

---

## **🔷 17\. Terraform Data Sources**

* What is a data source and how is it used?  
* What is the difference between data block and locals block?  
* Do data sources become part of state file?  
* What is the purpose of terraform data lookup?  
* How do you use Key Vault data source in Terraform?

---

## **🔷 18\. Terraform Workspaces & Multi-Environment Management**

* What is Terraform workspace and why do we use it?  
* How do you manage multiple environments (dev, uat, prod)?  
* What is the difference between workspaces and folders?  
* How do you handle multi-subscription deployments using Terraform?  
* How do you manage environment isolation in pipeline?  
* What is the purpose of terraform workspace command?

---

## **🔷 19\. Terraform Integration with Azure DevOps**

* How do you integrate Terraform with Azure DevOps pipeline?  
* How do you use Terraform code in CI/CD pipeline?  
* What is the difference between classic and YAML pipeline for Terraform?  
* How do you fetch secrets from Azure Key Vault into pipeline?  
* How do you secure Terraform pipeline execution in Azure DevOps?  
* How do you handle Terraform state in Azure Blob backend via pipeline?  
* How do you handle multi-stage pipelines (init, plan, apply)?  
* Which branching strategy do you follow for Terraform code?  
* How to create ADO global variables in Terraform?  
* How to reinitialize Terraform when backend config changes?  
* What happens when plan shows 1 to add, 1 to delete — do you apply or not?  
* How do you handle errors during pipeline execution?  
* What happens if two people run the same pipeline simultaneously?  
* If pipeline error occurs, what’s your troubleshooting process?

## ---

**🔷 20\. Terraform Security, RBAC & Compliance**

* What are Terraform best practices for security?  
* How do you secure Terraform state file?  
* How have you implemented RBAC in Terraform?  
* How do you manage secrets securely in Terraform (Vault, Key Vault, Env vars)?  
* How to restrict provider access using Service Principals?  
* How to ensure compliance and drift monitoring using tools like Checkov/TFSec?

## ---

**🔷 21\. Terraform Advanced / Enterprise / Cloud**

* What is Terraform Cloud?  
* What are the benefits of Terraform Cloud over CLI?  
* What is Sentinel Policy in Terraform Cloud?  
* How does Terraform handle concurrent operations in team environments?  
* How do you recover state after accidental deletion in a team setup?  
* How do you handle DR scenario using Terraform for primary & secondary environments?  
* How do you implement cross-account provisioning?  
* What happens when an S3 bucket is manually modified (policy drift)?  
* How to handle infrastructure drift detection automatically?

## ---

**🔷 22\. Terraform Troubleshooting & Real-World Scenarios**

* What happens if apply fails midway?  
* How do you rollback infrastructure changes?  
* What is Terraform taint and when to use it?  
* What’s the difference between `terraform destroy` and `terraform apply -destroy`?  
* How do you handle resource drift due to manual changes?  
* How do you debug Terraform apply errors?  
* How do you troubleshoot VM configuration mismatch (A4 → A5)?  
* How do you import existing resources (Azure, AWS VPC, etc.)?  
* How to handle manual updates done outside Terraform?  
* How to re-sync Terraform with Prod state after changes?

## **🔷**  **23\. Terraform – Providers**

• What is a provider in Terraform?  
• How to configure a provider in Terraform?  
• What is the use of version argument in provider block?  
• How to restrict provider version?  
• What is required\_providers block?  
• What is alias in provider block?  
• How to use multiple providers in one configuration?  
• What is provider inheritance?  
• How to authenticate Terraform with cloud providers?  
• What is AzureRM provider and how is it configured?

---

## **🔷**  **24\. Terraform – State Management**

• What is terraform.tfstate?  
• What is terraform.tfstate.backup?  
• What is the use of state file?  
• What is the difference between local and remote state?  
• What are the benefits of remote state?  
• What is a backend in Terraform?  
• What is the syntax of backend block?  
• What are supported backends in Terraform?  
• How to configure remote backend?  
• What is state locking?  
• What is state file encryption?  
• How do you recover if local tfstate is deleted?  
• How do you handle state file in a team setup?

---

## **🔷**  **25\. Terraform – Backend (Azure, S3, etc.)**

• What is the Azure backend in Terraform?  
• What arguments are required for Azure backend?  
• How to configure S3 backend in Terraform?  
• What is the difference between S3 and Azure backend?  
• What is the use of key argument in backend block?  
• What is the role of access\_key and secret\_key in backend configuration?

---

## **🔷**  **26\. Terraform – Lifecycle, Dependencies & Meta-Arguments**

• What is lifecycle block in Terraform?  
• What is create\_before\_destroy?  
• What is prevent\_destroy?  
• What is ignore\_changes?  
• What is the purpose of depends\_on?  
• What is count and for\_each?  
• What is a dynamic block?  
• What is a conditional expression?  
• What is implicit vs explicit dependency?  
• What is the move block and what does it do?

---

## **🔷**  **27\. Terraform – Functions & Expressions**

• What are functions in Terraform?  
• What are built-in functions in Terraform?  
• What is the use of lookup function?  
• What is the use of join function?  
• What is the use of split function?  
• What is the use of length function?  
• What is the use of element function?  
• What is the use of contains function?  
• What is the use of file function?  
• What is the use of templatefile function?  
• What is a conditional expression in Terraform?

---

## **🔷**  **28\. Terraform – Debugging, Logs & Error Handling**

• How to enable debug logs in Terraform?  
• What is TF\_LOG?  
• What is TF\_LOG\_PATH?  
• How to troubleshoot Terraform issues?  
• How do you handle validation or dependency errors?  
• How do you perform dry-run debugging in CI/CD?

---

## **🔷**  **29\. Terraform – Cloud & Enterprise**

• What is Terraform Cloud?  
• What is Terraform Enterprise?  
• What are workspaces in Terraform Cloud?  
• What is Sentinel policy in Terraform?  
• What is the difference between Terraform Cloud and CLI?  
• What is the use of VCS integration in Terraform Cloud?

---

## **🔷**  **30\. Terraform – Registry**

• What is Terraform Registry?  
• How to publish a module to Registry?  
• How to use modules from Terraform Registry?  
• How do you version modules and maintain registry hygiene?

---

## **🔷**  **31\. Terraform – Security & Best Practices**

• What are Terraform best practices?  
• How to manage secrets securely in Terraform?  
• What is Vault provider and when do you use it?  
• How to use environment variables securely?  
• How to manage Terraform state securely?  
• What is least privilege principle in Terraform?  
• How to enforce policies for secure IaC?

---

## **🔷**  **32\. Terraform – With Azure**

• How to use Terraform with Azure?  
• What is AzureRM provider?  
• How to create Resource Group using Terraform?  
• How to authenticate to Azure in Terraform?  
• How to use service principal with Terraform?  
• How to deploy VM using Terraform in Azure?  
• How to connect on-prem to Azure via Terraform?  
• How to use Key Vault integration with Terraform?

---

## **🔷**  **33\. Terraform – Miscellaneous / Advanced Topics**

• What is the difference between Terraform and ARM template?  
• What is drift in Terraform?  
• What is Terraform refresh?  
• What is import in Terraform?  
• What is the difference between apply and plan?  
• What is the use of target in terraform apply?  
• How to write reusable Terraform code?  
• What is Terraform linting?  
• What are common Terraform errors you faced?  
• How do you handle module version upgrades safely?

## **🔷 15\. Scripting & Tools (Automation, Bash, PowerShell, Linters)**

• Have you worked on Bash or PowerShell scripting?  
• How will you ensure password is removed from repo after it was exposed?  
• What is TFLint?  
• What is a linter in Terraform?  
• What is Checkov and how do you integrate it?  
• What is TruffleHog and where do you use it?  
• How will you integrate SonarQube using scripting?  
• How do you automate Terraform and security checks in pipeline?  
• How will you integrate Azure Key Vault in pipeline via script?  
• How do you use scripting to detect secret leaks?  
• What is AWK command in Linux?  
• What is $\_ and $? in shell scripting?  
• Write a bash script for sending alert mail if VM disk is 80% full.  
• Write “Hello bash” script using loop function.  
• What are loops in bash scripting?  
• What is PowerShell and how is it used in automation?  
• How do you automate patching using scripting?  
• How do you run Terraform scripts in CI/CD pipeline automatically?

## **🔷 16\. Infra & Architecture Scenarios**

• If you're an architect, how would you propose infra to a customer?  
• How to create 10 storage accounts in 10 subscriptions using a single pipeline?  
• If VM created with a custom image is updated, what happens on terraform apply?  
• What if a user hardcoded values in Terraform — will it show in plan?  
• How to get VM output in JSON format using Terraform?  
• How to securely access resources in Azure?  
• What is the network topology you worked with?  
• How to connect on-prem apps to cloud?  
• How do you deploy a 3-tier architecture app?  
• Which type of modular approach do you follow in Terraform?  
• How do you manage large scale subscriptions in Azure?  
• How to set up DR (Disaster Recovery) in Azure?  
• What is your approach to cost optimization as an architect?

## **🔷 17\. General / Uncategorized**

• Introduce yourself.  
• Tell me about your recent project.  
• What all projects do you work on?  
• What are the next rounds of interviews?  
• Do we use scripting here?  
• What is your role and responsibilities?  
• What is VNet in Azure?  
• What is NAT and Application Gateway?  
• What is Load Balancer?  
• How many types of load balancers exist?  
• What is Public and Private IP?  
• What is a Service Endpoint and Private Link?  
• How do you securely access your Azure resources?  
• What is Bastion and why is it used?  
• What are NSG rules and priorities?  
• How to restrict any service on a resource?  
• How to identify who is using port 80 in the system?  
• How to close any running process?  
• What is the purpose of \-9 command?  
• What is the top command in Linux?  
• What is a cron job?  
• What is the sudo command and when do we use it?  
• How to change directory permissions in Linux?  
• What is middleware and how do you install it?  
• What is NAT?  
• What is DNS?  
• What is Azure Front Door?  
• What is bare metal?  
• What is blue-green deployment rollback?  
• What is a Helm chart?  
• What is Replica?  
• What is VPC?  
• What is API and how is it used in pipeline?  
• What is difference between App Service and VM Service?  
• What is Azure Function?  
• What is Azure Dashboard?  
• What is Availability Set and Zone?  
• What are replication types in Azure?  
• What is Key Vault?  
• What is Service Principal and Managed Identity?  
• What is Least Privilege Access?  
• What is ACR (Azure Container Registry)?  
• What is Stateful vs Stateless?  
• What is difference between Terraform Plan and Apply?  
• What is the difference between public cloud and private cloud?  
• What are key metrics to monitor production health?  
• What is load testing vs stress testing?  
• What is rollback and why is it important?  
• What is Infrastructure Drift and how do you manage it?

## **🔷**  **18\. Azure Infrastructure & Networking**

• How can we connect to VPN securely?  
• What is VNet Peering?  
• Explain Basic Load Balancer (Layer 4).  
• Explain Application Gateway (Layer 7).  
• What is an Application Gateway and what are its components?  
• How do you apply NSG (Network Security Group) in your network?  
• Did you implement firewall with NSG?  
• What resources have you used to enhance network security? (Subnets, NSG, Firewall)  
• Difference between Service Endpoints and Private Endpoints?  
• What is the role of Azure Bastion in network security?  
• Can you elaborate on Availability Zones in Azure?  
• What is an Availability Set in Azure?  
• What arguments are required when creating a Resource Group?  
• What resources do you use when creating a VM in Azure?  
• Difference between VM and VMSS (Virtual Machine Scale Sets).  
• If you need to create two VMs and two databases, which approach will you follow: VM or VMSS?  
• How do you manage multiple Azure subscriptions in Azure DevOps?  
• How would you manage 1500 subscriptions from Azure DevOps level?  
• What is a Service Principal and Managed Identity?  
• What is Least Privilege Access?  
• What is the difference between public and private IPs?  
• What is a Service Endpoint and Private Link?  
• What is Bastion Host and why is it used?  
• What is Azure Function?  
• How do you horizontally scale your app services?  
• What are the different replication types in Azure?  
• What is Azure Key Vault and how do you secure secrets?  
• What is Azure Storage Account and how to secure it?

---

## **🔷**  **19\. Azure Services & Serverless**

• Have you used Azure Function App? What is its role?  
• Which Azure resource is used to distribute static and dynamic content?  
• Have you used Azure App Service?  
• What is difference between App Service and VM Service?  
• What is Azure Front Door?  
• What is Azure Dashboard?  
• How do you configure auto-scaling for AKS using Azure native tools?

---

## **🔷**  **20\. Terraform & Azure DevOps Integration** 

• Have you worked with Azure DevOps? Explain end-to-end flow for deploying Terraform in   pipeline.  
• What are the typical steps in a CI pipeline for Terraform deployment?  
• What are deployment groups and task groups in Azure DevOps?  
• What is a sprint and how does it differ from a work item in Azure Boards?  
• What is the process for a Pull Request (PR)?  
• What are security best practices in Azure DevOps pipelines?  
• What are gates in Azure DevOps?  
• Is macOS supported as an agent pool in Azure DevOps?  
• Explain service connections and what is needed to create them.  
• How do you secure Azure DevOps?  
• What is the difference between push and commit in Git?  
• Explain the process of renaming a Git branch.  
• How do you configure a local Git repo to remote repo?  
• How do you commit a file and update commit message?  
• What CI/CD tools have you used?  
• How do you generate artifacts in CI pipelines?  
• How do you pass Terraform output block values into Azure pipelines?  
• Command to get VM result in JSON format after Terraform apply.  
• How to integrate Azure Key Vault into pipeline using scripting?  
• How to trigger a pipeline when dev branch passes 90 % of validation?  
• What is parallelism in pipeline and how is it optimized?  
• What happens when Terraform pipeline fails during apply with lock state?  
• How to release Terraform plan automatically in multi-stage pipeline?

---

---

## **🔷**  **24\. Scripting – Bash, PowerShell & Automation**

• Have you worked with Bash or PowerShell scripting?  
• What is a shell script and how to create one?  
• What is the difference between Bash and PowerShell?  
• How do you automate Terraform commands using scripting?  
• What is a null resource and how can scripting trigger it?  
• What are environment variables and how to use them in scripts?  
• How to pass dynamic values from script to pipeline?  
• What is the AWK command in Linux?  
• What is `$_` and `$?` in shell scripting?  
• Write a simple Bash script to print “Hello Bash”.  
• Write a script with loop function example.  
• Write a Bash script to send email alert when disk usage exceeds 80%.  
• What are loops in Bash (for, while, until)?  
• What is cron job and how to schedule it?  
• How to remove sensitive passwords from scripts or repos?  
• How to securely store API keys used in automation scripts?  
• What are linters and how are they used (TFLint, Checkov, TruffleHog)?  
• How do you integrate SonarQube using script?  
• How to integrate Azure Key Vault in pipeline via script?  
• How to fetch Key Vault secrets automatically when updated?  
• How to use scripting for CI/CD automation and notifications?  
• How to automate Terraform validation, plan, and apply steps?

## **🔷**  **25\. Miscellaneous / General DevOps Concepts**

• Introduce yourself.  
• Tell me about your recent project.  
• What are your roles and responsibilities?  
• What are the tools you have worked on in DevOps?  
• What is CI/CD and how does it help in automation?  
• What is Continuous Delivery vs Continuous Deployment?  
• What are microservices?  
• What is blue-green deployment?  
• What is canary deployment?  
• What is rollback in CI/CD and why is it important?  
• What are different branching strategies you have used?  
• What is an artifact and how do you publish it?  
• What are Service Endpoints and Private Links in Azure?  
• What is a Load Balancer and how many types exist?  
• What is DNS and why is it important?  
• What is NAT?  
• What is Middleware and how do you install it on Linux?  
• What is Sudo command and when do we use it?  
• What is `top` command in Linux?  
• What is difference between App Service and Function App?  
• What is VPC and how does it differ from VNet?  
• What is the difference between Terraform and ARM template?  
• What is the difference between Continuous Integration and Continuous Deployment?  
• What is DevSecOps?  
• What is Site Reliability Engineering (SRE)?  
• What are key metrics you monitor for production health?  
• How do you ensure security and compliance in CI/CD pipelines?  
• What is Infrastructure Drift and how do you fix it?  
• What are availability sets and availability zones?  
• How do you migrate on-prem to Azure cloud?  
• What is Helm vs Kustomize?  
• What is Front Door in Azure?  
• What is Azure Monitor and how do you configure alerts?  
• What is Recovery Services Vault and Backup Vault?  
• What is difference between local and remote backend in Terraform?  
• What is the difference between Feature, Hotfix, and Release branches?  
• How do you optimize pipeline execution time?  
• What is difference between Stateful and Stateless apps?  
• What is “bare metal” in cloud context?  
• What is a monolithic vs microservice application?  
• How do you automate backups and retention?  
• What are basic Linux commands used in DevOps daily?  
• What are your steps for securing Terraform and Azure Pipelines?

# **Azure**

## 🔷 **1\. Azure Fundamentals – Resource Groups, ARM & Governance**

 • What is a Resource Group in Azure and why do we use it?  
 • What is Azure Resource Manager (ARM)?  
 • How do you control access to Azure resources (RBAC)?  
 • What are Azure Blueprints and why are they useful?  
 • What is Azure Policy and how do you enforce it?  
 • What tools are used for Azure governance and policy management?  
 • What are the Azure Well-Architected Framework pillars?  
 • What are the key design principles for an Azure Landing Zone?  
 • Setting up an Azure Landing Zone with Hub-and-Spoke Architecture — explain the best-practice design.

---

## 🔷 **2\. Virtual Networks – VNet, Subnetting, Peering & Name Resolution**

 • What is a Virtual Network (VNet) in Azure?  
 • What is a subnet and how is it used inside a VNet?  
 • Given CIDR 192.168.1.0/24, how would you create two subnets (address planning)?  
 • What is VNet peering and how is it configured?  
 • What are network peering limitations?  
 • What is Azure DNS? How do you configure DNS zones (Public vs Private)?  
 • I have a Public DNS Zone and a Private DNS Zone — what’s the difference?  
 • User sees DNS resolution errors and slow response for an app hosted on AKS — how would you troubleshoot and fix?  
 • How do you troubleshoot connectivity between VNets?

---

## 🔷 **3\. Secure Connectivity – VPN, ExpressRoute, Site-to-Site**

 • What information is required to establish a site-to-site VPN connection?  
 • What is an ExpressRoute circuit and how is it different from VPN Gateway?  
 • How do you connect on-prem resources to Azure via VPN Gateway?  
 • Define Hub & Spoke Architecture — brief the design and when to use it.  
 • In hub–spoke peering, which options do you select on the hub to peer with the remote/spoke VNet?

---

## 🔷 **4\. Load Balancing & Traffic – LB, App Gateway, WAF, Front Door, Traffic Manager, CDN**

 • What are the types of Load Balancers in Azure (internal/external)? Use cases?  
 • Difference between Load Balancer (L4) and Application Gateway (L7)?  
 • What is Application Gateway, and what are its core components?  
 • How do you configure routing rules in Application Gateway?  
 • What is WAF (Web Application Firewall)? Difference between Detection and Prevention modes?  
 • How do you troubleshoot 403 WAF block errors?  
 • What’s the difference between Azure Front Door and Traffic Manager?  
 • What routing methods does Traffic Manager provide?  
 • What is a CDN? Why and where would you create Azure CDN?  
 • In Kubernetes, when you need an L7 load balancer (App Gateway Ingress Controller), what must you configure?

---

## 🔷 **5\. Private Access & Perimeter Security – Private Endpoints, Bastion, NSG, Firewall**

 • What is a Private Endpoint and when do you use it?  
 • Have you created a Private Endpoint for a Storage Account? Steps and validation?  
 • VM, Storage Account, SQL DB, App Service are in the same subnet and Storage has a Private Endpoint — how will the VM resolve the Storage FQDN privately?  
 • What is Azure Bastion and why is it used?  
 • Explain NSG (Network Security Group) — priorities and rule design.  
 • Application Security Group (ASG) vs NSG — explain and compare.  
 • What is the difference between NSG and Azure Firewall? When do you use each?  
 • How do you configure Firewall rules in Azure (threat-intel, DNAT/SNAT, FQDN tags)?  
 • End-to-end: how would you manage Firewall and DNS setup for a secure application?

---

## 🔷 **6\. Identities, Keys & Secrets – Managed Identity, Key Vault, RBAC**

 • What are Managed Identities in Azure?  
 • What is Azure Key Vault and how do you integrate it with applications and pipelines?  
 • Purpose of Key Vault — typical use cases (keys, secrets, certificates).  
 • How do you implement role-based access control (RBAC) for least-privilege?  
 • How would you integrate Azure Key Vault with AKS for pod secrets (CSI driver/Secret Store)?

---

## 🔷 **7\. Storage – Accounts, Security, Tiers & Access**

 • How do you secure Storage Accounts (public access disable, TLS, private endpoints, SAS policies)?  
 • What are the network access settings for a Storage Account? Explain options.  
 • How do you configure firewall rules for Storage Accounts?  
 • What is Blob Storage and what are its access tiers (Hot/Cool/Archive)?  
 • How can you restrict public access to your Storage Account?

---

## 🔷 **8\. Compute & App Platform – VM, VMSS, App Service, AKS (Access & Scale)**

 • What resources do you create when provisioning a VM (NIC, NSG, Disk, VNet/Subnet, PIP)?  
 • What is an Availability Set vs Availability Zone?  
 • What is VMSS and when would you prefer it over individual VMs?  
 • If you need two VMs and two databases — when would you choose VMSS?  
 • How do you patch your VMs?  
 • What is swap space in a Linux VM?  
 • How do you connect to a VM with only a private IP (Bastion/Jumpbox/PE)?  
 • How will you horizontally scale your App Services?  
 • How will you make AKS private (private cluster, private endpoints, UDRs, DNS)?  
 • What compute services do you commonly use in Azure?

---

## 🔷 **9\. Availability, BCDR & Backup**

 • What is Azure Site Recovery (ASR)?  
 • Define RPO and RTO in DR design.  
 • What is BCDR in Azure? Difference between BCDR and DR?  
 • How do you perform DR drills in Azure?  
 • How have you configured VM backups — what policies do you apply?  
 • If a VM has crashed and is inaccessible, how will you take/restore a backup?  
 • MABS vs MARS agent — when to use which?  
 • Where are your DR servers located (region pair considerations)?

---

## 🔷 **10\. Monitoring, Logs & Security Alerts**

 • What is Azure Monitor and how does it help track performance?  
 • What are metrics and logs in Azure Monitor?  
 • What are Diagnostic Settings and common log categories?  
 • How do you analyze Activity Logs and Security Alerts?  
 • How do you monitor Application Gateway logs in Log Analytics (WAF logs, access logs)?  
 • What is Application Insights and when do you use it?  
 • What are options to monitor network traffic (NSG flow logs, NPM/Workbooks)?  
 • There are certain security alerts in Azure — how would you triage and remediate them?  
 • Suppose Microsoft announces new Azure services — where do you get official updates?

---

## 🔷 **11\. Cost, Architecture & Landing Zone Readiness**

 • What is cost optimization and which Azure tools help (Cost Management, Advisor, Reservations, Spot, Autoscale)?  
 • What are Availability Zones and their benefits?  
 • What services of Azure have you used (VMs, VNets, NSGs, LB, Storage, App GW, AKS, App Service)?  
 • What are the pillars of the Well-Architected Framework?  
 • What are the key design principles for an enterprise Landing Zone (policy, guardrails, identity, networking, management)?  
 • How will you secure your frontend deployment (WAF, Front Door, Private Link, Managed Identity, secret scanning)?  
 • How will you work across multi-environment setups in Azure (dev/test/prod isolation, subscriptions, policies)?

---

## 🔷 **12\. Migration & Platform Operations**

 • What are the steps to migrate on-prem servers/VMs to Azure?  
 • What are the steps to migrate on-prem VMs to Azure with minimal downtime?  
 • How do you handle platform updates in Azure Infra (patches, reboots, host OS updates)?  
 • What’s the process to move workloads between regions or subscriptions?

---

## 🔷 **13\. Storage, Backup & Region Placement – Practical Checks**

 • How do you configure Azure Backup and retention policies?  
 • Where are your VMs located — which region and why?  
 • Where are your DR servers located — region pair and compliance?

---

## 🔷 **14\. Quickfire: Clarifications & “Choose the Right Service”**

 • Difference between Availability Zone and Availability Set?  
 • Difference between Azure DNS and Azure Front Door?  
 • Azure Front Door vs Traffic Manager — when to use which?  
 • CDN vs Traffic Manager — main differences and placement in architecture?  
 • Types of Load Balancer — explain internal vs external scenarios.  
 • Application Gateway (Standard vs WAF SKU) — differences and selection.  
 • Private Endpoint vs Service Endpoint — differences and selection.

---

## 🔷 **15\. Real-World Scenarios**

 • “We have VM, Storage Account, SQL DB, App Service in one subnet, and a Private Endpoint on Storage” — how will the VM resolve the Storage FQDN privately?  
 • “AKS app is slow and has DNS resolution errors” — walk through end-to-end troubleshooting (CoreDNS, Private DNS Zone links, NSGs/UDRs, health probes).  
 • “How have you used Azure Load Balancers (internal/external) and Application Gateway?” Give examples.  
 • “How do you secure Storage Account access?” (Private endpoints, deny public, SAS, scoped tokens, firewall, RBAC)  
 • “Tell me where you used NSG and Virtual Network Gateway in your project.”

---

## 🔷 **16\. Cross-Cloud & Edge Case (Bonus)**

 • Your EC2 instance in a private subnet must download packages but no NAT Gateway exists — what alternatives (VPC endpoints, Instance Connect, proxy, S3/Dynamo endpoints) apply?  
 • What is the difference between PaaS, IaaS, and SaaS in Azure?

---

## 🔷 **17\. Misc / Screening (Non-Tech)**

 • Are you open to working from office 3 days a week and relocation?

# **Azure DevOps Fundamentals**

## 🔷 **1\. Azure DevOps Fundamentals**

• What is Azure DevOps and what are its main components?  
• What are Repos, Pipelines, Boards, Artifacts, and Test Plans in ADO?  
• What services of the Azure DevOps portal have you used?  
• Tell me about the complete CI/CD process followed in your company.  
• What are pipelines and how are they structured?  
• Explain the difference between Classic and YAML pipelines.  
• What are the advantages of YAML pipelines?  
• What is GitOps and how is it implemented in ADO?  
• What is the difference between GitOps and DevOps?  
• What is Trunk-Based Branching Strategy?

---

## 🔷 **2\. Repos & Source Control**

• What are repositories in Azure DevOps?  
• How do you checkout code from multiple repositories in one pipeline?  
• You have multiple repositories A and B and need to fetch both in one deployment — how do you configure that?  
• What is GitOps and how do you manage Git branches for automation?  
• Explain the branch strategy followed in your project (feature/develop/release/hotfix).  
• What is a hotfix in pipelines? How do you deploy hotfixes?  
• How do you rollback or revert a commit if build fails?

---

## 🔷 **3\. Variables, Secrets & Configuration**

• What are Variables in a pipeline?  
• Difference between pipeline variables and environment variables.  
• How do you create and manage variable groups in ADO?  
• What is the sequence or order of variable precedence?  
• How do you secure secrets in pipelines? (Library, Key Vault, Environment Variables)  
• How do you link Azure Key Vault with ADO to pull secrets?  
• How can you store configuration secrets to authorize pipelines?

---

## 🔷 **4\. Agents, Pools & Runners**

• What is an agent pool and how does it work?  
• What is a self-hosted agent and when would you use it?  
• What is the advantage of a self-hosted agent?  
• Which agents do you use — Microsoft-hosted or self-hosted?  
• How many agents are configured in your organization?  
• If 12 developers trigger pipelines at once and only 6 agents are available — how do you handle concurrency?  
• How do you monitor and maintain self-hosted agents?  
• What is a deployment group and how is it used?  
• When will you use which type of agent? (Linux/Windows, self-hosted/cloud)  
• What is the difference between run-once and multi-stage jobs?

---

## 🔷 **5\. Service Connections & Integrations**

• What is a service connection and how do you configure it?  
• How do you authorize pipelines to access Azure subscriptions?  
• If you see the error “Pipeline doesn’t have authorization to run,” what are possible causes?  
• How do you integrate ADO pipelines with GitHub repositories?  
• What is PAT (Personal Access Token) and where do you use it?  
• How do you authenticate with Azure Container Registry (ACR) from pipelines?  
• What is ACR and how do you push images from pipeline to ACR?  
• How do you link external feeds or publish artifacts to external registries?

---

## 🔷 **6\. CI/CD Pipeline Structure & YAML**

• What are the stages in a typical CI/CD pipeline?  
• How do you define triggers, agents, and service connections in YAML?  
• What are pipeline templates and their benefits?  
• How do you write a YAML pipeline for application deployment?  
• Write a sample Azure pipeline YAML and explain each stage.  
• What is the difference between dependsOn and condition in YAML?  
• What is the difference between deployment job and normal job?  
• What is the use of environment variables in YAML?  
• What is the purpose of environment approvals and gates in YAML pipelines?  
• What is the use of templates for reusable pipelines?

---

## 🔷 **7\. Pipeline Automation & Scheduling**

• How do you trigger pipelines automatically on Git commits?  
• How do you schedule pipelines to run at specific times?  
• How do you trigger pipelines conditionally (manual, scheduled, PR-based)?  
• How do you handle multi-stage deployments (DEV → QA → UAT → PROD)?  
• How do you deploy to multiple environments automatically?  
• If we have one pipeline that must run for multiple environments — how do you parameterize it?

---

## 🔷 **8\. Approvals, Gates & Validations**

• How do you handle approvals and gates in pipelines?  
• How do you configure manual validations?  
• What is the difference between approvals in environments vs release pipeline?  
• How do you integrate approval flow before production deployment?  
• What is an environment in ADO and how do you manage access controls?  
• How do you handle validation and rollback for failed releases?

---

## 🔷 **9\. Quality, Testing & Security**

• How do you integrate SonarQube for code quality analysis?  
• How do you handle unit and functional testing inside pipelines?  
• How do you integrate Checkov, TFLint, and Terraform validation in your pipeline?  
• TFLint and Checkov make the pipeline slow — how can you optimize it?  
• How do you ensure secure code scanning and compliance checks in pipeline?  
• How do you enable Splunk or monitoring integration for pipelines?  
• What are security practices used to secure CI/CD pipeline?

---

## 🔷 **10\. Terraform, Infra & Automation**

• How do you integrate Terraform execution in an ADO pipeline?  
• How will you create one resource in multiple subscriptions under the same pipeline?  
• How will you create a one-click pipeline that provisions full infrastructure?  
• How do you run Terraform init/plan/apply securely in a pipeline?  
• How do you handle Terraform state backend and secrets inside pipeline?  
• How do you optimize long-running Terraform pipelines?

---

## 🔷 **11\. Pipeline Failures, Debugging & Optimization**

• What are the common issues faced during pipeline runs?  
• If build fails though Dockerfile is correct — how do you troubleshoot?  
• How do you handle pipeline failures and send notifications?  
• How do you rollback failed deployments automatically?  
• How do you implement retry logic in YAML pipelines?  
• What steps do you take if the pipeline is running too long?  
• How do you debug authorization or permission-related issues?  
• How do you manage concurrency and job parallelism to optimize execution time?

---

## 🔷 **12\. Releases, Artifacts & Environments**

• What is the difference between build and release pipelines?  
• How do you use artifacts between build and release pipelines?  
• What is the difference between build artifacts and external feeds?  
• How do you manage artifacts and publish them securely?  
• Where do you deploy the artifacts (VMs, AKS, App Service)?  
• How do you manage releases across DEV, UAT, and PROD?  
• What are environment approvals and how are they configured?

---

## 🔷 **13\. Testing, Monitoring & Post-Deployment**

• Have you handled unit and functional testing within pipelines?  
• How do you monitor deployed applications post-release?  
• How do you set up alerts in ADO for failed runs?  
• If you can’t SSH into a VM after deployment — what are your debugging steps?  
• How do you integrate Azure Monitor or Splunk for pipeline metrics?

---

## 🔷 **14\. Real-World & Scenario Questions**

• You have two Azure subscriptions — how do you give access to new resources?  
• How will you manage multi-environment pipelines with conditional triggers (e.g., deploy PROD only after UAT passes)?  
• How would you rollback a production deployment if a bug is found later?  
• You are asked to add one resource in multiple subscriptions — how will you implement that?  
• You added Checkov and TFLint — pipeline became slow. How do you speed it up?  
• A developer ran a pipeline but authorization failed — what are the root causes?  
• A deployment failed midway — how do you recover?  
• What branching strategy did you use for hotfixes and releases?

---

## 🔷 **15\. Advanced Topics / Cross Integration**

• How do you integrate Kubernetes manifests (YAML, Secrets, Taints & Tolerations) into pipeline deployment?  
• How do you use GitHub Actions for CI/CD?  
• How do you implement GitOps with ADO pipelines?  
• How do you handle multicloud deployments or hybrid infra pipelines?

## **🔷 16\. Azure DevOps – Pipelines**

• What is a pipeline in Azure DevOps? Explain YAML pipeline flow.  
• What are task groups and deployment groups?  
• What are security best practices in pipelines?  
• How do you troubleshoot a multi-stage pipeline issue?  
• What tools are used in pipeline automation?  
• What are gates in Azure DevOps?  
• What is a deployment gate in ADO?  
• If two teams have access to the same repo, how do you auto-raise a PR?  
• How to stop all outgoing traffic from VM without NSG?  
• What is variable and parameter in pipeline?  
• What is parallelism in pipeline?  
• What happens if count=0 in pipeline execution?  
• How do you handle lock state if pipeline fails after apply?  
• Write a condition — run pipeline only when dev passes 90%.  
• What is difference between build and release pipeline?  
• What is condition and parameter in CI/CD?  
• Write YAML pipeline and explain each stage.  
• What is release pipeline in Azure DevOps?  
• What is the difference between Classic and YAML pipeline?

## **🔷 17\. Azure DevOps – Boards & Agile**

• What is a work item?  
• What is a sprint?  
• What is a stakeholder in ADO?  
• What is difference between sprint and work item?  
• What methodology do you follow in Azure Boards?  
• How do you restrict an ADO user to only pipelines and repo access?  
• Agile vs Kanban boards — which one have you used and why?

## **🔷 18\. Azure DevOps – Service Connections & Administration**

• What is a service connection?  
• What is required while creating a service connection?  
• What is ADO (Azure DevOps)?  
• How federation works in ADO?  
• How to manage 1500 subscriptions using ADO?  
• How do you create a service connection for GitHub in Azure DevOps?  
• What is agent pool and how do you manage it?  
• What is Azure DevOps portal and why do we use it?  
• How do you integrate Azure Key Vault into pipeline securely?  
• How do you manage secrets in pipelines?  
• How to automate Terraform runs in CI/CD using Bash or PowerShell?

## **🔷 19\. Azure DevOps – Git & Repositories**

• Git push vs Git commit?  
• What is a pull request (PR)?  
• Difference between Git fetch and Git pull?  
• How to secure credentials if they are committed by mistake?  
• What is the basic workflow in ADO Repos?  
• What is difference between push and commit?  
• What is Git merge conflict and how do you resolve it?  
• What branching strategy have you used (Feature, Release, Trunk)?  
• What is Git rebase?  
• If build fails, how do you revert a commit?  
• How do you optimize pipeline runtime using Git strategies?

## **🔷 20\. CI/CD & DevOps Concepts**

• What is CI/CD and why do we use it?  
• What is Continuous Delivery vs Continuous Deployment?  
• What is blue-green deployment?  
• What is canary deployment?  
• What are microservices?  
• What is a release vs build vs artifact?  
• What are environment variables in a pipeline?  
• How do you automate Terraform in CI/CD?  
• How do you ensure pipeline security?  
• What is rollback in CI/CD?  
• What is the purpose of approvals and gates?  
• What is an artifact repository?  
• What is DevSecOps?  
• What are SRE principles?  
• What is the difference between a build and release pipeline?  
• What is condition in CI/CD?  
• How do you integrate pipelines with GitHub or Azure Repos?  
• What are the benefits of automation in DevOps?

# **Docker Fundamentals**

## 🔷 **1\. Docker Fundamentals**

• What is Docker and what problem does it solve?  
• What is the difference between a container and a virtual machine?  
• Why do we use Docker in DevOps and CI/CD?  
• What is Docker architecture — explain Docker daemon, CLI, and registry.  
• What are images, containers, and layers in Docker?  
• How is Docker different from traditional virtualization (Hyper-V, VMware)?

## **🔷 2\. Docker**

• Do you know Docker?  
• What is Docker and what problem does it solve?  
• What is the difference between a container and a virtual machine?  
• What is a Docker volume?  
• Where do we store Docker images?  
• Write a Docker command to create a container from an image.  
• Write a Dockerfile to create a custom image.  
• What is the difference between ADD and COPY in Dockerfile?  
• What is the difference between CMD and ENTRYPOINT?  
• What is ARG in Docker and how is it used?  
• Can we make changes to a running Docker container?  
• Command to run an already created container.  
• Different networking types in Docker.  
• What is Docker Swarm?  
• What is multi-stage build in Docker?  
• How do you clean up unused images and containers?  
• What is the purpose of Docker Compose?  
• What are the advantages of Docker over VMs?  
• What is the docker create command used for?  
• What is docker push and docker pull?

## **🔷**  **3\. Docker – Containers & Image Management**

• What is Docker?  
• Why do we use Docker in DevOps?  
• What problem does Docker solve compared to VMs?  
• What is the difference between a container and a virtual machine?  
• What is a Docker image and where are images stored?  
• What is a Docker container?  
• What is the difference between Dockerfile and Docker Compose?  
• Explain Dockerfile structure.  
• What is the difference between `ADD` and `COPY` commands?  
• What is the difference between `CMD` and `ENTRYPOINT`?  
• What is a multi-stage Dockerfile and why is it used?  
• What are the different networking modes in Docker?  
• What is a volume in Docker and why is it important?  
• What is Docker Swarm?  
• What is Docker Compose and how is it used?  
• Where do we keep Docker images (e.g. ACR, DockerHub)?  
• How to push and pull Docker images?  
• Can we modify a running Docker container?  
• Command to run an already created container.  
• What is `ARG` in Dockerfile?  
• How to clean unused Docker containers, networks, and images?  
• What is a build context in Docker?  
• What is the purpose of `.dockerignore` file?  
• What is difference between container restart policies (no, always, on-failure)?  
• How do you debug failing Docker builds?

---

## 🔷 **4\. Dockerfile – Core Concepts & Instructions**

• What is a Dockerfile and why do we use it?  
• What are the main instructions in a Dockerfile (FROM, RUN, CMD, COPY, EXPOSE, etc.)?  
• What is the difference between **ADD** and **COPY** commands?  
• What is the difference between **CMD** and **ENTRYPOINT**?  
• What is `.dockerignore` and why is it important?  
• What is the difference between **ARG** and **ENV** in Dockerfile?  
• How do you reduce Docker image size?  
• Can we create a Docker image without pulling a base image?  
• What is a **multi-stage build**, and why/when is it used?  
• What are best practices for writing a Dockerfile?  
• Write a Dockerfile for a Node.js application using multi-stage builds.  
• Write a Dockerfile to build a custom image for any application.

---

## 🔷 **5\. Docker Image Management**

• How do you build and tag Docker images?  
• Write the build command to build a Docker image.  
• What is the purpose of the `docker build -t` command?  
• How do you push Docker images to Azure Container Registry (ACR)?  
• How do you pull images from Docker Hub or ACR?  
• How do you reduce the size of Docker images?  
• What are best practices for image versioning and tagging?

---

## 🔷 **6\. Containers – Run, Manage & Inspect**

• How do you create and run a container from an image?  
• Do you know the command to create a container manually?  
• What is the difference between `docker stop` and `docker kill`?  
• How do you check running containers?  
• How do you check logs for a container?  
• How do you debug a container that has exited?  
• How do you inspect a container’s configuration (env, ports, volumes)?  
• How do you clean up unused containers and images?  
• What is the command to remove dangling images and stopped containers?

---

## 🔷 **7\. Networking & Communication Between Containers**

• How do you create a Docker network?  
• If you want two containers to communicate, how can you do it?  
• How do you connect multiple containers in a custom network?  
• What kind of **network policies** can be used to restrict container communication?  
• What are the different types of Docker networks (bridge, host, overlay, none)?  
• What is the default Docker network driver?  
• How do you manage DNS inside a Docker network?

---

## 🔷 **8\. Volumes & Data Persistence**

• What is a Docker volume and why do we use it?  
• How do you persist data using volumes?  
• What happens if a container is deleted — how do you prevent data loss?  
• Suppose a container is accidentally deleted — what steps can you take to protect the data?  
• How do you back up and restore volume data?

---

## 🔷 **9\. Docker Compose & Multi-Container Setup**

• What is Docker Compose and how does it work?  
• How do you define multiple services in a `docker-compose.yml` file?  
• How do you bring up and shut down multi-container applications?  
• What is the difference between Docker Compose and Docker Swarm?  
• What are advantages of Compose for CI/CD setups?  
• How do you connect containers from different Docker Compose projects?

---

## 🔷 **10\. Security & Secret Management**

• How do you handle secrets inside containers (Key Vault, ENV, mounted files)?  
• How do you fetch secrets from Azure Key Vault into your container?  
• How do you handle secrets for PHP → MySQL connection in Docker?  
• What is the best way to inject secrets securely in runtime?  
• What are the recommended practices to scan images for vulnerabilities?  
• Scenario: You wrote a Dockerfile for NGINX (latest version). It was working fine earlier, but now shows vulnerability issues — what might have happened? *(Hint: “latest” tag may have pulled a newer base image with CVEs)*

---

## 🔷 **11\. Troubleshooting & Debugging Containers**

• How do you troubleshoot container startup issues?  
• How do you check logs or live attach to a running container?  
• How do you use `docker exec` to debug inside a container?  
• How do you investigate high CPU/memory usage of a container?  
• How do you resolve “port already in use” errors?  
• How do you troubleshoot networking issues between containers?

---

## 🔷 **12\. Scripting & Automation**

• Can you write a shell script to copy a file to another server where source/destination are provided by user input?  
• How do you automate image builds using scripts or pipelines?  
• How do you integrate Docker with CI/CD pipelines (Azure DevOps, Jenkins, GitHub Actions)?  
• How do you automate cleanup of old images/containers?

---

## 🔷 **13\. Git Integration & Code Management**

• How can you copy code from one branch to another in GitHub?  
• How do you connect Docker build automation with GitHub repositories?  
• How do you use Docker Hub or ACR as an artifact repository?

---

## 🔷 **14\. Advanced Docker Topics**

• What is a multi-stage build and when is it used?  
• What is Docker Swarm? How does it differ from Compose?  
• What is the role of Docker in Kubernetes?  
• How do you optimize Docker image builds for speed and security?  
• How do you handle image versioning and dependency updates?  
• How do you integrate vulnerability scanning into image pipelines?

---

## 🔷 **15\. Real-World Scenarios & Interview Situations**

• Scenario: Container startup fails due to missing environment variables — how do you fix it?  
• Scenario: Application container is unreachable — how do you check its network configuration?  
• Scenario: Disk space is full — how do you clean up unused images?  
• Scenario: Vulnerability scanner flags your image — what actions do you take?  
• Scenario: Multi-stage build image isn’t copying final artifact — how do you debug the build?

# **Kubernetes Fundamentals**

## 🔷 **1\. Kubernetes Fundamentals**

 • What is Kubernetes and why is it used in production?  
 • What problem does Kubernetes solve compared to VMs or Docker Compose?  
 • What are Pods, Deployments, and ReplicaSets?  
 • Explain the difference between Deployment and StatefulSet.  
 • What is a DaemonSet and why is it used?  
 • What are Namespaces in Kubernetes and why are they important?  
 • What are Labels and Selectors? How do they relate to Pods and Services?  
 • What are your day-to-day activities in Azure Kubernetes Service (AKS)?

## **🔷 2\. Kubernetes – Cluster, Pods, Deployments & Scaling**

• What is Kubernetes?  
• Explain Kubernetes architecture.  
• What are master and worker nodes?  
• What is a Pod in Kubernetes?  
• How many containers can you run in a Pod?  
• What are ReplicaSets and Deployments?  
• What is the difference between Stateful and Stateless applications?  
• What is a StatefulSet in Kubernetes?  
• What is a DaemonSet?  
• What is a Namespace in Kubernetes?  
• What is ClusterRole and ClusterRoleBinding?  
• What are ConfigMaps and Secrets?  
• How do you manage secrets in Kubernetes?  
• What is Headless Service and when is it used?  
• What is difference between ClusterIP, NodePort, and LoadBalancer services?  
• What is Ingress Controller and Ingress resource?  
• How do you debug a Pod not running or in pending state?  
• What are possible reasons for Pod stuck in Pending state?  
• How do you check Pod logs and events?  
• What is Horizontal Pod Autoscaler (HPA)?  
• How does Kubernetes perform service discovery?  
• How does auto-scaling work in AKS?  
• How to configure AKS in Azure Portal?  
• What is Taint and Toleration?  
• What are Liveness and Readiness probes?  
• What is Helm in Kubernetes?  
• What are Helm charts and their types?  
• What is a Replica in Kubernetes?  
• What is a deployment strategy (Rolling, Recreate, Blue-Green, Canary)?  
• What is Persistent Volume (PV) and Persistent Volume Claim (PVC)?  
• What is a NodePort service?  
• How do you perform rolling update and rollback?  
• How do you monitor Kubernetes clusters?  
• How do you integrate Prometheus and Grafana for monitoring?  
• What command checks resource usage in Kubernetes?  
• What is the smallest component in AKS?  
• How do you manage network policies in Kubernetes?

## **🔷 3\. Kubernetes (AKS / K8s)**

• What is Kubernetes?  
• What is the architecture of Kubernetes?  
• What are different services in Kubernetes?  
• What is stateless vs stateful in Kubernetes?  
• What is a StatefulSet in Kubernetes?  
• What is a Deployment Set?  
• What is a Namespace in K8s?  
• What is ClusterRoleBinding?  
• What is ReplicaSet?  
• What is Pod?  
• What is a Headless Service?  
• What is a DaemonSet?  
• What is Taint and why is it used?  
• What is the smallest component in AKS?  
• How do you manage secrets in Kubernetes?  
• What is Helm?  
• What are Helm Charts?  
• What is Stateful Deployment in K8s?  
• Have you deployed Kubernetes clusters? What all did you deploy?  
• How do you maintain a Kubernetes cluster?  
• How to upgrade a Kubernetes cluster?  
• How to configure AKS with Azure Portal?  
• How does Kubernetes handle service discovery?  
• How to integrate AKS with ACR (Azure Container Registry)?  
• How to troubleshoot a pod in Pending state?  
• How much should be the ideal pod-to-container ratio?  
• How to monitor a Kubernetes cluster?  
• What are ConfigMaps and Secrets?  
• What is Horizontal Pod Autoscaler (HPA)?  
• What is the use of Network Policies?  
• How do you perform canary deployment in Kubernetes?  
• Have you worked with auto-scaling in AKS?  
• How does auto-scaling work internally?  
• What is kubectl and some useful commands?

---

## 🔷 **4\. Services, Networking & Ingress**

 • What are Services in Kubernetes and what types exist?  
 • Explain **ClusterIP**, **NodePort**, and **LoadBalancer** — when do you use each?  
 • What happens behind the scenes when you choose “Service type \= LoadBalancer” in AKS?  
 • What is the difference between **Ingress** and **Ingress Controller**?  
 • Why do we use Ingress Controller and what is its purpose?  
 • How do you expose a Kubernetes application to external traffic?  
 • What is **kube-proxy** and how does it route traffic?  
 • Explain complete traffic flow: from user → Ingress → Service → Pod.  
 • How would you secure application traffic (TLS termination, HTTPS redirection)?  
 • If your AKS cluster is private, how can you connect to it securely?

---

## 🔷 **5\. Configuration, Secrets & Environment Management**

 • What are **ConfigMaps** and **Secrets**?  
 • What is the difference between ConfigMap and Secret?  
 • How do you inject ConfigMap and Secret values into Pods?  
 • How do you secure Secrets in Kubernetes?  
 • How do you fetch secrets from Azure Key Vault into AKS Pods?  
 • What are best practices for storing sensitive configuration in AKS?

---

## 🔷 **6\. Probes, Health Checks & Scaling**

 • What are **Liveness** and **Readiness** Probes in Kubernetes?  
 • What types of health probes exist (HTTP, TCP, Exec)?  
 • Have you worked on configuring readiness and liveness probes?  
 • What is **HPA (Horizontal Pod Autoscaler)** and how does it work?  
 • How do you scale deployments manually and automatically?  
 • How do you host a **highly available**, **auto-scalable** web app on AKS?  
 • What is **kubectl rollout undo** used for?

---

## 🔷 **7\. Deployments & Strategies**

 • What is a Deployment in Kubernetes?  
 • What are different deployment strategies available in Kubernetes?  
 • What is a **Rolling Update** and how do you perform rollback?  
 • What is a **Blue-Green Deployment**?  
 • What is a **Canary Deployment**?  
 • What happens if deployment fails midway? How do you recover or rollback?  
 • How do you manage CI/CD integration for AKS deployments (with Azure DevOps)?  
 • What are the **application deployment types** you’ve worked with (YAML, Helm, pipeline)?

---

## 🔷 **8\. Storage & Volumes**

 • What are **Persistent Volumes (PV)** and **Persistent Volume Claims (PVC)**?  
 • How do you mount Azure Disk or Azure File Share in AKS?  
 • How do you protect data from accidental pod deletion?  
 • What happens when a StatefulSet Pod restarts — how is its data preserved?

---

## 🔷 **9\. Node Pools, Scheduling & Cluster Management**

 • What is a **Node Pool** in AKS and how do you manage it?  
 • What are **Taints** and **Tolerations**?  
 • What are common issues with pod scheduling (Pending state, Evicted Pods)?  
 • How do you monitor the health of AKS nodes?  
 • How do you upgrade AKS clusters safely?  
 • How do you drain nodes safely before upgrade?  
 • How do you handle image caching and OS patching in AKS nodes?

---

## 🔷 **10\. RBAC & Security**

 • What is **RBAC (Role-Based Access Control)** in Kubernetes?  
 • How do you configure RBAC roles and bindings?  
 • How do you implement **least privilege access** in AKS?  
 • What are Network Policies and how do you use them to restrict Pod-to-Pod communication?  
 • What kind of network policies have you implemented for security?  
 • How do you integrate **Azure AD authentication** with AKS for RBAC?

---

## 🔷 **11\. Logging, Monitoring & Troubleshooting**

 • What command is used to check Pod logs?  
 • What are commands to troubleshoot Pod-related issues?  
 • How do you debug a Pod stuck in **CrashLoopBackOff**?  
 • How do you debug a Pod stuck in **ImagePullBackOff**?  
 • What is your approach when Pods are being **Evicted** due to node pressure?  
 • How do you integrate **Prometheus** and **Grafana** with AKS?  
 • How do you configure monitoring using **Azure Monitor for Containers**?  
 • How do you check metrics and alerts for Pod performance?  
 • How do you analyze logs in a multi-namespace cluster?  
 • How do you investigate 503 or timeout errors from Kubernetes services?

---

## 🔷 **12\. Integration with Azure Services**

 • How do you connect AKS with ACR (Azure Container Registry)?  
 • How do you integrate AKS with Azure Key Vault for secret injection?  
 • How do you integrate Azure Monitor or Log Analytics for cluster health?  
 • How do you configure Azure Policy for AKS compliance?  
 • How did you integrate CI/CD pipelines with AKS deployments?

---

## 🔷 **13\. Real-World Scenarios**

 • A critical production AKS cluster is having multiple issues — Pods in ImagePullBackOff, Evicted, users getting 503\.  
 → What troubleshooting steps would you follow?  
 → How do you prevent this in the future?  
 • You haven’t used NodePort before — can you explain how it works?  
 • What resources have you created in Kubernetes (Deployments, Services, Ingress, PVCs, ConfigMaps, Secrets, etc.)?  
 • You are asked to restrict traffic between namespaces — how do you design the policy?  
 • You need to deploy a backend API and a frontend app with secure communication — how do you design it in AKS?

---

## 🔷 **14\. Common Azure-Specific Scenarios**

 • How do you deploy K8s on Azure AKS (basic flow)?  
 • Where do you scale App Service or VMs, and why do we specify default instance count?  
 • Suppose you select Service type \= LoadBalancer — which Azure Load Balancer (Basic or Standard) is created in the background?  
 • How do you configure Azure Monitor with AKS?  
 • How do you recover from a partial deployment failure in AKS via DevOps?  
 • How do you load balance applications running in Kubernetes?  
 • What is the difference between Azure Web Apps and AKS for container hosting?

---

## 🔷 **15\. Miscellaneous & Cross-Functional**

 • What are Services in Kubernetes — explain all types and use cases.  
 • What is the difference between Ingress and Ingress Controller?  
 • What is traffic flow from user to Pod using ingress rule?  
 • Have you worked on Azure Functions, Service Bus, or Logic Apps?  
 • What deployment method do you use in your CI/CD (YAML, Helm, kubectl, Terraform)?  
 • Have you worked on LLM or AI model deployments using Kubernetes?

# **Git Fundamentals**

## 🔷 **1\. Git Fundamentals**

• What is Git and why is it used?  
• What is GitHub?  
• What is GitFlow?  
• What problem does Git solve in software development?  
• How does Git differ from other version control systems like SVN?  
• What are commits, branches, and repositories in Git?  
• What is the difference between **local repository** and **remote repository**?  
• What is the basic workflow of Git (init → add → commit → push → pull)?

## **🔷**  **2\. Git & Version Control**

• What is Git and why do we use it?  
• What is Git cherry-pick?  
• Difference between Git pull and Git fetch.  
• What is Git merge?  
• What is Git rebase?  
• What does `git commit --amend` do?  
• How to resolve Git merge conflicts?  
• What is Git Flow and branching strategy?  
• How to recover deleted commits in Git?  
• What is a pull request and why is it important?  
• How to secure credentials committed by mistake?  
• How do you push, pull and clone repositories?  
• What is Git Stash and when is it used?  
• How to rename a branch locally and remotely?  
• What are tags in Git and when are they used?  
• What is the difference between Feature and Hotfix branches?

## **🔷 3\. GitHub Actions**

• What is GitHub Actions workflow?  
• What is workflow dispatch in GitHub?  
• What are jobs, steps, and actions in workflow files?  
• What are reusable workflows and composite actions?  
• How do you write GitHub Actions YAML files?  
• What is the difference between on: push and on: workflow\_dispatch?  
• What action do you use for checkout and what version?  
• What is the latest version of actions/checkout used in your pipeline?  
• What are build metrics in GitHub Actions?  
• How do you use secrets in GitHub Actions?  
• How do you handle parallel jobs in GitHub workflows?  
• What are GitHub events and syntax-based triggers?  
• How do you integrate GitHub Actions with Azure pipelines?

---

## 🔷 **4\. Git Commands & Operations**

 • What is the difference between **Git Pull**, **Fetch**, and **Clone**?  
 • What is the difference between **Git Merge** and **Rebase**?  
 • What is **Git Stash** and when do you use it?  
 • What is the difference between **git reset**, **git revert**, and **git checkout**?  
 • What is a **detached HEAD state** and how do you fix it?  
 • How do you check commit history in Git?  
 • How do you view differences between commits or branches (`git diff`)?  
 • What is the difference between `git push` and `git pull`?

---

## 🔷 **5\. Branching & Collaboration**

 • What are **branching strategies** — Feature, Hotfix, Release, and Trunk-Based?  
 • Which branching model have you implemented in your project?  
 • What is the **Git Flow model**?  
 • How do you delete a branch locally and remotely?  
 • How do you rename a branch (local \+ remote)?  
 • How do you create a new branch and switch to it?  
 • How do you merge one branch into another?  
 • What are **merge conflicts** and how do you resolve them?  
 • How do you perform **cherry-pick** in Git?

---

## 🔷 **6\. Commits, History & Recovery**

 • How do you undo the last commit without losing your changes?  
 • How do you revert a bad commit that broke the build?  
 • How do you squash multiple commits into one?  
 • What is **interactive rebase** and how do you use it to clean commit history?  
 • How do you recover deleted commits or branches?  
 • How do you remove sensitive data (like passwords or tokens) from Git history?  
 • How do you recover an accidentally deleted branch?  
 • What is **Git reflog** and how can it help you recover lost commits?

---

## 🔷 **7\. Tags & Versioning**

 • What is a **Git Tag** and why is it useful?  
 • What is the difference between **lightweight** and **annotated tags**?  
 • How do you create, view, and delete tags?  
 • How do you push tags to a remote repository?  
 • What is the purpose of tagging in release management?

---

## 🔷 **8\. Merge, Rebase & Squash Explained**

 • Difference between **merge** and **rebase** — when should you use each?  
 • What happens internally during a **rebase**?  
 • What is the difference between **squash merge** and **regular merge**?  
 • What is a **Git conflict** and how do you handle it during rebase?  
 • How do you combine multiple commits using **git squash** or interactive rebase?  
 • What are the advantages and risks of using rebase?

---

## 🔷 **9\. Git Configuration & .gitignore**

 • What is a `.gitignore` file and why is it used?  
 • What types of files should go in `.gitignore` (examples: `.env`, `node_modules`, etc.)?  
 • How do you apply changes in `.gitignore` after the file has already been committed?  
 • What is `.gitattributes` and how is it different from `.gitignore`?  
 • How do you configure Git username and email globally or per repo?

---

**🔷 10\. Authentication & Security**

 • How do you handle Git authentication in CI/CD pipelines?  
 • What are the ways to authenticate Git access in Azure DevOps or GitHub (PAT, SSH keys, OAuth)?  
 • What is a **Personal Access Token (PAT)** and when should you use it?  
 • How do you securely store credentials for Git automation?  
 • How do you revoke or rotate credentials in a secure pipeline?

---

## 🔷 **11\. Git in CI/CD & DevOps**

 • How is Git integrated with Azure DevOps, Jenkins, or GitHub Actions?  
 • How do you automate deployments triggered by Git commits?  
 • What is the workflow between Git commits → pipeline trigger → deployment?  
 • How do you handle merge conflicts in a multi-developer CI/CD environment?  
 • How do you manage Git credentials in pipelines securely?

---

## 🔷 **10\. Real-World Scenarios & Troubleshooting**

 • You merged a PR and later realized a mistake — how do you fix it?  
 • You committed secrets accidentally — how do you remove them from history and push?  
 • You’re in a detached HEAD state after a rebase — what should you do?  
 • How do you identify who made a change in a file (`git blame`)?  
 • How do you recover files after running `git reset --hard` accidentally?  
 • How do you resolve a large merge conflict between feature and release branches?  
 • How do you manage Git hooks (pre-commit, post-merge, etc.) in your projects?

---

## 🔷 **11\. Advanced Git Concepts**

 • What is **Git submodule** and when do you use it?  
 • What is **Git Worktree**?  
 • How do you rebase your feature branch with main while preserving your local commits?  
 • What are **bare repositories** in Git?  
 • How do you split a large Git repository into smaller ones (monorepo to multirepo)?  
 • What are **signed commits** and how are they verified?

# Azure Monitor & Observability Fundamentals

## 🔷 **1\. Azure Monitor & Observability Fundamentals**

 • What is **Azure Monitor** and what does it do?  
 • What are **Metrics** and **Logs** in Azure Monitor?  
 • What is a **Log Analytics Workspace** and why is it used?  
 • What is **Application Insights** and how is it used for application monitoring?  
 • How do you configure **Diagnostic Settings** in Azure?  
 • What are **retention policies** in Log Analytics?  
 • What is the difference between **metrics-based** and **log-based alerts**?  
 • How do you monitor the health of **AKS clusters** and nodes?  
 • What are the common **use cases** of Azure Monitor in production?  
 • How do you monitor Azure resources like VMs (CPU, memory, disk)?  
 • What tools do you use for centralized monitoring and logging?

---

## 🔷 **2\. KQL (Kusto Query Language)**

 • What is **KQL (Kusto Query Language)**?  
 • Where do we use KQL in Azure?  
 • How do you query **WAF logs** using KQL?  
 • What is the difference between `summarize`, `project`, and `extend` in KQL?  
 • What are the best practices for writing KQL queries for performance?  
 • Can you give an example KQL query to fetch blocked WAF requests?  
 • Have you used KQL in **Log Analytics** or **Azure Sentinel**?

---

## 🔷 **3\. Alerts & Automation**

 • What is an **Action Group** in Azure Alerts?  
 • How do you create an **alert rule** in Azure Monitor?  
 • How do you send Azure Monitor alerts to **email**, **Teams**, or **Webhook**?  
 • What are **custom alert rules** and when do you create them?  
 • How do you use alert severity levels (Critical, Warning, Informational)?  
 • How do you handle **auto-remediation** of triggered alerts?

---

## 🔷 **4\. Prometheus & Grafana (Container Monitoring)**

 • What is **Prometheus** and how does it work?  
 • How do you integrate **Prometheus with AKS**?  
 • What kind of metrics can Prometheus collect from containers and pods?  
 • What is **Grafana** and how is it used for visualization?  
 • What are the main features of Grafana?  
 • How do you set up **dashboards** in Grafana?  
 • How do you connect Grafana with **Prometheus data source**?  
 • What are the **benefits of using Prometheus and Grafana together**?  
 • How do you create **custom dashboards** in Grafana?  
 • How do you configure **alert rules** in Grafana?  
 • Can you explain your **Prometheus \+ Grafana** monitoring setup for AKS?

---

## 🔷 **5\. Azure Defender / Security Center / Sentinel**

 • What is **Microsoft Defender for Cloud** (formerly Azure Security Center)?  
 • How does it help identify and remediate security vulnerabilities?  
 • How do you secure **Log Analytics Workspace**?  
 • What is **Azure Sentinel**, and how is it different from Azure Monitor?  
 • How do you configure **Key Vault logging**, and why is it important?  
 • What are **security alerts** in Defender for Cloud, and how do you handle them?  
 • How do you investigate and remediate alerts automatically?  
 • What are the key **security controls** you implement while designing Azure networks?

---

## 🔷 **6\. Backup, Recovery, and Disaster Recovery (DR)**

 • What is a **Backup Vault** in Azure?  
 • What is the difference between **Recovery Services Vault** and **Backup Vault**?  
 • How do you configure **VM backups** in Azure?  
 • How do you monitor and validate successful backups?  
 • How do you perform **VM restore** or **file-level recovery**?  
 • What is **Azure Site Recovery (ASR)** and how is it used for DR?  
 • What are **RPO** and **RTO** in Disaster Recovery planning?  
 • How do you perform **DR drills** in Azure?  
 • How do you manage **cross-region replication** for business continuity?

---

## 🔷 **7\. Cost Optimization & Governance**

 • What is **cost optimization** in Azure?  
 • What tools or strategies do you use for cost management (Cost Analysis, Budgets)?  
 • Have you used any **third-party tools** for cost monitoring?  
 • What is the **Azure Well-Architected Framework**?  
 • What are the **five pillars** of the Well-Architected Framework?  
 • How do you use **Azure Policy** for governance and compliance?  
 • How do you identify underutilized resources in Azure?  
 • How do you optimize storage, compute, and network costs?

---

## 🔷 **8\. SonarQube & Code Quality**

 • What is **SonarQube** and why is it used?  
 • How do you integrate SonarQube with **CI/CD pipelines** (Azure DevOps, Jenkins)?  
 • What are **Quality Gates** in SonarQube?  
 • How do you enforce **code coverage thresholds** in pipelines?  
 • How do you manage **static code analysis** and security scanning?  
 • What is the difference between **SonarQube** and **SonarCloud**?  
 • How do you configure **SonarQube extensions** in YAML pipelines?

---

## 🔷 **9\. Logging & Diagnostics**

 • What are **diagnostic settings** and why are they important?  
 • How do you enable diagnostic logs for **Application Gateway**, **Key Vault**, or **Storage Accounts**?  
 • How do you monitor **WAF blocked requests** in Log Analytics?  
 • What tools are used for **centralized logging** (e.g., Log Analytics, ELK, Splunk)?  
 • What is a **log retention policy**, and how do you manage it?  
 • How do you troubleshoot backend health issues using logs?  
 • How do you analyze Activity Logs for security auditing?  
 • What are **resource-specific logs**, and where are they stored?

---

## 🔷 **10\. Best Practices & Real-World Scenarios**

 • How do you ensure **end-to-end observability** for your environment?  
 • How do you maintain **security posture** for your resources?  
 • How do you configure alerting for **backend down** or **high latency**?  
 • How do you automate backup validation and report compliance?  
 • How do you monitor and remediate **high CPU utilization** alerts automatically?  
 • How do you link Azure Monitor to **ServiceNow** for ticketing?  
 • How do you ensure **governance and security compliance** across environments?  
 • What are your **recommended best practices** for monitoring in production?

# **Linux**

## 🔷 **1\. Linux Fundamentals**

 • What is **Linux**, and why is it preferred in **DevOps environments**?  
 • What are the **major Linux distributions** you’ve worked with (RHEL, Ubuntu, CentOS, Oracle Linux)?  
 • What are the **basic Linux commands** you use daily?  
 • How do you check the **current kernel version** and OS details?  
 • What’s the difference between **absolute** and **relative paths**?  
 • How do you check the **uptime** and **load average** of a server?  
 • What are **runlevels** and how are they used in Linux?

---

## 🔷 **2\. File System & Disk Management**

 • How do you check **disk space** and **usage** (`df -h`, `du -sh`, etc.)?  
 • Is there any flag you use with the `df` command?  
 • How do you find **large files** or directories consuming space?  
 • How do you **mount** a file system or volume?  
 • How do you mount an **external drive** or **file share (NFS/SMB)**?  
 • How do you **extend a volume** using **LVM** (Logical Volume Manager)?  
 • How do you verify a mount point is persistent after reboot?  
 • What’s the difference between `/etc/fstab` and manual mount?

---

## 🔷 **3\. Process, Memory & Performance Monitoring**

 • How do you check **CPU** and **memory utilization** in Linux?  
 • What commands do you use for **performance monitoring**? (`top`, `htop`, `vmstat`, `free`, etc.)  
 • What is the difference between **top**, **htop**, and **iotop**?  
 • How do you monitor **running processes**?  
 • How do you identify which process is consuming the most memory or CPU?  
 • How do you check **which process is using a specific port**? (`netstat`, `ss`, `lsof`)  
 • How do you troubleshoot **high CPU** or **RAM usage**?  
 • How do you check **network connectivity** between two servers? (`ping`, `traceroute`, `nc`, etc.)

---

## 🔷 **4\. Services & System Management**

 • What is `systemctl`, and how is it used?  
 • How do you **start, stop, restart, enable, or disable** a service?  
 • How do you check if a service is enabled at boot?  
 • How do you create your own **custom service** in Linux?  
 • How do you check **system logs** under `/var/log`?  
 • How do you troubleshoot boot or service startup failures using logs?

---

## 🔷 **5\. Users, Permissions & Security**

 • How do you **add or remove users** in Linux?  
 • How do you modify or reset a user’s **password**?  
 • How do you check user’s **groups** and **permissions**?  
 • What is the difference between **chmod**, **chown**, and **chgrp**?  
 • How do you set **file and directory permissions** recursively?  
 • What are **SUID**, **SGID**, and **sticky bits**?  
 • How do you **secure SSH access** on a Linux server?  
 • How do you disable **root login** or password-based SSH authentication?  
 • What are best practices to **harden SSH security** (port change, key pairs, fail2ban, etc.)?

---

## 🔷 **6\. Shell Scripting & Automation**

 • What is a **shell script**, and how do you create one?  
 • How do you make a script **executable** and run it?  
 • What is the difference between `>` and `>>` in shell **redirection**?  
 • How do you use **variables** in shell scripts?  
 • What are **conditional statements** and **loops** in bash?  
 • How do you handle **input arguments** in shell scripts?  
 • How do you **schedule tasks** with **cron jobs**?  
 • How do you list, add, and remove **crontab** entries?  
 • What is the difference between **cron** and **systemd timers**?  
 • How do you **automate patching** using shell scripts or Ansible?  
 • How do you **log script output** and send it via email or Slack?

---

## 🔷 **7\. PowerShell & Azure Automation**

 • What is **PowerShell**, and where do you use it in **Azure Automation**?  
 • What is the difference between **Bash** and **PowerShell scripting**?  
 • How do you schedule a **PowerShell script** in Windows or Azure?  
 • How do you connect to **Azure using Azure CLI** on Linux?  
 • In PowerShell, how would you write a script to **retrieve the public IP** automatically?  
 • How do you handle credentials securely in PowerShell scripts?  
 • How do you integrate PowerShell scripts with **Azure DevOps pipelines**?

---

## 🔷 **8\. Logs & Troubleshooting**

 • How do you analyze **system logs** (`/var/log/messages`, `/var/log/syslog`, `/var/log/secure`)?  
 • How do you view and filter logs using `grep`, `tail`, `awk`, or `less`?  
 • How do you check **dmesg** logs for kernel or hardware issues?  
 • How do you troubleshoot **SSH connection issues**?  
 • How do you identify failed login attempts or suspicious activity?  
 • How do you create a log rotation policy for large log files?

---

## 🔷 **9\. Python & Cross-Platform Automation (Optional)**

 • Write a **Python script** to back up all files older than 30 days.  
 • How would you handle logging, retries, and email alerts in Python automation?  
 • How can Python integrate with Azure CLI or Terraform for automation?  
 • How would you schedule and monitor a Python automation job in Linux?

---

## 🔷 **10\. Real-World Scenarios**

 • Have you worked on **Linux patching** and **user management**?  
 • How do you monitor performance metrics of 50+ servers simultaneously?  
 • How do you extend volumes in Oracle Linux or RHEL production VMs?  
 • How do you secure SSH for production servers (key-based, MFA)?  
 • How do you integrate system health scripts into **Azure Monitor** or **Prometheus**?  
 • How do you automate patching and reboot validation across multiple servers?  
 • How do you design a Linux automation framework combining **Bash \+ Ansible \+ Azure CLI**?

# **Behavioral / Project Discussion / Scenario Based / General / HR Questions**

## 🔷 **1\. Personal Introduction & Role Summary**

 • Tell me about yourself and your **DevOps experience**.  
 • Introduce yourself — describe your **roles and responsibilities**.  
 • What are your **day-to-day activities** in your current project?  
 • How do you **get tasks assigned** (Jira, ServiceNow, or other tools)?  
 • How do you **communicate updates** to your team, developers, and testers?  
 • What was your **biggest achievement** in your last project?  
 • What was your **biggest learning** from your DevOps journey?  
 • What made you interested in **DevOps as a career**?

---

## 🔷 **2\. Project Explanation & Tools**

 • Describe your **current or previous project** in detail.  
 • What **DevOps tools** are you using and why?  
 • Explain your **project architecture** (Azure, Terraform, AKS, etc.).  
 • What environments do you manage (DEV, UAT, PROD)?  
 • What **branching strategy** do you follow, and why?  
 • How do you **integrate Terraform with pipelines** in your project?  
 • Which tools do you use for **tracking, collaboration, and documentation** (Jira, Confluence, etc.)?  
 • How do you ensure **CI/CD pipelines are secure** and compliant?

---

## 🔷 **3\. Production Challenges & Troubleshooting**

 • What **challenges have you faced** in production deployments?  
 • Describe a **production issue** you handled under pressure.  
 • How do you **handle deployment failures** in CI/CD?  
 • Tell me about a **mistake** you made in production and how you handled it.  
 • How do you **troubleshoot** a pipeline or infrastructure issue?  
 • If a **VM shows running but RDP not working**, how will you resolve it?  
 • How do you **troubleshoot VM startup** or connectivity issues?  
 • Describe your approach to solving **complex issues** during downtime.

---

## 🔷 **4\. Automation, Scripting & Optimization**

 • Describe a situation where you **automated a manual process**.  
 • What scripting languages have you used (**Bash, PowerShell, Python**)?  
 • How do you **automate patching** in Linux or Windows VMs?  
 • How do you **ensure cost optimization** in Azure environments?  
 • What steps do you take for **resource utilization monitoring**?  
 • How do you ensure **post-deployment validation** after automation?  
 • How do you make your **pipelines efficient** (faster, secure, and reusable)?

---

## 🔷 **5\. Collaboration & Communication**

 • How do you **coordinate with developers and testers** during release?  
 • How do you **handle escalations** from clients or managers?  
 • How do you manage **cross-team dependencies**?  
 • What is your approach to **working with multiple teams** (Dev, QA, Ops, Network)?  
 • How do you **handle team conflicts or disagreements**?  
 • How do you **convince stakeholders** to adopt a new tool or process?  
 • How do you ensure **transparency and communication** during critical releases?

---

## 🔷 **6\. Leadership, Responsibility & Pressure Handling**

 • How do you **prioritize tasks** during a sprint?  
 • How do you handle **tight deadlines** or unplanned releases?  
 • How do you ensure **deployment quality** under pressure?  
 • What actions do you take to **maintain stability** after a major change?  
 • How do you **handle on-call or escalation** situations?  
 • How do you ensure **proper documentation** of your work?  
 • Describe a time when you had to **learn a new tool quickly** to solve a business problem.

---

## 🔷 **7\. Security, Compliance & Governance**

 • How do you ensure **security compliance** in your DevOps pipeline?  
 • How do you handle **access control** and **permissions** (RBAC, IAM, etc.)?  
 • What’s your process for managing **secrets, credentials, or tokens** securely?  
 • How do you **monitor policy compliance** in Azure environments?  
 • What are your steps to ensure **audit readiness** in CI/CD?  
 • How do you implement **change management** for sensitive deployments?

---

## 🔷 **8\. Behavioral & Soft Skills**

 • Tell me about a time you **handled pressure calmly**.  
 • How do you **balance multiple priorities**?  
 • Describe a time when you **disagreed with your manager** — how did you handle it?  
 • What motivates you the most at work?  
 • How do you **maintain focus and quality** during repetitive work?  
 • Tell me about a **time you collaborated remotely** or across time zones.

---

## 🔷 **9\. HR & Career-Related Questions**

 • Why do you want to **switch from your current organization**?  
 • What are your **career goals** for the next 2–3 years?  
 • What kind of **company culture** do you prefer?  
 • What are your **salary expectations**?  
 • Are you **open to relocation or hybrid work**?  
 • How do you **evaluate job satisfaction** beyond salary?  
 • Why should we hire you instead of other candidates?  
 • Are you currently working somewhere?  
 • What was the **reason for leaving** your last organization?  
 • Do you have any **questions for us**?

---

## 🔷 **10\. Scenario-Based Problem Solving**

 • A developer accidentally deleted a resource from production — how would you fix and prevent this permanently?  
 • You found an API failing due to a WAF rule — how do you approach the fix?  
 • You deployed a new version and noticed performance degradation — what steps do you take?  
 • How would you plan a **zero-downtime deployment** for a production application?  
 • You need to **migrate** VMs to the latest SKU due to Azure retirement — what’s your plan?  
 • A pipeline is failing due to a service connection issue — how would you debug it?  
 • Your manager asks to reduce monthly Azure cost by 20% — how do you proceed?

# **Miscellaneous / Unclassified Topics**

## 🔷 **1\. Cloud Fundamentals**

 • What is **Cloud Computing** in simple terms?  
 • What are the different **cloud service models** — IaaS, PaaS, SaaS?  
 • What is the difference between **Public Cloud**, **Private Cloud**, and **Hybrid Cloud**?  
 • What are the **advantages of cloud computing**?  
 • What is the difference between **compute, network, and storage** services in cloud?  
 • What are all the **Azure compute and network services** you’ve worked on?  
 • What is a **Function App**, and when is it used?  
 • What is the purpose of a **NAT Gateway** or **Internet Gateway**?  
 • What are the **redundancy options** in Azure for high availability?  
 • How do you ensure **high availability** and **fault tolerance** in the cloud?

---

## 🔷 **2\. Infrastructure as Code (IaC) & Automation**

 • What is **Infrastructure as Code (IaC)**?  
 • What is the difference between **Terraform** and **ARM templates**?  
 • What is **Infrastructure Drift**, and how do you manage it?  
 • How do you handle **state management** in IaC tools?  
 • How will you **pass custom scripts** to VMs during creation?  
 • What is the difference between **local-exec** and **remote-exec** provisioners?  
 • Explain **modular approach** in Terraform — how child and parent modules interact.  
 • What is the **strategy** to update IaC for a new feature without impacting production?

---

## 🔷 **3\. CI/CD Concepts**

 • What is **Continuous Integration** vs **Continuous Deployment**?  
 • What are **Environment Variables** in CI/CD pipelines?  
 • What is a **Rollback** and why is it important?  
 • What are **Artifacts** and what is an **Artifact Repository**?  
 • Why do we use **multiple stages** in pipelines?  
 • How do you **promote changes from lower to production environment** safely?  
 • How do you handle **secrets** and **configurations** across pipeline environments?  
 • What is the difference between **Self-hosted** and **Microsoft-hosted agents**?  
 • Why do you prefer **Self-hosted agents** over Microsoft-hosted?

---

## 🔷 **4\. Deployment Strategies & Testing**

 • What is **Blue-Green Deployment** strategy?  
 • What is **Canary Deployment**?  
 • How do you ensure **zero-downtime deployments**?  
 • What is **Load Testing** vs **Stress Testing**?  
 • Name some **testing tools** you have used (JMeter, Postman, Selenium, etc.).  
 • What is **SAST** and **DAST** in security testing?  
 • How do you test and validate infrastructure post-deployment?  
 • How do you troubleshoot if your **web app is slow** — list 5 checks you’ll perform.

---

## 🔷 **5\. DevSecOps & Security**

 • What is **DevSecOps** and why is it important?  
 • How do you integrate **security scanning** in CI/CD pipelines?  
 • What is the difference between **SAST** (Static) and **DAST** (Dynamic) analysis?  
 • How do you **secure private databases** or storage accounts in Azure?  
 • How do you give **Reader access** for Cosmos DB, and what’s the role name?  
 • How do you ensure **DB access is private** and not publicly accessible?  
 • What are the best practices for **key management** and **network isolation**?  
 • What are the **five pillars of the Azure Well-Architected Framework**?

---

## 🔷 **6\. Architecture, Networking & Azure Setup**

 • What is a **Hub-and-Spoke Architecture** and which services are required to build it?  
 • When you set up a hub-spoke model, what **key components** must you deploy?  
 • What is **Azure CNI Overlay**, and why do we use it?  
 • Why **Azure CNI Overlay** and not other networking models?  
 • What is an **API Gateway**, and how does it differ from Application Gateway?  
 • What are **Private Endpoints** and how do they improve security?  
 • What is a **NAT Gateway**, and how does it differ from a Load Balancer?  
 • What is the **purpose of a Function App** in Azure architecture?  
 • What **message services** have you used in Azure (Event Grid, Service Bus, etc.)?  
 • How do you manage **access and permissions** across Azure subscriptions?

---

## 🔷 **7\. Monitoring, Performance & Optimization**

 • How do you **troubleshoot performance issues** in microservices?  
 • What are the **key metrics** to monitor for production health?  
 • How do you identify and fix **bottlenecks** in web applications?  
 • How do you integrate **monitoring and alerting** for performance degradation?  
 • Can we configure **auto-scaling vertically** in Azure?  
 • How do you ensure **cost optimization** for resources?  
 • What tools do you use for **performance testing** (e.g., K6, JMeter)?  
 • What is the difference between **horizontal and vertical scaling**?

---

## 🔷 **8\. Reliability & SRE Concepts**

 • What is **Site Reliability Engineering (SRE)**?  
 • What are the **main principles** of SRE (SLI, SLO, SLA)?  
 • How do you handle **incident response** and **postmortems**?  
 • What tools do you use for **monitoring reliability**?  
 • How do you ensure **high uptime** and **error budget tracking**?  
 • How do you automate recovery or failover?  
 • What is **observability**, and how is it different from monitoring?

---

## 🔷 **9\. Cloud Tools, Commands & Troubleshooting**

 • What command would you use to **find files larger than 100MB** in Linux?  
 • What access level do you have in your Azure environment?  
 • What are the **resources you’ve created** in your project?  
 • How do you **update latest GitHub changes** to previous branches?  
 • How do you **handle technologies** you haven’t worked on before?  
 • How do you **approach tight deadlines** and limited resources?  
 • Describe the **most challenging technical issue** you’ve solved.

---

## 🔷 **10\. Miscellaneous Scenarios & Behavioral Add-ons**

 • How would you explain **Cloud vs On-Premises** to a non-technical person?  
 • How would you **work with cross-functional teams** under tight deadlines?  
 • How would you handle a **technology shift** in an ongoing project?  
 • What would be your **deployment strategy** to ensure production stability?  
 • What are **key DevOps tools** you’ve used in the last two years?  
 • Describe a time when you had to work with **limited resources** but ensured delivery.  
 • Describe a **critical production issue** and how you resolved it end-to-end.  
 • Tell me about your **project contributions** and impact in your last role.

# **Monitoring, Cost & FinOps**

## 🔷 **1\. Monitoring Overview & Tools**

 • What **monitoring tools** have you worked on (Azure Monitor, Log Analytics, Grafana, Prometheus, etc.)?  
 • What is **Azure Monitor**, and how does it collect metrics and logs?  
 • What is the purpose of a **Log Analytics Workspace**?  
 • How do you configure **diagnostic settings** to capture activity logs efficiently?  
 • How do you monitor **VMs, Application Gateway, AKS, or Storage Accounts** in Azure?  
 • What is **Application Insights**, and how is it used for end-to-end tracing?  
 • What’s the difference between **metrics-based alerts** and **log-based alerts**?  
 • How do you reduce the **data ingestion and retention costs** in Azure Monitor?  
 • What are best practices to avoid **duplicate or unnecessary logs**?  
 • How do you correlate logs across multiple services in **Log Analytics**?

---

## 🔷 **2\. FinOps – Cloud Cost Optimization & Governance**

 • Have you been involved in **FinOps activities** to help clients save cloud costs?  
 • What is **FinOps**, and why is it important in cloud cost governance?  
 • How do you track and analyze **monthly Azure spend** for various subscriptions?  
 • What tools or dashboards do you use for **cost visibility** (Cost Management \+ Billing, Azure Advisor, etc.)?  
 • How do you allocate costs between **projects, environments, or departments**?  
 • How do you use **tags** and **resource groups** for effective cost tracking?  
 • What is the use of **Azure Budgets**, and how do you configure alerts for threshold breaches?  
 • How do you ensure **cost accountability** within DevOps teams?  
 • What are **Reserved Instances** and **Savings Plans** in Azure?  
 • How do you choose between **Pay-As-You-Go** and **Reserved** pricing models?  
 • How do you automate **cost reports** or set **alerts for anomalies**?

---

## 🔷 **3\. Cost Optimization of Azure Infrastructure**

 • What are your strategies for **cost optimization** in Azure infrastructure?  
 • How do you decide on the **right VM size and SKU** for workloads?  
 • How do you utilize **auto-scaling** and **shutdown schedules** for non-prod environments?  
 • How do you identify and remove **idle or underutilized resources**?  
 • What is the benefit of using **Azure Spot VMs**?  
 • How do you optimize **storage costs** (access tiers, lifecycle management, redundancy)?  
 • How do you optimize **networking costs** (bandwidth, NAT Gateway, data egress)?  
 • How do you monitor **unattached disks, orphaned IPs, and unused PIPs**?  
 • How do you use **Azure Advisor recommendations** for cost savings?  
 • How do you optimize **backup and monitoring costs**?

---

## 🔷 **4\. Monitoring Cost Optimization Scenarios**

 • After implementing **Azure Monitor**, the cost increased — how would you optimize it **without disabling monitoring**?  
 → Use **custom log ingestion filters**, **adjust data retention periods**, and **route logs selectively** to save costs.  
 → Enable **sampling** in Application Insights.  
 → Store only **critical logs** and **shorten retention for low-importance metrics**.  
 → Use **Log Analytics workspace per environment** instead of centralized heavy ingestion.  
 → Review **metric alert frequency** and disable **verbose diagnostic settings** on test resources.

• Your company’s **cloud costs are rising rapidly** — how would you reduce them **without affecting performance**?  
 → Identify **top spenders** via Azure Cost Management dashboard.  
 → Implement **auto-shutdown policies** for idle VMs.  
 → Use **scaling policies** to match actual usage.  
 → Move non-critical workloads to **lower regions** with cheaper pricing.  
 → Switch to **reserved instances** or **spot instances** for predictable workloads.  
 → Audit and delete **unused resources**, **stale snapshots**, and **unattached NICs**.  
 → Review **load balancers, public IPs, NAT gateways** for optimization.  
 → Use **FinOps dashboards** to continuously track cost trends and take preventive action.

---

## 🔷 **5\. Agent Management & Pipeline Performance vs Cost**

 • How many **agents** would you create to run 50 pipelines or applications as fast as possible while minimizing cost?  
 → Optimize by creating a **balanced number of self-hosted agents** (e.g., 6–10 high-performance agents instead of 50).  
 → Use **parallel job configurations** rather than multiple agents.  
 → Assign **dedicated agent pools** for critical workloads and **shared pools** for low-priority jobs.  
 → Schedule **build concurrency** to reduce idle time.  
 → Use **spot VMs or ephemeral agents** for cost-effective scaling.

• How do you ensure **pipeline performance** while maintaining **cost efficiency**?  
 → Cache dependencies and use **container-based agents**.  
 → Use **incremental builds** and **parallel stages**.  
 → Monitor pipeline duration and **optimize tasks** that consume the most time.  
 → Regularly review **unused or long-running jobs**.

---

## 🔷 **6\. Governance, Automation & Reporting**

 • How do you automate **cost and utilization reports** for stakeholders?  
 • How do you ensure **governance and policy enforcement** using Azure Policy?  
 • How do you handle **multi-subscription cost governance**?  
 • How do you **forecast** cloud costs for upcoming projects?  
 • What are the best **FinOps KPIs** (unit cost per app, utilization rate, reserved instance coverage)?  
 • How do you enable **chargeback or showback models** for cost transparency?  
 • How do you integrate **monitoring dashboards** with **cost dashboards** (Grafana, Power BI, etc.)?