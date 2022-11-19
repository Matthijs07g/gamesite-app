export class Model {
    _name: string;
    _sDesc: string;
    _desc: string;
    _createDate: Date;
    _img: string;

    constructor(name: string, sDesc: string, desc: string, createDate: Date, img: string){
        this._name = name;
        this._sDesc = sDesc;
        this._desc = desc;
        this._createDate = createDate;
        this._img = img;
    }

    public get name(){
        return this._name;
    }
    public set name(newName : string){
        this._name = newName;
    }
    public get sdesc(){
        return this._sDesc;
    }
    public set sdesc(newsDesc : string){
        this._sDesc = newsDesc;
    }
    public get desc(){
        return this._desc;
    }
    public set desc(newDesc : string){
        this._desc = newDesc;
    }
    public get createDate(){
        return this._createDate;
    }
    public set createDate(newDat : Date){
        this._createDate = newDat;
    }
    public get img(){
        return this._img;
    }
    public set img(newImg : string){
        this._img = newImg;
    }
}
