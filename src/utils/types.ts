
export type TingredintsConstructor = {
  calories?: number;
  carbohydrates?: number;
  count?: number;
  fat?: number;
  image: string;
  image_large?: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins?: number;
  type?: string;
  __v?: number;
  _id?: string;
  _uuid?: string;
};

export type TConstructorCard = {
  data: TingredintsConstructor;
  index: number;
  ingredient: TingredintsConstructor;
  handleDeliteElement;
}

