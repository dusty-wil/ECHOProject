<template>
    <li class="periodTag">
       {{Period.name}} 
    </li>
</template>
<script>
export default {
  props: {
    Period: {
      type: Object
    }
  }
}
</script>
