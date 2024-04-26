---
title: Industrialiser Drupal dans une grande entreprise
draft: false
session_id: "#10"
slug: 10-industrialisation-grande-entreprise
duration: 40 min
audience: Intermédiaire
themes: Industrialisation
speakers: Simon Vart & Guillaume Rouxelin
companies: Conserto
teaser: Raconté par deux membres de son équipe, découvrez comment un groupe
  important a choisi Drupal pour plusieurs sites à fort trafic (>1M
  visites/mois) et va résoudre d'épineuses questions autour de son
  industrialisation.
prerequisites: |-
  Avoir participé à la conception ou la réalisation d’un site Drupal.

  Comprendre les notions de Git, “Pipeline” CI, agilité.
plan: Après une présentation des intervenants, nous vous présenterons les
  projets concernés ainsi que les problématiques abordées (déploiement, tests,
  recette, livraison, contribution éditoriale, mises à jour et monitoring).
takeway: >-
  Vous aurez vu quelques exemples de solutions structurantes, parfois
  inattendues, cristallisées autour du pipeline de livraison – et peut-être
  pourrez-vous y puiser de l’inspiration pour aborder vos propres problématiques
  !


  * L'embarquement simplifié et les règles claires pour les développeurs,

  * Un board agile lisible pour les parties prenantes,

  * Un site robuste au fonctionnement prédictible,

  * Un TTM inférieur à une heure pour les bugs critiques,

  * Une équipe heureuse !
