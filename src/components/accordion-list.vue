<template>
  <div @keydown.up.down.35.36.9="onKeyDown" ref="list">
    <slot :openIndex="openIndex" :focusIndex="focusIndex" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        focusIndex: null,
        openIndex: null
      }
    },

    computed: {
      numberOfAccordionItems() {
        return this.$refs.list.childElementCount - 1
      }
    },

    mounted() {
      this.$on("open", this.onOpen)
    },

    methods: {
      /**
       * @param {obj} VueComponent The component that initiated the emitted event.
       */
      onOpen(obj) {
        this.openIndex = Number(obj.$props.index)
      },

      onKeyDown(event) {
        const key = event.which.toString()
        
        switch(key) {
          // Up key
          case '38':
            this.onFocusPrevious(event.target)
            break
          // Down key
          case '40':
            this.onFocusNext(event.target)
            break
          // Home key
          case '36':
            this.onFocusFirst(event.target)
            break
          // End key
          case '35':
            this.onFocusLast(event.target)
            break
          // Tab key
          case '9':
            this.onTabPressed()
            break
         default:
           return false
        }
      },

      onFocusPrevious(element) {
        const indexAccordionItem = Number(element.getAttribute('data-index'))
        if (indexAccordionItem !== 0) {
          this.focusIndex = indexAccordionItem - 1
          return
        }
        this.focusIndex = this.numberOfAccordionItems
      },

      onFocusNext(element) {
        const indexAccordionItem = Number(element.getAttribute('data-index'))
        if (indexAccordionItem !== this.numberOfAccordionItems) {
          this.focusIndex = indexAccordionItem + 1
          return
        }
        this.focusIndex = 0
      },

      onFocusFirst() {
        this.focusIndex = 0
      },

      onFocusLast() {
        this.focusIndex = this.numberOfAccordionItems
      },

      // Reset focus state for edge case where a combination of the tab key and arrow keys don't update the focus state.
      onTabPressed() {
        this.focusIndex = null
      }
    }
  }
</script>
