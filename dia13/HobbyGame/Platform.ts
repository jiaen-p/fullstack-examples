enum StorageDevice{
    dvd = "dvd",
    cartucho = "cartucho",
    tarjeta = "tarjeta",
    cd = "cd", 
    bluray = "bluray"
}
type StorageDevices = keyof typeof StorageDevice

export class Platform{
    private name: string
    private releaseYear: number
    private company: string
    private nBits: number
    private generation: number
    private hasHD: boolean
    private hdSize: number
    private hasInternetConnection: boolean
    private storageDevice: StorageDevices
    private color: string
    constructor(name: string, releaseYear:number, company:string , nBits: number, generation: number,
        hasHD: boolean, hdSize: number, hasInternetConnection: boolean, 
        storageDevice: StorageDevices, color: string){
        this.name = name
        this.releaseYear = releaseYear
        this.company = company
        this.nBits = nBits
        this.generation = generation
        this.hasHD = hasHD
        this.hdSize = hdSize
        this.hasInternetConnection = hasInternetConnection
        this.storageDevice = storageDevice
        this.color = color
    }
    samePlatform(p:Platform){
        return this.name === p.name && this.releaseYear === p.releaseYear && this.company === p.company
            && this.nBits === p.nBits && this.generation === p.generation && this.hasHD === p.hasHD &&
            this.hdSize === p.hdSize && this.hasInternetConnection === p.hasInternetConnection
            && this.storageDevice === p.storageDevice && this.color === p.color
    }
    print(){
        console.log(this.toString())
    }
    toString():string{
        return (`
        Name: ${this.name}
        Year released: ${this.releaseYear}
        Company: ${this.company}
        Number of bits: ${this.nBits}
        Generation: ${this.generation}
        Has HD: ${this.hasHD}
        HD size(GB): ${this.hdSize}
        Has Internet Connection: ${this.hasInternetConnection}
        Type of storage: ${this.storageDevice}
        Color: ${this.color}
        `)
    }
    getName():string{
        return this.name
    }
    setName(name:string){
        this.name = name
    }
    getReleaseYear():number{
        return this.releaseYear
    }
    setReleaseYear(releaseYear: number){
        this.releaseYear = releaseYear
    }
    getCompany():string{
        return this.company
    }
    setCompany(company:string){
        this.company = company
    }
    getNBits():number{
        return this.nBits
    }
    setNBits(nBits: number){
        this.nBits = nBits
    }
    getGeneration():number{
        return this.generation
    }
    setGeneration(generation: number){
        this.generation = generation
    }
    getHasHD():boolean{
        return this.hasHD
    }
    setHasHD(hasHD: boolean){
        this.hasHD = hasHD
    }
    getHdSize():number{
        return this.hdSize
    }
    setHdSize(hdSize:number){
        this.hdSize = hdSize
    }
    getHasInternetConnection():boolean{
        return this.hasInternetConnection
    }
    setHasInternetConnection(hasInternetConnection: boolean){
        this.hasInternetConnection = hasInternetConnection
    }
    getStorageDevice():StorageDevices{
        return this.storageDevice
    }
    setStorageDevice(storageDevice: StorageDevices){
        this.storageDevice = storageDevice
    }
    getColor():string{
        return this.color
    }
    setColor(color:string){
        this.color = color
    }
}