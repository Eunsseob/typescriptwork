export type Restaurant = {
    name: string;
    category: string;
    address: Address;
    menu: Menu[]; // 객체에 array 타입입니다.
}

// 타입안에 타입을 또 생성 할 수 있다.
export type Address = {
    city: string;
    detail: string;
    zipcode: string;
}

export type Menu = {
    name: string;
    price: number;
    category: string;
}

export type AddressWithoutZip = Omit<Address, 'zipcode'> // Address 타입에서 zipcode를 제외한 타입을 생성합니다.
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'> // Restaurant 타입에서 category만 가져오는 타입을 생성합니다.
export type ApiResponse<T> = {
    data: T[],
    totalPages: number,
    page: number,
}

export type ResturantResponse = ApiResponse<Restaurant> // Restaurant 타입을 ApiResponse에 넣어 새로운 타입을 생성합니다.
export type MenuResponse = ApiResponse<Menu> // Menu 타입을 ApiResponse에 넣어 새로운 타입을 생성합니다.