<template>
  <div @keydown.up.down.35.36.9="onKeyDown" ref="list">
    <article v-for="(item, index) in items" :key="item.slug">
      <a :name="item.slug"></a>
      <h3>
        <button 
          :aria-expanded="`${openIndex === index}`"
          :aria-controls="item.slug"
          :data-index="index"
          :ref="`${item.slug}`"
          @click="onButtonClicked($event, index)">
          <slot :name="item.id"></slot>
        </button>
      </h3>
      
      <div v-show="openIndex === index">
        <slot :name="item.slug"></slot>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array
      }
    },

    data() {
      return {
        focusIndex: null,
        openIndex: null,
      }
    },

    computed: {
      numberOfAccordionItems() {
        return this.$refs.list.childElementCount - 1
      }
    },

    methods: {
      onButtonClicked(event, index) {
        this.openIndex = index
      },

      onKeyDown(event) {
        const key = event.which.toString()

        switch (key) {
          // Up key
          case "38":
            this.onFocusPrevious(event.target)
            break
          // Down key
          case "40":
            this.onFocusNext(event.target)
            break
          // Home key
          case "36":
            this.onFocusFirst(event.target)
            break
          // End key
          case "35":
            this.onFocusLast(event.target)
            break
          // Tab key
          case "9":
            this.onTabPressed()
            break
          default:
            return false
        }
      },

      onFocusFirst() {
        this.focusIndex = 0
      },

      onFocusLast() {
        this.focusIndex = this.numberOfAccordionItems
      },

      onFocusPrevious(element) {
        const indexAccordionItem = Number(element.getAttribute("data-index"))
        if (indexAccordionItem !== 0) {
          this.focusIndex = indexAccordionItem - 1
          return
        }
        this.focusIndex = this.numberOfAccordionItems
      },

      onFocusNext(element) {
        const indexAccordionItem = Number(element.getAttribute("data-index"))
        if (indexAccordionItem !== this.numberOfAccordionItems) {
          this.focusIndex = indexAccordionItem + 1
          return
        }
        this.focusIndex = 0
      },

      // Reset focus state for edge case where a combination of the tab key and arrow keys don't update the focus state.
      onTabPressed() {
        this.focusIndex = null
      }
    },

    watch: {
      focusIndex(newValue) {
        if (newValue || newValue === 0) {
          const button = this.$refs.list.children[this.focusIndex].querySelector('button')
          const ariaControlsButton = button.getAttribute('aria-controls')
          this.$refs[ariaControlsButton][0].focus()
        }
      }
    }
  }
</script>
