export interface  IVenueQuery{
    startAmount:{
        gte:number
    }
    endAmount:{
        lte:number
    }
    location?:{
        city:string
    },
    category?:{
        category:string
    }
}

export interface IGetPromoCodeDetail{
    code: string,
    venueId: string
}

export interface IVenuePayment {
    amount:number
    promoCodeId?:string
    venueId: string
}