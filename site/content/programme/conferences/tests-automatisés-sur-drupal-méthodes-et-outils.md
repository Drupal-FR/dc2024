---
title: "Tests automatisés sur Drupal : méthodes et outils"
draft: false
session_id: "#58"
slug: 58-tests-automatises-outils
duration: 40 min
audience: Découverte
themes: Tests automatisés
speakers: Nuwantha WANASINGHE & Remi Treussart
companies: Niji
teaser: Le but de cette session est de présenter l'utilisation des systèmes de
  tests automatisés pour les tests unitaires et fonctionnels. Nous démontrerons
  à quel point la pratique est importante mais relativement facile à mettre en
  œuvre (même si nous n'essaierons pas de vous apprendre à développer et à
  écrire des tests). Nous présenterons un aperçu des différentes méthodes de
  test et comparerons les tests manuels, automatisés et semi-automatisés ainsi
  que leurs avantages et inconvénients.
prerequisites: Pas de pré-requis particulier.
plan: >-
  * Test manuel,

  * Tests fonctionnels et Frameworks,

  * Cucumber et Syntaxe Gherkin,

  * Systèmes de test semi-automatisés,

  * Framework de test Drupal (Unit, Functional, JS et Kernel) avec PhpUnit et Behat/Mink,

  * Tests des modules et correctifs Drupal (Pour les contributeurs).
