import {IBook} from "../component/Book";
import * as faker from 'faker';
import { Util } from "../util";
// No Changes to be made in this function
export default class BookService {
    static fetchBooks = async ({minPrice=0, maxPrice=1000, minQty=0, page=1}) => {
        if (minPrice <= 0 || maxPrice >= 1000 || minPrice > maxPrice) throw new Error("No Books found");
        if (page >= 3) return [];
        const books = [];
        await Util.sleep(2);
        for (let i = 0; i < 10; i++) {
            const book: IBook = {
                id: Date.now(),
                title: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                pricePerQty: Number(faker.commerce.price(minPrice, maxPrice)),
                totalQuantity: Number(faker.commerce.price(minQty, minQty+10))
            }
            books.push(book);
            await Util.sleep(0.01)
        }
        return books;
    }
}
