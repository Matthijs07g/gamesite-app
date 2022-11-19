export class blog {
    id: number;
    name: string;
    sDesc: string;
    desc: string;
    createDate: Date;
    img: string;

    constructor(name= '', sDesc='', desc='', createDate=new Date(), img=''){
        this.id = 0;
        this.name = name;
        this.sDesc = sDesc;
        this.desc = desc;
        this.createDate = createDate;
        this.img = img;
    }
}
