<template>
  <v-app>
    <home-header />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HomeHeader from '@/components/HomeLayout/HomeHeader.vue';

export default {
  name: 'App',
  components: {
    HomeHeader,
  },
};
</script>
