<script setup>
definePageMeta({
  middleware: ["auth"],
});

const router = useRouter();
const bookingStore = useBookingStore();
const { bookingInfo, roomInfo } = storeToRefs(bookingStore);
if (!bookingInfo.value.roomId) {
  router.push("/rooms");
}

const discountPrice = 1000;

const submitButtonRef = ref(null);

const isFetch = ref(false);

const confirmReservation = () => {
  submitButtonRef.value.click();
};

const createOrder = async (userInfo) => {
  const token = useCookie("accountToken");
  const {
    姓名: name,
    手機號碼: phone,
    電子信箱: email,
    縣市: county,
    行政區: district,
    地址: road,
  } = userInfo;

  const { roomId, checkInDate, checkOutDate, peopleNum } = bookingInfo.value;

  const bookingData = {
    roomId,
    checkInDate,
    checkOutDate,
    peopleNum,
    userInfo: {
      address: {
        zipcode: 802,
        detail: `${county}${district}${road}`,
      },
      name,
      phone,
      email,
    },
  };

  if (isFetch.value) return;

  isFetch.value = true;

  try {
    const { result } = await $fetch(`/api/v1/orders`, {
      baseURL: "https://nuxr3.zeabur.app",
      method: "POST",
      headers: {
        Authorization: token.value,
      },
      body: bookingData,
    });

    router.push(`/booking/${result._id}`);
  } catch (error) {
    const status = error.data?.status;
    alert(error.data?.message);
    if (status === 403) {
      navigateTo("/login");
      return;
    }

    if (status === 404) {
      navigateTo("/rooms");
      return;
    }
  } finally {
    isFetch.value = false;
  }
};
</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <section>
            <h2 class="mb-4 fw-bold">訂房人資訊</h2>
            <Form @submit="createOrder" v-slot="{ errors }">
              <div class="mb-4">
                <label for="name" class="form-label fw-bold">姓名</label>
                <Field
                  id="name"
                  name="姓名"
                  rules="required|min:2"
                  type="text"
                  class="form-control p-3 rounded-3"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                />
                <ErrorMessage name="姓名" class="invalid-feedback" />
              </div>

              <div class="mb-4">
                <label for="phone" class="form-label fw-bold">手機號碼</label>
                <Field
                  id="phone"
                  name="手機號碼"
                  rules="required|isPhone"
                  type="tel"
                  class="form-control p-3 rounded-3"
                  :class="{ 'is-invalid': errors['手機號碼'] }"
                  placeholder="請輸入手機號碼"
                />
                <ErrorMessage name="手機號碼" class="invalid-feedback" />
              </div>

              <div class="mb-4">
                <label for="email" class="form-label fw-bold">電子信箱</label>
                <Field
                  id="email"
                  name="電子信箱"
                  rules="required|email"
                  type="email"
                  class="form-control p-3 rounded-3"
                  :class="{ 'is-invalid': errors['電子信箱'] }"
                  placeholder="請輸入電子信箱"
                />
                <ErrorMessage name="電子信箱" class="invalid-feedback" />
              </div>

              <div class="mb-4">
                <label for="road" class="form-label fw-bold">地址</label>
                <div className="d-flex gap-2 mb-4">
                  <Field
                    as="select"
                    v-slot="value"
                    name="縣市"
                    rules="required"
                    class="form-select w-50 p-3 fw-medium rounded-3"
                    :class="{ 'is-invalid': errors['縣市'] }"
                  >
                    <option selected disabled value="">請選擇縣市</option>
                    <option value="高雄市">高雄市</option>
                  </Field>
                  <Field
                    as="select"
                    name="行政區"
                    rules="required"
                    class="form-select w-50 p-3 fw-medium rounded-3"
                    :class="{ 'is-invalid': errors['行政區'] }"
                  >
                    <option selected disabled value="">請選擇行政區</option>
                    <option value="前金區">前金區</option>
                    <option value="鹽埕區">鹽埕區</option>
                    <option value="新興區">新興區</option>
                  </Field>
                </div>
                <Field
                  id="road"
                  name="地址"
                  rules="required"
                  type="text"
                  class="form-control p-3 rounded-3"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入詳細地址"
                />
                <ErrorMessage name="地址" class="invalid-feedback" />
              </div>
              <button
                ref="submitButtonRef"
                type="submit"
                class="d-none"
              ></button>
            </Form>
          </section>
        </div>
        <div class="col-md-5">
          <img
            class="img-fluid rounded-3"
            :src="roomInfo.imageUrl"
            :alt="roomInfo.name"
          />
          <div class="my-5">
            <h2 className="mb-3 fw-bold">價格詳情</h2>
            <div
              class="d-flex justify-content-between align-items-center mb-3 fw-medium"
            >
              <span
                >NT$ {{ roomInfo.price }} X {{ bookingInfo.bookingDays }}晚
              </span>
              <span>NT$ {{ roomInfo.price * bookingInfo.bookingDays }}</span>
            </div>
            <div
              class="d-flex justify-content-between align-items-center fw-medium"
            >
              <p class="mb-0">住宿折扣</p>
              <span class="text-info">-NT$ {{ discountPrice }}</span>
            </div>
            <hr class="my-3" />
            <div
              class="d-flex justify-content-between align-items-center fw-bold"
            >
              <p class="mb-0">總價</p>
              <span
                >NT$
                {{
                  roomInfo.price * bookingInfo.bookingDays - discountPrice
                }}</span
              >
            </div>
          </div>

          <button
            class="btn btn-lg btn-primary w-100 fw-bold rounded-3"
            type="button"
            @click="confirmReservation"
          >
            確認訂房
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
