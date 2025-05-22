import ProductList from "@/components/shared/product/product-list";
import { sampleData } from "@/db/sampleData";

const Homepage = async  () => {
  return ( 
    <>
      <ProductList data={sampleData} title='Latest Arrival' />
    </> 
  );
}
 
export default Homepage;