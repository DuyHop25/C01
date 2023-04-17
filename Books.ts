// khai báo một mảng lưu trữ thông tin sách
const books = [
    {
        id: 1,
        name: "Luật tâm thức",
        price: 200000,
        provider: "Fahasha",
    },
    {
        id: 2,
        name: "Chiến binh cầu vồng",
        price: 140000,
        provider: "Fahasha",
    },
    {
        id: 3,
        name: "Nghệ thuật tập trung",
        price: 90000,
        provider: "Tuổi trẻ",
    },
    {
        id: 4,
        name: "Bye Béo",
        price: 305000,
        provider: "Kmin Books",
    },
    {
        id: 5,
        name: "Sát thủ bán hàng",
        price: 180000,
        provider: "Fahasha",
    },
    {
        id: 6,
        name: "Hoàng tử bé",
        price: 50000,
        provider: "Kmin Books",
    },
    {
        id: 7,
        name: "Tâm lý học tội phạm",
        price: 400000,
        provider: "Kmin Books",
    },
    {
        id: 8,
        name: "Hiểu về trái tim",
        price: 130000,
        provider: "Tuổi trẻ",
    },
];

let count: number = 0;                      // biến đếm (biến toàn cục)

let average: number = 0;                    // biến lưu giá trị trung bình cộng (biến toàn cục)

const longArray: number = books.length;     // biến lưu giá trị độ dài mảng sách (biến toàn cục)


/**
 * Hàm thống kê số lượng sách của một nhà xuất bản
 * @param Books Mảng sách cho trước
 * @param checkPublisher Hàm kiểm tra tên nhà xuất bản
 * @returns số lượng sách
 */
const countBooksOfPublisher = (Books: any[], checkPublisher: (item: string) => boolean): number => {
    let count: number = 0;

    for (let item of Books) {
        if (checkPublisher(item.provider))
            count++;
    }

    return count;
}

/**
 * Hàm tính trung bình cộng giá bán của các quyển sách.
 * @param Books Mảng sách cho trước
 * @returns trung bình giá tất cả sách
 */
const getAvaeragePrice = (Books: any[]): number => {

    for (let item of Books) {
        average += item.price;
    }

    return average / longArray;

}

// const findMaxPrice = (Books: any[]): number[] => {
//     let max: number = 0 ;
//     for (let item of Books) {
//         if (max < item.price)
//             max = item.price;
//     }

//     const checkPrice = (Books: any[]): number[] => {
//     let idMaxPrice :number[] = [];
//         for(let item of Books){
//             if (max == item.price)
//                 idMaxPrice+=item.id;
//         }
//         return idMaxPrice;
//     }
//     return checkPrice
// }


/**
 * Hàm kiểm tra dữ liệu của mảng sách có hợp lệ không.
 * @param Books Mảng sách cho trước
 * @param checkName Hàm kiểm tra tên sách
 * @param checkPrice Hàm kiểm tra giá sách
 * @returns 
 */
const isValid = (Books: any[],
    checkName: (name: string) => boolean,
    checkPrice: (price: number) => boolean
): boolean => {

    let flag: boolean = true;

    for (let item of Books) {
        if (checkName(item.name) || checkPrice(item.price)) {
            flag = false;
        }
    }

    return flag;
}


/**
 * Hàm lấy danh sách các quyển sách có giá trong đoạn [min, max] 
 * @param Books Mảng sách cho trước
 * @param min giá trị min (đối số mặc định nếu không truyền đối số khi gọi hàm)
 * @param max giá trị max (đối số mặc định nếu không truyền đối số khi gọi hàm)
 * @returns Mảng sách có giá trong khoảng [min,max]
 */

const filterByPrice = (Books: any[], min: number = 30000, max: number = 300000): any[] => {
    let filteredArray: any[] = [];

    for (let item of Books) {

        if (item.price >= min && item.price <= max) {
            filteredArray.push(item);
        }

    }

    return filteredArray;

}


/**
 * Hàm lấy danh sách các quyển sách có tên giống với một từ khóa cho trước 
 * @param Books Mảng sách cho trước
 * @param keyword từ khóa cho trước (có đối số mặc định là 'tuổi trẻ')
 * @returns Mảng sách có tên bằng với từ khóa truyền vào
 */
const searchByName = (Books: any[], keyword: string = "Sát thủ bán hàng"): any[] => {
    const filteredArray: any[] = [];

    for (let item of Books) {
        if (item.name == keyword) {
            filteredArray.push(item);
        }
    }

    return filteredArray;

}

function main(): void {
    // 1. Viết hàm countBooksOfPublisher() dùng để thống kê số lượng sách của một nhà xuất bản sách nào đó.
    const filterByPublisher = countBooksOfPublisher(books, (publisher) => publisher == 'Fahasha');
    console.log("Số lượng sách của nhà xuất bản Fahasha:", filterByPublisher);
    

    // 2. Viết hàm getAvaeragePrice() dùng để tính trung bình cộng giá bán của các quyển sách.
    const AvaeragePrice = getAvaeragePrice(books);
    console.log("\nTrung bình cộng tất cả các quyển sách:", AvaeragePrice);


    // 3. Viết hàm findMaxPrice() trả về id của sách có giá cao nhất.
    // const idMaxPrice = findMaxPrice(books);
    // console.log(idMaxPrice);


    // 4. Viết hàm isValid() cho biết dữ liệu của mảng sách có hợp lệ không. 
    //Dữ liệu mảng hợp lệ khi tất cả dữ liệu của các cuốn sách đều hợp lệ. 
    //Một cuốn sách hợp lệ là cuốn sách thỏa mãn tất cả điều kiện sau: 
    // 1) Tên sách không rỗng và 
    // 2) Giá bán phải lớn hơn 0
    const bookValid = isValid(books, (name_book) => name_book == '', (price_book) => price_book < 0);
    if (bookValid == true)
        console.log("\nSách hợp lệ");
    else
        console.log("\nSách không hợp lệ");


    // 5.Viết hàm filterByPrice() dùng để lấy danh sách các quyển sách có giá trong đoạn [min, max] 
    let filterPrice = filterByPrice(books, 20000, 400000);  // truyền giá trị min,max vào đối số
    console.log("\nDanh sách quyển sách có giá trong đoạn [20000;400000]", filterPrice);

    filterPrice = filterByPrice(books);                     // đối số có giá trị min,max mặc định
    console.log("\nDanh sách quyển sách có giá trong đoạn [min,max] cho trước", filterPrice);


    // 6.Viết hàm searchByName() lấy danh sách các quyển sách có tên giống với một từ khóa cho trước 
    // (từ khóa là tham số, trả về mảng sách thỏa yêu cầu).
    let findNamebook = searchByName(books,"Luật tâm thức");              // truyền giá trị tên sách vào đối số
    console.log("\nThông tin sách có tên 'Luật tâm thức'", findNamebook);

    findNamebook = searchByName(books);                                 // đối số có giá trị tên sách mặc định
    console.log("\nThông tin sách có tên sách truyền mặc định", findNamebook);

}
main();
