<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(style="background-color:#DDE6FE;")
    .p-4.bg-white(style="box-shadow:0px 3px 8px rgba(0,0,0,.2);" data-aos="zoom-in-down")
      .row
        .col-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/sintesis1.png")
        .col(style="place-self:center;")
          p.mb-0 Ha llegado al final de los contenidos de este componente formativo. En este punto, haga un análisis del mapa que se muestra enseguida y realice su propia síntesis de los temas, conceptos y elementos desarrollados. #[strong(style="color:#6E40FB;") ¡Adelante!]

    .row.justify-content-center.mt-5(data-aos="zoom-in-up")
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
