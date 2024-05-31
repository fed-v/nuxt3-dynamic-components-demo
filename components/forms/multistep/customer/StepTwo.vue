<template>

    <div class="form-title">
        <h4>Service address</h4>
        <p>This can be skipped and added later</p>
    </div>

    <FormsBaseInput type="text" label="Address line" name="addressLineOne" v-model="address" @change="handleAddressUpdate" />
    <FormsBaseInput type="text" label="Address line 2" name="addressLineTwo" />

    <div class="form-group">
        <FormsBaseInput type="text" label="City" name="city" />
        <FormsBaseInput type="text" label="State / Province" name="state" />
        <FormsBaseInput type="text" label="Zip / Postal code" name="zip" />
    </div>

</template>

<script setup lang="ts">

    const address = ref<string>('');

    function handleAddressUpdate() {
        emit('address-updated', address.value);
    }

    // Define emits for the component
    const emit = defineEmits(["address-updated"]);

</script>

<style lang="less" scoped>

    /* This should be a global import declared in the nuxtconfig file */
    @import '../assets/styles/less/constants.less';
    @import '../assets/styles/less/buttons.less';
    @import '../assets/styles/less/forms.less';
    @import '../assets/styles/less/multistep.less';
   
</style>