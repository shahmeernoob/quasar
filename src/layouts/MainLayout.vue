<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar   class="bg-white q-pa-sm" >
        
          <img class="q-mr-xl"
            alt="Quasar logo"
            src="https://clubby.me/Clubbylogo.svg"
            style="width: auto; height: 30px"
          >

         <q-tabs  class=" text-black gt-sm">
           <q-route-tab :class="route.path == '/' ? 'bg-primary' : 'bg-transparent' " class="text-grey-8 q-px-sm rounded-8" style="font-size: 30px;"   to="/" exact icon="home" @click="navDelay" />
           <q-route-tab class="text-grey-8 q-px-sm f-28"   to="/calender" exact icon="calendar_month" @click="navDelay" />
           <q-route-tab class="text-grey-8 q-px-sm f-28"   to="/account_balance_wallet" exact icon="account_balance_wallet" @click="navDelay" />
           <q-route-tab class="text-grey-8 q-px-sm f-28"   to="/question_answer" exact icon="question_answer" @click="navDelay" />
         </q-tabs>

        <q-space/>
        
        <div class="q-mr-sm q-pa-sm">
          <q-btn dense flat color="" icon="notifications" class="text-grey-8 f-16">
        <q-menu   :offset="[240, 17]" class=" q-pa-lg">
          <q-card-section class="q-px-none q-pt-none" :style="$q.screen.gt.sm ? 'min-width: 500px' : ''">
            <q-item clickable v-close-popup class="q-pa-xs">
              <q-item-section> Notifications </q-item-section>
              <q-item-section side> Notifications </q-item-section>
            </q-item>
          </q-card-section>
          <q-separator/>
            <q-card-section/>

        </q-menu>
      </q-btn>
        </div>
        

        <q-btn-dropdown flat class=" text-black">
          <template v-slot:label>
            <div class="flex gt-sm">
              <div class="q-mr-md rounded-100" style="border: 2px solid black;">
                <div class="">
                  <span class="q-icon q-pa-xs" >
                   <img src="https://clubby.me/icons/Cluby-C.svg" style="width: 24px; height: 24px;">
                  </span>
                </div>
              </div>
              <div class="text-black text-capitalize text-center	q-pt-sm f-16 f-ssp600 gt-sm">
               shahmeer hassan
              </div>
            </div>
            <div class="q-mr-md rounded-100 lt-md" style="border: 2px solid black;">
                <div class="">
                  <span class="q-icon q-pa-xs" >
                    <img src="https://clubby.me/icons/Cluby-C.svg" style="width: 24px; height: 24px;">
                  </span>
                </div>
              </div>
                
            </template>
              <q-list >
                <q-item >
                  <q-item-section>
                <q-item-label>
                  <div class=" q-pa-sm">
                    <a href="" class="decoration-none text-black f-ssp600"> <q-icon name="settings" class="text-grey-8 q-pr-sm f-20" />Settings</a>
                  </div>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item >
              <q-item-section>
                <q-item-label>
                  <div class="q-mr-sm q-pa-sm">
                    <a href="" class="q-tabs q-ml-sm decoration-none text-red fs-16"> <img class="hi" src="https://clubby.me/icons/logout.svg" alt=""> Logout</a>
                  </div>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <!--  -->
      </q-toolbar>
    </q-header>

    

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <q-tabs  class="bg-white text-black lt-md">
           <q-route-tab :class="route.path == '/' ? 'bg-primary' : 'bg-transparent' " class="text-grey-8 q-px-sm rounded-8" style="font-size: 30px;"   to="/" exact icon="home" @click="navDelay" />
           <q-route-tab class="text-grey-8 q-px-sm f-28"   to="/calendar_month" exact icon="calendar_month" @click="navDelay" />
           <q-route-tab class="text-grey-8 q-px-sm f-28"   to="/account_balance_wallet" exact icon="account_balance_wallet" @click="navDelay" />
           <q-route-tab class="text-grey-8 q-px-sm f-28"   to="/question_answer" exact icon="question_answer" @click="navDelay" />
         </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import {  useRoute, RouterLink } from 'vue-router';

const route = useRoute()


// import NavComp from 'src/components/NavComp.vue';


// let icon = ref('arrow_drop_down')
// let hidden = ref(false)

// const leftDrawerOpen = ref(false)

// function toggleLeftDrawer () {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }
</script>


 

