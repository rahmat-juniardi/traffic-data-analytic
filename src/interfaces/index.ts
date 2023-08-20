export interface Dict {
    [key: string]: any
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
    privateCar: number
    bus: number
    transportCar: number
    motorcycle: number
    ransus: number
    total: number
}

export interface ResponseDatasService<T> {
    data: T[]
    rows: number
}