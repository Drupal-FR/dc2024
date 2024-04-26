---
title: Un site web accessible à tous grâce à un back-office correctement paramétré
draft: false
session_id: "#35"
slug: 35-parametrage-backoffice
duration: 40 min
audience: Découverte
themes: Accessibilité, interface
speakers: Chloé Corfmat (chloecorfmat)
companies: Chloé Corfmat
teaser: L’accessibilité numérique est un combat collectif. Pour rendre un site
  web accessible à tous, le contributeur qui écrit du contenu doit transmettre
  les informations qui aideront les développeurs à écrire le code HTML rendu à
  l’écran.
prerequisites: >-
  * Être capable de remplir un formulaire de contribution de contenu (exemple :
  créer un article),

  * Avoir quelques notions de HTML (facultatif).
plan: >-
  1. Qu’est-ce que l’accessibilité numérique ? 

  2. Quels formats de contenus (listes, liens, images, vidéos, fichiers, tableaux, couleurs…) doivent faire l’objet d’une attention particulière ?

  3. Comment bien paramétrer l’éditeur de texte WYSIWYG ?

  4. Comment contribuer du contenu accessible ?
takeway: >-
  Grâce à cette conférence, vous saurez ce qu’est l’accessibilité numérique et
  quels sont les enjeux. 


  En tant que développeur ou site-builder, vous serez capable de mettre en place un formulaire de contribution en respectant les exigences de l’accessibilité numérique pour l’affichage de votre site en front. 


  Si vous êtes un contributeur, vous saurez publier du contenu accessible à tous et demander aux équipes en charge de votre site les fonctionnalités manquantes.
