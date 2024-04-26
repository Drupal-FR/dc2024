---
title: "Crop & Media : l'étape d'après"
draft: false
session_id: "#60"
slug: 60-crop-media
duration: 40 min
audience: Intermédiaire
themes: Interface, médias
speakers: Damien Robert (DrDam)
companies: Smile
teaser: Le module CROP est connu pour sa capacité à permettre aux contributeurs
  d'affiner la génération de vignettes pour leurs images, or si l'on ajoute la
  bibliothèque Média, cette capacité est fortement réduite. Dans cette
  présentation, nous allons voir d'où vient ce problème et que, même s'il est
  loin d'être trivial, il ouvre la porte à des évolutions pour Drupal, les
  Médias mais également pour le module CROP en lui-même.
prerequisites: >-
  Nécessaire : L'utilisation/configuration des styles d'images, du module CROP
  et des Média.


  Utile : une compréhension technique des *controllers & services*.
plan: >-
  1. Présentation du problème d'associer CROP et Media dans un site Drupal,

  2. Explication technique du problème et pourquoi il se produit,

  3. Présentation de l'état de l'art du problème et des solutions possibles,

  4. Présentation de la suite "Media contextual crop" offrant une réponse au problème,

  5. Quelques bonus (migration D7, CKEditor),

  6. Questions et discussions.
takeway: >-
  * Les pièges connus et évitables lorsque l'on implémente conjointement des
  CROP et des Media images.

  * Qu'il existe des solutions pour pallier à ce problème.

  * Peut-être des pistes pour faire avancer ce problème.
