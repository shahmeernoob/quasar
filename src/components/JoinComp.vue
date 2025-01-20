<template>
    <q-btn @click="joinpopup = true" flat class="py12 full-width bg-primary rounded-10 q-mb-lg">
        <span class="q-icon on-left">
            <img class="img-fluid" src="https://clubby.me/icons/join.svg" alt="">
        </span>
        <span class="f-ssp600 text-capitalize text-white f-16">Join Club</span>
    </q-btn>
    <q-dialog v-model="joinpopup">
        <q-card class=" full-width w-520 pa-30 rounded-16 q-mt-xl">
            <q-card-section  class="f-24 q-pb-md q-px-none q-pt-none f-ssp600">
                Join Club
            </q-card-section>
            <q-card-section>
                <q-separator/>
            </q-card-section>
            <q-card-section class="f-24 q-py-md q-mt-md q-mb-sm q-px-none f-ssp600">
                Club Code
            </q-card-section>
            <q-card-section class="q-px-sm q-py-none">
                <q-input filled v-model="text" label="" class=" q-py-sm q-px-none" />
            </q-card-section>
            <q-card-actions class=" justify-start q-pt-lg q-pr-sm q-pl-none q-pb-sm">
                <q-btn flat>
                    <span class="bg-primary q-px-xl q-py-sm rounded-10 f-ssp600 text-white text-capitalize">Join</span>
                </q-btn>
                <q-btn flat class="f-ssp600 f-18 colr-3f4354 rounded-10">
                    <span class="q-px-lg q-py-none text-capitalize" v-close-popup>
                        Cancel
                    </span>
                </q-btn>
            </q-card-actions>
        </q-card>
    </q-dialog> 

    <q-btn flat no-caps class="bg-white flex items-center justify-center py12 full-width  rounded-10 q-mb-lg">
        <span>
            <q-icon name="add" class="q-tab__icon on-left colr-424242"/>
        </span>
        <span class="block f-ssp600  colr-424242 f-16">Create a Club</span>
    </q-btn>
    
    <q-expansion-item label="Your Clubs" default-opened class="bg-white q-pa-sm full-width rounded-10 f-ssp600 colr-3f4354 f-16">
        <q-item>
            <q-item-section class="">
                <div class="flex items-center bg-eee q-pa-sm rounded-10">
                    <div class="q-mr-sm rounded-100" style="border: 2px solid black;">
                        <div class="">
                            <span class="q-icon q-pa-sm">
                             <img src="https://clubby.me/icons/Cluby-C.svg" style="width: 24px; height: 24px;">
                            </span>
                        </div>
                    </div>
                   <div class="text-black text-capitalize text-center f-ssp600">
                     shahmeer 
                     <span class="block text-caption justify-start">
                       fun
                   </span>
                   </div>
                   
                </div>
            </q-item-section>
        </q-item>
      </q-expansion-item>
</template>
<script setup> 
import { ref } from 'vue';
let joinpopup = ref(false)
</script>