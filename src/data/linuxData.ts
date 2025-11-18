export interface QuestionAnswer {
  question: string;
  answer?: string;      // plain text or markdown
  answerHtml?: string;  // rich HTML version
}

export const linuxSections = [
  {
    title: "1. Linux Fundamentals",
    questions: [
      {
        question: "What is Linux, and why is it preferred in DevOps environments?",
        answerHtml: `<div class="answer-rich">
        <h3>🐧 <strong>Linux — Foundation of DevOps</strong></h3>
        <p><strong>Linux</strong> is an open-source operating system built around the Unix model. It’s widely used in servers, containers, and cloud systems because of its flexibility and stability.</p>
        <p><strong>Why preferred in DevOps:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Open-source & cost-effective — no licensing overhead.</li>
          <li>Highly stable and secure for production workloads.</li>
          <li>Supports automation tools (Ansible, Jenkins, Terraform, Docker, etc.).</li>
          <li>Powerful CLI for scripting and system control.</li>
          <li>Lightweight and ideal for containerized environments (Docker/K8s).</li>
        </ul>
        <p><strong>In practice:</strong> Almost all CI/CD agents, app servers, and container nodes in my projects run on RHEL or Ubuntu Linux.</p>
      </div>`
      },
      {
        question: "What are the major Linux distributions you’ve worked with (RHEL, Ubuntu, CentOS, Oracle Linux)?",
        answerHtml: `<div class="answer-rich">
        <h3>📦 <strong>Linux Distributions I've Worked With</strong></h3>
        <p><strong>Common distributions I’ve used:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>RHEL (Red Hat Enterprise Linux):</strong> Used for production servers and enterprise workloads — stable, secure, and supported.</li>
          <li><strong>Ubuntu:</strong> Preferred for development, Jenkins build servers, and Docker hosts.</li>
          <li><strong>CentOS:</strong> Legacy systems and lab environments (RHEL-compatible).</li>
          <li><strong>Oracle Linux:</strong> Used in projects requiring Oracle DB integration with UEK kernel optimization.</li>
        </ul>
        <p><strong>Example:</strong> I currently manage RHEL 8.10 mail and monitoring servers, and Ubuntu VMs for CI/CD build agents.</p>
      </div>`
      },
      {
        question: "What are the basic Linux commands you use daily?",
        answerHtml: `<div class="answer-rich">
        <h3>🧰 <strong>Common Linux Commands I Use Regularly</strong></h3>
        <ul style="margin-left:1.2rem; columns: 2;">
          <li><code>ls, cd, pwd</code> — navigation</li>
          <li><code>cat, less, tail -f</code> — view logs/configs</li>
          <li><code>df -h, du -sh</code> — check disk usage</li>
          <li><code>top, htop, free -m</code> — system resource monitoring</li>
          <li><code>ps aux | grep</code> — process lookup</li>
          <li><code>systemctl start|stop|status</code> — service control</li>
          <li><code>journalctl -xe</code> — check system logs</li>
          <li><code>vi, nano</code> — file editing</li>
          <li><code>scp, rsync, ssh</code> — file transfers & remote management</li>
          <li><code>chmod, chown</code> — permissions</li>
        </ul>
        <p><strong>In practice:</strong> I often use <code>tail -f /var/log/messages</code> or <code>journalctl</code> during troubleshooting.</p>
      </div>`
      },
      {
        question: "How do you check the current kernel version and OS details?",
        answerHtml: `<div class="answer-rich">
        <h3>🧠 <strong>Checking Kernel & OS Information</strong></h3>
        <p><strong>Commands:</strong></p>
        <pre><code># Kernel version
uname -r

# Detailed kernel + architecture
uname -a

# OS release details
cat /etc/os-release

# RHEL-specific
cat /etc/redhat-release</code></pre>
        <p><strong>Example Output:</strong> <code>Linux 4.18.0-553.el8.x86_64</code> (RHEL 8.10).</p>
        <p><strong>In use:</strong> I verify OS version before applying patches or when validating package compatibility during upgrades.</p>
      </div>`
      },
      {
        question: "What’s the difference between absolute and relative paths?",
        answerHtml: `<div class="answer-rich">
        <h3>📂 <strong>Absolute vs Relative Paths</strong></h3>
        <p><strong>Absolute path:</strong> Starts from root (<code>/</code>) and specifies full directory path.</p>
        <pre><code>/var/log/nginx/access.log</code></pre>
        <p><strong>Relative path:</strong> Defined with respect to current working directory (<code>pwd</code>).</p>
        <pre><code>../nginx/access.log</code></pre>
        <p><strong>Difference:</strong> Absolute path always points to the same file regardless of current directory; relative path changes based on where you are.</p>
        <p><strong>In practice:</strong> I use absolute paths in scripts to avoid ambiguity during cron or CI/CD executions.</p>
      </div>`
      },
      {
        question: "How do you check the uptime and load average of a server?",
        answerHtml: `<div class="answer-rich">
        <h3>🕒 <strong>Checking Uptime & Load Average</strong></h3>
        <p><strong>Commands:</strong></p>
        <pre><code>uptime
top
cat /proc/loadavg</code></pre>
        <p><strong>Sample Output:</strong></p>
        <pre><code> 14:22:10 up 15 days,  3:10,  2 users,  load average: 0.45, 0.33, 0.27</code></pre>
        <ul style="margin-left:1.2rem;">
          <li><strong>uptime:</strong> Shows system running time since last boot.</li>
          <li><strong>load average:</strong> Shows average system load over 1, 5, and 15 minutes.</li>
        </ul>
        <p><strong>In practice:</strong> I monitor load averages to identify CPU-bound processes or detect overloaded build agents.</p>
      </div>`
      },
      {
        question: "What are runlevels and how are they used in Linux?",
        answerHtml: `<div class="answer-rich">
        <h3>🔁 <strong>Understanding Linux Runlevels</strong></h3>
        <p>Runlevels define the state or mode in which a Linux system operates (multi-user, graphical, rescue, etc.).</p>
        <p><strong>Traditional SysV Runlevels:</strong></p>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Runlevel</th><th>Mode</th></tr>
          <tr><td>0</td><td>Shutdown</td></tr>
          <tr><td>1</td><td>Single user mode (maintenance)</td></tr>
          <tr><td>3</td><td>Multi-user (no GUI)</td></tr>
          <tr><td>5</td><td>Multi-user with GUI</td></tr>
          <tr><td>6</td><td>Reboot</td></tr>
        </table>
        <p><strong>In systemd (modern distros):</strong> Targets replaced runlevels — e.g., <code>multi-user.target</code> ≈ runlevel 3.</p>
        <p><strong>Commands:</strong></p>
        <pre><code>systemctl get-default
systemctl set-default multi-user.target</code></pre>
        <p><strong>In practice:</strong> I use runlevel targets for headless servers (CLI-only) and rescue targets for recovery operations.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "2. File System & Disk Management",
    questions: [
      {
        question: "How do you check disk space and usage (df -h, du -sh, etc.)?",
        answerHtml: `<div class="answer-rich">
        <h3>💽 <strong>Checking Disk Space & Usage</strong></h3>
        <p><strong>Common commands:</strong></p>
        <pre><code># Check overall disk usage
df -h

# Check specific directory usage
du -sh /var/log

# Check top folders consuming space
du -sh * | sort -h</code></pre>
        <p><strong>Explanation:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><code>df -h</code>: Shows mounted filesystems and available space in human-readable format.</li>
          <li><code>du -sh</code>: Shows size of a specific directory or file.</li>
          <li><code>sort -h</code>: Sorts by human-readable size — useful for finding heavy folders.</li>
        </ul>
        <p><strong>In practice:</strong> I run these when disk alerts trigger on servers or CI/CD agents to locate log or dump directories consuming space.</p>
      </div>`
      },
      {
        question: "Is there any flag you use with the df command?",
        answerHtml: `<div class="answer-rich">
        <h3>📊 <strong>Useful df Command Flags</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><code>-h</code> → Human-readable output (GB/MB).</li>
          <li><code>-T</code> → Show filesystem type (e.g., ext4, xfs, nfs).</li>
          <li><code>-i</code> → Display inode usage (useful when file count is high).</li>
          <li><code>-x tmpfs</code> → Exclude certain filesystem types (like tmpfs).</li>
        </ul>
        <pre><code>df -hT         # Size + Type
df -hi         # Human + inode usage</code></pre>
        <p><strong>In practice:</strong> I use <code>df -hT</code> for capacity planning and <code>df -hi</code> when applications fail due to inode exhaustion (many small files).</p>
      </div>`
      },
      {
        question: "How do you find large files or directories consuming space?",
        answerHtml: `<div class="answer-rich">
        <h3>🕵️‍♂️ <strong>Finding Large Files & Directories</strong></h3>
        <p><strong>Commands I use:</strong></p>
        <pre><code># Find top directories consuming space
du -ah / | sort -rh | head -20

# Find files larger than 500MB
find / -type f -size +500M -exec ls -lh {} \; | sort -k 5 -h</code></pre>
        <p><strong>Quick Tip:</strong> Run from the partition level (e.g., /var, /opt) instead of root for faster results.</p>
        <p><strong>In practice:</strong> I regularly use this to identify oversized logs in /var/log or large Docker images under /var/lib/docker.</p>
      </div>`
      },
      {
        question: "How do you mount a file system or volume?",
        answerHtml: `<div class="answer-rich">
        <h3>📂 <strong>Mounting a Filesystem</strong></h3>
        <p><strong>Steps:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Create a directory as a mount point:<br><code>mkdir /mnt/data</code></li>
          <li>Mount the device:<br><code>mount /dev/sdb1 /mnt/data</code></li>
          <li>Verify mount:<br><code>df -hT</code> or <code>mount | grep data</code></li>
        </ol>
        <p><strong>Unmount:</strong> <code>umount /mnt/data</code></p>
        <p><strong>In practice:</strong> I mount new disks during storage expansion or for backup targets before setting them as persistent mounts via <code>/etc/fstab</code>.</p>
      </div>`
      },
      {
        question: "How do you mount an external drive or file share (NFS/SMB)?",
        answerHtml: `<div class="answer-rich">
        <h3>🌐 <strong>Mounting Network File Shares</strong></h3>
        <p><strong>For NFS share:</strong></p>
        <pre><code>sudo mkdir /mnt/nfs
sudo mount -t nfs server:/data /mnt/nfs</code></pre>
        <p><strong>For SMB/CIFS share:</strong></p>
        <pre><code>sudo mkdir /mnt/smb
sudo mount -t cifs //server/share /mnt/smb -o username=user,password=pass,vers=3.0</code></pre>
        <p><strong>Persistent Mount (via /etc/fstab):</strong></p>
        <pre><code>server:/data  /mnt/nfs  nfs  defaults  0  0</code></pre>
        <p><strong>In practice:</strong> I use NFS mounts between build servers and artifact storage; for Windows shares, SMB with credentials or keytab-based auth.</p>
      </div>`
      },
      {
        question: "How do you extend a volume using LVM (Logical Volume Manager)?",
        answerHtml: `<div class="answer-rich">
        <h3>🧱 <strong>Extending Volume using LVM</strong></h3>
        <p><strong>Steps I follow:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Check existing volume groups and logical volumes:<br><code>vgs</code> and <code>lvs</code></li>
          <li>Extend LV by size:<br><code>lvextend -L +5G /dev/mapper/vg_data-lv_app</code></li>
          <li>Resize filesystem:<br><code>resize2fs /dev/mapper/vg_data-lv_app</code></li>
          <li>Verify space:<br><code>df -h</code></li>
        </ol>
        <p><strong>Note:</strong> For XFS filesystems, use <code>xfs_growfs /mountpoint</code> instead of <code>resize2fs</code>.</p>
        <p><strong>In practice:</strong> I often use this method to extend log or app partitions dynamically when disk usage crosses 80% threshold.</p>
      </div>`
      },
      {
        question: "How do you verify a mount point is persistent after reboot?",
        answerHtml: `<div class="answer-rich">
        <h3>🔁 <strong>Verifying Persistent Mounts</strong></h3>
        <p><strong>Check /etc/fstab:</strong></p>
        <pre><code>cat /etc/fstab</code></pre>
        <p>or test manually without reboot:</p>
        <pre><code>mount -a</code></pre>
        <p>If the mount works and no error appears — it’s properly configured for persistence.</p>
        <p><strong>In practice:</strong> I always validate <code>mount -a</code> after editing fstab to avoid boot-time issues due to syntax errors.</p>
      </div>`
      },
      {
        question: "What’s the difference between /etc/fstab and manual mount?",
        answerHtml: `<div class="answer-rich">
        <h3>📘 <strong>/etc/fstab vs Manual Mount</strong></h3>
        <p><strong>/etc/fstab:</strong> File that defines persistent mounts — automatically mounts disks/shares at boot time.</p>
        <p><strong>Manual Mount:</strong> Temporary — mount lasts only until reboot.</p>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Aspect</th><th>/etc/fstab</th><th>manual mount</th></tr>
          <tr><td>Persistence</td><td>Permanent (auto after reboot)</td><td>Temporary</td></tr>
          <tr><td>Usage</td><td>System-level setup</td><td>Ad-hoc or troubleshooting</td></tr>
          <tr><td>Command</td><td>mount -a (auto)</td><td>mount /dev/sdb1 /data</td></tr>
        </table>
        <p><strong>In practice:</strong> I use manual mounts for quick testing, then add the verified entry in <code>/etc/fstab</code> once confirmed stable.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "3. Process, Memory & Performance Monitoring",
    questions: [
      {
        question: "How do you check CPU and memory utilization in Linux?",
        answerHtml: `<div class="answer-rich">
        <h3>🧠 <strong>Checking CPU & Memory Utilization</strong></h3>
        <p><strong>Common commands:</strong></p>
        <pre><code># Real-time CPU & memory usage
top

# Summary of memory
free -h

# CPU usage over time
mpstat 1

# Memory & swap usage
vmstat -s | grep -E 'memory|swap'</code></pre>
        <p><strong>In practice:</strong> I use <code>top</code> for real-time troubleshooting and <code>vmstat</code> for historical trend during high-load analysis.</p>
      </div>`
      },
      {
        question: "What commands do you use for performance monitoring? (top, htop, vmstat, free, etc.)",
        answerHtml: `<div class="answer-rich">
        <h3>📊 <strong>Performance Monitoring Commands</strong></h3>
        <p><strong>Tools I regularly use:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>top:</strong> Live CPU, memory, and process overview.</li>
          <li><strong>htop:</strong> Interactive version of top with color UI and sorting.</li>
          <li><strong>vmstat:</strong> Virtual memory, swap, IO, and system stats.</li>
          <li><strong>iostat:</strong> Disk I/O performance by device.</li>
          <li><strong>free -h:</strong> Memory usage summary.</li>
          <li><strong>sar:</strong> Historical CPU, memory, and I/O usage reports.</li>
        </ul>
        <pre><code>iostat -xz 1   # Extended disk I/O every second
vmstat 2       # CPU & memory stats every 2s
sar -u 5 5     # Average CPU utilization sample</code></pre>
        <p><strong>In practice:</strong> I use <code>sar</code> logs from sysstat package to diagnose intermittent CPU spikes.</p>
      </div>`
      },
      {
        question: "What is the difference between top, htop, and iotop?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Difference Between top, htop & iotop</strong></h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Tool</th><th>Purpose</th><th>Highlights</th></tr>
          <tr><td><strong>top</strong></td><td>Default process monitor</td><td>CPU, memory, load avg — CLI-based</td></tr>
          <tr><td><strong>htop</strong></td><td>Enhanced version of top</td><td>Interactive UI, tree view, sorting, color-coded</td></tr>
          <tr><td><strong>iotop</strong></td><td>Monitors disk I/O per process</td><td>Shows read/write IOPS, throughput per PID</td></tr>
        </table>
        <p><strong>In practice:</strong> I run <code>htop</code> for quick diagnosis, and <code>iotop</code> when high I/O wait is observed in <code>top</code> output.</p>
      </div>`
      },
      {
        question: "How do you monitor running processes?",
        answerHtml: `<div class="answer-rich">
        <h3>🧮 <strong>Monitoring Active Processes</strong></h3>
        <p><strong>Common commands:</strong></p>
        <pre><code>ps aux          # List all processes
ps -ef | grep nginx
pgrep -l nginx  # Find process by name
pstree -p       # Show parent-child hierarchy
top or htop     # Real-time view</code></pre>
        <p><strong>In practice:</strong> I use <code>ps aux --sort=-%mem | head</code> to quickly identify memory-heavy processes during alert triage.</p>
      </div>`
      },
      {
        question: "How do you identify which process is consuming the most memory or CPU?",
        answerHtml: `<div class="answer-rich">
        <h3>🔥 <strong>Finding High CPU or Memory Processes</strong></h3>
        <p><strong>Commands:</strong></p>
        <pre><code># Sort by CPU
ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%cpu | head

# Sort by Memory
ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head

# Real-time view
top -o %CPU</code></pre>
        <p><strong>In practice:</strong> During CPU alerts, I first check <code>top</code> for the process consuming >70%, then correlate PID with app logs to identify root cause (like infinite loops or heavy queries).</p>
      </div>`
      },
      {
        question: "How do you check which process is using a specific port? (netstat, ss, lsof)",
        answerHtml: `<div class="answer-rich">
        <h3>🌐 <strong>Check Process Using a Port</strong></h3>
        <p><strong>Commands:</strong></p>
        <pre><code># Using netstat
netstat -tulnp | grep 8080

# Using ss (modern replacement)
ss -tulnp | grep 8080

# Using lsof
lsof -i :8080</code></pre>
        <p><strong>In practice:</strong> I prefer <code>ss</code> since it’s faster and pre-installed on newer distros — handy when multiple apps compete for same port (e.g., Jenkins, Nginx).</p>
      </div>`
      },
      {
        question: "How do you troubleshoot high CPU or RAM usage?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Troubleshooting High CPU or RAM Usage</strong></h3>
        <p><strong>Step-by-step approach:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Check overall system load:</strong> <code>uptime</code>, <code>top</code>, <code>vmstat 2</code>.</li>
          <li><strong>Identify culprit process:</strong> <code>ps -eo pid,cmd,%cpu,%mem --sort=-%cpu | head</code>.</li>
          <li><strong>Inspect memory leaks:</strong> <code>pmap -x &lt;PID&gt;</code> or <code>smem -p</code>.</li>
          <li><strong>Analyze I/O wait:</strong> <code>iostat -xz 1</code>.</li>
          <li><strong>Check logs:</strong> Application or system logs under <code>/var/log</code>.</li>
          <li><strong>Restart or scale:</strong> If persistent, restart service or scale horizontally (VM/Container).</li>
        </ol>
        <p><strong>Example:</strong> Once found high CPU caused by an unindexed SQL query in a Java app — fixed via query optimization and JVM memory tuning.</p>
      </div>`
      },
      {
        question: "How do you check network connectivity between two servers? (ping, traceroute, nc, etc.)",
        answerHtml: `<div class="answer-rich">
        <h3>🌍 <strong>Testing Network Connectivity</strong></h3>
        <p><strong>Basic tools:</strong></p>
        <pre><code># Check reachability
ping &lt;IP or hostname&gt;

# Trace network hops
traceroute &lt;destination&gt;

# Check specific port connectivity
nc -zv &lt;IP&gt; 22
telnet &lt;IP&gt; 443

# DNS resolution
nslookup example.com</code></pre>
        <p><strong>In practice:</strong> I use <code>nc -zv</code> to test outbound ports (like 443 or 1433) during pipeline agent setup or when validating private endpoint connectivity in Azure.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "4. Services & System Management",
    questions: [
      {
        question: "What is systemctl, and how is it used?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>systemctl — Core Service Management Tool</strong></h3>
        <p><strong>systemctl</strong> is the command-line utility to control and manage services, units, and the overall system state in Linux systems that use <strong>systemd</strong>.</p>
        <p><strong>Common uses:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Start/stop/restart services.</li>
          <li>Enable or disable services at boot.</li>
          <li>Check system and service status.</li>
          <li>Manage system targets (runlevels).</li>
        </ul>
        <pre><code>systemctl status nginx
systemctl start nginx
systemctl stop nginx
systemctl restart nginx
systemctl enable nginx</code></pre>
        <p><strong>In practice:</strong> I use <code>systemctl</code> daily to manage Nginx, Docker, Jenkins, and custom app services on RHEL and Ubuntu servers.</p>
      </div>`
      },
      {
        question: "How do you start, stop, restart, enable, or disable a service?",
        answerHtml: `<div class="answer-rich">
        <h3>🔧 <strong>Managing Services with systemctl</strong></h3>
        <p><strong>Commands:</strong></p>
        <pre><code># Start a service
sudo systemctl start nginx

# Stop a service
sudo systemctl stop nginx

# Restart a service
sudo systemctl restart nginx

# Enable service at boot
sudo systemctl enable nginx

# Disable service from auto-start
sudo systemctl disable nginx</code></pre>
        <p><strong>Verification:</strong></p>
        <pre><code>systemctl is-enabled nginx
systemctl status nginx</code></pre>
        <p><strong>In practice:</strong> Before restarting critical services like Docker or Jenkins, I always check dependencies and health using <code>systemctl list-dependencies</code> to avoid chain failures.</p>
      </div>`
      },
      {
        question: "How do you check if a service is enabled at boot?",
        answerHtml: `<div class="answer-rich">
        <h3>🚀 <strong>Check Service Auto-start on Boot</strong></h3>
        <p><strong>Command:</strong></p>
        <pre><code>systemctl is-enabled docker</code></pre>
        <p><strong>Output:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><code>enabled</code> → service will start automatically at boot.</li>
          <li><code>disabled</code> → not auto-started.</li>
          <li><code>static</code> → required by another unit, not directly enabled.</li>
        </ul>
        <p><strong>Alternative:</strong></p>
        <pre><code>systemctl list-unit-files | grep enabled</code></pre>
        <p><strong>In practice:</strong> I verify service enablement after new deployments, especially for monitoring agents, Docker, or app daemons, to ensure they persist after reboot.</p>
      </div>`
      },
      {
        question: "How do you create your own custom service in Linux?",
        answerHtml: `<div class="answer-rich">
        <h3>🧱 <strong>Creating a Custom Service</strong></h3>
        <p><strong>Steps:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Create a unit file under <code>/etc/systemd/system/</code>, e.g., <code>/etc/systemd/system/myapp.service</code>.</li>
          <li>Add the following content:</li>
        </ol>
        <pre><code>[Unit]
Description=My Custom Python App
After=network.target

[Service]
ExecStart=/usr/bin/python3 /opt/myapp/app.py
Restart=always
User=ec2-user
WorkingDirectory=/opt/myapp

[Install]
WantedBy=multi-user.target</code></pre>
        <ol start="3" style="margin-left:1.2rem;">
          <li>Reload systemd and enable service:</li>
        </ol>
        <pre><code>sudo systemctl daemon-reload
sudo systemctl enable myapp
sudo systemctl start myapp</code></pre>
        <p><strong>In practice:</strong> I create custom services for app daemons and background scripts (like log collectors or webhook listeners) so they auto-restart if they crash.</p>
      </div>`
      },
      {
        question: "How do you check system logs under /var/log?",
        answerHtml: `<div class="answer-rich">
        <h3>🧾 <strong>Checking System Logs</strong></h3>
        <p><strong>Common log locations:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><code>/var/log/messages</code> — system and service logs (RHEL/CentOS).</li>
          <li><code>/var/log/syslog</code> — general logs (Ubuntu/Debian).</li>
          <li><code>/var/log/secure</code> — authentication logs.</li>
          <li><code>/var/log/dmesg</code> — kernel logs.</li>
          <li><code>/var/log/nginx/</code>, <code>/var/log/httpd/</code> — web server logs.</li>
        </ul>
        <p><strong>Useful commands:</strong></p>
        <pre><code>sudo tail -f /var/log/messages
sudo journalctl -xe
sudo grep "error" /var/log/syslog</code></pre>
        <p><strong>In practice:</strong> I use <code>journalctl -xe</code> to diagnose service start failures and <code>tail -f</code> when monitoring real-time logs during deployments.</p>
      </div>`
      },
      {
        question: "How do you troubleshoot boot or service startup failures using logs?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Troubleshooting Boot or Service Startup Failures</strong></h3>
        <p><strong>Approach I follow:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Check the failing service status:</li>
          <pre><code>systemctl status myapp.service</code></pre>
          <li>Read detailed error logs:</li>
          <pre><code>journalctl -u myapp.service -xe</code></pre>
          <li>Verify dependencies and targets:</li>
          <pre><code>systemctl list-dependencies myapp.service</code></pre>
          <li>Inspect boot logs if issue occurs during startup:</li>
          <pre><code>dmesg | tail -20
journalctl -b</code></pre>
          <li>Fix issues like wrong ExecStart path, permission errors, or missing dependencies.</li>
        </ol>
        <p><strong>Example:</strong> Once a Python app service failed due to incorrect virtualenv path — fixed the <code>ExecStart</code> entry and reloaded daemon, service started fine.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "5. Users, Permissions & Security",
    questions: [
      {
        question: "How do you add or remove users in Linux?",
        answerHtml: `<div class="answer-rich">
        <h3>👤 <strong>Adding & Removing Users</strong></h3>
        <p><strong>Add new user:</strong></p>
        <pre><code>sudo useradd -m -s /bin/bash devuser
sudo passwd devuser</code></pre>
        <p><strong>Remove a user:</strong></p>
        <pre><code>sudo userdel devuser
sudo userdel -r devuser   # remove user and home directory</code></pre>
        <p><strong>In practice:</strong> I create dedicated system users for CI/CD or app services (e.g., <code>jenkins</code>, <code>nginx</code>) instead of running under root — improves security and audit clarity.</p>
      </div>`
      },
      {
        question: "How do you modify or reset a user’s password?",
        answerHtml: `<div class="answer-rich">
        <h3>🔑 <strong>Modifying or Resetting Passwords</strong></h3>
        <p><strong>Reset user password:</strong></p>
        <pre><code>sudo passwd devuser</code></pre>
        <p><strong>Force password change on next login:</strong></p>
        <pre><code>sudo passwd -e devuser</code></pre>
        <p><strong>Lock or unlock user account:</strong></p>
        <pre><code>sudo usermod -L devuser    # lock account
sudo usermod -U devuser    # unlock</code></pre>
        <p><strong>In practice:</strong> I lock service accounts instead of deleting them to retain file ownership mappings and logs.</p>
      </div>`
      },
      {
        question: "How do you check user’s groups and permissions?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Checking User Groups & Permissions</strong></h3>
        <p><strong>Commands:</strong></p>
        <pre><code># Check user's primary and secondary groups
id devuser

# List all groups user belongs to
groups devuser

# List group memberships of all users
getent group</code></pre>
        <p><strong>File ownership & permissions:</strong></p>
        <pre><code>ls -l /home/devuser</code></pre>
        <p><strong>In practice:</strong> I often validate <code>id</code> and <code>groups</code> output before giving sudo or NFS share access to users.</p>
      </div>`
      },
      {
        question: "What is the difference between chmod, chown, and chgrp?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>chmod vs chown vs chgrp</strong></h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Command</th><th>Purpose</th><th>Example</th></tr>
          <tr><td><strong>chmod</strong></td><td>Change file or directory permissions</td><td><code>chmod 755 script.sh</code></td></tr>
          <tr><td><strong>chown</strong></td><td>Change file owner</td><td><code>chown devuser script.sh</code></td></tr>
          <tr><td><strong>chgrp</strong></td><td>Change group ownership</td><td><code>chgrp developers script.sh</code></td></tr>
        </table>
        <p><strong>In practice:</strong> I use <code>chown -R appuser:appgroup /opt/app</code> to ensure app directories have proper ownership before deployment.</p>
      </div>`
      },
      {
        question: "How do you set file and directory permissions recursively?",
        answerHtml: `<div class="answer-rich">
        <h3>📁 <strong>Recursive Permission Setting</strong></h3>
        <p><strong>Commands:</strong></p>
        <pre><code># Change permissions recursively
chmod -R 755 /opt/app

# Change ownership recursively
chown -R devuser:developers /opt/app</code></pre>
        <p><strong>Note:</strong> Use recursion carefully — changing ownership on system paths can break dependencies.</p>
        <p><strong>In practice:</strong> Before recursive changes, I test on specific subpaths (<code>/opt/app/logs</code>) and validate with <code>ls -ld</code>.</p>
      </div>`
      },
      {
        question: "What are SUID, SGID, and sticky bits?",
        answerHtml: `<div class="answer-rich">
        <h3>🧱 <strong>Special Permission Bits</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>SUID (Set User ID):</strong> File runs with the permission of the file owner.<br><code>-rwsr-xr-x</code> → Example: <code>/usr/bin/passwd</code>.</li>
          <li><strong>SGID (Set Group ID):</strong> File executes with group privileges; new files in directory inherit group.<br><code>chmod g+s /shared</code>.</li>
          <li><strong>Sticky Bit:</strong> Only file owner can delete files inside a directory.<br><code>chmod +t /tmp</code>.</li>
        </ul>
        <p><strong>In practice:</strong> I ensure <code>/tmp</code> and shared folders have sticky bit set to prevent accidental deletion by other users.</p>
      </div>`
      },
      {
        question: "How do you secure SSH access on a Linux server?",
        answerHtml: `<div class="answer-rich">
        <h3>🔐 <strong>Securing SSH Access</strong></h3>
        <p><strong>Steps I follow:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Create a new user and assign sudo privileges (avoid root login).</li>
          <li>Generate SSH key pair (<code>ssh-keygen</code>) and copy public key to <code>~/.ssh/authorized_keys</code>.</li>
          <li>Restrict SSH to specific users or groups using <code>AllowUsers</code> or <code>AllowGroups</code> in <code>/etc/ssh/sshd_config</code>.</li>
          <li>Change default SSH port from 22 to custom (e.g., 2222).</li>
          <li>Disable password-based logins and root access.</li>
        </ol>
        <pre><code>sudo vi /etc/ssh/sshd_config
PermitRootLogin no
PasswordAuthentication no
Port 2222
AllowUsers devuser</code></pre>
        <p>Then restart SSH: <code>sudo systemctl restart sshd</code></p>
        <p><strong>In practice:</strong> I always test new SSH rules in a separate session to avoid locking myself out.</p>
      </div>`
      },
      {
        question: "How do you disable root login or password-based SSH authentication?",
        answerHtml: `<div class="answer-rich">
        <h3>🚫 <strong>Disabling Root Login & Password SSH Access</strong></h3>
        <p><strong>Edit SSH configuration:</strong></p>
        <pre><code>sudo vi /etc/ssh/sshd_config</code></pre>
        <p>Set the following parameters:</p>
        <pre><code>PermitRootLogin no
PasswordAuthentication no</code></pre>
        <p>Then restart service:</p>
        <pre><code>sudo systemctl restart sshd</code></pre>
        <p><strong>In practice:</strong> I use key-based access via <code>~/.ssh/authorized_keys</code> for all admins and enforce MFA on jump servers for additional security.</p>
      </div>`
      },
      {
        question: "What are best practices to harden SSH security (port change, key pairs, fail2ban, etc.)?",
        answerHtml: `<div class="answer-rich">
        <h3>🛡️ <strong>SSH Hardening Best Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Disable root login and password authentication.</li>
          <li>Use key-based authentication (<code>ssh-keygen</code>).</li>
          <li>Change default SSH port (<code>Port 2222</code>).</li>
          <li>Restrict access using <code>AllowUsers</code> or <code>AllowGroups</code>.</li>
          <li>Enable <strong>Fail2Ban</strong> to block brute-force attempts.</li>
          <li>Use <strong>firewalld</strong> or <strong>iptables</strong> to allow only trusted IPs.</li>
          <li>Implement <strong>MFA</strong> (Google Authenticator or Azure AD SSH integration).</li>
        </ul>
        <p><strong>In practice:</strong> I combine SSH key auth with Fail2Ban and non-default port — reduces brute-force attempts by >90% on public-facing servers.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "6. Shell Scripting & Automation",
    questions: [
      {
        question: "What is a shell script, and how do you create one?",
        answerHtml: `<div class="answer-rich">
        <h3>🐚 <strong>What is a Shell Script?</strong></h3>
        <p>A <strong>shell script</strong> is a text file containing a sequence of Linux commands executed together. It automates repetitive tasks like deployments, backups, monitoring, or patching.</p>
        <p><strong>To create a shell script:</strong></p>
        <pre><code>#!/bin/bash
echo "System uptime:"
uptime</code></pre>
        <p><strong>Steps:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Create a file → <code>vi myscript.sh</code></li>
          <li>Add commands & shebang (<code>#!/bin/bash</code>)</li>
          <li>Make it executable → <code>chmod +x myscript.sh</code></li>
          <li>Run → <code>./myscript.sh</code></li>
        </ol>
        <p><strong>In practice:</strong> I use shell scripts for automating server patching, system checks, and Jenkins job triggers.</p>
      </div>`
      },
      {
        question: "How do you make a script executable and run it?",
        answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Making a Script Executable</strong></h3>
        <pre><code># Give execute permission
chmod +x backup.sh

# Run using relative path
./backup.sh

# Or specify shell explicitly
bash backup.sh</code></pre>
        <p><strong>In practice:</strong> I prefer <code>#!/bin/bash -e</code> at the top — ensures script stops on first error (useful in automation pipelines).</p>
      </div>`
      },
      {
        question: "What is the difference between > and >> in shell redirection?",
        answerHtml: `<div class="answer-rich">
        <h3>📤 <strong>Shell Output Redirection</strong></h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Operator</th><th>Description</th><th>Example</th></tr>
          <tr><td><code>&gt;</code></td><td>Overwrite output to file</td><td><code>echo "Hello" > file.txt</code></td></tr>
          <tr><td><code>&gt;&gt;</code></td><td>Append output to file</td><td><code>echo "World" >> file.txt</code></td></tr>
        </table>
        <p><strong>In practice:</strong> I use <code>&gt;&gt;</code> in log scripts to append daily job results, preventing overwrite.</p>
      </div>`
      },
      {
        question: "How do you use variables in shell scripts?",
        answerHtml: `<div class="answer-rich">
        <h3>📦 <strong>Using Variables in Shell Scripts</strong></h3>
        <pre><code>#!/bin/bash
NAME="Ritesh"
echo "Hello &dollar;NAME, welcome to DevOps!"</code></pre>
        <p><strong>Best practices:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Use uppercase for global vars.</li>
          <li>Wrap variable in <code>&dollar;{VAR}</code> for clarity.</li>
          <li>Use <code>export VAR=value</code> to make it available to child processes.</li>
        </ul>
        <p><strong>In practice:</strong> I inject environment variables (e.g., build paths, versions) dynamically in CI/CD scripts.</p>
      </div>`
      },
      {
        question: "What are conditional statements and loops in bash?",
        answerHtml: `<div class="answer-rich">
        <h3>🔁 <strong>Conditionals & Loops</strong></h3>
        <p><strong>If-else example:</strong></p>
        <pre><code>if [ -f /etc/passwd ]; then
  echo "File exists"
else
  echo "File not found"
fi</code></pre>
        <p><strong>For loop example:</strong></p>
        <pre><code>for i in {1..3}; do
  echo "Iteration &dollar;i"
done</code></pre>
        <p><strong>While loop example:</strong></p>
        <pre><code>count=1
while [ &dollar;count -le 3 ]; do
  echo "Count: &dollar;count"
  ((count++))
done</code></pre>
        <p><strong>In practice:</strong> I use loops for batch user creation, service restarts, or iterating through log files.</p>
      </div>`
      },
      {
        question: "How do you handle input arguments in shell scripts?",
        answerHtml: `<div class="answer-rich">
        <h3>💡 <strong>Handling Input Arguments</strong></h3>
        <p><strong>Example:</strong></p>
        <pre><code>#!/bin/bash
echo "Script name: &dollar;0"
echo "First argument: &dollar;1"
echo "Second argument: &dollar;2"</code></pre>
        <p><strong>With condition:</strong></p>
        <pre><code>if [ &dollar;# -lt 2 ]; then
  echo "Usage: &dollar;0 &lt;source&gt; &lt;destination&gt;"
  exit 1
fi</code></pre>
        <p><strong>In practice:</strong> I pass arguments like environment (dev/prod) or version tag into deployment scripts triggered by pipelines.</p>
      </div>`
      },
      {
        question: "How do you schedule tasks with cron jobs?",
        answerHtml: `<div class="answer-rich">
        <h3>🕒 <strong>Scheduling Tasks with Cron</strong></h3>
        <p><strong>Syntax:</strong> <code>* * * * * command</code></p>
        <pre><code># Example: Run backup daily at 2 AM
0 2 * * * /opt/scripts/backup.sh &gt;&gt; /var/log/backup.log 2&gt;&1</code></pre>
        <p><strong>Command:</strong> <code>crontab -e</code> to edit user’s cron jobs.</p>
        <p><strong>In practice:</strong> I schedule log rotation, cleanup, and patch validation scripts using cron for lightweight automation.</p>
      </div>`
      },
      {
        question: "How do you list, add, and remove crontab entries?",
        answerHtml: `<div class="answer-rich">
        <h3>🧾 <strong>Managing Crontab Entries</strong></h3>
        <p><strong>Commands:</strong></p>
        <pre><code># List all cron jobs
crontab -l

# Edit or add new cron jobs
crontab -e

# Remove all cron jobs for user
crontab -r</code></pre>
        <p><strong>System-wide cron jobs:</strong> Located under <code>/etc/cron.d</code> or <code>/etc/cron.daily</code>.</p>
        <p><strong>In practice:</strong> I maintain cron jobs via config management (Ansible templates) to keep consistency across environments.</p>
      </div>`
      },
      {
        question: "What is the difference between cron and systemd timers?",
        answerHtml: `<div class="answer-rich">
        <h3>⏱️ <strong>Cron vs systemd Timers</strong></h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Feature</th><th>cron</th><th>systemd timer</th></tr>
          <tr><td>Purpose</td><td>Simple scheduled jobs</td><td>Advanced scheduling with dependencies</td></tr>
          <tr><td>Logging</td><td>Minimal (maillog)</td><td>Integrated with <code>journalctl</code></td></tr>
          <tr><td>Management</td><td><code>crontab -e</code></td><td><code>systemctl list-timers</code></td></tr>
          <tr><td>Dependency control</td><td>No</td><td>Yes (start after network, etc.)</td></tr>
        </table>
        <p><strong>In practice:</strong> I prefer <strong>systemd timers</strong> for production scripts — easier logging, dependency handling, and monitoring.</p>
      </div>`
      },
      {
        question: "How do you automate patching using shell scripts or Ansible?",
        answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Automating Patching</strong></h3>
        <p><strong>Using Shell Script (RHEL example):</strong></p>
        <pre><code>#!/bin/bash
yum clean all
yum -y update
reboot</code></pre>
        <p><strong>Using Ansible Playbook:</strong></p>
        <pre><code>- hosts: all
  become: yes
  tasks:
    - name: Apply all updates
      yum:
        name: "*"
        state: latest
    - name: Reboot if required
      reboot:</code></pre>
        <p><strong>In practice:</strong> I prefer Ansible for patch automation — provides logs, rollback control, and can run on multiple servers parallelly.</p>
      </div>`
      },
      {
        question: "How do you log script output and send it via email or Slack?",
        answerHtml: `<div class="answer-rich">
        <h3>📬 <strong>Logging & Notifications</strong></h3>
        <p><strong>Redirect output to log:</strong></p>
        <pre><code>./deploy.sh &gt;&gt; /var/log/deploy.log 2&gt;&1</code></pre>
        <p><strong>Send log via email:</strong></p>
        <pre><code>mail -s "Backup Completed" admin@company.com &lt; /var/log/backup.log</code></pre>
        <p><strong>Send log to Slack (using webhook):</strong></p>
        <pre><code>curl -X POST -H 'Content-type: application/json' \
--data '{"text":"✅ Backup completed successfully"}' \
https://hooks.slack.com/services/TOKEN/ID</code></pre>
        <p><strong>In practice:</strong> I integrate critical automation jobs with Slack webhooks — gives real-time alerts on job success or failure.</p>
      </div>`
      }
    ]
  }
  ,
{
  title: "7. PowerShell & Azure Automation",
  questions: [
    {
      question: "What is PowerShell, and where do you use it in Azure Automation?",
      answerHtml: `<div class="answer-rich">
        <h3>🔧 <strong>PowerShell — Automation & Scripting for Windows + Azure</strong></h3>
        <p>PowerShell is a task automation and configuration management framework — shell + scripting language — built on .NET. Modern PowerShell (PowerShell Core / pwsh) is cross-platform and used widely for Windows automation and Azure management via the <code>Az</code> modules.</p>
        <p><strong>Common Azure uses:</strong> Automating resource provisioning (VMs, networking), runbooks in <strong>Azure Automation</strong>, configuration tasks, retrieving/reporting inventory, and invoking remediation scripts from pipelines or Logic Apps.</p>
        <p><strong>In practice:</strong> I use PowerShell runbooks to automate patch windows, rotate secrets, and run scheduled infrastructure checks that call Azure REST/APIs or Az cmdlets.</p>
      </div>`
    },
    {
      question: "What is the difference between Bash and PowerShell scripting?",
      answerHtml: `<div class="answer-rich">
        <h3>⚖️ <strong>Bash vs PowerShell — Key Differences</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Data model:</strong> PowerShell uses .NET objects (rich typed objects) — easier manipulation of complex outputs. Bash works with plain text streams.</li>
          <li><strong>Cross-platform:</strong> Bash is native on Linux; PowerShell Core (pwsh) is cross-platform (Windows, Linux, macOS).</li>
          <li><strong>Cmdlets vs utilities:</strong> PowerShell provides cmdlets (Get-Item, Get-Process). Bash relies on Unix utilities (grep, awk, sed).</li>
          <li><strong>Scripting style:</strong> PowerShell has structured error handling (<code>try/catch</code>) and advanced piping of objects. Bash relies on exit codes and text parsing.</li>
        </ul>
        <p><strong>In practice:</strong> I use Bash for lightweight Linux automation in containers and PowerShell for Windows/Azure tasks where object output (Az module) simplifies scripting and reduces parsing errors.</p>
      </div>`
    },
    {
      question: "How do you schedule a PowerShell script in Windows or Azure?",
      answerHtml: `<div class="answer-rich">
        <h3>🕒 <strong>Scheduling PowerShell Scripts</strong></h3>
        <p><strong>Windows (Task Scheduler):</strong></p>
        <pre><code># Create a scheduled task via GUI or using schtasks
schtasks /Create /SC DAILY /TN "DailyScript" /TR "C:\\scripts\\task.ps1" /ST 02:00</code></pre>
        <p><strong>Azure:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Azure Automation Runbook:</strong> Create a PowerShell runbook, publish it and link a schedule. Good for credentials stored in Automation or Key Vault.</li>
          <li><strong>Azure Functions (PowerShell):</strong> Use timer trigger for serverless scheduling.</li>
          <li><strong>Logic Apps:</strong> Use Recurrence trigger and call an Azure Automation runbook or webhook that executes the script.</li>
        </ul>
        <pre><code># Example: link schedule to runbook in portal or via Az CLI
az automation runbook create --resource-group rg --automation-account acct --name MyRunbook --type PowerShell</code></pre>
        <p><strong>In practice:</strong> I prefer Azure Automation for enterprise runbooks (credential handling, logging, retries); Functions for lightweight or event-driven tasks.</p>
      </div>`
    },
    {
      question: "How do you connect to Azure using Azure CLI on Linux?",
      answerHtml: `<div class="answer-rich">
        <h3>🔐 <strong>Connecting to Azure from Linux (az cli)</strong></h3>
        <p><strong>Interactive login:</strong></p>
        <pre><code>az login
# If multiple subscriptions:
az account set --subscription "SUBSCRIPTION_ID_OR_NAME"</code></pre>
        <p><strong>Service principal (automation / CI):</strong></p>
        <pre><code>az login --service-principal -u "APP_ID" -p "CLIENT_SECRET" --tenant "TENANT_ID"
az account set --subscription "SUBSCRIPTION_ID"</code></pre>
        <p><strong>Device code (when interactive machine has no browser):</strong></p>
        <pre><code>az login --use-device-code</code></pre>
        <p><strong>In practice:</strong> CI/CD uses service principal credentials stored in pipeline secrets or use managed identities on runners/VMs to avoid secrets.</p>
      </div>`
    },
    {
      question: "In PowerShell, how would you write a script to retrieve the public IP automatically?",
      answerHtml: `<div class="answer-rich">
        <h3>🌐 <strong>Retrieve Public IP in PowerShell</strong></h3>
        <p><strong>Option A — Call a public IP service (simple):</strong></p>
        <pre><code>&dollar;publicIp = (Invoke-RestMethod -Uri 'https://ifconfig.co/json').ip
Write-Output "Public IP: &dollar;publicIp"</code></pre>
        <p><strong>Option B — Using Azure Az module (fetch Azure Public IP resource):</strong></p>
        <pre><code>Install-Module -Name Az -Scope CurrentUser -Force
Connect-AzAccount
&dollar;pip = Get-AzPublicIpAddress -ResourceGroupName 'rg-name' -Name 'myPublicIP'
&dollar;ip = &dollar;pip.IpAddress
Write-Output "Azure Public IP: &dollar;ip"</code></pre>
        <p><strong>Notes:</strong> Use option B when you want the IP assigned to an Azure resource; option A is useful for VM's outbound public IP detection.</p>
      </div>`
    },
    {
      question: "How do you handle credentials securely in PowerShell scripts?",
      answerHtml: `<div class="answer-rich">
        <h3>🔐 <strong>Secure Credential Handling</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Managed Identity:</strong> Use system-assigned or user-assigned managed identities for Azure VMs/Functions to authenticate without secrets: <code>Connect-AzAccount -Identity</code>.</li>
          <li><strong>Azure Key Vault:</strong> Store secrets/certificates in Key Vault and retrieve at runtime:</li>
        </ol>
        <pre><code># Example: Get secret from Key Vault
&dollar;secret = Get-AzKeyVaultSecret -VaultName 'kvName' -Name 'sp-secret'
&dollar;plain = &dollar;secret.SecretValueText</code></pre>
        <ol start="3" style="margin-left:1.2rem;">
          <li><strong>Azure Automation credential assets:</strong> Use built-in credential store for runbooks.</li>
          <li><strong>Avoid plaintext:</strong> Never hardcode secrets in scripts or repository. Use secure pipeline variables or Key Vault references in pipelines.</li>
        </ol>
        <p><strong>In practice:</strong> I deploy runbooks that use managed identities + Key Vault access policies to fetch secrets at runtime — eliminates secret sprawl and simplifies rotation.</p>
      </div>`
    },
    {
      question: "How do you integrate PowerShell scripts with Azure DevOps pipelines?",
      answerHtml: `<div class="answer-rich">
        <h3>🔁 <strong>Integrating PowerShell with Azure DevOps</strong></h3>
        <p><strong>Inline or file-based PowerShell tasks in YAML:</strong></p>
        <pre><code>- task: PowerShell@2
  displayName: 'Run PowerShell script'
  inputs:
    targetType: 'filePath'      # or 'inline'
    filePath: 'scripts/deploy.ps1'
    pwsh: true
    azureSubscription: 'MyServiceConnection'  # when using azurePowerShell task</code></pre>
        <p><strong>Options:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Use <code>AzurePowerShell@5</code> task to run Az cmdlets with a service connection.</li>
          <li>Store credentials/secrets in pipeline library or link Key Vault variable group and reference them as variables.</li>
          <li>Prefer managed identities on self-hosted agents / VMSS to avoid storing service principal secrets."""
        </ul>
        <p><strong>Example — Key Vault integration via pipeline variable:</strong></p>
        <pre><code>variables:
  - group: 'kv-dev-secrets'   # variable group linked to Key Vault

steps:
- task: PowerShell@2
  inputs:
    targetType: 'filePath'
    filePath: 'scripts/run.ps1'
    pwsh: true
  env:
    CLIENT_SECRET: &dollar;(my-secret-from-kv)</code></pre>
        <p><strong>In practice:</strong> I keep PowerShell scripts in repo, use service connections for Az auth, and pull sensitive values from Key Vault at runtime — ensures secure, auditable automation.</p>
      </div>`
    }
  ]
}
,
{
  title: "8. Logs & Troubleshooting",
  questions: [
    {
      question: "How do you analyze system logs (/var/log/messages, /var/log/syslog, /var/log/secure)?",
      answerHtml: `<div class="answer-rich">
        <h3>🧾 <strong>Analyzing System Logs</strong></h3>
        <p><strong>Common log files:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><code>/var/log/messages</code> — General system and service logs (RHEL/CentOS).</li>
          <li><code>/var/log/syslog</code> — Equivalent system log for Ubuntu/Debian.</li>
          <li><code>/var/log/secure</code> — Authentication and SSH login activity.</li>
        </ul>
        <p><strong>Commands I use:</strong></p>
        <pre><code># View latest logs
sudo tail -n 50 /var/log/messages

# Filter specific service or keyword
sudo grep "sshd" /var/log/secure

# View logs in real-time
sudo tail -f /var/log/syslog</code></pre>
        <p><strong>In practice:</strong> I check these logs first whenever there’s service failure, login issue, or system crash — helps trace authentication errors or startup issues quickly.</p>
      </div>`
    },
    {
      question: "How do you view and filter logs using grep, tail, awk, or less?",
      answerHtml: `<div class="answer-rich">
        <h3>🔍 <strong>Viewing & Filtering Logs Efficiently</strong></h3>
        <p><strong>Common techniques:</strong></p>
        <pre><code># Show last 100 lines
tail -n 100 /var/log/messages

# Follow logs in real-time
tail -f /var/log/nginx/access.log

# Filter keyword
grep "ERROR" /var/log/app.log

# Filter multiple keywords
grep -E "ERROR|FAIL" /var/log/app.log

# Extract specific columns (awk)
awk '{print &dollar;1, &dollar;5, &dollar;9}' /var/log/httpd/access.log

# Paginated view
less /var/log/secure</code></pre>
        <p><strong>In practice:</strong> I often combine <code>grep</code> and <code>tail -f</code> to live-monitor logs for specific apps during deployments or debugging sessions.</p>
      </div>`
    },
    {
      question: "How do you check dmesg logs for kernel or hardware issues?",
      answerHtml: `<div class="answer-rich">
        <h3>🧠 <strong>Checking Kernel & Hardware Logs with dmesg</strong></h3>
        <p><strong>Commands:</strong></p>
        <pre><code># View recent kernel messages
dmesg | tail -20

# Filter for disk, memory or network errors
dmesg | grep -iE "error|fail|disk|eth"

# Save complete output for analysis
dmesg &gt; /tmp/dmesg.log</code></pre>
        <p><strong>Use case:</strong> Identify hardware issues such as I/O errors, NIC failures, or kernel panics.</p>
        <p><strong>In practice:</strong> I check <code>dmesg</code> right after reboot or when VMs crash — it reveals kernel driver issues or disk mount failures not logged in syslog.</p>
      </div>`
    },
    {
      question: "How do you troubleshoot SSH connection issues?",
      answerHtml: `<div class="answer-rich">
        <h3>🔐 <strong>Troubleshooting SSH Issues</strong></h3>
        <p><strong>Step-by-step approach:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Check connectivity:</strong> <code>ping &lt;server&gt;</code> or <code>nc -zv &lt;IP&gt; 22</code>.</li>
          <li><strong>Check SSH service:</strong> <code>systemctl status sshd</code> and restart if needed.</li>
          <li><strong>Inspect SSH logs:</strong></li>
          <pre><code>sudo tail -f /var/log/secure   # RHEL
sudo tail -f /var/log/auth.log # Ubuntu</code></pre>
          <li><strong>Verify permissions:</strong> Ensure <code>~/.ssh</code> is 700 and <code>authorized_keys</code> is 600.</li>
          <li><strong>Verbose mode:</strong> <code>ssh -vvv user@host</code> to debug authentication or key exchange issues.</li>
        </ol>
        <p><strong>In practice:</strong> 90% of SSH failures are due to key permission issues or firewall blocking port 22. I use verbose output + logs to pinpoint exactly where handshake fails.</p>
      </div>`
    },
    {
      question: "How do you identify failed login attempts or suspicious activity?",
      answerHtml: `<div class="answer-rich">
        <h3>🚨 <strong>Detecting Failed Logins & Intrusion Attempts</strong></h3>
        <p><strong>Commands:</strong></p>
        <pre><code># Check failed logins (RHEL)
grep "Failed password" /var/log/secure | tail -10

# For Ubuntu/Debian
grep "Failed password" /var/log/auth.log

# Check successful logins
grep "Accepted password" /var/log/secure

# Count failed attempts per IP
grep "Failed password" /var/log/secure | awk '{print &dollar;(NF-3)}' | sort | uniq -c | sort -nr</code></pre>
        <p><strong>In practice:</strong> I use this analysis to detect brute-force attempts, then block offending IPs using <code>fail2ban</code> or firewalld rules.</p>
      </div>`
    },
    {
      question: "How do you create a log rotation policy for large log files?",
      answerHtml: `<div class="answer-rich">
        <h3>♻️ <strong>Implementing Log Rotation</strong></h3>
        <p><strong>Logrotate configuration:</strong></p>
        <pre><code>/var/log/app.log {
    daily
    rotate 7
    compress
    delaycompress
    missingok
    notifempty
    create 0640 appuser adm
    postrotate
        systemctl reload app.service &gt; /dev/null 2&gt;&1 || true
    endscript
}</code></pre>
        <p><strong>Steps:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Create a file in <code>/etc/logrotate.d/app</code>.</li>
          <li>Customize rotation frequency (daily, weekly, size-based).</li>
          <li>Use <code>logrotate -f</code> to test configuration.</li>
        </ol>
        <p><strong>In practice:</strong> I configure log rotation for application and nginx logs to prevent disk filling — combine it with monitoring alerts when logs exceed threshold size.</p>
      </div>`
    }
  ]
}
,
{
  title: "9. Python & Cross-Platform Automation (Optional)",
  questions: [
    {
      question: "Write a Python script to back up all files older than 30 days.",
      answerHtml: `<div class="answer-rich">
        <h3>🗄️ <strong>Python Backup Script (Files older than 30 days)</strong></h3>
        <p>Below is a production-ready script that:</p>
        <ul style="margin-left:1.2rem;">
          <li>Finds files older than X days.</li>
          <li>Creates a timestamped compressed tarball preserving paths.</li>
          <li>Rotates old backups and logs operations.</li>
        </ul>
        <pre><code>#!/usr/bin/env python3
"""
backup_old_files.py
Backs up files older than N days from a source dir into a compressed tar.gz archive.
Usage: python3 backup_old_files.py --source /var/log --dest /backups --days 30
"""
import argparse
import logging
import os
import tarfile
import time
from pathlib import Path

# --- Basic logging setup ---
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s",
    handlers=[
        logging.FileHandler("/var/log/backup_old_files.log"),
        logging.StreamHandler()
    ]
)

def find_old_files(src: Path, days: int):
    cutoff = time.time() - (days * 86400)
    for root, dirs, files in os.walk(src):
        for f in files:
            p = Path(root) / f
            try:
                if p.stat().st_mtime < cutoff:
                    yield p
            except (FileNotFoundError, PermissionError):
                logging.warning("Cannot access %s", p)

def create_backup_archive(files, src: Path, dest: Path, days: int):
    dest.mkdir(parents=True, exist_ok=True)
    ts = time.strftime("%Y%m%d-%H%M%S")
    archive_name = dest / f"backup-{src.name}-{days}d-{ts}.tar.gz"
    logging.info("Creating archive: %s", archive_name)
    with tarfile.open(archive_name, "w:gz") as tar:
        for f in files:
            try:
                # store file with path relative to src root
                arcname = f.relative_to(src.parent)
                tar.add(f, arcname=arcname)
                logging.debug("Added %s as %s", f, arcname)
            except Exception as e:
                logging.exception("Failed to add %s to archive: %s", f, e)
    logging.info("Archive created: %s", archive_name)
    return archive_name

def rotate_backups(dest: Path, keep: int = 7):
    archives = sorted(dest.glob("backup-*.tar.gz"), key=os.path.getmtime, reverse=True)
    for old in archives[keep:]:
        try:
            logging.info("Removing old backup: %s", old)
            old.unlink()
        except Exception:
            logging.exception("Failed to remove backup: %s", old)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True, type=Path, help="Source directory to scan")
    parser.add_argument("--dest", required=True, type=Path, help="Destination directory for backups")
    parser.add_argument("--days", type=int, default=30, help="Files older than DAYS will be backed up")
    parser.add_argument("--keep", type=int, default=7, help="Number of backups to keep")
    args = parser.parse_args()

    logging.info("Backup started: source=%s dest=%s days=%d", args.source, args.dest, args.days)
    files = list(find_old_files(args.source, args.days))
    if not files:
        logging.info("No files older than %d days found in %s", args.days, args.source)
        return

    archive = create_backup_archive(files, args.source, args.dest, args.days)
    rotate_backups(args.dest, keep=args.keep)
    logging.info("Backup finished successfully: %s", archive)

if __name__ == "__main__":
    main()</code></pre>
        <p><strong>Crontab example (run daily at 2 AM):</strong></p>
        <pre><code># Run backup script daily
0 2 * * * /usr/bin/python3 /opt/scripts/backup_old_files.py --source /var/log --dest /mnt/backups --days 30 --keep 14</code></pre>
        <p><strong>Notes / best practices:</strong> Run as a dedicated service account with minimal privileges, store backups on separate disk or network share, and test restore procedure regularly.</p>
      </div>`
    },
    {
      question: "How would you handle logging, retries, and email alerts in Python automation?",
      answerHtml: `<div class="answer-rich">
        <h3>🔁 <strong>Logging, Retries & Alerts Pattern</strong></h3>
        <p><strong>Logging:</strong> Use the <code>logging</code> module with file + stdout handlers and rotate logs with <code>logging.handlers.RotatingFileHandler</code>. Include correlation IDs and timestamps.</p>
        <p><strong>Retries:</strong> Use a retry library like <code>tenacity</code> or implement exponential backoff. Example (tenacity):</p>
        <pre><code>from tenacity import retry, wait_exponential, stop_after_attempt

@retry(wait=wait_exponential(multiplier=1, min=2, max=60), stop=stop_after_attempt(5))
def flaky_call():
    # call external API or network service
    pass</code></pre>
        <p><strong>Email / Slack Alerts:</strong> - For email: use <code>smtplib</code> or integrate with SMTP relay (no plaintext creds in code — fetch from Key Vault).<br>
        - For Slack/Teams: post to an incoming webhook using <code>requests.post()</code>.</p>
        <pre><code># Simple Slack alert
import requests
def alert_slack(webhook, message):
    requests.post(webhook, json={"text": message}, timeout=10)</code></pre>
        <p><strong>Production pattern:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>All actions logged (INFO/ERROR); attach stack traces on exceptions.</li>
          <li>Critical failures trigger immediate alert (Slack/email) and push to monitoring (Prometheus or Application Insights).</li>
          <li>Retries for transient errors, with a final escalation if still failing.</li>
        </ul>
      </div>`
    },
    {
      question: "How can Python integrate with Azure CLI or Terraform for automation?",
      answerHtml: `<div class="answer-rich">
        <h3>🔗 <strong>Integrating Python with Azure CLI & Terraform</strong></h3>
        <p><strong>Azure CLI:</strong> Use <code>subprocess</code> to call <code>az</code> or use Azure SDK for Python (<code>azure-*</code> packages) for richer control. Example (service principal auth + list VMs):</p>
        <pre><code>import subprocess, json
cmd = ["az", "login", "--service-principal", "-u", APP_ID, "-p", SECRET, "--tenant", TENANT]
subprocess.run(cmd, check=True)
res = subprocess.run(["az", "vm", "list", "-o", "json"], check=True, capture_output=True)
vms = json.loads(res.stdout)</code></pre>
        <p><strong>Terraform:</strong> Two approaches:</p>
        <ol style="margin-left:1.2rem;">
          <li>Invoke CLI via <code>subprocess</code> (<code>terraform init/plan/apply</code>), capture output and parse JSON plan (<code>terraform show -json</code>).</li>
          <li>Use Python libs like <code>python-terraform</code> for programmatic control (less common in pipelines).</li>
        </ol>
        <pre><code># Example: run terraform plan and read JSON
subprocess.run(["terraform", "init"], check=True)
subprocess.run(["terraform", "plan", "-out=tfplan"], check=True)
subprocess.run(["terraform", "show", "-json", "tfplan"], check=True, capture_output=True)</code></pre>
        <p><strong>Security & best practices:</strong> Use managed identities or service principals stored securely (Key Vault / pipeline secrets), avoid embedding credentials in scripts, and prefer SDKs where possible to avoid shell parsing issues.</p>
      </div>`
    },
    {
      question: "How would you schedule and monitor a Python automation job in Linux?",
      answerHtml: `<div class="answer-rich">
        <h3>🕵️ <strong>Scheduling & Monitoring Python Jobs</strong></h3>
        <p><strong>Scheduling options:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Cron:</strong> Simple and reliable for periodic scripts. (Use virtualenv wrapper and full paths.)</li>
          <li><strong>systemd timer:</strong> Better observability and dependency control; logs available in <code>journalctl</code>.</li>
          <li><strong>Airflow / Prefect:</strong> For complex DAGs and retries with UI-based monitoring.</li>
        </ul>
        <p><strong>Example — systemd service + timer:</strong></p>
        <pre><code># /etc/systemd/system/pyjob.service
[Unit]
Description=My Python Automation Job

[Service]
Type=oneshot
User=automation
WorkingDirectory=/opt/scripts
ExecStart=/usr/bin/python3 /opt/scripts/backup_old_files.py --source /var/log --dest /mnt/backups --days 30

# /etc/systemd/system/pyjob.timer
[Unit]
Description=Run Python backup daily

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target

# Enable timer
sudo systemctl daemon-reload
sudo systemctl enable --now pyjob.timer</code></pre>
        <p><strong>Monitoring:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Log to a file and ship logs to a central system (ELK / Log Analytics / Graylog).</li>
          <li>Expose health and metrics (Prometheus client) if long-running, or push metrics at job end.</li>
          <li>Use heartbeat services (healthchecks.io) to detect missed runs and send alerts.</li>
          <li>Use systemd/cron exit codes and notify on non-zero exit via webhook or pager.</li>
        </ul>
        <p><strong>In practice:</strong> I combine systemd timers for scheduling, AppInsights/Prometheus for metrics, and Slack/webhook alerts for failures — ensuring fast detection and automated retries where safe.</p>
      </div>`
    }
  ]
}
,
{
  title: "10. Real-World Scenarios",
  questions: [
    {
      question: "Have you worked on Linux patching and user management?",
      answerHtml: `<div class="answer-rich">
        <h3>🛠️ <strong>Linux Patching & User Management — Real Experience</strong></h3>
        <p><strong>Yes — end-to-end:</strong> I’ve automated patch windows, applied security updates, validated services, and managed user lifecycle in production environments.</p>
        <p><strong>Typical patch flow I use:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Announce maintenance window & take backups / snapshots.</li>
          <li>Run pre-checks: free disk, service status, replication health.</li>
          <li>Apply patches in batches (canary → remaining) using Ansible or Azure Automation.</li>
          <li>Reboot if required and run post-checks (service status, health endpoints).</li>
          <li>Rollback plan ready (snapshot restore or re-run previous config) and postmortem after window.</li>
        </ol>
        <p><strong>User management examples:</strong></p>
        <pre><code># Add user and set sudo
sudo useradd -m -s /bin/bash devuser
echo "devuser ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/devuser

# Lock user
sudo usermod -L olduser

# Remove and home
sudo userdel -r tempuser</code></pre>
        <p><strong>In practice:</strong> All user changes performed via Ansible to ensure idempotence, audit trail, and avoid ad-hoc manual changes that cause drift.</p>
      </div>`
    },
    {
      question: "How do you monitor performance metrics of 50+ servers simultaneously?",
      answerHtml: `<div class="answer-rich">
        <h3>📈 <strong>Scale Monitoring for 50+ Servers</strong></h3>
        <p><strong>Approach:</strong> Use a centralized telemetry stack (Prometheus + Grafana or Azure Monitor + Log Analytics) and lightweight collectors on each host.</p>
        <p><strong>Options I’ve implemented:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Prometheus + node_exporter:</strong> Deploy node_exporter on each server; register targets in Prometheus (service discovery via Consul/SD or static job lists). Visualize in Grafana and set alerts in Alertmanager.</li>
          <li><strong>Azure Monitor (VM Insights / AMA):</strong> Install Azure Monitor Agent (AMA) to forward metrics & logs to Log Analytics workspace; use Workbooks and Alerts for notification.</li>
        </ul>
        <p><strong>Example Prometheus job:</strong></p>
        <pre><code>scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets: ['10.0.1.10:9100','10.0.1.11:9100', '10.0.1.12:9100']</code></pre>
        <p><strong>Alerting pattern:</strong> Track P95 latency, CPU > 80% for 5m, disk usage > 85% and send alerts to PagerDuty/Teams/Slack. For 50+ servers, group alerts by service and severity to reduce noise.</p>
      </div>`
    },
    {
      question: "How do you extend volumes in Oracle Linux or RHEL production VMs?",
      answerHtml: `<div class="answer-rich">
        <h3>🧱 <strong>Extending Volumes on Oracle Linux / RHEL (LVM & Non-LVM)</strong></h3>
        <p><strong>Common scenarios:</strong> (A) LVM-backed filesystem, (B) non-LVM (resize partition + filesystem), (C) cloud-managed disk resize (Azure/AWS).</p>
        <p><strong>Example — LVM (online expand ext4):</strong></p>
        <pre><code># 1. Add physical disk or extend underlying cloud disk
# 2. Create PV (if new disk)
sudo pvcreate /dev/sdb
sudo vgextend vg_data /dev/sdb

# 3. Extend LV
sudo lvextend -L +50G /dev/vg_data/lv_app

# 4. Grow filesystem (ext4)
sudo resize2fs /dev/vg_data/lv_app

# For XFS:
sudo xfs_growfs /mountpoint</code></pre>
        <p><strong>Example — Azure disk resize (VMSS/VM):</strong></p>
        <pre><code># In Azure portal or az cli increase disk size, then on VM:
sudo apt-get install cloud-guest-utils  # if needed
sudo growpart /dev/sda 1
sudo xfs_growfs /</code></pre>
        <p><strong>Verification:</strong> <code>lsblk</code>, <code>df -h</code>, and <code>lvs/vgs</code> to confirm space is available. I always test in staging and take snapshot before resizing in prod.</p>
      </div>`
    },
    {
      question: "How do you secure SSH for production servers (key-based, MFA)?",
      answerHtml: `<div class="answer-rich">
        <h3>🔐 <strong>SSH Hardening for Production</strong></h3>
        <p><strong>Key measures I implement:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Key-based auth only:</strong> Disable <code>PasswordAuthentication</code> and ensure <code>PermitRootLogin no</code> in <code>/etc/ssh/sshd_config</code>.</li>
          <li><strong>Use dedicated jump/bastion:</strong> Hardened jump host with MFA and restricted ingress.</li>
          <li><strong>MFA:</strong> Integrate MFA via Azure AD SSH (Azure AD login for Linux) or via PAM modules (Google Authenticator / Duo) on bastions.</li>
          <li><strong>Restrict access:</strong> Use <code>AllowUsers</code> or firewall rules to limit source IPs.</li>
          <li><strong>Fail2Ban & monitoring:</strong> Block brute force and notify security team for repeated attempts.</li>
          <li><strong>Key lifecycle:</strong> Enforce key rotation and maintain keys in a central vault or certificate-based SSH (short-lived certs via Vault).</li>
        </ol>
        <p><strong>Example sshd changes:</strong></p>
        <pre><code>PermitRootLogin no
PasswordAuthentication no
ChallengeResponseAuthentication no
AllowUsers jump-admin devuser</code></pre>
        <p><strong>In practice:</strong> For production I route all admin access via a bastion that requires MFA; servers accept only certs or keys minted by a central CA (HashiCorp Vault/SSHD CA) to avoid long-lived key sprawl.</p>
      </div>`
    },
    {
      question: "How do you integrate system health scripts into Azure Monitor or Prometheus?",
      answerHtml: `<div class="answer-rich">
        <h3>🔗 <strong>Integrating Health Scripts with Monitoring</strong></h3>
        <p><strong>Prometheus:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Expose custom metrics via an HTTP endpoint (Prometheus exposition format) and scrape them from Prometheus.</li>
          <li>Use a small exporter (Python/Go) or push metrics to Pushgateway for short-lived jobs.</li>
        </ul>
        <pre><code># Minimal /metrics endpoint (Flask example)
from prometheus_client import Gauge, start_http_server
g = Gauge('app_disk_free_bytes', 'Free disk bytes')
g.set(123456)
start_http_server(8000)</code></pre>
        <p><strong>Azure Monitor:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Use Azure Monitor Agent (AMA) with custom logs or the Azure Monitor Metrics API to push custom metrics.</li>
          <li>Alternatively, send telemetry to Log Analytics via OMS/REST API from script and create alerts/workbooks.</li>
        </ul>
        <pre><code># Send custom log example (curl to Log Analytics Data Collector API)
# Build JSON payload and post with workspace key (best done via Az CLI or SDK)</code></pre>
        <p><strong>In practice:</strong> I deploy small exporters for disk, queue depth, or custom app checks and wire them into Prometheus + Alertmanager or send the same checks as custom logs to Log Analytics for Azure-native dashboards and alerts.</p>
      </div>`
    },
    {
      question: "How do you automate patching and reboot validation across multiple servers?",
      answerHtml: `<div class="answer-rich">
        <h3>🔁 <strong>Automated Patching + Reboot Validation</strong></h3>
        <p><strong>Solution pattern I use:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Orchestration:</strong> Use Ansible playbooks or Azure Automation Hybrid Runbooks to orchestrate patching in controlled batches.</li>
          <li><strong>Pre-checks:</strong> Ensure cluster quorum, replication health, snapshot backups, and low load before patching.</li>
          <li><strong>Apply updates:</strong> Use package manager modules (<code>yum</code>/<code>apt</code>) via Ansible; reboot when package manager requires.</li>
          <li><strong>Post-reboot validation:</strong> Use health-check scripts that verify service status, application health endpoints, logins, and monitoring ingestion.</li>
          <li><strong>Rollback & reporting:</strong> If validation fails, trigger rollback or escalate; generate patch report and track in CMDB.</li>
        </ol>
        <p><strong>Ansible snippet (simplified):</strong></p>
        <pre><code>- hosts: canary
  become: yes
  tasks:
    - name: Apply updates
      yum:
        name: "*"
        state: latest
    - name: Reboot if required
      reboot:
        reboot_timeout: 600
    - name: Run health check
      uri:
        url: http://localhost/health
        return_content: no
      register: hc
    - name: Fail if health check failed
      fail:
        msg: "Health check failed"
      when: hc.status != 200</code></pre>
        <p><strong>In practice:</strong> I run patching in staged waves (canary → remaining), and post-reboot scripts report success to a central dashboard and Slack channel. If a node fails validation, it’s cordoned (for K8s) or removed from LB until fixed.</p>
      </div>`
    },
    {
      question: "How do you design a Linux automation framework combining Bash + Ansible + Azure CLI?",
      answerHtml: `<div class="answer-rich">
        <h3>🧭 <strong>Design — Bash + Ansible + Azure CLI Automation Framework</strong></h3>
        <p><strong>Principles:</strong> Idempotence, modularity, secure secrets handling, and CI/CD integration.</p>
        <p><strong>High-level structure:</strong></p>
        <pre><code>repo/
├─ scripts/                # small bash helpers & wrappers (idempotent)
│  └─ check_disk.sh
├─ ansible/
│  ├─ inventories/
│  ├─ roles/
│  └─ playbooks/
├─ infra/
│  └─ azure/               # terraform/ARM for infra
├─ pipelines/
│  └─ azure-pipelines.yml
└─ README.md</code></pre>
        <p><strong>How components work together:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Provision infra:</strong> Terraform or ARM in <code>infra/azure</code> creates VMs, NSG, and managed identities.</li>
          <li><strong>Bootstrap VM:</strong> Use cloud-init or custom script (Bash) to install Python, Ansible, and AMA/node_exporter.</li>
          <li><strong>Configure via Ansible:</strong> Ansible runs playbooks using inventories created dynamically (host variables include managed identity or service principal info).</li>
          <li><strong>Azure CLI usage:</strong> Pipeline tasks use <code>az</code> for subscription context, resource creation, or pulling secrets/keys (via Key Vault).</li>
          <li><strong>CI/CD:</strong> Azure DevOps pipeline triggers Ansible runs on self-hosted runner or via Control-M; secrets injected from Key Vault variable groups.</li>
        </ol>
        <p><strong>Example pipeline steps:</strong></p>
        <pre><code>- script: |
    az login --service-principal -u &dollar;(SP_ID) -p &dollar;(SP_SECRET) --tenant &dollar;(TENANT)
    az account set --subscription &dollar;(SUB_ID)
  displayName: 'Azure Login'

- script: |
    ansible-playbook -i inventories/prod playbooks/site.yml --extra-vars "env=prod"
  displayName: 'Run Ansible Playbook'</code></pre>
        <p><strong>Best practices:</strong> - Keep bash scripts minimal (helpers). - Use Ansible for configuration & orchestration. - Use managed identities or Key Vault for secrets. - Test everything in staging and use canary deployments for production changes.</p>
      </div>`
    }
  ]
}


];
