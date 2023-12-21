

# Multi-Service

Pour faire le lien entre le conteneur wordpress et le conteneur mariadb il faut ajouter certains points dans le docker-compose :


Préciser les informations de connexions de la bdd dans le conteneur word press :

```
environment:
      WORDPRESS_DB_HOST: mariadb
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: mypass
      WORDPRESS_DB_NAME: wordpress
```

Préciser que wordpress depend du conteneur mariadb

```
depends_on:
      - mariadb
```

Indiquer les informations de la bdd pour le conteneur mariadb 
```

environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: mypass
```

Pour la communication entre les 2 conteneurs, il faut créer un network 

```
networks:
  network_mariadb_wordpress:
    driver: bridge
```

Ajouter un volume pour le conteneur mariadb

```
volumes:
      - wordpress_data:/var/lib/mysql
```

Créer le volume

```
volumes:
  wordpress_data:
  driver: loca
```