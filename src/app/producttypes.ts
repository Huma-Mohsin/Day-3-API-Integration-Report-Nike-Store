// types/product.ts, this types work on productlist component as well as card defined in component.
export interface Product {
    id: string;
    title:string,
    tags:string,
    description: string;
    color: string;
  
    price: number;
    imageUrl?: string;
     
  }
  