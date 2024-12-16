<template>
  <div>
    <h1>Dados do Backend:</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from "axios"
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const message = ref('');

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data');
        message.value = response.data.message;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    onMounted(fetchData);

    return { message };
  },
};
</script>
