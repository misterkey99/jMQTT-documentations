# Brother

Plugin gathering information from your network connected Brother printer using SNMP protocol.

Several commands are availale like the different ink/toner levels. 

>**Important**      
>You printer must be:
- a Brother one :)
- connected to your local network
- have SNMP enabled (you might need to go to your printer's interface to enable it)

# Configuration

## Plugin configuration

The plugin **Brother** does not require any specific configuration and should only be activated after installation.

## Equipment configuration

To access the different equipment **Brother**, go to the menu **Plugins → Monitoring → Brother**.

> **To know**    
> The button **+ Add** allows you to add a printer **Brother**.

On the equipment page, fill in the **hostname or IP address** of your printer and select its **type**, then click on the button **Save**.

A widget's template is available. To use it, click the checkbox.

# Remarks

Most probably, some Brother printers might not be compatible. Just try and see!

# Contributions

This plugin is opened for contributions and even encouraged! Please submit your pull requests for improvements/fixes on <a href="https://github.com/badwolf42/plugin-brother" target="_blank">Github</a>

# Credits

This plugin relies on the work done by:
- [hugoKs3](https://github.com/hugoKs3) for creating this plugin in February 2022 and maintaining it since January 2023
- [bieniu](https://github.com/bieniu) through his Python package to connect to Brother: [brother](https://github.com/bieniu/brother)

# Disclaimer

- This code does not pretend to be bug-free
- Although it should not harm your Jeedom system, it is provided without any warranty or liability

# ChangeLog
Available [here](./changelog.html).