takeway: Importance et facilité de mise en place des tests automatisés.
slides_files: slides/testauto-drupalcamp-rennes-2024.pdf
video: mQXQ_VE2w68
transcription: >-
  \- Bonjour à tous. J’espère que vous avez passé une bonne première journée.   
  Aujourd’hui on est là pour vous présenter les tests automatisés sur Drupal. Je
  suis Rémi Treussart, je suis développeur backend Drupal.


  \- Bonjour à tous. Je suis Nuwantha Wanasinghe, je suis développeur en Drupal. Je suis sur Drupal    depuis 2015. 


  \- Qui sommes-nous ?  Nous sommes une petite ESN de 1300 personnes. Notre siège est ici à Rennes. Sinon on a des entités dans toute la France. On a aussi une petite antenne à Singapour mais plus sur du salesforce. On a quand même une petite communauté Drupal. Le sommaire du jour. Pourquoi tester ?  Les différents types de tests. Les méthodes, les tests automatisés, les avantages et les inconvénients. Les outils pour tester. Les frameworks disponibles.


  Comment ça se présente sur Drupal.org. Et sur la couverture des tests.


  Donc je ne sais pas si vous connaissez ce fameux bug informatique dans la salle. C’est un des plus gros bugs de l’histoire, c’était le 4 juin 96,Ariane 5 a décollé. Et puis ça a explosé. Le problème c’était que Ariane 4 utilisait des nombres entiers en 16bits. Et Ariane    5 envoyait du 64bits.    C’était juste un copier-coller, il n’y a pas eu de test. Des années de travail sont parties en fumée. Ça peut nous montrer en quoi il est important de tester. Je ne sais pas si vous avez l’habitude de tester ou pas ? 


  \- Quand on parle de tests, il y a beaucoup de types de test. Il y a des tests de charge, de sécurité, des tests sur l’impact environnemental aussi. On n’a pas le temps de parler de tout ça. On va se concentrer sur trois types de tests.


  \- Les différentes méthodes, il y a manuel, semi-automatisée ou automatisée. Pour les tests manuels, on a besoin de rien. On peut partir d’une feuille et d’un crayon. On se fait un scénario et on valide ou non. Il y a un test avec un scénario, on fait toutes les procédures pour valider.    Ou il y a un test exploratoire, on va se balader dans le site et on peut découvrir des bugs. Si je dis des bêtises, n’hésitez pas à me contredire. La squash, ça nous permet de tracer notre historique de test. 


  Test semi-automatisé, il y a une partie manuelle avec l’homme et une partie avec la machine. Le testeur reçoit les résultats du test. Il doit valider ou non les exceptions soulevées. Une action humaine est nécessaire. Ce qui nous intéresse aujourd’hui,…


  Pardon on est toujours sur l’exemple de test semi-automatisé. Là on est dans un test de régression visuelle. Il va faire deux screens et la personne qui va regarder va dire si le visuel est bon. Voici la partie qui nous intéresse    aujourd’hui, ce sont les tests automatisés. 


  \- Donc parlons de tests automatisés. Pourquoi on automatise des tests ?  Il y a plusieurs raisons, il y a des avantages. Le premier, ça permet de gagner beaucoup de temps. On a un feature, on l’a mise en place, on a fait toute une batterie de tests manuels, ça nous a pris beaucoup de temps. A la fin, si on découvre une petite correction à faire, il faut repasser tous les tests. Si on peut automatiser cette partie, on gagne beaucoup de temps. Cela réduit les erreurs    humaines. Parfois, on peut ne pas voir une petite partie. Ça peut sembler bon mais ce n’est pas tout à fait correct. Le test manuel introduit les erreurs humaines. Ça permet aussi de faire interagir avec les pipelines du type continuous interaction. Ça permet d’interagir avec le Gherkin.


  Les inconvénients, il faut le créer. Il faut le développer ou l’écrire. Et il faut le maintenir aussi car les features évoluent, les tests doivent évoluer aussi. Qui dit maintenance et développement, ça a un coût. En général c’est ce que les clients n’aiment pas. C’est un peu compliqué à ce niveau. 


  Donc là, j'ai mis quelques exemples de frameworks. Vous les utilisez déjà ?  Je ne les connais pas tous, j’ai mis des exemples. 


  \- Là on est sur les outils orientés    tests unitaires pour du Drupal. On a Behat et PHP Unit. La plupart des tests sont faits sur PHP Unit. Avant on avait du Behat, on peut toujours l’utiliser. Je vais vous faire un petit exemple sur Behat. Ça peut être écrit par n’importe quelle personne, même si elle ne fait pas du code. C’est écrit en Gherkin. C’est souvent «  en tant que », «  je veux pour ». 


  Donc les mots-clés qui sont utilisés en Gherkin, il y a «  given » pour indiquer le contexte. Il y a «     when » pour décrire l’action. «  Then » pour les résultats. Et on peut rajouter d’autres étapes. Il y a aussi Cucumber qui est pareil, sur du    Gherkin. C’est très facile d’écriture et de lecture.    Il y a beaucoup de langages qui sont disponibles pour ces tests. Là on est sur un test, on va sur la page d’accueil de drupal.org. On va voir si la ligne « drupal is powered by an opensource … »est bien présente. 


  Sur Drupal maintenant.


  \- C’est la partie qui nous intéresse, comment ça se passe sur Drupal ?  Un peu d’historique. Je ne sais pas si vous connaissez le module Simple Test sur Drupal 7 ou avant ?  Ah c’est bien. 


  Donc c’était un très bon module, bien fait. Ça a été migré avec la migration Drupal 8. C’est intégré directement au corps. Maintenant Drupal utilise PHP Unit car il est plus puissant. Qu’est-ce qu’il nous offre ce framework de test Drupal ?  Trois principales possibilités :  le test unitaire, le test de service et le test fonctionnel. Sur le test    fonctionnel, il y a le test normal et le test avec Javascript. Il y a des avantages et des inconvénients. Sur le test unitaire, ça permet de tester des petits bouts de code unitairement. On peut le faire séparément de Drupal. Mais ça ne sert pas beaucoup. Dans le cas de test unitaire, on doit simuler ces dépendances des services. Quand on mock beaucoup de choses, le test devient très lourd, c’est difficile à comprendre ou plus compliqué à maintenir. Et aussi ça devient inintéressant. Mais c’est très rapide, on peut en mettre autant qu’on veut. Ça prend quelques millisecondes par test. Le second, c’est le test d’intégration.    Qu’est-ce qu’il fait le KernelTest ?  Il démarre le Drupal avec les modules, avec la base de données, ça nécessite plus de temps. Et donc avec ce test, on peut tester les services complètement. Par exemple si on veut activer quelques modules, on peut les activer et utiliser le service fourni par ce module. Dans ce cas, contrairement au test unitaire, quand on lance le test d’un service, ils sont liés à d’autres services. En général on peut tester toute la boucle. Mais ça prend plus de temps qu’un test unitaire. Le troisième niveau, le test fonctionnel. Qu’est-ce qu’il fait ?  En fait, le test fonctionnel, il démarre le Drupal complètement ou presque. On peut activer le module qu’on veut avec le composant graphique aussi. Contrairement au test de service où il n’y a pas de composantes graphiques. Ça prend plus de temps que le test de service, en général 10x plus ou encore plus si on a beaucoup de composants à tester.


  Là, je vous montre quelques exemples d’implémentation. C’est assez facile. Rémi va expliquer en détail. On a une classe à étendre, pareil pour le test de service.


  \- Justement, comment écrire ces tests ?  On vous a bien décrit les différents types de tests. On a un dossier test avec d’autres dossiers pour les différents types de tests. Dans chaque test, il va étendre une classe de PHP    Unit. 


  Là on est sur un exemple de test unitaire, on étend    bien la classe Unit test case. On va chercher des informations. Chaque fonction qui est un test doit commencer par le mot « test ». 


  Les tests unitaires comme ça a été dit, ils n’accèdent pas à la base de données ou aux services externes. C’est ce qui est le plus rapide et le plus facile d’utilisation dans un premier temps. On peut en faire une quantité, ne vous en privez pas. L’inconvénient c’est qu’il n’y a pas d’interaction avec le Drupal. On peut passer à côté de pas mal de choses. Et Kernel Test, plus des tests de service. Là au niveau de l’écriture des tests, il y a justement, on étend le Kernel Test base pour des Kernel Tests. Par rapport    au test unitaires, on a des modules à activer. Là on est sur un exemple, ça a été pris dans un module. On a les modules à activer justement pour que le test puisse fonctionner. Et après on fait un test… Il y a test devel mail log qui est écrit. 


  Ça permet de tester plus de fonctionnalités. On accède à la base de données , au service Drupal. Et la vitesse, on est sur moins d’une seconde, ça reste quand même envisageable. 


  Là, JS test, la dernière classe de test. On va vérifier l’application du point de vue de l’utilisateur final. Le Drupal est démarré en entier. On a aussi le thème, quel thème est activé ?  Il utilise la base de données et les composants graphiques. L’inconvénient qui peut être un frein, c’est la vitesse, c’est très lent. C’est plus coûteux aussi. On a un exemple de page HTML qui est générée par le framework de test.    On a des informations sur le système général. Il va vous sortir le rapport. 


  \- Nous avons pris quelques tests, il faut lancer, tester. Je vais vous montrer deux manières de lancer le test. Soit on peut l’exécuter localement. Le framework, il est fourni avec le Drupal. Il suffit d’intégrer la partie Drupal core-dev avec le composer. Ensuite, il y a des configurations à faire. Il y a un exemple dans le dossier core-php. Il suffit de le copier sur la racine ou de le configurer. Si on utilise des tests de service, on doit configurer une base de données. Il y a d’autres configurations à faire aussi par exemple si on va chercher les fichiers générés. Un test fonctionnel, ça génère les fichiers HTML. On pourra regarder par la suite pourquoi ça passe ou pas. On peut lui dire à quel endroit on peut les stocker. On peut aussi organiser les tests par groupe. On appelle les test suite. Ça permet de faire cette configuration.


  Une fois configuré, il suffit de lancer la commande binaire qui se trouve à l’intérieur du dossier, qui prend en compte le fichier de configuration, et qui lance le test. Le premier cas, tout se passe bien, ça s’affiche en vert. S’il y a des warnings, ça s’affiche aussi. Le troisième cas, ça ne passe pas, il y a un souci. Il peut y avoir deux raisons principalement. Soit le test est devenu obsolète car on a ajouté un fichier mais on n’a pas mis à jour le test. Donc pour lui ce n’est pas bon. Et aussi, on attend quelque chose et on obtient autre chose.


  \- On peut les exécuter automatiquement. On est dans une partie devops. On peut intégrer nos tests à nos pipelines de déploiement. On peut avoir un stage test après chaque lancement, après un build, on peut avoir un rapport sur les différents problèmes qu’on peut rencontrer. Sur le Git hook, on peut lancer aussi ces tests. On a un fichier qui est le précommit. Ça sera sur un hook précommit. On peut lui indiquer le chemin vers notre PHP Unit. On aura notre précommit qui pourra nous dire les problèmes qu’il rencontre. 


  \- Comment ça se passe sur drupal.org ?  Il y a des contributeurs dans cette salle ?  On peut utiliser le framework de test    Drupal. Le principe reste le même, ce que je vous montre est un peu obsolète. Vous avez sûrement remarqué un bandeau vert ou rouge sur certains modules. Pourquoi ce bandeau ?  C’est le résultat    d’exécution des tests automatisés sur ces modules. Quand on crée un module par contribution, on peut lancer un test périodiquement ou par chaque commit avec différentes configurations de Drupal. On peut choisir la version de Drupal, la version de la base de données ou de PHP pour tester. Pareil quand on fait des patches, des merge requests, on peut tester un autre correctif avec les tests mis en place sur ce module. Ça nous assure qu’on ne casse pas tout. Ça facilite, ça augmente la confiance dans les patches et ça facilite le travail.


  \- Pour la couverture de test, quelle couverture viser ?  Si vous avez le budget, vous pouvez faire 100 % mais je ne suis pas sûr que ça soit nécessaire. Il y a plusieurs points à considérer. Il y a l’objectif métier. Ce qu’ils souhaitent tester. L’automatisation des tests à prendre en compte aussi.    A-t-on la main d’oeuvre nécessaire ?  Le budget  ? 


  On a les risques associés à notre application. Selon différentes applications, on n’aura pas la même couverture visée. On a aussi pour la couverture, on peut se baser sur la complexité du code, là où elle est la plus importante et s’il faut mettre davantage de tests sur cette partie. Ce sont les questions à se poser. Il n’y a pas beaucoup de bonnes réponses, c’est un choix collectif. En termes de bonnes pratiques, on a un petit schéma qui peut nous expliquer, il résume un peu tout. On peut faire beaucoup de tests unitaire car c’est très rapide. On peut en faire autant qu’on veut. C’est peu coûteux. Les tests de service, il en faut quand même pour tester nos services, c’est une question de budget et de vitesse. Et les tests fonctionnels à la fin, il en faut au moins quelques-uns pour tester l’application en entier. C’est un peu le visuel sur l’utilisateur final, comment l’application tourne. Ça peut être très coûteux, il faut faire un équilibre avec tout ça. Il faut essayer d’avoir au moins un check    de développement.


  \- On arrive à la fin. En résumé, les tests automatisés, c’est très facile à mettre en place. Ce n’est pas si coûteux qu’on le pense et c’est très fiable. Mais on ne peut pas couvrir tout. C’est un bon complément qui est facile à faire. Mais il ne faut pas attendre tout de la part des tests automatisés. J’espère que ça vous a appris quelque chose et merci pour votre écoute. Est-ce que vous avez des questions ?  Question ou sur un point où vous voulez en savoir plus. 


  \- Pour l’option de rajouter les tests dans les Git hook, ce n’est pas un peu lourd ? 


  \- Ça dépend de la quantité qu’on ajoute. Par exemple sur mon projet actuel, en local je lance tous les tests unitaires. En fait, on peut aussi cibler une partie de test. En local, on peut avoir un aperçu de tout. Je lance les tests unitaires et de services mais pas sur les tests fonctionnels, ça prend plus de temps. On peut moduler par rapport    au besoin.


  \- Bonjour. Dans le cas d’un projet    legacy où il n’y avait pas de test    effectué, quelle est votre reco pour démarrer des tests auto ? 


  \- En fait, si… C’est une bonne question. Si on ne fait pas dès le départ, c’est un peu compliqué. Surtout avec les tests de framework Drupal, on est souvent confrontés à des dépendances. Quand on développe des choses, en général on ne le fait pas de manière optimale, ça empêche la mise en place de test. La meilleure solution, c’est dès le départ.    Sur notre projet actuel, on ajoute des briques comme on peut. Sur un projet existant legacy, je sais que c’est compliqué. Il y a d’autres alternatives que des tests de framework Drupal. Il y a des tests fonctionnels qui peuvent marcher. A choisir. J’espère que j’ai répondu à votre question. 


  \- Bonjour. Est-ce que le framework de test est capable de charger le thème du site ? 


  \- Oui, il est tout à fait capable de charger le thème. Je vais vous montrer si j’arrive à sauter rapidement. En fait, sur cette partie, on voit bien le petit thème, là j’ai ajouté «  classic » on peut ajouter d’autres thèmes. Quand on charge plus de composants, ça peut prendre plus de temps. A voir si c’est réellement nécessaire de le charger ou pas.


  \- L’idée c’est par exemple de tester des blocs ou des boutons, du HTML derrière un bouton. Les tests fonctionnels permettent cela ? 


  \- Tout à fait, on peut même vérifier les classes. Ça génère une page aussi. Avec la partie    Javascipt, on peut même tester le résultat du script. 


  \- Bonjour. Merci pour la présentation. Alors, je voudrais savoir, d’un point de vue business, où vous placez la limite sur ce qui est intéressant de tester ou pas. Comment ça s’organise chez vous ?  Comment vous voyez la chose de ce point de vue-là ?  C’est bien de savoir où s’arrêter pour ne pas cramer du budget inutilement.


  \- Merci pour la question. Cette question est très complexe. Déjà, on ne va pas passer beaucoup de temps pour la création de test et pour la maintenance. Mais peu de test pour beaucoup de résultat. Il faut bien cibler ce qu’on veut tester, la partie    essentielle du projet. Donc c’est pourquoi on a parlé d’ici, on peut mettre beaucoup de tests unitaires, par exemple les fonctions algorithmiques qui n’ont pas de dépendance. Par exemple récemment nous avons développé un petit algorithme qui prend en compte des valeurs différentes en entrée. Si je le testais manuellement, j’y passerais plusieurs    jour.    J’ai mis en place le test unitaire. C’est un compromis à faire. Beaucoup de tests unitaire. Test    fonctionnel si on peut le plus possible. Les composants critiques essentiels, on peut les tester. C’est un choix difficile. A mon avis, si on concevait correctement 10 à 20 % des cas, on peut approcher un résultat de 80 voire plus.


  \- Merci. 


  \- Bonjour, une question par rapport    au test fonctionnel, on peut tester des parcours de navigation de l’utilisateur  ?  Par exemple on teste, il arrive sur la page    d’accueil, on rentre un mot dans la zone de recherche, ça renvoie les résultats de recherche par exemple.


  \- C’est tout à fait possible.    Après parfois on a des blocages techniques. Mais c’est tout à fait possible. Cet exemple ici, un utilisateur se connecte sur le site, une page de login, il va sur la page user et il va visiter le tableau de bord. C’est tout à fait possible. On peut entrer des données, attendre le résultat.


  \- Merci, super. 


  \- Une autre question ?  Pas d’autres questions ?  Moi j’ai une question :  qui va mettre en place des tests unitaires ? 


  Bravo !  Ça me plaît beaucoup.


  \- Merci beaucoup. Il a une question. On a 3 minutes. 


  \- Je me nomme Tristan, je travaille dans une agence parisienne. On voudrait tous mettre des tests unitaires mais souvent en face de soi on a des clients qui sont limités. Est-ce qu’il y aurait des arguments indiscutables pour convaincre les clients ? 


  \- Indiscutable je ne sais pas. Comment j’essaie de convaincre les clients ?  Je montre les avantages et les inconvénients. Je parle honnêtement des avantages et des inconvénients. Ça vaut le coup de le faire mais ça coûte plus cher, c’est à vous de décider. Merci beaucoup à vous.
type: conference
---
