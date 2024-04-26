---
title: Xdebug, la lumière au bout du tunnel
draft: false
session_id: "#46"
slug: 46-xdebug
duration: 40 min
audience: Découverte
themes: Développement, outils
speakers: Chinaski
companies: ekino
teaser: Drupal comme Xdebug peuvent être hardus de prime abord. L’objectif ici
  est de découvrir ensemble comment une bonne utilisation de Xdebug est une
  alliée précieuse de la documentation et peut être d’une grande aide dans
  l’apprentissage des notions clés Drupaliennes.
prerequisites: Avoir les notions essentielles du développement en PHP, rien de
  plus. Même quelqu’un qui n’a jamais développé avec Drupal saura s’y retrouver
  !
plan: >-
  Après une dizaine de minutes de présentation, on va partir sur du live coding.
  On découvrira ensemble les fonctionnalités de base de Xdebug et leur
  utilisation. On se lancera ensuite sur des usages plus élaborés, avec pour fil
  rouge la résolution d'un bug.


  L’idée n’est pas de faire du prosélytisme et de proposer Xdebug comme solution à tout et n'importe quoi, mais bien de présenter l’outil d'une façon pragmatique, avec ses avantages et inconvénients.
takeway: L’utilisation et la prise en main de Xdebug dans PHPStorm (mais
  l’intégration se ressemble dans les autres IDE). On ne parlera pas de la
  configuration de l’outil, mais bien de son utilisation.
