<template>
    <li class="categoryTag">
       {{Category.name}} 
    </li>
</template>
<script>
export default {
  props: {
    Category: {
      type: Object
    }
  }
}
</script>
