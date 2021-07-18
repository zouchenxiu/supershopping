import {request} from './request'
export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
    
}

export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class Shop{
    constructor(shopInfo){
        this.shopName = shopInfo.name
        this.shopLogo = shopInfo.shopLogo
        this.shopUrl = shopInfo.shopUrl
        this.score = shopInfo.score
        this.cGoods = shopInfo.cGoods
        this.cSells = shopInfo.cSells
    }
}