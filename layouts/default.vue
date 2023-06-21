<template>
  <div>
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>


<script setup>
import { AppHeader } from "@/components/organisms/Header";
import { AppFooter } from "@/components/organisms/Footer";
</script>

<style lang='scss' scoped>
main {
  margin-top: 80px;
}
</style>
