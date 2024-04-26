---
title: Migrer de Drupal 7 à Drupal 10 ("dernière année avant la fin du monde")
draft: false
session_id: "#64"
slug: 64-migration-drupal7-10
duration: 40 min
audience: Intermédiaire
themes: Migration
speakers: Simon Georges
companies: Makina Corpus
teaser: 2024 est la dernière année avant la fin de Drupal 7. Découvrez dans
  cette conférence la procédure que nous avons suivi avec succès sur de nombreux
  sites, comment résoudre vos problèmes, les points d'attention...
prerequisites: Avoir des notions du fonctionnement des migrations Drupal peut
  aider, mais les débutants devraient comprendre aussi.
plan: >-
  * Un peu d'histoire sur Migrate,

  * Des exemples d'outils,

  * La procédure à suivre avant la migration (nettoyage, analyse, réflexion, ...),

  * La migration elle-même,

  * Travail post-migration,

  * Ce qui fonctionne (le "good"),

  * Ce qui fonctionne moins bien (le "bad"),

  * Ce qui ne fonctionne pas du tout (le "ugly"),

  * Résolution de problèmes classiques,

  * Quelques astuces.
takeway: Comment migrer votre site Drupal 7 en Drupal 10 seuls.
slides_files: slides/migrer_d7_d10_simon_georges.pdf
video: RQr5hOFcLeY
transcription: >-
  \- On va y aller. Donc je m’appelle Simon Georges. Je travaille pour Makina
  Corpus. On est très heureux d’avoir pu être sponsor. On est une société qui
  fait du Drupal depuis longtemps. Ça fait 15 ans que j’en fais chez eux.
  Notamment ces temps-ci, on a de plus en plus de gens qui ont besoin de migrer
  leur site en Drupal7. Toutes les migrations sont un peu différentes. 


  Après, je pense que la méthode que je vais présenter est suffisamment générique pour s’adapter. Mais il y a peut-être des sites un peu plus simples pour lesquels cette méthode serait un peu coûteuse. C’est une méthode qui marche plutôt bien. 


  Qui connaît Migrate dans la salle ?  Qui ne connaît pas ?  OK. Quelques personnes. Qui est familier du système de configuration Drupal  ? Je ne vais pas faire de rappel sur CMI, ça permet d’exporter Drupal sur des fichiers Yaml. On ne va pas manipuler le système. C’est un ETL. 


  Le principe, c’est qu’on extrait des données depuis une source, on va les transformer et on le sauve dans Drupal, dans une destination.    C’est un outil qui permet d’importer massivement des données dans Drupal, ça peut être tout un tas de choses. Dans un contexte de migration, on va importer des données Drupal. Pour cela, il y a un avantage, c’est que les modules qu’on va utiliser font quasiment tout le travail. Migrate    connaît déjà Drupal 7. On peut définir une source. C’est un contenu D7. Il va pouvoir le prendre, le charger dans son système, ensuite on va l’injecter dans un Drupal 10. Chaque source, ce sont des bouts de code qu’on peut lire, dans lesquels on trouvera des requêtes SQL. Dans certaines migrations, il faudra    altérer les requêtes ou récupérer plus de données. 


  Pour la destination, c’est pareil. Migrate sait créer des données    Drupal, créer des nodes. Ça renvoie à un bout de code qu’on peut parcourir et comprendre. Aujourd’hui, on ne va pas modifier ces sources et destinations. C’est un peu plus avancée, on n’a pas besoin de ça. Par contre, la partie la plus intéressante, c’est la partie process. On prend un champ Drupal 7 et on le met dans un champ Drupal 10 ou ça peut être un peu plus compliqué. C’est du code que Migrate a généré. C’est le genre de code que vous pourriez avoir à modifier. Ce sont des fichiers Yaml qu’on va modifier. Avant même de lancer la migration, on considère que ça se prépare. Notamment sur le site du client, il y a plein de choses à faire. La première chose, c’est de nettoyer le site de tout ce qui est inutile. Tout ce qu’on n’a pas besoin de migrer ça ne sert à rien de le migrer. Ça crée des bugs en plus. La plupart des clients sont OK de commencer à nettoyer leur site avant même la migration.    Ça permet de supprimer les contenus inutiles.    


  Ensuite, la bonne pratique, c’est de mettre à jour le coeur et les modules aux dernières versions D7. Il faut que le site Drupal 7 soit à sa dernière version sinon vous risquez des bugs. Ensuite, il faut identifier sur le site D7 des contenus de tests qui permettent de tester. 


  Vous n’aurez pas le loisir de tester l’intégralité de ce que vous allez migrer. Ça vous fera du temps de gagné. Notamment, beaucoup de sites Drupal 7 utilisent Features qui permettait d’exporter de la configuration Drupal dans du code. Si ces features ne sont pas surchargées, la configuration    Drupal ne réside que dans du code. Il y a un patch qui permet l’import dans PHP. Ça permet de migrer. Le cas classique, ce sont les styles d’image. 


  Il y a aussi features support, plein d’autres choses. Souvent, on s’aperçoit qu’on n’a aucun style d’image. Souvent, on ne le fait pas sur le Drupal 7 de production, mais on le copie sur un environnement temporaire. Ça permet de récupérer l’intégralité de ce qu’on avait. Pour vous assister dans la migration, il existe un outil qui est Acquia Migrate Accelerate. Ça permet de prendre des décisions sur quelle solution utiliser pour migrer dans Drupal 8 et plus. C’est une solution complètement clé en main. Ça fait tout le travail pour vous. C’est lui-même qui va choisir les modules à installer. Ce n’est pas ce qu’on utilise mais ça existe, ça fonctionne bien. Le petit défaut à mon goût, c’est que ça migre en Drupal 9. 


  C’est possible que ça ait bougé depuis, je n’ai pas revérifié. C’est une solution qui existe. On a développé un utilitaire maison qui fait des requêtes SQL sur la base de données du client. Ça permet de préparer le site, de voir ce qu’on va devoir migrer. Ça fait des requêtes SQL. Ça permet de voir par exemple s’il y a plusieurs langues sur le site, là tous les contenus sont en français. Ça permet de voir s’il y a des nœuds et la volumétrie. On se rend compte qu’il y a des contenus qui ne sont pas utilisés. 


  S’il y a des landing pages, ça ne sert à rien de les migrer. On fait une audit du site du client et on voit ce qu’on va migrer. Derrière cette interface il y a des requêtes SQL surtout. Ensuite, la façon dont on va fonctionner c’est qu’on va installer un Drupal 10. N a aussi Migrate Tools qui permet de générer des migrations.


  Quand on va lancer la génération de la migration automatique, ça se fait sur les modules qui sont activés. Un module qui est important c’est Media Migration qui fait la migration de toutes les images issues de Drupal 7 dans Drupal 10.Si vous voulez utiliser la médiathèque de Drupal 7 avec Drupal 10, il ne faut pas l’oublier.    Pour le cas que vous aurez souvent, vous avez des modules qui existent en Drupal 8 dont la compatibilité n’est pas encore faite. Souvent il y a des patches. Il y a un composer qui permet de récupérer les modules Drupal 8+ et de leur appliquer des patches dessus. On peut déjà utiliser les modules en Drupal 8 et 9 sur Drupal 10. Vous pourrez utiliser dans votre code Drupal 10 des modules issus de versions plus anciennes. On va faire ça. Je ne vous ai pas montré mais on va migrer ce site-là qui m’a été fourni par quelqu’un de la communauté. On va donc… Je vais vider la base de données et le réinstaller. J’installe un site vide plus ou moins. Ensuite, vous allez voir que je vais faire quelques modifications dans l’installation pour activer des modules. Là on est sur un Drupal 10 complètement vierge. Je vais commencer par supprimer les types de contenus    existant dans le profil d’install’. Ils seront créés dans le cadre de la migration.    Ensuite, je vais aller activer… J’ai tendance à désactiver tout ce qui me gêne, ce n’est pas une obligation. Je laisse ceux qui sont utilisés par le site. Le module contact est utilisé sur le site. Je désactive les modules qui ne sont pas utilisés. 


  Je ne prends pas le profil minimal car il fait tellement peu de choses que ça me ferait faire des choses en plus avant la migration. J’ai peu de temps, j’ai fait le fainéant. 


  Je vais activer notamment media Library. Ça ce sont des choses à discuter avec le client mais a priori j’ai envie d’utiliser media Library. Je vais activer le module qui va permettre de générer ma migration. Migrate Tools, c’est un outil qui permet de lancer la migration en ligne de commande. Migrate plus ce sont des améliorations, ça permet de stocker la migration en tant que dossier et activer les fichiers Yaml.


  Je vais activer aussi Metatag. 


  Et c’est tout pour le moment. 


  On va ensuite laisser Drupal faire tout le travail, c’est-à-dire générer des scripts de migration. Ça c’est la migration    standard. Sur quasiment tous les sites, ça va planter sur plein de choses. On va lui faire générer les migrations. 


  Voilà. Là il a généré tout un tas de migrations.    On va aller voir ce qu'il a fait. Vous pouvez consulter la liste des migrations qu’il a générées. Il a aussi généré des migrations pour le contenu, migrer les contenus, les blocs custom.    L’idée, c’est de lui faire migrer tout ça. On commence par migrer la configuration. Ça se déroule presque sans erreur. En fait, ce qu’on va constater, c’est que dans ce lancement de configuration de migration, presque toutes les erreurs ont la même cause, c’est qu’il ne connaît pas l’entité. Ce que vous auriez à faire, c’est créer un module pour récupérer le contenu de ce que faisait Node registration en Drupal 7 pour faire le chemin de migration. Ce n’est pas ce qu’on va faire mais c’est ce qu’il faudrait faire sur ce site. Une fois qu’on a migré la configuration, normalement, on s’attend à ce que tous les types de contenus soient définis. On voit, si je prends par exemple le type de contenu on a une bonne liste de champs déjà migrés. En général quand la migration de configuration fonctionne, à ce stade, on va tester cette configuration, on va regarder si on a tout ce qu’on veut. 


  A partir de ce moment-là, en général j’exporte la configuration via CMI. Si j’ai besoin de faire des modifications de configuration, je les fais sur le Drupal 10. Ce qui peut vous arriver, c’est une field discovery fail. C’est parce que la base de données dont vous partez, vous ne lui avez pas donné comme clé «  migrate ». Ce n’est pas le comportement par défaut de Drupal. Il y a un ticket ouvert sur le sujet. C’est une erreur qui va vous arriver. Il faut déclarer la base de données avec une clé migrate. Il y a des bugs Drupal qui existent depuis des années, ça c’est le cas. Ce n’est pas très grave. Ensuite, on fait la même chose avec le contenu. C’est bien sûr un peu plus long, il va récupérer    tous les fichiers directement sur le site. Vu la taille du site, c’est quand même relativement rapide. On a encore quelques erreurs. Ça sera le même principe. Selon la taille du site, ça peut être plus ou moins long, plus ou moins important.    Il y a des erreurs normales et dans ce que j’exécute il y a un -- continue failure. Sinon il va s’arrêter à la première erreur. Ça vous permet de faire plein de corrections d’un coup.    Sinon sur les gros sites ça va prendre pas mal de temps. Là on a passé les fichiers. Vous voyez une erreur, je ne sais pas si vous l’avez vue passer. Il dit «  je ne connais pas la langue française ». Je n’ai pas activé le module « language » tout à l’heure donc il n’a pas migré le contenu car tous les contenus étaient en français.    On vide la base de données, on réinstalle le site. Je vais faire la même chose en cochant le module « language ». 


  Sur un site lambda je supprimerais aussi les commentaires mais le site que je migre utilise les commentaires. Par contre je vais supprimer le type de commentaire. 


  Je fais ça parce qu’on a le temps. Certains au premier rang aimeraient que j’en profite pour placer des mots difficiles à placer en conférence. Je ne le ferai pas. Une petite chanson non plus. 


  Je n’ai pas assez d’alcool dans le sang. 


  Ne pas oublier «  language ». Merci. J’allais passer à côté. Perturbé par le premier rang. Je n’ai pas oublié de module. Vous avez suivi ? 


  Media migration oui, il est là. Oui, on est tombé sur… Parfait. Ou alors j’ai désactivé un truc dans le coeur. Media library… Bien vu, bien vu. Merci. Je pensais que media migration l’activait tout seul mais ce n’est pas le cas. Merci. On aurait dû la refaire une troisième fois. 


  Du coup, on lui fait générer la migration. Donc là, je vais vous montrer dans la commande. On peut ici, j’ai utilisé legacy égal migrate. 


  Dans ce cas-là, la base de données n’aurait pas eu la clé migrate. On aurait eu l’erreur sur le field dans D7.




  \- (hors micro)


  \- Je n’ai pas le code, j’ai uniquement la base de données. Sur beaucoup de sites client je commence par ça. J’ai uniquement la base de données. On a normalement les mêmes erreurs. J’aurais pu en corriger certaines, vous aurez beaucoup d’erreurs sur des plugins d’action qui ont un nom différent. C’est souvent juste un mapping à corriger. Je voudrais juste vous montrer une migration qui fonctionne. On va migrer les contenus. Sinon vous ça va ?  C’est le problème    des migrations. Là le site est un peu petit mais on a des migrations qui peuvent prendre 1h, 30 minutes. On a parfois des paragraphes, des révisions de paragraphes avec des milliers d’entrées. Là pour mon client l’historique n’était pas très important. Il a supprimé énormément de révisions. Ça a réduit la base de données massivement. On a 2 ou 3 000 révisions de paragraphes. Souvent, on lance l’intégration des contenus une à une.    Il n’y a pas beaucoup de paragraphe dans ce site, on n’a pas trop de problèmes. 


  Il y a encore quelques erreurs. On va voir si c’est important plus tard.


  Je les migre une fois pour voir si ça fonctionne, ensuite je le désactive. Une copie des fichiers locaux oui. 


  Je ne migre pas les fichiers à chaque fois. Notamment si possible en récupérer une copie locale. Après, c’est quand même important de lancer la migration des fichiers à chaque fois car il y a énormément de champs qui dépendent de ça. 


  \- Je ne disais pas de ne pas lancer la migration mais ne pas copier les fichiers physiquement.


  \- Tout à fait. Si tout s’est bien passé, on a des contenus. On a des contenus. 


  Merci. On a des contenus de qualité. C’était super nul. C’est l’intégralité des champs qui sont remplis. C’était un site relativement simple. J’avais déjà modifié un peu la migration. Mais globalement c’était un site assez simple. C’est à partir de cette étape qu’on met les contenus dans les mains des clients, les contenus d’exemples. Je ne suis pas allé voir mais dans la médiathèque, voilà, on a les fichiers.    J’ai essayé de le laisser anonyme mais la personne est identifiée. 


  Là, comme tout à l’heure on teste, on corrige, on recommence. On peut en profiter pour améliorer le site, essayer de corriger des choses qui auraient été mal faites en Drupal 7. Ce qui m’arrive, c’est de modifier des contenus Drupal en entités. J’ai tendance à les transformer en entité pour ne plus avoir ce type de chose. Sinon on doit changer le référencement. En gros, on en profite pour refaire certaines choses mal faites.    Ensuite, arrive l’étape de migration du code Custom. Il y a des outils comme Retrofit. Je ne l’ai pas testé. A priori ça marche plutôt bien sur ce qui est couvert par le module. Pour le code custom, il y a plein de choses qui sont mal faites, il y a plein de choses qui sont inutiles. Souvent, plutôt que d’essayer de migrer les 150 modules    custom, en fait il y en a qui sont inutiles. Je n’essaie pas de migrer le code custom tel quel. C’est une réécriture. Vous avez aussi un module pour vous indiquer comment migrer les API. On a tendance à réécrire les choses en accord avec le client. 

   Ensuite il y a la migration du thème. Je demande aux clients s’ils ont un changement de charte graphique. Parfois on refait tout, on ne se pose pas trop de questions. Dans Migrate, ce qui fonctionne bien, le multilinguisme et les contenus. Il y a des choses qui ne fonctionnent pas trop, migrer des views, c’est souvent pas une bonne idée. Refaire, ça vaut parfois le coup. A moins que votre site ne soit que des formulaires, j’ai tendance à les refaire.    Pareil pour les views.    Je les refais. Et après vous avez ce qui va vous coûter 80 % de temps. Le media, si on met un lien dessous, il n’est plus centré, il passe à la ligne, dans Drupal 7, ça ne marche pas. Et donc c’est là l’étape où vous allez corriger, créer des plugins de migration. C’est la partie horrible. Parfois on n’a pas le choix. Parfois on arrive à convaincre le client. 

  Et puis ensuite vous avez tout un tas de problèmes courants. Par exemple avec media migration, si vous étiez dans un multisites Drupal, ça ne va pas marcher. Il faut faire une réécriture. 


  Pareil, media migration, il peut utiliser selon les cas soit entity embed ou media embed. C’est à vous de le préciser. Ça vous oblige à installer un module de plus sur Drupal 10. Si vous avez des liens sur des images dans les éditeurs de texte, le filtre  autop de Drupal va vous casser tous les liens. Je vous ai mis l’issue. 


  Si vous avez des questions, je suis prêt à les écouter. 


  \- Tu n’as pas fait assez de sport    ce matin. Merci pour ta conférence.    Petite question, tu nous as présenté un cas assez simple. Sur des migrations où tu pars du D7 avec de l’overcart et tu dois aller sur du commerce ? 


  \- Je dis non au client. Non, c’est quelque chose que je n’ai pas fait. Je ne connais pas l’état du migrate d’uber cart. Clairement, on fait peu de projets e-commerce, on ne fait pas ce genre de chose. Tu vas configurer les choses complètement différemment. Je ne me poserais pas trop de question pour migrer les produits uniquement mais pas tout le reste. 


  \- Bonjour, si j’ai bien compris, Migrate il récupère tous les contenus sur la base de données D7. Si on a une base de données SQL serveur, il peut se connecter dessus ? 


  \- Je n’ai jamais fait ça. Sous des anciennes versions on pouvait le faire. Je n’ai pas testé en D10. 


  \- Il vaut mieux faire un SV exporter  ? 


  \- C’est ce que je recommande pour des projets qui ne sont pas du Drupal. Si vous pouvez avoir un export propre, c’est plus facile. Si on doit essayer de comprendre par exemple un easy publish dans un Drupal, c’est du temps de perdu sur le discovery sur le projet. Là, on essaie de récupérer une partie de la configuration, les meta-tags, des choses comme ça. Un CSV de contenu, ça fera l’affaire. 




  \- Merci.

   D’autres questions ? 

  \- Tu peux expliquer l’option groupe avec Migrate set ? 


  \- En fait, quand tu génères les migrations comme là, il va générer les migrations dans un groupe Migrate 7.


  Il y a tout un Error de l’espace.




  Ça m’est arrivé d’avoir des trucs hallucinants. En fait, il y a pas mal de migrations générées en double.


  Typiquement, c’est ce genre d’erreur.


  Le système de Migrate est fait pour ça.


  \- Il utilise encore Stub ? 


  \- Oui.


  \- Tu peux expliquer ? 


  \- Je n’en ai pas eu besoin récemment. Mais il migre des entités références, il précrée et il renseigne après. 


  Si vous avez testé Migrate il y a 3 ans, aujourd’hui, ça n’a rien à voir. Aujourd’hui, le multilinguisme marche bien. Beaucoup de choses ont été fixées. Ils ont fait un travail, il y a un nombre de patches qui ont été intégrés. C’est assez phénoménal ce qui est migré aujourd’hui.


  \- Là, tu as recommencé depuis zéro. Tu peux faire des rollback ? 


  \- Oui. Notamment quand on arrive à la phase de contenu, je rollback, je corrige, je relance.




  C’est une des forces de Migrate, c’est de permettre le rollback de migration et de faire des workflows.

   Je fais partie des gens qui adorent Migrate. C’était déjà comme ça quand ce n’était pas un module du coeur. Ça facilite les workflows, tu as l’impression d’avancer dans ton sujet, c’est assez satisfaisant.

  J’aurais pu tout rollbacker, oui, mais où est le panache ?  ! 


  \- On termine sur ça.


  \- Merci beaucoup. Ne manquez pas la dernière session.
type: conference
---
