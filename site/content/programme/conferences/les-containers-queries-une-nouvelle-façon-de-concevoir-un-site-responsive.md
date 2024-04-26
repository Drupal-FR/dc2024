---
title: "Les containers queries : une nouvelle façon de concevoir un site responsive ?"
draft: false
session_id: "#25"
slug: 25-container-queries
duration: 20 min
audience: Découverte
themes: Intégration
speakers: Thibaut Courant
companies: Open
teaser: CSS 3 soufflera ses 25 bougies en 2024 et pourtant il continue
  d’évoluer. L’introduction des container queries et de nouvelles unités dédiées
  pourrait bien modifier la façon dont nous concevons la couche Front de nos
  sites web.
prerequisites: Une connaissance basique du CSS est nécessaire pour comprendre
  les implications des nouveautés apportées par les containers queries.
plan: >-
  1. Les containers queries Kesako ? Tour d’horizon.

  2. Comment les utiliser et qu’est-ce que ça change par rapport aux media queries ?

  3. Dois-je abandonner mes media queries ? Conclusions et perspectives.
takeway: Vous aurez appris à utiliser de nouveaux outils qui vous permettront de
  coder plus compact et plus efficace. Si vous n’êtes pas développeur vous
  apprendrez tout de même que le CSS progresse toujours et serez au courant de
  ses dernières évolutions.
