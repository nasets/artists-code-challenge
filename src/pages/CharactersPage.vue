<template>
  <v-row>
    <v-col cols="3" v-for="character in characters" :key="character.char_id">
      <character-card :character="character" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
import CharacterCard from '@/components/CharactersPage/CharacterCard.vue';

export default {
  name: 'CharactersPage',
  components: {
    CharacterCard,
  },
  computed: {
    ...mapState('charactersStore', [
      'characters',
      'status',
    ]),
  },
};
</script>

<style lang="scss" scoped>
</style>
