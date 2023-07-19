
                                                   //task1                
type SnakeCase<S extends string> =
  S extends `${infer T}${infer U}` ?
  `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${SnakeCase<U>}` :
  S


type res1 = SnakeCase<"hello">
type res2 = SnakeCase<"userName">
type res3 = SnakeCase<"getElementById">

const h: res1 = "hello"
const u: res2 = "user_name"
const g: res3 = "get_element_by_id"




                                                //task2                                              


const url = 'http://site.ru/index.php?name=Alex&surname=Brega&city=Paris&isMarried=false&country=Moldova&ignoredKey&isMarried=false&name=Alexandru&age=25'

// function createType(url) {
//   const splitted = url.split('?')[1]
  
//   let params = splitted.split('&')
//                        .map(el => el.includes("=")?el: el + "=true")
//                        .reduce((p, c) => {
//     let components = c.split('=');
//     p[components[0]] = components[1]
//     return p;
//   }, {});
//     return typeof params
// }

// console.log(createType(url))

function parseURLParams(url:string) {
    const queryString = url.split('?')[1];
    if (!queryString) {
      return {};
    }
  
    const params = {};
    const paramPairs = queryString.split('&');
    
    paramPairs.forEach(pair => {
      const [key, value] = pair.split('=');
      if (key) {
        if (value === undefined) {
          params[key] = true;
        } else {
          if (params.hasOwnProperty(key)) {
            if (Array.isArray(params[key])&& !params[key].includes(value)) {
            //   params[key].push(value);
                params[key].push(value);
            } else if(params[key] !== value) {
              params[key] = [params[key], value];
            }
          } else {
            params[key] = value;
          }
        }
      }
    });
  
    return params;
  }

  const paramsObject =  parseURLParams(url);
  type ParsedParams = ReturnType<typeof parseURLParams>

  
  

 
  


  





