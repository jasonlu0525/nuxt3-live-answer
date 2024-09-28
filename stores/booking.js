export const useBookingStore = defineStore("booking", () => {
  const bookingInfo = ref({});

  const setBookingInfo = (bookingData) => {
    bookingInfo.value = bookingData;
  };

  return { bookingInfo, setBookingInfo };
});
