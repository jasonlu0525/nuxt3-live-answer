export const useBookingStore = defineStore("booking", () => {
  const selectedRoomInfo = ref({});
  const bookingResult = ref({});

  // 
  const setReservationData = (reservationData) => {
    selectedRoomInfo.value = reservationData;
    bookingResult.value = {};
  };

  const createReservation = (reservationInfos) => {
    bookingResult.value = reservationInfos;
    selectedRoomInfo.value = {};
  };

  return {
    selectedRoomInfo,
    bookingResult,
    setReservationData,
    createReservation,
  };
});
