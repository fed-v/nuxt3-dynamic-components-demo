<template>

    <div class="form-title">
        <h4>Customer information</h4>
    </div>

    <div class="form-group">
        <FormsBaseInput type="text" label="First name" name="firstName" rules="required" :error="{error : errors.firstName}" autocomplete="given-name" />
        <FormsBaseInput type="text" label="Last name" name="lastName" rules="required" :error="{error : errors.lastName}" autocomplete="family-name" />
    </div>

    <FormsBaseInput type="text" label="Business name" name="businessName" :error="{error : errors.businessName}" autocomplete="business" disabled="true" />

    <FormsBaseInput type="email" label="email" name="email" rules="required|email" :error="{error : errors.email}" />

    <FormsFieldArrayComponent />


</template>

<script lang="ts" setup>

    const props = defineProps({
        values: Object,
        errors: Object
    });
    

</script>

<style lang="less" scoped>

    /* This should be a global import declared in the nuxtconfig file */
   @import '../assets/styles/less/constants.less';
   @import '../assets/styles/less/buttons.less';
   @import '../assets/styles/less/forms.less';
   @import '../assets/styles/less/multistep.less';

</style>