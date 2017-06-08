import {ServiceCenterInterface} from "../interfaces/service-center"

export class ServiceCenterClass  implements ServiceCenterInterface{
    public _id: number;
    public phone: string;
    public img: string;
    public addr: string;
    public city: string;
    public index:number;
    public state: string;

    constructor(
        id:number = null,
        phone:string='',
        img:string='',
        addr:string='',
        city:string='',
        index:number=null,
        state:string=''
    ){
        this._id = id;
        this.phone = phone;
        this.img = img;
        this.addr = addr;
        this.city = city;
        this.index = index;
        this.state = state;
    }

}