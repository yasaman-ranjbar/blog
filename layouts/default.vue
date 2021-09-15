<template>
  <div>
      <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
                  <img src="https://bulmatemplates.github.io/bulma-templates/images/bulma.png" alt="" width="100" height="50" />
            </div>
              <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                    <nuxt-link class="navbar-item is-active" :to="{ name : 'index'}">
                      صفحه اصلی
                    </nuxt-link>
                    <nuxt-link class="navbar-item" :to="{ name : 'users'}">
                      کاربران
                    </nuxt-link>
                    <nuxt-link class="navbar-item" :to="{ name : 'posts'}">
                      مقالات
                    </nuxt-link>
                 </div>
              </div>
          </div>
      </nav>
    <Nuxt />
  </div>

</template>

<script>
export default {
  name: "default",

}
</script>

<style scoped>

</style>
