<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .p-4(style="background-color:#DDE6FE;")
      .p-4.bg-white(style="box-shadow:0px 3px 8px rgba(0,0,0,.2);" data-aos="zoom-in-down")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/sintesis1.svg")
          .col(style="place-self:center;")
            p.mb-0 Reciba una gran bienvenida al estudio del componente formativo #[strong(style="color:#6E40FB;") “Verificación de acuerdo con políticas de la organización”]. Comience consultando el siguiente video, donde se ofrece un primer acercamiento y contextualización con los temas por desarrollar. #[strong(style="color:#6E40FB;") ¡Adelante!]
    figure(data-aos="zoom-im-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
