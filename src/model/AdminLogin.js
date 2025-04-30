const username="admin@neosoftmail.com";
const password="admin123";

export function checkLogin(adminemail, adminpass){
    // connect to backend pass email, password
    //get : email, password return object
    if(adminemail==username && adminpass==password)
        return true;
    else
        return false;
}