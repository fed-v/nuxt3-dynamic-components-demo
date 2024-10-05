<template>
    <FieldArray name="phone" v-slot="{ fields, push, remove }">

        <div class="form-group" v-for="(entry, idx) in fields" :key="entry.key">

            <!-- Grouping phone type and number inputs logically with fieldset -->
            <fieldset class="phone-fieldset">

                <!-- Group legend visible only to screen readers -->
                <legend class="sr-only">
                    Phone {{ idx + 1 }}
                </legend>

                <div class="input-container">

                    <label 
                        :id="`phone[${idx}]-label`" 
                        class="input-label" 
                        :for="`phone[${idx}].type`">
                            Phone type
                    </label>
                    
                    <Field 
                        as="select" 
                        class="form-input select" 
                        :name="`phone[${idx}].type`" 
                        :id="`phone[${idx}].type`" 
                        :aria-labelledby="`phone[${idx}]-label`" 
                        rules="required"
                    >
                        <option value="" disabled selected>-- Select --</option>
                        <option value="home">Home</option>
                        <option value="mobile">Mobile phone</option>
                    </Field>

                </div>

                <FormsBaseInput 
                    type="text" 
                    label="Phone number" 
                    :name="`phone[${idx}].number`" 
                    rules="required" 
                />

                <button    
                    class="icon-btn" 
                    type="button" 
                    @click="remove(idx)" 
                    aria-label="Delete phone number {{ idx + 1 }}" 
                    aria-live="polite"
                >
                    <img src="@/assets/images/trash-can.svg" width="16" height="16" alt="Delete">
                </button>

            </fieldset>

        </div>

        <button 
            class="solid-btn" 
            type="button" 
            @click="push({type:'', number:''})" 
            aria-label="Add another phone number" 
            aria-live="polite"
        >
            + Add another
        </button>

    </FieldArray>
</template>

<style lang="less" scoped>

    /* This should be a global import declared in the nuxtconfig file */
    @import '../assets/styles/less/constants.less';
    @import '../assets/styles/less/buttons.less';
    @import '../assets/styles/less/forms.less';

    /* Styles for fieldset and legend */
    .phone-fieldset {
        display: flex;
        border: none;
        padding: 0;
        margin-bottom: 10px;
        width: 100%;
    }

    /* Hide the legend visually but keep it accessible to screen readers */
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
    
</style>