slides_files: slides/crop-media.pdf
video: Er9mOJAGRww
transcription: >-
  Bon bah, bonjour déjà, merci d'être venu, je suis déçu qu'il y ait autant de
  monde qui ne soient pas intéressés par des migrations de Drupal 7


  Je ne comprends pas, donc merci d'être venu déjà, alors moi je vais vous parler de crop, de médias et un peu de tout le bordel qu'on fait avec tout ça, et voilà, histoire de qu'on pense à un bon moment, parce qu'on va surtout aborder des choses un peu compliquées


  Donc histoire que vous ne soyez pas venu pour rien à défaut d'avoir compris des choses, on va commencer par une petite histoire, histoire de situer.


  Donc je vous présente Alice, alors il n'y a pas de photo évidemment, donc Alice elle veut devenir influenceuse voyage et elle a bien compris que pour ça il lui fallait deux choses, faire du buzz sur les réseaux sociaux et ainsi de fois sur lequel de mettre des articles, avec lequel elle pourra faire le buzz sur les réseaux sociaux.


  Donc pour ça elle contacte Bob, Bob c'est quelqu'un de sérieux, donc il fait un benchmark complet des différentes solutions du CMS du marché et voir quelles solutions il a plus adaptées, non, il est développeur de Drupal 7, il prend un Drupal 7, et vu qu'Alice a juste un site web pour mettre des articles, il installe un Drupal 7 standard et il dit, tiens, il y a le type de contenu standard, teste des choses, dis-moi ce qui va, ce qui ne va pas, et on va construire en fonction de ça.


  Alice va commencer à construire quelques photos, quelques articles à partir d'une même photo, ce n'est pas une photo d'Alice parce qu'elle n'a pas les moyens d'aller au Japon.


  Elle l'a acheté sur internet, elle l'a récupérée sur internet, et donc elle prépare quelques articles avec cette photo.


  Le résultat, je pense que vous y attendez tous, c'est la même photo partout, parce que là ça paraît censé, il n'y a qu'une seule photo, c'est la même photo, et ça franchement ça la fout un peu mal parce que ça se voit qu'il n'y a qu'une seule photo, parce qu'en fait ce qu'Alice voudrait, ce qu'elle n'a pas dit, mais ce qu'elle voudrait, c'est pouvoir choisir une zone d'intérêt à l'image, qu'en fonction de l'article sur lequel elle l'écrit, que ce soit tout à fait la même zone de l'image qui s'affiche, et vu qu'Alice est un peu fainéante, elle aimerait pouvoir éviter de ré-uploader l'image à chaque article.


  Bon, ça Bob il sait faire, il repond dans son back-office, il va sortir un plugin de crop quelconque, il va remplacer le champ image par un média, avec la promesse évidente


  de dire, on utilise média, comme ça on réutilise les images, on a un plugin de crop pour choisir la zone d'intérêt, et évidemment ça marche presque.


  Parce qu'on a bien réutilisé l'image, jusque là il n'y a pas de problème, l'image elle est bien centrée sur une zone d'intérêt,


  il n'y a pas de problème, mais manifestement c'est la même en fait.




  Parce que la réalité elle est là en fait, c'est que le média, on a bien choisi une zone d'intérêt dans le média, mais c'est la même zone d'intérêt pour tous les usages du média.


  C'est un peu con quand même, parce que c'est quand même pas ça qu'on s'intéresse.




  Donc si on veut vraiment se poser la question, c'est vraiment le sujet en fait de cette conférence, c'est comment est-ce qu'on


  surcharge ces crops dans un média.




  C'est vraiment la question.


  Alors pour ça on va essayer de structurer un peu le problème, parce que c'est un propos un peu compliqué, et les 40 minutes on va bien les remplir.




  C'est qu'on parle d'un média.


  Donc si le problème c'est comment est-ce qu'on surcharge les crops, on va devoir commencer à se poser la question.


  On a les plugins de crop, on va pouvoir identifier des surcharges, il va falloir les stocker quelque part.




  C'est quand même une question un peu plus générale que juste des crops, c'est comment est-ce que je surcharge la donnée dans un média.


  C'est déjà un peu plus subtil que juste le crop.


  Et après il va y voir la partie entre guillemets avale du problème, qui va être de dire bon j'ai mon média, j'ai mon fichier image, j'ai mon média, bon a priori on sait comment on génère une vignette, on a un formateur image, le contrôleur image deliver qui va générer la vignette.


  La question c'est quand même de dire crop là dedans il fonctionne comment en fait ? Manifestement j'ai ni parlé de crop ni non.


  Visuellement je l'ai ni dans l'un ni dans l'autre.


  Il y a quand même se poser la question de comment est-ce que crop participe à cette génération de vignette.


  Je vais malheureusement prendre un peu de temps à vous présenter, à répondre à ces deux questions, vous présenter toutes les problématiques qu'il y a dans ces deux questions et je vais essayer de vous apporter des solutions.


  C'est tout ça qui est important.


  Jusque là c'est clair pour tout le monde sur ce qu'on va faire ?


  Bon on va commencer par la partie vignettage, donc la partie avale.


  Donc on a une entité avec un champ image, un formateur sur le champ image, on va prendre l'image formateur par défaut,


  c'est plus simple, et après le contrôleur.


  Est-ce que déjà ça pour tout le monde c'est évident ?


  Ou j'ai déjà perdu des joues en route ? Non ? Bon ça a l'air d'être évident.


  Donc on a deux briques, on va s'intéresser à ce qu'on a dans les deux briques.


  Alors l'image formateur c'est relativement simple, on le configure avec un style d'image, ça prend l'URL d'image et par un tour de magie excessivement technique d'imprendu de programmation, ça préfixe le chemin d'image par le style.


  C'est la très haute volée d'imprendu de programmation.


  Bon ça génère deux trois tokens mais les tokens on va pas s'intéresser.


  Ce qu'il faut bien comprendre là, et c'est bien toute l'importance de ce formateur là, c'est que le chemin qu'on obtient à la fin c'est un chemin potentiellement physique sur la machine vers un fichier qui a priori sera une image.


  C'est ce point là qui est important, c'est que cette vignette là, physiquement ça doit correspondre à un fichier image.


  Et on voit tout de suite qu'on va avoir un couple d'informations qui est au centre de cette génération de vignettes qui se couple style d'image, chemin de l'image.


  Donc a priori ce qui définit une vignette c'est bien une image source, l'image d'origine et le style sur lequel on l'applique.


  Pareil, jusque là je pense que si vous avez tous un peu joué avec les vignettes ça ne va pas vous paraître spécialement inconnu.


  En théorie si cette vignette là elle existe, le serveur la fournit directement au client, si elle n'existe pas on tombe dans les bras de ce magnifique contrôleur, le Image Deliver qui lui va nous générer cette vignette.


  Comment est-ce qu'il nous la génère cette vignette ? Alors c'est un contrôleur donc ça répond à une URL.


  Quand une fois j'ai parmi les tokens, parce que les tokens ont quelque chose près, ils servent soit à la sécurité, soit aux autorisations, soit à la sécurité de savoir si on a le droit de le générer et potentiellement à gérer du cash CDN et compagnie.


  En fait les tokens n'ont pas de valeur en termes de


  génération de vignettes.


  Mais en gros ce contrôleur là il fait quoi ? Donc premier truc, c'est le premier truc qu'il fait, il vérifie si une image d'origine, il existe, elle existe.


  Parce que générer une vignette à partir d'une image qui n'existe pas, je me suis amusé à le faire, la librairie GD elle aime absolument pas générer une vignette à partir d'un truc vide, clairement elle n'aime pas.




  Bon donc si l'image elle existe, on va charger le style d'image avec la flèche qui déconne et on va charger l'image.


  Alors un style d'image, si normalement vous êtes tous un peu joué dans le back office, dans un style d'image on va définir une collection d'effets.


  Qu'est ce qu'on va pouvoir faire subir à cette pauvre image ? On va pouvoir la retailler, la désaturer, changer le format, etc.


  Mais en gros ce qu'on va faire derrière, c'est une fois qu'on a chargé notre image, on va lui appliquer tous les styles les uns à la suite des autres.


  Quand tous les styles sont appliqués, on enregistre la vignette, on la renvoie au client.


  Donc ce couple qu'on a identifié de style et d'image, manifestement c'est bien ça qui nous définit une vignette.


  On n'en sortira pas, et on sent bien déjà là qu'on va légèrement nous casser les pieds.


  Mais bon, c'est quelque chose qui a l'air d'être bien stable, ça marche très bien.


  La question c'est quid des crops, parce qu'encore une fois là, je ne sais pas où les crops s'insèrent, mais manifestement ils ne s'insèrent pas.


  Donc la question c'est de dire, les crops ça fonctionne comment ? Je ne sais pas si vous êtes déjà intéressé au fonctionnement du module crop, tel que c'était déjà en Drupal 7 ou aujourd'hui en Drupal 8+.


  En 8+, les crops c'est une entité, une entité de contenu.


  Alors qui est accompagnée avec son entity type, donc le crop type.


  Et en gros si je résume très simplement la sorte donnée, on a une entité de crop, c'est l'url, c'est l'image, l'url de l'image par laquelle il s'applique, le type de crop qu'on va vouloir lui faire subir, et la consigne de crop.


  Et la consigne de crop, quel que soit le plugin, ça peut faire la même chose.


  Ces quatre valeurs, c'est une position X et Y pour avoir un point, une largeur, une hauteur.




  Vous avez votre cas.


  Et on fait difficilement plus simple conceptuellement.


  Alors cette entité là, elle est enregistrée comment ? Comment est-ce qu'on les enregistre ? On les enregistre à


  l'enregistrement de notre entité sur lequel on aura posé un widget de crop sur le champ image.




  Alors je vais prendre 30 secondes, même pas un peu moins, juste à réinsister là-dessus.


  Notre champ image, sa valeur, la value du champ image, c'est le fichier qu'il contient.


  Les données contenues dans le widget de crop, c'est la consigne de crop.


  J'ai juste insisté sur la nuance entre la valeur du champ et la consigne de crop parce que la séparation entre les deux va faire une partie du sel du problème, vous allez voir plus tard.




  Mais à quelque chose près, quand on enregistre le contenu, le widget, l'URL de l'image, c'est la value du champ.


  A priori, ça, on l'a assez facilement.


  Le type de crop, c'est la configuration du widget, c'est facile.


  Et la consigne, encore une fois, c'est la valeur du widget.




  C'est la donnée dans le widget.


  L'écriture, c'est facile.


  À l'utilisation du crop, on a un effet dans le style d'image qui est l'effet de crop dans lequel on va configurer le type de crop.


  Cet effet-là, il est appelé lors de la génération de la vignette.




  On avait dit qu'il y avait deux paramètres, le style d'image pour récupérer l'effet et le deuxième paramètre qui est l'URL d'image d'origine.


  J'ai deux clés dans mon entité, j'ai les deux valeurs sous la main, j'ai plus qu'à charger mon entité, c'est quand même pas trop compliqué.




  Et derrière, une fois que je récupère le crop, j'applique la consigne de crop à l'image et, à quelque chose près, l'effet du crop sur la vignette est fini.


  On a appliqué cette consigne de crop, on a appliqué ce retaillage.




  Ce qu'on se rend bien compte là par rapport à la génération de vignette du classique, c'est qu'on a proxifié, je ne sais pas si ce mot existe en français, mais ce n'est pas grave, on a fait un proxy du couple image style d'image et on a remplacé ce couple par le couple image type de crop.


  La nuance est subtile, mais en fait, si on y réfléchit 30 secondes, ça impose tout de suite des limites techniques au fonctionnement du module crop.




  Les deux principales limites, la première, c'est qu'en fait ce couple là, il est plus restrictif que le couple style image.


  C'est à dire qu'il y a certaines variations d'image qu'on ne pourra pas générer.


  L'exemple, c'est si j'ai un type de crop 16:9 et que j'ai un style d'image 16:9 banner et 16:9 teaser.


  Les deux styles d'image utilisent le même type de crop.


  Je ne peux pas avoir deux consignes de crop, une consigne de crop pour chacun de mes styles.


  La consigne de crop se fait au niveau du type de crop, donc sur ces deux styles là, j'aurai la même zone d'intérêt.


  C'est par design quelque part.


  C'est sur l'image d'origine ? Oui, c'est une image d'origine, mais potentiellement tu pourrais vouloir que ton point d'intérêt dans ton style 16:9 banner soit différent de ton 16:9 teaser.


  Mais tu ne peux pas, par design tu ne pourras pas.


  Il faut créer deux styles.


  C'est déjà deux styles, il faudrait créer deux types de crop.


  On sent bien qu'il y a un truc là qui gêne.


  Et le dernier point, c'est que ces crops sont d'abord avant tout pensés pour être utilisés sur des champs images.


  L'approche du média, qui est pu être la faille de l'entité, le média avant que ça soit intégré et compagnie, a été plus ou moins abandonnée par le module crop.


  Quand vous faites du crop sur un champ image, en aucun cas vous faites du crop sur une entité autre qu'une image.


  Alors ces deux problématiques là, vous inquiétez pas, elles ont rien de nouveau.


  Elles ont été identifiées au 18 novembre 2015.


  Alors je ne sais pas s'il y a des gens qui sont familiers de l'archéologie, donc je vous remets deux trois dates.


  19 novembre 2015, c'est Drupal 8.0 qui sort.


  21 novembre 2015, c'est la bêta 1 du module média pour Drupal 8.


  Et le 15 novembre 2015, c'est l'alpha 1 de crop.


  Donc clairement, le sujet il était évident dès le début.


  Et en fait, le ticket qui est ouvert à ce sujet là, en fait, qui expose le problème, son approche c'est de dire, c'est comme ça par design, on ne le corrigera pas.


  Ce qu'il faut, c'est que ça soit documenté et que les utilisateurs soient au courant de cet effet.


  Voilà, c'est comme ça.


  Ce n'est pas autrement.


  C'en est suivi quelques mois de discussion dans le ticket.


  Quelques années oui, mais le ticket est toujours ouvert.


  Mais en fait, le fond du problème s'arrête au 14 avril 2016.


  Donc quelque chose près, je ne me gourre pas, mais dans quinze jours, ça fera huit ans.


  Parmi ceux des tickers qui avaient déjà ouvert le ticket, en fait, qui va faire un constat, alors je vais être sympa sur le problème.


  Je suis sympa, je vais vous le paraphraser et le traduire.


  En gros, que ce problème de ne pas pouvoir faire des variants, on pourra le dire, c'est autant critique qu'on veut.


  Le module crop ne fera pas.


  Parce que le module crop, il est implémenté pour respecter les cas de techniques de la génération d'image.


  Et la génération d'image, quelque chose près, elle ne peut pas permettre de distinguer plusieurs variants pour un même couple de vignettes, pour un même couple style image.


  Et le module crop considère qu'il respecte ce couple là.


  On a vu que ce n'est pas tout à fait le cas, mais priori, la logique, elle est là.


  Par contre, ce qui est sympa de la part de Miro, des tickers, c'est qu'il va plus loin dans son commentaire en disant, bon, admettons qu'on veuille le faire.


  Admettons, je rappelle la date, c'était il y a huit ans.


  Il y a deux choix, soit on donne un gros coup de pied dans le corps, dans sa génération de vignettes, pour ce qui sert d'image d'origine dans le couple style image.


  Ce qui sert d'image d'origine, ce ne sera pas la vraie image d'origine, mais potentiellement quelque chose d'autre qui ferait référence à l'image d'origine.


  On contextualiserait l'image source.


  Admettons, soit on est un peu plus bourrin et on réimplément carrément une méthode de génération de vignettes pour gérer ce cas-là.


  On est mal barré.


  Je ne sais pas ce que vous en pensez, mais ça fait huit ans que le constat est le même et quelque chose de près n'a pas beaucoup bougé.


  Bon, on va regarder l'autre côté du schéma, histoire de se rassurer, enfin essayer de se rassurer.


  Comment est-ce qu'on surcharge les champs dans un média ? Je vais vous dire que ce n'est pas nouveau.


  Si vous avez déjà fait du média ou de l'équivalent Drupal 6, Drupal 7, Drupal 8, vous connaissez ce cas-là.


  Bonjour, j'ai un média avec une légende.


  Et de l'autre côté, je fais mon article, mais je voudrais contextualiser ma légende.


  Je fais comment ? La solution simple, on la connaît tous.


  Dans mon type de contenu, je vais avoir mon champ de média, un champ de surcharge pour ma légende, le tout emballé dans un fil groupe, un paragraphe, ce que vous voulez, et charge au thème de se démerder avec ça.


  Levez la main qui sait qu'il ne l'a pas fait.


  On l'a tous fait.


  Clairement, c'est un problème classique sur les médias, mais c'est un problème classique dans n'importe quelle référence de contenu.


  Je pourrais sortir les dizaines de tickets qui sont passés sur Drupal sur ce sujet-là.


  J'en ai choisi un.


  Déjà, c'est parmi les derniers, mais surtout qu'il adresse un vrai problème d'accessibilité.


  Vous savez ce champ alt qu'on a mis en obligatoire sur les images, parce qu'une image doit avoir un texte alternatif.


  C'est faux, on vous a menti.


  Une image doit avoir un texte alternatif que si elle est informative.


  Ça veut dire que si c'est une enluminure, si c'est un truc juste pour faire joli, le texte alternatif doit être vide.


  Si je peux me permettre une réflexion, c'est vrai pour l'accessibilité, mais c'est faux pour le SEO.


  J'entends bien, mais sauf que là on parle de...


  C'est toute la contradiction.


  C'est toute la contradiction, on est d'accord.


  J'ai mon média qui convient sur un texte alternatif parce qu'on l'a forcée à saisir sauf qu'en accessibilité, j'en veux pas.


  Je fais comment ?


  Donc le ticket a été créé en 2019.


  Il est en postponement depuis...


  Il y a quelque chose près, il est en postponement depuis 2022.


  Pour un truc excessivement précis et évident que tout le monde aime, un problème du high.


  Parce que des gens se sont dit, ça serait pas mal en fait, mais on n'a pas dans les guidelines du high du bac, on n'a pas une manière propre de définir les altérations qu'on pourrait faire sur un média depuis un champ de référence, un média libre.


  À quelque chose près, il n'y a pas que la surcharge de champ, il y a potentiellement le fait de pouvoir traduire un média depuis un champ de référence ou de pouvoir l'éditer.


  Mais en gros, voilà, on en est là.


  Il y a des gens qui ont proposé ça comme high.


  Je pense que ça, à peu près, ça t'y serait tout le monde.


  'est-à-dire que dans mon média libre, j'ai un petit bouton et après, je peux faire mes opérations.


  Chaque opération, une ou une modale, ça irait à tout le monde.


  On est en 2024, on est toujours en train de discuter si ça, c'est une high qui irait à tout le monde.


  Bon, je ne sais pas si dans moi, vous sentez que ça me saoule un peu en fait.


  Alors, je vous assure, a priori, ça ne saoule pas que moi parce qu'en 2021, des gens qui se sont dit fait chier, on va faire nous-mêmes.


  Donc, ce module-là, si vous ne le connaissez pas, vous prenez tous en photo et vous le testez ce soir.


  Média Libre et Média Modify, c'est un petit module génial qui a plein de points positifs.


  Le principal, c'est que la description, la description, elle décrive ce qu'il fait.


  L'installation, elle fonctionne du premier coup et le have fun, il est vrai.


  En gros, ce que propose ce module-là, en fait, un petit point technique vite fait, c'est en gros, c'est un nouveau type de champ, c'est un entity reference modify item.


  C'est un entity reference standard.


  C'est juste qu'il a une colonne en plus dans lequel il va gérer, il va stocker des surcharges.


  Ça veut dire que vous allez pouvoir modifier la valeur des champs de votre média et le champ va stocker ses surcharges dans un magnifique JSON.


  Donc, on va stocker les values et que si vous chargez votre média depuis le champ, il écrase les valeurs des champs natifs du média par les surcharges.


  C'est con, il le fait tout seul.


  Alors, j'ai prévu une vidéo pour ça parce qu'à un moment donné, ce genre de module peut présenter.


  Donc là, j'ai un type de contenu article, j'ai juste mon média contextuel en plus, mais je pense qu'en gros, c'est une média librairie classique.


  Donc, ce que je vais faire, je vais mettre deux fois le même média dedans.


  À quelque chose près, ce qui va être évident, c'est qu'on va afficher mes deux photos pareilles avec deux fois la même légende.


  Jusque là, c'est normal, c'est la légende qu'il y a dans mon média.


  Ce que propose le module, c'est ce petit bouton qui ouvre une modal, override media item, dans lequel j'ai pouvoir modifier ma légende.


  C'est con.


  Le problème, c'est que ça marche.


  Vous allez voir.


  Donc, je le modifie sur le premier média, sur le deuxième, je décide de ne pas modifier la légende, on va laisser ça comme ça, et je vais rajouter un troisième fois le même média pour lequel je vais aller modifier la légende.


  Donc, comme ça, on a le premier qui existait avant, le deuxième sur lequel je n'ai rien modifié, et le troisième que j'ai modifié la légende, dans mon enregistré.


  Et la magie, c'est que mes trois légendes sont différentes.


  Merci.


  Le module n'est pas de moi, donc pour ça je vous dis, si vous ne le connaissez pas, que vous vous cassez le cul avec les médias, testez-le, parce que clairement, il répond à la promesse.


  C'est vraiment, et accessoirement, ils ont même une commande rush pour migrer des champs de médias, des champs de référence, des médias classiques vers leur champs à eux.


  Du coup, il ne serait pas possible d'appliquer la même logique au balise alt, justement, pour répondre à la contradiction.


  Alors, justement, justement, c'est que ce module-là, alors la question c'est, est-ce qu'on ne peut pas appliquer ça au balise alt ? Ce module-là le gère, en fait, la balise alt, directement.


  Non, mais pourquoi ce n'est pas dans le corps, ce connerie merde ? Bon, donc, si on fait un petit constat, parce qu'on va reprendre le problème de base, quand même, le problème de base, c'était Alice, là, avec ses photos du Japon, où elle veut faire du crop et réutiliser ses médias.


  Bon, donc, si je reprends mon schéma, la bonne nouvelle, c'est qu'a priori, sur la partie de gauche, en amont, on a une brique.


  Elle fait le taf, enfin, presque.


  Si vous avez suivi, je pense que quelqu'un a compris pourquoi je précise le presque.


  Presque.


  La consigne de crop, c'est pas la valeur du champ.


  Voilà, donc, quand même, c'est un patch pour rajouter un alter et un petit hook alter, ça va tuer personne.


  Voilà, mais donc, sur la partie de comment est-ce que je saisis la surcharge de mon crop, c'est faisable.


  C'est facile.


  Bon, sur la partie de gauche, on a vu qu'on avait deux pistes à explorer et que, manifestement, on n'avait pas grand-chose d'autre.


  Alors, les deux pistes au menu, donc, je rappelle, la première, c'est de rester avec l'image deliver natif, mais essayer de le troller, de le faire travailler sur une image qui ne serait pas la vraie image.


  Bon, et le deuxième cas, c'est un peu plus bourrin, c'est de dire qu'on va créer un nouveau contrôleur de génération de vignettes ad-hoc.


  Ça veut dire dupliquer toute la stack de routing de contrôleurs de génération et compagnie.


  Alors, moi, je ne sais pas pour vous, mais troller le code de Drupal, j'adore faire ça.


  On va essayer de commencer, on va tenter cette première approche, histoire de voir ce que ça donne.


  Alors, donc, la théorie, elle va être, donc, on a à gauche le Media Modify avec son altération et la théorie, ça va être de dire, bon, je vais, alors vite fait, est-ce que j'altère l'image formateur standard ou est-ce que je fais un formateur custom ? Le débat est ouvert, pour moi, c'est un non débat parce que, en fait, dans les deux cas, il faudra que mon formateur puisse gérer des images du crop contextualisé ou du crop non contextualisé ou de la génération standard.


  Donc, dans les deux cas, il faut que mon formateur fasse les deux, que je l'altère ou que j'en crée un nouveau.


  C'est forcément le débat.


  Mais bon, a priori, l'idée, on va partir de son altération.


  Dans l'intégration, on va créer une copie contextualisée de notre image source et remplacer l'URI d'origine par cette copie.


  Bon, ça, c'est facile.


  On a un magnifique petit hook pour ça, le pré-process image formateur.


  Il y a juste un point qu'il n'a pas falloir qu'on oublie et qu'il va être subtil, c'est de dire qu'à la sauvegarde de l'entité, il va falloir que je crée un crop qui cible cette copie-là.


  Ce qu'on a vu tout à l'heure, c'est que l'entité de crop, elle garde, elle stocke l'image sur laquelle le crop va devoir s'appliquer.


  Donc, je vais avoir un petit jeu de danse à faire pour que la sauvegarde de l'entité me crée un crop sur cette future cible, cible que je créerai plus tard.


  Juste au cas où entre temps, on a évité des cas, j'ai des fichiers, mais sûr que mon fichier de source existe.


  Bon, c'est une gymnastique un peu pourrie, mais bon, il y a trois altérations qui devraient y arriver.


  Donc, c'est en ça où en 2022, je sors le module Medial Multicropping qui a pour objectif, pareil c'est clair, j'apporte un POC fonctionnel sur cette capacité.


  Le but c'est de dire, vu que j'ai l'impression que personne s'adresse au sujet, j'ai mis à adresser et au pire, si ça intéresse personne, mon module ferait de mal à personne.


  Donc, c'est pour ça qu'en mars 2023, j'enterre le module parce qu'il y a des gens qui partent en prod avec.


  Functional POC, je ne sais pas, vous n'êtes pas sérieux les gens, c'est écrit en toutes lettres, à ne pas utiliser, j'aurais pu le mettre en expérimental, je ne l'ai pas fait, j'aurais peut-être dû.


  Donc, je l'enterre en 2023 parce que des gens partent en prod avec et à la place, je publie la Media Contextual Crop Collection sur la branche 1.0, c'est le même code, c'est juste qu'au lieu d'avoir tout dedans en vrac, j'éclate le code, ne serait-ce que pour éclater les dépendances, que si vous utilisez Image Widget Crop sur votre site, tout le code qui permet de gérer Focal Point, vous n'en avez pas besoin.


  Donc voilà, c'est juste d'éclater ça et avoir une gestion de patch et de dépendance un peu propre.


  Donc, je publie ça en mars 2023 et pour des gens que j'aurais pu croiser à DrupalCon Lille, je pense que je l'en avais parlé.


  Alors, cette approche-là, on peut faire un bilan, l'implémentation est intéressante, le côté positif, c'est qu'on a vu, elle est relativement simple l'implémentation, c'est trois altérations.


  Bon, il faut se brancher à Crop, il faut se brancher à plein de choses, mais c'est relativement peu de code en fait.


  Par contre, le côté négatif, et ça je l'ai vu avec les gens qui sont partis en prod avec, c'est qu'en fait, le module Crop, il embarque énormément de routines de nettoyage de ces entités, principalement basées sur le fait qu'on supprime des fichiers images.


  Sauf que moi, je ne me base plus sur les fichiers images qui sont gérés par Drupal, je me base sur des copies que j'ai créées plus ou moins à la main à la volée.


  Donc, côté nettoyage de Crop, de copies de vignettes, ça devient obligé d'implémenter beaucoup de code, beaucoup très complexe et pas forcément évident.


  Et clairement, ça peut poser des problèmes sur certains hébergements, principalement sur des questions d'Io sur les disques.


  Et ce point là, je l'ai identifié avec les deux trois personnes qui sont partis en prod avec, bande de salopio, et en fait, on est arrivé à la conclusion que je ne pourrais pas le corriger.


  Alors, pourquoi j'ai ce problème d'Io ? Ça, je peux l'expliquer pourquoi je l'ai en fait.


  C'est que si on revient sur la gestion d'un M3, on ne voudrait pas le gérer ses fichiers.


  Donc, vous avez votre dossier public avec votre arborescence de dossier et votre image en giga pixels.


  Quand vous faites une vignette, vous créez un dossier style, un dossier avec le nom du style et vous reproduisez l'arborescence avec votre petite vignette.


  Bon, juste là, on a doublé le nombre de structures sur le disque.


  Ce n'est pas forcément des structures, elles ne pèsent pas lourdes, mais sur certains hébergements avec du file système virtuel, vous cramez les I/O pour ça.


  Sauf que nous, ce qu'on fait en fait, avant de faire cette étape de style là, on crée une copie contextualisée.


  C'est-à-dire que je crée un dossier avec le contexte, je reproduis l'arborescence et je duplique l'image source.


  Je reprends le cadalys qui avait son image en mégapixels et ses trois contextes.


  J'ai multiplié par 4 la consommation de disque, la cadeau.


  Et après derrière, ce truc là, ça repasse dans le style.


  Donc non seulement j'ai multiplié par 4 la consommation de disque, mais j'ai presque multiplié par 3 le nombre de structures.


  Il y a des hébergements où le file système là, il pète des plombs, surtout quand vous passez un hook image flush qui va faire sauter tout le dossier de style.


  Donc ça marche bien, mais en fait, on a des problèmes côté uDisk, donc on a abandonné.


  Bon, c'est pas grave, il y a une deuxième approche un peu plus bourrine.


  Conceptuellement, elle est plus bourrine, mais elle est presque plus simple.


  En fait, c'est juste la dernière brique là à écrire.


  Mon altération est toujours là, j'ai toujours mon image formateur.


  Il a toujours falloir que je fasse une altération là pour changer l'url, mais à quelque chose près, j'ai juste un contrôleur à recréer de zéro.


  Bon, il va y avoir une petite subtilité, il va falloir que je crée un crop.


  On verra comment est-ce que je contextualise les crops derrière, mais à quelque chose près.


  Ce qui fait peur, c'est ça, mais mécaniquement, on ne va pas plus loin.


  Et ça, en fait, je l'ai implémenté dans la branche 2.x de la collection de modules que j'ai publié relativement peu de temps après la Drupalcon.


  Parce qu'en fait, c'est juste le replacement de la brique du moteur du système.


  Donc, vu que je ne m'étais pas trop planté sur mes services, mes plugins et compagnie, ça s'est fait relativement tout seul.


  En termes d'implémentation, l'idée, c'est qu'on fait un routing, un contrôleur.


  Donc, il faut se créer une url.


  Alors là, c'est la manière dont on s'est implémenté.


  Si on a le temps après ou si vous êtes là demain, ne critiquez, il n'y a pas de problème.


  Encore une fois, c'est une preuve que ça peut fonctionner.


  C'est loin d'être une solution parfaite.


  Donc, si vous voulez m'aider à l'améliorer, vous êtes tous les bienvenus.


  Comme je disais, moi, ça fait 4 ans que je traverse le désert avec ce concept-là.


  Donc, toute l'idée est bienvenue.


  Ça marche, je vous assure.


  Mais bon, donc, il me faut une url.


  Bon, allez, je mets un prefix, comme ça je sais que c'est mes urls à moi.


  Derrière, il faut absolument que je vais absolument finir avec le chemin de l'image parce que je veux que, à la fin, ma vignette soit quand même considérée comme une image.


  Je vais rajouter le style parce qu'il n'y a pas que les crops dans la vie.


  Potentiellement, il y a d'autres effets qu'on va appliquer à sa vignette.


  Et au milieu, il va falloir que j'injecte un contexte à la con.


  Quoi ? Je ne sais pas.


  Il va falloir que j'injecte un truc.


  Une fois que j'ai mon url, il me faut mon contrôleur.


  Bon, là, je suis fainéant.


  Il y a un truc qui marche dans le code qui est le image-deliver.


  Je vais reprendre tout le stack de routing.


  Donc, la déclaration des routes, le passe-processeur, la génération des routes, le contrôleur.


  Rien de tout ça est prévu pour être étendu.


  Donc, à quelque chose près, je vais dupliquer les fichiers.


  Pas beau, mais bon, on fait ce qu'on peut.


  Mais après, il va quand même nous rester quelques questions.


  C'est ce contexte-là.


  C'est quoi ?


  Cette clé de contexte, c'est quoi ? Derrière, comment je récupère le contexte au niveau du crop et comment je l'injecte dans mon effet de crop ? On est bien mignons, mais on n'a pas répondu au problème.


  Bon, là, j'ai fait le choix de m'intégrer un maximum au module crop.


  Ça, c'est un choix.


  C'est pareil, c'est des choix qui sont sans doute discutables dans la solution.


  Donc, on va commencer.


  J'ai commencé par faire un patch sur l'entité de crop pour ajouter une colonne de contexte.


  Ça veut dire que mon crop n'est plus limité à juste un couple image type de crop, mais je rajoute une clé de contexte.


  Ça veut dire que je suis capable de gérer un crop par défaut, qui n'a pas de contexte, de toutes ses variations pour une même image et un crop type.




  Et après, on rentre dans la partie qui est sale.


  Je m'en excuse pour y me jeter des cailloux et des tomates.


  Il me faut une clé de contexte.


  J'ai une entité de crop.


  On peut prendre l'id de l'entité.


  Merci Olivier.


  Ma clé de contexte, j'ai directement pris l'id de l'entité et après,tu te prépares pour le deuxième bout.


  Derrière, il y a la méthode getCrop sur le plugin d'effet,où je vais dire si j'ai l'id dans la request, utilise-la.


  Merci.


  Et donc, si vous ne savez pas quoi faire demain, vous pouvez toujours m'aider à améliorer ça.


  Bon, si je fais un bilan blague à part de cette solution-là, le côté positif, c'est que je suis mieux intégré à crop API, donc je profite de tous les systèmes de nettoyage que la crop API me produit sur ces entités, sur ces vignettes et compagnies.


  Je peux facilement me réintégrer au flush les images et donc j'ai une solution beaucoup plus propre en termes de données dans la base, mais aussi en termes de vignettes et de fichiers sur le disque.


  Côté négatif, on vient de tous les voir.


  Ce n'est pas simplement plus technique.


  Si quelqu'un est expert en postprocessor, pareil, j'ai besoin d'aide.


  Pareil, le doublonnage du code parce que l'image deliver, c'est une classe qui n'est pas prévue pour être étendue.


  La méthode deliver fait 400 lignes et il y a tout dedans.


  Donc, je recopie mes 400 lignes.


  Et en fait, l'injection de crop directement dans le pull paramènes request, c'est une approche complètement naïve, mais mon but, c'est de prouver que c'est faisable.


  Donc encore une fois, si vous ne savez pas quoi faire demain, s'il vous plaît, venez.


  Je vais quand même vous montrer que ça marche.


  Je reprends mon contenu avec mes photos.


  Je vais toujours retrouver mon édition, c'est juste que là j'ai mon focal point.


  Donc la photo pour le Mount Fuji, je pointe vers le Mount Fuji.


  La deuxième qui doit être centrée au milieu, je vais laisser le focal point au milieu.


  Et la troisième où je m'intéresse, au tori, je vais descendre focal point.


  Je sauvegarde.


  Et j'ai mes trois photos qui sont toutes les trois photos différentes.


  Merci.


  Sincèrement, ça a fait un paquet d'années que ce sujet-là me casse la tête.


  Quelque chose de près, c'est que je ne sais pas si vous êtes dans la salle, mais à vue de nez, vous êtes entre 5 et 10 fois plus que le nombre de personnes avec qui j'en ai parlé.


  Voilà.


  Mais bon, allez, on va finir sur une bonne chose.


  C'est qu'une fois qu'on sait faire ça, on peut faire plein de choses.


  Très fun.


  Bon là, on a attaqué l'image formateur.


  C'est fun.


  Mais bon, si on sait altérer l'URL pour une image, on peut faire pour plusieurs.


  Vous prenez le responsive style images et pour chacune de vos modes responsives pour le même média, vous faites des variations.


  Bon, on sait en faire pour une, on sait faire pour plus de choses.


  Et après, le petit dernier, parce que c'est personnel, c'est que si vous savez faire de l'altération pour une image, vous pouvez vous débarrasser de la balise IMG et directement cracher l'URL de la vignette.


  Ça, c'est presque facile en fait.


  Pour les gens qui utilisent l'image URL formateur, je ne sais personne qui utilise ce formateur, mais voilà, il y a une version contextuelle pour ça.


  Et enfin, là vraiment, pour finir sur une bonne note, est-ce qu'on n'a pas un autre point d'entrée pour utiliser les médias ? Est-ce que quelqu'un a une idée ? Comment est-ce qu'on pourra utiliser les médias en dehors d'un champ de référence ?


  Voilà, c'est la cinquième roue du carrosse, médias contextuels, pas comme bêtes.


  C'est techniquement la fonctionnalité qui m'a pris le plus de temps sur l'ensemble du truc.


  Donc pareil, s'il y a des gens qui sont familiers des plugins, de CKEDITOR, du JavaScript et des compagnies, je suis preneur.


  Voilà, donc voilà, je vous remercie.


  Merci d'avoir regardé cette vidéo.
type: conference
---