slides_files: slides/presentation-drupalcamp-rennes-2024-1.pdf
video: mboX5E3ntmU
transcription: >-
  \- Bonjour, nous sommes Simon et Guillaume. Nous allons vous présenter
  aujourd’hui deux retours d’expérience sur deux projets distinct. On s’est
  connu tous les deux, Simon était sur le site corporate et j’étais prestataire.
  On a travaillé ensemble de janvier à mai 2022, date à laquelle j’ai rejoint
  Conserto.


  \- Moi j’ai rejoint Solocal en 2018. Le titre, c’est parce que je vais vous parler d’Acquia. 


  Solocal, vous le connaissez peut-être mieux sous le nom de Page Jaunes. Il y a quelques informations à l’écran. Nous, je vais vous parler pas du portail mais du site institutionnel qu’on a fait à côté. On a récupéré un site en cours de refonte. C’était un site en Drupal 7 en cours de refonte en Drupal 8. Il faisait 1 million de visites par mois. On allait devoir récupérer le site, industrialiser pour gérer la partie TMA et une action d’e-commerce qu’on allait mettre en place pour la première fois pour les Pages Jaunes. On allait héberger ça sur Acquia, c’est l’hébergement haut de gamme    pour Drupal, ça a été créé par le fondateur de Drupal. Pour vous présenter un peu ce qu’ils proposent, c’est un service d’hébergement. Ce qui est important, c’est Git. Ils ont un outil, c’est BLT. On ne va pas l’utiliser, il va encapsuler une complexité qu’on a besoin de maîtriser. Si on utilise un outil fourni, on ne comprend pas une partie du process. 


  On va utiliser Acquia. On a accès à des schedule jobs, ça nous permet de déclencher des actions. Ils proposent aussi des logs stream. Il y a un socket qui les expose. On va les récupérer. Platform on demande, ça permet d’instancier une stack technique à la demande. Si on a besoin d’une troisième, pour faire des tests on peut le faire. RA, c’est remote administration, ça permet d’automatiser les montées de version. On ne va pas l’utiliser. On veut garder la main sur le delivery de notre application. Et puis des accès SSH est une interface web qui est bien faite. On reçoit le site, on se dit :  ça ne va pas tout à fait aller. Le build et local, on doit jongler entre deux positories. On a notre Git Lab et Acquia. On build en local, on commit, on pousse. On essaie de jongler. Ça ne se passe pas toujours bien. Même si on fait attention, l’erreur est possible. Ce qu’on se pose comme question :  qu’est-ce qu’on veut ?  Où on le veut ?  Quand on le veut ? 


  On peut faire des POC d’e-commerce, on a besoin de déployer parfois rapidement. La solution qu’on a proposée, c’est une pipeline. On va définir la façon qu’on a de produire et s’assurer de notre qualité de code. On a notre Git Lab pour le code et Acquia, c’est un repository de tags. 


  Docker, ça c’est la partie en bleu, on a défini nos dockers, on a fait cette stack en fonction d’Acquia, on va évoluer en fonction des montées de version pour être le plus proche possible de la production. On va utiliser cette même image locale sur le build. On a un moment important, on va cristalliser la qualité du code. C’est poussé sur Git Lab.    Là c’est la merge request qui va finaliser l’opération. A partir de là, ça build, ça prépare le déploiement.    Symphony asset, je ne sais pas si vous l’avez utilisé. On a utilisé ça pour la gestion d’assets statiques. On avait des problèmes de cache avec Varnish. Il faut que tout soit versionné. Ça passe par une extension dans le build pour remplacer les URL dans le code généré. Isoprod, important pour détecter les problèmes tôt. Tout est code. Notre infrastructure, c’est du code. C’est le code qui fait foi. Les tests, c’est du code aussi. Les développeurs sont en contrôle de tout le processus de production et de déploiement. MR centric, car on a tout centré autour de la merge request et tout le processus de pipeline. Sanctuariser, on a besoin de déterminer ce qui est important pour nous. Pour nous c’était la prod, la prédictabilité, la sécurité, la base de production, il y a des opérations par de nombreux éditeurs, il faut que tout soit aligné. Et la contrainte, c’est quand on rend le process indispensable.


  \- J’étais sur un projet multisites, ça permet de créer plusieurs sites de Drupal à partir d’une instance. Chaque projet a son propre thème, son contenu mais tout sera géré à partir d’une instance de Drupal. Je vous invite à la table ronde sur les usines à sites pour plus d’informations. On avait trois sites vitrines avec la création de recommandations d’achats via des formulaires. On avait un site qui permettait de rencontrer des professionnels du bâtiment. On avait Où investir.    Et Je trouve mon avocat pour être mis en relation avec des avocats. Les sites ont migré en Drupal 9. Où travaux était en mode hybride. 


  Les avantages d’un multisites c’est la bascule entre les sites, ça facilite aussi l’installation d’un nouveau site. On peut partir avec une base de modules commune. Par contre, il faut modulariser son code au maximum. Il faut des compétences techniques. Lors des mises à jour, il faut s’assurer que tous les sites seront en capacité de migrer. En plus de l’environnement de travail, on a eu d’autres outils au quotidien. D’abord Docker, on utilisait un docker compose. 


  On avait un fichier pour compiler les fichiers Sas. Ça permet de lancer des commandes pour compiler du Sas. On avait Git Lab CI pour chaîne d’intégration continue et chaîne de déploiement continue, CD. Une fois que le développement était terminé, on pouvait envoyer le code qui passait par CI. Si c’était validé, on avait gardé le BLT, le projet était envoyé sur la bonne branche. 


  Je vous ai mis un exemple d’un fichier CI que j’ai trouvé sur Internet pour Drupal 10. Chaque stage va avoir différents jobs. Il y aura différentes étapes et différentes règles. Chaque stage et chaque job va permettre de définir une pipeline. Le but principal d’un pipeline, c’est d’assurer la cohérence, de la qualité et la rapidité du développement. 


  En plus des outils précédents, on avait aussi un make file. C’est un exemple d’un make file sur un projet perso concernant la qualité du code. 


  Je te repasse la main.


  \- On est plus proche de l’intégration continue. On a le chemin pour s’y rendre. Construire c’est facile. On en est à cette étape. Chaque fois qu’on fait une merge request, on a des tests de sécurité, on build les front, on génère le manifest, on va l’utiliser pour qualifier des éléments. Le déploiement est facile. On a notre artifact, c’est un zip qui va contenir l’intégralité du code. 


  On réalise des opérations de pré et post launch.


  On a les opérations usuelles de mise en production. Un petit mot sur un module qu’on a créé pour cela. On voulait un système déclaratif dans notre code permettant de préciser les modules à activer ou pas. On a utilisé une partie de Symphony. Ça nous permettait d’avoir un processus simple quand on voulait désactiver un module. 


  On s’assure d’avoir une bonne cohérence entre la base de données et la base de code. 


  La question qui se pose ensuite, c’est une question d’équipe. L’équipe de dev est en maîtrise de tout le pipeline mais il faut communiquer. On a eu un problème d’intégration. Quand on regardait les pain points avec l’équipe métier, le problème c’était souvent l’intégration. On ne sait plus très bien quelle feature est déployée sur quel environnement, on a plusieurs features, qu’est-ce qu’on fait ?  On enlève le code qu’on ne veut pas envoyer ou on décale la mise sur le marché et on a un TTM incertain ?  On a voulu simplifier. C’est extrêmement simple, c’est très facile à communiquer avec le métier. Ça résout la question du blocage à l’étape de recette. À tout moment, on peut bloquer la feature. Dès qu’elle est validée, elle part en prod. Ça simplifie la communication. On met en place une communication avec Teams par exemple. Si on a une anomalie en production, on peut la relier, on sait quelle feature est impactée.    Et la MEP n’est plus un événement. Une petite particularité, le merge est réalisé après le déploiement. C’est le merge automatique qui a lieu dans Git Lab. 


  La deuxième chose que je trouve bien, c’est pourquoi on l’a conservé, Master représente toujours l’état en production. 


  Juste un petit mot, c’était notre modèle original. Il n’y a rien d’extraordinaire. Je vous montre la version simplifiée. On n’a plus qu’une branche qui est déployée. Avec un mot sur les tests de supervision qui sont embarqués dans le code. Ils vont être exécutés régulièrement sur la production. On les a intégrés dans nos processus pour les relier à notre code. Si on modifie du code qui fait tomber la production, on va le détecter en staging. On n’est pas en déploiement continu. On a des opérations qui permettent de lancer un déploiement sur un clic bouton. Side effect, c’est une feature à la fois. C’est-à-dire que parfois ça complique un peu les un peu les processus de livraison. 


  \- Je vais vous expliquer comment tant que dev junior, le fait d’être dans une solution industrialisée m’a permis de devenir un meilleur dev Drupal. Pour passer de développeur Drupal 7 à développeur Drupal 8, j’ai pu compter sur l’aide de mes pairs. Premier outil, c’est l’IDE. PHP Storm est développé pour PHP.    On peut faire du git, du refactoring, on peut mettre en place des tests, faire des requêtes API. On a aussi une intelligence artificielle pour développeur Copilot, il est souvent mis en concurrence PHP Storm avec VS code de Microsoft. Par contre, ce qu’il fait en natif PHP Storm, pour le faire avec VS code, il faut rajouter des plugins. 


  Voilà quelques plugins que j’ai pu tester. Drupal permet une autocomplétion de code et la mise en forme Drupal. Et Code With Me, ça permet de travailler à deux, ça a été pratique pendant le confinement. L’un des outils que j’installe en premier, c’est Xdebug. Je l’ utilise sur la partie Back. 


  Pour vérifier que je récupère les bonnes variables. 


  Ça me permet de voir les variables disponibles, custom ou natives dans un template.


  Beaucoup utilisent le Dump. L’avantage d’Xdebug, c’est qu’on peut voir la donnée qu’on recherche. On peut voir aussi l’évolution de la variable au fur et à mesure de la fonction. Par exemple sur un projet personnel, j’ai mis un point d’arrêt en début de formulaire et un dump. Avec un dump pour voir l’évolution de la variable, il faut le bouger. 


  Je vous invite aussi à la conférence de 17h aujourd’hui sur le Xdebug. La montée en compétences, ça passait par une amélioration de mon code. Je me suis renseigné sur les coding standards de Drupal. Ça passait aussi par la qualité de code. Je me suis appuyé sur la règle du boyscout, c’est-à-dire de laisser le bug dans un meilleur état que celui dans lequel on le trouve. 

   Je vous ai mis une démo d’un outil Grum PHP. 

  Ça permet de bloquer l’envoi du commit si ça ne passe pas à la qualité. Voire même si le message dans Git est bien formaté. 


  J’ai aussi du coup pu recevoir de l’aide en interne. Ça m’a permis de réfléchir à une autre manière d’aborder le développement grâce au point de vue d’un dev senior et le travail en binôme sur le pair programming. 


  Et puis réfléchir à la meilleure manière d’aborder un ticket. 


  J’ai aussi pu m’appuyer sur des aides externes, avec le principe du RTFM, read the fucking manual. 


  Pour être sûr de ne rien oublier. Sur la communauté Drupal, sur le Slack, avec les meetups notamment à Rennes.    Je pense au blog aussi de Flocondetoile.    J’ai suivi des formations aussi notamment liées à Drupal et liées à mon environnement de travail sur Docker, sur les CICD et sur Git.


  \- Je vais vous faire un petit mot sur un problème de configuration.


  C’est apporté à chaque déploiement, on est obligé de contrôler pour maîtriser ce qui se passe. Si on fait des modifs en base, qu’un contributeur fait des modifs, on peut écraser sa conf. Ça ne peut pas arriver en prod, donc il faut qu’on le maîtrise de bout en bout.


  L’autre solution, c’est d’utiliser Partiane, ça a permis de définir un processus de prod, où le développeur exporte, il fait les modifs, et on ne commit que les fichiers modifiés et on efface tous les autres.


  Ça expose très clairement quel ticket contient de la conf ou pas. Ça facilite les relectures. Une fois que cette configuration est allée jusqu’en production, on efface le contenu. Comme ça, on a un clean set permanent.


  Ça posait aussi un problème de tokens.


  On est sûr qu’on n’expose rien d’inutile.


  Sur notre conduite au quotidien de l’équipe, c’est utiliser Git en ligne de commande. Pour bien maîtriser Git au départ. Je vous recommande Gitad.dp.


  Utilisez précommit qui va cristalliser les bonnes pratiques de l’équipe. Tipez tout ce que vous pouvez dans l’équipe en PHP.


  On a tendance à ajouter à des modules, après, il faut s’assurer qu’ils soient maintenus. On s’engage sur le long terme à utiliser les modules de quelqu’un d’autre, si on peut éviter, ce n’est pas plus mal. Si une partie de code, on ne sait pas où ça va aller, c’est le moment de dire qu’il y a un problème, donc il ne faut pas l’ignorer. Car tôt ou tard, ça va arriver en production. Réviser la documentation on boarding.


  Une partie du B DD. On dit à l’avance ce qu’on va tester, quand le développeur dit qu’il a fini, et comment la recette va déterminer que le développement est valide. Cette connaissance partagée du test, ça va fluidifier nos communications avec le métier. Et la marge vers l’automatisation n’est pas compliquée. Le plus difficile, c’est d’écrire le test.


  C’est juste le choix de la techno et l’inclusion dans le pipeline qu’on a déjà. Donc la marche est facile.


  Les tests de supervision font partie du process de déploiement. Le test de supervision, on change le titre, on vérifie le titre. Ça dérange tout le monde car on a une alerte. Le développeur a accès au test de supervision. Il peut le voir assez tôt.


  Ça peut être envoyé sur une plateforme externe qui va les automatiser sur un cycle court.


  Comme on peut récupérer les logs par un stream, on l’a fait, on a mis ça dans un ELK. Ça a permis de faire des statistiques. Ça a conduit à normaliser les logs. Ça a conduit à mettre des try catch un peu partout.


  Si vous mettez dans votre ELK, un petit compte en error, et après une MEP, c’est que vous avez un problème quelque part.


  Pour nous, comme tout était dans l’équipe de développement, la gestion d’HLK, les logs, on avait une bonne adhérence. Ça permettait de créer un indicateur équivalent et de vérifier la MEP.


  Pour faire le bilan, on avait des bons rapports entre le Dev et le métier. On avait simplifié le modèle Git, donc c’était facile à comprendre, donc peu de problèmes de communication. Une bonne agilité pour la priorisation et la livraison. Ce qui fait qu’on a un TTM inférieur à 1h.


  Le plus court qu’on ait fait, c’est 40 mn.


  Je passe la main à mon camarade.


  \- Mon bilan :  voici les outils qui m’ont aidé, ceux qui m’ont freiné.


  J’ai pu utiliser la méthode pendant 6 mois. Ça permettait de faciliter la compréhension des tickets, le recadrage et savoir quoi faire. L’utilisation d’une CD, ça permet de diminuer les erreurs humaines. Le pair programming m’a permis de travailler avec des personnes plus expérimentées.

   Le problème, c’est qu’on arrivait avec des bugs qu’on n’arrivait pas à corriger, du coup, on était tributaire du support.

  Vous pourrez retrouver tout cela sur Conserto. Merci pour votre écoute.


  Il y a des questions ? 


  On a rushé comme des fous, on a un peu de temps. J’espère qu’on n’a pas été trop vite.


  \- Merci pour la présentation très intéressante. Merci pour le clin d’œil sur les blogs, ça fait plaisir de voir qu’on n’écrit pas dans le vide et qu’il y a des gens qui lisent.


  Dans votre process de déploiement, vous avez expliqué comment gérer l’aspect configuration. Mais comment vous gérez l’aspect contenu ? 

   Vous essayez de tout industrialiser avec des fonctions d’update ?  Ou au moment de la mise en prod, quelqu’un va se connecter au backoffice ? 

  \- Ça dépend des cas.


  La base de prod était sanctuarisée dans le sens où on avait des opérations d’e-commerce. On n’a jamais fait de rollback de base.


  On copiait la base de prod sur staging…


  On a eu des cas avec des updates, quand il y avait des modifications de contenu.


  Sinon, tout était réalisé en production. Comme le site avait été relivré éditorialement, le problème ne s’est pas posé. Sinon, on faisait des pages temporaires sur la prod.


  \- Merci pour la présentation.


  Pourquoi l’utilisation d’Acquia ?  Il y a trois sites. Il y a une contrainte particulière ? 


  \- Non. Ils ont cherché le meilleur hébergement possible au démarrage du projet pour s’assurer qu’on ait des performances correctes tout le long. Acquia proposait la meilleure solution. A l’usage, ça marche très très bien.


  Je ne veux pas dire qu’il n’y a pas d’autre hébergeur, c’est juste que je n’en ai pas eu connaissance à ce moment-là.


  \- Merci pour la conférence.

   Vous parliez d’une partie Vue JS. Du coup, la partie était encapsulée dans un thème Drupal ? 

  \- Tout ce qui était Front était plutôt externalisé, je n’ai pas beaucoup travaillé dessus. C’était un module directement avec certains appels. Ça date d’il y a deux ans… Il y avait des appels faits à un fichier Jison.


  \- Comment vous gériez le build de l’application Vue JS ?  Ça n’a pas été un frein dans la CICD ? 


  \- Dans mes souvenirs, non. Après, on avait l’avantage d’avoir un Devops qui gérait toute cette partie-là, sur la CICD. Les formations que j’ai faites, c’était plus pour comprendre ce qui se passait pour le mettre en place.


  \- J’ai un élément de réponse, mais ça n’a pas posé de problème particulier. On avait un stage au moment du Build, ça prenait des plombes. Mais pas de difficultés particulières à part le temps de compilation.


  A moins qu’il y ait une autre question derrière la vôtre. Les pipelines sont assez faciles à organiser. L’un des jobs c’était la compilation du JS.


  \- Bonjour. Sur le volet RGPD, il y a des contraintes sur la localisation des données hébergées ? 


  \- Très bonne question.


  Ils ont… La question s’est posée, il y a eu une migration des Etats-Unis vers l’Europe. Ce n’était pas adressé au début. La RGPD, je ne sais plus si elle existait sous sa forme. Il y a eu une migration, ça a été transparent pour nous. C’est    Acquia qui a géré. Comme Acquia permet de copier les bases de données, c’était à notre charge de s’assurer qu’on aurait un hook pour passer d’un environnement à un autre.


  \-    Il y a pas mal de choses en cours sur le désaccord entre l’Amérique et l’Europe sur ce sujet.


  \- Maintenant, si on choisit un hébergement avec des données personnelles, c’est à prendre en compte. Mais Acquia a un hébergement en Europe.


  \- Merci. C’est intéressant.


  Par rapport à la config déployée, on déploie dif de config uniquement ? 


  \- Oui.


  \- Donc, à un moment, tu vas C Ex ta conf, donc tu dois C Ex ton code. C’est là que tu renvoies dans ton master après ? 


  \- Tu le fais temporairement.


  En local, le développeur a la base de prod, il fait un export, ensuite, il fait ses modifs. Il refait un export. Et là, tu regardes les dif, tu ne gardes les fichiers qui ont été… Et tu commit seulement ceux-là.


  \- Du coup, quand tu fais un déploiement en prod, tu sais im la totalité de la conf ? 


  \- Non. Tu n’importes que les quelques fichiers que tu as committés.


  \- C’est au sniper quoi.


  \- Oui. Tu n’as que les fichiers qui comportent une nouvelle définition notamment. Tu as rarement plus de 5 fichiers nécessaires pour… Tu peux créer un type de contenu, un blog, et ça ne va contenir que les Imon.


  \- C’est là où les fils se touchent un peu dans mon cerveau. Je ne vois pas à quel moment ta config dans tes fichiers, à quel moment il représente ta prod ? 


  \- La base n’est pas committée. Il n’y a plus rien… La base n’est pas représentée dans le code, sauf la partie au moment où tu as besoin de faire une modification. La seule source de vérité, c’est la base de prod. On sait à ce moment qui a fait une modif, à quel moment.


  Sinon, on ne pouvait jamais anticiper. Il n’y a pas de version de la base dans le code. Ce n’est pas courant a priori, mais comme on était un peu nouveau dans le domaine, on ne s’est pas posé la question de comment on faisait d’habitude. Et on a eu cette solution-là, c’est celle qui nous a servi.


  \- Ça me fait penser aux migrations Symphony, en incrémental. C’est intéressant.


  \- Encore une dernière question.


  \- Sr le process de la config, tu redescends à la base en Dev, du coup, ton export est fait quotidiennement ? 


  \- Il est fait quand on en a besoin.


  Typiquement, on fait le ticket, on n’y pense pas au début. Du coup, tu fais deux fois l’opération. Dans le principe, on ne fait pas régulièrement. On devrait.


  \- Ça ne vous arrive jamais un développeur qui oublie d’exposer la base et que vous écrasiez les configs de prod.


  \- C’est arrivé, l’erreur est humaine. Quand on fait la relecture, on se demande pourquoi Core Extension.




  Mais il y a une vérification humaine.


  \- Une dernière ? 


  \-    J’avais un point pour apporter une précision. Je suis Philippe, société Acquia.


  Pour répondre sur la partie RGPD, on dispose de data centers en Europe, chaque client peut choisir son data center. On est pleinement compatibles RGPD.


  \- Merci.
type: conference
---
