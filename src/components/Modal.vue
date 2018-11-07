<template>
<div>


<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">카테고리 필터</h4>
        <button type="button" @click="closeModal" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <div class="btn-group" id="filterCategory" data-toggle="buttons" v-for="category in this.$props.categories" :key="category.no">
          <label class="btn btn-primary">
            <input type="radio" name="toggle" v-bind:id="'option-'+category.no"
             autocomplete="off"
             v-bind:value="category.no"
             class="toggle"
              > 
             {{category.no}}.{{category.name}} 
          </label>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" @click="saveCategory" class="btn btn-primary" data-dismiss="modal">저장</button>
      </div>
    </div>
  </div>
</div>

</div>
</template>
<script>
export default {
  name: 'Modal',
  methods: {
    saveCategory: function() {
      this.$props.closeModal()
      const category = $('#filterCategory input[name=toggle]:checked').val()
      this.$props.filtering(category)
    }
  },
  data() {
    return {}
  },
  mounted() {
    $('#myModal').modal('show')
  },

  destroyed() {},
  props: ['closeModal', 'categories', 'filtering']
}
</script >

<style lang="less" scoped>
@modal-background: rgba(0, 0, 0, 0.7);
.modal {
  background: @modal-background;
}
</style>
