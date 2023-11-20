<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Verificación de red

    p(data-aos="fade-right") Para abordar la gestión de redes en sí, hay que considerar primero algunos escenarios a manera de ejemplo, en el cual componentes complejos del sistema interactúan y son inspeccionados, gestionados y monitoreados por un supervisor.
    .cont_3_1.mt-4.pb-5
      figure(data-aos="zoom-in-down")
        img(src="@/assets/curso/tema3/1.png")
      .row.m-0(style="box-shadow: 0px 10px 25px 10px rgba(150,178,253,.46)" data-aos="zoom-in-up")
        .col-lg.mb-4.mb-lg-0.pe-lg-0.ps-lg-0
          .h-100.bg-white.p-4.p-lg-5
            p.mb-0 El primer escenario a estudiar es el caso del panel de control de un avión, el cual le permite al piloto monitorear las variables operativas y analizar los datos para asegurar que los dispositivos estén operando dentro de los límites.
        .col-lg.mb-4.mb-lg-0.pe-lg-0.ps-lg-0
          .h-100.p-4.p-lg-5(style="background-color:#D9F6FE;")
            p.mb-0 Como segundo escenario, se tiene una planta de generación de energía eléctrica, esta tiene una sala de control donde los diales, medidores y luces monitorean el estado de las variables a verificar (presión, flujo, temperatura, entre otros) en las tuberías, válvulas, contenedores y otros componentes del sistema. Estos dispositivos de monitoreo le permiten al operador tomar acciones en caso de presentarse problemas inminentes.
        .col-lg.mb-4.mb-lg-0.ps-lg-0.pe-lg-0
          .h-100.bg-white.p-4.p-lg-5
            p.mb-0 En una forma similar, el administrador de la red supervisará, gestionará y controlará prontamente el sistema que se le confía. La verificación de la red incluye un monitoreo de red en un sentido más amplio indica la forma de supervisar de forma constante la funcionalidad de la red a fin de garantizar que los parámetros cumplen con las especificaciones del diseño de la organización.

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/3.svg")
      .col-lg-8(data-aos="fade-left")
        p Cuando un administrador encuentra un problema de red, puede ejecutar algunas verificaciones del sistema realizando inspección física o lógica, a fin de localizar el origen del problema y ajustar la configuración del sistema. Se puede optar por un reinicio del #[em hardware] o #[em software] o acceder de forma remota.
        .p-4.mt-4(style="background-color:#CCBCFD;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/4.svg")
            .col(style="place-self:center;" data-aos="fade-left")
              p.mb-0 Las redes privadas y públicas han crecido de pequeñas redes a una gran infraestructura global, la necesidad de administrar la gran cantidad de componentes de #[em hardware] y #[em software] dentro de estas redes, de manera más sistemática, también se ha vuelto una tarea más importante. Además, en los sistemas informáticos se pueden configurar a fin de monitorear la red con avisos y alarmas que se envíen de forma automática al administrador de la red.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_3_1 3.1  Monitoreo de rendimiento

    .cont_3_2.pb-4.pb-lg-5
      p(data-aos="fade-right") Los monitoreos de rendimiento permiten analizar el rendimiento de la red. Son útiles a la hora de verificar las funciones de los dispositivos que se monitoreen.
      p(data-aos="fade-left") Dentro de los parámetros de rendimiento de la red, usualmente monitoreados, se encuentran:
      .tarjeta.p-4.p-lg-5.pb-lg-4.pb-4.mt-5.cont_slyder1
        SlyderA(tipo="b")
          .row
            .col-md-6.col-lg-8.mb-4.mb-md-0
              h5(style="color:#6E40FB;") Estado de la CPU
              p.mt-4 De acuerdo a las funcionalidades de la red, los dispositivos continuamente están transmitiendo paquetes de datos o tramas; debido a esto, el sistema puede sobrecargarse por la cantidad de servicios que se prestan como DHCP, DNS, cortafuegos, entre otros. El monitoreo permite verificar el rendimiento del procesador. Llegado el caso de presentarse una bajada en el rendimiento, el administrador tomará las acciones con el fin de solucionar.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/5.png')
          .row
            .col-md-6.col-lg-8.mb-4.mb-md-0
              h5(style="color:#6E40FB;") Uso de la memoria
              p.mt-4 La información de la red, como tablas de enrutamiento, se almacena en la memoria de los dispositivos de la capa de red. Esta gran cantidad de información puede ocasionar que se colapse el almacenamiento interno, por tal motivo, el rendimiento de la red se verá afectado ocasionando pérdida de paquetes en la transmisión de datos o caída de los servicios de red.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/6.png')
          .row
            .col-md-6.col-lg-8.mb-4.mb-md-0
              h5(style="color:#6E40FB;") Tipo de tráfico
              p.mt-4 El monitoreo del tráfico de la red resulta útil para detectar posibles congestiones o un exceso de solicitudes de servicios como HTTP o DHCP.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/7.png')

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_3_2 3.2  Monitoreo de red

    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Dentro de las fases más largas de la ejecución y puesta en marcha de sistemas informáticos, está la monitorización de la red, la cual permite la supervisión a fin de detectar posibles fallas en la red y verificar su correcto funcionamiento.
        .p-4.mt-4(style="background-color:#CCBCFD;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/8.svg")
            .col(style="place-self:center;" data-aos="fade-left")
              p.mb-0 El monitoreo de red no es exclusivo para organizaciones con infraestructuras de red extensas; también es necesario y conveniente realizar una supervisión en redes con pocos dispositivos a fin de detectar problemas que afecten los servicios prestados por la empresa.
      .col-lg-5(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12.d-none.d-lg-block
          img(src="@/assets/curso/tema3/9.png")

    .cont_3_3.mt-5
      .col-xl-8.m-auto
        .titulo-sexto.color-acento-contenido(data-aos="fade-in")
          h5 Figura 10.
          span Elementos a monitorear en red
        figure.p-4.cont_figura1(data-aos="zoom-in-up" style="box-shadow: 0px 8px 30px 10px rgba(150,178,253,.46)")
          .col-xl-11.m-auto
            img(src="@/assets/curso/tema3/11.svg" alt="Figura que ilustra los elementos susceptibles de monitoreo en una red informática.")
            figcaption.fw-normal.mt-3(style="background-color:#F6F6F6;") Nota: adaptado de Castaño (2013).
      p.mt-5(data-aos="fade-right") Entre las herramientas de monitorización de la red se puede mencionar:
      .row.mt-5.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-10(data-aos="zoom-in-up")
          .h-100.p-4.p-lg-5.text-center.text-white(style="background-color:#1E5AF9;border-radius:10px;")
            figure.text-center
              img(src="@/assets/curso/tema3/12.svg" style="max-width:100px;display:inline;")
            p.fw-bold.mt-4 Analizadores de protocolos
            p.mt-4.mb-0 También conocidos como #[em.text-white sniffers]. Estos analizan el tráfico de la red y proporcionan datos como cantidad y tipo de tráfico. Lo principal, al examinar las tramas de red, es detectar los tipos de protocolos que se están usando, para prevenir posibles ataques del exterior de la red.
        .col-lg.mb-4.mb-lg-0.col-md-10(data-aos="zoom-in-up")
          .h-100.p-4.p-lg-5.text-center.text-white(style="background-color:#1E5AF9;border-radius:10px;")
            figure.text-center
              img(src="@/assets/curso/tema3/13.svg" style="max-width:100px;display:inline;")
            p.fw-bold.mt-4 Algunos ejemplos de analizadores
            p.mt-4.mb-0 Tcpdump para sistemas UNIX, pertenece a #[em.text-white software] libre. Wireshark esta herramienta está disponible para sistemas UNIX y Windows. Ntop herramienta de #[em.text-white software] libre.
        .col-lg.mb-4.mb-lg-0.col-md-10(data-aos="zoom-in-up")
          .h-100.p-4.p-lg-5.text-center.text-white(style="background-color:#1E5AF9;border-radius:10px;")
            figure.text-center
              img(src="@/assets/curso/tema3/14.svg" style="max-width:100px;display:inline;")
            p.fw-bold.mt-4 Monitorización remota
            p.mt-4.mb-0 Son herramientas en las que un dispositivo de red recopila y analiza los datos resultantes del monitoreo de los dispositivos de red y los centraliza en un único dispositivo que facilita la consulta por parte del administrador de red.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_3_3 3.3  Protocolos de prueba

    p(data-aos="fade-right") Se trata de protocolos incorporados al modelo TCP/IP que permiten una administración y gestión de la red. Dichos protocolos conforman un conjunto de lineamientos que son reglas e instrucciones que permiten a los dispositivos compartir información en la red; los sistemas de monitoreo de red aplican estos protocolos para identificar fallas y notificar al administrador de la red.

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/16.png")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p Según Valdivia (2020) hay dos protocolos importantes, que son usados para testear redes de datos:
        p #[strong.text-white.p-1(style="background-color:#6E40FB;") #[i.fas.fa-angle-right.text-white] #[em Internet Control Message Protocol (ICMP):]] es el Protocolo de mensajes de control de Internet.
        p #[strong.text-white.p-1(style="background-color:#6E40FB;") #[i.fas.fa-angle-right.text-white] #[em Simple Network Management Protocol (SNMP):]] es el Protocolo simple de administración de redes.

    .cont_3_4.mt-5.pt-4.pt-lg-5.pb-4.pb-lg-5
      h4.text-white.p-2.mb-0.ps-4.pe-4(style="max-width:fit-content;background-color:#6E40FC;border-radius:3px;" data-aos="fade-right") Protocolo ICMP
      .row.mt-5
        .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
          p Es un protocolo ubicado en la capa de red del modelo TCP/IP. Los dispositivos que trabajan en esta capa como los #[em routers] y servidores, usan este protocolo para enviar información sobre incidencias en la red. Este protocolo permite el envío de mensajes ICMP que se transmiten como datagramas IP a través de la red.
          p.mt-4 Dentro de las funcionalidades de los mensajes ICMP, está la de confirmar si un destino se encuentra activo y es alcanzable; también, informar problemas de parámetros en una cabecera de datagrama, la sincronización de reloj y las estimaciones de tiempo de tránsito, además, obtiene direcciones de Internet y máscaras de subred.
          p.mt-4 La figura siguiente muestra el formato del mensaje ICMP
        .col-lg(data-aos="fade-left")
          figure.m-auto.col-7.col-md-7.col-lg-12.d-none.d-lg-block
            img(src="@/assets/curso/tema3/17.png")
      .col-xl-6.col-lg-10.m-auto.mt-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-in")
          h5 Figura 11.
          span Formato del mensaje ICMP
        figure.p-4(style="background-color:#E9E2FE;" data-aos="zoom-in-up")
          img(src="@/assets/curso/tema3/18.svg" alt="Gráfica que muestra la estructura o formato que configura un mensaje ICMP.")
        figcaption.fw-normal.mt-3(style="background-color:#fff;") Nota: adaptado de Valdivia (2020).

    h4.text-white.p-2.mb-0.ps-4.pe-4.mt-5(style="max-width:fit-content;background-color:#6E40FC;border-radius:3px;" data-aos="fade-right") Protocolo SNMP
    p.mt-4(data-aos="fade-right") Este protocolo se ubica en la capa de aplicación del modelo TCP/IP. Fue desarrollado para administrar servidores, estaciones de trabajo, #[em Switches, Routers, Access points], entre otros. En una red de datos, el protocolo SNMP facilita el intercambio de información mediante el modelo cliente/servidor, proporcionando funciones de monitoreo de red que permita la supervisión de dispositivos de red.
    .col-xl-6.col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-in")
        h5 Figura 12.
        span Esquema SNMP
      figure.p-4(style="background-color:#E9E2FE;" data-aos="zoom-in-up")
        img(src="@/assets/curso/tema3/19.svg" alt="Esquema que muestra los elementos clave en una red monitorizada por el protocolo SNMP y su estructura.")

    p.mt-5(data-aos="fade-right") Los elementos claves a la hora de monitorizar una red basados en el protocolo SNMP son:

    .cont_3_5.mt-5.pb-4
      .row
        .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-up")
          figure.m-auto.col-5.col-md-6.col-lg-12
            img(src="@/assets/curso/tema3/21.svg")
        .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-up")
          .h-100.d-flex.flex-wrap.align-items-center.text-white.text-center.p-4(style="background-color:#1E5AF9;border-radius:5px;")
            .w-100
              p.fw-bold Agente de gestión
              p.mt-4.mb-0 Representa el #[em software] que se encuentra instalado en los equipos que se desean gestionar/monitorear. Estos mismos proporcionan la información que solicite el NMS, además este protocolo permite la gestión de forma remota.
        .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-up")
          .h-100.d-flex.flex-wrap.align-items-center.text-white.text-center.p-4(style="background-color:#1E5AF9;border-radius:5px;")
            .w-100
              p.fw-bold NMS (#[em Network Management Station])
              p.mt-4.mb-0 Representa la estación de gestión de la red, requiere de Ia instalación de #[em software] específico, que permita gestionar/monitorizar la red. Dentro del #[em software] de gestión de SNMP se encuentra la suite Net-SNMP que integra diversas aplicaciones de gestión de red, basadas en el protocolo SNMP.

    p.mt-5(data-aos="fade-right") El funcionamiento de los elementos del protocolo SNMP se basa en la estructura de datos normalizada, denominada MIB (#[em Management information base]).

    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Simplemente, es una base de información con los datos que se reciben de los dispositivos gestionados, llamados agentes. El intercambio de información entre el NMS y el agente de gestión se realiza a través del protocolo UDP en el nivel de transporte.
        .p-3.mt-4(style="background-color:#D9F6FE;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/22.svg")
            .col(style="place-self:center;" data-aos="fade-left")
              p.mb-0 Son tres las versiones del protocolo SNMP: SNMPv1, SNMPv2, y SNMPv3. Las versiones 1 y 2 no poseen mecanismo de cifrado de los mensajes SNMP. Si se desea proteger la información que se intercambia a fin de evitar posibles ataques, se debe usar la versión 3.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/23.png")







</template>

<script>
export default {
  name: 'Tema3',
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
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  height: 90%
  width: 125%
  left: -15%
  bottom: 0
  background: url(../assets/curso/tema3/2.png)
  background-size: cover
  background-repeat: no-repeat
.cont_3_2, .cont_3_2 *
  position: relative
.cont_3_2:before
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
.cont_3_3, .cont_3_3 *
  position: relative
.cont_3_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 68%
  top: 13%
  background: url(../assets/curso/tema3/15.png)
  background-size: cover
  background-repeat: no-repeat
.cont_figura1
  background: url(../assets/curso/tema3/10.png)
  background-size: cover
  background-repeat: no-repeat
.cont_3_4, .cont_3_4 *
  position: relative
.cont_3_4:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  background-color: #F6F6F6
  top: 0
.cont_3_5, .cont_3_5 *
  position: relative
.cont_3_5:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 80%
  bottom: 0
  background: url(../assets/curso/tema3/20.png)
  background-size: cover
  background-repeat: no-repeat
</style>
