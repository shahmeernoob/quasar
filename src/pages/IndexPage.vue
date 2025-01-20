<template>
  <q-page class="bg-grey1  q-pa-lg">
    <div class="row q-py-md ">
        <div class="col-6 q-pa-sm q-pb-md q-mb-sm lt-md">
          <q-btn class="bg-white q-pa-sm rounded-8" flat  @click="drawerLeft = !drawerLeft"  dense>
            <q-icon name="arrow_forward_ios"/>
          </q-btn>
          <q-drawer v-model="drawerLeft"    :width="200" :breakpoint="700" elevated class="bg-grey1 text-white">
            <q-scroll-area class="fit">
              <div class="q-pa-sm">
                 <JoinComp/>
              </div>
            </q-scroll-area>
          </q-drawer>
        </div>
        <div class="col-6 q-pa-sm q-pb-md q-mb-sm text-right lt-md">
          <q-btn class="bg-white q-pa-sm  rounded-8" flat  @click="drawerRight = !drawerRight"  dense>
            <q-icon name="arrow_back_ios"/>
          </q-btn>
          <q-drawer side="right" v-model="drawerRight" elevated class="bg-grey1 text-white text-left">
            <q-scroll-area class="fit">
              <div class="q-pa-sm">
                
                 <AboutComp/>
              </div>
            </q-scroll-area>
          </q-drawer>
        </div>
        
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 q-pt-lg q-pl-lg gt-sm"  >
          <div>
            <JoinComp/>
          </div>
        </div>
        <div class="col-md-6 col-lg-7 col-sm-12 col-xs-12 " :class="$q.screen.lt.sm ?'q-pt-xs' : 'q-pt-lg' , $q.screen.lt.sm ? '' : 'q-pl-lg'">
            <div class="row bg-white rounded-10">
              <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                <div class="bg-e8e8e8 rounded-10 q-py-lg q-px-sm" :class="$q.screen.lt.sm ? 'q-ma-md' : 'q-ma-lg'">
                  <div class="">
                      <div class="q-mr-sm" >
                          <span class="q-icon rounded-100 q-pa-lg bg-bfbfbf p-48" style="border: 2px solid black;">
                            <img src="https://clubby.me/icons/Cluby-C.svg" style="width: 100px; height: 100px;">
                          </span>
                      </div>
                  </div>
                  <div>
                    <p class="colr-1b1b1b f-ssp600 q-pt-sm edit" >new</p>
                  </div>
                  <div>
                    <div class=" f-ssp600 f-14 text-grey-8">Created by Shahmeer Hassan</div>
                  </div>
                  <div class="q-py-md">
                    <span class="text-black f-ssp600 f-16 text-bold">120myC</span>
                    <span>
                      <q-btn flat class="seting rounded-6">
                        <span class=" justify-center row">
                          <q-icon class=" colr-3f4354colr-3f4354 f-24" name="content_copy"/>
                        </span>
                      </q-btn>
                    </span>
                  </div>
                  <div class="row justify-center">
                    <div>
                      <q-btn flat class="bg-white q-py-sm text-bold text-capitalize rounded-6 text-black" style="font-size: 13px;">
                        <span class=" text-center justify-center row">
                          <q-icon  name="share"/>
                          <span class="block gt-sm">Share club</span>
                        </span>
                      </q-btn>
                    </div>
                      <div>
                        <q-btn flat class="q-btn q-mx-sm bg-black q-py-sm text-bold text-white rounded-6 text-capitalize" style="font-size: 13px;">
                          <span class="text-center justify-center row">
                            <span class="on-left"><img src="https://clubby.me/icons/exit.svg"></span>
                            <span class="block gt-sm">Leave</span>
                          </span>
                        </q-btn>
                      </div>
                      <div>
                        <q-btn flat class="q-btn bg-white q-py-sm text-bold text-capitalize q-pt-sm rounded-6" style="font-size: 13px;">
                         <span class="text-center justify-center row">
                           <q-icon class="on-left" name="border_color"/>
                          <span class="block gt-sm">Edit Club</span>
                        </span>
                       </q-btn>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="q-mt-lg q-py-sm q-px-lg rounded-10 bg-white full-width">
              <q-item class="q-py-sm q-px-none">
                <q-btn flat class="seting1">
                    <q-img class="" src="https://clubby.me/icons/Cluby-C.svg" style="width: 30px; height: 30px;"/>
                </q-btn>
                <q-item-section> 
                  <q-input class="" bg-color="grey-5" borderless v-model="text"  placeholder="Annoucmenet" />
                </q-item-section>
                <q-btn no-caps flat class="bg-black rounded-8 gt-xs">
                  <span  class="block text-white f-ssp600 f-14 ">Publish</span>
                </q-btn>
              </q-item> 
              <q-item class="items-center q-py-sm q-px-none">
                <div class="f-16 f-ssp600 text-grey-9">
                  <span class="gt-md"> Relate announcement to </span>
                </div>
                <q-item-section>
                  <q-item-label>
                    <span class="float-right flex">
                      <q-btn no-caps flat>
                        <q-img class="on-left" src="https://clubby.me/icons/goal.svg" style="width: 24px; height: 24px;"/>
                        <span class="block colr-3f4354 f-ssp600 gt-sm">Budget Goal</span>
                      </q-btn>
                      <q-btn no-caps flat>
                        <q-img class="on-left" src="https://clubby.me/icons/jul-17.svg" style="width: 24px; height: 24px;"/>
                        <span class="block colr-3f4354 f-ssp600 gt-sm">Upcoming Event</span>
                      </q-btn>
                      <q-btn no-caps flat class="q-pt-xs q-pb-sm q-px-md">
                        <q-icon name="notifications" />
                        <span class="block colr-3f4354 f-ssp600 gt-sm">No members will be notified</span>
                      </q-btn>
                    </span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="row bg-white q-mt-lg rounded-10 q-py-sm">
              <div class="col-md-7 col-xs-6">
                <q-item class="items-center q-pt-lg">
                  <q-item-section class="f-ssp600 colr-3f4354 f-16 no-wrap">
                    Announcements
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-md-5 col-xs-6">
                <q-item class="q-pa-none q-py-sm q-px-sm">
                  <q-item-section>
                    <q-btn no-caps flat class="rounded-6 q-pa-xs bg-e8e8e8">
                      <q-img class="q-mr-xs" src="https://clubby.me/icons/new.svg" style="width: 24px; height: 24px;"/>
                      <span class="block f-ssp600">New</span>
                    </q-btn>
                  </q-item-section>
                  <q-item-section class="q-py-sm q-px-sm">
                    <q-btn no-caps flat class="rounded-6 bg-e8e8e8">
                      <q-img class="" src="https://clubby.me/icons/poplur.svg" style="width: 20px; height: 14px;"/>
                      <span class="text-center q-pl-xs f-ssp600 ">Popular</span>
                    </q-btn>
                  </q-item-section>
                </q-item>
              </div>
            </div>
        </div>
        <div class="col-md-3 col-xs-12  q-pt-lg q-pl-lg gt-sm">
           <div>
            <AboutComp/>
           </div>
        </div>
    </div>
  </q-page>
</template>

<script setup>
import AboutComp from 'src/components/AboutComp.vue';
import JoinComp from 'src/components/JoinComp.vue';
import { ref } from 'vue'

const drawerLeft = ref(false)
const drawerRight = ref(false)
const conditon = ref(true)
</script>



<style scoped>



</style>