<template>
  <v-app-bar
    app
    color="primary"
  >
    <v-row>
      <v-col cols="2">
        <v-select
          solo
          hide-details
          :items="categoryList"
          v-model="filter.category"
        />
      </v-col>
      <v-col cols="3">
        <v-text-field
          solo
          hide-details
          placeholder="Type character name to search..."
          v-model="filter.name"
        />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
import debounce from 'lodash/debounce';

export default {
  name: 'HomeHeader',
  data: () => ({
    categoryList: ['Breaking Bad', 'Better Call Saul'],
    filter: {
      category: 'Breaking Bad',
      name: '',
    },
  }),
  methods: {
    ...mapActions('charactersStore', [
      'searchCharacters',
    ]),
  },
  mounted() {
    this.searchCharacters();
  },
  watch: {
    filter: {
      handler: debounce(function handler(newFilter) {
        const params = { ...newFilter };
        if (params.name) {
          delete params.category;
        }
        this.searchCharacters(params);
      }, 500),
      deep: true,
    },
  },
};
</script>
