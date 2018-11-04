<template>
    <li>{{StoryAttribute.name}}</li>
</template>
<script>
export default {
  props: {
    StoryAttribute {
      type: Object
    }
  }
}
