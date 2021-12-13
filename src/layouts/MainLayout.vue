<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white q-pa-sm">
        <q-img
        src="../assets/koachailogo.png"
        class="cursor-pointer"
        style="width: 100px;height:100px"

        
      />

        <q-toolbar-title class="bg-grey">
         Personalised Performance. Intelligent Insights.
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>



import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',


  setup () {

  }
})
</script>