slides_files: slides/support-de-slides-site-accessible.pdf
video: QaIveBANx9w
transcription: >-
  \- Bonjour à tous. Aujourd’hui on va parler d’accessibilité web et des back
  office. Je m’appelle Chloé, je suis ingénieure web et consultante en
  accessibilité numérique freelance. Je travaille sur l’accessibilité des sites
  web mais aussi des réseaux sociaux par exemple. Cet après-midi, on va parler
  déjà de ce que c’est que l’accessibilité numérique. On va voir comment vous
  pourrez avoir des contenus accessibles en front. On va parler des éditeurs
  WYSIWYG. Et si on a le temps, on parlera de comment on contribue à du contenu
  accessible sur le web. 


  L’accessibilité du web signifie que les personnes handicapées peuvent utiliser le web, le comprendre, interagir et y contribuer. On a quatre principes qui sont perceptible, utilisable, compréhensible et robuste. Les personnes handicapées, elles ont les mêmes droits que nous. Elles doivent accéder aux même fonctionnalités, information et créer un site ou un blog par exemple. On pense que ça concerne les personnes aveugles ou sourdes essentiellement. Pourtant on a beaucoup de troubles sur lesquels on fait attention. Il y a les troubles de l’audition, les troubles de la vue avec les personnes aveugles, malvoyantes mais aussi les daltonien. On a aussi les troubles de la mobilité avec la perte d’un membre par exemple. On a les troubles mentaux, intellectuels.    On a des handicaps    cognitifs. On a l’épilepsie par exemple. Et tous les handicaps psychiques, les maladies mentales, les troubles bipolaires qui sont des publics perturbables qui vont avoir du mal à se repérer. On a aussi des personnes qui ont des troubles invalidants qui vont les empêcher d’utiliser un ordinateur ou une tablette.


  On entend souvent dire que l’accessibilité web existe pour aider tout le monde. En ajoutant des sous-titres sur les vidéos par exemple ça aide aussi les personnes qui sont dans les transports en commun par exemple. Pourtant, dire ça c’est invisibiliser les personnes en situation de handicap. Comment les personnes handicapées vont-elles naviguer sur le web ?  On a par exemple les lecteurs d’écran pour les personnes aveugles. On a des logiciels de loupes numériques qui permettent de modifier l’affichage de l’écran. On a des logiciels de reconnaissance vocale et des personnes qui naviguent au clavier. On va aussi avoir des aides matérielles.    On a par exemple la plage braille qui permet à une personne aveugle de lire le contenu en braille. On a aussi des guide-doigts qui vont permettre d’éviter de faire des fautes de frappes et d’appuyer sur plusieurs touches en même temps. Ensuite on a des joystick ou des trackballs. Ça permet de bouger la trackball ou le joystick directement. 


  Ensuite, on va avoir différents contacteurs.    Par exemple un contacteur au souffle en bas à gauche. Si elle fait un souffle rapide, elle va aller sur l’élément interactif le plus proche. Deux souffle court, elle va en arrière. Avec ça, la navigation est plus lente. On a aussi des claviers monomanuels. Ça permet de l’utiliser à une seule main. On peut faire toutes les combinaisons de touches avec une main. On a les headsticks ou les mouthsticks. La personne va tenir dans sa bouche un bâton qui va lui permettre d’appuyer sur le clavier.    On a un panel assez large de dispositifs d’assistance qui sont très variés pour lesquels les sites web doivent être compatibles. Au niveau légal, depuis 2005 la loi française oblige les services de l’Etat et les collectivités territoriales de rendre leur sites accessibles. Depuis 2019, on a aussi les grandes entreprises privées qui doivent être accessibles. Et on va inclure tous les services et produits en 2023. Pour cela, on utilise le RGAA. C’est un référentiel français qui utilise les niveaux A et AA des WCAG. Il y a également un niveau AAA qui n’est pas possible d’atteindre complètement pour tous les composants. 


  Maintenant, comment vous pouvez rendre vos back offices efficaces pour avoir un site web en front qui soit accessible  ?  Je vais utiliser le module Paragraphs dans cette présentation mais ce n’est pas obligatoire. Pour les couleurs, il faut être vigilant quand un contributeur a le choix des couleurs, il faut un contraste entre la couleur de fond et de texte qui soit suffisamment lisible. Vous avez un module Color Fill sur Drupal. 


  Dans l’idéal, il doit choisir une couleur, celle de texte ou du fond et c’est à vous dans le CSS de définir si vous avez un fond rouge, on écrit le texte en blanc ou en noir ? 


  Ensuite, on va avoir les liens. Le but c’est de signaler à l’utilisateur la cible du lien et tout changement de contexte. Par exemple si vous ouvrez une nouvelle    fenêtre ou un logiciel. Par exemple sur un lien de téléphone. Pour cela, vous devez utiliser le champ lien de Drupal et vous utilisez un champ booléen. Vous pouvez aussi permettre à l’utilisateur de remplir lui-même l’attribut Title. L’attribut des liens externes doit être la concaténation du lien et du texte. Pour éviter que les contributeurs l’oublient. 


  On va aussi avoir des listes. En HTML on a plusieurs types de listes. Pour les personnes qui utilisent un lecteur d’écran, c’est important de savoir de quel type de liste il s’agit.    C’est important de permettre au contributeur de choisir le type de la liste. 


  Ça permet ensuite en front de séparer les différents cas et de permettre à l’utilisateur de savoir de quel liste il s’agit. 


  Aujourd’hui encore on utilise beaucoup les iframes, le principe est d’afficher un contenu web dans une autre page web. L’attribut    title est indispensable. Le lecteur d’écran va vocaliser qu’il y a une iframe présente mais s’il y en a plusieurs, il dira seulement «  iframe » donc la personne ne pourra pas savoir de quoi il s’agit. Si on met un title, on peut dire qu’il s’agit d’une carte    par exemple. Ensuite, les tableaux, on va avoir les tableaux simples, c’est comme l’exemple que je vous ai présenté sur l’écran. On a une seule ligne d’en-tête de colonne. Pour cela, on peut utiliser table field. On va savoir à quelle cellule correspond quoi. La deuxième option, c’est d’utiliser l’éditeur de WYSIWYG. Dans les deux cas, il faut modifier le template pour ajouter les scopes. Ça permet de définir le sens des en-têtes. Par exemple on va dire que la colonne catégorie    socioprofessionnelle, c’est un scope de colonne et que «  agriculteur » c’est un scope de ligne. C’est comme ça que les personnes handicapées vont être repérées et qu’un tableau sera vocalisé. La difficulté sera sur les tableaux complexes. Par exemple sur cet exemple, on a deux lignes d’en-tête de colonne, on a  :  Industrie agroalimentaire. Et on a :  industries manufacturières. 


  Il faut savoir à quelle en-tête se référer. Pour chaque en-tête, on a un ID. Et pour chaque cellule, je spécifie les ID des en-têtes dans l’ordre. Par exemple si je prends le 1147. On met un header, on va avoir :  déchets banals…


  Pour chaque cellule, il faut faire ce travail-là. Je n’ai trouvé aucun module pour arriver à un niveau de qualité d’accessibilité correct. Je recommande d’éviter de laisser la possibilité au contributeur de remplir des tableaux complexes. Vous pouvez le faire manuellement dans le code s’il y a un tableau qui est important.    Drupal utilise une médiathèque, vous pouvez l’utiliser pour différents médias. Par exemple pour les images, on a des personnes qui peuvent avoir des difficultés à comprendre les images et les visuels. Pour cela, on va définir plusieurs cas. Par exemple pour les images décoratives, on a des informations à gauche et l’image des chalets elle n’apporte aucune information. Dans ce cas-là on met un attribut alt vide.


  Dans le cas de droite, l’image apporte de l’information. On va remplir l’attribut alt.


  On a aussi des images complexes qui contiennent du texte. C’est compliqué à lire pour les personnes malvoyantes. On va laisser l’attribut alt vide mais on va devoir réécrire l’intégralité du texte de l’image dans une description séparée. 


  C’est le cas à droite. Pour les vidéos, il faut qu’elles comportent systématiquement des sous-titres et une transcription textuelle qui va servir à lire l’intégralité de ce qui a été dit à l’oral. Il y a des outils qui permettent de le faire facilement, c’est le cas de YouTube. Vous pouvez utiliser une vidéo distante ou créer un player    audio qui soit satisfaisant. Pour les documents, il faut permettre à l’utilisateur d’avoir toutes les informations dont il a besoin avant de le télécharger. 


  Ça permet à la personne de savoir qu’elle peut le télécharger. Le format du fichier également, par exemple si la personne utilise son téléphone et qu’elle a besoin d’un lecteur, ça n’est pas utile de le télécharger. La langue du document aussi. Ça ne sert à rien à télécharger un document en chinois si la personne parle    français. Un éditeur WYSIWYG vous permet de voir le contenu de ce qui va être affiché. Ça veut dire what you see is what you get. Ce qui est important dans les éditeurs de texte WYSIWYG c’est d’avoir les bons boutons pour structurer votre texte. Je vous conseille d’activer la liste déroulante «  heading ». Et on va éviter d’activer le titre unique « H1 ». 


  On aura besoin des titre h2,h3, etc., pour structurer le contenu. 


  Evitez aussi de proposer des titres h4,h5 et h6 si rien n’est prévu dans le CSS. Ça va être incompréhensible pour les personnes handicapées. Ensuite, il ne faut pas laisser à l’utilisateur trop de possibilités, par exemple vous ne lui permettez pas de choisir n’importe quelle couleur. Ça va être défini par vous-mêmes dans les styles CSS. Pour cela, dans l’onglet «  définir » vous allez pouvoir attribuer à chaque balise une classe.    Ensuite vous allez définir un fichier CSS et le déclarer pour qu’il soit exécuté dans le back office. Vous remplissez    vos propriétés pour chaque style dans le fichier. C’est cela qui va themer vos différents styles. De la même manière, il faut préciser à l’utilisateur tous les changements de langue. Ça permet au lecteur d’écran de bien prononcer les mots. Le dictionnaire de référence, c’est le dictionnaire de l’académie française. 


  E-mail il faut mettre un tiret par exemple sinon il est prononcé «  émail ». 


  Par exemple on a la chair en français mais si c’est un mot anglais que vous voulez dire, on n’a pas du tout le même sens que ce qui va être prononcé par le lecteur d’écran. Vous pouvez activer la liste déroulante langage. 


  On a votre paragraphe habituel côté code et on aura un attribut    span et le code de la langue que vous aurez choisie.


  Maintenant on va parler de contribution du contenu. Les règles générales ça va être d’utiliser les fonctionnalités des éditeurs WYSIWYG. On va éviter les sigles et les abréviations. On va éviter de dire par exemple «  l’image qui est à gauche sert à ça » car une personne qui va lire le contenu avec un lecteur d’écran elle ne saura pas si l’image est en haut en bas ou à droite. Pareil pour les couleurs, une personne    daltonienne ou malvoyante ne verra pas la bonne couleur. Il faut garder tous les accents, y compris sur la majuscule. 


  Pour tous ceux qui vont contribuer sur les réseaux sociaux ou reprendre des posts sur les réseaux sociaux, sur les    #, on va garder les accents. On va écrire les hashtags à la fin du texte. Ça va éviter au lecteur d’écran de lire un hashtag au milieu de chaque texte. Là par exemple la personne n’a mis aucune majuscule, aucun accent, on a des risques de ne pas comprendre les hashtags qui sont écrits. Pour les caractères unicodes, ils sont à bannir. Ils ne sont pas personnalisables. Si une personne utilise un logiciel de loupe numérique, elle ne pourra pas personnaliser la police. Et ce n’est pas toujours fourni avec toutes les polices. Par exemple ici, à gauche on a un tweet d’une personne qui dénonce    ça et à droite on a un tweet de la SNCF qui est incompréhensible pour les personnes avec un lecteur d’écran. Pour les émojis, la première règle est de vérifier la signification des émojis. Il faut les utiliser avec parcimonie. Utilisez-les à la fin d’une phrase de préférence et surtout pas pour remplacer des mots, des chiffres ou de la ponctuation. Par exemple ici sur le compte Twitter de Netflix. On a  :  Emoji    feuille qui tombe, feuille qui tombe, feuille qui tombe… ce n’est pas du tout agréable. Pour le J-7 en voiture de course, c’est pareil. Ça va être illisible. L’utilisateur déjà ne va rien comprendre. Et on perd complètement l’utilisateur dans sa navigation. 


  Dernier point là on a un tweet de l’ONU qui a fait la définition que je vous ai lue tout à l’heure. Ils nous demandent de respecter les gestes barrières. On va lire :  protégez-vous de la numéro    1 Covid 1 9. 


  2, quand vous toussez ou visage qui éternue, couvrez-vous la bouche…


  Je ne sais pas comment font les personnes métis mais on ne peut pas tousser ou se moucher. Sur le coup, les personnes handicapées ont dû moins rigoler. Toujours avec les emojis, quel est le drapeau de la France  ?  On est bien sur trois emojis différents qui ont une signification différente. Si vous n’utilisez pas le bon, il n’y aura pas le bon qui sera décrit à la personne. Si on a le drapeau de Saint-Martin, on perd l’utilisateur. En conclusion, je vous recommande de configurer correctement votre éditeur WYSIWYG et de former les contributeurs à l’accessibilité. Chacun de nous joue un rôle pour rendre le web accessible. Merci à tous. Si vous avez des questions, n’hésitez pas. 


  \- Merci. Je voulais savoir si CK editor était utilisable par d’autres outils qu’un Firefox classique ?  On peut rédiger du contenu avec une tablette braille, un lecteur d’écran  ? 


  \- Avec une tablette braille, on a les huit boutons    au-dessus la tablette. On a les 40 caractères là où la personne a ses doigts pour lire le contenu. Et au-dessus on a les 8 boutons qui permettent d’écrire en braille. Pour utiliser CK editor ils vont utiliser leur clavier pour tabuler.


  \- Merci pour ta présentation. A partir de quel moment on considère qu’un site est accessible  ?  J’ai souvent vu des pourcentages, hier il y avait une présentation, ils disaient «  90 % accessible »  ? 


  \- On se base sur le RGAA. Un site est accessible à partir du moment où les 106 critères sont respectées, c’est 100 %. Entre 50 et 99 % on va considérer que c’est partiellement conforme. Au niveau de la loi, le conforme, c’est 100 %.


  \- Je voulais savoir la différence entre les trois drapeaux de tout à l’heure.


  \- Visuellement il n’y en a pas. Mais par contre, c’est bien d’un point de vue sens de emojis qui sont différents. Visuellement on n’a pas de différence du tout. 


  \- Bonjour, merci pour la conférence. Je voulais connaître votre position par rapport à l’écriture inclusive. Je sais que c’est gênant pour les lecteurs d’écran.


  \- Il y a une recommandation qui est d’éviter le point médiant. On va dire par exemple «  les lecteurs et les lectrices » à la place des «  lecteur-rice ».


  \- Je vous questionnerais bien sur des outils disponibles pour le rédacteur. Je travaille dans ce contexte-là, je suis à la recherche d’outils pour permettre à des rédacteurs de passer derrière eux pour la ponctuation, en fonction du contexte. 


  Et du coup, des outils comme ça ou qui pourraient faire remonter des infos par exemple «  tu as un h3 manquant mais tu as un h2 et un h4 ».


  \- C’est compliqué, ça va dépendre des contextes. Il y a des extensions de navigateur qui vont le faire. Ce sont surtout des extensions de navigateur. On a par exemple WebText* qui remonte pas mal de chose sur une page web. 


  \- Je suis confronté à ce problème sur les sites, je travaille dans une collectivité qui s’occupe des personnes handicapées, c’est important d’avoir des sites accessibles. Il semblerait que maintenant l’Etat va se mettre à faire des contrôles avec des sanctions. On peut avoir des amendes si on n’est pas conforme et si on n’a pas fait d’audit de conformité. On peut avoir des amendes par site. Quand on a une usine à sites, ça peut faire cher. On est obligés aussi de faire des audits de conformité, de publier une déclaration de conformité et de faire faire un audit de contrôle, les modifications pour dire qu’on est conforme. C’est un point légal auquel on a été nous-mêmes sensibilisés il n’y a pas longtemps. On était conforme à 43 % pour le dernier site, on essaie de l’être au moins à 70 %. On refera un audit de contrôle derrière. Si on ne peut pas être conforme, on peut être partiellement conforme.


  \- Pour respecter la loi, il faut faire l’audit qui est valable 3 ans maximum, rédiger une déclaration d’accessibilité qui permet de lister les points ou les éléments non accessibles et mettre un point de contact pour les utilisateurs qui peuvent ne pas accéder à certains contenus. Vous devez leur permettre d’avoir un point de contact qui doit répondre sous un délai de 7 jours pour lui donner l’information. Vous devez vous engager et publier un schéma pluriannuel en ligne pour dire quels éléments vous allez    modifier sur votre site.


  \- Pour répondre concernant les outils, on n’en a pas trouvé. On a 120 sites en prod sur notre usine à sites. En fait on a viré tout ce qui pouvait poser problème sur le Ck editor. On a vachement bordé en amont pour qu’on sache qu’ils respectent a minima. C’est la seule solution    efficace qu’on ait trouvé là-dessus. 


  \- On a encore le temps pour quelques questions. Il y a encore des questions ? 


  \- Il y a des questions devant. 


  \- Merci pour la conférence, c’était très intéressant. J’ai vu qu’il y avait un assistant RGAA, il fait quoi exactement ?  Il y a des outils qui nous permettent de faire un check d’accessibilité  ? 


  \- Il y a Tana gourou* qui permet de le faire. Sinon, en gros, l’assistant RGAA, il va lister tous les critères du RGAA, si ça concerne un lien, il va mettre en avant tous les liens de la page.


  \- Nous, on peut déjà checker avec ça dans un premier temps ?  Je parle de sites qui existent déjà, pas en amont. Si on prend en amont, tous ces problèmes-là on a moins de souci.


  \- L’idéal c’est de le prendre en amont. Tanagourou\* ou Webtext\* ils sont pas mal. 


  \- Merci beaucoup. 


  \- Je voulais apporter une précision par rapport à CK Editor, il y a eu une présentation au dernier Drupal con, la personne parlait de la feuille de route et de l’amélioration de l’accessibilité de CK Editor et une mise à jour qui devrait arriver, c’est le contrôle de la hiérarchie des headers. Ça devrait être quelque chose qui est automatiquement vérifié dans la prochaine version. 


  \- Une dernière et après on arrête.


  \- Merci pour ta présentation. C’est hyper intéressant en tout cas. Je suis plus backend, mais ça m’intéresse quand même. Ce sont des problèmes qu’on peut tous rencontrer ici. Il y a déjà des initiatives de proposer peut-être des paragraphes déjà prêts, clé en main un peu ?  Par exemple le paragraphe pour les listes que tu as montré, ça peut être diffusé. Ça peut-être plein de choses. Je voulais savoir si des choses existent.


  \- Il y a des modules qui existent mais ils ne sont pas très complets. Je ne sais pas pour les paragraphes, je n’en sais rien. Je pourrai regarder.


  \- On va s’arrêter là. Vous pouvez applaudir.
type: conference
---
