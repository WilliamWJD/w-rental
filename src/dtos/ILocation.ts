export default interface ILocation{
    date_start:Date,
    date_end:Date,
    house_id:string;
    tenant_id:string
    contract_time:number;
    is_active?:boolean;
}