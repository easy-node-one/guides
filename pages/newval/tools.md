#### A list of some helpful tools by OS
---

# Administrator Toolbox

Here's some helpful free tools you can setup to use to work with your nodes before you get started.

## Windows Applications

### Mobaxterm

[Mobaxterm](https://mobaxterm.mobatek.net/download-home-edition.html) - This is the only real tool you need to access your nodes. The other tools listed below do similar parts of what this does if it's configured properly.

Once you've loaded the application, create a new "Sessions" connection. 

Replace your node IP in the "Remote host" and change the username if needed. This is the initial setup we suggest for connecting to a newly created node on either [Digital Ocean or Vultr](../validator-guide-notes/software-setup/cloud-setup.md).

![Example new connection setup using the root account](../../public/image_16.png)

After you've gone through our guide, setup a user account and have a folder made for your application you can change your connection to reflect these settings. Replace the username with the username you use to run your harmony application.

![Example of updated connection setup using the serviceharmony account and going to ~/harmony on load](../../public/image_8.png)

With your SSH-browser type set to SCP you'll also get a WinSCP style window to copy files to your node while you're viewing it in terminal.

You can also load up multiple terminals, run htop or other statistics and commands simultaneously. 

We're also going to be loading up a section of scripts and macros to use to manage your system soon, stay tuned!

### VS Code 

This [application for Windows or Mac](https://code.visualstudio.com/) is the text editor we use to remotely change the files on our nodes. Connects to your droplet via the same SSH key public/private pair you'll create for your user account.

Once you've downloaded and installed the application we recommend going to their Extensions section \(CTRL+SHIFT+F\) and installing the Remote Development Extension Pack.

Configure your server, user account and IdentityFile in your SSH configuration file for VS Code.

### Other Windows Utility Applications

[Ubuntu 20.04 LTS](https://www.microsoft.com/en-us/p/ubuntu-2004-lts/9n6svws3rx71?activetab=pivot:overviewtab) - If you're running Windows 10, go to the Microsoft Store and install Ubuntu 20.04 LTS. It's super helpful to use since your nodes will be Linux anyways.  
[Putty ](https://www.putty.org/)- Connection manager and key generator for SSH connections  
[WinSCP](https://winscp.net/eng/index.php) - Import connections from putty and transfer files with an explorer style interface

## Mac

Mac devs shouldn't really need many extra tools but I don't develop from one myself. If someone wants to add some tools for Mac users and links we'll post credit to your validator!

## Linux Apps & Scripts

Here's our recommendation for additional tools you can load onto your harmony validator node server:

**htop** - Monitor your cpu, memory, service and application stats. Install if missing on ubuntu with:

  `sudo apt install htop -y`

**nethogs** - Monitor your network stats. Install if missing on ubuntu with:

`sudo apt install nethogs -y`

\*\*\*\*[**Our Administrator Scripts**](../after-node-setup/validator-tools/scripts/) - We have a script to pull your stats neatly and a script to upgrade your harmony client when needed. Modify them to fit your configuration.
