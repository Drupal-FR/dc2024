---
title: Code Legacy, faut-il tout cramer pour repartir sur des bases saines ?
draft: false
session_id: "#14"
slug: 14-code-legacy
duration: 40 min
audience: Intermédiaire
themes: Maintenance
speakers: Clara Cassinat
companies: Conserto
teaser: >-
  Face aux difficultés posées par du code legacy : refondre ou maintenir ?


  Je partagerai avec vous le cheminement qui nous a amené à la refonte.


  Quels ont été les problèmes rencontrés et les arguments mis en avant pour convaincre notre client ?
prerequisites: Avoir déjà repris un site legacy ou avoir le projet de le faire,
  notion de dette technique, notion de biais cognitif
plan: >-
  Je vous présenterai ici brièvement la vie du projet hors de nos murs : Choix
  techniques étranges, mais probablement justifiés lors du dev du site. Puis des
  impacts de forte dette induite par ces choix et hypothèses.


  Se dressent ensuite deux pistes : maintenir ou refondre ? Avec quels critères de choix : (biais des coûts pour le legacy VS méthode Leodagan pour refondre le vieux projet).


  Je vous présenterai une méthode pour aider à la prise de décision rationnelle.


  Et pour conclure, nous parlerons des pièges évitables.
takeway: |-
  * Une prise de conscience des biais cognitifs qui influencent nos choix,
  * Une méthode pour simplifier la prise de décision,
  * Une liste de pièges à éviter,
  * Des arguments pour convaincre.
