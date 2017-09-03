/**
 * Helper class to filter student's data.
 * 
 * @export
 * @class DataFilterer
 */
export default class DataFilterer {
  /**
     * This class filters the data based on search key.
     * 
     * @static
     * @param {any} data 
     * @param {any} searchKey 
     * @returns 
     * @memberof DataFilterer
     */
  static filterBySearchKey(data, searchKey) {
    // if no search key then return data as is
    if (!data || !searchKey || searchKey.length <= 0) {
      return data;
    }
    // create filtered data
    const filteredData = [];
    // tranverse the data and fill the filtered array
    data.map((result) => {
      const fname = result.firstName;
      const lname = result.lastName;
      // if fname or lname contains searchKey then push it to the filtered array.
      if (fname.indexOf(searchKey) > -1 || lname.indexOf(searchKey) > -1) {
        filteredData.push(result);
      }
      return result;
    });
    // return the filtered array.
    return filteredData;
  }


  /**
   * Filters the data with the specified category.
   * 
   * @static
   * @param {any} data 
   * @param {any} filters 
   * @returns 
   * @memberof DataFilterer
   */
  static categoryFilterdData(data, categoryFilters) {
    if (!data || !categoryFilters) {
      return data;
    }

    // create filtered data
    const filteredData = [];

    // tranverse the data and fill the filtered array
    data.map((result) => {
      // the index of '1' in '0010' determines the grade of the student
      const indexOfOne = result.grade.indexOf('1');
      const keys = Object.keys(categoryFilters);
      // the index of '1' will help use find the key to check
      const keyToCheck = keys[indexOfOne];
      // lets check if the value of that key is true. If yes, push it.
      if (categoryFilters[keyToCheck]) {
        filteredData.push(result);
      }
      return result;
    });

    // return the filtered array.
    return filteredData;
  }
}
