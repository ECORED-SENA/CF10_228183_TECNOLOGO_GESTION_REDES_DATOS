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
          p.mt-4 Para realizar esa actividad los administradores cuentan con un conjunto de herramientas e instrumentos que pueden ser tanto físicos (cableado, dispositivos, conexiones, módems, etc,) como en software (configuraciones, comando, etc.), dicha comprobación debe ser documentada a fin de realizar futuras revisiones. La siguiente figura ilustra las características de cada tipo de inspección:
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-lg-12.col-md-6.col-7
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
              p.mt-4 También llamados tester, polímetro o multímetro, esta herramienta se usa para realizar mediciones de continuidad del cableado. Entre estos se encuentran dos tipos: multímetro y medidor de potencia de fibra óptica.
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
        p.mb-0 Por otro lado, al realizar la verificación física de los dispositivos de red como #[em switch, router], servidores, entre otros, se suele realizar una inspección rápida de los indicadores luminosos, comúnmente conocidos como LED que proporcionan una vista rápida del estado de conexión del equipo.
    
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
              td.p-3.fw-bold(style="border:1px #6E40FB solid;") Sistema o Power 
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
</style>
