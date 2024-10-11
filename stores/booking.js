export const useBookingStore = defineStore("booking", () => {
  const bookingInfo = ref({});

  const roomInfo = ref({});

  const setBookingInfo = (bookingData) => {
    bookingInfo.value = bookingData;
  };

  const setRoomInfo = (roomData) => {
    roomInfo.value = roomData;
  };

  return { setRoomInfo, setBookingInfo, bookingInfo, roomInfo };
});
