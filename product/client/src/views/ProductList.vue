<template>
  <main class="mt-3">
    <div class="container">
      <div class="row">
        <select class="form-select">
          <option selected></option>
          <option value="1">노트북</option>
          <option value="2">모니터</option>
          <option value="3">키보드/마우스</option>
        </select>
      </div>
      <div class="row g-3">
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          :key="i"
          v-for="(product, i) in productList"
        >
          <div class="card" style="width: 18rem;">
            <a href="product_detail.html">
              <img src="product.path" class="card-img-top" alt="..." />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                {{ product.product_name }}
              </h5>
              <p class="card-text">
                <span class="badge bg-dark text-white mr-1">{{
                  product.category1
                }}</span>
                <span class="badge bg-dark text-white mr-1">{{
                  product.category2
                }}</span>
                <span class="badge bg-dark text-white">{{
                  product.category3
                }}</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn-sm btn-dark">
                    장바구니 담기
                  </button>
                  <button type="button" class="btn-sm btn-dark">
                    주문하기
                  </button>
                </div>
                <small class="text-dark">{{ product.product_price }}원</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      productList: [],
    };
  },
  created() {
    this.getProductList();
  },
  methods: {
    async getProductList() {
      this.productList = await this.$api("/api/productList", {});
      console.log(this.productList);
    },
  },
};
</script>
