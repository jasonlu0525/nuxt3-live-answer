<script setup>
const { $bootstrapModal, $bootstrapOffcanvas } = useNuxtApp();

// modal
const modalRef = ref(null);
let modal;
const showModal = () => {
  modal.show();
};
const closeModal = () => {
  modal.hide();
};

// offcanvas

const offcanvasRef = ref(null);
let offcanvas;
const showOffcanvas = () => {
  offcanvas.show();
};
const closeOffcanvas = () => {
  offcanvas.hide();
};

onMounted(() => {
  modal = $bootstrapModal(modalRef.value, {
    keyboard: false,
  });
  offcanvas = $bootstrapOffcanvas(offcanvasRef.value, {
    keyboard: false,
    backdrop: false,
  });
});
</script>

<template>
  <div class="container mb-5">
    <button type="button" class="btn btn-primary" @click="showModal">
      開啟 Modal
    </button>
  </div>
  <!-- modal 元件 -->
  <div
    class="modal fade"
    id="staticBackdrop"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref="modalRef"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <button type="button" class="btn btn-secondary" @click="showOffcanvas">
      開啟 Offcanvas
    </button>
  </div>
  <!-- Offcanvas  元件 -->
  <div
    class="offcanvas offcanvas-bottom"
    tabindex="-1"
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
    ref="offcanvasRef"
  >
    <div class="offcanvas-header">
      <h3 class="offcanvas-title" id="offcanvasBottomLabel">
        Offcanvas bottom
      </h3>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="closeOffcanvas"
      ></button>
    </div>
    <div class="offcanvas-body small">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eius
      perferendis illum cum vero cumque totam repudiandae accusantium facere est
    </div>
  </div>
</template>

<style scoped></style>
