<template>
    <li class="themeTag">
       {{Theme.name}} 
    </li>
</template>
<script>
export default {
  props: {
    Theme: {
      type: Object
    }
  }
}
</script>

