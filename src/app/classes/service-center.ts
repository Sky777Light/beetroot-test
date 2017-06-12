import {ServiceCenterInterface} from "../interfaces/service-center"

export class ServiceCenterClass  implements ServiceCenterInterface{
    public _id: number;
    public phone: string;
    public img: string;
    public addr: string;
    public city: string;
    public index:number;
    public state: string;
    public lat: number;
    public lng: number;
    public services: any;
    public vehicles: any;

    constructor(
        id: number = null,
        phone: string = '',
        img: string = '',
        addr: string = '',
        city: string = '',
        index: number = null,
        state: string = '',
        lat: number = null,
        lng: number = null
    ){
        this._id = id;
        this.phone = phone;
        this.img = img;
        this.addr = addr;
        this.city = city;
        this.index = index;
        this.state = state;
        this.lat = lat;
        this.lng = lng;
    }

}