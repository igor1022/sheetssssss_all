const axios = require('axios');

// Укажите ваш API-ключ и ID объявления
const API_KEY = 'gR4U1eslf8KnOiRyhO1Xh78q866BrctfkGi8rxfy';
const listingId = 32396588; // Замените на реальный ID объявления

const url = `https://developers.ria.com/dom/info/${listingId}`;

async function getListingInfo() {
  try {
    const response = await axios.get(url, {
      params: {
        api_key: API_KEY
      }
    });
    
    console.log('Информация по объявлению:', response.data);
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}

getListingInfo();
