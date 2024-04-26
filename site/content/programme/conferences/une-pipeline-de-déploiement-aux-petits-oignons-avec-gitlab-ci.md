---
title: Une pipeline de déploiement aux petits oignons avec Gitlab CI
draft: false
session_id: "#56"
slug: 56-pipeline-deploiement
duration: 40 min
audience: Intermédiaire
themes: CI/CD, industrialisation
speakers: Kevin Gautreau (kgaut)
companies: Kgaut
teaser: Comment mettre en place une stratégie de déploiement automatisé pour
  votre site Drupal en utilisant la puissance de Gitlab CI.
prerequisites: Connaître Drupal et les bases de son installation sur un serveur.
plan: >-
  * Principes de base de la CI/CD

  * Quelles sont les différentes étapes d'une mise en production manuelle ?

  * Comment automatiser chacune de ces étapes ?

  * Comment factoriser ses jobs pour une réutilisation facile sur plusieurs projets
takeway: Comment utiliser la CI de Gitlab pour déployer son site Drupal et
  comment réutiliser des mêmes jobs au sein de différents projets pour éviter
  les copier / collers.
slides_files: slides/drupal-ci-drupalcamp-rennes-2024-1.pdf
video: s1HjYNRCOAw
transcription: >-
  \- Bonjour. 


  \- Merci à tous pour votre présence. Nous allons parler de Gitlab et de pipeline de déploiement. Ça sera un peu dans la continuité de ce qui a été dit ce matin. Je suis Kévin Gautreau, je fais du Drupal depuis 2010. On me retrouve sur les réseaux sociaux. Pour les plus anciens d’entre vous, vous me connaissez peut-être avec ma photo avec mon lémurien sur l’épaule qui n’était plus très à jour. Donc rapidement sur la CI CD, ça permet de déployer de manière automatisée :  je code, je teste, je déploie et on recommence. On va éviter    maintenant les déploiement via FS qui entraînent des soucis. 


  En général, ça va entraîner des modifications sur le serveur de production.    Il y a différentes solutions. Je me suis concentré sur Gitlab CI depuis pas mal d’années. Ça peut s’utiliser en mode Sas et aussi en instance autohébergée. 


  Vous avez les mêmes fonctionnalités chez vous et dans votre entreprise par exemple. Il est quand même efficace. Ça fait des années qu’ils bossent dessus. J’ai rarement été bloqué. C’est adapté à des projets libres ou privés. 


  Il y a une prise en main qui est relativement facile. Les bases sont très simples. Pour avoir toute sa pipeline et mettre en production de bout en bout, ça prend plus de temps. C’est une suite de jobs, de tâches qui sont exécutées après une action sur le dépôt    Git. Pour faire simple, quand je fais un push sur la branche préprod, je déploie le contenu de la branche sur mon serveur de préproduction. On va découper tout cela en étape. Une étape sera composée de jobs qui sont séquencés. 


  On ne va pas pour faire un exemple simple, si notre back up de base de données    plante. Comme c’était présenté tout à l’heure le PHP Stan qui va faire du test sur la qualité du code, s’il plante, on ne va pas amener du code qui va amener des régressions au niveau de la qualité du code. S’il plante, je m’arrête    tout de suite. On peut déclencher des actions, des alertes etc. Un job, c’est une suite de commandes qui vont être exécutées par un runner, un petit processus. La plupart du temps, ça sera au sein d’un docker.    Vous avez ici un petit exemple de job qui va utiliser une image node en version 19, il va lancer npm run sass-compile pour compiler les fichiers Sass en CSS. Tout cela se définit dans un fichier. 


  On a vu les bases sur la CI. Comment se passe une mise en production ?  On a différentes étapes sous forme de colonne ici. On a différentes étapes, ces étapes-là, les noms sont libres. Ça peut changer d’un projet à l’autre. Vous pouvez en avoir autant que vous voulez ou ne pas en avoir. 


  Là, on voit que la pipeline s’est bien passé, tous les jobs ont une petite marque verte à côté. Le job a réussi, c’est bon signe. On va voir une étape d’assurance qualité qui permet de faire du test unitaire de code. 


  PhP    stan peut le faire mais grumphp, il y a une option qui permet de dire «  ton code ne passe pas » quand on a par exemple une liste de termes dans le code. J’arrête le déploiement quand il y a un dump, un PPM ou même des printers. Toutes ces fonctions de débug, on ne veut pas se retrouver en prod. Au mieux, on se retrouve avec une trace de débug    sur le site de prod et au pire on plante. 


  On va voir un job de backup. Ici vous avez tout le code qui compose mon job. Ça va se connecter au serveur de prod. Ça va faire un dump de la base de données. J’aime bien que ça soit rangé par ordre chronologique. J’utilise la fonction date de bash. 


  Donc mon job il est composé d’une ligne de script qui est celle-là. Une étape de check pour vérifier    l’intégrité du serveur de production par exemple pour vérifier qu’il n’y a pas un développeur qui est allé modifié un fichier pour faire un test directement en prod et qu’il n’a pas récupéré sur son environnement local. Ça fait un git status sur le répertoire de prod.


  On peut dire :  je fais un patch des modifications, je le stocke quelque part et après je fais un git checkout pour annuler les modifications.    C’est le code que vous voyez là.    Ça fait un git div du répertoire web. On pourrait bien mettre un exit 0 ou 1 mais je mets le fail. Deuxième chose, ça fait un test s’il n’y a pas de fichier non versionné qui a été ajouté. 


  C’est le but de la commande qui permet de lister des fichiers qui ne sont pas versionnés et non modifiés. 


  Je ne fais pas de patch mais ça fait planter le déploiement. Sur l’aspect configuration, on a des approches différentes. J’en ai découvert une nouvelle. La mienne, je ne sais pas si elle est bonne ou mauvaise. Je vais pouvoir définir que l’administrateur du site, le client peut modifier certains paramètres, il va avoir un environnement prod qui sera activé sur le serveur de prod. Le fait de faire cette commande me permet d’exporter toute la configuration qu’il a altérée et de la garder dans mon état de déploiement sur la suivante. Ça me permet de vérifier qu’il n’y a pas d’autres configurations    altérées. Ensuite, on une commande pour vérifier qu’on n’a pas de configuration qui a été ajoutée. Forcément, ça serait une catastrophe. Le déploiement planterait, le site serait down. C’est un nouveau truc, j’ai ajouté des étapes de pré-déploiement, c’est lié au fait qu’on est dans un contexte où on fait tous des migrations sur Drupal, on se retrouve dans la problématique : ce module n’est pas compatible avec Drupal 10. Le fait d’avoir un script de pré-déploiement me permet d’activer ce module. Ensuite il sera supprimé via composer. Ce qui était faisable en deux étapes est maintenant automatisé. Quand on fait un upgrade Drupal, ce n’est pas fait en trois jours, en général on oublie qu’il y a une liste de tâches à faire sur le site de prod. J’ai aussi, comme je vous l’ai montré tout à l’heure un site qui va me déployer des assets. Ça va, c’est à adapter en fonction de votre recette, ça se déplace dans le dossier de mon thème. Ça fait un Npm run, sass compile. 


  L’étape de déploiement en elle-même, je vais me connecter au serveur SSH et développer un script de bash dessus. Il va lancer un git pull et bien d’autres choses. 


  L’étape de déploiement, on a généré les assets, il faut les déployer. On a un job qui va faire un R5 de notre répertoire qu’on avait mentionné à Gitlab. 


  Et ensuite on a des étapes de post-déploiement, on va créer du backup de Base de données. Pour la gestion des logs, pour Sentry, on va lui dire qu’on vient de débloquer la release comme ça on saura les bugs qui sont dus à cette version. 


  On arrive rapidement à un fichier Gitlab Ci.


  Il fait plus de 450 lignes, c’est difficile à maintenir. Surtout, en général quand on va changer de projet, on va faire un copier-coller de ce fichier-là sur le nouveau projet, on va oublier de modifier les variables. On aura un truc difficile à maintenir. Au lieu d’avoir un seul fichier de 150 lignes, on peut avoir un fichier de 45 lignes.    Ça permet de mieux ranger les choses. En allant plus loin, on peut faire de la factorisation. 


  Et donc, au lieu d’avoir un job deploy prod et préprod qui sont la même chose, on va avoir un job générique qui n’est pas un job en tant que tel, mais qui est juste une… Je ne sais plus quel est le terme. Il est ici inclus    avec mes deux jobs. 


  Ici, ça va copier-coller ces lignes et utiliser un autre job factorisé de prod qui sert à dire :  je ne déploie que quand c’est un tag qui est créé. Même chose pour le job asset préprod.


  La problématique 2 à laquelle je me suis confrontée c’est qu’on a un fichier    Gitlab CI qui évolue. On se retrouve à devoir    gérer des variables et penser à les modifier. 


  Et surtout, quand on a un projet où on a pimpé notre pipeline, il faut quasiment refaire le chemin dans le sens inverse.


  On va vite se retrouver à perdre du temps sur ce genre de truc. J’ai un dépôt qui va me servir à contenir mes jobs de Gitlab CI, mes jobs de CI. 


  Ici j’ai un fichier Gitlab CI      d’un vrai projet. Je dis que je fais référence à ce projet.    C’est un projet qui est librement accessible, je réutilise les mêmes jobs sur l’ensemble des projets. On peut choisir pour certains projets, parfois on n’a pas besoin de gérer des assets CSS, on va supprimer cette ligne-là.    Ou alors, on n’a qu’un environnement de prod, on va pouvoir personnaliser le comportement de notre CI. Pour déployer un projet, j’ai besoin de cette variable sur mon projet et j’ai besoin de cette dizaine de lignes dans mon Gitlab CI. Automatiquement ça déploie. Ça marche sur    Gitlab.com mais ça peut aussi marcher sur votre instance    autohébergée. Il faut simplement que votre dépôt qui fait référence au dépôt de CI y ait accès. 


  On va généraliser tout le code que je vous ai montré avant à l’aide de variable. 


  Notre ligne de script, ça sera (lecture à l’écran).


  Ça contiendra pour notre cas SSH user@server. 


  Parfois, on doit utiliser un drush qui n’est pas dans le dossier vendor ou avec des arguments spécifiques pour passer l’URL etc. Ça permet de personnaliser ce genre de choses. Si jamais on a des paramètres spécifiques à l’environnement, il permet de définir des variables dans le fichier et aussi au niveau de l’interface Gitlab CI. La clé pour se connecter au serveur, vous allez la mettre dans l’interface de gitlab.com. Ici j’ai deux variables, il y en a une qui est adaptée à la préprod et une à la prod. 


  Ensuite, deuxième étape, si jamais notre projet, si notre projet de job on veut le faire évoluer, il faut assurer la compatibilité, il ne faut pas casser nos anciens    projet. Au sein de mon projet de job Gitlab CI    factorisé, je crée des tags et ainsi j’ai un projet A qui va faire référence à version 0.3.0, et un autre. Même si je fais évoluer des trucs, si je supprimes des variables, je ne casse pas les anciens projets. Il faudra bien respecter les changements. Dernier truc, je me suis ajouté sur un outil de suivi un web book, j’ai une action post déploiement qui va appeler cet outil en lui disant  :  Je viens de développer ce projet en prod, c’est la version 0.1, il utilise la version de mon projet de CI. Le but c’est d’envoyer par exemple le contenu de mon composer, enfin une partie de mon composer pour savoir très rapidement que ce site est en Drupal 9.5.4, pouvoir faire des recherches là-dessus s’il y a une faille de sécurité qui est découverte sur une version d’un Drupal ou de PHP, savoir quel projet est impacté. Pour finir, tout ce dont je vous ai parlé, c’est tout opensourcé. Vous êtes libres d’y accéder. J’ai même fait un peu de documentation. Je pense que mine de rien, il y a quelques idées à récupérer et adapter à vos process. On ne doit pas rentrer dans un mode de fonctionnement. 

   On peut très bien faire un mode de fonctionnement différent. Vous pouvez adapter le code en fonction de votre mode de fonctionnement. Je crois que j’ai terminé. N’hésitez pas si vous avez des questions. Je conçois que ça puisse être un peu abstrait.



  \- Bonjour.


  Les références que tu montrais sur Gitlab CI, ça marche comme composer, à partir de la version 3 et les versions d’après ? 


  Quand on dit 3.0…


  \- Non. Il me semble que c’est un \*. Après, il y a peut-être… Gitlab, j’en découvre tous les jours, il y a peut-être un fonctionne 3.0.\*.


  \- Dans quelle mesure ça s’adapte à une usine à sites, multi environnements ? 


  \- D’une, une des limites de mon projet actuellement, c’est que ce n’est pas fait pour un multisites. Le drush n’est fait que dans le contexte du site principal. Donc en multi sites, il faudrait modifier pas mal de choses. Dans une usine à sites, on pourrait très bien factoriser ce genre de truc et avoir, permettre, ça doit être faisable, de faire un contexte par site, et dire :  ce site, je déploie la nouvelle    version de tel module core, tandis que là, je reste sur une autre version.    Ce n’est pas ce que j’ai présenté là, mais je pense que c’est faisable.




  \- Merci d’avoir partagé tout ça, surtout en open et tout. C’est top.


  Ce sont des sujets qui m’intéressent pas mal.


  J’avais remarqué, il y a des travaux de Jean Valverde, qui avait fait une initiative comme la tienne. Dans la presse de ce matin, d’ailleurs, c’est ce qu’ils utilisaient.


  Quelle est ta position, sur ton projet, tu vas le maintenir dans la durée ? 


  \- En fait, j’ai dit plusieurs fois que j’étais certainement le premier utilisateur de mon site à moi, qui me sert de base de connaissances.    Je suis pour l’instant le seul utilisateur.


  Mes projets qui sont sur des vieux fichiers, je les passe là-dessus car c’est plus puissant. Ce n’est pas une preuve de concept que je vais larguer, et que j’arrête. C’est vraiment un truc, je crois que j’ai une dizaine de sites qui utilisent ça. J’en ai encore une quinzaine à passer. Je continue à le faire évoluer. J’ai pas mal de bugs à corriger. Si vous l’utilisez, et que vous posez une question sur un point en particulier, ou si vous avez des suggestions, je suis preneur.


  \- Je pourrais te proposer des Merge request pour améliorer le truc.


  L’utilisation des alias drush, tu pourrais réitérer… ? 


  \- Il y a une notion d’environnement à Gitlab. J’en ai parlé là uniquement pour environnement prod et préprod. On pourrait imaginer qu’on les utilise dans un contexte de sites, usine à sites.    Et on pourrait définir des alias drush spécifiques à un site.


  \- Sur la problématique multi sites, il y a une autre façon de faire. On peut par exemple faire un job qui va nous appeler une commande, nous générer un nouveau fichier Yaml, qui concerne l’ensemble de nos sites, qui va déclarer des jobs de déploiement. Du coup, ça va créer dynamiquement autant de jobs de déploiement qu’on a de sites.


  \- Le script de déploiement qui est lancé en SSH sur le serveur, c’est celui-là. Il va, en fonction de l’environnement, soit récupérer un tag, soit faire un git reset. C’est un script générique. On pourrait dire que c’est un script que je versionne au niveau de mon projet d’usine à sites. On déploie les 27 sites les uns après les autres. Le but, c’est qu’il y a une recette de base, et après, on peut les surcharger pour chaque besoin.


  \- Là, ce qui est gênant parfois, c’est le séquentiel. On peut parfois utiliser la force des jobs, c’est avoir 27 jobs au stage suivant par exemple. Du coup, ça permet qu’il y ait plusieurs runners en parallèle qui pourraient les traiter.


  \- Il y a un tag sur les runners. Les tâches se lancent en parallèle. Gitlab propose des include* pour faire des scans de sécurité.


  \- Si jamais vous avez un mot ou une question, n’hésitez pas à me choper dans un coin. Merci de votre attention.


  \- A ceux qui ne reviennent pas demain, vous pouvez laisser vos badges et vos verres à l’accueil.
type: conference
---
