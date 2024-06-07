<template>
     <div class="flex  bg-white">
       <SideMenu/>
<!--       <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>-->
       <div class="w-full bg-gray-50 flex flex-col gap-16 relative overflow-y-auto">
         <cards/>
         <slot/>
       </div>
     </div>

</template>
<script setup>
import cards from "../components/Cards.vue";
import SideMenu from "../components/SideMenu.vue";
</script>