slides_files: slides/container-queries-thibaut-courant-28-03-2024-v2.pdf
video: qYJ6LtyQ9b0
transcription: >-
  \- Vous m’entendez ? Bonjour à tous. Je m’appelle Thibaut Courant, je suis
  développeur front chez Open, un des sponsors de l’événement aujourd’hui,
  celui-là. Je vais vous présenter une petite conférence sur un sujet front, les
  container queries. J’ai tagué la conférence en découverte. Ça ne sera pas trop
  difficile, je vous rassure. Si vous avez fait un peu de CSS, vous devriez
  comprendre l’essentiel. Au pire il y a des images et des vidéos, vous passerez
  peut-être un bon moment. Qu’est-ce que concevoir un site responsive ? 
  Aujourd’hui, c’est une stat de février, 58 % du trafic mondial est réalisé sur
  mobile. Avoir un site Internet qui est accessible, qui est visible, avec le
  même contenu sur ordinateur que sur mobile, c’est important. La responsivité
  d’un site web est essentiellement aujourd’hui gérée côté front, ça va être de
  l’affichage. On va envoyer les mêmes données côté back. Pour rendre ces sites
  responsives, aux alentours de 2007, CSS s’est attaqué au sujet. 


  Ça a été la première solution pour rendre un site accessible avec un mobile. Les media queries, ça permet de modifier l’apparence du site en fonction de la taille de l’écran. Il y a aujourd’hui une trentaine de propriétés qui sont scrutables par les media queries. Par exemple pour le darkmode, on peut le gérer comme ça. A peu près 99 % des utilisations de media query vont regarder la width, c’est-à-dire la taille de votre view port ou la résolution. Aujourd’hui je vais vous parler de container queries. Qu’est-ce que c’est ?  Si les media queries regardent la taille du viewport, les container queries, elles, vont s’occuper des éléments eux-mêmes. Elles vont modifier l’affichage en fonction de leur taille et plus seulement en fonction de la taille de l’écran. On a une décontextualisation des éléments. Les container queries ont été introduits fin 2022. Aujourd’hui, ils sont supportés par tous les navigateur, 91 %. Ils s’inscrivent dans cette démarche d’atomique design qui est à la mode, qui vise à séparer tous les composants d’un site et traiter leur style indépendamment. Ici, on va styliser les éléments en fonction de leur parent proche ou de leur environnement. On va aller dans le vif du sujet. Un peu de code, pas trop quand même. Starter kit, une déclaration très simple. C’est une classe CSS toute simple. Une propriété, un container type. Ici, c’est la propriété à vérifier. C’est la largeur du container qu’on va regarder. On a size, ici ça va être un ratio qui va conditionner l’affichage ou la propriété normale. On rentre dans un level master Jedi, on va pouvoir regarder la font size, font type. Restons sur quelque chose de simple. Je vais ajouter un name, c’est pour mon code, pour le classer. Je l’appelle card. Je vais le déclarer. Ça ressemble beaucoup à une media query. J’ajoute un breakpoint. En fait, ma media query qui s’appelle card va vérifier la largeur de card.    Quand elle va passer sous les 500 pixels, le code va s’appliquer. C’est simple. C’est là que va arriver la vidéo. Un exemple, ici j’ai un layout très simple. J’ai une carte basique. J’ai une section avec trois cartes, une deuxième avec une seule et une autre avec deux cartes.  J’ai déclaré ma container query. J’en ai mis une deuxième, si ça passe en dessous de 150 Px je vais mettre une description. 


  Ça ne démarre pas… Je n’arrive pas à lancer la vidéo. J’aurais dû tester. 


  Désolé. 


  Je vais le lancer comme ça. Ça ne marche pas. C’est une image. Voilà. Alors, on va voir le resize en direct. J’ai mon écran, je vais simuler le passage en mobile. Les cartes ont rétréci et à la fin la description… Ça a l’air simple mais ces cartes, leur code est basique.    Elles ont toute la même classe. Je n’ai rien spécifié, leur classe c’est .card. Les sections sont identiques. Pourtant on arrive à différencier leur comportement. C’est un exemple avec un background orange qui ne sert à rien. Mais avec une image et un texte, on va pouvoir changer le mode d’affichage en fonction, par exemple je l’ai passé en portrait ici. On a quelque chose de simple avec le même code j’arrive à avoir un élément totalement responsive. C’est la taille de la carte qui est regardée. Je repasse en mode présentateur. 


  Et donc pour le même résultat, si j’avais dû utiliser des media queries, j’aurais eu un code spécifique à faire pour chaque section. J’aurais dû spécifier que dans la première section, les cartes étaient plus petites. Eventuellement, j’aurais dû mettre des classes différentes en fonction des cartes. Ici, j’avais uniquement donc la même carte, on a une indépendance des composants. Ça nous facilite la réutilisation. Une fois que j’ai réglé tous ces comportements, je prends le code, je le mets dans un autre projet, ça va fonctionner. Ça apporte de la flexibilité et une gestion plus fine des propriétés CSS. Je vais pouvoir l’utiliser pour continuer à coder, je vais pouvoir me servir du temps gagné pour régler finement le style de ma carte. Ces container queries sont arrivées avec les container queries units qui sont l’équivalent des unités pour les viewport. Elles ont un nom un peu barbare, CQH, CQI, tout ça. Ici, CQW, c’est 1 % de la largeur de mon container. Ces propriétés vont plus être appliquées dans le cas de l’utilisation d’un ratio. C’est la largeur maximale et ici « Cqmin » ça va être utilisé dans le cas où on va regarder le ratio, l’aspect de la carte. On va avoir des unités par exemple pour modifier la largeur des contours la taille de la police, je peux les modifier sur ma carte.


  Je vous ai remis un exemple avec une vidéo. Je ne sais pas si je vais la jouer, c’est un peu galère.    J’ai les mêmes cartes que tout à l’heure, j’ai simplement une font size qui est réglée, qui va s’adapter à la taille de la carte. Je l’ai mis dans un clamp, ça permet d’avoir des bornes maximum et minimum. Ça permet d’avoir une largeur qui va suivre la taille de la carte. Et donc encore une fois, ça sert à améliorer l’expérience utilisateur. Ici, une propriété importante, les container queries units, vous pourrez les utiliser dans tous les éléments descendants de la carte. Si j’avais une liste en dessous, toutes les unités vont être liées au parent le plus proche. On a des unités relatives qui sont pertinentes. 


  Ça n’a aucun sens de caler la taille d’une font sur un viewport. 


  Maintenant, les container queries, on est à la Drupal camp, quand même, on va recentrer le sujet. Est-ce que c’est utile pour Drupal  ?  Eh bien oui. Si vous utilisez les layout paragraph ou builder, en fait, du coup les container queries vont permettre de styliser vos paragraphes. Vous n’aurez à faire qu’une fois le code pour chaque paragraphe. 

   Une deuxième utilisation, c’est l’optimisation d’atomic design, on est tout à fait dans l’esprit. On va séparer les composants entre eux.    Ça vous permet de mettre votre style dans le module et tout est fini. Voilà.    Un dernier exemple, par exemple si vous voulez faire du thème rapidement, vous mettez le code et vous n’aurez à récupérer le style de votre thème et bien sûr, les container queries, c’est une propriété CSS native.    Peu importe le langage que vous utilisez, ça va fonctionner. 

  Et donc la grand question :  je dois abandonner mes media queries ?  On a quelque chose qui est très puissant, je dois les abandonner ? 


  La réponse est non aussi.    Les container queries sont complémentaires des media queries. Elles sont très adaptées aux petits éléments. Par contre, les media queries vont être plus adaptées dans le cas où on utilise des éléments qui vont faire la taille du viewport. C’est logique de vérifier la taille du viewport quand on regarde un élément tel que le body, le main d’un site. Là, il vaut mieux utiliser les media queries. Finalement, ça va changer de définir l’utilisation des container queries dès la conception de votre site, en phase UX - UI. Se demander à quel endroit vous allez les utiliser pour gagner du temps. Voilà pour mon talk. Je fais un peu de pub pour mes collègues. On est plusieurs aujourd’hui. Il y a Quentin qui passe tout à l’heure qui va vous parler de son expérience de reconversion.


  Et puis demain, Nathalie qui vous présentera son sujet. Quelques références, ce sont des articles que j’ai utilisé. Vous pouvez les scanner. Ce sont des excellents sites pour le front. Si vous n’aimez pas lire, il y a un petit tuto d’utilisation par Kevin    Powell sur YouTube. Je vous remercie de votre attention. 


  \- Des questions ? 


  \- Je voulais savoir comment ça se passait, s’il y a un composant qui change en fonction de la container query et qu’à l’intérieur de celui-ci il y a un composant qui change aussi. Il y a un ordre ?  Si un le fait grandir et l’autre rétrécir , comment ça se passe ? 


  \- Il faut ajuster les breakpoints. Si on a un élément plus petit, on peut éventuellement se baser sur les unit container queries du parent pour réagir. Quand l’enfant va passer sous les 50 % de la largeur du parent par exemple on va réajuster le composant. Faire comme ça, c’est possible mais ce n’est pas une très bonne pratique. Il vaut mieux séparer le code du parent, avec ses container queries, inclure un enfant et avoir son code séparé. C’est ce qui permet de réutiliser aussi les éléments. Le mieux c’est de séparer. Normalement, ça devrait fonctionner. 


  \- Merci, il y a une prochaine présentation.
type: conference
---
