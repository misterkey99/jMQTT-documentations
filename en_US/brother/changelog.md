# Changelog

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text.


# Stable - 2023-11-26 (v6)
- Outsourcing of documentation and changelog

# Stable - 2023-10-01 (v6)
- Last Beta is now Stable

# Beta - 2023-09-29 (v6)
- Fixed issue with [pyasn1 package](https://community.jeedom.com/t/107671) (using a Python3 venv)
- Fix some log levels (too verbose)

# Stable - 2023-05-14 (v5)
- Fixed issues with widget on Jeedom 4.4

# Stable - 2023-04-30 (v4)
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

# Beta - 2023-02-27
- Updated Equipment Commands tab in Jeedom 4.3 style
- Fixed "None" item was missing on Equipment tab of equipments
- Fixed PHP Notice when printer was turned on
- Fixed some typos

# Stable - 2023-02-20
- **Plugin taken over by BadWolf**
- Change in the way refresh works: a callback is used to avoid creating a cron
- Renamed the "master" branch to "stable", to those who use Github and not the Market, please update your branch
- Added usage statistics
- Code indentation/cleanup

# Beta - 2023-02-14
- **Plugin taken over by BadWolf**
- Added usage statistics
- Code indentation/cleanup

# Stable - 2022-02-04
- Logs typo fix
- Useless sudo rights removal
- Manual refresh in cron to prevent UI lock
- Compatibility with tile background graphics

# Stable - 2022-02-18
- Fix on last prints computation

# Stable - 2022-02-12
- First stable version

# Beta - 2022-02-11
- Python package logging level respect Jeedom logging config
- Gauge items clickable for history
- Grey background on gauge for better visibility of black ink

# Beta - 2022-02-10
- Choice of printer's type (color or back & white)
- Smaller widget with status and page counters information
- Widget compatible with visible status of commands

# Beta - 2022-02-07
- Add logs
- New commands for number of prints in the last hour

# Beta - 2022-02-06
- Initial revision (beta)
