<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">Add/Edit Theme</h2>
            <input/>
        </div>
    </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    components: {
    },
    data: () => ({
      storyForm: {
        id: 1,
        title: 'Living Labor Free - update',
        author_id: 1,
        description: 'this is a placeholder description of the Living Labor Free story - update'
      }
    }),
    created () {
      this.fetchData()
    },
    
    methods: Object.assign({
        fetchData () {
            // console.log(this.$store.getters)
            // console.log(this.$store.getters.testGetter)
            // console.log(this)
            // console.log(this.$store)
            // console.log(this.$store._actions)
            // console.log(this.$store._actions.getStoryById)
            // var gsbi = this.$store._actions.getStoryById[0]
            // console.log(gsbi(1))

          
            // this.getStoryById(1)
            //   .then((result) => {
            //     console.log(result)
            //   })
          
            this.updateStory(this.storyForm)
              .then((result) => {
                console.log('updateStory result')
                console.log(result)
              })

            //  https://stackoverflow.com/questions/40165766/returning-promises-from-vuex-actions
        }
      }, 
      mapActions([
        'getStoryById',
        'updateStory'
      ])
    )
  }
</script>
