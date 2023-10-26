<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Verificación de dispositivos de cómputo

    .cont_2_1
      .row
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-5.col-md-6.col-lg-12
            img(src="@/assets/curso/tema2/1.png")
        .col-lg-8(data-aos="fade-left")
          p Dentro de los sistemas informáticos, el uso de sistemas computacionales es constante. De tal modo, realizar una verificación de estos dispositivos dentro de una red es muy importante.
          p.mt-4 Dentro de las actividades de comprobación se encuentran:
          AcordionA.mt-4(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Rendimiento del sistema <em>(benchmark)</em>")
              p Mide el rendimiento de cualquier componente del sistema desde la CPU hasta la tarjeta gráfica; el resultado de la prueba ejecutada mediante un programa, ya sea online o instalado en la máquina, devuelve información detallada de las características y evalúa si el equipo se encuentra funcionando de forma correcta o si presenta alguna falla. Algunos programas gratuitos para dicha verificación son: CPU-Z, HWMonitor, Speccy, entre otros.
            .row(titulo="Simulación de cargas")
              p Una carga representa la cantidad de procesamiento que se le asigna a un dispositivo de cómputo; la carga de prueba es una similitud de la carga habitual de la máquina. Con esta verificación, lo que se busca es comprobar si dicho dispositivo es pertinente para la ejecución de una aplicación concreta.
            .row(titulo="Consumo de recursos")
              p La ejecución del proceso genera un consumo de recursos que el administrador del sistema debe gestionar y controlar de forma adecuada. Los sistemas operativos tienen incorporado un administrador de tareas. Esta herramienta proporciona información sobre el o los procesos que se están ejecutando, entre otras características del sistema.
            .row(titulo="Aplicaciones de monitorización")
              p Permiten verificar el estado de los parámetros del sistema. Dentro de las placas bases de los dispositivos de cómputo actuales, la BIOS ofrece dichas funciones que contienen el monitoreo de componentes como el microprocesador, memoria, voltaje, entre otros.










</template>

<script>
export default {
  name: 'Tema2',
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
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  bottom: -12%
  height: 100%
  background: rgb(176,197,253)
  background: linear-gradient(0deg, rgba(176,197,253,1) 85%, rgba(255,255,255,1) 100%)
.acordion .tarjeta--azul
  background-color: #DDE6FE
.acordion__accion__btn--b
  border: 1px solid #F9305F
  background-color: #F9305F
  color: #fff !important
</style>
