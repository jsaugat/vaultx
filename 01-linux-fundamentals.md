Basic Linux administration:

* Checking where a command lives (`which`)
* Finding which package owns a file (`rpm -qf`)
* Updating software (`dnf upgrade`)
* Understanding repositories
* Reading package information

As a frontend developer, you do **not** need a full Linux course. Most courses spend hours on topics you'll rarely use.

### What you actually need

#### Phase 1: Daily Linux (1 week)

Navigation:

```bash
pwd
ls
cd
mkdir
rm
cp
mv
find
```

File viewing:

```bash
cat
less
head
tail
grep
```

Permissions:

```bash
chmod
chown
sudo
```

Goal:

* Move around filesystem comfortably.
* Find files quickly.
* Edit config files without fear.

---

#### Phase 2: Package Management (2-3 days)

Fedora:

```bash
dnf search
dnf install
dnf remove
dnf upgrade
dnf info
```

RPM:

```bash
rpm -qa
rpm -qi
rpm -qf
```

Repositories:

```bash
dnf repolist
```

Goal:

* Install, remove, troubleshoot software.

This is exactly what you were doing with VS Code.

---

#### Phase 3: Processes & System (3-4 days)

Processes:

```bash
ps aux
top
htop
kill
killall
```

Services:

```bash
systemctl status
systemctl start
systemctl stop
systemctl restart
```

Logs:

```bash
journalctl
```

Goal:

* Fix "app won't start" problems.

---

#### Phase 4: Networking (1 week)

Commands:

```bash
ping
curl
wget
ip a
ss -tulpn
```

DNS:

```bash
nslookup
dig
```

Goal:

* Debug API/server issues.
* Useful for frontend, backend, cloud, DevOps.

---

#### Phase 5: Shell Productivity (ongoing)

Redirection:

```bash
>
>>
|
```

Examples:

```bash
cat file.txt | grep error

dnf list installed | grep code
```

Learn:

```bash
grep
awk (basic)
sed (basic)
xargs
```

Goal:

* Become fast in terminal.

---

### Skip for now

Don't spend weeks learning:

* Bash scripting deep dives
* Vim mastery
* Kernel internals
* Compiling kernels
* SELinux internals
* Advanced system administration
* Linux certifications

Not useful for your current goal.

---

### For your Master's + career goals

Priority order:

1. Linux basics ✅
2. Git (advanced)
3. Docker
4. Networking fundamentals
5. Node.js backend
6. Cloud (AWS/Azure)
7. CI/CD
8. Kubernetes

A surprising number of frontend developers are weak at Linux, networking, and Git. Learning just the roadmap above will put you ahead of many junior-to-mid frontend developers and help both with jobs and CS-related master's programs.
