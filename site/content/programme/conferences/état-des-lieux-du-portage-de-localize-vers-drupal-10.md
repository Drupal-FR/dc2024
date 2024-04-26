---
title: État des lieux du portage de Localize vers Drupal 10
draft: false
session_id: "#61"
slug: 61-portage-localize
duration: 20 min
audience: Découverte
themes: Contribution
speakers: Felip Manyer i Ballester (FMB), Thomas Bailly (TeeBeeCoder)
companies: Res Telae, FFW
teaser: Le portage de la plate-forme de traduction de la communauté Drupal
  (localize.drupal.org) vers Drupal 10, initié en avril 2022, est l'occasion de
  la moderniser et d'introduire de nouvelles fonctionnalités. Où en sommes-nous
  ? Comment contribuer aux efforts de conception et à sa maintenance ?
prerequisites: Idéalement, être utilisateur de Drupal dans une autre langue que l'anglais.
plan: >-
  * Qu'est-ce que Localize, quelle importance a cette plate-forme au sein de la
  communauté ?

  * Où en sommes-nous du portage ?

  * Quelles fonctionnalités utiles aux traducteurs vont progressivement être mises en œuvre ?

  * Comment participer ou suggérer des améliorations ?
takeway: >-
  * L'importance de maintenir dans le temps et de faire évoluer l'infrastructure
  communautaire.

  * La nécessité de contribuer à la traduction de Drupal et des projets contribués, le plus efficacement possible.
