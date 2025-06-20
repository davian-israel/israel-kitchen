export const dynamic = "force-dynamic";

import ProductList from "@/components/shared/product/product-list";
import {getLatestProducts} from "@/lib/actions/product.actions";
import sampleData from "../../../db/sample-data";

const Homepage = async  () => {
  const latestProducts = await getLatestProducts();
  return ( 
    <>
      <ProductList data={latestProducts} title='Newest Arrival' limit={3} />
    </> 
  );
}
 
export default Homepage;