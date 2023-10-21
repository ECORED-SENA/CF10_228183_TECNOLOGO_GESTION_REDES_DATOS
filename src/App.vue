<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.banner-interno
  height: 150px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #6E40FB !important
.curso-main-container > .container
  overflow-x: clip !important
.titulo-segundo:after
  border-left-color: #6E40FB !important
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
  color: #fff !important
.banner-interno__titulo h1, .banner-interno__titulo h2, .banner-interno__titulo h3, .banner-interno__titulo h4, .banner-interno__titulo h5, .banner-interno__titulo h6
  color: #fff !important
.banner-principal .tarjeta
  background-color: transparent !important
.titulo-principal.color-acento-contenido .titulo-principal__numero span
  color: #fff !important
.banner-principal-decorativo-1
  animation: float1 2s ease-in-out infinite alternate !important
  top: 50% !important
  right: 78% !important
.banner-principal-decorativo-2
  animation: float2 3s ease-in-out infinite alternate !important
  top: 8% !important
  right: 67% !important
.banner-principal-decorativo-3
  animation: float2 2s ease-in-out infinite alternate !important
  top: 27% !important
  right: 37% !important
.banner-principal-decorativo-4
  animation: float1 2s ease-in-out infinite alternate !important
  top: 59% !important
  right: 37% !important
.titulo-principal.color-acento-contenido .titulo-principal__numero
  background-color: #6E40FB !important
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
  padding-left: 3rem !important
@media screen and (max-width: 992px)
  .cont_responsive1
    right: 0 !important
    width: 100% !important
  .cont_responsive2
    left: 0 !important
    width: 100% !important
  .cont_gradiente_1
    margin-top: 0px !important
  .cont_1_1:before
    height: 100% !important
    top: 0 !important
  .cont_1_5:before
    height: 100% !important
  .cont_3_1:before
    height: 100% !important
  .cont_3_3:before
    top: 0 !important
    height: 100% !important
  .cont_3_5:before
    height: 100% !important
</style>
