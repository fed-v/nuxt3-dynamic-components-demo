<template>
    <!-- inputContainers encapsulate input tags, label tags and error messages -->
    <div class="input-container">

        <label 
            class="input-label" 
            :for="name">
                {{ label }}
        </label>

        <!-- The default value of this Input can be passed via v-model. When the value is changed, it will emit its value to the parent -->
        <Field
            :id="name"
            class="form-input"
            :rules="rules"
            :class="`${classes ? classes : ''} ${error ? error : ''}`"
            :type="type"
            :name="name"
            :value="boundValue"
            :disabled="disabled"
            :aria-invalid="error[name] ? 'true' : 'false'"
            :aria-describedby="`${name}-error`"
            :autocomplete="autocomplete"
            @input="$emit('update:boundValue', $event.target.value)" 
        />
        
        <ErrorMessage class="error-msg" :name="name" role="alert" />
        
    </div>
</template>

<script lang="ts" setup>

    const { type, name, label, rules, error, boundValue, disabled, classes, autocomplete } = defineProps({
        type: {
            type: String,
            required: true,
            default: '',
            
        },
        name: {
            type: String,
            required: true,
            default: '',
        },
        label: {
            type: String,
            required: true,
            default: '',
        },
        rules: {
            type: String,
            required: false,
            default: '',
        },
        error: {
            type: Object,
            required: false,
            default: () => ({}),
        },
        boundValue: {
            type: String,
            required: false,
            default: '',
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
        classes: {
            type: String,
            required: false,
            default: '',
        },
        autocomplete: {
            type: String,
            required: false,
            default: 'off', // Default to 'off' if not specified
        }
        
    });

    // Emit an update:boundValue custom event with the new value of the v-model that was bound when this Component was called
    defineEmits(['update:boundValue']);

    // Source: https://vuejs.org/guide/components/v-model.html

</script>

<style lang="less" scoped>
    @import '../assets/styles/less/constants.less';
    @import '../assets/styles/less/buttons.less';
    @import '../assets/styles/less/forms.less';
</style>