slides_files: slides/drupalcamp_xdebug.pdf
video: k0wcRfxfUW0
transcription: >-
  \- Bonjour à tous. Merci beaucoup de finir cette journée avec moi et pour
  parler de Xdebug. Je vais essayer de ne pas trop vous assommer. Si vous êtes
  là aujourd’hui, c’est parce que vous avez eu affaire à Xdebug.


  Le but est de montrer comment faire pour s’en servir, et tous les bienfaits que ça peut apporter à notre projet.


  Je commence par me présenter. Je suis un ancien libraire. Dans l’autre salle, il y a une conférence sur un rôtisseur devenu développeur Drupal.


  Les requins sont gentils, c’est des bêtes un peu incomprises. Il ne faut pas avoir peur des requins, comme il ne faut pas avoir peur de nous.


  J’ai quasiment toujours fait du Drupal. Je me suis reconverti dans le développement en 2019. Un peu de Symfony, et de Laravel.


  Je suis défenseur de deux dogmes :  la programmation défensive, c’est le fait de s’assurer de tester tous les typages, il y a plein de choses derrière ça. Et la programmation pragmatique, c’est se dire d’être pragmatique avant tout. Il faut savoir parfois se mesurer. Si j’utilisais plus souvent ces deux types de programmation,    je n’aurais pas besoin de Xdebug. Le but est de ne pas avoir besoin de Xdebug.


  Xdebug, c’est une extension de PHP.    Derick Rethans, sur son blog, rend en détail si vous voulez voir comment ça se passe, il peut rentrer dans le détail. Il est accessible sur X, Twitter. Vous pouvez le solliciter.


  C’est le débugger PHP le plus connu. Il y a d’autres alternatives. Mais on n’est pas sur le même outil. Xdebug est le seul à proposer une interface Front End dans les IDE les plus courants.




  C’est activement maintenu.


  Souvent, quand on parle de Xdebug, quand je dis qu’on peut tout régler rapidement avec, on me dit :  je n’ai pas réussi à le configurer. Il suffit de faire une recherche Google.


  Il y en a qui disent :  je n’ai jamais compris comment l’utiliser.


  Si vous êtes sur du docker, du WSL, sur un serveur remote entre autres, c’est possible, mais la configuration ne sera pas la même. Ça peut être compliqué rien qu’à voir le nombre d’articles qui pullulent sur le sujet.


  Ce n’est pas de cela dont on va parler aujourd’hui.


  Aujourd’hui, on va se concentrer sur l’utilisation. On va montrer le résultat, le chemin parcouru.


  Grosso modo, il y a 4 gros avantages. La première fonctionnalité, c’est les breakpoints. Une fois qu’on a fait ça, on peut observer l’exécution de son code, les différentes variables à disposition.


  On peut aussi remonter avec une stacktrace. On ne peut pas retourner en arrière, mais avoir accès au stacktrace.


  On verra ça tout à l’heure.


  On a également la partie moins connue, car il y a plus d’alternatives, on peut faire du profiling, et voir la méthode qui a utilisé le plus de Ram par exemple.


  Depuis tout à l’heure, je parle de Xdebug comme la solution miracle. Est-ce le cas ?  Non. Il faut être pragmatique.


  Ce n’est pas toujours le cas, un Dump and I peut être la solution.


  On a un gain de temps énorme lors de la prise en main d’un nouveau framework.


  Je peux observer ce qui se passe dans le framework. La recette http est reçue, on voit comment se passe le rooting, l’injection des dépendances. Ça me permet une visite guidée dans mon IDE, de l’exécution du framework.


  On peut caler des breakpoints et remonter, voir comment c’est exécuté, et voir si on arrive sur un pré-process. Je regarde ce que j’ai à disposition. J’ai quelque chose d’assez dynamique. Plus on va connaître son framework, plus le code s’autodocumente, moins Xdebug devient utile. Quand on arrive sur des codes legacy, très complexes, avec un gros héritage, on peut se retrouver avec des méthodes de plusieurs lignes.


  Parfois, on ne comprend pas pourquoi le rendu est ainsi, Xdebug peut aider à comprendre ça.


  Les dump and I peuvent suffire, mais ce sera plus long.


  Comment fonctionne Xdebug? On peut le faire par ligne de commande, pour les puristes.


  On a plusieurs commandes.


  On va voir l’utilisation basique de Xdebug, et ensuite les utilisations plus avancées. Je vais essayer de montrer tout l’intérêt qu’on peut avoir avec cet outil, dans l’apprentissage de la compréhension globale de notre projet.


  Le mode présentation est un peu compliqué, on ne va pas forcément avoir les modes débug. 


  Ici, on a un besoin, on va faire un script, j’ai une variable qui est un arrêt, qui prend en compte 4 valeurs, 4 strings, des prénoms d’éléphant.


  On a une fonction ici, pas très lisible, qui fait appel à Array map et    Array Filter. Ce dernier va prendre une dernière closure. A la fin, on aura les noms d’éléphant en majuscules, et on ne gardera que ceux qui ont la lettre M.


  Ici, on a le tableau qui apparaît. On a à disposition l’état des variables telles qu’elles sont présentes à l’instant T. Ici, on n’a rien du tout, si ce n’est les variables super globales. Ce n’est pas un réflexe qu’on a, mais on se dit :  je vais observer ce que j’ai, et peut-être mieux comprendre mon script.

   Les boutons mis à disposition, on les a ici. Le bouton stop, qui stoppe le script. Le bouton resume etc.

  Là, je suis sur la définition de ma variable éléphant.


  Si je fais un Step Over, je vais aller à l’étape suivante directement.


  Ça nous intéresse d’entrer dans cette fonction.


  Plusieurs choses se mettent… On peut voir qu’on va pouvoir évoluer. Name, ici, vaut Babar. J’ai ici l’évaluation des variables.


  L’objectif est de montrer que le Vardump* n’est pas aussi aisé.


  Sur les 800 valeurs du tableau…


  Ici, pour un debug manuel, je reprends l’Array, je le modifie, je garde Elmer.


  On vient de modifier la structure de notre code. Ce n’est pas ce qu’on veut. On veut résoudre l’exécution de ce code sans avoir modifié le code. Xdebug propose des breakpoints conditionnels.


  C’est si mon name vaut Elmer.


  On voit que le script s’est arrêté.


  Ici, j’ai le STR qui va faire un return.


  Je n’aurais pas le retour du STR.


  Avec un Vardump, on va se dire :  je vais attribuer ça dans une variable, et je fais le breakpoint sur la ligne 16.


  Xdebug propose le return breakpoint avec le Step Into. On voit ici que j’ai le retour des fonctions natives qui s’affichent. Je vois le retour de ma fonction, on est passé à l’étape suivante, l’éléphant PHP.


  Notre fonction filter Elephants, on pourrait l’écrire en une seule ligne.


  On utilise des closure entre autres.


  Si je vais mettre des Vardump, je dois modifier mon code, tout découper. On modifie l’exécution, c’est normal, on est des humains.


  En faisant comme ça, je vais pouvoir voir l’évolution des variables. Babar devient Babar majuscule, Dumbo aussi, jusqu’à arriver au STR Content qui nous renvoie des False, etc.


  On va attaquer maintenant sur un Drupal. On a un petit Drupal ici, tout ce qui est de plus classique. On est sur une install. On a un plugin ici. Les articles, c’est des Nodes. Pas de surprise.


  Ici, on a une page gérée par un contrôleur.


  On peut voir qu’on a un souci sur notre plugin. J’avais 3 articles, et là, je n’en ai plus qu’un seul.


  Le code custom qui génère tout ça, il est ici. On a un repository. On a une class abstrait qui présente un constructeur, et ensuite, elle permet de sensitytype. A priori, je veux passer une entity pour Node et récupérer le storage correspondant.




  Rien de bien compliqué. On récupère les trois derniers nodes, les termes, on les envoie sur un template ici.


  Rien de compliqué ici.


  Markup… Ici, c’est le plus simple. On a le build ici, on récupère les nodes, on envoie via un sprint.


  Là, a priori, le code est assez simple, je ne vois pas d’où vient le problème.


  Première chose qu’on peut se dire :  c’est peut-être un problème de templating. Qu’est-ce qui me dit que la variable Count vaut bien 1 ? 

   Là, je suis bien à Count. Je vois que Count vaut 1. Il y a bien un souci au niveau de mon repository.

  Ce que j’aime bien faire, c’est aller au plus bas niveau possible. Je veux savoir ce qui se passe au niveau de ma requête SQL.


  Je peux aller sur ma classe Select, du driver Post Grey*. C’est la fonction execute. Cette classe implémente Screenable.


  Ici, je peux faire une watch. En cliquant ici, Xdebug va garder le résultat de cette expression. Ça permet de visualiser l’évolution d’une expression au fur et à mesure de l’évolution du contexte de mon code.


  Typiquement, je suis sur un enchaînement de requête SQL. Il y a beaucoup de choses faites sur la base de données.


  Ici, sur ma page, je ne sais pas combien de requêtes SQL vont être jouées. Si je commence à faire des resolve, on repère à nouveau l’intérêt de l’outil.


  On veut être le plus sûr possible de ce qui se passe.


  Il y a une autre fonctionnalité intéressante. Je vais caler un nouveau breakpoint. Je veux voir la requête    SQL lorsque l’appel à la méthode build est fait.


  J’annule le breakpoint. Je retourne dans mon Ide. On doit basculer entre le navigateur et l’IDE, on a encore beaucoup trop d’actions manuelles.


  On va s’intéresser aux fonctionnalités évoluées.


  On peut ajouter une petite description sur les breakpoints. Dans des classes avec des méthodes avec beaucoup de lignes, il y aura juste le nom de classe avec le numéro de ligne. Ça peut être intéressant d’ajouter une description rapide.


  A droite, j’ai la condition, qu’on a vue tout à l’heure. On pourrait l’utiliser, mais on ne connaît pas ce qu’on va avoir dans la requête SQL.


  Je vais avoir une ligne Log avec par exemple des logs en sortie, et je peux lui demander de logger des choses plus précises.


  Il va m’imprimer la stacktrace en cours, ou le résultat d’une expression.


  A la fin, ce qui est intéressant, ce breakpoint dans le Select, on peut dire qu’on veut qu’il soit désélectionné jusqu’à ce qu’il soit atteint.


  Ensuite, je peux voir ce que je veux. Est-ce que je veux le laisser activé ?  J’ai le choix.


  On ne veut rien faire de manuel à l’extrême. Mon code va s’arrêter sur le site Information Block.

   Ce que je veux, c’est que ce breakpoint soit conditionnel qui n’est que là pour permettre à un autre de s’exécuter et de se résoudre au bon moment.

  On valide cette configuration.


  On y retourne.


  Là, je vois que j’ai ma requête SQL qui s’affiche. Je fais confiance à mon Count, à mon IDE. Je fais un Select Count. Par contre, là, c’est le from qui m’inquiète un peu plus. On fait un from sur les termes de taxonomie.


  D’où vient ce 1 ?  Il fait un Count sur les termes de taxonomie.


  Maintenant, on va essayer de comprendre pourquoi cette requête est faite sur la table des termes de taxonomie et non pas des Nodes.

   Pour ça, on va reprendre le code. Dans Repository, dans mon constructeur, j’ai bien un objet créé, qui va être appelé directement. Je ne devrais pas avoir de souci.

  Là, je reprends, j’ai mon contrôleur ici. Première fois qu’on passe par Repository, c’est par le contrôleur. Ensuite, on passe par une classe, le Container. On découvre un peu la chose, un framework. Le container, je ne lui ai pas demandé d’agir. Que fait-il ? 


  J’ai une fonction Get. A droite, j’ai accès à toutes les variables telles qu’elles étaient assignées au moment de l’exécution précédente. Je vois que j’ai un ID.


  A priori, Repository Information, c’est le nom de mon service.


  On va copier la valeur. Je vais voir tout ce qui se passe à chaque fois que je passe par ça.


  On relance tout ça.


  Ici, celui-ci, on le retire. Execute aussi.


  A priori, mon Container n’a pas été appelé. Il manque des quotes. Et on relance. Cette fois-ci, on y va bien.


  Maintenant, je vais me servir de Xdebug pour voir ce qui se passe dans cette méthode que je ne connais pas.


  On avance. On passe.


  On continue. Il y a une définition.


  On continue. A priori, on n’entre pas dans ces fonctions.


  Je vois qu’ici, j’ai mien bon service = new class.


  Si on continue, logiquement, on est passé à nouveau dans la méthode Get Count avec mon entité.


  Je retourne dans la fonction Get, je repasse toujours avec mon service Afup…


  Cette fois-ci, je vois que le comportement a changé.


  Pour ceux qui étaient à la conférence de ce matin sur la compilation du Contener, ici, grâce à Xdebug, on va voir ce qui se passe.


  Niveau documentation, on est sur quelque chose de génial. Là, je peux voir les instances, comment elles sont définies, ce qu’elles contiennent.


  Ici, potentiellement, on se rend compte que notre souci vient peut-être de ça.


  L’ID existe.


  Le EntityType, c’était Toxonomy Term, ce qui est logique.


  On avait une méthode ici qui changeait l’Entity Type. A aucun moment, je ne suis repassé par le constructeur, à aucun moment mon set a été placé à Node.


  Je ne repasserai jamais par l’EntityType à Node.


  Ce sera sur le storage des Taxonomy terms.


  On peut se dire que, dans chaque méthode, plutôt que faire un repository…


  Il y a plusieurs solutions possibles. En faisant comme ça, j’ai appris un fonctionnement sur le Contener, sur le Run Time. En faisant ça, j’aurais pu régler le problème avec des Vardump, j’aurais perdu en rapidité et une occasion d’apprendre sur ce Contener et comment il évolue.

   On a résolu le bug. Magnifique. On peut être fier de nous.

  Maintenant, je vais vous montrer quelque chose. Xdebug n’est pas utile que pour résoudre des bugs. C’est intéressant de voir ce qu’on a à notre disposition.


  On va appeler ça XDD.


  Voilà. Typiquement, les premiers réflexes que j’ai eus, j’avais ma variable, je faisais un var dump. Là, j’ai une interface    graphique qui me permet de rentrer dans tout ce que j’ai dans ce tableau. Je peux même commencer à bosser avec mon API. Ma variable    node, c’est un node. Ici je peux taper des fonctions, je peux utiliser mon API.


  Plutôt que de bosser à l’aveugle, on a ici un guide qui nous permet de gagner en efficacité. Une fois qu’on sait tout ce qui se passe dans cette variable Xdebug devient moins utile. Il rajoute un over head, il rajoute en lenteur. Il y a plusieurs façons de contrer à ça. Maintenant avec Docker c’est simple. C’est quand même quelque chose à garder en tête. Pour finir je vais juste vous montrer la partie profiling dans Xdebug, je vais vous la partager. Je le retrouve…


  Le voilà. 


  Donc il y a plusieurs outils qui permettent de faire ce profiling avec plus ou moins d’éléments de détails. Ici, je vais avoir plusieurs choses à ma disposition, le temps d’exécution et la mémoire consommée. J’ai tout ça qui me permet de voir les méthodes et les fonctions qui ont été appelées. Par exemple qu’est-ce qui a consommé le plus de ram  ?  C’est le externalise de PHP qui l’a fait. 


  J’ai aussi l’auto-load    ici qui prend 30 % du temps de l’exécution. On peut réfléchir à des pistes d’amélioration de la perf’ grâce à ça. On va gagner beaucoup en termes de performance. Ça permet de considérer Xdebug comme un allié. Il faut passer cette étape de configuration qui n’est pas toujours simple. 


  Il y a eu pas mal de travail sur ce point. Ils font de gros efforts là-dessus. S’il y en a qui ont gardé un traumatisme avec Xdebug il y a quelques années, ça s’améliore. J’espère vous avoir    montré que le jeu en vaut la chandelle. Merci à vous. 


  \- des questions ? 


  \- C’était hyper clair en fait. 


  \- Merci. Une petite question rapide, je fais partie des traumatisés par Xdebug avec docker. Ça donne envie de s’y remettre. Ça marche vraiment avec une stack    docker et compagnie ? 


  \- Ce projet est là-dessus. Sur celle-ci on prend un docker file, un PHP. On récupère sont container. 


  Il y a une configuration Xdebug qui peut passer par des système    de cookies. Après, avec la méthode docker PHP, tu installes et désinstalles l’extension    comme tu veux. 


  Vraiment, ça marche. Tu vois, ça marche bien.


  \- Pour info, Ddev l’installe super bien de manière automatique.


  \- Franchement, il y a de plus en plus de choses qui permettent de l’installer correctement. Il ne faut pas hésiter dès lors que le besoin est là.


  \- Bonjour. De mémoire, il y avait step into, step in et le troisième ? 


  \- C’était step out. Tu sors, tu remontes au-dessus.


  \- Ça sort de la fonction ? 


  \- Ça sort de la fonction. Il n’y a pas de retour en arrière possible.


  \- Merci.


  \- D’autres questions ?  On a le temps. Merci.


  \- Si vous avez des questions qui vous viennent après, n’hésitez pas. Merci beaucoup.
type: conference
---
