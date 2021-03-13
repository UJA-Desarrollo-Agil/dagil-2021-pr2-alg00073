// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "5963acba-71dc-11eb-9439-0242ac130002";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000;

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500;

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500;

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
  start: new undum.SimpleSituation(
    "<h1>INICIO</h1>\
    <p>Estás en la piel de Alberto Longo, un \"estudiante\" de Ingeniería Informática en la Universidad de Jaén... \
    Aunque todos saben que eres un detective en secreto, o al menos, eso piensas (aunque es algo ilógico ya que se supone que es secreto). Es temprano en la mañana, todavía \
    no es la hora de levantarse. Sin embargo, un ruido extraño te desvela, pero no sabes si <a href='nodespertar' class='once'>seguir durmiendo</a> o \
    <a href='./levantarte'>levantarte</a> para comprobar de donde ha venido ese extraño ruido.</p>",
    {
      actions: {
        levantarte: function enter(character, system, action) {
          system.setQuality("misionuno", true);
          system.setQuality("pistauno", true);
          system.doLink("levantarte");
        },
      },
    }
  ),
  levantarte: new undum.SimpleSituation(
    "<p>Nada mas escuchar el ruido, tu instinto detectivesco se activa y te levantas. Echas un vistazo a tu alrededor aun con legañas en los ojos. \
    Logras apreciar que en tu escritorio están todos los papeles desordenados, pero vives solo, \
    y tú no recuerdas haber tocado esos papeles. Son teoría de Desarrollo Agil, ni que fueras a estudiar SCRUM... \
    Por lo que solo queda una <a href='cuarto' class='once'>opción</a>, ¡alguien ha entrado en tu cuarto y debes averiguarlo!</p>"
  ),
  cuarto: new undum.SimpleSituation(
    "<h1>CUARTO</h1>\
    <p>Aquí comienza tu verdadera aventura, una historia digna de un detective de primera categoría, que en este caso, \
    casualmente eres tú. Estas en tu cuarto, puedes <a href='./echarvistazo' class='once'>echar otro vistazo</a>, \
    <a href='./revisarcajon' class='once'>revisar el cajón</a>, \
    <a href='cocina'>ir a la cocina</a> o <a href='entrada'>ir a la entrada</a>.</p>",
    {
      actions: {
        echarvistazo: function enter(character, system, action) {
          system.setQuality("pistados", true);
          system.write(
            "<p>Investigas tu habitación con tu perfecto ojo de detective y observas\
            que tu ventana está abierta, ¿alguien entró en tu cuarto por ella?</p>"
          );
          system.setCharacterText(
            "<p>¡Ventana abierta! Tienes el pulso acelerado, has encontrado tu primer pista, desde que pensaste que el \
            profesor de Desarrollo Agil era un alienígena... Espera, eso no tiene nada que ver.</p>"
          );
        },
        revisarcajon: function enter(character, system, action) {
          system.write(
            "<p>¡EUREKA! El cajón, el sitio perfecto donde un ladrón o asesino dejaría una pista sobre su paradero. \
            Sin embargo, buscas y rebuscas, y solo encuentras calcetines.</p>"
          );
          system.setCharacterText(
            "<p>Qué mal huelen los calcetines joder, cómo es posible que huelan tan mal.</p>"
          );
        },
      },
    }
  ),
  nodespertar: new undum.SimpleSituation(
    '<h1>FINAL (Algo patético...)</h1>\
    <p>A pesar de haber escuchado un ruido extraño, sigues durmiendo plácidamente, ya que nada \
    se va a interponer entre tú y el maravilloso sueño que estas teniendo sobre como eres el **** \
    amo sin levantarte de la cama siquiera... Sin embargo, como ya sabes, los sueños duran aproximadamente \
    cinco minutos y te levantas después, de vuelta a la normalidad... El título de este juego podría \
    haberse llamado "La proyección de los sueños frustrados de Alberto" y encajaría a la perfección.</p>'
  ),
  cocina: new undum.SimpleSituation(
    "<h1>COCINA</h1>\
    <p>Avanzamos de posición, ahora estás en la cocina. No sueles limpiarla por costumbre, pensando que tu madre algún día \
    resucitará para limpiar los platos de una maldita vez... Pero no es tiempo para lamentos, puedes <a href='./lavadora' class='once'>mirar la lavadora</a>, \
    <a href='./despensa' class='once'>mirar la despensa</a> o <a href='cuarto'>volver a tu cuarto</a>.</p>",
    {
      actions: {
        lavadora: function enter(character, system, action) {
          system.setQuality("llaves", true);
          system.write(
            "<p>Menos mal que eres un genio detective, porque a nadie se le ocurriría mirar en la lavadora. \
            Estabas buscando tus pantalones favoritos pero sin embargo encontraste tus llaves, ¿qué harían allí las llaves?</p>"
          );
          system.setCharacterText(
            "<p>Cuaderno de bitácora: Día 1920. Sigues sin encontrar tus pantalones, comienzas a pensar que lo metistes al horno \
            sin querer. Ya decías que la comida sabía rara, aunque le daba un toque peculiar.</p>"
          );
        },
        despensa: function enter(character, system, action) {
          system.setQuality("misiondos", true);
          system.write(
            "<p>Tanta investigación te está dejando hambriento, quieres hacerte un super mega desayuno con tus cereales favoritos... \
            Pero parece ser que ese maldito ladrón ha robado tus cereales, ese villano es un ser totalmente maquiavélico... \
            Pero aun así sigues teniendo hambre, tienes que comprar cereales.</p>"
          );
          system.setCharacterText(
            "<p>Te duele profundamente que ese villano te haya robado tus cereales... Aunque no estas seguro del todo porque \
            no recuerdas haber comprado cereales en los ultimos tres meses.</p>"
          );
        },
      },
    }
  ),
  entrada: new undum.SimpleSituation(
    "<h1>ENTRADA</h1>\
    <p>Estas en la entrada de tu casa, te das cuenta de que la decoración de tu casa podría ser mucho mejor...</p>",
    {
      enter: function (character, system, from) {
        if (character.qualities.llaves && character.qualities.misiondos) {
          system.doLink("entradabien");
        } else if (character.qualities.llaves && !character.qualities.misiondos) {
          system.doLink("entradamaluno");
        } else if (!character.qualities.llaves && character.qualities.misiondos) {
          system.doLink("entradamaldos");
        } else {
          system.doLink("entradamaltres");
        }
      },
    }
  ),
  entradabien: new undum.SimpleSituation(
    "<p>Pero no es tiempo de ponerse a criticar la estética de tu pequeña y acogedora casa, \
            tienes las llaves y una misión que cumplir, comprar cereales, así que puedes <a href='cuarto'>volver a tu cuarto</a> o \
            <a href='salir'>salir a por cereales</a>.</p>"
  ),
  entradamaluno: new undum.SimpleSituation(
    "<p>Podrías salir a la calle, pero salir a la calle sin motivo y cansarse es algo que no está en tus principios. \
            Puedes <a href='cuarto'>volver a tu cuarto</a>.</p>"
  ),
  entradamaldos: new undum.SimpleSituation(
    "<p>Justo cuando vas a abrir la puerta, te das cuenta de que la puerta está cerrada y no sabes donde has dejado las llaves... \
            Puedes <a href='cuarto'>volver a tu cuarto</a>.</p>"
  ),
  entradamaltres: new undum.SimpleSituation(
    "<p>No tienes nada que hacer aquí. Puedes <a href='cuarto'>volver a tu cuarto</a>.</p>"
  ),
  salir: new undum.SimpleSituation(
    "<h1>CALLE</h1>\
    <p>Esto ya son palabras mayores, al fin llevas tu investigación un paso mas allá. Además, tomar algo de vitamina D no te vendría mal, te lo recomendó el médico. \
    Estas en la calle, pero no sabes por donde ir para comprar cereales, se te olvidó. Puedes ir por el camino de la <a href='gato'>izquierda</a> o \
    por la <a href='derecha1'>derecha</a>.</p>"
  ),
  gato: new undum.SimpleSituation(
    "<p>Mientras caminabas por la calle pensando en la investigación (contando cuantas baldosas avanzas de un solo paso), \
    te encuentras un gato monísimo, puedes <a href='./acariciar-gato' class='once'>acariciar al gato</a> o \
    <a href='tienda' class='transient'>pasar de largo</a> e ir directamente a la tienda</p>",
    {
      actions: {
        "acariciar-gato": function enter(character, system, action) {
          system.doLink("gatomalo");
          system.setCharacterText(
            "<p>Solo Tenías una misión en la vida, acariciar a ese precioso michi, ¿por qué todo te sale mal?</p>"
          );
        },
      },
    }
  ),
  gatomalo: new undum.SimpleSituation(
    "<p>Te ha arañado la cara :(, gato malo, pero siempre puedes ir a la <a href='tienda'>tienda</a>.</p>"
  ),
  derecha1: new undum.SimpleSituation(
    "<p>Empiezas a caminar y descubres que has llegado de nuevo a tu casa, ni tú eres capaz de concebir el hecho de que seas tan... \
    peculiar, pero siempre puedes ir por el camino de la <a href='gato'>izquierda</a>.</p>"
  ),
  tienda: new undum.SimpleSituation(
    "<h1>TIENDA</h1>\
    <p>Estas en la tienda, te inunda un aire a viejo leyendo revistas de prensa rosa y \
    niños escondiendose caramelos en los calzoncillos... ¡Qué alegría da estar aquí! \
    Vas a la zona de cereales y te enfrentas a la mayor decisión que jamás tomarás en tu vida... \
    <a href='./cereales1' class='once'>cereales crunchy roll de aguacate</a> o <a href='./cereales2' class='once'>crujientes de foie gras de pato</a>.</p>",
    {
      actions: {
        cereales1: function enter(character, system, action) {
          system.doLink("cerealesuno");
          system.setCharacterText("<p>Ñam, cerealitos.</p>");
        },
        cereales2: function enter(character, system, action) {
          system.doLink("cerealesdos");
          system.setCharacterText(
            "<p>El que no arriesga no gana, y el que no come, no caga, eso está claro.</p>"
          );
        },
      },
    }
  ),
  cerealesuno: new undum.SimpleSituation(
    "<p>Estos cereales siempre salían en la tele, ¡que guay!, ahora a <a href='pagar'>pagar</a>.</p>"
  ),
  cerealesdos: new undum.SimpleSituation(
    "<p>Probablemente tu peor decisión, pero el que no arriesga no gana, ahora a <a href='pagar'>pagar</a>.</p>"
  ),
  pagar: new undum.SimpleSituation(
    "<p>Te diriges a la caja registradora con tu magnífica caja de cereales, la pones encima \
    del mostrador, y una hermosa señorita de unos 56 años te observa con cara rara. Mientras te indica el precio, \
    tú, sacas la cartera y observas que no tienes dinero... ¡Ese ladrón tambien te robó el dinero!, así que tienes \
    dos opciones, o <a href='./correr'>correr y robarlo</a> o <a href='./contarhistoria'>intentas convencerle</a></p>",
    {
      actions: {
        correr: function enter(character, system, action) {
          system.doLink("guantazo");
          system.setCharacterText(
            "<p>Miralo por el lado bueno, ¡del guantazo te explotó ese grano que llevabas días intentando explotar!</p>"
          );
        },
        contarhistoria: function enter(character, system, action) {
          system.doLink("historieta");
          system.setCharacterText(
            "<p>¡Tras llevarte tu caja de cereales fiada te sientes un verdadero maestro de la oratoría!</p>"
          );
        },
      },
    }
  ),
  guantazo: new undum.SimpleSituation(
    "<p>Te ha pillado en el mismo segundo que lo pensaste y del guantazo que \
            te ha dado, te dejó plantado en el sitio, asi que decides poner carita de pena y\
             <a href='historieta'>contarle tu historia</a>.</p>"
  ),
  historieta: new undum.SimpleSituation(
    "<p>Dejo de escucharte cuando empezaste a decir no se qué de ladrones, pero para tu sorpresa, \
            te concedió la posibilidad de llevartelo siempre y cuando se lo des en otro momento \
            con un doscientos porciento de interés, ¡menudo chollo!, así que decides <a href='salir2'>salir a la calle</a> \
            con tus expléndidos cereales.</p>"
  ),
  salir2: new undum.SimpleSituation(
    "<h1>CALLE</h1>\
    <p>Qué frío hace. Puedes volver por el camino de la <a href='./nota'>izquierda</a> o \
    por la <a href='derecha2'>derecha</a>.</p>",
    {
      actions: {
        "nota": function enter(character, system, action) {
          system.setQuality("pistatres", true);
          system.doLink("notilla");
        },
      },
    }
  ),
  notilla: new undum.SimpleSituation(
    "<p>Caminando por la calle te encuentras una nota que dice así: </p>\
    <i class='dialogo personaje'>\"Como el sol, amanezco, como un sol, no te merezco, si no te veo, oscurezco, te cuento un cuento, y desaparezco.\"</i> \
    <p>Vaya nota mas rara... Esto solo pudo haberlo escrito.. ¡Un ladrón!, \
    ¡probablemente sea el que entró en tu casa! Pese a todo, <a href='fin'>vuelves a tu casa</a></p>"
  ),
  derecha2: new undum.SimpleSituation(
    "<p>Por el camino pisaste una mierda... pues nada, solo eso. Puedes probar continuar por <a href='notilla'>el otro camino</a>, \
    o <a href='fin'>volver directamente a casa</a>.</p>"
  ),
  fin: new undum.SimpleSituation(
    "",
    {
      enter: function (character, system, from) {
        if (character.qualities.pistados && character.qualities.pistatres) {
          system.doLink("finaltocho");
        } else {
          system.doLink("finalpocho");
        }
      },
    }
  ),
  finaltocho: new undum.SimpleSituation(
    "<h1>FINAL VERDADERO</h1>\
    <p>Al fin llegas a tu casa despues de un día tan duro... (solo te despertaste y fuiste a comprar cereales). Te encuentras \
    alegre, porque estas muy cerca de resolver el misterio de esta mañana, has reunido suficientes pistas. Sin embargo, \
    cuando llegas a la puerta de tu casa, observas la ventana abierta de tu cuarto desde el portal. Sin quererlo ni pensarlo \
    lágrimas comienzan a deslizarse por tu mejilla. Te sientes totalmente derrumbado. No es la primera vez que te sientes así, pero esta vez sientes \
    un vacío interno profundamente, ya que te duele admitir que no existía ningún ladrón que entró en tu casa. La nota extraña \
    la escribiste tú mismo una noche la cual te sentías bohemio, aun así totalmente carente de sentido. Apareció en la calle \
    al volarse por la ventana abierta, al igual que los apuntes del escritorio. No eres un detective, solamente niegas la \
    realidad fingiendo para evitarla. Cada día finges un nuevo misterio que resolver, preso de tus propios pensamientos, al \
    igual que Teddy que nunca podrá salir de la isla, o los prisioneros de la caverna que jamás conocerán la realidad mas allá de las sombras. \
    Sin embargo, prefieres vivir ignorante a enfrentarte a la realidad.</p>"
  ),
  finalpocho: new undum.SimpleSituation(
    "<h1>FINAL FALLIDO</h1>\
    <p>Al fin llegas a tu casa despues de un día tan duro... (solo te despertaste y fuiste a comprar cereales). A pesar de que \
    estuviste reuniendo diferentes pistas, al llegar a casa sigues sin averiguar quien fue el ladrón. ¿Quizás fue el perro del vecino?, \
    ese perro siempre te estuvo mirando mal desde que le quitaste el cuenco de comida, pero qué ibas a hacer, ¿pasar hambre cuando el perro \
    siempre se dejaba las galletitas verdes del pienso para perros? Sin embargo, no logras conjeturar ninguna evidencia clara ante las pistas presentes. \
    ¡Bueno! Mañana será otro día en el que podrás descubrir este apasionante misterio, al fin y al cabo, le estas pillando el gustillo a esto \
    de trabajar como detective privado.</p>"
  ),
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
  misionuno: new undum.OnOffQuality("¡Descubrir ladrón!", {
    priority: "0001",
    group: "misiones",
    onDisplay: "&#10003;",
  }),
  misiondos: new undum.OnOffQuality("¡Comprar cereales!", {
    priority: "0002",
    group: "misiones",
    onDisplay: "&#10003;",
  }),
  pistauno: new undum.OnOffQuality("¡Papeles desordenados!", {
    priority: "0001",
    group: "pistas",
    onDisplay: "&#10003;",
  }),
  pistados: new undum.OnOffQuality("¡Ventana abierta!", {
    priority: "0002",
    group: "pistas",
    onDisplay: "&#10003;",
  }),
  pistatres: new undum.OnOffQuality("¡Nota en la calle!", {
    priority: "0003",
    group: "pistas",
    onDisplay: "&#10003;",
  }),
  llaves: new undum.OnOffQuality("Llaves", {
    priority: "0001",
    group: "inventario",
    onDisplay: "&#10003;",
  }),
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
  misiones: new undum.QualityGroup("Misiones", { priority: "0001" }),
  pistas: new undum.QualityGroup("Pistas", { priority: "0002" }),
  inventario: new undum.QualityGroup("Inventario", { priority: "0003" }),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
  system.setQuality("misionuno", false);
  system.setQuality("misiondos", false);
  system.setQuality("pistauno", false);
  system.setQuality("pistados", false);
  system.setQuality("pistatres", false);
  system.setQuality("llaves", false);
  system.setCharacterText("<p>¡Comienza tu trepidante aventura!</p>");
};
