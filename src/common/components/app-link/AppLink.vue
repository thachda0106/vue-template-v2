<script setup lang="ts">
    import { computed } from 'vue';
    import { RouterLinkProps } from 'vue-router';

    const props = defineProps<RouterLinkProps>();
    const isExternal = computed(() => typeof props.to === 'string' && props.to.startsWith('http'));
</script>

<template lang="">
    <a v-if="isExternal" :href="props.to" target="_blank" ><slot/></a> 
    <RouterLink v-else :="props"> <slot/> </RouterLink>
</template>
