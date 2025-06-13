// stores/authStore.js
import { defineStore } from "pinia"
import axios from "axios"

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    error: null
  }),
  actions: {
    async signup(email, password) {
      this.loading = true
      this.error = null

      try {
        const res = await axios.post("http://localhost:3000/auth/signup", {
          email,
          password
        })

        this.user = res.data.user
      } catch (err) {
        this.error = err.response?.data?.error || "Signup failed"
        throw err
      } finally {
        this.loading = false
      }
    }
  }
})
