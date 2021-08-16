<template>
  <footer>
    <p>&copy; {{ 1900 + new Date().getYear() }} | Made with ❤ by Waweru.</p>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  font-size: 0.9rem;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