slides_files: slides/drupalcamp_rennes_2024_localize.pdf
video: obrqViXcjxs
transcription: >-
  L'association Drupal France et Francophonie vous présente les conférences du
  Drupalcamp Rennes 2024.


  Retrouvez l'ensemble des conférences sur www.drupalcamp.fr


  FMB fait l'état des lieux du portage de Localize vers Drupal 10.


  Merci à tous et à toutes pour votre présence à cette présentation.


  Pour l'information, dans l'ensemble, ça n'a pas beaucoup changé par rapport à la présentation de Lille.


  Je vais vous parler de Localize. Qu'est-ce que Localize ? On va voir.


  Est-ce que quelqu'un a déjà traduit Drupal ?


  Il y a un atelier samedi pour aider à traduire Drupal, notamment le cœur et les modules contribués.


  Vous aurez l'occasion de voir la plateforme.


  Avant de vous parler de l'initiative en elle-même, on se présente.


  En fait, nous sommes des membres d'association Drupal en Europe qui sont intéressés par la traduction et qui se sont intéressés à la plateforme de traduction elle-même et qui se sont intéressés à sa maintenance de manière générale et en particulier à son passage de Drupal 7 à Drupal 10, qui est une partie du problème.


  Ça touche des gens qui ne sont pas forcément développeurs.


  On a besoin de gens qui ont des compétences beaucoup plus larges.


  Je vais faire vers la fin un appel à contribution parce que c'est vraiment le nerf de la guerre : contribuer.


  Je suis freelance à Perpignan, tout à fait en diagonale à la France.


  L'autre fois, c'était à Lille, tout à fait à l'opposé.


  Je m'intéresse à certaines parties de ces contributions qui ne sont pas forcément du code, la maintenance de la traduction française, voir catalane, du guide de l'utilisateur.


  Je suis donc un des administrateurs de l'équipe sur Localize et je suis le coordinateur de cette initiative.


  Je m'intéresse particulièrement aux langues.


  Pour moi, la diversité linguistique, c'est important et je suis ravi de voir qu'ici dans ce centre, tout soit en bilingue en Bretagne, les choses sont bien mieux faites que chez moi en Catalogne.


  Un jour, je vous parlerai peut-être des entités externes parce que je trouve que c'est un concept vraiment puissant.


  On a pas mal d'autres contributeurs dont quelqu'un qui est un volontaire ici au Drupalcamp, Nicolas, qui est aussi notre trésorier, il fait beaucoup pour la communauté française et qui a rejoint l'initiative dès 2022 à Ghent.


  Thomas aurait dû présenter avec moi mais n'a malheureusement pas pu venir.


  C'est lui qui a préparé ces transparents et je l'en remercie.


  En ce moment, c'est lui qui travaille de manière continue en tant que développeur sur cette initiative.


  Il travaille chez FFW et FFW nous offre son temps de travail.


  C'est de la contribution qui est sponsorisée et ça aussi, ça a une très grosse valeur.


  Alors voilà, il y a plus de monde qui s'est arrivé sur l'initiative.


  Notamment Stephane Sangours qui a écrit une grosse partie de la base de code des gens qui nous rejoignent au fur et à mesure et notamment au cours des événements.


  Qu'est-ce que Localize ? Je disais localize.drupal.org, donc c'est un Drupal 7.


  À l'heure actuelle, pas pour longtemps on l'espère, on va voir, qui permet de traduire Drupal.


  Vous voyez les chaînes originales et vous les traduisez au fur et à mesure.


  Il y a des validateurs.


  C'est un outil de collaboration pour les équipes de traduction.


  Je disais qu'il y a de la modération, qu'il y a un système de validation des traductions.


  On va voir avec quoi, ce n'est pas très secret.


  C'est une partie importante de notre infrastructure et c'est un des messages que je voudrais faire passer.


  Il y a beaucoup de buzzwords, on va ajouter l'IA, Drupal, l'an dernier je ne sais pas ce que c'était.


  Ce n'est pas que je veuille retirer de l'importance à ces éléments-là mais derrière il y a toujours les mêmes briques qui continuent à fonctionner.


  Vous savez c'est comme le XKCD avec la petite brique tout en dessous et puis si vous l'enlevez Internet tombe et c'est une personne, c'est par exemple OpenSSL qui s'en occupe quelque part ou c'est même PHP lui-même.


  On s'est rendu compte qu'il a fallu créer une fondation pour PHP.


  Et on a besoin de gens, une équipe, pas qu'une personne parce qu'à la base c'était Gabor Hojtsy qui le maintenait.


  Et on a besoin d'une équipe parce que Gabor fait quand même énormément de choses dans la communauté.


  On a besoin d'une équipe qui puisse maintenir de manière permanente et ça c'est le plus dur de manière permanente.


  C'est ce qui est le plus dur à tenir.


  Alors il y a une historique que je ne vais pas détailler, ça a commencé à Ghent en 2022, on a dansé dans les châteaux médiévaux.


  Il y a des gens qui se sont levés à 3 heures du matin pour faire des présentations aux Californiens à 17 heure, heure locale.


  Et puis on a présenté aussi ça à Prague, à Montpellier et à Lille.


  De manière générale, on essaie de communiquer sur notre initiative et d'essayer de faire venir des gens, captatus bénévolens entiers, pour qu'il y ait plus de gens qui viennent nous aider.


  Bon, où est-ce qu'on en est ?


  La première étape, c'était, on a quand même ce problème-là que, technique en fait, il faut un jour passer à Drupal 10.


  Un jour, le plus tôt sera le mieux, parce que je crois que Simon a fait ou fera une présentation sur la fin du monde, qui est en janvier 2025, paraît-il.


  Alors, le backend est fonctionnel, les migrations sont fonctionnelles, mais il y a quelque chose d'asymptotique, je ne sais pas.


  On n'arrive pas à converger, il manque des petits trucs et en fait on manque un peu de temps pour finaliser.


  Mais si on arrive à se mettre en visio par exemple avec Thomas samedi, peut-être qu'on arrivera à le finir.


  Donc, une fois qu'on aura cette migration, on pourra avoir déjà une pré-prod, on aura déjà une instance à montrer, d'autant plus qu'on a ce problème-là que les vraies données, on n'est que quelques-uns à pouvoir y accéder pour des raisons de confidentialité.


  Donc, on a récupéré les données telles qu'elles étaient, la notion de connecteur, je ne vais pas m'étendre dessus, mais on n'est pas loin de finir cette phase et on aimerait la finir et ce sera peut-être plus simple pour que plus de contributeurs viennent.


  Donc, une interface utilisateur qui est fonctionnelle, on l'a reprise en fait, telle qu'elle était, dans son jus Drupal 7, avec des fonctions de thèmes, ce genre de choses, etc. qu'on a essayé de traduire.


  Il n'y a pas forcément, on va voir quand même quelques évolutions à ça, mais on a reproduit les écrans telles qu'ils étaient.


  Pour ceux qui traduisent avec cette interface, derrière on a des interfaces de gestion, il y a aussi des interfaces qui permettent d'exporter les traductions, même si en fait ce que je voulais dire aussi c'est que c'est transparent.


  C'est que les gens, lorsqu'ils installent Drupal, ne se rendent pas compte que les traductions sont récupérées depuis un serveur quelque part qui est maintenu par des gens en fait.


  On est à combien au temps là ? Non, parce que je vois le 5 minutes, ce n'est pas 5 minutes.


  Je disais, on a récupéré l'existent, mais en même temps on essaie d'améliorer certaines choses, notamment en termes d'expérience utilisateur, il y a des choses qui ne vont pas.


  Comment je fais pour rejoindre une équipe, des choses bêtes, mais le bouton est tout en bas et personne n'ira le voir,


  donc il faut qu'on l'explique. Il y a des gens notamment à Webstanz, qui est une agence belge à Mons, qui travaille dessus, nous ont proposé déjà, par exemple les filtres, on ne les comprend pas bien, ça c'est un truc qui, me semble-t-il, n'est pas encore mis en œuvre, mais ça pourrait très bien, si c'est un truc qui vous botte, ça peut être un ticket, vous prenez, c'est assez compliqué à faire, mais il faut du temps en fait.


  Donc je disais, des choses qui ont changé, certains choix d'architecture qui ont été faits, notamment on utilise Groupe au lieu d'Organic Groups, mais ça c'est le sens de l'histoire, parce que voilà, on est passé à Groups, Groups qui est un mainteneur, il y a encore le Bus Factor, mais pour parler de la communauté, il y a des choses qui sont maintenues par une seule personne en fait, et notamment Groups qui est maintenue par Christian van den Heijers.


  On aimerait peut-être un jour utiliser Solr pour l'indication et ça résoudrait peut-être certains problèmes de performance.


  Alors la première étape, pour nous, ça sera d'abord une instance de pré-production, pour pouvoir travailler avec l'équipe d'Infra, puisqu'on travaille avec l'association Drupal au niveau mondial, et après ça, en fait, la première chose, ça sera de s'attaquer à la performance, déjà on va voir lorsque Thomas aura fini de rajouter les indexes ce que ça donne,


  mais quand même on parle d'une volumétrie assez conséquente, puisqu'on parle de millions, et sur ma machine de 10 ans, une bonne machine avec une station de travail, etc. ça met des heures et des jours à migrer.


  Et je crois que, mon disque DUR souffre un peu à cause de ça.


  C'est quand même un volume important de données, mais bon, c'est comme ça.


  Je ne vais pas m'étendre là-dessus, on s'est étendu plus à la dernière présentation.


  On veut améliorer aussi des choses sur les systèmes de crédit, on en a parlé avec l'association Drupal, il faut que ces crédits, et ça c'est essentiel pour les entreprises qui sponsorisent de la contribution, il faut que ces crédits remontent sur votre profil, et on va s'y employer.


  Il y a déjà la possibilité de récupérer des choses via JSON API ou autre.


  Il y a des gens qui travaillent par exemple dans la DrupalCon sur un projet donné, et ils ont commencé à porter localisation client, mais il faut continuer cet effort.


  Alors j'ai proposé ça comme Google Summer of Code, et je ne sais pas, je ne comprends pas très bien la procédure, si ça va arriver à quelqu'un, mais en fait l'idée c'est de traduire directement sur votre site, et d'envoyer les chaînes sur Drupal.org, et ça serait tellement mieux de les avoir.


  Donc on aurait d'autres améliorations, notamment un Glossaire, etc.


  Des tests, il faut y travailler.


  Et FFW donc sponsorise de la contribution, et on invite d'autres entreprises celles à contribuer.


  On a une feuille de route, et des instructions pour pouvoir rentrer dans le projet.


  Et ça par contre, ça serait utile aussi d'avoir des retours dessus, parce que c'est du temps à investir, et c'est un peu compliqué d'investir du temps si on n'a pas derrière suffisamment de contributeurs pour le juste.


  Donc le message c'est rejoignez-nous en fait, mais c'est valable, c'est que toutes les initiatives ne fonctionnent que s'il y a des équipes qui sont au fonctionnel.


  Je ne sais pas s'il reste du temps pour les questions ?


  Les questions ça peut être notamment, quel est votre retour d'expérience sur Localize ?


  Ce que je peux te proposer de plus simple pour répondre à ça, c'est d'exporter les traductions sur la forme d'un .PO.


  La logique actuelle, c'est que chaque langue est un groupe au sens de Groups, et donc les droits se donnent vraiment au niveau de la langue plus qu'au niveau du module.


  Je dirais que cette granulométrie, ça va être très très très compliqué, c'est déjà pas simple en fait.


  Eric travaille sur le système de détermination.


  Ça va être compliqué de donner les droits à un mainteneur.


  Par contre, on peut très bien donner des droits plus élevés.


  C'est une question qui s'est posée, c'est un outil qui a en plus une certaine ergonomie.


  Avant que j'intervienne là-dessus, il y avait déjà un ticket qui en discutait, notamment Jennifer Ogdon avait fait une synthèse là-dessus.


  Il y a plusieurs points qui ne vont pas.


  WebLite, c'est un très bon outil.


  Il y a un point, c'est que WebLite considère que les traductions sont dans le git.


  Il y a pas mal de communautés, par exemple Ubuntu, parce que je suis quelqu'un qui traduit Ubuntu en Occitan, et à chaque date de version, il faut les faire coïncider.


  À l'heure actuelle, ça c'est un peu gadget, mais vous pouvez continuer à traduire Drupal 5 s'il manque des chaînes.


  Évidemment, c'est extrême, mais c'est quand même assez appréciable d'avoir ce découplage entre les deux.


  Après, il y avait aussi d'autres problèmes.


  Ça supposerait de changer tout notre mécanisme, si on supposait que ce serait bien de les mettre dans le git.


  Et ça, par contre, ça touche quand même de ne pas leur changer le cœur.


  Au niveau de la communauté, ça va être compliqué.


  L'autre chose, c'est qu'on a une assez grosse volumétrie, j'ai l'impression, par rapport aux rapides recherches que j'ai pu faire, puisqu'on parle vraiment de millions de chaînes avec le cœur et les modules contribués.


  Et ça, on est quand même Drupal, et c'est quand même un très gros morceau dans le domaine du découvert.


  Ça ne cadrait pas trop, et finalement, on a préféré rester avec notre solution, qui coûte plus en contribution, et c'est pour ça que je rampe.


  J'essaie de grappiller toute la contribution que je peux.


  Après, Eric, il reste du temps pour, grosso modo, une question.


  Mais d'ores et déjà, je vous rappelais que samedi, il y a un atelier contribution, et vous pourrez faire de la traduction.


  Vous pourrez venir voir aussi pour Localize s'il y a quelque chose que vous avez envie de faire.


  Sinon, est-ce qu'il y aura une dernière question ?


  Sinon, tant pis, on l'offre à la présentation d'après.


  Merci beaucoup.
type: conference
---
