# Changelog

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.


# Stable - 01/10/2023 (v6)
- Passage de la dernière beta en stable

# Beta - 29/09/2023 (v6)
- Correction d'un [problème avec le packet pyasn1](https://community.jeedom.com/t/107671) (en utilisant un venv Python3)
- Correction du niveau de certains journaux (trop verbeux)

# Stable - 14/05/2023 (v5)
- Correction de problèmes avec le widget sur Jeedom 4.4

# Stable - 30/04/2023 (v4)
- **Le widget sur le Dashboard est maintenant mis à jour lors du changement d'une valeur**
- **Changement du logo, en utilisant du jaune au lieu du bleu foncé**
- **Le support de la version minimale est désormais Jeedom 4.3**
- Ajouter Luna comme matériel pris en charge
- Ajouter le numéro de version dans info.json
- Nettoyage des scripts d'installation, de mise à jour et de migration
- Inclusion du changelog et de la documentation bêta dans info.json
- Mise à jour de l'onglet Commandes des équipements dans le style de Jeedom 4.3
- Correction l'objet "Aucun" manquait sur l'onglet Équipement des équipements
- Correction de la PHP Notice lorsque l'imprimante est allumée
- Correction typographique

# Beta - 27/02/2023
- Mise à jour de l'onglet Commandes des équipements dans le style de Jeedom 4.3
- Correction l'objet "Aucun" manquait sur l'onglet Équipement des équipements
- Correction de la PHP Notice lorsque l'imprimante est allumée
- Correction typographique

# Stable - 20/02/2023
- **Reprise du plugin par BadWolf**
- Modification du fonctionnement du rafraichissement : un callback est utilisé pour éviter de créer un cron
- Renommage de la branche "master" en "stable", merci à ceux qui utilisent Github au lieu du Market de changer de branche
- Ajout de statistiques d'utilisation
- Indentation/nettoyage du code

# Beta - 14/02/2023
- **Reprise du plugin par BadWolf**
- Ajout de statistiques d'utilisation
- Indentation/nettoyage du code

# Stable - 04/03/2022
- Correction typographique dans les logs
- Droits sudo inutiles retirés
- Rafraichissement manuel dans un cron pour éviter les bloquages de la UI
- Compatibilité avec les graphiques en fond de widget

# Stable - 18/02/2022
- Correction sur le calcul des dernières impressions

# Stable - 12/02/2022
- Première version stable

# Beta - 11/02/2022
- Niveau de logging du package python aligné avec la config Jeedom
- Les items de la jauge sont maintenant cliquables pour accéder à l'historique
- Fond gris sur la jauge pour une meilleur visibilité du niveau d'encre noire

# Beta - 10/02/2022
- Choix du type d'imprimante (couleur, noir & blanc)
- Widget plus petit avec infos de status et du nombre de pages
- Widget réactif aux commandes invisibles

# Beta - 07/02/2022
- Ajout logs
- Nouvelle commande pour le nombre de pages imprimées dans la dernière heure

# Beta - 06/02/2022
- Première version (beta)
