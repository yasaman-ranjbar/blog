<template>
  <div>


    <section class="hero is-info is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title"> صفحه مقالات مربوط به وب سایت هینا </h1>
      </div>
      </div>
    </section>


    <div class="container">
    <!-- START ARTICLE FEED -->
    <section class="articles">
      <div class="column is-8 is-offset-2">
        <!-- START ARTICLE -->
        <div class="card article">
          <div class="card-content" v-for="(post, index) in posts" :key="post.id">
            <div class="media">
              <div class="media-content has-text-centered">
                <p class="title article-title"> {{ post.index }} : {{ post.title }}</p>
                <div class="tags has-addons level-item">
                  <span class="tag is-rounded is-info">@{{ users.find( user => user.id === post.userId ).username }}</span>
                  <span class="tag is-rounded">May 10, 2018</span>
                </div>
              </div>
            </div>
            <div class="content article-body">
              {{ post.body }}
            </div>
          </div>
        </div>
        <!-- END ARTICLE -->
      </div>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "posts",

  middleware: [
    'auth'
  ],

  async asyncData(context){
    const posts = await context.$axios.$get('/posts')
    const users = await context.$axios.$get('/users')

    return{
      posts,
      users
    }
  }
}


</script>

<style scoped>

</style>
