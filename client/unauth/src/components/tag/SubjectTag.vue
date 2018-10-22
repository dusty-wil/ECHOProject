<template>
    <router-link tag="li" :to="'/story/search/bySubject/' + Subject.id" class="subjectTag">
       <a>{{Subject.name}}</a>
    </router-link>
</template>
<script>
export default {
  props: {
    Subject: {
      type: Object
    }
  }
}
</script>
