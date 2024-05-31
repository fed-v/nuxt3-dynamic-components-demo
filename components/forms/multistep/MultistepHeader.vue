<template>

    <div class="stepper-header">
        
        <div class="header-title">
            <h4 class="title">{{ title }}</h4>
            <ul>
                <li v-for="(step, index) in steps" :key="index" :class="{ current: currentStep === index, filled: currentStep > index }">
                    {{ step }}
                </li>
            </ul>
        </div>

        <div>
            <NuxtLink class="text-link" :to='to'>Cancel</NuxtLink>
        </div>

    </div>

</template>

<script setup lang="ts">

    const props = defineProps({
        steps: Object,
        currentStep: Number,
        to: String,
        title: String
    });

</script>

<style lang="less" scoped>

    /* This should be a global import declared in the nuxtconfig file */
    @import '~/assets/styles/less/constants.less';
    @import '~/assets/styles/less/buttons.less';
    @import '~/assets/styles/less/forms.less';
    @import '../assets/styles/less/multistep.less';

</style>