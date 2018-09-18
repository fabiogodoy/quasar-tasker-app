<template>
    <q-card  >
        <q-card-media>
        </q-card-media>
        <q-card-title>
            Tasker App
            <q-rating slot="subtitle" v-model="stars" :max="5" />
            
        </q-card-title>
        <q-card-main>
            <p>A hello Quasar app</p>
            <p class="text-faded">
                This app was created as a PoC of Quasar Framework
            </p>
        </q-card-main>
        <q-card-separator />
        
    </q-card>
</template>
<script>
export default {
    
}
</script>
<style>

</style>


