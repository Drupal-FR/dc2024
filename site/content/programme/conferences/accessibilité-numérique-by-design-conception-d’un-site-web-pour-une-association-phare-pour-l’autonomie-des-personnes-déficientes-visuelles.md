---
title: "Accessibilité numérique by design : conception d’un site web pour une
  association phare pour l’autonomie des personnes déficientes visuelles"
draft: false
session_id: "#33"
slug: 33-accessibilite-par-design
duration: 40 min
audience: Découverte
themes: Accessibilité, méthodologie
speakers: "Aliénor Fernandez & Francis Lemaitre accompagnés de Émilie Mansour &
  Anthony Naudin "
companies: Axess et numerik-ea
teaser: "Réorganiser une méthodologie de conception web pour l'axer sur
  l’accessibilité ? On l'a fait pour une association de soutien aux déficients
  visuels : on vous partage notre expérience et nos outils !"
prerequisites: |-
  Familiarité avec :

  * Conception UX/UI 
  * HTML/CSS
plan: |-
  1. Présentation des acteurs et du cas client.
  2. Fondamentaux de l'accessibilité numérique.
  3. La méthodologie du projet.
  4. La gestion des ateliers de co-conception axée accessibilité.
  5. Le suivi de la recette et du développement 
  6. Conclusion sur les réussites et limites.
takeway: >-
  Comment essayer de mieux prendre en compte les enjeux de l’accessibilité
  numérique et d’en appliquer les bonnes pratiques dès la phase amont des
  projets de refonte ou de création de site web.


  Partage de ressources utiles (sites de référence, composants techniques, exemples) pour vos futurs projets de site web accessibles.
