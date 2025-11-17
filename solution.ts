//no 1
function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else {
        return !value;
    }
}
//no 2
 function getLength(value: string | any[]): number {
    return value.length;
}
//no 3
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
//no 4
interface RatedItem {
    title: string;
    rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[] {
    return items.filter(item => item.rating >= 4);
}
//no 5
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive);
}
//no 6
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? 'Yes' : 'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}
// no 7
function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
    const combined = [...arr1, ...arr2];
    const unique: (string | number)[] = [];
    
    for (const item of combined) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    
    return unique;
}

// no 8
interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => {
        let productTotal = product.price * product.quantity;
        if (product.discount !== undefined) {
            productTotal -= productTotal * (product.discount / 100);
        }
        return total + productTotal;
    }, 0);
}