export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  const getNews = async () => {
    const url = `https://nuxr3.zeabur.app/api/v1/home/news/`;
    isLoading.value = true;

    try {
      const response = await fetch(url);

      if (response.ok) {
        const { result } = await response.json();
        newsList.value = result;
        isLoading.value = false;
        return;
      }
      throw new Error(`發生錯誤: ${response.status}`);
    } catch (error) {
      if (import.meta.client) {
        alert(`Error: ${error.message}`);
      } else {
        console.error(`Error fetching news: ${error.message}`);
      }
      isLoading.value = false;
    }
  };

  return {
    newsList,
    isLoading,
    getNews,
  };
};
