
# Docker Registry

Les avantages d'avoir un registry interne pour une entreprise sont multiples.

Déjà pour la sécurité du SI de l'entreprise. Ce qui permet de sécurisé des données sensibles et mettre de plus grosse sécurités sur le regristre.

Cela permet aussi de centraliser les données pour rassembler toutes les données sur une seule plateforme. Pour éviter de les eparpillers ou de les perdre.

Rester plus facilement à jour. Tous les collaborateurs peuvent avoir facilement accès aux memes données et les modifiers et les déployer au meme endroit.

# Push une image sur un registry privé

docker login 

docker tag nom_image username/nom_repo

docker push username/nom_rep

lein de mon image sur docker hub :

https://hub.docker.com/r/aurel6501/image_vue/tags