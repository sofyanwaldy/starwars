<template>
  <div>
    <v-container>
      <v-overlay :value="isLoading">
        <v-progress-circular indeterminate size="64" />
      </v-overlay>
      <v-row>
        <v-col
          v-for="(person, index) in $store.state.list.results"
          :key="index"
          cols="4"
        >
          <v-card
            class="mx-auto"
            outlined
          >
            <v-card-title> {{ person.name }} </v-card-title>

            <v-divider />

            <v-list dense>
              <v-list-item>
                <v-list-item-content>Height</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ person.height }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Mass</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ person.mass }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Hair color</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ person.hair_color }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Skin Color</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ person.skin_color }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Eye Color</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ person.eye_color }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Birth Year</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ person.birth_year }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Gender</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ person.gender }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="6"
        />
      </div>
    </v-container>
  </div>
</template>
<script>

import { getList } from '~/plugins/datasource'

export default {
  data () {
    return {
      page: 1,
      isLoading: true
    }
  },
  watch: {
    page (value) {
      this.isLoading = true
      getList(value)
        .then((response) => {
          this.isLoading = !this.isLoading
          this.$store.commit('UPDATE_LIST', response)
        })
    }
  },
  created () {
    getList()
      .then((response) => {
        this.isLoading = false
        this.$store.commit('UPDATE_LIST', response)
      })
  }
}
</script>
