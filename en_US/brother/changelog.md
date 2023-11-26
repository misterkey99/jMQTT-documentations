# Changelog

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text.


# Stable - 01/10/2023 (v6)
- Last Beta is now Stable

# Beta - 29/09/2023 (v6)
- Fixed issue with [pyasn1 package](https://community.jeedom.com/t/107671) (using a Python3 venv)
- Fix some log levels (too verbose)

# Stable - 14/05/2023 (v5)
- Fixed issues with widget on Jeedom 4.4

# Stable - 30/04/2023 (v4)
- **The widget on the Dashboard is now updated when changing a value**
- **Logo update, using yellow instead of dark blue**
- **Minimum version support is now Jeedom 4.3**
- Add Luna as supported hardware
- Add version number in info.json
- Cleanup of installation, update and migration scripts
- Include changelod and beta documentation in info.json
- Updated Equipment Commands tab in Jeedom 4.3 style
- Fixed "None" item was missing on Equipment tab of equipments
- Fixed PHP Notice when printer was turned on
- Fixed some typos

# Beta - 27/02/2023
- Updated Equipment Commands tab in Jeedom 4.3 style
- Fixed "None" item was missing on Equipment tab of equipments
- Fixed PHP Notice when printer was turned on
- Fixed some typos

# Stable - 20/02/2023
- **Plugin taken over by BadWolf**
- Change in the way refresh works: a callback is used to avoid creating a cron
- Renamed the "master" branch to "stable", to those who use Github and not the Market, please update your branch
- Added usage statistics
- Code indentation/cleanup

# Beta - 14/02/2023
- **Plugin taken over by BadWolf**
- Added usage statistics
- Code indentation/cleanup

# Stable - 04/03/2022
- Logs typo fix
- Useless sudo rights removal
- Manual refresh in cron to prevent UI lock
- Compatibility with tile background graphics

# Stable - 18/02/2022
- Fix on last prints computation

# Stable - 12/02/2022
- First stable version

# Beta - 11/02/2022
- Python package logging level respect Jeedom logging config
- Gauge items clickable for history
- Grey background on gauge for better visibility of black ink

# Beta - 10/02/2022
- Choice of printer's type (color or back & white)
- Smaller widget with status and page counters information
- Widget compatible with visible status of commands

# Beta - 07/02/2022
- Add logs
- New commands for number of prints in the last hour

# Beta - 06/02/2022
- Initial revision (beta)
