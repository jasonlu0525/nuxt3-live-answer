<script setup>
import { useScreens } from "vue-screen-utils";

const generateLocaleDateRange = () => {
  const currentDate = new Date();

  const startDate = currentDate.toLocaleDateString().replaceAll("/", "-");

  // currentDate 的下一天
  let endDate = new Date(currentDate);
  endDate.setDate(currentDate.getDate() + 1);
  endDate = endDate.toLocaleDateString().replaceAll("/", "-");

  // 明年的同一天
  const nextYear = new Date(currentDate).setFullYear(
    currentDate.getFullYear() + 1
  );

  return {
    startDate,
    endDate,
    nextYear,
  };
};

const { startDate, endDate, nextYear } = generateLocaleDateRange();

const date = ref({
  start: startDate,
  end: endDate,
});

const minDate = new Date(startDate);
const maxDate = new Date(nextYear);
const masks = {
  title: "YYYY 年 MM 月",
  modelValue: "YYYY-MM-DD",
};

const { mapCurrent } = useScreens({
  md: "768px",
});

const rows = mapCurrent({ md: 1 }, 2);
const columns = mapCurrent({ md: 2 }, 1);
const expanded = mapCurrent({ md: false }, true);
const titlePosition = mapCurrent({ md: "center" }, "left");
</script>

<template>
  <div class="container mt-5 date-picker">
    <ClientOnly>
      <DatePicker
        v-model.range.string="date"
        color="primary"
        :masks="masks"
        :first-day-of-week="1"
        :min-date="minDate"
        :max-date="maxDate"
        :rows="rows"
        :columns="columns"
        :expanded="expanded"
        :title-position="titlePosition"
        class="border-0"
      />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.date-picker {
  :deep(.vc-primary) {
    --vc-accent-200: #f9f9f9;
    --vc-accent-600: #000000;
    --vc-accent-700: #000000;
  }

  :deep(.vc-title) {
    background: none;
  }
  :deep(.vc-arrow) {
    background: none;
  }
  :deep(.vc-pane-layout) {
    gap: 60px;
  }
}
</style>
