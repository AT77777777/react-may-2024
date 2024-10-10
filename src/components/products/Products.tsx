import React, {FC} from 'react';
import {data} from "../../data";
import {IProduct} from "../../models/IProductModel";
import Product from "../product/Product";

const Products: FC<any> = () => {
    const products: IProduct[] = data.products;

    console.log(products)

    return (
        <div>{
            products.map((product: IProduct) => (<Product key={product.id} item={product} />))
        }
        </div>
    );
};

export default Products;