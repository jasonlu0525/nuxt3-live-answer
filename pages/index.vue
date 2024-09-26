<script setup>
const roomStore = useBookingStore();
const { createReservation } = roomStore;

const router = useRouter();

// 原始房型資料
const roomsList = ref([
  {
    _id: "66b0909bafe4327b9a563797",
    name: "尊爵雙人房",
    description:
      "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
    imageUrl:
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png",
    imageUrlList: [
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-2.png",
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-3.png",
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-4.png",
      "https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-5.png?raw=true",
    ],
    areaInfo: "24坪",
    bedInfo: "一張大床",
    maxPeople: 4,
    price: 10000,
    status: 1,
    layoutInfo: [
      {
        title: "市景",
        isProvide: true,
      },
      {
        title: "獨立衛浴",
        isProvide: true,
      },
      {
        title: "樓層電梯",
        isProvide: true,
      },
    ],
    facilityInfo: [
      {
        title: "平面電視",
        isProvide: true,
      },
      {
        title: "吹風機",
        isProvide: true,
      },
      {
        title: "冰箱",
        isProvide: true,
      },
      {
        title: "熱水壺",
        isProvide: true,
      },
      {
        title: "檯燈",
        isProvide: true,
      },
      {
        title: "衣櫥",
        isProvide: true,
      },
      {
        title: "書桌",
        isProvide: true,
      },
    ],
    amenityInfo: [
      {
        title: "衛生紙",
        isProvide: true,
      },
      {
        title: "拖鞋",
        isProvide: true,
      },
      {
        title: "沐浴用品",
        isProvide: true,
      },
      {
        title: "刮鬍刀",
        isProvide: true,
      },
      {
        title: "刷牙用品",
        isProvide: true,
      },
      {
        title: "罐裝水",
        isProvide: true,
      },
      {
        title: "梳子",
        isProvide: true,
      },
    ],
    createdAt: "2024-08-05T08:43:07.276Z",
    updatedAt: "2024-08-14T06:31:08.477Z",
  },
  {
    _id: "66b0912cafe4327b9a56379c",
    name: "景觀雙人房",
    description:
      "景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。",
    imageUrl:
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room3-1.png",
    imageUrlList: [
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room3-2.png",
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room3-3.png",
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room3-4.png",
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room3-5.png",
    ],
    areaInfo: "28坪",
    bedInfo: "一張大床",
    maxPeople: 4,
    price: 15000,
    status: 1,
    layoutInfo: [
      {
        title: "海景",
        isProvide: true,
      },
      {
        title: "獨立衛浴",
        isProvide: true,
      },
      {
        title: "樓層電梯",
        isProvide: true,
      },
    ],
    facilityInfo: [
      {
        title: "平面電視",
        isProvide: true,
      },
      {
        title: "吹風機",
        isProvide: true,
      },
      {
        title: "冰箱",
        isProvide: true,
      },
      {
        title: "熱水壺",
        isProvide: true,
      },
      {
        title: "檯燈",
        isProvide: true,
      },
      {
        title: "衣櫥",
        isProvide: true,
      },
      {
        title: "書桌",
        isProvide: true,
      },
    ],
    amenityInfo: [
      {
        title: "衛生紙",
        isProvide: true,
      },
      {
        title: "拖鞋",
        isProvide: true,
      },
      {
        title: "沐浴用品",
        isProvide: true,
      },
      {
        title: "刮鬍刀",
        isProvide: true,
      },
      {
        title: "刷牙用品",
        isProvide: true,
      },
      {
        title: "罐裝水",
        isProvide: true,
      },
      {
        title: "梳子",
        isProvide: true,
      },
    ],
    createdAt: "2024-08-05T08:45:32.884Z",
    updatedAt: "2024-08-14T06:32:09.164Z",
  },
  {
    _id: "66b09247afe4327b9a56379f",
    name: "豪華雅緻房",
    description:
      "景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。",
    imageUrl:
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room4-1.png",
    imageUrlList: [
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room4-2.png",
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room4-3.png",
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room4-4.png",
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room4-5.png",
    ],
    areaInfo: "36坪",
    bedInfo: "兩張大床",
    maxPeople: 4,
    price: 18000,
    status: 1,
    layoutInfo: [
      {
        title: "市景",
        isProvide: true,
      },
      {
        title: "獨立衛浴",
        isProvide: true,
      },
      {
        title: "客廳",
        isProvide: true,
      },
      {
        title: "書房",
        isProvide: true,
      },
      {
        title: "樓層電梯",
        isProvide: true,
      },
    ],
    facilityInfo: [
      {
        title: "平面電視",
        isProvide: true,
      },
      {
        title: "吹風機",
        isProvide: true,
      },
      {
        title: "冰箱",
        isProvide: true,
      },
      {
        title: "熱水壺",
        isProvide: true,
      },
      {
        title: "檯燈",
        isProvide: true,
      },
      {
        title: "衣櫥",
        isProvide: true,
      },
      {
        title: "浴缸",
        isProvide: true,
      },
      {
        title: "書桌",
        isProvide: true,
      },
    ],
    amenityInfo: [
      {
        title: "衛生紙",
        isProvide: true,
      },
      {
        title: "拖鞋",
        isProvide: true,
      },
      {
        title: "沐浴用品",
        isProvide: true,
      },
      {
        title: "刮鬍刀",
        isProvide: true,
      },
      {
        title: "刷牙用品",
        isProvide: true,
      },
      {
        title: "罐裝水",
        isProvide: true,
      },
      {
        title: "梳子",
        isProvide: true,
      },
    ],
    createdAt: "2024-08-05T08:50:15.551Z",
    updatedAt: "2024-08-14T06:33:10.648Z",
  },
  {
    _id: "66b092c9afe4327b9a5637a3",
    name: "景觀尊榮家庭房",
    description:
      "景觀尊榮家庭房不僅有寬敞的空間，還有絕美的市景視野，是帶給家庭最尊榮的待遇。",
    imageUrl:
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room5-1.png",
    imageUrlList: [
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room5-2.png",
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room5-3.png",
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room5-4.png",
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room5-5.png",
    ],
    areaInfo: "48坪",
    bedInfo: "兩張大床",
    maxPeople: 4,
    price: 22000,
    status: 1,
    layoutInfo: [
      {
        title: "海景",
        isProvide: true,
      },
      {
        title: "獨立衛浴",
        isProvide: true,
      },
      {
        title: "客廳",
        isProvide: true,
      },
      {
        title: "書房",
        isProvide: true,
      },
      {
        title: "樓層電梯",
        isProvide: true,
      },
    ],
    facilityInfo: [
      {
        title: "平面電視",
        isProvide: true,
      },
      {
        title: "吹風機",
        isProvide: true,
      },
      {
        title: "冰箱",
        isProvide: true,
      },
      {
        title: "熱水壺",
        isProvide: true,
      },
      {
        title: "檯燈",
        isProvide: true,
      },
      {
        title: "衣櫥",
        isProvide: true,
      },
      {
        title: "浴缸",
        isProvide: true,
      },
      {
        title: "書桌",
        isProvide: true,
      },
    ],
    amenityInfo: [
      {
        title: "衛生紙",
        isProvide: true,
      },
      {
        title: "拖鞋",
        isProvide: true,
      },
      {
        title: "沐浴用品",
        isProvide: true,
      },
      {
        title: "刮鬍刀",
        isProvide: true,
      },
      {
        title: "刷牙用品",
        isProvide: true,
      },
      {
        title: "罐裝水",
        isProvide: true,
      },
      {
        title: "梳子",
        isProvide: true,
      },
    ],
    createdAt: "2024-08-05T08:52:25.958Z",
    updatedAt: "2024-08-14T06:34:08.372Z",
  },
]);

