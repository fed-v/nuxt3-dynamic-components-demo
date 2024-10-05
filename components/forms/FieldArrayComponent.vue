<template>
    <FieldArray name="phone" v-slot="{ fields, push, remove }">

        <div class="form-group" v-for="(entry, idx) in fields" :key="entry.key">

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
                <img src="@/assets/images/trash-can.svg" width="16" height="16" title="Delete" alt="Delete">
            </button>

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
    
</style>