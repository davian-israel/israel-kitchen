import ProductList from "@/components/shared/product/product-list";
import { sampleData } from "@/db/sampleData";

const Homepage = () => {
  return ( 
    <>
      <ProductList data={sampleData} title='Newest Arrival' />
    </> 
  );
}
 
export default Homepage;