module.exports = {
  // 제품리스트 불러오기
  productList: {
    query:
      "SELECT t1. *, t2.path, t3.category1, t3.category2, t3.category3 FROM t_product t1, t_image t2, t_category t3 WHERE t1.id = t2.product_id AND t2.type = 3 AND t1.catagory_id = t3.id",
  },
  sellerList: {
    query: "SELECT * from t_seller",
  },

  // 제품상세페이지 이미지 & 정보 불러오기
  productDetail: {
    query:
      "SELECT t1. *, t2.path, t3.category1, t3.category2, t3.category3 FROM t_product t1, t_image t2, t_category t3 where t1.id = ? and t1.id = t2.product_id and t2.type = 3 AND t1.catagory_id = t3.id",
  },

  // 제품상세페이지 슬라이드 이미지 불러오기
  productMainImages: {
    query: "SELECT * from t_image where product_id = ? and type = 2",
  },

  // 제품 정보 삽입하기
  productInsert: {
    query:
      "INSERT INTO t_product (product_name, product_price, delivery_price, add_delivery_price, tags, outbound_days, seller_id, catagory_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
  },

  // 제품 이미지 삽입
  productImageInsert: {
    query: "insert into t_image (product_id, type, path) values(?, ?, ?)",
  },
};
