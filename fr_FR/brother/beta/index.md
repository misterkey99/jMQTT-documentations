# Brother

Plugin récupérant les informations de votre imprimante connectée Brother en utlisant le protocole SNMP.

Plusieurs commandes sont disponibles comme les différents niveaux d'encre.

>**Important**      
>Votre imprimante doit :
- être une Brother :)
- être connectée à votre réseau local
- avoir le protocle SNMP activé (vous devrez peut-êter l'activer sur l'interface de votre imprimante)

# Configuration

## Configuration du plugin

Le plugin **Brother** ne requiert aucune configuration particulière et doit juste être activé après son installation.

## Configuration des équipements

Pour accéder aux différents équipements **Brother**, ouvrez le menu **Plugins → Monitoring → Brother**.

> **A savoir**    
> Le bouton **Ajouter**, vous permet de créer une nouvelle imprimants **Brother**.

Sur la page de l'équipement, renseignez **l'adresse IP ou le nom d'hôte** de votre imprimante et sélectionnez son type, puis cliquez sur **Sauvegarder**.

Un template de widget est disponible. Pour l'utiliser, cochez la checkbox.

# Remarques

Très probablement, certaines imprimantes Brother ne seront pas compatibles. Essayez et vous verrez !

# Contributions

Ce plugin gratuit est ouvert à contributions (améliorations et/ou corrections). N'hésitez pas à soumettre vos pull-requests sur <a href="https://github.com/badwolf42/plugin-brother" target="_blank">Github</a>.

# Credits

Ce plugin se repose sur le travail de :
- [hugoKs3](https://github.com/hugoKs3) qui a créé ce plugin en février 2022 et l'a maintenu jusqu'en janvier 2023
- [bieniu](https://github.com/bieniu) via son package Python: [brother](https://github.com/bieniu/brother)

# Disclaimer

- Ce plugin ne prétend pas être exempt de bugs.
- Ce plugin vous est fourni sans aucune garantie. Bien que peu probable, si il venait à corrompre votre installation Jeedom, l'auteur ne pourrait en être tenu pour responsable.

# ChangeLog
Disponible [ici](./changelog.html).