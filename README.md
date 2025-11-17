১. TypeScript-এ keyof Keyword-এর ব্যবহার
TypeScript-এ keyof keyword টি একটি খুবই গুরুত্বপূর্ণ টপিক যা আমাদেরকে একটি object type-এর key গুলোর union type তৈরি করতে সাহায্য করে।
keyof কি?
keyof একটি type operator যা একটি object type নিয়ে তার key গুলোর নামগুলোর union type রিটার্ন করে।
keyof keyword টি TypeScript-এর type safety বজায় রাখতে এবং runtime errors কমাতে খুবই কার্যকরী।
interface Person {
    name: string;
    age: number;
    email: string;  
}

type PersonKeys = keyof Person;
// Result: "name" | "age" | "email"

২. TypeScript-এ Enum-এর ব্যবহার
Enum (Enumeration) TypeScript-এর একটি বিশেষ ফিচার যা named constant values এর সেট তৈরি করতে ব্যবহৃত হয়।
enum HttpStatus {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    InternalServerError = 500
}

function handleResponse(status: HttpStatus): void {
    if (status === HttpStatus.OK) {
        console.log("Request successful");
    } else if (status === HttpStatus.NotFound) {
        console.log("Resource not found");
    }
}

handleResponse(HttpStatus.OK); 
// "Request successful"
Enum-এর সুবিধাসমূহ:
১. Code Readability: ম্যাজিক নাম্বার/স্ট্রিং এর পরিবর্তে meaningful names ব্যবহার করা যায়
২. Type Safety: ভুল value assign হলে TypeScript error দেখাবে
৩. Auto-completion: IDE-তে better auto-completion পাওয়া যায়
৪. Reverse Mapping: Numeric enum-এ key থেকে value এবং value থেকে key পাওয়া যায়