---
title: 10 modules non essentiels mais indispensables pour l'administration de
  vos sites
draft: false
session_id: "#57"
slug: 57-10-modules-admin
duration: 20 min
audience: Intermédiaire
themes: Administration, interface
speakers: Mickael Deffontaine (Laborouge)
companies: Imagospirit
teaser: >-
  Tout au long de mes projets Drupal, j'ai dû approfondir ma connaissance de
  certains modules afin de livrer un "back-office" personnalisé aux clients.


  Lorsque les besoins de ces derniers se limitent à de l'édition et de la mise à jour de contenu, il est inutile de surcharger l'administration du site avec toutes les fonctionnalités que Drupal propose par défaut.


  Voici une petite liste de modules non essentiels mais indispensables... qui vous permettront d'affiner vos administrations de site.
prerequisites: Bien connaître le backoffice Drupal et les permissions en général.
plan: Présentation de chaque module en détail avec exemple en live sur le backoffice.
takeway: >-
  On reproche souvent à Drupal d'être un CMS difficile d'accès par son
  backoffice.


  Nous allons donc apprendre à affiner son back-office en fonction du besoin client.
slides_files: slides/10-modules-non-essentiels-mais-indispensables-pour-l-administration-de-vos-sites.pdf
video: DDlvzF7ooBU
transcription: >-
  \- Dix modules non essentiels mais indispensables pour l’administration de vos
  sites. Je m’excuse, le titre fait un peu piège à clic. Je vais le
  reformuler :  dix modules non essentiels mais indispensables pour
  l’administration de vos sites, le 10e    va vous surprendre. Je me présente,
  je m’appelle Mickaël Deffontaine. Je suis tombé dans Drupal en 2010. Je suis
  cogérant d’Imago spirit. Je suis développeur web full stack . Je développe
  aussi bien devant que derrière. Vous pouvez me retrouver sur les réseaux.
  C’est parti. Depuis 2010, je me suis retrouvé à livrer pas mal de back office
  aux clients.    Ça peut vite devenir une usine à gaz si on ne vient pas
  customiser le back office pour le client. Donc un back office personnalisé. On
  va essayer, j’espère que je vais vous apprendre, que vous allez découvrir
  certains modules. S’il y en a au moins un qui aura retenu votre attention, on
  n’aura pas le temps de faire des démonstrations en live mais je vous invite à
  les télécharger, les essayer. On va essayer de découper tout ça en catégories.
  On va parler des modules pour gérer les blocs, ensuite les menus, les
  contenus, on ira voir la taxonomie, l’interface utilisateur et un bonus
  sécurité. Un premier module qui est block    content permission. Par défaut,
  quand on donne le contrôle sur les blocs, on donne le contrôle total sur tous
  les blocs dans Drupal. Il nous permet d’ajouter des autorisations
  supplémentaires pour administrer des blocs par type. C’est utile si on a
  besoin de restreindre des accès à la création, modification, suppression pour
  certains types de bloc. Je vous ai mis la petite compatibilité Drupal. 


  Petite capture d’écran, vous voyez, on peut restreindre aux rôles définis, un rôle par exemple de rédacteur qui ne pourrait venir que sur un type de bloc. Vraiment être dans quelque chose de restrictif. Deuxième module, block permissions, il va ajouter des autorisations spécifiques pour l’administration des blocs en général. Par exemple on va pouvoir modifier des blocs sans pouvoir modifier les blocs sur l’administration du système.    On se retrouve avec tous les blocs à gérer, ce n’est pas toujours utile. On va pouvoir ajouter certains types de blocs. Ça permet de restreindre l’accès à la mise en page des blocs quand c’est nécessaire. Couplé avec le module précédent, on a une gestion super détaillée sur l’administration des blocs dans Drupal. On voit que là, entre le thème front et le thème back, on peut restreindre l’accès à cette page admin structure block. On peut aussi donner une permission par rapport    aux blocs qui sont construits par le corps, par view, etc.


  Troisième module, la catégorie des menus avec un petit module simple, c’est Menu admin per Menu. Par défaut, lorsqu’on donne le droit à un rôle pour administrer les menus, on peut tout faire sur les menus. Cela permet de donner    au rôle des autorisations spécifiques par menu. 


  On vient donner à un rôle des permission    par rapport à un ou des menus en particulier. Ça permet que notre rôle de client admin n’ait pas à gérer le menu pied de page.


  Quatrième module, toujours sur le menu, c’est Admin menu swap. Lui il ne fait pas grand-chose mais ce qu’il fait il le fait bien. Il permet d’attribuer un menu d’administration spécifique pour chaque rôle utilisateur. Dans Drupal, on se retrouve avec un menu d’administration qui est pollué d’entrée que l’utilisateur n’a pas forcément besoin. Ça vient polluer    parfois l’expérience utilisateur sur le back office. On vient attacher un menu spécifique, différent de celui    fourni par défaut. Il va venir contenir des liens vers les pages d’administration. Là, dans la capture d’écran, on a juste à définir une paire entre le rôle et le menu qu’on va utiliser. On peut le faire par rôle autant de fois qu’on veut. On va passer sur les contenus et les nodes avec View unpublished. Drupal ne permet pas toujours de voir les contenus non publiés. On avait des clients qui pouvaient dépublier des types de contenus et ils ne les retrouvaient pas dans le back office. C’est un petit module qui vient réparer ça qui nous permet de choisir les rôles qui seront autorisés ou non à voir les conte nus. 


  Ça peut éviter d’avoir le client au téléphone parfois.

   Sixième module, c’est mon préféré.    Taxonomy access fix.    C’est un module qui est sorti en Drupal 8. Il est parti d’un accès sur la taxonomie très simple. On a maintenant quelque chose de très puissant. Il vient enrichir la gestion des accès à la taxonomie en proposant des nouvelles permissions par vocabulaire. Par exemple on va avoir une autorisation pour voir le nom des termes publiés ou non publiés. On va avoir des permissions pour réordonner les termes ou pas. On aura une permission pour sélectionner les termes dans des champs d’entity référence avec cette notion de publié ou non-publié. Parfois on a une taxonomie qui doit être fixe, par exemple une liste de département où on n’a pas forcément envie que la personne qui va gérer le site vienne enrichir cette taxonomie. On n’a pas forcément envie qu’une page soit visible en front. Ça va nous apporter ça, la souplesse de définir si on doit voir le terme, voir le nom du terme et de pouvoir le sélectionner. Voilà un petit exemple pour un vocabulaire des permissions. 

  Septième module, on arrive sur les interfaces utilisateur, un module basique. 


  Il ne fait pas grand-chose, ça permet de rediriger les utilisateurs vers une URL dédiée.    Quand on se connecte au back office sur Drupal, on arrive sur la page user. Il va permette de se concentrer sur l’arrivée, la destination de l’utilisateur, on va gagner du temps. Seules les URL internes sont autorisées. On emmène nos utilisateurs sur le tableau de bord des contenus. Ça fait gagner du temps à tout le monde.

   Huitième module, Simplify, il permet de masquer des champs particuliers, des informations de champ lors de l’édition de contenu. Par exemple l’auteur. Ça permet de donner à l’utilisateur, de se concentrer sur le fait de rentrer les informations dans le type de contenu. 

  Le masquage des champs se fait sur les nœuds, les utilisateurs, les blocs. Ils est possible d’avoir un masquage par identité ou par type d’identité.    Il vient s’enrichir aussi avec l’ajout de certains modules. 


  Voilà à quoi ressemblent les permissions à définir pour les entités nœud où on peut masquer ou afficher des informations.


  Neuvième module, Allowed formats. Ça va limiter les formats de texte disponibles pour chaque champ. Il va masquer des options et informations. C’est très utile pour obliger à un rôle d’utiliser un format de texte spécifique et unique. Dans le cas où on a un rôle qui va pouvoir utiliser plusieurs formats de texte parfois dans un chapeau, un body, on vient vraiment appliquer une règle qui dit que l’utilisateur ne peut utiliser que ce format de texte-là et pas d’autre. 


  La capture d’écran. Dans l’édition du champ, on vient autoriser plusieurs formats ou un format en particulier. Et le 10e module sur la sécurité avec un module qui est Rename admin pass, ça nous donne la possibilité de sécuriser Drupal.    Ça concerne les chemins d’administration et les chemins d’utilisateur. Je l’utilise surtout pour les users, ça permet de prévenir les robots qui vont essayer de créer des comptes. Le fait de changer le chemin utilisateur, user, en lui mettant  :  Drupalcamp/register. Par exemple, on n’a plus de prédiction possible. 


  Je suis à 14 : 55. Pour la compatibilité, on n’a pas de version 10 mais il y a un patch qui fonctionne très bien.      Je vous remercie pour votre attention. 


  Je ne sais pas si vous avez des questions. 


  \- Bonjour, pour Simplify, on peut le configurer par rôle ? 


  \- Non. A priori, ce n’est que sur les entités. Il y a peut-être une autorisation pour l’utiliser ou pas. Mais normalement, ça se fait de manière globale, sauf pour l’admin. 


  \- D’autres questions ?  Je pense qu’on peut applaudir le speaker. Merci.
type: conference
---
