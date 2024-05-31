<template>
    <FieldArray name="phone" v-slot="{ fields, push, remove }">

        <div class="form-group" v-for="(entry, idx) in fields" :key="entry.key">

            <div class="input-container">
                <label class="input-label" for="market">Phone type</label>
                <Field as="select" class="form-input select" :name="`phone[${idx}].type`" id="market" rules="required">
                    <option value="" disabled selected>-- Select --</option>
                    <option value="home">Home</option>
                    <option value="mobile">Mobile phone</option>
                </Field>
            </div>

            <FormsBaseInput type="text" label="Phone number" :name="`phone[${idx}].number`" rules="required" />

            <button class="icon-btn" type="button" @click="remove(idx)">
                <img src="@/assets/images/trash-can.svg" width="16" height="16" title="Delete" alt="Delete">
            </button>

        </div>

        <button class="text-button" type="button" @click="push({type:'', number:''})">+ Add another</button>

    </FieldArray>
</template>

<style lang="less" scoped>

    /* This should be a global import declared in the nuxtconfig file */
    @import '../assets/styles/less/constants.less';
    @import '../assets/styles/less/buttons.less';
    @import '../assets/styles/less/forms.less';
    
</style>