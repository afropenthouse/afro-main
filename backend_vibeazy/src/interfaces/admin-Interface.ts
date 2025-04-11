export interface IAddVenueBody {
    categoryId: string;
    venueName: string;
    startAmount: number;
    endAmount: number;
    accountNumber: string;
    bankName: string;
    rating: number;
    callLine: string;
    discount?: number;
    longitude: string;
    latitude: string;
    locationId: string;
    webLink: string;
    venueImage: string;
}
  
export interface IUpdateVenue extends Partial<IAddVenueBody>{
    id: string
}
export interface IDeleteVenue{
    venueId: string
}

export interface IAddPromoCode {
  discountPercent: number;
  code: string;
  isActive?: boolean; 
  venueId: string;
}

export interface IUpdatePromoCodeBody extends IAddVenueBody{
    id:string
}
export interface IAddLocationBody {
    city:string
}

export interface IAddCategoryBody{
    category:string
}


export interface IAddDiscount {
   title: string,
    image: string
    url: string
  }