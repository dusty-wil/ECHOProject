<template>
    <div class="searchResult">
        <h4>{{SearchResult.title}}</h4>
        <p>
            {{SearchResult.author}} <br/>
            {{SearchResult.id}} <br/>
            {{SearchResult.desc}} 
        </p>
    </div>
</template>
<script>
export default {
  props: {
    SearchResult: {
      type: Object
    }
  }
}
</script>
