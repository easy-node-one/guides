#### Notes on the node setup section
---

# Node Setup

Remember to read our [Before I Set a Validator Up](../newval/index.mdx) section and make a plan before starting here. You'll want to have a non-root user account \(with sudo access to run root commands is ok!\) created and the ~/harmony directory setup.

We won't cover multiple BLS Keys here as they aren't needed to get started. Make one and add one to start \(worry about BLS keys when we get there\).

If you're doing it "The Easy Node Way" and have already made a folder, always remember to change into your harmony directory before running commands!

```text
cd ~/harmony
```

## HMY CLI Download

### Download Harmony CLI tool For Linux

Use the curl command provided to download and install HMY CLI on your Linux OS inside of your ~/harmony folder.

```bash
curl -LO https://harmony.one/hmycli && mv hmycli hmy && chmod +x hmy
```

### Output

Verify it's installed by running this command.

```bash
./hmy --node="https://api.s0.t.hmny.io" cookbook
```

The Output is a reference for commands you an perform now with the HMY CLI.

## Setting up BLS Keys

### Our notes on BLS keys

We suggest making 10 BLS keys on the shard you start with. Save them to your home PC. They can be reused anytime you deploy that shard again and only need to be created once. Once you have your .key & .pass files save them in a folder at home for reuse via WinSCP, scp, rsync, or however you send files to a server.

When you start you won't need more than 1 for quite some time \(at least 9.5 million $ONE today\) but if you have the others in place you won't need to restart your services and miss blocks to add more keys to your nodes.

### Creating new BLS keys

This covers creation of your BLS Key\(s\) that you decided on before starting the guide. We encourage you to run one on shards 1-3 instead of just 0.

Here you'll be creating the keys, creating a folder, and copying them into the proper folders.

You may want to store a backup of these files as well.

## Syncing with Rclone

Rclone only needs to be run one time per shard database. It will get your database as close to updated as possible \(most likely end of last epoch\) and then later _**the harmony service will finish the synchronization before you send your create my validator command**_.

### 1. Installing Rclone

This section walks you through installing rclone.

### 2. Configuring Rclone

This section shows you where your file will be stored and gives you a command to create the file. No changes needed.

### 3. Running Rclone & 4. Cheat Sheets

These sections give you the command to download the databases for the shards you'd like. If you're on shard 1-3 you will have 2 commands to run.

### Archival Node

Archival Node can be ignored if you're not setting up an Archival Node \(you wouldn't be here for that!\).

## Installing a Node with Binary

This is the method you currently want to use. Skip Autonode & Node.sh for you setup. Installation is pretty standard here, no changes just run the curl command to install harmony in your folder.

### 1. Download Node Binary

Use the command you'd like to install the harmony application. Run this inside your ~/harmony folder.

### Option 1: Setup Using Config File \(recommended\)

You will want to setup a configuration file to use with your service in the next step. The default configuration file works for 99.9% of administrators.  
  
Most people can skip options 2 & 3 here and go onto setting up harmony as a service with Systemd.

### 2. Setup Systemd

You can create the service as per normal but some configuration changes may be required on this step. You'll want to modify the harmony service file below to meet your installation & configuration needs.

To use the setup in nano instead of vi as the guide changes to, run this command instead.

```bash
sudo nano /etc/systemd/system/harmony.service
```

```
sudo vi /etc/systemd/system/harmony.service
```

* Line 9 - Set this to the account name you're using
* Line 10 & 11 - If you used a harmony subdirectory as suggested set them up as shown below

```text
[Unit]
Description=Harmony daemon
After=network-online.target

[Service]
Type=simple
Restart=always
RestartSec=1
User=[myUserName]
WorkingDirectory=/home/[myUserName]/harmony
ExecStart=/home/[myUserName]/harmony/harmony -c harmony.conf
SyslogIdentifier=harmony
StartLimitInterval=0
LimitNOFILE=65536
LimitNPROC=65536

[Install]
WantedBy=multi-user.target
```

> Add your user account name in place of \[myUserName\] in the commands in this guide.

At this point you can continue with the rest of the regular [Official Harmony Guide](https://docs.harmony.one/home/network/validators/node-setup/installing-updating/installing-node/using-binary#2-setup-systemd).

> When you run the 3 commands after you edit the above & create the systemd file you may get an error if you check your service as you haven't loaded a wallet yet. In the next section you'll create or add an existing wallet as your official validator address.

### Updating a Node

You won't need to update a node at this point. However when you're ready to upgrade see our [Upgrade Script](../../after-node-setup/validator-tools/scripts/upgrade-script.md) section if you'd like to script the upgrade process.

### Checking a Node

There's a few commands you're going to use here regularly to check things out, however if you set up our [Stats Script](../../after-node-setup/validator-tools/scripts/stats-script.md) you can use that to check your status and use these sparingly as needed.

### Checking for BINGO

One command you'll want to run from time to time on both nodes to verify they are in sync is known as the "BINGO" command around the Harmony community. This command shows you a live view of the end of your log and prints every time it finds a block signature. You won't see this if you are not elected! To check for BINGO run the following command:

```text
tail -f latest/zerolog-harmony.log | grep BINGO
```