slides_files: slides/support-clara-drupal-camp-rennes-2024-public.pdf
video: WCheT6UKHn4
transcription: >-
  \- Bonjour à tous. Je pense qu’on va commencer. Je me présente, Clara
  Cassinat, je travaille chez Conserto en tant qu’ingé web, expert Drupal depuis
  10 ans. Je viens vous parler du legacy. Qu’est-ce que c’est ?  Qu’est-ce qu’on
  entend ?  Et qu’est-ce qu’on peut en faire ?  Il y a en général pas mal de
  petites pistes. 


  Déjà, le legacy, on en parle très souvent, ça va être du code qu’on va récupérer des autres. On entend souvent :  le code n’est pas super, on aurait pu faire mieux, pourquoi ça a été fait comme ça ? 


  Aujourd’hui, il y a des choix qui vont être discutables. On a mis des solutions de contournement, ça fait 3 ans qu’elles sont en place. Et surtout, comme on a du code qui a vieilli, on va voir que plein de développeurs sont intervenus sur le code. A chaque nouveau patch, on va rendre ce code qu’on ne juge déjà pas super aujourd’hui encore pire. Néanmoins, ça va quand même être du code, c’est un code hérité comme le dit le mot «  legacy ». Peut-être que sur le moment, d’un point de vue budget ou temps, on a fait au mieux. Juger après coup, ça peut être plus facile parfois. Mais il faut garder en tête qu’en général, peu importe le temps que je vais passer à produire mon code aujourd’hui, les équipes de demain diront aussi que mon code était    legacy, il n’est pas joli, les mêmes problématiques vont se poser. C’est un code qu’on hérite avec son histoire. On va reproduire la même chose. Donc peut-être moins juger le code qu’on a récupéré. On va avoir deux pistes, c’est ce qui va se passer quand on va re prendre du code. Soit je vais corriger, je vais investir du temps, de l’argent, des moyens dans ce projet. On ne va pas tout recommencer, j’ai déjà un super code, on met une rustine. Ou alors, on se dit :  je n’en ai pas que juste pour une rustine, c’est un enchaînement de rustines à ajouter. On va vouloir partir de zéro, avoir une nouvelle    toile sur laquelle réinventer le projet, revoir peut-être avec le client, peut-être que les besoins ont évolué. Et comment aujourd’hui on peut répondre à toutes ces nouvelles problématiques  ? Dans un premier temps, il faut identifier ce qui marche bien pour le conserver. Il faut identifier ce qui est à améliorer. Et surtout, on va décommissionner le code qui ne nous sert plus du tout. Quelle que soit la voie qu’on va choisir, il faut considérer le projet avec respect et comprendre le contexte dans lequel on se situait à ce moment-là. C’est un point de vue auquel on a été confronté avec un client. C’est un client qui a un gros site qui est utilisé par pas mal de visiteurs.    C’est un projet qui a été mené pendant plus de 4 ans hors de nos murs. Qui dit 4 ans dit son lot de tickets qui ont vécu leur vie. Il y a aujourd’hui une très forte dette technique. On parlait de 8 mois de dette technique à absorber. Un bon projet legacy comme on les aime. Pour accompagner au mieux le client, je parlais tout à l’heure d’inspecter ce qui s’était bien passé ou mal passé. Il faut voir si on peut mieux faire nos containers, est-ce que niveau accessibilité ou SEO on y est ou il y a de gros efforts à fournir. De notre côté, on a mis en place une grosse équipe. Comment ça se passe ?  On jette les tickets sur la table et le premier arrivé se sert. Comment on met en place une stratégie    pour répondre aux problématiques du client. 


  Un biais qu’on a tous, c’est le biais des coûts irrécupérables. C’est-à-dire qu’on a déjà investi beaucoup d’argent, beaucoup de temps, peut-on se permettre de mettre tout ça à la poubelle  ?  Quand on commence à réfléchir de temps passé sur un projet, c’est qu’on est déjà biaisé. Il faut le voir comme un nouveau projet qui va rentrer chez nous. On va être poussés à toujours investir plus de temps, plus d’énergie, continuer cette dette. On va potentiellement avoir un impact négatif sur les équipes. Pour contourner cela, on va faire une évaluation objective. On ne parle pas des coûts d’avant, je me base sur ce que j’ai et ce que je dois donner. Aujourd’hui, si je devais reprendre ce projet, comment je le ferais  ?  Quelles sont les possibilités qui s’offrent à moi ?  En général ça va ouvrir une discussion avec d’autres devs, on aura plein d’idées pour améliorer le fonctionnement, le code qu’on va produire et in fine avoir un nouveau produit qui sera codé différemment, imaginé et peut-être même implémenté différemment. Il faut garder une vision le plus long-termiste sur ce que je fais. Le code d’aujourd’hui, c’est le legacy de demain. Qu’est-ce que je mets en place pour limiter cet effet :  je récupère un code pas top ?  Eviter le code superflu. On a la chance de bosser en Drupal, autant s’appuyer sur ce que la communauté nous offre. 


  Est-ce que ça ne vaut pas le coup de s’appuyer sur ça plutôt que le refaire à la main ?  Dans tous les cas, sur les décisions qu’on va prendre, il faut à tout prix se détacher des coûts que vous avez déjà investis sur le projet. Il faut le voir comme une nouvelle    opportunité. On va pouvoir repartir de zéro, on est éclairés sur le chemin qu’on va prendre. On va peut-être mettre une rustine mais on va savoir pourquoi, où on la met. Il y a une citation que j’aime bien d’un ancien économiste du XIXe siècle qui nous dit :  (lecture à l’écran).

   J’ai essayé de retraduire au mieux. Je pense que l’idée est comprise. Si je reviens sur mon client. Je vous parlais de ma grosse dette à éponger. Le client avait de son côté des très fortes exigences sur le SEO, sur l’UX et sur l’écoconception. On a repris un code sur lequel on n’avait pas beaucoup de maîtrise, on peut se permettre de dire qu’il n’était pas super. Ce qui nous manquait c’était de la documentation, de l’historique, pourquoi on a mis en place cette solution  ?  Par exemple le client avait un problème avec des URL donc en fait, je vais patcher avec un petit bout de JS pour retirer les URL en doublon. Et un autre dev a fait la même chose. On a des problématiques qui font ping pong entre les deux. Sans savoir où corriger. On a des solutions redondantes, les fameuses rustines. Et plus rigolo, c’est le «  retirer » qu’on a eu sur l’inbound à un moment. Ils ne sont jamais repassés dessus. 

  Une méthode qui nous est tous passé par la tête, c’est de prendre le projet, le mettre à la poubelle et recommencer. Il y a une citation que j’aime bien de Leodagan, c’est :  tout cramer pour repartir sur des bases saines. Je me suis dit que les gens allaient connaître. Il est très pragmatique, il va avoir tendance à choisir des solutions très radicales et très directes. Il n’a pas le temps. Il faut que ça avance. Si on retranscrit cette vision sur un projet, on va partir avec une mentalité de table rase. 


  Mon client, il a un besoin, on a identifié ce qu’il voulait. Avec les années il a pu ajouter des features et en supprimer d’autres. 


  Ça a plusieurs avantages, néanmoins il y a quand même des choses sur lesquelles il faut faire attention. C’est super tentant de se dire :  je vais repartir de zéro. 


  Tout ce qui est problématique de :  mon legacy il est en PHP 7,4… On ne peut pas. Pareil, mon client il n’a plus les mêmes besoins qu’il y a 10 ans quand le code a été créé. On va avoir un nouveau socle plus moderne, évolutif. Néanmoins, c’est la partie qui nous freine un peu sur ça, il faut justifier à notre client que pendant 3 mois, 6 mois, un an il n’y a plus d’évolution,    et je vais coder la même chose, en mieux car on fait de belles lignes de code. Mais pour lui, ça ne change pas grand-chose, il va voir les mêmes boutons, la même page. 


  Il va se dire qu’il perd de l’argent. Un autre problème, on parlait d’héritage. Qui dit héritage dit des connaissances qui ont été gagnées, accumulées. Si j’écrase tout, c’est une grande partie des connaissances qui vont disparaître. Est-ce que ça vaut le coup de se dire que tout le travail d’avant il était nul ?  Peut-on se permettre d’avoir ce genre de discours sur le travail d’autrui ?  Moi je pense que non a priori. Et surtout pour les utilisateurs derrière, il y a un risque de perturbation. Peut-être qu’on va changer un peu le thème.    On a aussi bien pour les clients du site que pour les contributeurs une conduite au changement à faire. Pour faire en sorte que toutes les contributions ne soient pas perdues. Il y a une logique d’accompagnement du client et comment on veut mener le projet à terme ?  C’est vraiment le curseur entre les avantages et les considérations à prendre en compte qui vont faire en sorte qu’on va se permettre ou pas de tout cramer sur le projet. Peut-être que ce n’était pas si mal, on va faire évoluer certaines choses, porter ce qu’on peut porter. Et on verra si on est capable de mieux accompagner notre client. Nous aujourd’hui pour notre client, on se trouve juste entre les deux. C’est-à-dire qu’il faut réécrire beaucoup de choses. On a une grosse équipe.    On a beaucoup de code, beaucoup d’environnements, beaucoup de problèmes, on ne peut pas se permettre de dire :  ça va durer deux ans. On ne peut pas se permettre de ne plus rien faire d’autre que de coder le site pendant deux ans. Par contre, on peut le faire partie par partie. On a une quinzaine de features, elles sont toutes importantes et elles communiquent entre elles.    On peut en enlever    une d’un site et le remettre sur un autre. Je prends une feature sur l’ancien site, je la refais sur un nouveau socle de manière propre et je la migre sur le nouveau site. Petit à petit l’entièreté du site aura été migré et on continue de travailler pour le client. Rien ne nous empêche d’essayer de faire des tests, de mettre un bouton, apporter un peu de souplesse à un endroit. 


  Donc nous, c’est totalement comme ça qu’on est partis pour notre client. On avait une grosse équipe, on a une quinzaine de développeurs sur le sujet. Pour éviter l’effet d’avoir une équipe A et une équipe B, on fait des roulements. On n’a pas deux équipes, on a une seule grosse équipe qui vont travailler sur des sujets différents. Une fois que le sujet de l’équipe A est fini, on va passer sur de la maintenance. On limite le perte de connaissance en supprimant l’ancien site vers un nouveau. Surtout, on a un besoin fort de contextualiser ce pourquoi on travaille. Cela permet de répondre à ces deux problèmes, on ne perd pas de code et pas de dev. Je pense que ce n’est jamais cool de bosser pendant 3 ou 4 ans sur un projet dont on sait qu’il est mort. Une image qui marche bien pour le client, c’est que le magasin est en travaux mais on peut quand même venir faire ses courses.    On a vu deux grosses techniques, je refond, ou pas, ou entre les deux.    Comment on fait pour prendre la décision ?  Premièrement, on va devoir définir    quel est le problème. Comment je réponds à ce problème ?  Quelles sont les solutions à considérer ?  Ensuite, on va collecter des informations. En général ça se fait en atelier client ou avec les personnes qui bossent sur le site. Qu’est-ce qui se passe mal ?  Pourquoi ça te bloque au niveau du travail ?  Vraiment avoir un gros data-set de problèmes qu’on va identifier. Ensuite, on va identifier les options et peser les preuves. On a 30 modules qui peuvent répondre au problème de faire un tableau sur Drupal par exemple. On ne va pas installer les 30 modules. On va regarder si le module correspond bien à ce dont j’ai besoin. Ça va être de répondre à des questions. On a des critères plus ou moins importants si c’est une question du business, d’un contribution ou une question qui a été posée dans une boîte de suggestions sur mon site. Ensuite, on a plein de modules, on prend lequel ?  Et surtout, on va le mettre en place ensuite. C’est-à-dire que j’installe mon module. Je vais regarder s’il répond bien à mon problème ou bien si je vais en recréer d’autres. On va rejouer l’exercice. Je reprends toute ma pile de question. Peut-être que sur un nouveau tour de table, on va se rendre compte qu’on a le même dataset de problème. Peut-être qu’on en aura d’autres, peut-être qu’on en aura moins. S’il y en a plus, on n’a pas compris et répondu au problème. Une fois qu’on a réexaminé ça, on refait un tour. Ce jusqu’à ce qu’on ait soit la solution parfaite qui répond à tous les problèmes de tout le monde… Ça n’existe pas. Il y a toujours des compromis à faire. C’est pourquoi je vous propose ce petit tableau. C’est une matrice de prise de décision. Il y a plusieurs modèles, plusieurs formats. On a toute une séries d’options qu’on aura identifiées. Et en face, une série de critères d’acceptation. Les animations ne sont pas bien faites, je vais passer au tableau montré. On a des critères indispensables. Ceux-là c’est si jamais ma solution ne répond pas à ceux-là ça ne sert à rien d’aller plus loin. Ensuite,… Je crois que je peux pointer avec ça, non. Tant pis. Ensuite, on va voir ce qui va être souhaitable. C’est NVP et Nice to have. On va leur mettre un score et à quel point ils répondent au problème. Surtout, on va pondérer ces lignes. C’est-à-dire dans mon cas, si j’ai le critère 5, c’est cool, c’est pratique mais a priori si je n’ai pas le critère 4, ce n’est pas pratique car le critère 4, il vaut 9. Donc on fait un tour de table, on fait une moyenne de toutes les réponses de tout le monde. Et on a notre score. De notre score, on a une moyenne qu’on peut tracer. On saura    quelles options sont les plus viables pour l’avenir.    On peut le faire avec toutes les features du site. On peut le faire pour un choix de module même si pour moi ça serait peut-être un peu trop d’efforts. Ça vous laisse le choix de définir plusieurs options. En conclusion, le choix entre refondre ou maintenir, c’est quelque chose auquel il faut vraiment bien réfléchir. Il faut faire en sorte, on a beaucoup parlé des biais et de cette notion de curseur, il faut essayer de s’en détacher.    Les biais qu’on va injecter dans notre travail ne vont pas nous aider à prendre des décisions éclairées. 


  On a vu également dans notre cas client, il y a une option qui permet d’arriver à une refonte    totalement petit bout par petit bout. Enfin, après avoir entendu trop de méchanceté sur les codes    legacy, si on restait respectueux des codes qu’on récupère ?  C’est une histoire, c’étaient des contraintes qui n’étaient peut-être pas les mêmes. Peut-être que c’est une ouverture à de la contribution.    J’ai fait le tour. Est-ce que de votre côté, vous avez des questions sur l’accompagnement qu’on a fait vis-à-vis de notre client ou un peu plus en général qu’est-ce que le legacy pour nous ? 


  \- Est-ce qu’on a des questions ?  On a pas mal de temps, on est un peu en avance. On a le temps pour des questions. 


  \- Quand on est dans un cas où la question d’une refonte ou de continuer à maintenir le site se pose, qu’est-ce qui empêche d’appliquer la solution que vous avez appliquée à ce projet à chaque cas ?  C’est-à-dire que le client a un budget, on est dans de la maintenance, pourquoi ne pas toujours faire ce cas ? 


  \- C’est au niveau des efforts que ça nous demande. Dans notre cas, pour le projet, on a dû découper l’équipe en deux.    Tous les projets n’ont pas la chance d’avoir une grosse équipe. On avait un gros projet sécable, ce n’est pas toujours le cas. Ça reste pratique quand même de pouvoir faire ce type de démarche. 


  \- Merci. On se met dans le cas de figure, ça sera plus simple, tu as un client qui vient te voir, il te dit :  on refait notre site tous les 5 ans complètement, nouveau Drupal, nouveau CMS. Mais cette fois-ci on aimerait bien éviter ça. C’est anticiper pour la suite. J’imagine qu’il y a une histoire de documentation derrière. Mais qu’est-ce que tu mettrais en place pour éviter et qu’on rende complètement inutile ce questionnement et qu’on sache que ce projet il restera et il n’y a pas de refonte basée sur du «  je brûle tout ». Tant du point de vue contenu plus existant mais sachant que derrière tu as RGAA, etc.


  \- Premièrement, j’essaierai de voir pourquoi on demande une refonte intégrale à chaque fois. Peut-être qu’on a mal accompagné ou mal compris le besoin du client. Peut-être qu’il veut juste changer une brique par une autre. Dans ce cas-là on conserve le legacy et on va limiter les efforts à apporter sur une brique.


  Si on part sur une grosse refonte tous les cinq ans, l’avantage c’est qu’on sait comment ça se passe à chaque fois. Ça fait quand même beaucoup d’efforts à investir. Peut-être voir si on peut être une usine et que tu vas pouvoir faire évoluer pour limiter le temps de développement notamment pour les sujets RGAA.


  \- Quand tu récupères un projet qui a déjà été développé par le prestataire, comment tu expliques au client que le projet n’est pas viable  ? 


  \- C’est pourquoi on a fait un audit en premier. On ne pouvait pas dire :  ça ce n’est pas top, je ne touche pas. On a fait un audit. On avait une page de paragraphes en base de données avec 4 millions d’entrée. Le développeur il ajoutait des révisions que le contenu existe ou pas. Ce sont plein de petits billes qu’on va pouvoir montrer au client. Le client quand il voit 100 000 bugs, les marqueurs en rouge, ça l’aide à se rendre compte que ce n’est pas super. Derrière, on peut le justifier au niveau du discours. On a les indicateurs au rouge, la doc technique qui n’est pas présente. Le ticket, peut-être que je vais en avoir pour 2 heures ou pour 2 semaines. C’est vraiment être transparent avec le client. Lui dire :  voilà l’état du projet et voici le gap entre les deux. Soit tu continues ton investissement    malgré nos recommandations, sinon nous on propose un plan d’action. Ça peut se calculer, se quantifier. On estime un peu grosse louche, car on n’a pas la maîtrise totale de l’existant. On peut se tracer une courbe et une seconde courbe en reprenant à zéro. A un moment sur le tableur, les lignes vont se croiser. Est-ce qu’elles vont se croiser très tard ou très tôt ?  Sur un projet de 5 ou 6 ans, ça peut être plus valable de refondre un projet que continuer à cramer de l’argent pour mettre 10 ans à atteindre le même niveau. 


  \- Merci pour la présentation. C’était très intéressant. Je réponds à la personne qui est juste à côté de moi. Je pense qu’il faut s’appuyer dans le cas que tu présentes sur ce que Drupal a fait avec le passage de 7 à 8. Tu peux planifier l’évolution de ta plateforme comme avec Drupal. On va faire la même chose avec des releases régulières. Il faut voir ce qu’on a besoin de sabrer, ce qu’on travaille en expérimental. Tout ce qui peut être de la contribution, c’est de la contribution et sur les choses spécifiques, il faut développer une première partie, comment on peut la faire évoluer  ?  Et venir faire un travail régulier. Ça va être plus coûteux au quotidien mais ça évite de le refaire tous les 5 ans. Ça doit être des releases régulières, des mises à jour. Réfléchir aux choses qu’on n’utilise plus, etc. Vraiment rentrer dans ce code. L’ avantage c’est qu’on a l’exemple. On voit bien le changement que ça a été, c’est-à-dire que je développe un truc et dans 3 mois c’est release pour tout le monde. Il faut rentrer dans cette mécanique et releaser souvent, rapidement et corriger au fur et à mesure. A mon avis, c’est comme ça que j’aborderais la chose pour éviter de faire une refonte complète à chaque fois. Disons que ça change de la TMA. Oui, ta TMA tu la transformes. Tu vas lisser le coût sur une plus longue durée. Je ne sais pas dire si c’est plus ou moins cher mais c’est une philosophie qui est différente. Ce n’est pas juste un achat à perte d’un site qu’on va changer. On va investir dans un truc sur la durée. Ça change aussi la mentalité des devs sur le truc. Ils ne sont pas en train de faire un truc jetable, ils vont se sentir investis. Je ne dis pas que ça peut toujours marcher comme ça mais il y a une réflexion qui est différente.


  \- On a une bonne pratique sur toute l’équipe    maintenance, c’est la technique du boyscout, parfois quand j’interviens sur un template, je rajoute un module et il fait 300 lignes. On essaie que la personne qui vient faire la modification essaie de nettoyer ce qu’il y a sur son chemin. Par exemple ici on n’a pas utilisé les bons filtres et dans ce code, j’ai mis une fonction T alors qu’on me recommande de ne pas le faire. Si ce sont des petits efforts, on éponge un peu la dette. 


  Ça rejoint un peu ce que tu disais. Au niveau de ton évolution, tu vas forcément lisser. Le facteur de ce que tu vas devoir développer étant plus maigre, ça va coûter moins cher normalement. Ça peut même permettre de ne plus avoir besoin de faire une grosse refonte from scratch. Mais on peut se dire :  on va changer tel module, dans deux ans, on va changer    tel module. On va juste changer les pièces mortes de la machine.


  \- S’il n’y a pas d’autres questions, on va s’arrêter là. On va faire une pause-café. On peut remercier une nouvelle fois…
type: conference
---
