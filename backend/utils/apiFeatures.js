class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        let keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i'
            }

        } : {};

        this.query.find({ ...keyword })
        return this;
    }
    

    filter() {

        const queryStrCopy = { ...this.queryStr };

        //before
        console.log(queryStrCopy);

        //removing field from the  query
        const removeFields = ['keyword', 'limit', 'page'];

        removeFields.forEach(field => delete queryStrCopy[field]);

        //after
        console.log(queryStrCopy);
        
        let queryStr = JSON.stringify(queryStrCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)/g, match => `$${match}`)
        
        
        
        
        console.log(queryStr);
        // //after
        // this.query.find(queryStrCopy);
        this.query.find(JSON.parse(queryStr)) ;

        return this;


    }

    paginate(resultPerPage){
        const curentPage =Number(this.queryStr.page) || 1;
        const skip = resultPerPage*(curentPage-1);
        this.query.limit(resultPerPage).skip(skip);
        
        return this;


    }
}
module.exports = APIFeatures;