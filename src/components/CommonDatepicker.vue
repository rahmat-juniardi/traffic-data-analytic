<script lang="ts">
import "@vuepic/vue-datepicker/dist/main.css";
import { Component, Prop } from "vue-facing-decorator";
import BaseField from "../mixins/BaseField";
import Datepicker from "@vuepic/vue-datepicker";
import { id } from 'date-fns/locale';
import Constant from "../constant";

@Component({
  components: {
    Datepicker,
  },
})
export default class CommonDatepicker extends BaseField {
  @Prop()
  value?: Date | Date[];

  localeID = id;


  get dateFormat() {

    return Constant.DATEPICKER_FORMAT_ONLY_DATE;
  }

  get flow() {
    if (this.$attrs.range || this.$attrs.timePicker || this.$attrs.datePicker) {
      return [];
    }
    return ['calendar'];
  }

  get enableTimePicker() {
    return !(this.$attrs.range || this.$attrs.datePicker);
  }

  onSelectDate(params: any) {
    this.$emit("update:value", params);
    this.$emit("change");
  }

  onClearValue() {
    if (Array.isArray(this.value)) {
      this.$emit("update:value", []);
      this.$emit("change");
      return;
    }
  }
}
</script>

<template>
  <div class="common-datepicker">
    <div v-if="label" class="mb-2">
      <small :class="labelClassName">
        {{ label }}
        <span v-if="required" class="ms-1 text-danger">*</span>
      </small>
    </div>

    <datepicker
        :modelValue="value"
        @update:modelValue="onSelectDate"
        :enable-time-picker="false"
        :clearable="false"
        :format="dateFormat"
        :flow="flow"
        inputClassName="form-control form-bd-bottom font-datepicker"
        v-bind="$attrs"
        locale="id"
    >
    </datepicker>
    <div v-if="invalidFeedback" class="form-text text-danger">
      {{ invalidFeedback }}
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/variables.scss";


.font-datepicker,
.dp__calendar_wrap,
.dp__menu {
  font-family: $font-family-sans-serif;
}
</style>
