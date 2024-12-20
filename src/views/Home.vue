<template>
  <div>
    <h1>Dados do Backend: {{message}}</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import app from "/src/shared/services/api.ts";

export default {
  setup() {
    const message = ref('');

    const fetchData = async () => {
      try {
        const response = await app.get('/teste');
        console.log(response)
        message.value = response.data;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    onMounted(fetchData);

    return { message };
  },
};
</script>
