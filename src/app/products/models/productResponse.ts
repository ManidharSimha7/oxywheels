export interface ProductState {
    
    Price: number;
    ProductTitle: string;
    ProductURL:string;
    SmallImagePath: string;
}

export interface Catstate{

    Url : string;
    Count : number;
    Title : string;
}

export interface FacetState{
  
    Categories: Catstate[];  
    Color: Catstate[];
    DriveTrain: Catstate[];
    Fuel:Catstate[]; 
    NOOfWheels:Catstate[]; 
    RCStatus: Catstate[];
    RegistrationType:Catstate[]; 
    Transmission: Catstate[];
    Variant: Catstate[];
    VehicleClass:Catstate[];
    city:Catstate[]; 
    style:Catstate[];
   
}

export const  FacetInitialState : FacetState = {
  
    Categories: [],  
    Color: [],
    DriveTrain: [],
    Fuel:[], 
    NOOfWheels:[], 
    RCStatus:[],
    RegistrationType:[], 
    Transmission: [],
    Variant: [],
    VehicleClass:[],
    city:[], 
    style:[],
   
}

export interface DataState{
    Facets : FacetState;
    ProductDetails : ProductState[];
}

export interface ResponseState{
  
Data : DataState;

}