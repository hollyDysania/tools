<!-- 分页可公用组件 基于element-ui二次封装-->
<template>
  <div
    :class="{'hidden':hidden}"
    class="pagination-container"
  >
    <!-- .sync修饰符 当子组件prop值改变时 对应的父组件也同步 -->
    <el-pagination
      :background="background"
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :layout="layout"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { scrollTo } from '@/utils/scrollTo'

export default {
  name: 'Pagination',
  props: {
    // 数据总条数
    total: {
      required: true,
      type: Number
    },
    // 当前页
    page: {
      type: Number,
      default: 1
    },
    // 每页数据条数默认10
    size: {
      type: Number,
      default: 10
    },
    // 可变分页数组
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 50]
      }
    },
    // 布局
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    // 背景色
    background: {
      type: Boolean,
      default: false
    },
    // 改变size或pageSize是否回到文档顶部
    autoScroll: {
      type: Boolean,
      default: false
    },
    // 隐藏
    hidden: {
      type: Boolean,
      default: false
    }
  },
    computed: {
      // 改变currentPage和pageSize的setter
      currentPage() {
        return this.page
      },
      pageSize() {
        return this.size
      }
    },
  methods: {
    handleSizeChange(val) {
      this.$emit('update:size', val)
      this.$emit('pagination', '')
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    },
    handleCurrentChange(val) {
      this.$emit('update:page', val)
      this.$emit('pagination', '')
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    }
  }
}
</script>

<style scoped>
.pagination-container {
  background: #fff;
  padding: 32px 16px;
}
.pagination-container.hidden {
  display: none;
}
</style>
