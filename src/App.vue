<template>
  <div class="container mx-auto p-10">
    <h1 class="text-5xl font-bold font-mont mb-4">Персонажи из "Rick и Morty"</h1>
    <div class="mb-4">
      <input v-model="filters.name" type="text" placeholder="Введите имя" class="border border-opacity p-3 mr-2 bg-opacity rounded-lg text-sm w-60 font-mont text-gray-400"/>
      <select v-model="filters.status" class="border border-opacity bg-opacity rounded-lg p-3 mr-2 text-sm w-60 font-mont text-gray-400">
        <option value="">Любой статус</option>
        <option value="alive">Живые</option>
        <option value="dead">Мертвые</option>
        <option value="unknown">Неизвестно</option>
      </select>
      <button @click="applyFilters" class="bg-grad text-white px-5 text-sm py-3 rounded-lg font-mont">Применить</button>
    </div>
    <p v-if="message" class="text-red-500 mb-4">{{ message }}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="character in characters" :key="character.id" class="char-card p-4">
        <h2 class="text-xl font-bold mb-2">{{ character.name }}</h2>
        <p class="text-gray-300"><strong>Статус:</strong> {{ character.status }}</p>
        <p class="text-gray-300"><strong>Био. принадлежность:</strong> {{ character.species }}</p>
        <img :src="character.image" alt="Character Image" class="w-full h-64 object-cover rounded-xl mt-3">
      </div>
    </div>
    <div class="flex flex-row items-center justify-center mt-6">
      <button @click="prevPage" :disabled="page === 1" class="bg-opacity text-white px-4 py-2 mr-2 rounded-lg" :class="{'cursor-not-allowed opacity-50': page === 1}">Назад</button>
      <button @click="nextPage" :disabled="!hasNextPage" class="bg-opacity text-white px-4 py-2 rounded-lg" :class="{'cursor-not-allowed opacity-50': !hasNextPage}">Вперед</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const message = ref('');
    const characters = ref([]);
    const page = ref(1);
    const hasNextPage = ref(true);
    const filters = reactive({
      name: '',
      status: ''
    });

    const fetchCharacters = async () => {
      const params = {
        page: page.value,
        name: filters.name,
        status: filters.status
      };
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character', { params });
        characters.value = response.data.results;
        hasNextPage.value = !!response.data.info.next;
        message.value = '';
      } catch (error) {
        message.value = 'По вашему запросу ничего не найдено';
        characters.value = [];
        hasNextPage.value = false;
      }
    };

    const applyFilters = () => {
      page.value = 1;
      fetchCharacters();
    };

    const nextPage = () => {
      page.value++;
      fetchCharacters();
    };

    const prevPage = () => {
      if (page.value > 1) {
        page.value--;
        fetchCharacters();
      }
    };

    onMounted(() => {
      fetchCharacters();
    });

    return {
      characters,
      page,
      hasNextPage,
      filters,
      applyFilters,
      nextPage,
      prevPage,
      message
    };
  }
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: #09090c;
  color: #fff;
}

select option {
  background-color: #2d3748; 
  color: #fff;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
