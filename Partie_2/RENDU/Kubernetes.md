# Listes des composants se trouvant sur les noeuds Kubernetes :


# Noeuds de travail

Kubelet :
Communique avec le noeud maitre et s'assure que les conteneurs décrits dans les pods sont en cours d'exécution et en bonne santé sur le noeud.

Kubelet Proxy :

Gère la connectivité réseau sur le nœud de travail. Il maintient des règles de réseau pour permettre la communication entre les différents pods à travers le cluster.

Container Runtime :

Il exécute des conteneurs sur le nœud de travail

# Noeuds Maitres

API Server :

Le point d'entrée pour toutes les opérations sur le cluster. Il expose l'API Kubernetes, permettant aux utilisateurs et aux composants du système de communiquer avec le cluster.

etcd :

Un magasin de clés-valeurs distribué utilisé pour stocker la configuration du cluster et son état actuel.

Scheduler :

Le responsable de la planification des pods sur les nœuds de travail en fonction de la capacité et des contraintes du cluster.

Controller Manager :

Il surveille en permanence l'état du cluster à l'aide de contrôleurs spécifiques et prend des mesures pour  s'assurer que l'état actuel du cluster correspond à l'état souhaité.

DNS

DNS gère la résolution des noms de service pour permettre la communication entre les pods. Il fournit un service de découverte de services au sein du cluster.

Kube Proxy (sur les nœuds de travail) :

Il interagit avec le réseau sur le nœud de travail pour permettre la connectivité réseau entre les pods.


Kubernetes Master
    ->
API Serveur
    ->
Scheduler
    ->
ETCD
->
X Worker ->
Kubelet ->
Containeur runtime


## Ressources de Base :

1.Namespaces 

Les Namespaces fournissent une façon de diviser les ressources physiques d'un cluster Kubernetes en plusieurs clusters virtuels. Ils permettent d'isoler les objets Kubernetes dans un même cluster.

2.Pods
 Ils représentent un ou plusieurs conteneurs qui partagent le même espace réseau, le même espace de stockage et les mêmes spécifications de déploiement. 

3.Services
  Ils permettent de faire référence aux pods via un nom de service plutôt qu'une adresse IP. Les Services peuvent être utilisés pour fournir une connectivité stable aux applications au sein du cluster.

4.Volumes
   Les Volumes sont utilisés pour permettre le stockage persistant des données des conteneurs. Ils peuvent être attachés à des pods et offrent une manière de partager des données entre les conteneurs dans un pod.

## Workloads :

1.Deployment
   définir et de gérer la création de pods. 

2.StatefulSet
   Les StatefulSets sont utilisés pour le déploiement d'applications étatiques. Ils garantissent un nom de réseau stable et un état persistant pour chaque pod dans le StatefulSet. 

3.DaemonSet
   Il assurent qu'il y a une instance de pod sur chaque nœud du cluster. 

4.Jobs et CronJobs
   Les Jobs sont utilisés pour exécuter des tâches à durée déterminée, tandis que les CronJobs permettent la planification de tâches récurrentes à des intervalles spécifiés. 

