import { Book } from './book'

export class Library {
    private books: Book[]
    private address: string
    private manager: string
    constructor(books: Book[], address: string, manager: string){
        this.books = books
        this.address = address
        this.manager = manager
    }
    public getBooks(): Book[]{
        return this.books
    }
    public setBooks(books: Book[]){
        this.books = books
    }
    public getAddress(): string{
        return this.address
    }
    public setAddress(address: string){
        this.address = address
    }
    public getManager():string{
        return this.manager
    }
    public setManager(mananger: string){
        this.manager = mananger
    }
    public toString():string {
        let s:string = ''
        this.books.forEach(book => {
            s += book.toString() + "\n------\n"
        })
        return s
    }
    public getNumberOfBooks(): number{
        return this.books.length
    }
    public findByAuthor(author:string): Book[]{
        let match: Book[] = []
        this.books.forEach(book => {
            if(book.getAuthor() === author){
                match.push(book)
            }
        })
        return match
    }
}
