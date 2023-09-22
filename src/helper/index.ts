
export const groupByCategory = (arr:any[]) => {
    const data=  arr.reduce((result, item) => {
      const category = item.category;
      if (!result[category]) {
        result[category] = [];
      }
      result[category].push(item);
      return result;
    }, {});
    // console.log(data)
    return data
 };
export const groupByPriority =(arr:any[]) => {
    return arr.reduce((result, item) => {
      const priority = item.priority;
      if (!result[priority]) {
        result[priority] = [];
      }
      result[priority].push(item);
      return result;
    }, {});
}