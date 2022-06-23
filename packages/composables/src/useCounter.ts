import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)

  const add = () => count.value++
  const subtract = () => count.value--

  return {
    count,
    add,
    subtract,
  }
}
