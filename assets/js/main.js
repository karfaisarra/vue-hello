const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Vue Hello!',
        urlImg: 'https://picsum.photos/200/300',
      }
    }
  }).mount('#app')