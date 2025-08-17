interface ISubscriber {
    update(): void
}


interface IChannel {
    subsribe(subsriber: ISubscriber): void
    unsubscribe(subscriber: ISubscriber): void
    notifySubscribers(): void
}



class Channel implements IChannel {
    private subsribers: ISubscriber[] = []
    private latestVideo_title: string = ''

    constructor(public title:string){}


    subsribe(subsriber: ISubscriber): void {
        // if(!this.subsribers.includes(subsriber)){
            this.subsribers.push(subsriber)
        // }
    }
    unsubscribe(subscriber: ISubscriber): void {
        this.subsribers = this.subsribers.filter((sub)=>sub !== subscriber)
    }
    notifySubscribers(): void {
        for (let sub of this.subsribers){
            sub.update()
        }
        console.log()
    }

    uploadVideo(title:string){
        this.latestVideo_title = title
        this.notifySubscribers()
    }

    getVideoData(){
        return `Checkout our latest video ${this.latestVideo_title}`
    }
}


class Subscriber implements ISubscriber {

    constructor(private name: string, private channel: Channel){}

    update(){
        console.log(`Hey ${this.name}, ${this.channel.getVideoData()}`)
    }
}


const coding_channel = new Channel('coding')
const subscriber1 = new Subscriber('haseeb',coding_channel)
const subscriber2 = new Subscriber('ajmal',coding_channel)
const subscriber3 = new Subscriber('asghar',coding_channel)

coding_channel.subsribe(subscriber1)
coding_channel.subsribe(subscriber2)
coding_channel.subsribe(subscriber3)


coding_channel.uploadVideo('mern')
coding_channel.unsubscribe(subscriber2)
coding_channel.uploadVideo('jam')