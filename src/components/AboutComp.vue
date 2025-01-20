<template>
    <div class="bg-white rounded-10 q-py-md q-px-lg full-width">
        <p class="text-capitalize text-grey-9 f-16 q-mb-sm q-mt-xs f-ssp600 lh-24">About</p>
        <p class=" f-ssp600 text-caption text-grey-9 f-14 q-mb-sm">fun</p>
    </div>
    <div class="q-py-md q-px-sm bg-white rounded-10 q-mt-lg">
        <p class="q-mb-sm f-ssp600 f-16 q-pt-xs q-pl-md text-grey-9">Officers </p>
        <q-item>
            <q-item-section top avatar>
               <div class="bg-grey1" style="padding: 5px 5px 5px 5px; border-radius: 16px;">
                 <q-img src="https://clubby.me/icons/Cluby-C.svg" style="width: 30px; height: 30px;"/>
               </div>
            </q-item-section>

            <q-item-section>
               <q-item-label class="lh-24 colr-3f4354 f-ssp600 f-14">Shahmeer Hasaan <span><img src="https://clubby.me/icons/person-icon/admin.svg" style="width: 20px; height: 15px;"></span></q-item-label>
               <q-item-label caption class="f-ssp600 text-grey-7 f-14">Admin</q-item-label>
            </q-item-section>
        </q-item>
        <div class="q-pb-sm q-pl-md q-pt-md"><p class="q-ma-none colr-3f4354 f-ssp600 f-16">Members (0)</p></div>
    </div>
    <div class="q-mt-lg">
        <q-expansion-item default-opened class="q-pa-sm bg-white f-ssp600 rounded-10">
            <template v-slot:header >
               <q-item-section>
                  <div class="flex">
                    <span class="text-grey-9 f-16">Upcoming Events</span>
                   <span class="q-pl-md q-pt-xs">
                    <img src="https://clubby.me/icons/right-arrow.svg" alt="">
                   </span>
                  </div>
               </q-item-section>
            </template>
            <div class="q-mt-xs q-pa-md rounded-10">
                <div class="text-center rounded-10 bg-e8e8e8">
                    <div class="q-py-md text-capitalize f-15 f-ssp600 colr-3f4354"> No Upcoming Events </div>
                </div>
            </div>
        </q-expansion-item>
    </div>
    <div class="bg-white q-mt-lg rounded-10">
        <div class="q-pa-lg">
            <div class="flex row items-center text-grey-9 f-16">
                 <span class="text-capitalize f-ssp600 ">Budget Goals</span>
                 <q-space/>
                 <span class="f-ssp600">
                    Show Public
                    <q-toggle class="q-py-xs q-px-none row items-center f-16" v-model="value"color="blue" />
                 </span>
            </div>
            <div class="bg-white q-mt-sm rounded-10">
                <div class="text-center rounded-10 q-mt-md bg-e8e8e8">
                  <div class="q-py-md text-capitalize f-15 f-ssp600 text-grey-8"> No Budget Goals </div>
                </div>
           </div>
        </div>
    </div>
    
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      value: ref(true)
    }
  }
}

</script>