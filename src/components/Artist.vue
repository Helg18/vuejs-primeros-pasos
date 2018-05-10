<template>
  <li>
    <h2>
      <a :href="artist.url" target="_blank">{{ artist.name }}</a>
      <img :src="artist.image[0]['#text']" :alt="artist.name">
    </h2>
  </li>
</template>

<script>

export default {
  name: 'artist',
  props: ['artist'] 
}

</script>

<style>

.li {
  -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
}

</style>
