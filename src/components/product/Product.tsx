import React, {FC} from 'react';
import {IProduct} from "../../models/IProductModel";

type IProps = {
    item: IProduct
}

const Product: FC<IProps> = ({item}) => {
    console.log(item);
    return (
        <div>
            <h2>{item.title}</h2>
            <img src={item.thumbnail} alt={item.title}/>
        </div>
    );
};

export default Product;