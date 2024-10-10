import {IDimension} from "./IDimensionModel";
import {IReview} from "./IReviewModel";

export interface IProduct {
    "id": number,
    "title": string,
    "description": string,
    "category": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "tags": string[],
    "brand"?: string,
    "sku": string,
    "weight": number,
    "dimensions": IDimension,
    "warrantyInformation": string,
    "shippingInformation": string,
    "availabilityStatus": string,
    "reviews": IReview[],
    "returnPolicy": string,
    "minimumOrderQuantity": number,
    "meta": {
        "createdAt": string,
        "updatedAt": string,
        "barcode": string,
        "qrCode": string
    },
    "images": string[],
    "thumbnail": string
}