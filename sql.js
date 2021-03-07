module.exports = {
  productList: {
    query:
      "SELECT t1. *, t2.path, t3.category1, t3.category2, t3.category3 FROM t_product t1, t_image t2, t_category t3 WHERE t1.id = t2.product_id AND t2.type = 1 AND t1.catagory_id = t3.id",
  },
  sellerList: {
    query: "SELECT * from t_seller",
  },
  // 제품상세페이지 이미지 & 정보
  productDetail: {
    query:
      "SELECT t1. *, t2.path, t3.category1, t3.category2, t3.category3 FROM t_product t1, t_image t2, t_category t3 where t1.id = 1 and t1.id = t2.product_id and t2.type = 3 AND t1.catagory_id = t3.id",
  },
  // 제품 슬라이드 이미지
  productMainImages: {
    query: "SELECT * from t_image where product_id = 1 and type = 2",
  },
};
