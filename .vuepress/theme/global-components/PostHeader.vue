<template>

  <div class="ui-post-header">
    <div class="ui-post-title">
      <h1>{{ this.$page.title }}</h1>
    </div>

    <div class="ui-post-author" v-if="this.$page.frontmatter.author">
      <span>
        By {{ this.$page.frontmatter.author }}
        <span v-if="this.$page.frontmatter.location">in {{ this.$page.frontmatter.location }}</span>
      </span>
    </div>

    <div class="ui-post-date" v-if="this.$page.frontmatter.date">
        <span>{{ resovlePostDate(this.$page.frontmatter.date) }}</span>
    </div>

    <div class="ui-post-tags" v-if="this.$page.frontmatter.tag">
      Tagged in: 
      <span class="ui-post-tag" v-for="tag in this.$page.frontmatter.tag">
        <span><a :href="'/tag/' + tag">{{ tag }}</a></span>
      </span>
    </div>
  </div>

</template>

<script>
export default {
      methods: {
      resovlePostDate(date) {
        return new Date(date.replace(/\-/g, "/").trim()).toDateString()
      },
    }
}
</script>

<style>
.ui-post-tag {
  margin-left: 5px;
}

</style>