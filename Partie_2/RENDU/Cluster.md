# Clusterisation des conteneurs 

La clusterisation de conteneurs c'est coordonner et gerer l'exécution de plusieurs conteneurs.

Pour faire un clusteur, il fzut utiliser Kubernetes.
Un système open source qui permet d'automatiser le deploiement et la mise en oeuvre de conteneurs 

L'avantage des cluster est de pouvoir planifier et exercuter plusieurs conteneurs sur plusieurs machines physiques ou virtuelles.

# microservice

L'architecture micro-service consite a diviser une application monolithique en plusieurs petits services, tous indépendants les uns des autres et pouvant communiquer entre eux. Un micro-service est en charge d'une fonctionnalité de l'application. Si un micro service ne fonctionne plus, il n'impacte pas les autres micro-service alors qu'une application monolithique plante complètement si une fonctionnalité ne fonctionne plus. L'avantage des micros-services avec docker est le deploiement. Plus rapide de deployer des petits micros services et plus simple à contrôler.

# Scalability, availability, load balancing

Scalability :

La scalabilty c'est la capacité à gerer efficacement le nombre d'instances d'un conteneur qui seront créées, geréées automtiquement.

Availabilty

Le principe de disponibilité sur Docker c'est d'assurer la disponibilité continue des applications déployées dans des conteneurs, même en cas de défaillances matérielles ou logicielles. Docker permet la gestion des services et l'utilisation d'outils d'orchestration comme Kubernetes.