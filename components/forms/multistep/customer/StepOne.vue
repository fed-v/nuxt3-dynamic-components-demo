<template>

    <div class="form-title">
        <h4>Customer information</h4>
    </div>

    <div class="form-group">
        <FormsBaseInput type="text" label="First name" name="firstName" rules="required" :error="{error : errors.firstName}" />
        <FormsBaseInput type="text" label="Last name" name="lastName" rules="required" :error="{error : errors.lastName}" />
    </div>

    <FormsBaseInput type="text" label="Business name" name="businessName" rules="required" :error="{error : errors.businessName}"/>

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