// 訂房人資料格式
const userInfo = ref({
  address: {
    zipcode: 802,
    county: "",
    district: "",
    detail: "",
  },
  name: "",
  phone: "",
  email: "",
});

// 清空訂房人資訊
const resetUserForm = () => {
  userInfo.value = {
    address: {},
  };
};

// 被選取的房型
const selectedRoomInfo = ref({});

// 選取要預訂的房型
const handleReservation = (roomInfoData) => {
  selectedRoomInfo.value = roomInfoData;
  resetUserForm();
};

// 建立訂單
const confirmOrder = (roomInfo, userInfo) => {
  createReservation({
    ...roomInfo,
    user: {
      ...userInfo,
    },
  });
  router.push("/order");
};
</script>

<template>
  <div class="container-fluid mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div
          class="card mb-3 border-0"
          :class="{ 'bg-light': room.name === selectedRoomInfo.name }"
          v-for="room in roomsList"
          :key="room._id"
        >
          <div class="row g-0 align-items-center">
            <div class="col-md-4">
              <img
                :src="room.imageUrl"
                class="card-img-top w-100"
                :alt="room.name"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body px-3 py-0">
                <h2 class="card-title">{{ room.name }}</h2>
                <p class="card-text">
                  {{ room.description }}
                </p>
                <p class="card-text d-flex justify-content-between">
                  <strong>價格:{{ room.price }}</strong>
                </p>
                <button
                  type="button"
                  class="btn btn-primary stretched-link"
                  @click="handleReservation(room)"
                >
                  我要預訂
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4" v-if="selectedRoomInfo._id">
        <h3 class="mb-3">訂房資訊</h3>
        <p class="fs-1">
          {{ selectedRoomInfo.name }}
        </p>
        <hr />
        <section class="mb-5">
          <h3>訂房人資訊</h3>
          <form class="d-flex flex-column gap-6">
            <div class="mb-3">
              <label for="name" class="form-label fs-8 fs-md-7 fw-bold"
                >姓名</label
              ><input
                id="name"
                type="text"
                class="form-control rounded-3"
                placeholder="請輸入姓名"
                name="name"
                v-model="userInfo.name"
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label fs-8 fs-md-7 fw-bold"
                >手機號碼</label
              ><input
                id="phone"
                type="tel"
                class="form-control rounded-3"
                placeholder="請輸入手機號碼"
                name="phone"
                v-model="userInfo.phone"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label fs-8 fs-md-7 fw-bold"
                >電子信箱</label
              ><input
                id="email"
                type="email"
                class="form-control rounded-3"
                placeholder="請輸入電子信箱"
                name="email"
                v-model="userInfo.email"
              />
            </div>
            <div data-v-a22825e2="" class="mb-3">
              <label for="road" class="form-label fs-8 fs-md-7 fw-bold"
                >地址</label
              >
              <div class="d-flex gap-2 mb-4">
                <select
                  class="form-select"
                  name="county"
                  v-model="userInfo.county"
                >
                  <option selected disabled>請選擇縣市</option>
                  <option value="高雄市">高雄市</option></select
                ><select
                  class="form-select"
                  name="district"
                  v-model="userInfo.district"
                >
                  <option selected disabled>請選擇行政區</option>
                  <option value="前金區">前金區</option>
                  <option value="鹽埕區">鹽埕區</option>
                  <option value="新興區">新興區</option>
                </select>
              </div>
              <input
                id="road"
                type="text"
                class="form-control rounded-3"
                placeholder="請輸入詳細地址"
                name="road"
                v-model="userInfo.detail"
              />
            </div>
          </form>
        </section>
        <section class="mb-5">
          <h3>房型基本資訊</h3>
          <ul class="list-unstyled d-flex">
            <li>
              <div class="badge bg-light text-dark fs-5">
                {{ selectedRoomInfo?.areaInfo }}
              </div>
            </li>
            <li>
              <div class="badge bg-light text-dark fs-5">
                {{ selectedRoomInfo?.bedInfo }}
              </div>
            </li>
            <li>
              <div class="badge bg-light text-dark fs-5">
                {{ selectedRoomInfo?.bedInfo }}
              </div>
            </li>
          </ul>
        </section>
        <section class="mb-5">
          <h3>房間格局</h3>
          <ul class="list-unstyled d-flex">
            <li
              class="mx-1"
              v-for="layout in selectedRoomInfo.layoutInfo"
              :id="layout.title"
            >
              <div class="badge bg-light text-dark fs-5">
                {{ layout.title }}
              </div>
            </li>
          </ul>
        </section>
        <section class="mb-5">
          <h3>房內設備</h3>
          <ul class="list-unstyled d-flex flex-wrap">
            <li
              class="mx-1"
              v-for="layout in selectedRoomInfo.facilityInfo"
              :id="layout.title"
            >
              <div class="badge bg-light text-dark fs-5">
                {{ layout.title }}
              </div>
            </li>
          </ul>
        </section>
        <button
          class="btn btn-secondary btn-lg w-100"
          @click="confirmOrder(selectedRoomInfo, userInfo)"
        >
          確認訂房
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  max-width: 100%;
}
</style>
