//Handling Promises in typescript:
/*
 In TypeScript, you handle promises by using strongly-typed generics (Promise<T>) to enforce type safety on asynchronous return values. 
 You can manage their execution using either async/await with try/catch blocks or classic .then()/.catch() chains.
*/

//Example 1:
function fetchUser(id:number):Promise<{id:number,name:string}>{
    //Promise<{id:number,name:string}> since it returns id and naeme
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id,name:"Basit"})
        },1000)
    })
}

//Example 2: with async await
async function getUser(id:number):Promise<void>{ // Promise<void> : since it's not returning anything
    try{
        const user=await fetchUser(id);
        console.log("user:",user)
    }catch(error){
        console.log("Error while fetching user data")
    }
}

//Example 3: Generic async function
async function fetchData<T>(url:string):Promise<T>{
    //<T>(url:String):Promise<T> means it can return anything
    const response=await fetch(url);
    return response.json();
}
fetchData<string>("test-api-call")

//Example 4: Enforces that this promise must resolve to a string
const fetchUserData = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("User data loaded"); // Must match the generic type
    } else {
      reject(new Error("Failed to load user data")); // Always use Error objects
    }
  });
};