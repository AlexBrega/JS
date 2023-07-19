
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

