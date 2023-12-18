Docker prend en charge plusieurs types de réseaux, qui permettent aux conteneurs Docker de communiquer entre eux et avec le monde extérieur. 

5 types de réseaux :

1. Bridge Network :
   - C'est le réseau par défaut lorsqu'aucun réseau n'est spécifié.
   - Les conteneurs connectés à un réseau ponté peuvent communiquer entre eux, mais également avec le système hôte.
   - Chaque conteneur obtient une adresse IP sur le sous-réseau du réseau ponté.

2. Host Network :
   - Les conteneurs utilisent le réseau de l'hôte directement.
   - Cela peut améliorer les performances, mais expose tous les ports du conteneur directement sur l'hôte.

3. Overlay Network :
   - Permet de connecter des conteneurs sur différents hôtes Docker afin qu'ils puissent communiquer entre eux.
   - Utile pour les déploiements distribués.

4. Macvlan Network :
   - Permet d'assigner des adresses MAC spécifiques aux conteneurs, les faisant apparaître comme de vrais périphériques matériels sur le réseau.
   - Chaque conteneur peut avoir une adresse IP du réseau physique sous-jacent.

5. None Network :
   - Désactive le réseau par défaut et n'attribue pas d'interface réseau au conteneur.
   - Utile dans les cas où le conteneur n'a pas besoin de communication réseau.


Bridge Network et Overlay Network sont les deux réseaux les plus utilisés.

Commande :

Voir tous les reseaux locaux de la machine

- docker network ls

Création du reseau local bridge du nom de mds0 

- docker network create --driver=bridge --subnet=192.168.0.0/24 mds0

Création d'un conteneur utilisant le reseau mds0

- docker run -d --name conteneur_mds0 --network mds0 nginx:latest

Analyse du reseau mds0 

- docker network inspect mds0 

On retrouve bien notre conteneur conteneur_mds0

 ![network_inspect](Images/network_inspect.png)


