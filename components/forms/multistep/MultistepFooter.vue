<template>

    <footer>

        <div>
            <button class="primary outline" v-if="currentStep !== 0" type="button" @click="handlePrevStep">Back</button>
            <button class="primary" v-if="currentStep !== limit" type="submit">Save and continue</button>
            <button class="primary" v-if="currentStep === limit" type="submit">Finish</button>
        </div>
        
    </footer>

</template>

<script setup lang="ts">

    const props = defineProps({
        currentStep: Number,
        limit: Number
    });

    function handlePrevStep() {

        // Emit the handle previous step event
        emit('handlePrevStep');

    }

    // Define emits for the component
    const emit = defineEmits(['handlePrevStep']);

</script>

<style lang="less" scoped>

    /* This should be a global import declared in the nuxtconfig file */
    @import '~/assets/styles/less/constants.less';
    @import '~/assets/styles/less/buttons.less';
    @import '~/assets/styles/less/forms.less';
    @import '../assets/styles/less/multistep.less';

</style>