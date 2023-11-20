<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Verificación de conectividad

    .cont_1_1
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          .cont_1_2
            p A partir del desarrollo de las infraestructuras tecnológicas, el personal encargado de la administración de la red realiza una verificación inicial antes del despliegue; esto para comprobar la instalación de los dispositivos periféricos y que su configuración cumpla con los requerimientos de la organización. Así mismo, se verifica la red de datos.
          p.mt-4 Para realizar esa actividad, los administradores cuentan con un conjunto de herramientas e instrumentos que pueden ser tanto físicos (cableado, dispositivos, conexiones, módems, etc.) como en #[em software] (configuraciones, comando, etc.), dicha comprobación debe ser documentada a fin de realizar futuras revisiones. La siguiente figura ilustra las características de cada tipo de inspección:
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-lg-12.col-md-6.col-7.d-none.d-lg-block
            img(src="@/assets/curso/tema1/1.png")
      .col-xl-8.m-auto.mt-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-in")
          h5 Figura 1.
          span Inspección física e inspección lógica
        figure.mt-4
          img(src="@/assets/curso/tema1/2.svg" alt="Gráfica que ilustra cada una de las dos formas de inspección: física y lógica o de software." data-aos="zoom-in-up")

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_1 1.1  Inspección física de la red

    .cont_1_3.pb-4.pb-lg-5
      p(data-aos="fade-right") La primera comprobación consiste en la revisión física de la red mediante un recorrido donde se inspecciona el estado de los cables, los conectores, los paneles y los adaptadores de red.
      p(data-aos="fade-left") Donde se requiera la inspección de la operatividad del cableado, se usan herramientas físicas para el testeo de la red; estos son:
      .tarjeta.p-4.p-lg-5.pb-lg-4.pb-4.mt-5.cont_slyder1
        SlyderA(tipo="b")
          .row
            .col-md-6.col-lg-8.mb-4.mb-md-0
              h5(style="color:#6E40FB;") Comprobadores de continuidad
              p.mt-4 También llamados #[em tester], polímetro o multímetro, esta herramienta se usa para realizar mediciones de continuidad del cableado. Entre estos se encuentran dos tipos: multímetro y medidor de potencia de fibra óptica.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema1/5.png')
          .row
            .col-md-6.col-lg-8.mb-4.mb-md-0
              h5(style="color:#6E40FB;") Multímetro digital
              p.mt-4 Mide magnitudes eléctricas (voltaje y corriente), algunos modelos miden también parámetros como temperatura (°C, °F), resistividad (Ω). Cuenta con dos cables de prueba usados para realizar la medición directa en el punto de conexión a verificar.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema1/6.png')
          .row
            .col-md-6.col-lg-8.mb-4.mb-md-0
              h5(style="color:#6E40FB;") Medidor de potencia de fibra óptica
              p.mt-4 Sirven para verificar el cableado de fibra óptica, permite medir pérdidas y niveles de potencia e inspeccionar.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema1/7.png')
          .row
            .col-md-6.col-lg-8.mb-4.mb-md-0
              h5(style="color:#6E40FB;") Comprobadores de red
              p.mt-4 Estas son herramientas que permiten comprobar el estado de conectividad física entre los dos extremos de los cables de red, la información que brinda esta prueba de continuidad, cruzamiento, terminales de conexión, entre otros.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema1/8.png')

    .row.mt-5
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/9.svg")
      .col(style="place-self:center;" data-aos="fade-left")
        p.mb-0 Por otro lado, al realizar la verificación física de los dispositivos de red como #[em switch, router], servidores, entre otros, se suele realizar una inspección rápida de los indicadores luminosos, comúnmente conocidos como LED, que proporcionan una vista rápida del estado de conexión del equipo.

    p.mt-4(data-aos="fade-right") Algunos identificadores LED que se encuentran en estos dispositivos son:

    .col-xl-8.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-in")
        h5 Tabla 1.
        span Indicadores LED
      .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
        table
          caption.mt-0.fw-normal(style="background-color:#F6F6F6;") Nota: tomado de Castaño (2013).
          thead(style="border:0;")
            tr(style="background-color:#6E40FB;")
              th.text-white.text-center(style="border:1px #fff solid;") LED
              th.text-white.text-center(style="border:1px #fff solid;") FUNCIÓN
          tbody
            tr(style="background-color:#E9E2FE;")
              td.p-3.fw-bold(style="border:1px #6E40FB solid;") Sistema o #[em Power]
              td.p-3(style="border:1px #6E40FB solid;") Indica si el equipo está encendido y conectado a la red eléctrica.
            tr(style="background-color:#fff;")
              td.p-3.fw-bold(style="border:1px #6E40FB solid;") Estado del enlace del puerto
              td.p-3(style="border:1px #6E40FB solid;") Se asocia a la conexión del dispositivo en la red.
            tr(style="background-color:#E9E2FE;")
              td.p-3.fw-bold(style="border:1px #6E40FB solid;") Modo del puerto
              td.p-3(style="border:1px #6E40FB solid;") Indica el modo de operación del puerto.
            tr(style="background-color:#fff;")
              td.p-3.fw-bold(style="border:1px #6E40FB solid;") Velocidad de transmisión
              td.p-3(style="border:1px #6E40FB solid;") Indica la velocidad de transmisión a la que opera el puerto.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_2 1.2  Inspección lógica de la red

    .row.mt-5
      .col(style="place-self:center;" data-aos="fade-right")
        p.mb-0 Es aquella que se implementa mediante #[em software]; permite verificar la conectividad lógica de la red. Esta inspección del sistema consta de comprobar que los parámetros de los dispositivos de dicha red estén correctamente configurados. Así, se puede revisar la comunicación interna y externa de los equipos en red.
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/10.svg")

    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/11.png")
      .col-lg-7(data-aos="fade-left" style="place-self:center;")
        p Dentro de las inspecciones lógicas de red se encuentran:
        ul.lista-ul.mt-3.ps-3
          li.d-flex
            i.fas.fa-angle-right(style="color:#6E40FB;")
            | Parámetros de red
          li.d-flex
            i.fas.fa-angle-right(style="color:#6E40FB;")
            div Comando #[em.fw-bold ping]
          li.d-flex
            i.fas.fa-angle-right(style="color:#6E40FB;")
            div Comando #[em.fw-bold tracert] y #[em.fw-bold traceroute]
          li.d-flex
            i.fas.fa-angle-right(style="color:#6E40FB;")
            div Comando #[em.fw-bold ARP]
          li.d-flex
            i.fas.fa-angle-right(style="color:#6E40FB;")
            div Comando #[em.fw-bold Route]
          li.d-flex
            i.fas.fa-angle-right(style="color:#6E40FB;")
            div Comando #[em.fw-bold Nslookup]

    .cont_1_4.mt-5.pt-4.pt-lg-5.pb-4.pb-lg-5
      h4.text-white.p-2.mb-0.ps-4.pe-4(style="max-width:fit-content;background-color:#6E40FC;border-radius:3px;" data-aos="fade-right") Parámetros de red
      p.mt-4(data-aos="fade-left") Para realizar dicha verificación se hace uso de los comandos del sistema #[em.fw-bold.text-white(style="background-color:#6E40FB;") ipconfig] en sistemas operativos Windows, o #[em.fw-bold.text-white(style="background-color:#6E40FB;") ifconfig] en sistemas operativos derivados de UNIX como Linux o MAC OS. Esta operación se realiza en el intérprete de comando conocido como #[strong.fw-bold.text-white(style="background-color:#6E40FB;") cmd.exe] o símbolo del sistema, su invocación muestra los parámetros básicos de la configuración TCP/IP de las interfaces de red habilitadas en los equipos de cómputo o estaciones de trabajo:

      .col-xl-11.m-auto.mt-5
        .row
          .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
            figure.m-auto.col-4.col-md-5.col-lg-12.d-none.d-lg-block
              img(src="@/assets/curso/tema1/12.png")
          .col-lg-9(data-aos="fade-left" style="place-self:center;")
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-in")
              h5 Figura 2.
              span Comando #[em ipconfig]
            figure
              img(src="@/assets/curso/tema1/13.png" alt="Imagen de la ejecución del comando ipconfig en un equipo con sistema operativo Windows." data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-right") Dentro de los parámetros de red a visualizar se tienen la dirección IP, la máscara de subred y la puerta de enlace predeterminada o #[em Gateway].
    p.mt-4(data-aos="fade-left") Cuando se desee conocer mayor información de la configuración TCP/IP del equipo se puede recurrir a los siguientes comandos del sistema:

    .col-xl-8.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-in")
        h5 Tabla 2.
        span Comandos del sistema
      .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
        table
          caption.mt-0.fw-normal(style="background-color:#F6F6F6;") Nota: tomado de Castaño (2013).
          thead(style="border:0;")
            tr(style="background-color:#6E40FB;")
              th.text-white.text-center(style="border:1px #fff solid;") Windows
              th.text-white.text-center(style="border:1px #fff solid;") UNIX
          tbody
            tr(style="background-color:#E9E2FE;")
              td.p-3(style="border:1px #6E40FB solid;") #[em.fw-bold ipconfig/all]: muestra la información detallada de las interfaces del equipo
              td.p-3(style="border:1px #6E40FB solid;") #[em.fw-bold ifconfig-a]: muestra la información detallada de las interfaces del equipo. #[br] #[em.fw-bold ifconfig interfaz]: Informar sobre una interfaz determinada
            tr(style="background-color:#fff;")
              td.p-3(style="border:1px #6E40FB solid;") #[em.fw-bold ipconfig/release]: permite borrar la configuración actual del adaptador de red
              td.p-3(style="border:1px #6E40FB solid;") #[em.fw-bold ifconfig interfaz address dirección_IP netmask máscara]: Permite modificar los parámetros de acceso a la red de una interfaz según las especificaciones de dirección_IP y máscara configurados
            tr(style="background-color:#E9E2FE;")
              td.p-3(style="border:1px #6E40FB solid;") #[em.fw-bold Ipconfig/renew]: permite volver a cargar la configuración del adaptador de red
              td.p-3(style="border:1px #6E40FB solid;") #[em.fw-bold Ifconfig interfaz up]: habilita la interfaz indicada. #[br] #[em.fw-bold Ifconfig interfaz down]: deshabilita la interfaz indicada.

    .cont_1_3.pb-4.pb-lg-5.mt-5
      h4.text-white.p-2.mb-0.ps-4.pe-4(style="max-width:fit-content;background-color:#6E40FC;border-radius:3px;" data-aos="fade-right") Comando #[em ping]
      p.mt-4(data-aos="fade-left") #[em.fw-bold Ping] (#[em.fw-bold Packet Internet Groper]) está presente tanto en sistemas operativos Windows como en UNIX y en los sistemas operativos de red de algunos routers. El comando #[em ping] emplea el protocolo ICMP (Protocolo de control y notificación de errores) que está implementado por el modelo TCP/IP.
      .row.mt-5
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
          p Para verificar la conectividad de los dispositivos en red se especifica la dirección IP del dispositivo destino con el que se quiere establecer la conexión; si el comando #[em ping] no recibe respuesta, esto indica un problema de conectividad que se encuentra ubicado en algún elemento del nivel físico o de red, o en la misma configuración de red del equipo origen o destino.
          figure.mt-4.m-auto.col-6.col-md-6.col-lg-12
            img(src="@/assets/curso/tema1/14.svg")
        .col-lg-7(data-aos="fade-left")
          .tarjeta.p-4.p-lg-5.pb-lg-4.pb-4.cont_slyder1
            SlyderA(tipo="b")
              .row.m-0
                .titulo-sexto.color-acento-contenido
                  h5 Figura 3.
                  span Comando #[em ping] a dirección IP
                figure
                  img(src='@/assets/curso/tema1/15.png' alt="Imagen de la ejecución de una prueba ping.")
              .row.m-0
                .titulo-sexto.color-acento-contenido
                  h5 Figura 4.
                  span Ejecución del comando #[em ping] a URL
                figure
                  img(src='@/assets/curso/tema1/16.png' alt="Imagen de la ejecución del comando ping a la URL www.google.com.co en un equipo con sistema operativo Windows.")

    p.mt-5(data-aos="fade-right") Al usar el comando #[em ping], este envía un mensaje ICMP con una solicitud de #[strong.fw-bold.text-white(style="background-color:#6E40FB;") echo] al equipo destino. Los resultados emitidos están conformados por el número de paquetes que se envían de origen a destino, los paquetes recibidos y los paquetes perdidos, incluyendo el tiempo de ida y vuelta de los paquetes medido en milisegundos. Si la conexión a internet es la correcta se obtiene una respuesta donde los paquetes perdidos representan el 0 %.

    h4.text-white.p-2.mb-0.ps-4.pe-4.mt-5(style="max-width:fit-content;background-color:#6E40FC;border-radius:3px;" data-aos="fade-right") Comando #[em tracert] y #[em traceroute]
    p.mt-4(data-aos="fade-left") El comando #[strong.fw-bold.text-white(style="background-color:#6E40FB;") #[em tracert]] para sistemas operativos Windows y #[strong.fw-bold.text-white(style="background-color:#6E40FB;") #[em traceroute]] para sistemas operativos UNIX como MAC OS o Linux y para sistemas operativos de red de algunos #[em routers], es una herramienta de diagnóstico que permite rastrear el recorrido de los paquetes y los tiempos de retardo que se producen. Al aplicar el comando, este muestra los datos de los dispositivos de red y los nodos por los que pasa y el tiempo que toma cada salto hasta conseguir llegar al destino.
    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.mt-4.m-auto.col-6.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/17.png")
      .col-lg-7(data-aos="fade-left")
        p En sistemas Windows, para ejecutar este comando, se abre una ventana del sistema #[strong.fw-bold.text-white(style="background-color:#6E40FB;") cmd.exe] o símbolo del sistema. Allí, digitar la siguiente línea: #[strong.fw-bold.text-white(style="background-color:#6E40FB;") #[em tracert]] #[em URL_pagina_web].
        .titulo-sexto.color-acento-contenido.mt-4
          h5 Figura 5.
          span Comando #[em tracert]
        figure
          img(src='@/assets/curso/tema1/18.png' alt="Ejecución del comando tracert a la URL www.google.com.co en un equipo con sistema operativo Windows.")

    p.mt-5(data-aos="fade-right") La figura siguiente, detalla más y mejor la ejecución del comando #[em tracert] y #[em traceroute]:

    .col-xl-10.m-auto.mt-4
      .p-3.p-lg-4(style="background-color:#E9E2FE;")
        .titulo-sexto.color-acento-contenido.mt-4
          h5 Figura 6.
          span Comando #[em tracert y traceroute]
        .row
          .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema1/19.svg' alt="Gráfica que muestra la estructura de una prueba de la ruta desde el host B hacia un host remoto D, en la ejecución del comando tracert y traceroute.")
          .col-lg-4(data-aos="fade-left")
            .h-100.d-flex.flex-wrap.align-content-center.p-4.p-xl-5(style="background-color:#CCBCFD;")
              p.mb-0 Las columnas con la información que se muestra en la pantalla después de la ejecución del comando #[em Tracert indica], respectivamente: primera columna el número de saltos, las siguientes tres columnas el tiempo de respuesta de los paquetes que son enviados, donde el símbolo del asterisco (*) indica que no se obtuvo respuesta, y la última columna indica la dirección IP del nodo por el que pasa el paquete.

    .cont_1_4.mt-5.pt-4.pt-lg-5.pb-4.pb-lg-5
      h4.text-white.p-2.mb-0.ps-4.pe-4(style="max-width:fit-content;background-color:#6E40FC;border-radius:3px;" data-aos="fade-right") Comando ARP
      p.mt-4(data-aos="fade-left") El comando ARP, (Protocolo de resolución de direcciones) permite obtener la información de la tabla ARP del dispositivo en red.
      .titulo-sexto.color-acento-contenido.mt-4(data-aos="fade-in")
        h5 Figura 7.
        span Comando ARP
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/20.png" alt="Imagen de la ejecución del comando arp -a en un equipo con sistema operativo Windows.")
        .col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-wrap.align-content-center.p-4(style="background-color:#B0C5FD;")
            figure
              img(src="@/assets/curso/tema1/21.svg" style="max-width:70px;display:inline;")
            p.mt-3.mb-0 Como sugiere la imagen del comando ARP, la tabla contiene una asociación de dirección IPv4 con su correspondiente dirección MAC o dirección física, incluido el tipo de direccionamiento IP (estático o dinámico). Para la ejecución del comando ARP se usa la ventana cmd.exe digitando la siguiente línea: arp -a.

    h4.text-white.p-2.mb-0.ps-4.pe-4.mt-5(style="max-width:fit-content;background-color:#6E40FC;border-radius:3px;" data-aos="fade-right") Comando #[em Route]
    p.mt-4(data-aos="fade-right") Este comando es una herramienta del sistema que permite la consulta de las tablas de enrutamiento del equipo en red.

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-in")
        h5 Figura 8.
        span Comando #[em Route print]
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema1/22.png" alt="Imagen de la ejecución del comando route print en un equipo con sistema operativo Windows.")

    p.mt-5(data-aos="fade-right") Para consultar la información en sistemas operativos Windows en la ventana #[em.fw-bold cmd.exe] digitar la siguiente línea: #[em.fw-bold route print], para sistemas derivados de UNIX digitar la línea: #[em.fw-bold route -n].

    .cont_1_5.mt-5.pt-4.pt-lg-5.pb-4.pb-lg-5
      h4.text-white.p-2.mb-0.ps-4.pe-4(style="max-width:fit-content;background-color:#6E40FC;border-radius:3px;" data-aos="fade-right") Comando #[em Nslookup]
      p.mt-4(data-aos="fade-left") Este comando es una herramienta del sistema que permite la comprobación del correcto funcionamiento del servidor DNS. La información asocia el nombre de dominio consultado a su respectiva dirección IPv4 o IPv6 según sea el caso.
      .titulo-sexto.color-acento-contenido.mt-4(data-aos="fade-in")
        h5 Figura 9.
        span Comando #[em nslookup]
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/23.png" alt="Imagen de la ejecución del comando nslookup facebook.com en un equipo con sistema operativo Windows.")
        .col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-wrap.align-content-center.p-4(style="background-color:#B0C5FD;")
            figure
              img(src="@/assets/curso/tema1/21.svg" style="max-width:70px;display:inline;")
            p.mt-3.mb-0 La ejecución del comando se puede realizar de dos formas una interactiva donde en sistemas operativos Windows en la consola cmd.exe se digita: #[em nslookup], al presionar la tecla enter se realizará una conexión con el servidor DNS y aquí se puede realizar la consulta digitando la URL. De otra forma no interactiva se digita el comando directamente en la consola cmd.exe, por ejemplo: #[em nslookup facebook.com].
      p.mt-5(data-aos="fade-right") En el siguiente video se explican algunos de los comandos de red en Windows que pueden ser usados para verificar la conectividad de la red:
      figure.mt-4(data-aos="zoom-im-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/vGY6pwvgEUk?si=5N4a0X5RLXo8nhNX" title="Comandos de red en Windows" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Comandos de red en Windows









</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 60%
  background-color: #E9E2FE
  top: 15%
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 20%
  left: 0
  height: 55%
  background-color: #E9E2FE
  top: 0
.cont_1_3, .cont_1_3 *
  position: relative
.cont_1_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/3.png)
  background-size: cover
  background-repeat: no-repeat
.cont_slyder1
  box-shadow: 0px 8px 30px 10px rgba(150,178,253,.46)
  background: url(../assets/curso/tema1/4.png)
  background-size: cover
  background-repeat: no-repeat
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #F9305F
  background-image: url(../assets/curso/tema1/arrow_white.svg) !important
.slyder-a__bullets__item
  background-color: #DED4FF
.slyder-a__bullets__item--active
  background-color: #FC98B0 !important
  border-color: #FC98B0 !important
.cont_1_4, .cont_1_4 *
  position: relative
.cont_1_4:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  background-color: #DDE6FE
  top: 0
.cont_1_5, .cont_1_5 *
  position: relative
.cont_1_5:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 75%
  background-color: #F6F6F6
  top: 0
</style>
