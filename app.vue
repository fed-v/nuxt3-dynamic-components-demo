<template>

  <div>
  
    <LazyFormsMultistepHeader title="Add account" :steps="steps" :currentStep="currentStep" to="/homepage" />

      <Form class="stepper-form" @submit="nextStep" keep-values v-slot="{ values, errors }" :initial-values="initialValues">

        <div class="centered-form-template">

          <keep-alive>
            <component :is="currentStepComponent" v-bind="sharedProps(values, errors)" @address-updated="addressUpdated" />
          </keep-alive>

        </div>

        <LazyFormsMultistepFooter :limit="totalSteps" :currentStep="currentStep" @handlePrevStep="handlePrevStep" />

      </Form>

      <pre>{{ currentStep }}</pre>

  </div>

</template>

<script lang="ts" setup>

    import StepOne from '~/components/forms/multistep/customer/StepOne.vue';
    import StepTwo from '~/components/forms/multistep/customer/StepTwo.vue';
    import StepThree from '~/components/forms/multistep/customer/StepThree.vue';


  // The current step
  const currentStep = ref(0);

  // The steps titles for the header breadcrumb
  const steps = ['1. Customer', '2. Service address', '3. Review'];

  // The total number of steps (because it's zero-based, we subtract 1 from the length of the steps array)
  const totalSteps = steps.length -1;

  // This Object holds the initial blank array of phones 
  const initialValues = {
      phone: [
          {
              type: '',
              number: ''
          }
      ]
  };

  // Map step numbers to components
  const stepComponents = [StepOne, StepTwo, StepThree];

  // Compute the current step component
  const currentStepComponent = computed(() => stepComponents[currentStep.value]);

  // Static shared props
  const staticProps = reactive({
    message: 'Hello from parent!'
  });

  // Function to get shared props including dynamic values
  const sharedProps = (values: any, errors: any) => ({

    ...staticProps,  // spread operator (...) to merge staticProps with the dynamic values.
    values,
    errors

  });



  function nextStep(values: any): void {

    if (currentStep.value === totalSteps) {
            
      console.log("Values being passed: " + JSON.stringify(values));

      return;

    } else {

      currentStep.value++;

    }

  }

  function handlePrevStep(): void {

    if (currentStep.value <= 0) {
        return;
    }

    currentStep.value--;

  }

</script>

<style lang="less" scoped>

  /* This should be a global import declared in the nuxtconfig file */
  @import '~/assets/styles/less/constants.less';
  @import '~/assets/styles/less/buttons.less';
  @import '~/assets/styles/less/forms.less';
  @import '~/assets/styles/less/multistep.less';

</style>

