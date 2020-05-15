<template>
  <v-card class="mx-auto" max-width="400" height="100%">
    <v-img class="white--text align-end" height="200px" :src="character.img">
      <v-card-title>
        {{ character.name }}
        <span v-if="character.nickname">({{ character.nickname }})</span>
      </v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0"></v-card-subtitle>
    <v-card-text class="text--primary">
      <div v-if="character.occupation.length">
        Occupation: {{ character.occupation.join(', ') }}
      </div>
      <div>
        Dead or Alive: {{ character.status }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: ['character'],
};
</script>
