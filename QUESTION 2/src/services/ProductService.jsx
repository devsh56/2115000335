import { api } from '../apis/axios'
class ProductService {
    GetAllProduct() {
        return api.get("/all");
    }
    getTopProducts(a,b,c,d,e){
        return api.get(`/companies/${a}/categories/${b}/products`,{params:{top:c,minPrice:d,maxPrice:e}})
    }
}
export default new ProductService();