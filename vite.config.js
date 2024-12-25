import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    modules: {
      localsConvention: "camelCase",
    }
  },
  server: {
    watch: {
      usePolling: true, // Enable polling mode for file watching
    },
  },
})


// css: {... }: This block configures how CSS is handled in the project.

//  modules: { localsConvention: "camelCase" }: This part of the css configuration enables CSS Modules(a way to locally scope CSS to avoid global conflicts).

// The localsConvention: "camelCase" setting transforms CSS class names written in kebab -case (e.g., my - class- name) into camelCase(e.g., myClassName) when they are imported in JavaScript files.

//all styles are global by default. This means that class names can conflict with each other if you're not careful. For example, if you have two different components that both use the class name button, they might unintentionally share styles, which could lead to bugs or unexpected behavior.

// CSS Modules allow you to write CSS in a way that the class names are scoped locally to the component or module where they are used. This prevents styles from conflicting with each other.