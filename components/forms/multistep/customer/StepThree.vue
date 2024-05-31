<template>
    <div class="form-title">
        <h4>Review your submission</h4>
    </div>

    <div class="review-submission">

        <h5>Customer information</h5>

        <div class="horizontal-group">
            <div>
                <p><strong>Full name</strong></p>
                <p>{{ values.firstName }} {{ values.lastName }}</p>
            </div>
            <div>
                <p><strong>Email</strong></p>
                <p>{{ values.email }}</p>
            </div>
        </div>

        <div class="horizontal-group">
            <div>
                <p><strong>Username</strong></p>
                <p>{{ values.email }}</p>
            </div>
            <div>
                <p><strong>Phone number</strong></p>
                <p v-for="phone in values.phone" :key="phone.number" class="phone">{{ phone.number }}</p>
            </div>
        </div>

        <div v-if="values.addressLineOne !== undefined && values.addressLineOne !== ''">

            <SeparatorComponent />

            <h5>Service address</h5>

            <div class="horizontal-group">
                <div>
                    <p><strong>Address line 1</strong></p>
                    <p>{{ values.addressLineOne }}</p>
                </div>
                <div>
                    <p><strong>Address line 2</strong></p>
                    <p>{{ values.addressLineTwo }}</p>
                </div>
            </div>

            <div class="horizontal-group">
                <div>
                    <p><strong>City</strong></p>
                    <p>{{ values.city }}</p>
                </div>
                <div>
                    <p><strong>State / Province</strong></p>
                    <p>{{ values.state }}</p>
                </div>
                <div>
                    <p><strong>Zip / Postal code</strong></p>
                    <p>{{ values.zip }}</p>
                </div>
            </div>

        </div>

        <!--<div v-if="values.billingAddressLineOne !== undefined && values.billingAddressLineOne !== '' && sameAddress !== true">-->

        <div v-if="values.billingAddressLineOne !== undefined && values.billingAddressLineOne !== ''">

            <SeparatorComponent />

            <h5>Billing Address</h5>

            <div class="horizontal-group">
                <div>
                    <p><strong>Billing address line 1</strong></p>
                    <p>{{ values.billingAddressLineOne }}</p>
                </div>
                <div>
                    <p><strong>Billing address line 2</strong></p>
                    <p>{{ values.billingAddressLineTwo }}</p>
                </div>
            </div>

            <div class="horizontal-group">
                <div>
                    <p><strong>City</strong></p>
                    <p>{{ values.billingCity }}</p>
                </div>
                <div>
                    <p><strong>State / Province</strong></p>
                    <p>{{ values.billingState }}</p>
                </div>
                <div>
                    <p><strong>Zip / Postal code</strong></p>
                    <p>{{ values.billingZip }}</p>
                </div>
            </div>

        </div>

        <div v-if="sameAddress === true">
            <h5>Billing Address</h5>
            <p>Same as service address</p>
        </div>

    </div>

</template>

<script setup lang="ts">

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