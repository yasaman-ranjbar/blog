<template>
  <div class="container">
    <p class="is-size-1"> counter : {{ $store.state.counter }}  </p>
    <button class="button is-primary" @click="$store.dispatch('increment')"> افزایش</button>
    <button class="button is-danger" @click="$store.dispatch('decrement')">کاهش </button>
  </div>
</template>

<script>
export default {


}
</script>
