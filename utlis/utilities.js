class UserFeatures {
  constructor(queryProcess, reqQuery) {
    this.queryProcess = queryProcess;
    this.reqQuery = reqQuery;
  }

  filter() {
    //Filtering
    const requestedQueryCl = { ...this.reqQuery };
    //Removing Other query Str's
    const exclusiveQuery = ["sort", "fields", "page", "limit"];
    exclusiveQuery.forEach((element) => delete requestedQueryCl[element]);

    const filterQuery = JSON.stringify(requestedQueryCl).replace(
      /\b(lte|gte|lt|gt)\b/g,
      (join) => `$${join}`
    );

    this.queryProcess = this.queryProcess.find(JSON.parse(filterQuery));
    //For Chaining
    return this;
  }

  sort() {
    //Sorting
    if (this.reqQuery.sort) {
      const sort = this.reqQuery.sort.split(",").join(" ");
      this.queryProcess.sort(sort);
    }
    return this;
  }

  fields() {
    //Fields
    if (this.reqQuery.fields) {
      //   console.log(this.reqQuery.fields);
      const fields = this.reqQuery.fields.replaceAll(",", " ");
      console.log(fields);
      this.queryProcess.select(fields);
    }
    return this;
  }

  pagination() {
    //Pagination
    const page = this.reqQuery.page || 1;
    const limit = this.reqQuery.limit || 15;
    const skip = (page - 1) * limit;

    this.queryProcess.skip(skip).limit(limit);

    return this;
  }
}

module.exports = UserFeatures;
