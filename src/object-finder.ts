
export class ObjectFinder {

  /**
   * 
   * @param searchRoot 
   * The object from which to start searching.  will search all child and descendant objects within the `searchRoot`
   * @param criteriaCheck 
   * Method that returns true if an individual object is what is being searched for
   * @param idFetcher 
   * returns a value or object that can be used to uniquely identify a found object so that duplicates aren't returned
   * @param log 
   * if debug logging should be shown
   * @returns 
   */
  static findObj<T>(searchRoot: any
    , typeCheck: (object: any) => boolean
    , idFetcher: (object: T) => any
    , log = false): ObjectAndParents<T>[] {

    let searched = new Set<any>();
    let toSearch = new Map<any, any[]>();
    let found = new Map<string, ObjectAndParents<T>>();
    searched.add(found);

    toSearch.set(searchRoot, []);

    let depth = 0
    let lastLog = Date.now() - 1001;
    while (toSearch.size > 0 && depth < 10000000) {
      depth++;

      let currentPath = toSearch.entries().next().value;
      let obj = currentPath[0]
      let parents: any[] = currentPath[1]
      toSearch.delete(obj);

      let isType = false;
      try {
        isType = typeCheck(obj) //&& Object.prototype.toString.call(parent) === '[object Array]';
      } catch (error) {
        if (log)
          console.warn("Checking object returned the following error, ignoring and moving on", error);
      }

      if (Date.now() - lastLog > 1000) {
        lastLog = Date.now();
        if (log)
          console.log(`Current depth: ${depth} items to search: ${toSearch.size} searched items: ${searched.size}`)
      }


      if (isType) {
        let tran = obj as T;
        let id = idFetcher(obj);

        let objectAndParents = new ObjectAndParents<T>(tran, parents)
        found.set(id, objectAndParents);
      } else if (typeof obj == "object" && !searched.has(obj)) {
        for (let i in obj) {
          try {
            let newParents = [...parents]
            newParents.unshift(obj);
            toSearch.set((obj as any)[i], newParents)
          } catch (error) {
            if (log)
              console.warn("Searching children returned the following error, ignoring and moving on", error);
          }
        }
      }

      searched.add(obj);
    }

    if (log)
      console.log(`Current depth: ${depth} items to search: ${toSearch.size} searched items: ${searched.size}`)

    return Array.from(found.values());
  }

}


export class ObjectAndParents<T> {
  constructor(
    public object: T,
    public parents: any[],
  ) { }
}