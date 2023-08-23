export interface Dict {
    [key: string]: any
}

export interface TableProps {
    [key: string]: TableProp
}

export interface TableProp {
    head: string
    body: string
    type?: string
}

export interface LoginState {
    user: UserLoginResponse
    loggedIn: boolean
    loadingInit: boolean
}

export interface UserLoginResponse {
    username: string
    role: string
    email: string
    token: string
}

export interface CountPajakHarian{
    location: string
    totalMatch: number
    totalVehicle: number
}

export interface CountPopulasiKendaraan{
    // privateCar: number
    // bus: number
    // transportCar: number
    // motorcycle: number
    // ransus: number
    // total: number
    name: string
    count: number
}

export interface CountPajakMati{
    privateCar: PajakKendaraan
    bus: PajakKendaraan
    transportCar: PajakKendaraan
    motorcycle: PajakKendaraan
    ransus: PajakKendaraan
    totalPAD: number
}

export interface PajakKendaraan{
    pajakMati: number
    potensiPAD: number
}

export interface ResponseDatasService<T> {
    data: T[]
    rows: number
}

export interface CountPopulasiPerTahun {
    lateYear: number
    vehicleTypes: CountVehicle[] | any
}

export interface CountVehicle{
    name: string
    count: number
}