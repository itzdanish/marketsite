class Listing{
    constructor(id,Category_id,name,ratings,phone_No,fixed_Rate,service_Done,path){
        this.id=id;
        this.Category_id=Category_id;
        this.name=name;
        this.ratings=ratings;
        this.phone_no=phone_No;
        this.fixed_Rate=fixed_Rate;
        this.service_Done=service_Done;
        this.path = path;
    }
}

export default Listing;