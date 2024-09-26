export const useBookingStore = defineStore("booking", () => {
  const bookingResult = ref({});

  const createReservation = (reservationInfos) => {
    bookingResult.value = reservationInfos;
  };

  return {
    bookingResult,
    createReservation,
  };
});
