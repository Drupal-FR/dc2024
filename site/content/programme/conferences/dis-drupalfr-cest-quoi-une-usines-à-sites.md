---
title: "Table ronde : C'est quoi une usine à site ?"
draft: false
session_id: "#63"
slug: 63-usine-sites
duration: 40 min
audience: Intermédiaire
themes: Usine à sites, outils
speakers: Simon Georges
companies: Association Drupal France et francophonie
teaser: >-
  Cette discussion animée par Simon Georges sera l’occasion d’échanger sur des
  expériences autour de la création d’usines à sites pour aborder leurs
  différences de conception.


  La parole sera donnée à des acteurs et mainteneurs de solution pour évoquer les besoins récurrents de ce type de projet, les solutions existantes mais aussi les limites et les principaux problèmes rencontrés.




  Intervenants invités : Sylvain Moreau (Axess), un intervenant technique chez Smile, flocondetoile, David Piederriere de l'université de Rennes
prerequisites: ""
plan: >-
  * Qu'est-ce qui, pour vous, qualifie un projet d'«Usine à sites» (le nombre de
  sites, l'outillage associé...) ?

  * Quels sont les besoins récurrents de ce type de projet ?

  * Quelles sont les solutions techniques fournies sur étagère (ou presque) par Drupal ? Quelles sont les différentes typologies d'usines à site ?

  * Quelles sont les limites actuelles / les principaux problèmes de ces projets ?
takeway: Comment choisir entre les différentes solutions techniques existantes.
  Comment mieux conseiller les clients éventuels sur les problématiques liées
  aux usines à sites en Drupal.
slides_files: slides/support-de-slides-table-ronde-drupalcamp-rennes-2024.pdf
video: wYvt0uBzaPc
transcription: >-
  \- Bienvenue à toutes et à tous. Je pense qu’on sera nombreux pour dire que
  les usines à sites, c’est un sujet majeur dans le développement Drupal. On a
  souhaité vous présenter une table ronde pour échanger sur les différents
  retours et l’historique de ces projets. On a des profils différents. Je vais
  les laisser se présenter, je vais essayer de modérer un peu les questions. 


  \- Je suis un des locaux de l’étape, je suis David Piederriere, je suis chef de projet web au sein de la direction de la communication de l’université de Rennes, une des deux universités du coin.


  \- Bonjour, Sylvain Moreau, je suis dans un agence qui fait du Drupal depuis 2006. On a été amenés à bosser sur pas mal d’usines à sites. Je suis commercial, je ne vais représenter que le côté utilisateur final.


  \- Bonjour, Florent, expert technique Drupal chez Smile. Je suis en moyenne chaque année sur 1 projet multisites, usine à sites.


  \- Tu fais partie des développeurs d’un module utilisé parfois.


  \- Je suis créateur d’un module en Drupal 8 qui sert à partager du contenu entre vos différents sites Drupal. Merci.


  \- Déjà, j’ai une question qui est toujours problématique quand on reçoit un appel d’offres, c’est :  c’est quoi une usine à sites ?  J’aimerais que vous nous donniez votre point de vue ?  Dans l’ordre où vous le sentez.


  \- De mon point de vue qui est celui d’un non-technicien. A la base, le besoin c’était d’avoir un CMS un peu moderne pour remplacer un Java qu’on avait qui était un peu déjà une usine à site, cela permettait de créer un site sans intervention technique. Donc se focaliser sur la communication et pas sur la technique. C’était le site web comme un outil de communication, on se concentrait là-dessus. D’où la nécessité pour nous d’une usine à sites. On ne se laisser pas vampiriser par la technique. 


  \- Pour reprendre ton expression de DevOps, dans les problématiques de l’usine à sites, le DevOps, il intervient en dernier. La première chose à voir c’est pourquoi le client a besoin d’une usine à sites ?  Ça peut être pour partager un back office, avoir des sites avec un back office commun. Les utilisateurs, il faut qu’ils aient un SSO pour se connecter ensemble. Il y a des dizaines d’utilisations. On demande ce qu’est la volumétrie. Avez-vous deux sites à faire par an ou plutôt 30 à 40 ?  On va réfléchir à comment industrialiser ça. Il faut toujours recentrer sur les besoins fonctionnels et le cahier des charges final de l’utilisateur. Parfois il a juste besoin de 3 sites, on peut l’envisager différemment.


  \- Pour compléter, je voulais aborder l’aspect usines à sites versus multisites. Ce sont souvent des termes qu’on voit côte à côte qui sont parfois confondus.    Pour essayer de clarifier, souvent on va avoir des usines à sites sous forme de multisites. Mais un multisites n’est pas forcément une usine à site. On peut avoir un site déployé en multisites. Mais les sites peut n’avoir aucun rapport. Une usine à sites c’est pour de l’économie d’échelle. Ça peut être des instances à part. Pour clarifier un peu la différence. 


  \- Ce qui est important, c’est la notion d’usine pour nous. On a 120 sites, on a une organisation qui est assez éclatée, qui a des besoins différents dans le temps. Mais ils sont réels, ce sont des gens à qui on ne peut pas dire non. On a récupéré des outils qui étaient vieillissants. En général pour 4 à 8 000 balles, ils avaient un Wordpress avec un vague thème. On voyait beaucoup de mauvaise dépense de l’argent public. Le terme d’usine à sites ce sont les prestataires qui nous l’ont amené.    On se vanter de monter une agence web à l’intérieur de la faculté pour que les collègues arrêtent d’aller voir ailleurs. L’usine à sites, c’est arrivé en second temps. On leur a décrit la situation, c’était le prestataire, c’était Adiax à l’époque, je pense qu’ils n’existent plus, ils nous ont vendu le terme d’usine à sites.


  \- Ça s’est aussi développé avec le design système, tu parlais de mutualisation des coûts, c’est ce qu’on a fait aussi. On ne peut pas, on a fait une usine à sites, c’est un peu technique, on a fait une forge logiciel. L’idée était d’avoir un stack technique. Par contre, il y a un gros travail en interne de les obliger à passer dans un cadre technique commun. Le fait d’avoir un design system c’est d’avoir un tas de gabarits qu’on peut assembler. On a choisi de le faire avec Drupal, on a été au bout de la démarche pour permettre de se servir d’une base front pour construire des sites et aller au-delà d’une usine à sites. C’est le cas extrême, on permet de faire des petits WordPress pour les gens qui ne veulent pas se contraindre dans le cadre. Les gens à qui on parle, c’est toujours la DSI, la Dircom. Ils vont déployer leur plan de communication et la DSI qui dit :  il me faut un budget, il faut maîtriser. 


  On va partir sur cette solution. On parlait de recenser les besoins utilisateurs, il y a aussi le côté … Comment… Je ne sais plus où j’en suis …


  J’ai oublié ce que j’allais dire.


  \- Je vais meubler. Du coup je vais avoir du mal à rajouter par rapport à ce que vous avez dit.


  \- C’est bon. Le dernier point qui peut être une contrainte dans un environnement international comme ça c’est si vous avez des multinationales qui bossent sur des usines à sites, il faut savoir s’ils ont besoin de bosser avec la Chine. La Chine, c’est un grand proxy, pour avoir un site en Chine, il faut se mettre derrière ce grand Proxy. Il faut y penser dès le début. Ça peut être une contrainte dans le choix de la solution. 


  \- Côté client par exemple nous à l’université de Rennes, on est 4 ETP pour gérer l’usine à sites. Au début, on est allés voir Acquia. Ça s’est arrêté très vite.    Ensuite c’est le travail avec les agences qui nous a permis de nous organiser. C’est pourquoi cette notion nous a permis de réaliser que ça orientait les choix de solutions, mais que ce n’était pas le point final à la démarche et ça ne nécessitait pas d’embaucher 10 personnes. Ça aurait mis fin à la discussion très vite dans le public.


  \- C’est un outil pour rationaliser la création de site. Vous avez parlé de solutions. J’aimerais qu’on aborde les différentes solutions. Pouvez-vous parler des solutions que vous utilisez ?  


  \- Déjà, par rapport à l’orientation de solution, il y a plusieurs problématiques avec les usines à sites, déjà est-ce que c’est la DSI ou la Dircom qui demande ça ? 


  La DSI, c’est la technique, alors que la Dircom ils vont s’assurer qu’en termes de design, on est bien. Deux problématiques, la problématique , la première, ça va être la gestion de la configuration. Est-ce que les sites doivent avoir la même configuration ? 


  Qu’est-ce qui va différer ?  Qui va gérer ces différences  ?  Et l’autre sujet, c’est la partie contenu. S’il y a des sites différents, je suppose que c’est pour des contenus différents. Est-ce que j’ai besoin de partager du contenu ? 


  Mutualisation ou différentialisation de contenu. 


  \- Bonjour, je suis directeur technique chez Axess. On a plusieurs problématiques au sein d’Axess. Une des premières problématiques et questions à se poser c’est :  est-ce que le client en a vraiment besoin ?  Parfois, ce n’est pas forcément une nécessité. Parfois c’est simplement un espace dédié à quelques contenus avec une marque différente graphiquement, et on n’a pas besoin d’un multisite ou d’une usine à sites pour cela. Pour les bases de données séparées, si on a besoin de contenus communs, ça va être plus difficile de les partager. Ce sont des questions qui sont essentielles. Il faut travailler le besoin du client, le remettre en question et savoir vraiment ce dont il a besoin pour pouvoir au mieux le conseiller.


  \- En effet, pour reprendre ce qui a été dit, c’est ce qu’on partageait avec Simon avant la table ronde, en fait, quand vous avez un appel d’offres qui va vous demander une usine à sites, avant d’avoir fait un ensemble d’ateliers fonctionnels avec lui pour comprendre le besoin. Ce n’est pas juste un rendez-vous qui va remonter le besoin. On ne peut pas lui dire :  ça va être un multisite Drupal. Ça ne va pas être un entity share, on aura carrément des Drupal qui sont n’importe où, pas hébergés ensemble, ils ont leur propre vie mais ils ont des objets communs, ils vont pouvoir synchroniser tout ça, on va pouvoir choisir qui est le master, qui est le slave, je suis désolé, je ne voulais pas utiliser ces termes.


  \- Le client et le serveur.


  \- Voilà. On a cette logique de je vais créer un contenu et le partager sur tous mes sites. Ce sont des Drupal qui ont des objets en commun. Tout a été prévu. Inversement, si on a besoin d’avoir des back office communs, parfois il y a des besoins, on peut servir de domain access. On a un back office commun, et on choisit son contenu. On va pouvoir le dire :  je le mets sur tel ou tel et tel site. On peut avoir plusieurs sites qui partagent le même back office. Par contre, on a besoin d’avoir la même configuration de contenu. On a fait le site du Palais de la Porte Dorée, il y a 4 sites en un. En fait, le client voulait une usine à sites, on lui a fait comprendre qu’il avait juste besoin d’avoir un back office commun. On a plein d’objets communs, des articles, des contenus et sur le site de l’aquarium par exemple on a des notes poissons. 


  Je vais laisser mes collègues parler des autres approches possibles.


  \- Nous on est partis sur Aegir.


  On récupérait une grosse volumétrie de site.    Ils m’ont peut-être vendu quelque chose dont je n’avais pas besoin. On est basés sur Aejir, ça permet de pouvoir très facilement sortir des sites. Moi qui ne suis pas technicien, je suis à la direction de la communication, via Aegir, je crée des sites, je les modifie si besoin. J’ai un outil de travail qui me permet de gérer une grosse volumétrie. On a 120 sites. On ne s’est jamais posé la question de savoir si autre chose peut correspondre. Maintenant on commence à se poser la question. Jusqu’ici ça répondait très bien. On avait déjà en tête quelque chose de conséquent.


  \- C’est parfait pour rebondir sur ce qu’est Aegir. Côté Sud, c’est pareil, on est sur ça aussi. Côté Drupal 7 c’était très bien. Depuis pas mal d’années, ils ont du mal à prendre le tournant. Il y a Aegir 5 qui est en préparation. Je ne sais pas si c’est opérationnel. 


  Ça souligne une question en plus à se poser en termes d’usine à sites. En général si c’est pour 4 ou 5 sites, on ne se pose pas la question, on n’en a pas besoin. Mais s’il y a plus de sites, on se demande si le client peut déployer de nouveaux sites et gérer les sites existants. 


  Ça déploie un nouveau site, une base de données, ça peut être compliqué ce côté donner accès à une application qui permet de créer une nouvelle base de données. En général les équipes infra ne sont pas ouvertes à ça. En général on va partir sur des scripts aux petits oignons. C’est maîtrisé. 


  \- Du coup, après c’était surtout pour répondre aux questions, chacune des solutions a ses inconvénients et ses avantages.


  Il y a des notions aussi, si on décide de séparer les back office, il y a une plateforme de contribution. Ou d’autres usages qui sont de transmettre des contenus entre des environnement  ?  Parfois ça arrive. Après, on a toutes ces problématiques même pour domain access, dans ce cas-là il faut bien cloisonner les droits.    Il y a tout un travail de droit qui est important. Il vaut mieux partir de la solution qui vous semble simple et savoir s’il y a besoin de complexité. 


  Est-ce qu’on fait un gros dossier de configuration commune et quelques configurations spécifiques pour des sites ?  Voilà.


  \- Il y a aussi peut-être les contraintes inhérentes à chaque client. Par exemple on va penser au partage des media, on a une bibliothèque de media à partager. Mais sur des gros clients, ils ont déjà un Dam. Ça va être pareil avec un SSO, ça sera plus simple d’avoir une seule base de données. Mais si le client a déjà du Active directory, finalement, cette notion d’un back office commun, on n’en a plus besoin. Il y a aussi le niveau de maturité technique du client.


  \- On n’a pas de back office commun, par contre, on a la même interface côté contribution bas niveau. Je travaille avec des gens qui ont des maîtrises différentes du web. Ils se connectent sur un site, c’est la même interface pour eux.    Une fois qu’ils savent utiliser un site, ils savent tous les utiliser. C’est la même chose qu’ils ont sous les yeux. Trois collègues dans le même bureau peuvent travailler sur un site différent et ils peuvent quand même s’entraider, se montrer les fonctionnements. Notre usine à sites permet ça sans avoir un back office commun. 


  \- Si je peux rajouter au niveau limites et problèmes. En termes de partage de contenu, vous avez bien vanté entity share mais avec la notion de serveur client, sur beaucoup d’usines à sites, les clients veulent un site qui soit le site principal, voire même un site caché pour faire content hub. Mais la question qu’il faut poser, c’est le côté bidirectionnel des modifications de contenu pour éviter les boucles. Par exemple si vous avez votre site principal et un site pays, un site par pays pour avoir des marchés différents par exemple. Votre contenu sur votre site principal, s’il est déployé sur le site du pays, que se passe-t-il s’il est modifié sur le site pays ?  Il y a également, ça peut avoir un impact sur les workflow de contribution. Mais ça c’est limite plus de l’humain que du technique finalement.


  \- Il y a encore une limite aussi, au niveau déploiement. Déployer un seul site qui est segmenté en domaines, c’est plus rapide et simple que de déployer 50 sites. C’est important. Est-ce que pour la mise à jour, pour la synchronisation des contenus, je vais y passer deux heures ou dix minutes ? 


  \- En général, le client, l’exigence, c’est d’être vraiment indépendant au niveau de la création d’un site. Se dire :  maintenant j’ai mon usine à sites, je veux pouvoir initialiser mon site, on a un TTM d’une heure. Ça implique des contraintes qui ne sont pas les mêmes au niveau architectural.    Alors que si on fait de la pédagogie en leur disant  :  Vous n’avez pas besoin de créer un site tous les 4 matins. Si on a un workflow dédié à ça, des templates, et en 1h c’est fait, c’est entendable. Au début, les gens veulent une usine à sites où ils cliquent et ils ont leur site. Là on voit des conférences de haut niveau, on parle DevOps, CI CD.    Au début, il n’y avait pas toutes ces possibilités d’agir sur le code et sur Drupal. Ce qui se cache derrière une usine à sites, c’est en général de la forge logiciel. On vous aide à développer la CI CD, les pipelines. On a la chance de pouvoir se poser avec les retours d’expérience qu’on a sur les usines à sites. Nous, on pourra confirmer, mais on a fait des usines à sites dans le passé, on a même commencé à faire des CMS sur étagère pour Radio France par exemple, on avait une base de code commune et on faisait des instances. Maintenant on peut faire plein de choses en DevOps type platform as a service. On peut faire des choix technologiques. On ne pouvait pas faire ce déploiement automatisé avant. On est moins limités. Il faut se poser les questions des vrais besoins avant de faire un gros choix technique. 


  \- Tu me fournis la transition. Je pensais à entity share. Vous avez des choses en tête qui pourraient faire changer les usines à sites ? 


  \- Je pense à deux usages en particulier, par exemple, est-ce que mon contenu j’ai vraiment besoin qu’il soit présent dans Drupal  ?  Est-ce que c’est la référence ou bien le contenu en lui-même qui doit être présent ailleurs ? 


  Il y a le moteur de recherche qui est en commun entre beaucoup de sites. Si vous faites le rendu des pages via le moteur de recherche, vous pouvez avoir tout le contenu de tous les sites partagés sans avoir le contenu en lui-même. Dans le cadre de Sso, on a les solutions client. Si le client n’en a pas, il y a des protocoles qui permettent d’avoir les deux modes de fonctionnement. Dans ce cas-là, vous pouvez avoir un Drupal qui sert de serveur pour les autres. 


  \- Là-dessus, par rapport au sujet des mises à jour, ça a déjà été abordé le côté, si on utilise domain, il y a un seul site mais il y aura toutes les URL en mode maintenance. Il y a plus tendance, sur les projets sur lesquels j’étais, le côté « on préfère avoir plusieurs sites » pour se permettre de dire :  on met à jour ce site à tel heure et ce site-là en particulier il ne faut pas y toucher par il y a tel événement. Ce n’est pas grave, la release est prête mais on le fera plus tard. Ce découpage-là.


  \- On a aussi un gros avantage avec les outils comme Git Lab de pouvoir découper chaque site en chaque job. Vous avez la possibilité de mettre en place des systèmes qui peuvent déployer en parallèle des sites.




  \- On est passé d’une époque où pour faire une mise à jour sur une usine à sites, lancer un update de base de code, c’était un script qui mettait à jour chaque site. Ça a été plus pensé en amont, on fait une mise à jour sur tous les sites en 1h. C’est l’avantage de ces nouvelles architectures, c’est de se poser la question :  combien il y a de personnes pour le maintenir ?  Combien de budget  ?  C’est comme un road map fonctionnel. On a fait des sites pour des unités de recherche, ils n’ont pas les mêmes besoins, on peut faire des choix architecturaux qui n’ont pas besoin de beaucoup de maintenance.


  \- Juste un point, je ne sais pas ce que sera l’avenir des usines à sites, mais côté client, il y a quand même un souhait, c’est d’avoir des architectures qui ne soient pas aussi lourdes. On a l’impression d’être engagés. Repartir sur autre chose, on serait obligé de stopper toutes les actions d’exploitation. On a fait un choix qui est très engageant. Si on devait revenir sur ce choix, ça serait un projet très copieux à monter en interne.


  \- Comment on migre une usine à sites ? 


  \- On en refait une à côté et on… On ne migre pas.


  \- Toujours pour le sujet usine à sites versus multisites, pour l’avenir des usines à sites qui se présentent sous forme de multisites, il y a toujours la question qui est remise sur la table. Est-ce que Drupal doit droper le multisites ?  


  Déjà, en plus, il y avait le côté, plusieurs sites dans la même base de données mais avec des préfixes de table différents, c’est encore maintenu. Cette partie-là si elle doit partir ou pas ?  Pour l’instant, toutes les fonctionnalités sont gardées mais je pense que sur le long terme, le côté plusieurs sites dans une même base de données, avec le préfixe, ça va dégager assez vite. Mais le côté multisites, je pense que ça va perdurer. 


  Surtout avec les déploiements désynchronisés.


  \- J’ai eu les réponses à toutes mes questions, je pensais ouvrir les questions au public. Allez-y. 


  \- Bonjour à tous. Je suis chef de projet chez Bludrop. La question d’Aegir, on se l’est posée car on a beaucoup de nos clients qui utilisent cette solution. A l’époque c’était la solution phare pour une usine à sites. Aujourd’hui ce n’est plus trop maintenu. A notre avis, ça va disparaître. Ce n’est pas maintenu sur Drupal 10. C’est très compliqué. C’était pour dire qu’on est en train de travailler dans la boîte sur un fork d’Aegir pour les clients. 


  Pour continuer cette solution. Parce que je pense que ça concerne pas mal de monde comme à l’époque on le disait, en 2017 beaucoup de gens sont partis sur cette solution. C’était plus pour information. 


  \- Le code est libéré, si vous allez sur notre site, on a le lien vers le dépôt si vous voulez participer ou pas. Voilà. 


  \- Est-ce que Aegir 5 peut ouvrir des perspectives ou pas du tout ? 


  \- Pour l’instant, on ne sait pas où ça va. On ne sait pas ce que ça va donner. On a pris le parti qu’on va voir ce que ça va donner. Je pense qu’on ne va pas partir là-dessus. Ça va mettre du temps et pour l’instant il n’y a rien de concret. 


  \- Il y avait d’autres solutions type Boa qui essayait de faire marcher D 10 sur Aegir. L’a c’est la version de PHP qui pose problème. Nous, on essaie surtout de donner un peu plus d’oxygène pour des clients historiques pour pouvoir passer à autre chose. Même si on pense que ça ne va pas spécialement se finir bien. 


  \- On a besoin de temps, vraiment. 


  \- Bonjour. Je suis architecte. J’ai remarqué beaucoup que vous avez fermé le focus sur la problématique de partage de contenu mais quand on veut par exemple maintenir un parc applicatif avec 130 applications et qu’on veut que des fonctionnalités soient partagées, c’est là que ça pose problème. Avec tout le workflow pour déployer sur l’ensemble des sites, c’est plus problématique que la gestion des contenus. Avez-vous déjà repéré des solutions qui peuvent limiter l’impact qu’il peut y avoir si on doit déployer la même fonctionnalité sur l’ensemble des sites ? 


  \- Quand tu dis 130 applicatifs, est-ce que ces sites sont issus de l’usine à sites ? 


  \- Par exemple sur un des sites sur lequel je travaille, on a 200 sites. Le client vient de faire la migration sur Drupal 10. Ils ont réussi à passer sur Drupal 10 mais les sites ne vivent pas indépendamment. La première problématique, c’est le temps qu’on doit passer pour déployer sur l’ensemble des sites. Ça prend 1h30 pour que la pipeline passe correctement.


  \- Par site ? 


  \- Pour tout le déploiement à la fois.


  \- 200 sites en 1h30, c’est bien déjà.


  \- Parfois c’est un peu long.


  \- Je suppose que les sites doivent être similaires, ou en tout cas qu’ils ont été pensés à la base, l’usine ça permet de faire des gains de temps, d’argent mais avec la contrainte des bases communes et voir ce qui diffère. Pour la gestion de la configuration, je vois deux cas et demi, et deux sous-cas dans le deuxième cas. Le premier cas c’est partir sur un système de profil d’installation. Quid une fois que le site est installé ?  La configuration elle fait sa vie ou elle reste la même  ?  Sinon, l’autre cas, que j’ai utilisé parce que le cas de usine à sites où ça reste dans l’ordre de 4 ou 5 sites, ça reste gérable. Finalement, tous les sites vont pointer vers le même répertoire.


  \- Les UID au niveau des fichiers de configuration…


  \- Il faut qu’ils aient été déployés avec tous le même initialement. S’ils existaient avant, même d’autres sites. Quand sur des projets, on me demande de faire rentrer toute une galaxie de sites dans l’usine, ben non, l’usine ça permet de créer des sites. 


  La fonctionnalité, elle n’est pas prévue dans l’usine, soit vous vous en passez ou alors elle est présente pour tous.


  \- Mon point de vue c’est que je ne sais pas quelle remise en question il peut y avoir. Mais ce n’est peut-être pas la réponse. Après, il y a des problématiques de déploiement, ils ont tous des bases de données séparées. La seule solution, c’est d’optimiser le déploiement. Et paralyser des jobs. Il peut y avoir un premier job qui s’occupe de pull le code pour les autres sites et d’autres qui sont déclenchés après. On a toutes ces problématiques de synchronisation. Il faut que tout soit fait de manière asynchrone.


  \- Si les sites sont basés sur… Soit on fait une installation, ils n’ont pas le même répertoire sync, peut-être c’est toujours compliqué de donner une description générique sur 200 sites qui ont leur spécificité. Là comme ça, faire un système à base de config split. 


  \- En général c’est le moment de finir la conférence. On n’a pas le temps de rentrer dans le détail. Merci beaucoup à tout le monde. 






  \- On va démarrer. 


  Bonjour à toutes et à tous. Merci d’être là pour cette présentation de la refonte des sites du département d’Ille-et-Vilaine. Dans une démarche d’écoconception et d’accessibilité. On va surtout parler de la mise en oeuvre de l’écoconception via le Référentiel général d'écoconception de services numériques. On ne va pas rentrer dans le détail de pourquoi on fait ça, l’impact du numérique, j’espère que vous le savez. On va d’abord se présenter et présenter le projet. Ensuite la méthodologie d’accompagnement à l’écoconception. Ce qui a été mise en oeuvre sur le projet. Et l’écoconception, ça ne s’arrête pas au moment de la mise en prod. 


  Je vais vous donner la parole pour vous présenter.


  \- Bonjour à tous. Je suis Anne-Laure Hamonou, je travaille à la direction de la communication du département d’Ille-et-Vilaine. Ce projet a mobilisé plusieurs de nos directions.


  \- Bonjour, Marie-Béatrice Levaux, je suis responsable de la direction DSN à l’Ille-et-Vilaine.


  \- Bonjour, je suis Benjamin Petit, je suis chez Orange Business.


  \- Moi, Laetitia Gaspari, je travaille avec Benjamin chez Orange business, on est l’ESN d’Orange en fait. Dans ce projet, il y a eu 11 personnes impliquées réparties sur 3 agences. Je suis intervenue en tant qu’experte au début du projet. Il y avait une référente écoconception tout le long du projet.


  \- Quand je disais qu’on avait plusieurs directions, on avait aussi la direction de la citoyenneté pour tout ce qui est test usager et parcours de design.


  Pour le département, on est une collectivité avec 1 million d’habitant, 4500 agents qui travaillent, on propose 130 aides et services concrets. C’est le but de nos sites. Même si les gens ne connaissent pas le département, ça peut être de l’aide pour les agriculteurs, de la prise de rendez-vous pour la PMI. On s’occupe des routes, des collèges, des cantines. C’est très diversifié. 


  \- Le contexte de la refonte de nos sites, on était auparavant en Drupal 7, on est passé en Drupal 10. On fait très attention aux impacts carbone, écoconception etc. 


  La galaxie Drupal comprenait 5 sites avant la refonte. On en ajoute un peu tous les deux ou trois mois on en ajoute un ou deux. 


  \- Donc un site axé usager. C’est pourquoi on a fait des tests usagers. Il faut que ça soit écoconçu, sobre, simple d’accès et esthétique, efficace, le plus léger possible, accessible quel que soit le lieu dans le territoire où on se trouve. On a encore des zones blanches en Ille-et-Vilaine, avoir un site léger le rend plus accessible. Toutes ces aides, on voulait réussir à les rendre visibles avec un moteur de recherche simple. On scinde nos sites en deux. On a un site info services et un site sur l’actualité.    Il y avait cet enjeu de travailler sur plusieurs sites. D’un point de vue communication, pour nous l’enjeu c’est d’avoir une cohérence graphique, que l’identité de la collectivité soit reconnue sur les sites. Et puis l’ancrage des bonnes pratiques sur la durée, c’est pour que ça perdure. On souhaitait amorcer une refonte avec cette couleur particulière d’écoconception qui était une initiative de la direction de la Communication et de la DSN. C’est vraiment aussi quelque chose qui est venu par nous et avec le temps.


  \- Avant de vous présenter la démarche de ce projet, je voulais vous dire comment on conçoit l’écoconception chez Orange Business, il y a un peu plus de 3 ans, un groupe s’est monté sur ce sujet-là. On commençait à vouloir intégrer nos valeurs personnelles dans notre profession. On a fait beaucoup de veille sur le sujet. Il y a eu des chantiers dédiés à l’outillage, la mesure. On a travaillé pas mal sur la méthodologie pour se forger des convictions. Dans ce groupe de travail, un pôle d’experts s’est monté. On s’est fait certifier. Issus de tous les métiers, c’est important. On a, il nous fallait un cadre et une norme, on va dire, même si elle n’existe pas encore. On s’appuie sur le RGESN qui est issu d’une mission interministérielle. 


  C’est l’équivalent du RGAA mais il n’y a aucune loi qui oblige à utiliser ce référentiel. Ça va venir assez vite à mon avis. Il nous fallait un cadre normatif. Et puis on s’appuie sur des outils opensource. On a fait ce choix, notamment sur l’éco index pour le web, l’éco code aussi pour les applications mobiles et autres. On s’appuie sur ces outils pour mesurer, piloter, valoriser les résultats. Pourquoi l’opensource ?  Ils sont transparent sur leur moteur de calcul. Il n’y a pas encore de règle sur le calcul de l’impact environnemental d’un site. Ça nous permet d’avoir des gens qui participent à ces initiatives. Comme je l’ai dit, on s’est forgé des convictions sur le sujet. Il faut impliquer tous les acteurs du projet. Il y a le client, tout le monde en fait. L’écoconception, ce n’est pas qu’un sujet technique, ça va bien au-delà du code. Il faut que tout le monde contribue à la démarche, c’est important. Ensuite, on s’appuie sur les processus qui existent déjà. Ce n’est pas une surcouche. On s’intègre dans les cérémonies agiles. On va s’appuyer sur la stratégie de test aussi. On met en place aussi des indicateurs via ces outils de mesure pour valoriser les résultats auprès de l’équipe, du client. On accompagne, il faut quelqu’un qui accompagne sur les projets, ça demande quand même encore à l’heure actuelle, une expertise et un accompagnement des équipes sur le terrain. 


  La méthodologie qui a été mise en place sur ce projet, mais ça pourrait être sur d’autres aussi, sur ce projet, il y a eu une préparation. En amont, il y a eu une sensibilisation des personnes du CD35 au numérique responsable, sur l’écoconception et l’accessibilité. Ça leur a permis de rédiger leur cahier des charges de manière plus précise, avec ces enjeux-là. On reçoit encore beaucoup d’appel d’offres, :  je veux que mon site soit écoconçu. Ça ne veut pas dire grand-chose. Dans la préparation, il faut être là le plus tôt possible. Quelqu’un qui connaît bien le sujet doit mesurer la maturité du client, estimer ses objectifs, dimensionner, chiffrer l’accompagnement sur le projet.

   L’écoconception, si vous connaissez un peu, il y a le mot « conception » on va choisir ce qui va être développé ou pas. On va enlever le gras et rester sobre. Sur cette phase, la référente était présente à chaque réunion. Le département est arrivé avec des wireframes tout faits sur certaines parties. On les a pas mal challengé. On a cartographié les sites, les fonctionnalités, les parcours pour challenger un peu ce qui était demandé. A chaque fois avec une prise de décision du département. Vous aurez des exemples tout à l’heure. Dans le revues de conception avec l’UI, la référente fonctionnelle, l’intégratrice graphique, il y avait la référente écoconception qui venait faire de revues, ça permet aussi de faire monter en compétences tout le monde. Il faut des revues de conception. Il faut les créer et intégrer un référent écoconception. Et solliciter un lead tech si besoin, si on a des questions sur la lourdeur ou la complexité de certaines fonctionnalités. Il y a une partie aussi de formation des équipes. Il faut continuer en interne à faire monter en compétences les personnes. Ça passe par de la sensibilisation, un atelier technique à Drupal. Le RGESN, c’est général à tous les services numériques. On fait un atelier technique, on passe en revue les exigences, on contextualise. On essaie de voir ce qui était bien ou mal fait. L’idée est de s’interroger sur ce qu’on va mettre en place sur le projet. Les ateliers, il faut les rendre un peu pédagogiques aussi, ça reste abstrait sinon. En parallèle avec le département, on a parlé stratégie aussi, c’est-à-dire :  quelles étaient les objectifs du département  ? 

  On a une checklist du RGESN. La V1 fournit juste le référentiel, on n’a pas de grille de scoring. La V2 va normaliser ça, il y aura une grille unique pour tout le monde. On a notre grille à nous. Sous forme d’atelier thématique, on a passé en revue toutes les exigences pour dire :  c’est quoi votre cible ?  Vous voulez aller jusque-là ?  C’est quoi vos critères ? 


  Ensuite, on peut définir les moyens à mettre en oeuvre pour atteindre cette conformité. Ça donne la conformité à T0 du projet et la cible à atteindre.    Chaque atelier, on les a rendus pédagogiques. On balaie les exigences, on va donner des exemples, on contextualise aussi pour voir les leviers. Un constat sur l’existant aussi, ça permet de donner des exemples et on va définir les moyens à mettre en oeuvre et le plan d’action pour les revues futures. Tout cela, il faut le piloter. Il faut intégrer l’écoconception dans le pilotage. Ça veut dire un accompagnement de l’équipe au quotidien et le contrôle de la mise en oeuvre des exigences. Ça passe par de la mesure via l’éco index pour les développeurs. Ce qui était demandé, c’était qu’ils vérifient qu’il n’y avait pas de régression. Je vais vous présenter un outil interne pour les tests. On avait une revue RGESN de manière régulière. On a fait un suivi d’indicateur sur 5 pages et 5 parcours du site. Le choix, c’est comme pour l’accessibilité, on va prendre l’accueil mais aussi l’analytics existant pour choisir les pages les plus utilisées du site. En interne, on a développé une surcouche de l’éco index qui n’est pas forcément simple à utiliser sur des parcours. On se base sur le composant, le moteur de calcul de l’éco index. On ne le réinvente pas, il évolue en plus. Par contre, on est venu faire un outil plus facile à utiliser avec cette notion de parcours, d’historique. On a même ajouté quelques règles. C’est un outil plus visuel et un peu pédagogique. Ça permet de communiquer avec, d’avoir des mesures régulières dans cet outil-là. Tous les projets peuvent l’utiliser désormais. 


  Et enfin, la partie communication, donc il y a une des exigences du RGESN est de faire une déclaration d’écoconception.    Le but est d’être transparent sur ce qui a été fait, la démarche, ce qui reste à faire, c’est comme la déclaration d’accessibilité, ça en prend en tout cas le chemin. Sur le site en bas de page, il y a cette déclaration. On fournit un template et on aide à la rédaction. On se base… Il n’y a pas de norme sur cette déclaration. Il y a Green IT qui a publié un template aussi de déclaration environnementale. Le but est d’être le plus transparent possible sur ce qui a été fait et comment ça a été fait. 


  Je crois que c’est à toi, Benjamin.


  \- Je vais vous faire une présentation rapide, technique de ce qu’est le projet de la refonte des sites du CD35. C’est un projet multisites Drupal 10 qui concerne actuellement 8 sites. Ils sont basés sur une seule instance Drupal avec une base de données séparée pour chaque site. On a un thème parent qui porte la plupart des structures des pages et des sites et des règles d’écoconception. On a des thèmes enfant pour chaque site pour distinguer par des thèmes différents, des chartes graphiques différentes    tous ces sites. On utilise du Sas pour l’intégration. Très peu de JS, Custom, pour important pour l’écoconception, éviter d’avoir à effectuer des requêtes inutiles.


  On travaille avec Git Lab pour tout ce qui est intégration continue, contrôle du code. On a essayé d’utiliser au plus le natif Drupal. On a aussi les modules communautaires classiques. On a aussi privilégié l’utilisation de modules custom pour des spécificités précises. Il fallait savoir si le module n’en faisait pas trop. On n’a pas besoin de chercher un module qui en fait plus et on aura besoin de charger plus de choses derrière. 


  Il y a d’autres exemples. On a aussi la configuration spécifique pour chaque site et de la configuration générale. Après, en termes de mise en pratique, pour l’intégration, on a privilégié tout ce qui va être Font icons et SVG. Sur tout ce qui est templating, on a essayé de voir s’il n’y avait pas possibilité de les rendre plus légers. 


  Et aussi dernier point important, tout ce qui va être sur les images, c’est un gros point de l’écoconception. C’est le fait de convertir l’ajout des images au format Webp. Et la possibilité pour le Département de rajouter leurs images au format Webp aussi. On utiliser le Lazy Loading pour le chargement des images. En termes de JS, nous n’utilisons que Boot Strap pour la partie responsive. 


  Après, oui, le dernier point sur lequel il y a eu un effort différent, c’est sur la partie d’affichage des contenus de type carte, ou des affichages de vidéos YouTube, ce qui a été fait c’est que lorsqu’un utilisateur souhaitait accéder à une information, par exemple pour les services info route, la personne va avoir un accès à l’info route via le menu. Dans cette page, elle a accès à toutes les informations textuelles renseignées par le département mais il n’y a pas de carte interactive chargée automatiquement. On enlève des requêtes de chargement de frame, de font, d’image. 


  Sur cette page info route, on aura seulement une vignette avec une image Webp et si la personne veut consulter l’e-frame, ça sera sur une autre page. 


  Je dirais que ça reste des bonnes pratiques de développement, des bonnes pratiques liées à la performance de l’affichage, des re quêtes. Ça n’a pas été difficile à mettre en oeuvre de mon point de vue. 


  \- Vous avez un petit aperçu de ce que ça donne. Vous pourrez le visiter aussi. Je ne sais pas si vous avez un mot à dire. Je passe aux exemples ? 


  \- Oui. C’est la version moins technique pour que vous voyez à quoi ça ressemble. Je me suis dit que ce n’était que du bon sens. Ça donne un peu de sens que de les mettre sous une casquette d’écoconception. Le poids des images, ça fait longtemps qu’on le sait. Même le poids des documents et les PDF, on n’est pas les seuls maîtres des poids des PDF, on a le site de la MDPH, il y a des PDF énormes dessus. C’est un combat à mener. La page d’accueil, c’est peut-être la moins bonne élève. Il y a beaucoup de choses sur cette page. Les personnes à qui on fait valider en termes d’image, c’est important aussi. Il y a quelques années, on avait une vidéo qui se lançait à l’arrivée sur la page. C’est une belle avancée d’avoir uniquement cette image. On a un filtre pour les aides du département, c’est assez central. On a très peu d’image. On a pas mal d’entrées mais on va à l’essentiel. Sur la page qui suit on est sur une page de détail du site Internet, il reste quelques images mais on va à l’essentiel. On ne met que les contenus info-utiles.


  Sur la slide d’après, c’est de l’illustration avec le lancement de la vidéo avec une flèche. Ça fait un clic en plus. On continue, c’est l’importance d’avoir ce travail avec vous.


  \- En effet, c’est un peu le même fonctionnement pour les e-frame de cart. 


  Là on a une génération d’une vignette avec une icône de lecture par-dessous. 


  La vidéo ne se charge pas dès lors que la page est chargée.


  \- C’est ce qu’on appelle mettre des façades.    Ça dépend du choix de librairie mais on met en place une façade, ce n’est qu’au clic qu’on va chercher le player YouTube etc. 


  \- Le fameux module des aides sur la page d’accueil, ça c’est une page de résultat. On a uniquement six réponses qui s’affichent.    Il n’y a pas de visuel, ça n’empêche pas les consultations, c’est l’essentiel.


  \- C’est la règle, on met une pagination à 6 partout.

   Comme je le disais, ça ne s’arrête pas au moment de la mise en production, l’écoconception. Il y a la phase amont et après qui est importante. Il y a eu une phase de test utilisateur juste avant la sortie du site à l’initiative du département avec 12 utilisateurs interrogés. Il y a eu de très bons retours sur le site. C’était sur le moteur de recherche, il a fallu indexer un peu mieux. Sinon le ressenti était bon sur le site. Juste la petit anecdote, quand on parle de la page d’accueil qui est lourde, je crois que c’est 10 utilisateurs sur 12 qui n’ont pas scrollé sur la page d’accueil. Les gens vont tout de suite dans le menu ou la recherche, le contenu en bas ne sert pas à grand-chose. La page d’accueil, il ne faut pas la charger, ça ne sert à rien.

  Quelques actions qui sont envisagées sur la phase de run, c’est de ne pas régresser sur les nouvelles fonctionnalités aussi. Continuer à faire de l’UX sur tout ce qui est nouveau. La démarche centrée utilisateur, c’est la base de l’écoconception. De la veille pour anticiper le cadre règlementaire qui va arriver. On propose aussi de faire des audits de contrôle une fois par an et des mesures à chaque version majeure. Pour les outils d’analytics, il y en a très peu de très light. Si on va les utiliser on en met sinon non. Il y a Matomo qui est assez light, on le préconise. Par contre, les outils d’analytics peuvent venir pour vérifier que ce qu’on a mis en place c’est utilisé et utilisable. On peut venir enlever une fonctionnalité qui n’est pas utile. Quand le site vit, il faut continuer à l’observer et à l’améliorer.


  On va conclure. Quels résultats on a obtenu ?  Un taux de conformité RGESN qui est de 85 % environ à la sortie. On a un avant-après. On est passé d’un éco index E à C. Sur l’ensemble des pages qui ont été testées.    Un site qui est 3 fois plus performant que l’ancien. 


  On a un site qui est deux fois moins impactant sur l’environnement. 


  On n’a pas parlé beaucoup d’accessibilité mais il y a un taux RGAA qui est de 70 % maintenant je crois.    Je ne sais plus.


  \- On est en train de faire les audits.


  \- Plutôt pas mal. Facteur clé de succès sur la méthodologie. 


  Sur la phase, dès l’avant-vente c’est possible. Pourquoi c’était un succès aussi ?  Une implication forte du client. Toutes les parties qui ne sont pas techniques, c’est le client qui doit faire le job. Même dans les choix faits. Former les gens. Une méthodologie qui s’inscrit dans les process. C’est important de suivre le sujet tout le long.


  Sur la partie design, on l’a dit, un template, une librairie, des parcours utilisés. Et puis le cadre challengeant, c’est parce qu’on peut dire que l’écoconception ça va contraindre la créativité des designers, ils l’ont vécu comme un challenge plutôt qu’une contrainte. 


  Je vous laisse conclure.


  \- En facteur clé, je sais que ce n’est pas votre spécificité, mais ça a nécessité beaucoup d’engagement et de temps. C’est cette dynamique qu’on a trouvé hyper intéressante. Ce numérique responsable il va s’immiscer aussi dans nos plans d’action. Au-delà des aspects techniques, qu’est-ce qu’on peut changer ?  Il y a les poids des documents, même une vidéo, on va la produire pour qu’elle dure le plus longtemps possible. J’ai trouvé que c’était intéressant qu’on s’interroge aussi côté client sur le chemin qu’on peut faire. Tout n’est pas sur la technique. 


  Ça crée une émulation en interne qui fait que ça sera plus simple d’assurer un maintien de ce niveau d’écoconception dans le temps. Donc oui, pour conclure, tu voulais  ? 


  Cette refonte, elle répond bien à nos enjeux. Placer l’usager au coeur de la réflexion, on a quand même investi les usagers dans ce travail. Ça correspond à l’éco responsabilité qu’on voulait mettre en place sur notre site. Ce projet était amorcé, on est venu se placer dessus. Ça a été assez souligné, c’est dans la bonne dynamique. C’est un élément qui amorce bien la dynamique de notre collectivité. Et puis de continuer de veiller à l’accessibilité dans la forme, dans le fond.


  \- Merci beaucoup, on va passer aux questions. 


  \- Bonjour, merci pour cette présentation. Je m’appelle Erwan, je suis développeur front et UX- UI, j’ai travaillé sur plusieurs projets en écoconception également. C’est un sujet qui me tient à coeur. J’avais une suggestion sur un détail sur les icones notamment et l’utilisation de fault icones. On a trouvé une solution pour éviter les requêtes HTML, c’était d’inclure les SVG dans un composant icône. Ça nous permet de l’avoir dans l’HTML, en plus on a la main sur les propriétés graphiques. 


  J’avais une question sur les outils d’analyse. Vous avez analysé l’impact côté serveur ? 


  \- Non, sur la partie hébergement, déjà le choix a été fait par le Département, ce n’était pas chez nous, chez Orange Business, on fait aussi de l’hébergement. C’est encore très rare d’avoir des hébergeurs qui fournissent des données en ce sens. On n’a pas ces données-là. 


  \- D’accord merci.


  \- Après, il y a des outils qui existent. Mais on a aussi, il y a Power API pour aller chercher des données. Je n’ai pas rencontré d’hébergeur qui proposaient ça dans leur contrat.


  \- On a utilisé un outil qui s’appelle Frugger. Ça nous permettait d’avoir des retours.


  \- Ils mettent des sondes sur les serveurs ? 


  \- Je ne sais pas. 


  \- Ça fait partie des outils qu’on a expérimentés.


  \- On compte l’expérimenter sur ce site.


  \- Merci pour la présentation en tout cas. 


  \- Merci pour votre présentation, j’avais deux questions, une un peu technique et l’autre un peu plus sur l’humain. On peut avoir un site écoconçu et avoir de belles maquettes mais est-ce que la montée en compétences a été faite côté client aussi ?  On peut très bien contribuer avec des images qui ne sont pas optimisées, ça peut venir influencer tout le travail qui a été fait.


  \- Il y a eu un atelier avec des contributeurs plus large en utilisation quotidien du site pour que toutes les personnes de la direction de la communication puissent poser leurs questions en termes de bonnes pratiques.


  \- Il y a une charte éditoriale qui a été rédigée.


  \- Oui, en effet. Il faut qu’on la repartage. On a à coeur de maintenir ça. La difficulté c’est sur les autres sites, les sites des archives, de la MDPH où il y a moins d’actu, donc les personnes vont y aller moins souvent, les réflexes ne vont pas se prendre de manière aussi simple. C’est à nous à la direction de la com d’essayer de se donner des repères. Mais nous dans le service info, on gère du contenu, on se dit que tous les ans il faut qu’on fasse une purge de nos contenus. On s’est mis des alertes. On va essayer de vraiment le faire. On a conscience de cet enjeu-là. Il faudra s’y tenir.


  \- Merci. Et la deuxième question, concernant les librairies, vous intégrez le moins possible de librairies externes pour les performances notamment. Mais tout ce qui concerne le RGPD où on intègre des librairies comme tarteaucitron ou des choses comme ça, on peut parfois se prendre une claque derrière la tête. Comment vous avez gérer cette partie-là qui est règlementaire ? 


  \- C’est une bonne question. Tarteaucitron était censé être sur les sites à la base. Il apportait, il effectuait beaucoup de requêtes. On l’ a enlevé. On a Matomo pour l’outil d’analyse qui se gère bien. Ensuite, on n’a que YouTube après, finalement. Ce qu’on a fait, c’est qu’il y a un message qui s’affiche lorsque la personne veut lancer une vidéo, on prévient la personne qu’il y aura un dépôt de cookies.


  \- C’est Matomo qui fait la gestion de cookies ? 


  \- Non, c’est juste qu’il est compatible RGPD.


  \- On récupère moins de quantité de données mais sur plus de personnes. Même en termes de statistique c’était mieux pour nous. Ça valait le coup. 


  \- On avait un souci de dépôt de cookies sur le lecteur de podcast, la personne va être redirigé vers le site pour écouter son podcast.


  \- Bonjour, merci pour la présentation. Je voulais connaître votre secret de votre phase de sensibilisation  ?  On a des clients qui ne se contentent pas de la sobriété de votre page d’accueil. Quel est votre secret ? 


  \- En fait, la méthode, vous voulez de l’écoconception, c’est ça les règles. Voilà. Il y a des règles, vous ne les suivez pas, vous êtes non conformes. Ça dépend de la volonté du client.


  \- Et puis, on a une personne qui suivait ce projet, on a aussi une cheffe de projet qui s’est lancée pour que ce sujet-là soit le fil rouge. On a eu des débats, on n’était pas toujours très en phase. Ça a aidé.


  \- Orange.com, c’est du multisites Drupal aussi. Il y a un existant très lourd.    Tout ce qui a pu être fait en technique a été fait, ensuite il faut tirer les ficelles. Ils en sont à 58 % je crois. C’est de la pédagogie en continu. On va s’arrêter là. Merci.
type: conference
---
