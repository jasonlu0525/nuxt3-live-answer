import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

const { Modal, Offcanvas } = bootstrap;

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      bootstrapModal: (element, options) => new Modal(element, options),
      bootstrapOffcanvas: (element, options) => new Offcanvas(element, options),
    },
  };
});
