class Password {
    constructor(password, length = 8){
        this.password = password.trim()
        this.length = length
    }
    isStrong(){
        let num = RegExp(/\d/)
        // tenga longitud mayor de 8 , al menos una mayuscula y que contenga al menos un numero 
        return this.password.length > 8 && this.password !== this.password.toLowerCase() && num.test(this.password)
    }
    generatePass(){
        let newPass = ""
        for (let i = 0; i < this.length; i++){
            let charCode = Math.floor( 33 + Math.random() * 78)
            newPass += String.fromCharCode(charCode)
        }
        this.password = newPass
    }
    getPassword(){
        return this.password
    }
    getLength(){
        return this.length
    }
}

let p1 = new Password("añsdlkfjñasdlk1L", 9)
console.log(p1.isStrong())
console.log(p1.getPassword())
p1.generatePass()
console.log(p1.getPassword())