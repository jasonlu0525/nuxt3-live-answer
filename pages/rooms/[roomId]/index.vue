<script setup>
import { useScreens } from "vue-screen-utils";

const store = useBookingStore();
const { setBookingInfo, setRoomInfo } = store;

const router = useRouter();
const route = useRoute();
const { roomId } = route.params;

const room = ref([]);
const { data, error } = await useFetch(`/api/v1/rooms/${roomId}`, {
  baseURL: "https://nuxr3.zeabur.app",
});

if (error.value) {
  router.push("/rooms");
}
room.value = data.value?.result;
setRoomInfo(room.value);

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

const bookingDate = ref({
  start: startDate,
  end: endDate,
});

const minDate = new Date(startDate);
const maxDate = new Date(nextYear);
const masks = {
  title: "YYYY 年 MM 月",
  modelValue: "YYYY-MM-DD",
  input: "YYYY-MM-DD",
};

const { mapCurrent } = useScreens({
  md: "768px",
});

const rows = mapCurrent({ md: 1 }, 2);
const columns = mapCurrent({ md: 2 }, 1);
const expanded = mapCurrent({ md: false }, true);
const titlePosition = mapCurrent({ md: "center" }, "left");

const bookingPeople = ref(1);

// 計算天數
const countDateDiffs = ({ start, end }) => {
  var startDate = new Date(start);
  var endDate = new Date(end);
  return parseInt(Math.abs(startDate - endDate) / 1000 / 60 / 60 / 24);
  w;
};

const takeReservation = () => {
  const roomId = room.value._id;
  const peopleNum = bookingPeople.value;
  const checkInDate = bookingDate.value.start;
  const checkOutDate = bookingDate.value.end;

  if (!checkInDate || !checkOutDate) {
    alert("請選擇入住與退房日期");
    return;
  }

  setBookingInfo({
    roomId,
    peopleNum,
    checkInDate,
    checkOutDate,
    bookingDays: countDateDiffs(bookingDate.value),
  });

  router.push(`/rooms/${roomId}/booking`);
};
</script>

<template>
  <main class="mt-3">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-7">
          <div class="mb-4">
            <h1 class="mb-4 fw-bold">{{ room.name }}</h1>
            <p class="fw-medium">
              {{ room.description }}
            </p>
          </div>

          <section class="mb-4">
            <h3 class="title-deco mb-4 fw-bold">房型基本資訊</h3>
            <ul class="d-flex gap-4 list-unstyled">
              <li class="border rounded-3 p-3">
                <p class="mb-0 fw-bold text-nowrap">
                  {{ room.areaInfo }}
                </p>
              </li>
              <li class="border ounded-3 p-3">
                <p class="mb-0 fw-bold text-nowrap">
                  {{ room.bedInfo }}
                </p>
              </li>
              <li class="border rounded-3 p-3">
                <p class="mb-0 fw-bold text-nowrap">
                  2-{{ room.maxPeople }} 人
                </p>
              </li>
            </ul>
          </section>
        </div>
        <div class="d-none d-md-block col-md-5">
          <div class="d-flex flex-column gap-4">
            <h5 class="pb-4 mb-0 fw-bold border-bottom">預訂房型</h5>

            <div>
              <h2 class="fw-bold">{{ room.name }}</h2>
              <p class="mb-0 fw-medium">{{ room.description }}</p>
            </div>

            <div class="d-flex justify-center items-center gap-2">
              <div class="form-floating flex-grow-1 flex-shrink-1">
                <input
                  id="checkinInput"
                  readonly
                  type="date"
                  class="form-control fw-medium rounded-3"
                  placeholder="yyyy-mm-dd"
                  :value="bookingDate.start"
                />
                <label class="fw-medium" for="checkinInput">入住 </label>
              </div>
              <div class="form-floating flex-grow-1 flex-shrink-1">
                <input
                  id="checkoutInput"
                  readonly
                  type="date"
                  class="form-control fw-medium rounded-3"
                  placeholder="yyyy-mm-dd"
                  :value="bookingDate.end"
                />
                <label class="fw-medium" for="checkoutInput">退房 </label>
              </div>
            </div>
            <ClientOnly>
              <DatePicker
                v-model.range.string="bookingDate"
                :masks="masks"
                :first-day-of-week="1"
                :min-date="minDate"
                :max-date="maxDate"
                :rows="rows"
                :columns="columns"
                :expanded="expanded"
                :title-position="titlePosition"
              />
            </ClientOnly>

            <div class="d-flex justify-content-between align-items-center">
              <p class="mb-0">人數</p>
              <div class="d-flex align-items-center gap-4">
                <button
                  :class="{ 'disabled ': bookingPeople === 1 }"
                  class="btn p-2 border rounded-circle"
                  type="button"
                  @click="bookingPeople--"
                >
                  <Icon class="fs-5" icon="ic:baseline-minus" />
                </button>

                <h6 id="people" class="fw-bold mb-0" name="people">
                  {{ bookingPeople }}
                </h6>

                <button
                  :class="{
                    disabled: bookingPeople === room.maxPeople,
                  }"
                  class="btn p-2 border rounded-circle"
                  type="button"
                  @click="bookingPeople++"
                >
                  <Icon class="fs-5" icon="ic:baseline-plus" />
                </button>
              </div>
            </div>
            <h5 class="mb-0 fw-bold">NT$ {{ room.price }}</h5>
            <button
              @click="takeReservation"
              type="button"
              class="btn btn-primary py-3 fw-bold rounded-3"
            >
              立即預訂
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.title-deco {
  display: flex;
  align-items: center;
}

.title-deco::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 24px;
  background-color: #bf9d7d;
  border-radius: 10px;
  margin-right: 0.75rem;
}

input[type="date"] {
  cursor: pointer;
}
</style>
