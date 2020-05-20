export class Mobile{
    private name: string
    private model: string
    private trademark: string
    private sdSize: number
    private color: string
    private is5G: boolean
    private cameraNumber: number
    private price: number
    constructor(name: string, model: string, trademark: string, sdSize: number, color: string, is5G: boolean, cameraNumber: number, price: number){
        this.name = name
        this.model = model
        this.trademark = trademark
        this.sdSize = sdSize
        this.color = color
        this.is5G = is5G
        this.cameraNumber = cameraNumber
        this.price = price
    }
    public print(){
        let text = 'The characteristics of the mobile ' + this.name + ' are:\nName: ' + this.name + '\nModel: ' + this.model + '\nTrademark: ' + this.trademark +
        '\nSD Size (GB): ' + this.sdSize + '\nColor: ' + this.color + '\nIs 5g?: ' + this.is5G + '\nNumber of Cameras: ' + this.cameraNumber 
        return text
    }

    getName(){
        return this.name
    }
    getModel(){
        return this.model
    }
    getTrademark(){
        return this.trademark
    }
    getSDsize(){
        return this.sdSize
    }
    getColor(){
        return this.color
    }
    getIs5G(){
        return this.is5G
    }
    getCamNum(){
        return this.cameraNumber
    }
    public getPrice():number{
        return this.price
    }
    setName(name: string){
        this.name = name
    }
    setModel(model: string){
        this.model = model
    }
    setTrademark(mark: string){
        this.trademark = mark
    }
    setSDsize(sd: number){
        this.sdSize = sd
    }
    setColor(color: string){
        this.color = color
    }
    setIs5G(val: boolean){
        this.is5G = val
    }
    setCamNum(num: number){
        this.cameraNumber = num
    }
    setPrice(price: number){
        this.price = price
    }
}