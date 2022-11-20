export class blog {
    id: number;
    name: string;
    sDesc: string;
    desc: string;
    createDate: Date;
    img: string;

    constructor(id=0, name= '', sDesc='', desc='', createDate=new Date(), img=''){
        this.id = id;
        this.name = name;
        this.sDesc = sDesc;
        this.desc = desc;
        this.createDate = createDate;
        this.img = img;
    }
}
