import * as fs from 'node:fs'


interface DocumentElement {
    render(): string
}


class ImageElement implements DocumentElement{
    private imgPath: string;

    constructor(imgPath:string){
        this.imgPath = imgPath
    }

    render():string{
        return `\n\n[Image: ${this.imgPath}]\n\n`
    }
}

class TextElement implements DocumentElement {
    private text: string

    constructor(text:string){
        this.text = text
    }

    render(){
        return this.text
    }
}

class NewLineElement implements DocumentElement {
    render(){
        return "\n"
    }
}


class TabSpaceElement implements DocumentElement{
    render(){
        return '\t'
    }
}


interface Persistant {
    save(): void
}


class Persistant_Storage {
    private storage_object: Persistant | null = null;
    add_storage_object(object: Persistant){
        this.storage_object = object
    }
    save(){
        this.storage_object?.save()
    }
}


class DB_Storage implements Persistant {
    private data: string = ''
    constructor(storage_data:string){
        this.data = storage_data
    }
    save(){
        let saved_data = fs.readFileSync('./google.txt','utf-8')
        console.log(saved_data)
    }
}

class File_Storage implements Persistant {
    private data: string = ''
    constructor(file_data:string){
        this.data = file_data
    }
    save(){
        try{
            fs.writeFileSync('google.txt',this.data,'utf-8');
            console.log('file saved to [google.txt]')
        }
        catch(err){
            console.log('error is',err)
        }
    }
}


export class Document {
    private DocumentElements: DocumentElement[] = []

    addElement(DocumentElement: DocumentElement){
        this.DocumentElements.push(DocumentElement)
    }

    render(){
        return this.DocumentElements.map((element)=>element.render()).join('')
    }
}


class Document_Editor {
    private document: Document
    private persistant_storage: Persistant_Storage
    private rendered_document: string = ''

    constructor(document:Document,persistant_storage:Persistant_Storage){
        this.document = document
        this.persistant_storage = persistant_storage
    }

    addText(data:string){
        this.document.addElement(new TextElement(data))
    }

    addLine(){
        this.document.addElement(new NewLineElement())
    }

    addSpace(){
        this.document.addElement(new TabSpaceElement())
    }

    addImage(path:string){
        this.document.addElement(new ImageElement(path))
    }

    renderDocument(){
        this.rendered_document = this.document.render()
    }

    save_to_file(){
        this.persistant_storage.add_storage_object(new File_Storage(this.rendered_document))
        this.persistant_storage.save()
    }

    save_to_db(){
        this.persistant_storage.add_storage_object(new DB_Storage(this.rendered_document))
        this.persistant_storage.save()
    }
}


const document = new Document()
const persistant_storage = new Persistant_Storage()

const client = new Document_Editor(document,persistant_storage)
client.addText('This is first line. ')
client.addText('This is second line.')
client.addLine()
client.addText('This is third line.')
client.addImage('./graph.PNG')
client.addText('This is fourth line.')
client.addSpace()
client.addText('This is fifth line.')


client.renderDocument()
client.save_to_file()
client.save_to_db()