slides_files: slides/accessibilité-by-design-dcrennes24.pdf
video: rEUTGOR0lJY
transcription: >-
  \- Bonjour, bonjour à tous. Ça marche bien, on m’entend bien, parfait.
  Bienvenue pour cette troisième conférence de la matinée, présentée par Emilie
  Mansour, Anthony Naudin, consultant en accessibilité numérique chez
  numerik-ea. Avec Aliénor Fernandez et Francis Lemaitre.


  Déjà on va vous rappeler le sujet, on a un titre qui n’est pas le plus simple du monde. Je ne sais pas si c’était assez clair. On va parler d’accessibilité numérique, c’est super intéressant. On va vous présenter le contexte du projet, vous rappeler les fondamentaux de l’accessibilité numérique, vous présenter la méthodologie de notre projet et vous présenter comment on a axé cette conception sur l’accessibilité. On vous donnera aussi les limites et les réussites de ce projet. On aura aussi peut-être une phase de questions réponses.


  \- C’est à moi. Bonjour à tous. Je vais vous parler rapidement de numerik-ea, c’est la première entreprise adaptée, agence web spécialisée en accessibilité numérique. On est 20 collaborateurs, on a 90 % de nos collaborateurs en situation de handicap. Le but qu’on a c’est de permettre le retour à l’emploi de ces personnes en situation de handicap dans des milieux ordinaires. Depuis 2021, on forme tous les ans des personnes en situation de handicap au métier d’auditeur en accessibilité. 


  \- Et donc Axess, il y a déjà eu une grande présentation ce matin, c’est trois grands pôles. On est basés à Valences, Lyon et Paris. On est impliqués avec Drupal. 

   Pour la petite équipe de Web Service, on va accompagner les clients tout au long du projet. Avec la phase amont, la phase de développement et la phase de TMA, l’hébergement. C’est plus de 190 projets Drupal, c’est une équipe de collaborateurs extraordinaires. Ce sont des équipes passionnées. Le projet dont on va vous parler c’est un projet de refonte pour l’association Valentin Haüy qui agit pour l’autonomie des personnes aveugles et malvoyantes. Elle propose des services complets, des établissements médico-sociaux, avec du travail adapté, et pour des implantations plus locales, de l’accès à la culture, au sport, de l’accès à l’utilisation des matériels numériques adaptés. Il y a 11 000 bénéficiaires. Le but était de faire un site accessible. Le respect des critères du RGAA, et que ça soit facile à utiliser avec la navigation clavier. On avait un collaborateur côté AVH qui est aveugle, qui contribue au site. C’était important pour lui que le projet soit le plus accessible possible. Le but était de retravailler le fond et la forme. 

  \- Maintenant je vais vous parler un peu de l’accessibilité numérique, peut-être que certains ont déjà entendu ce mot, mais vous ne savez peut-être pas ce que c’est. 


  L’accessibilité numérique, c’est permettre aux personnes en situation de handicap de pouvoir naviguer, contribuer, interagir sur le web comme n’importe quelle autre personne.    Il existe différents types de handicaps, des handicaps visuels, cognitifs, moteurs, physiques. On a aussi d’autres types de handicaps, par exemple les personnes âgées qui peuvent avoir besoin de certains aménagements pour consulter des sites Internet. On a aussi parfois des handicaps temporaires, par exemple vous vous cassez un bras, vous êtes droitier, vous allez devoir naviguer autrement. Il y a aussi différents types d’usages. On a des personnes qui ont besoin de lecteurs d’écran par exemple. On a aussi des personnes qui vont avoir besoin d’outils physiques comme des tablettes braille, on peut avoir besoin de se déplacer avec des contacteurs. Il y a plein d’usages différents. Je vous propose de regarder un cas d’usage d’une personne déficiente visuelle qui souhaite faire une formalité sur Internet, vous allez voir que quand les sites ne sont pas accessibles, c’est très difficile pour eux de pouvoir aller au bout des processus. 


  (vidéo)




  \- Voilà, c’était un tout petit exemple. Ça vous montre un cas d’usage, ça vous expose que quand un site n’est pas accessible, on prive un grand nombre de personnes de pouvoir aller au bout de certains processus très simples.


  Donc l’accessibilité numérique, c’est normé. Il existe une directive qui est le WCAG, c’est web content accessibility guidelines. Il y a trois niveaux d’exigence. On nous recommande d’utiliser la norme double A. 


  Par exemple en France, le référentiel, c’est le RGAA. Ce référentiel est composé d’une méthodologie de test avec 106 critères à tester, ça permet de dire si les sites Internet sont accessibles ou non. Il y a également 4 principes fondamentaux en accessibilité numérique :  votre site doit être perceptible. Un site Internet, tout d’abord, tous les composants, les fonctionnalités, les informations sont accessibles pour n’importe quelle personne, indépendamment du handicap ou de l’outil utilisé. Ensuite, un site doit être utilisable. Le principe, c’est que la navigation au sein de l’interface soit accessible à tous.    Il y a des personnes qui n’utilisent pas de souris, il faut que le contenu soit accessible avec une utilisation au clavier exclusivement. Ensuite, il faut qu’un site soit compréhensible pour tous, de manière universelle. Il est important d’expliciter les sigles, les abréviations, pour les formulaires aussi, c’est important de donner le format de données attendus comme JJ, MM AAAA. Il faut être explicite. Le dernier principe, c’est que votre site doit être robuste. Qu’est-ce que ça veut dire ?  Il faut qu’il soit capable de parer aux évolutions technologiques qu’il peut y avoir par rapport aux outils utilisés par les personnes en situation de handicap. Il faut que le site soit facilement mis à jour. 


  \- Bonjour à tous. Je vais maintenant vous présenter l’approche que nous avons eue pour mener à bien ce projet. Donc tout d’abord, en termes d’objectif, il faut bien noter que pour l’association Valentin Haüy , l’accessibilité numérique est l’enjeu majeur du projet. D’ailleurs leur objectif à terme est d’atteindre un taux de conformité au RGAA de 100 %. Nous nous sommes engagés sur un taux de conformité de 90 % dès la sortie du site. On parle d’accessibilité du front et du back office aussi car certains contributeurs sont malvoyants. Enfin, une personne aveugle fait partie du COPIL, donc ça    nécessitait aussi de notre côté d’adapter certaines méthodologies de notre projet. Je vais vous expliquer les réponses qu’on a essayé d’apporter. 


  Donc tout d’abord en termes d’organisation projet, Numerik-ea est un membre à part entière de l’organisation du projet. Il participe à tous les COPIL et les Coproj.    Ça permet de sensibiliser tous les acteurs du projet aux règles du RGAA, ça permet de bien coordonner les revues d’accessibilité à mener avec les autres tâches du projet. Nous avons essayé de rendre accessible autant que possible la documentation du projet. Par exemple les supports de COPIL étaient envoyés la veille en format PowerPoint pour que la personne aveugle puisse les consulter avec son lecteur d’écran car elle ne peut pas voir ce qu’on projette pendant les visios. Pour cela, l’association nous a donné une formation pour qu’on apprenne à rendre accessible notre documentation. Je voulais vous donner une petite astuce, dans Microsoft office, il y a un outil de vérification de l’accessibilité dans documents, il suffit de suivre les indications. Ça améliore nettement l’accessibilité du document. C’est une bonne habitude à prendre. 


  Le maître mot du projet c’est l’accessibilité by design. Ça veut dire que chaque livrable doit être validé par numerik-ea à chaque étape du projet. Pour cela, on a mis en place des revues d’accessibilité à chaque étape du projet. En phase de conception toutes les maquettes et wireframes ont été revues par numerik-ea. Ensuite, on a sélectionné 4 wireframes développés en HTML et CSS, ça a permis de former des développeurs front à l’accessibilité en amont du projet. Ensuite, ce travail a servi de modèle lorsqu’il a fallu attaquer l’intégration du site. En phase de conception technique, les composants nous étaient soumis pour vérifier leur conformité au RGAA. Nous avons participé à la rédaction des spécificités fonctionnelles et techniques. Chaque développement front doit être validé par numerik-ea avant d’être soumis au client. Je vous ai mis une estimation de la charge de ces revues d’accessibilité par rapport à la charge totale des étapes. Ces chiffres peuvent varier d’un projet à l’autre en fonction de la maturité des équipes sur l’accessibilité. Pour l’accessibilité du backoffice, nous avons eu une approche différente. Nous avons choisi d’installer le thème Claro de Drupal, c’est le thème par défaut. L’accessibilité numérique fait partie de son cahier des charges, il est conforme à la version 2.1 du WCAG. Nous avons fait faire une revue du back office par une personne aveugle et appliqué des correctifs. Par exemple nous avons modifié le mark up des paragraphes pour qu’ils comportent des headers pour remonter dans les sommaires lus par les lecteurs d’écran. Nous avons essayé de simplifier le parcours de navigation et nous avons implémenté le langage mark down qui permet de lire un texte au clavier. 


  Ça permet d’intégrer du texte formaté. Je vous ai donné un petit exemple de cette syntaxe. Par exemple pour mettre un texte en italique, on le met entre des under score. Etc.


  \- Pour que vous puissiez comprendre, comment on a axé cette conception sur l’accessibilité, on a travaillé en coconception. C’est très important, ça permet d’avoir et l’expertise métier côté client et l’expertise UX UI de notre côté. Ça permet d’avancer en plusieurs ateliers pour avoir le site qu’attendent les utilisateurs et nos clients. En premier, on réalise les personae qui sont toujours très importants dans les projets. Particulièrement dans ce projet, on a défini des attentes de personnes qui sont déficientes visuelles, on les connaît assez peu. Ils ont des usages spécifiques notamment avec l’utilisation des outils numériques adaptés. On propose des contenus en accès rapide sur toutes les pages et on annonce le contenu de la page pour permettre aux utilisateurs de ne pas devoir lire toute la page. 


  Quelques exemples très concrets, on a particulièrement travaillé les liens d’évitement dont Anthony va reparler, qui permettent d’aller directement à des sections de la page. On a ajouté des sommaires dans la majorité des pages. Ça permet de comprendre le menu de la page et d’accéder à des rubriques.    Il n’y a pas de carrousel, c’est très compliqué à utiliser avec le clavier. C’est assez rare dans la réalité.    Enfin, pour les vidéos, on a rendu obligatoire la transcription. 

   Ensuite, du côté de l’UI, on fait attention aux ratios, c’est quelque chose qu’on commence à systématiser. En gros, le ratio, le contraste qu’on va regarder c’est entre la couleur de fond et la couleur du texte. Le but est de permettre une lecture facile. On le voit, le orange pâle, il est difficile à lire pour tout le monde, ça ne respecte par les critères du RGAA. Par rapport à ça, exemple concret, on avait une charte avec un violet qui ne posait pas de souci mais on avait un orange qui n’était pas évident, on ne pouvait pas l’utiliser avec du blanc. On a dû travailler avec le client pour leur faire comprendre que c’était essentiel d’avoir une charte optimisée. On leur a fait changer le orange, il est un peu modifié. Ils sont en train de refondre leur charte graphique pour avoir des couleurs optimisées. On leur a créé un violet très foncé. On utilise des outils qui permettent de vérifier tout au long de la conception. On a mis en place un menu en cascade qui permet de lire les sous-menus plutôt qu’un long menu. 

   On a décidé de le faire au clic et non au survol. Ça prend un peu plus de temps, en UI, on dit toujours qu’il faut le moins de clics possibles mais le survol, au clavier, c’est compliqué. 

  On a fait ce choix. Et enfin, petits conseils, il y a des grilles de contraste qui existent qui sont intéressantes pour avoir une vision globale de la charte graphique, ça permet de savoir si elle est optimisée ou pas. Vous entrez vos couleurs, ça vous donne des idées possibles.

   Ensuite, on a une font luciole qui a été créée pour les malvoyants. Et il y a la Atkinson hyperlegible développée aux Etats-Unis qui est intéressante aussi.    Un collectif a présenté une conférence sur un kit wireframe qui permet d’intégrer des spécifications sur l’accessibilité.

  \- Bonjour à tous. Pourquoi créer un wireframe en HTML ?  Un collaborateur de AVH est aveugle et il ne peut pas suivre le projet. Je vais vous donner des exemples d’éléments non accessibles sur les sites en général. Il faut une bonne structure de page.    Pour le haut de page, il faut une balise Header pour le menu il faut une balise Nav. Pour le contenu, il faut une balise Main et pour le bas de page, il faut une balise Footer. C’est très important pour que les utilisateurs qui utilisent le lecteur d’écran puissent identifier ces éléments. C’est très important pour eux. Pour la hiérarchie des titres, par exemple un titre h2 et les sous-titres en h3. 


  Si c’est l’inverse, ça devient des niveaux de titre incohérents et la personne en déficience visuelle est perdue, elle ne comprend pas. Là, ce sont les liens et boutons en général. Les liens ça redirige sur une nouvelle page, un nouvel URL. Et les boutons, c’est un événement qui est déclenché, par exemple on va ouvrir ou fermer un dépliant sur la même page. 


  Du coup, pour les liens, il faut leur ajouter une balise AHF et avoir un bon intitulé explicite, c’est important. 


  Pour les boutons, il faut aussi avoir un bon rôle, un bouton type bouton et un bon intitulé. Il faut aussi une bonne valeur Aria, ça améliore l’accessibilité, ça donne une information supplémentaire pour les lecteurs d’écran, et c’est un code spécifique. Par exemple un Aria expendit true ou false, true quand le dépliant est ouvert et false quand il est fermé. Ça va vocaliser le fait que c’est ouvert ou fermé.


  Quand on navigue au clavier et qu’on voit le bouton  :  Aller au contenu principal. Il faut que le focus clavier se déplace sur le contenu de la page. C’est encadré en rouge ici. 


  \- Ce que je vous propose maintenant c’est de faire une petite revue des études que nous avons menées dans le choix de composants techniques. Je ne prétends pas que ce benchmark soit exhaustif, il y a certainement des solutions qui nous ont échappé mais il y a des informations intéressantes. Ce sont des questions qu’on se pose régulièrement quand on veut mettre en oeuvre un site accessible. Pour les gestionnaires de cookies, notre choix s’est porté sur Orejime. Je ne peux pas vous faire un retour d’expérience précis dessus mais sur le papier il coche toutes les cases, il est accessible, gratuit opensource et français. 


  Tarteaucitron qui est souvent utilisé n’est pas accessible par défaut. Ça demande beaucoup de développement custom. Notre choix s’est porté sur Honeypot. Comme autre option, il y a hCaptcha qui nécessite de recevoir un code de vérification par mail, ça nécessite des manipulations qui ne sont pas simples pour les personnes en situation de handicap. C’est pourquoi l’association Valentin Haüy n’a pas souhaité l’implémenter. Il y a aussi Friendly Captcha mais qui est payante. Il y a aussi Clean Talk, Google Captcha mais que nous n’avons pas retenus pour des questions de non-conformité à la RGAA. Concernant les players multimédias, le player 100 % accessible, c’est HTML5. Cependant, il peut nécessiter de mettre en place une infrastructure plus ou moins lourde derrière. 


  Pour sa part, l’association a choisi de conserver sa chaîne YouTube pour des raisons de communication.    YouTube n’est pas 100 % accessible mais reste utilisable pour les déficients visuels. C’est pourquoi l’association a préféré conserver cette solution mais qui ne passe pas l’audit de conformité.

   Quand on met une carte sur un site, il faut proposer une alternative sous forme de liste. 

  On a aussi des dossiers Microsoft Forms qui ne sont pas accessibles non plus. On a fait une voie de contournement. Pour exclure ces composants, on ne les a pas mis dans Daisy Frame. On a fait des liens externes à la place. Ça permet de respecter la législation. 


  \- Recette et développement, la rédaction des spécifications, Aliénor s’occupe des spécifications fonctionnelles. 


  Il y a mon livrable, il y a trois choses importantes dans le sommaire, les recommandations globales, ce sont des éléments qui doivent être accessibles sur tous les sites Internet. Il y a les recommandations par composant. J’ai analysé les maquettes d’AVH en reprenant tous les composants complexes, je les ai ajoutés et donné mes recommandations. Et il y a les recommandations en ce qui concerne les éléments par exemple les citations, les titres, les listes non ordonnées. Ici, c’est le support d’Axess. On voit un exemple avec un tableau avec les champs titre et au-dessus, il y a des titres et il y a le contenu avec le paragraphe en dessous et les images en dessous du paragraphe. 


  La dernière colonne, j’ai donné les références de mon support pour que les développeurs puissent voir mes recommandations. Par exemple le 5,9 pour une image décorative, quand l’image ne donne aucune information, il ne faut pas ajouter d’alternative. Et par exemple pour une image avec du texte intérieur, il faut ajouter une alternative qui reprend le texte de l’image. 


  Alors, comment nous procédons sur la recette de la revue d’accessibilité ?  Nous utilisons Rain Mind pour la création des tickets. Le chef de projet crée le ticket des différents composants du site, le développeur les intègre en HTML. Puis il renvoie les tickets. Je vérifie et s’il y a des problèmes, je donne une solution supplémentaire au développeur. Si c’est fait, je valide le ticket et le client le clôture. 


  \- En conclusion, on a quand même rencontré quelques limites. La première, les premières grandes limites c’est sur la phase de conception qui est purement visuelle. Donc les wireframes côté design et les maquettes qui n’étaient pas accessibles, on a cherché des solutions du côté de plugins pour Figma mais on n’a rien trouvé de satisfaisant pour un utilisateur au clavier de pouvoir parcourir des maquettes. On n’a pas vraiment réussi. On a proposé une description textuelle mais qui n’a pas forcément été suffisamment claire. Décrire un site Internet, ça n’apportait rien pour la personne. Là-dessus, on n’a pas trouvé de solution. En revanche, tout ce qui était bien accessible, c’est la réponse d’appel d’offres et les wireframes en HTML. Il y a énormément de captures d’écran qu’on n’a pas pu décrire de manière textuelle, elles sont décrites de manière technique en dessous. Sur Rain Mind, l’outil n’est pas optimisé pour une utilisation au clavier. Mais on peut quand même lire le contenu d’un ticket.


  \- Si on devait lister les réussites, les réussites actuelles et espérées, tout d’abord c’est la montée en compétences de toutes les équipes sur l’accessibilité numérique, les développeurs front, les développeurs UX-UI, les chefs de projet et les contributeurs côté client. Ce sont les contributeurs du site qui seront les garants de l’accessibilité du site à long terme. Pour nous, on a emmagasiné tout un tas de bonnes pratiques.    On espère un taux de 90 % ou plus de conformité au RGAA à la sortie du site. C’est l’apport de l’accessibilité by design. Si on avait attendu la recette finale pour faire auditer les développements, la charge de développement aurait été bien plus importante. Un point important, c’est l’accessibilité du back office.    En général quand on prend l’accessibilité en enjeu sur un site, on se limite au front office. Et là le back office est accessible, c’est grâce au thème de Drupal. C’est une très bonne chose que Drupal nativement nous permette d’avoir un back office accessible. J’espère que ce site sera une belle vitrine pour numerik-ea et pour l’association Valentin Haüy.


  \- Un site accessible, ça améliore le référencement, une augmentation de l’audience, les personnes en situation de handicap pour accéder au site, il y a aussi une meilleure image de l’entreprise, une meilleure qualité de code.


  La présentation est finie, si vous avez des questions n’hésitez pas. Merci.


  \- Bonjour. On voit que les bâtiments doivent se rendre accessibles pour les personnes handicapées. Au niveau des sites aussi, où en est-on ? 


  \- Ce n’est pas la question la plus simple. En France, il y a une obligation légale de publier une déclaration sur les sites Internet. Cela vaut pour les entreprises publiques et les entreprises privées qui font un chiffre d’affaires de plus de 250 000€.


  Des entreprises ont été mandatées pour faire des contrôles. Les contrôles commencent, et les amendes vont commencer à tomber.


  Il y a un décret de mars de cette année qui a ajouté les entreprises qui vendent des produits et des services. Le périmètre n’a pas été défini, mais elles commencent à entrer dans le scope. Petit à petit, l’idée est que tous les sites devront être accessibles à terme, indépendamment du chiffre d’affaires.


  \- Bonjour. Vous avez parlé des cookies. Pourquoi avez-vous proposé à l’association de carrément ne pas avoir de cookies sur le site ? 


  Vous auriez pu complètement virer le gestionnaire de cookies.


  \- On ne l’a pas proposé car une de leur demandes était d’utiliser leur vidéo YouTube. Avec YouTube, on doit avoir le consentement des utilisateurs.


  \- Sur YouTube, il est possible d’avoir la vidéo et d’avoir une annonce dessus pour, si on clique dessus, autoriser YouTube à avoir les cookies.


  \- Vous m’apprenez quelque chose.


  Il faudrait regarder le test de conformité, d’acceptation du consentement, s’il est accessible. Du coup, on retombe un peu dans ces contraintes-là. C’est-à-dire que si le recueil du consentement n’est pas accessible, les personnes malvoyants ne pourraient pas voir la vidéo. Ce serait embêtant. D’autant plus qu’on a trouvé une solution plus simple et plus efficace pour répondre aux besoins.


  \- Bonjour. Une question opensource, vous parliez du thème Claro accessible nativement, et que vous aviez dû faire quelques modifications pour le rendre plus accessible. C’est quelque chose que vous avez poussé au niveau de la communauté Drupal pour améliorer l’accessibilité de ce thème ? 


  Une autre question qui va dans le même sens :  vous envisagez de faire un thème 100% accessible de votre côté, que vous pourriez faire partager à la communauté ? 


  \- Déjà, les actions qu’on a portées au thème Claro, c’est du confort, ce n’est pas pour le rendre conforme au RGAA. C’était vraiment des demandes spécifiques par rapport à l’usage concret qu’observaient les utilisateurs aveugles. Pour le moment, on est un peu dans le jus, on est en plein dans le projet. Le fait de soumettre ces développements, ça ne s’est pas posé à la communauté pour le moment. Mais on pourrait étudier la question, oui.


  \- Une petite information :  quand on dit que le thème Claro est accessible, c’est qu’il est conforme au RGAA. Mais il y a aussi de l’accessibilité. Et on peut aller plus loin que la simple conformité du RGAA. Souvent, des tests utilisateurs permettent d’ajouter des correctifs supplémentaires pour leur faciliter l’accès à Internet.


  \- Bonjour, et merci pour vos interventions. Dans ce projet, vous avez intégré des critères d’éco-conception ?  Ou c’est compliqué de travailler à la fois sur l’éco-conception et l’accessibilité ? 


  \- L’éco-conception, on y est toujours attentif dans une certaine mesure sur tous nos projets. Mais comme l’accessibilité sur nos autres projets. On a toujours un degré de vigilance sur un minimum de bonnes pratiques. Le tout est une question d’arbitrage.


  Là, la balance a été poussée vers l’accessibilité. Quand il a fallu choisir entre 2 options, c’est toujours l’accessibilité qui a pris le dessus. Comme dans d’autres projets, c’est l’éco-conception qui va prendre le dessus. C’est se poser les bons objectifs dès le début, savoir vers quoi on va faire nos choix. Pour ce projet-là, c’était clair.


  L’éco-conception, on l’a toujours en tête. On ne sait pas de choses incohérentes. On le déconseille à nos clients dès qu’on peut. Dans ce site, il n’y a rien d’étrange. Souvent, ça se nourrit, l’accessibilité et l’éco-conception, il y a plein de valeurs qui se retrouvent entre les deux. Dans ce site, il n’y a rien de choquant, mais ce n’était pas non plus notre préoccupation première, l’éco-conception.


  \- Sur les e-frame, le fait d’avoir une e-frame sur un site type Google Maps, sur lequel on n’a pas la main, et qui n’est pas accessible, ce n’est pas un cas de dérogation valide ? 


  \- On peut exempter, mais après, c’est le client qui a la main dessus.


  \- Si le client a fait le choix d’utiliser cette Google Maps, c’est lui qui fait délibérément le choix d’utiliser quelque chose qui n’est pas accessible. Donc il y a tout un discours sur l’exemption qui est difficile. Il faut prévoir une alternative accessible.


  \- A l’inverse, faire un lien vers Google Maps pour enlever l’e-frame, c’est aussi un choix ? 


  \- Oui, on est d’accord.


  Mais dans la norme, si on regarde au clair, ça fonctionne.


  \- Sur les tests utilisateur, vous en avez fait ?  Si oui, comment ? 


  Comment vous vous y prenez pour faire des tests utilisateur  ? 


  \- Pour les tests utilisateur, on travaille plutôt avec cette phase de maquette et les ateliers avec le client. Il y a eu 4 wireframes qui ont été testés pour la navigation clavier.


  \- Pour compléter, on a dû reproduire certains wireframes en pur html CSS, et le test a été fait par une personne aveugle.


  \- Bonjour. Vous visiez d’avoir un site à 90% accessible à la sortie, 100% plus tard. Envisagez-vous d’utiliser des dérogations pour y arriver ?  Que pensez-vous de ces dérogations ? 


  \- Je ne crois pas qu’il y ait eu de dérogation demandée.


  \- Pour le coup, pour les documents, on parle d’une partie qui est du côté des contributeurs. Du coup, c’est la responsabilité de l’association Valentin Haüy de produire des documents accessibles. Leur stratégie, c’est de revoir justement… Ils ont beaucoup de documents PDF sur leur site actuel. Je parle en leur nom, car ce n’est pas dans notre périmètre aussi, mais leur volonté, c’est de revoir tous ces documents pour les mettre en format Word accessible. C’est un travail qui va prendre du temps. C’est pourquoi on sait que le site n’atteindra pas un taux de conformité de 100% au départ. Mais s’ils font cet effort, ils pourront le viser à terme.


  En tout cas, leur stratégie, ce n’est pas de demander une dérogation, mais de revoir leur documentation pour la rendre accessible.


  \- Bonjour. Je voulais préciser que, pour le côté législatif, c’est que c’est à partir de fin juin 2025, c’est les entreprises de plus de 2 millions, et pas 250… Ça va vous faire du travail.


  \- On en a déjà beaucoup.


  \- Par rapport aux contributeurs, une fois qu’on a ait un site accessible, on laisse la main. Avez-vous mis des contraintes dans le back office ? 


  Comment ça se gère une fois que les contributeurs ont la main ? 


  \- Il y a plusieurs stratégies. Déjà, on a essayé, on a conseillé aux clients d’éviter de mettre des éléments qui puissent être non conformes. Par exemple, tout ce qui est vidéo, image etc., c’est contribué à l’aide de paragraphes. Donc c’est plus cadré.


  Ensuite, sur les formulaires, notamment sur les images, avec le client, on a mis des textes d’aide, d’indication, notamment sur les images. J’en profite, car c’est souvent une erreur que font beaucoup de contributeurs, de penser qu’il faut mettre une description à toutes les images. Non, c’est souvent sur les images qui sont informatives. Si une image n’a pas de texte, il ne faut pas mettre de description, sinon ça ne passe pas l’audit RGAA.


  On a expliqué ça dans le champ textuel.


  La balle est dans le camp du client qui prend conscience du besoin de former les contributeurs à l’accessibilité. Car la technologie ne peut pas tout faire.


  Justement pour que leur contribution respecte les règles du RGAA. D’autant plus pour Valentin Haüy car il doit y avoir autour de 100 contributeurs différents, car ils ont plein de comités, d’établissements éparpillés en France. Pour chacun des comités, un webmaster est désigné. Donc on augmente le risque qu’il y ait des contributions pas accessibles du fait de tout ce monde.


  \- Bonjour.


  Une remarque, plus qu’une question. Bravo pour le travail que vous avez fait.


  On a beaucoup parlé de l’accessibilité aux personnes malvoyants, mais l’accessibilité et le handicap, c’est beaucoup plus large.


  Ça fait écho à la formation des contributeurs. Il y a souvent le handicap cognitif qui n’est pas traité non plus.


  C’est hyper important d’inciter les contributeurs à formuler simplement, à utiliser du Facile à Lire et à Comprendre.


  \- Je suis totalement d’accord. Je suis dysorthographique. Donc avoir les bons espacements de texte, ça aide beaucoup.


  \- J’en remets une couche sur les images décoratives. On a eu le cas récemment de contributeurs qui mettent systématiquement quelque chose pour une image qui ne transmet pas d’information. Je ne sais pas si c’est votre cas. Quand on utilise la librairie media de Drupal, l’image peut être décorative dans un contexte, et informative dans un autre contexte. Comment vous gérez ça ? 


  On a carrément mis une check box :  cette image est décorative.


  \- Ça ne dépend pas du contexte, c’est ma compréhension. On n’a pas pris ça en considération. 


  \- Pour une image qui donne une information il n’y a pas forcément de texte. Par exemple si on a une icône date, il faut donner un texte en S R only pour dire que c’est bien la date. Et ça va être lu au lecteur d’écran, vocalisé mais ça ne va pas être… Visuellement, on ne le verra pas.


  \- En effet, en fonction du contexte, c’est un peu particulier quand même les images, même si on a aussi des images lien, ça peut complexifier encore. Ça peut venir du contexte. Avec toutes les maquettes et les images qu’on a pu voir, on ne s’est pas posé cette question, elle n’avait pas lieu d’être pour nous.


  \- L’exemple d’Anthony, on l’a sur le site. Mais ce sont des exemples très spécifiques. Là on peut imposer, on le sait tout de suite, par exemple on a un focus sur des chiffres-clés, on va mettre une alternative textuelle. On n’a pas eu besoin d’aller dans ce niveau de spécificité.


  \- Je crois qu’on doit arrêter. Merci à tous pour vos questions. 


  \- Merci. 


  \- Merci beaucoup ! 


  \- Merci beaucoup, pour le déjeuner, il y a un food truck qui est juste à l’extérieur. Bon appétit tout le monde !
type: conference
---
