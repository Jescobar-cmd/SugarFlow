import {z} from 'zod';
import { ProductsRules } from './rules.js';

export const createProductSchema = z.object({
  name: ProductsRules.nameRule,
  description: ProductsRules.descriptionRule,
  price: ProductsRules.priceRule,
  category: ProductsRules.categoryRule,
  imageUrl: ProductsRules.imageUrlRule
});