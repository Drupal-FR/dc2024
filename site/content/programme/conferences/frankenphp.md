---
title: Avec FrankenPHP, PHP revient d'entre les morts
draft: false
session_id: "#101"
slug: frankenphp
duration: 40 min
audience: Plénière
themes: Analyse
speakers: Kévin Dunglas
companies: Les Tilleuls
teaser: >-
  FrankenPHP est un serveur d'application qui donne des super-pouvoirs à vos
  applications PHP : déploiements simplifiés, applications distribuables sous
  forme d'un seul fichier exécutable, HTTPS automatique, support de HTTP/2 et
  HTTP/3, préchargement des assets avec les Early Hints, mode worker mode,
  capacités temps réel...


  Découvrons comment faire basculer vos apps dans le monde moderne !
prerequisites: ""
slides_files: slides/frankenphp-drupal-sliides-visibles.pdf
video: DXWGHF95Rbs
transcription: >-
  \- Kévin Dunglas: merci à tous. Merci de me recevoir. Je ne vais pas vous
  faire faire de sport. Je vais vous présenter le projet FrankenPHP, que j’ai
  essayé d’adapter avec Drupal, mais je ne m’y connais pas du tout, donc
  dites-moi si je dis des bêtises.




  Je contribue beaucoup à l’écosystème Go, ce qui m’a amené à travailler sur ce projet.


  Je travaille aussi dans une boîte très engagée. Chez nous, il n’y a pas que des anarchistes, on a même des gens de la France insoumise, c’est dire combien on est ouverts. C’est une boîte qui appartient à 100% à ses salariés, les décisions sont prises démocratiquement, on répartit les bénéfices à parts égales en fin d’année.


  On est présent au Maghreb aussi. On a des bureaux à Rennes, mais mes collègues ne font pas de Drupal, donc ils ne sont pas venus. Désolé.


  On fait principalement du PHP tout framework et CMS confondus, du Go et du Javascript. Parfois, c’est obligatoire.


  Venons-en au projet. Qu’est-ce que FrankenPHP ? 


  Qui parmi vous voit ce que c’est Nginx ?  Tout le monde.


  Qui utilise Nginx+FPM ?  Qui utilise autre chose ? 


  Qui utilise quelque chose qui n’est ni Apaches ni PHP FPM ? 




  \- (…) (intervention inaudible)




  \- Le serveur de développement ? 


  Effectivement, il y a aussi possibilité d’utiliser le serveur de développement PHP moins S, mais uniquement en local. Ça ne peut servir qu’une requête en parallèle, ça ne fait pas beaucoup. En production, vous risquez d’avoir des sites très lents si vous utilisez ça.


  FrankenPHP remplace le serveur web et le moteur d’exécution PHP.


  Quand on a commencé à bosser là-dessus, on avait un objectif principal :  simplifier nos déploiements en production et en particulier dans des environnements containerisés. On a des équipes hébergement Devops . Et déployer du PHP, ce n’est plus juste copier des fichiers, la plupart du temps, on demande d’utiliser des plateformes de cloud. Ça peut poser pas mal de difficultés. Il faut 2 containers qui vont communiquer ensemble. En général, il faut un volume partagé entre les 2 containers. Un truc simple à la base est finalement devenu compliqué.


  L’objectif était de simplifier ces déploiements.


  On a vu qu’on pouvait faire mieux que ça. Quand on n’utilise pas Docker. Simplifier les déploiements, aussi en termes de distribution    d’applications. Cet outil est écrit dans un mélange de Go et de C. Et en PHP évidemment pour faire tourner tout ça. Ce qui permet d’ajouter des fonctionnalités qui tirent parti de la plateforme web, et qui ne sont pas forcément évidentes à faire en PHP traditionnel. Alors que ce sont des trucs de plus en plus populaires dans les autres écosystèmes.


  Petite spécificité par rapport aux outils similaire :  c’est compatible avec tous les projets PHP existants. C’est possible d’utiliser ce nouveau moteur d’exécution quel que soit votre projet, même si c’est des projets anciens. Il y a quelques outils qui ressemblent par certains aspects, en particulier Soul, fait par des contributeurs chinois, et Road Runner, fait par une boîte américaine.


  L’un des objectifs de FrankenPHP, c’est d’être utilisé sur les applis sans modification.


  Premier enjeu :  rendre ça le plus simple possible à utiliser. Pour installer PHP sur un ordinateur de production, il faut un PHP FPM, un serveur qui va bien etc. Là, on a créé un seul binaire. Ça va fonctionner de manière totalement autonome sur le serveur.


  Il y a tout ce qu’il faut pour déployer un projet en production, pour lancer nos tests fonctionnels de bout en bout.


  On n’a pas réinventé la roue. On s’est appuyé sur un serveur web modulaire Caddy. Qui l’a déjà utilisé ?  Pas mal de monde.


  Pour ceux qui ne connaissent pas, même si vous ne faites pas de PHP, c’est un nouveau serveur web entièrement libre, qui est écrit en Go, qui s’appuie beaucoup sur la bibliothèque standard de Go, avec pas mal de fonctionnalités, fait pour les environnements Cloud. C’est-à-dire que de base, on va avoir une API qui va changer à chaud la configuration du serveur web. Caddy va pouvoir gérer nativement le renouvellement de certificats entre autres.


  Automatiquement, l’outil va générer des certificats valides.


  Finalement, Caddy propose le support de toutes les fonctionnalités les plus avancées du protocole web, en particulier http 2 et 3.


  Il y a aussi le support des Early Ins* pour accélérer le temps de chargement des pages web. Caddy est écrit en Go.


  FrankenPHP est un module pour Caddy, qui est écrit en Go et en C, qui va charger l’exécuteur.


  Ça ressemble à ce qui se faisait avec mode PHP côté Apache. Sauf que mode PHP est déprécié chez Apache. Il y avait un vide à combler, qu’on a essayé de faire aussi.


  Au coeur de l’outil, il y a une bibliothèque en Go, qui permet d’exécuter du code ou des scripts PHP depuis un programme écrit en Go, et de récupérer le résultat de tout ça, et aussi d’intégrer les scripts PHP, de les servir via le serveur web natif. C’est un bibliothèque qui est du logiciel libre, utilisable avec n’importe quel programme en Go. En Go, vous pouvez créer un petit serveur http, et si vous utilisez cette bibliothèque, vous pouvez utiliser le support PHP très facilement.


  On a joué avec ça ?  Qui a déjà utilisé Symfony sans Drupal ?  Tout le monde.


  On a un patch disponible sur GitHub pour exécuter les scripts en développement, et ça n’utilise pas Caddy. Ce serait facile d’intégrer FrankenPHP aussi, ça pourrait fonctionner, mais on n’a pas pris le temps de le faire. Ça permet d’embarquer PHP dans n’importe quel programme Go.


  PHP propose depuis toujours une couche d’abstraction.




  Il y a d’autres Sapi moins connus. Il y en a un pour lancer PHP.



   En plus de ça, on a écrit un module pour le serveur web Caddy.

  Quand on parle de FrankenPHP, on parle du serveur complet fini qu’on installe sur sa machine. Mais il y a aussi une bibliothèque Go utilisable dans n’importe quel projet.


  Ça, ça a permis d’ajouter le support de PHP nativement sans dépendance externe à Caddy.


  Ensuite, on a pu écrire du code spécifique à FrankenPHP qui a permis d’ajouter des fonctionnalités uniques à l’outil qui sont utilisables seulement quand on utilise FrankenPHP.


  Qu’est-ce que ça fait par défaut ? 


  Le support natif de https, et de http/3, 1 et 2, le support de la compression y compris Brotli et Zstandard.


  Des fonctionnalités qui sont modernes et pratiques dans des infrastructures cloud :  le support natif des logs structurés. Les logs vont être en Jason. Ils seront facilement ingérés. C’est entièrement paramétrable, on peut choisir ce qu’on logge, et où on le logge.


  Il y a aussi le support natif du tracing et des metrics avec Prometheus . Il y en a fournis par Caddy. FrankenPHP en ajoute quelques-unes spécifiques à PHP.


  Pour les sites à fort trafic, il y a aussi les outils qui permettent de faire du rechargement sans couper les connexions en cours.


  Si on résume, on a un outil qui est compatible avec à peu près toutes les applications PHP. On l’a testé avec succès, avec Drupal, Laravel, Symfony.


  Pour utiliser l’outil, on peut télécharger un binaire sur sa machine et le lancer en développement ou en production. Il y a aussi des images Docker officielles qui étendent les images, qui sont fournies qui permettent d’utiliser facilement l’outil.


  On peut configurer très fortement l’outil, le serveur web Caddy est configurable via un fichier spécifique, le Caddyfile.


  Vu que ça utilise derrière le vrai moteur PHP, on peut utiliser php.ini. C’est libre et gratuit.


  Comment on utilise ça ? 


  Il y a la communauté Drupal qui a créé un squelette qui fonctionne de la même manière, qui étend les images Drupal officielles. Sauf qu’au lieu d’utiliser Apache, ça va utiliser FrankenPHP.


  Vous pouvez aller sur ce dépôt GitHub et lancer ces commandes.


  Ça devrait être fonctionnel. Vous aurez toutes les fonctionnalités automatiquement.


  On va dans le dépôt. Vous pouvez regarder dans le Docker file comment c’est fait.


  Pour les applications qui ne sont pas Drupal, là, c’est un exemple avec Laravel, on peut télécharger le binaire depuis le site, lancer la commande. On peut changer via l’option Root, le dossier qui comporte les fichiers publics. C’est ce que fait là cette commande. En général, ça suffit pour avoir une installation de PHP de qualité production sur n’importe quelle machine.


  Si vous avez installé PHP sans Docker à la main, c’est plus chiant que ça.


  En travaillant sur le projet, on s’est rendu compte qu’on avait aussi l’opportunité d’ajouter un mode plus particulier qui permet d’améliorer fortement les performances des applications PHP.


  Ce qu’on appelle le mode work, qui est optionnel. Il va par contre permettre, si vos applis sont codées correctement, d’améliorer fortement les performances de vos applications    PHP.


  L’idée, c’est de copier le mode de fonctionnement des serveurs des autres langages, ça va être de booter notre application    PHP, la garder en mémoire, et réaliser cette application pour traiter les requêtes qui arrivent. L’une des forces historiques de PHP, c’est que c’est un langage fire and forget. Quand votre serveur http reçoit une requête, il va demander à PHP d’aller exécuter un fichier, du coup, PHP va exécuter votre script PHP, votre Drupal, lire la requête, créer plein de services pour lire cette requête, vous permettre de générer une réponse http. Vous l’envoyez au navigateur, et on fait table rase de tout ce qui a été créé. Et pour la requête d’après, on recommence.

   Des applications web qu’on écrit en Java, en Go, en général, ça fonctionne différemment car on écrit un programme qui va écouter un serveur, et on va pouvoir initialiser tout un tas de codes, qu’on va partager. On va pouvoir utiliser ces services pour traiter plusieurs requêtes. L’avantage, c’est que ça permet d’optimiser beaucoup les performances.

  Drupal, Laravel, ils ont un kernel, ils vont devoir instancier beaucoup d’objets. Ça va prendre un peu de temps.


  Un outil comme Black Fire, si votre code est un peu optimisé, vous arrivez rapidement à un temps incompressible de lancement d’application qui est gros. Ça, il faut le faire pour chaque requête. Ce n’est pas le cas dans les langages où il y a du contexte qui persiste entre chaque requête.


  Il y a un gros avantage, c’est que si vous gérez mal votre mémoire, si vous avez du code un peu moyen qui crée des variables globales pourries, ce n’est pas très grave, car après chaque requête, on met le contexte à zéro.




  Faire plus attention va permettre de gagner beaucoup en performance.


  Je résume :  le serveur web, quand il va démarrer, on peut lui indiquer un script PHP. Pour l’instant, ce script est indépendant des requêtes qui vont arriver.


  Ensuite, quand il va recevoir une requête, il va pouvoir exécuter du code PHP. Par contre, il va pouvoir réutiliser des objets qu’il aura créés au démarrage.


  Ça va permettre de gagner du temps. Cela demande de gérer le parallélisme de manière tricky etc. Mais dans le langage de programmation, on a des primitifs optimisés, efficaces, ce sont les goroutines et les channels. C’est une possibilité de lancer du code de manière parallèle et très performante.


  Du coup, on peut utiliser toute la force de C et de Go. C’est possible en C, mais ce n’est pas évident. Le faire de façon aussi optimisée que dans Go, c’est pratiquement impossible.


  On l’a fait en Go.


  Derrière ce mode worker, il y a pas mal de code complexe qui va permettre de faire en sorte que le dispatch, ça va être fait en Go.


  Ça ressemble à un autre outil qui est aussi écrit en Go, RoadRunner. C’est un peu comme PHP FPM, c’est un service dédié, il faut un serveur web à côté, il faut des échanges réseau. C’est comme si on avait un worker, qui était un autre serveur à côté.


  FrankenPHP, c’est un seul process, c’est juste techniquement un appel de fonctions, style C. On peut mélanger du Go, du C assez facilement, et il n’y a pas d’appel réseau, c’est un appel de fonctions. Le serveur web appelle une fonction qui permet au serveur web de traiter la requête.


  C’est beaucoup plus rapide que RoadRunner, qui lui-même est plus rapide que PHP FPM.


  RoadRunner, ils ont fait une API spécifique.


  Dans FrankenPHP, on a fait plus simple, on utilise juste les Superglobals traditionnels.


  Dernière grosse différence, c’est que ce mode est entièrement optionnel.


  Dans Symfony, depuis quelque temps, il y a un composant qui permet de booter l’application sur différents environnements. C’est le composant RunTime. Vous l’avez déjà utilisé ? 


  Si vous avez fait du Symfony sans Drupal, vous l’avez forcément utilisé.


  Ce composant est pratique, il permet d’abstraire comment on va démarrer une application.


  On va pouvoir fournir une autre implémentation du runtime et avoir le support automatique du FrankenPHP.


  Pour Drupal, je sais qu’il y avait des tickets ouverts. Il me semble qu’il y a des ateliers contribution aujourd’hui et demain. On en rediscutera un peu. Si vous voulez bosser avec moi pour améliorer le support, ce sera avec plaisir.


  En Symfony, sur n’importe quel projet, il n’y a qu’à installer le système de gestion des workers. Tout ça est disponible dans PHP Runtime. On démarre FrankenPHP en lui indiquant avec l’option W le script worker à utiliser.


  C’est le même qu’on aurait avec Apache.


  Ça marche.


  On a le traitement. Symfony est démarré une fois. Il va être démarré deux fois le nombre de CPU de votre machine. Il n’y a pas un seul script worker qui démarre.


  Ça dépend des applications, on peut changer le nombre de workers qu’on démarre.


  On va attendre un nombre de workers qui vont attendre.


  Ça, sur nos applications Symfony, ça permet d’accélérer nos performances.


  Il y a la même chose qui est disponible pour Laravel Octane. Ils supportent aussi d’autres outils comme RoadRunner et Soul. Il y a quelques autres outils, comme CMS, qui supportent nativement ce mode worker. Malheureusement, ça ne marche pas pour l’instant avec Drupal, il y a des problèmes de session.


  Je suis disponible cet après-midi pour regarder s’il y a une solution pour régler ça.


  La coreteam de Laravel a fait pas mal de tests. Ils nous ont bien rendu service. Ils ont tellement manipulé l’outil, ils ont envoyé un nombre de bugs énorme. Honnêtement, c’était plutôt pratique. L’équipe a fait des benchmarks sur leur outil, et là-dessus, ils arrivent à des résultats assez impressionnants. FrankenPHP est cinq fois plus rapide que Soul, et deux fois plus rapide que RoadRunner.


  En termes de performance web, ça fait une différence énorme, quand on compare à du PHP sans mode worker.


  Ceci dit, toutes les applications ne sont pas hyper bien faites. Il y a des bidouilles possibles. Les deux proposent une option de configuration pour redémarrer le script.


  Il y a quand même quelques trucs qui permettent de l’utiliser assez facilement pour des applications qui n’ont pas été conçues pour.


  Autre fonctionnalité, qui elle marche avec Drupal, qui est spécifique à FrankenPHP. Le support 103. Qui en a déjà entendu parler ?  Quand même pas mal de monde.


  J’espère que les autres, vous allez tester ça dès que vous allez être sur vos projets clients. Il y a quelques années, il y a eu une FRC expérimentale pour améliorer la performance des sites web.


  Ce truc n’a pas été implémenté pendant longtemps, car il y avait une alternative plus efficace. A un moment, Google a dit qu’il fallait supprimer ça.


  Ce n’est donc plus supporté par Google Chrome.


  Ça répondait quand même à un vrai cas d’usage. Du coup, ils l’ont ressorti.


  Et c’est aussi supporté par Firefox depuis pas très longtemps.


  C’est beaucoup plus simple à implémenter et à comprendre, et à coder.


  Ce truc, depuis cet été, c’est supporté par tous les navigateurs, ça permet d’améliorer beaucoup les performances des applications web, en particulier celles qui ont beaucoup d’assets, beaucoup d’images etc.


  Il y a eu des études menées par Shopify, Google, etc., qui donnent des résultats assez impressionnants :  plus de 500 millisecondes de gain.


  Comment ça marche ? 


  Une page web traditionnelle a un fonctionnement synchrone :  d’abord, on a une requête. Le navigateur va demander une ressource. Il faut que le serveur génère ce fichier html, au moins les entêtes.


  Ça va prendre pas mal de temps.


  Après, vous allez connaître la taille de votre body, et vous allez commencer à streamer.


  Pour afficher les données à l’utilisateur, en plus, il faut un fichier CSS, et en plus des images, donc du Javascript en plus.


  Seulement à ce moment-là, le navigateur va commencer à télécharger ces éléments, et il pourra faire le calcul, le rendu pour afficher la page à l’utilisateur.


  Le principe du Early Hints, c’est que vous savez à l’avance qu’il y aura besoin de ça. C’est dommage d’attendre de faire toutes les requêtes SQL etc.    pour seulement commencer à télécharger ces éléments qui seront de toute façon    nécessaires.


  En face d’une requête, on peut envoyer plusieurs réponses. Ce n’est pas très connu.


  Quand votre navigateur demande un upload de fichier, il demande la taille du fichier, et le serveur dit :  je ne l’accepte pas ! 


  Donc ils ont ajouté le code. Tout de suite, on peut envoyer une réponse informative avec des entêtes http link.


  Ensuite, serveur think time, c’est notre PHP, notre code bien propre, qui va prendre un peu de temps. Pendant ce temps-là, le navigateur télécharge les assets.




  Ça permet de faire gagner beaucoup de temps. Ça n’accélère pas les réponses http. Par contre, ça accélère la latence perçue, car on va pouvoir paralléliser au maximum.


  C’est clair ce que je raconte ?  OK.


  N’hésitez pas à me dire.


  Côté serveur, ça a pris plus de temps. Ce n’était pas si évident que ça. En PHP, en 2021,    on a vu la pool and *.


  Petite contrainte :  ils n’ont activé ça que pour https.


  En PHP, en général, on utilise PHP FPM. Du coup, la connexion http 2 et 3, c’est fait avec le serveur web.




  Déjà, une requête, une réponse. Ça pose un premier souci.


  Deuxième problème :  de toute façon, il faut avoir accès à la connexion DCP pour faire ça. En PHP, on ne l’a pas, donc c’est mort.


  En Go, théoriquement, c’était possible. Mais Google n’avait pas fait les patches pour le faire. On a bossé avec l’équipe de Go, pour des raisons qui n’avaient rien à voir avec FrankenPHP,    j’avais contribué, le support des Early Hints, on avait ajouté le support de ça à Go. On s’est dit :  il y a le support de ça dans Go. Et nous, le serveur web et l’exécuteur PHP, c’est le même process :  on a accès à la connexion UDP. Donc on pourrait gérer les Early Hints.




  On a regardé avec quelques collègues comment c’était possible de le faire, ce serait extrêmement compliqué.


  En Go, c’est supporté. Donc c’était assez facile d’ajouter le support de ça dans FrankenPHP.


  On a repris la RFC de Nikita, on a implémenté des fonctions qui sont disponibles pour l’instant que dans FrankenPHP mais qui, à terme, pourraient un jour être ajoutées dans d’autres Sapi.


  On utilise la fonction header. Ensuite, une nouvelle fonction, ajoutée par FrankenPHP, c’est header send qui prend en compte un paramètre de statut. Et on déclenche immédiatement une réponse 103.




  Depuis Symfony 7, je crois, c’est aussi disponible de base dans Symfony http Foundation.


  Vous pouvez récupérer votre réponse Symfony, modifier l’entête.


  Vous pouvez le faire dès aujourd’hui dans vos applications.


  On a aussi un autre problème traditionnel dans PHP qui est le temps réel. PHP, temps d’exécution, maximum, 30 secondes. Donc pas trop possible.


  Des gens ont déjà utilisé Mercure ?  Merci à vous, c’est cool.


  L’idée est de pouvoir laisser le serveur envoyer des données en temps réel.


  En fait, ce truc est aussi écrit en Go, et aussi disponible sous forme de bibliothèque autonome. On l’a intégré de base dans FrankenPHP.


  Depuis votre script PHP, il n’y a qu’à faire une requête http vers le serveur lui-même.


  C’est aussi supporté de base par Symfony. Du coup, vous pouvez utiliser la hub interface. Vous créez votre update, vous appelez la méthode Publish, et le navigateur va recevoir la donnée.


  Côté navigateur, on n’a juste à utiliser Event Source pour s’abonner.


  Dernière feature :  la possibilité de packager vos applications sous forme de Binaire. Vous allez pouvoir le lancer sans aucune autre dépendance. Pour distribuer des applications, si vous les vendez à plusieurs clients, pour un ERP, c’est une manière de distribuer sans avoir besoin d’installer PHP.


  Vous pouvez empaqueter votre application Drupal dedans.


  Il faut que ce soit en mode prod. Vous clonez le dépôt. Il y a un script à exécuter.


  Ensuite, ça crée un binaire, quand vous lancez le binaire, votre application Drupal est exposée, vous pouvez lancer des commandes.


  Merci à tous.


  J’espère que ça vous a donné envie d’essayer.


  S’il y a des gens qui sont motivés à faire marcher le mode worker avec Drupal, ce qui n’est pas le cas actuellement, on peut essayer de le faire.


  \- On est un peu à la bourre, mais est-ce qu’il y a des questions ? 


  \- Merci pour la présentation.


  Ça fait du sens d’avoir Drupal qui propose FrankenPHP par défaut dans le corps pour tout ce qui est serveur d’application  ? 


  \- Kévin Dunglas  :  Je ne connais pas bien comment c’est distribué, Drupal. En tout cas, dans Symfony et API plateforme, c’est ce qu’on met par défaut maintenant. Et Laravel, pour l’instant, le support est encore expérimental, mais normalement, c’est ce qui sera par défaut. En tout cas, nous, ça nous ferait plaisir, clairement.


  \- Bonjour. Merci.


  Quand tu utilises FPM, tu peux lancer un certain nombre de processus en attente de requêtes. Sur la stabilité de la solution, comment tu présentes les choses ? 


  \- Kévin Dunglas  :  Il y a la partie écrite en Go et la partie écrite en C, qui cohabitent dans le même process.


  Go    est fait pour ça. Le système de Goroutines, tout est géré automatiquement. Il y a quelques variables d’environnement qui permettent de configurer le moteur.


  Globalement, si c’est un serveur classique, il vaut mieux laisser le truc par défaut.


  Puis, la partie en C, par défaut, on lance deux par CPU. C’est configurable. C’est bien de regarder en fonction de votre application quelle est la meilleure valeur, et d’augmenter ou de diminuer le nombre de workers pour utiliser 100% du CPU.


  Dans le futur, là, on bosse pas mal avec les gens de la fondation PHP    pour voir à simplifier quelques trucs pour ne plus utiliser de vrais threads.


  Il y a quand même pas mal de boulot à faire dans le coeur de PHP pour ça. Du coup, on ne sait pas si ça arrivera un jour, ni quand. Mais il y a encore des marges d’optimisation possibles.


  \- Merci.


  \- Bonjour. Un des soucis qu’on a dans Drupal, avec les applications qui durent longtemps, en production, c’est les changements de topologies qui provoquent des ruptures de connexion vers la base de données par exemple.


  Pourrait-on le remonter vers PHP par exemple ? 


  \- Kévin Dunglas: c’est un problème qui est récurrent.


  Il commence à y avoir du code, si la connexion a été coupée, qui la relance aussitôt. Du pooling, ça dépend des drivers, de la base de données    que vous utilisez, mais il y en a qui supportent du pooling.


  Cela n’empêche pas que, s’il y a un time out, il y aura quand même un problème.


  Du coup, je ne suis pas sûr qu’il y ait un gros intérêt à gérer ça en Go.


  Ceci dit, techniquement, l’un des avantages de la solution, pour ceux qui savent coder bas niveau, on peut utiliser n’importe quelle bibliothèque Go, et les exposer dans PHP via une fonction. Ce n’est pas fait pour l’instant. Je ne suis pas sûr que ce soit la meilleure approche.


  Mais techniquement, ce serait possible, oui.


  \- D’autres questions ? 


  \- Une question sur l’environnement plus que la technique. Depuis combien de temps ça a commencé FrankenPHP? Il y a un business model derrière ? 


  Sur le long terme, si on veut utiliser ça dans Drupal, on a besoin que ce soit solide pendant au moins dix ans.


  \- Kévin Dunglas  :  Bonne question.


  A la base, c’était un truc pour s’amuser, et un sujet de conférence pour essayer de faire marcher le moteur d’exécution PHP en Go. Il s’est avéré que ça marchait mieux que prévu, donc on a poussé le truc.


  Maintenant, ça commence à être utilisé beaucoup en production, à être intégré dans les gros frameworks.


  Il n’y a pas de business model derrière, c’est un projet libre, dont les contributeurs sont aussi des core contributeurs.


  Il n’y a pas vocation à faire du business avec l’outil. Ce qu’on fait chez Les Tilleuls, c’est qu’on considère qu’on fait du bon boulot, et les gens nous appellent  quand ils ont besoin, ça finance le truc.


  Le projet est sponsorisé par Les Tilleuls et maintenu par Caddy lui-même.

   Ça leur donne une visibilité très forte au sein de Laravel. Caddy a été créé par des gens dont une personne était développeur chez Laravel.

  Ils veulent se développer là-dessus, et eux, ils ont un business model autour de Caddy. On peut acheter la prestation, et surtout du support.


  Pour toute la partie Go, module Caddy, la maintenance    est faite en collaboration    avec Caddy, la communauté.


  \- On va arrêter les questions. Il ne reste qu’un quart d’heure pour le café.


  Comme vous voulez.


  Ça redémarre à 11h.
type: conference
---
