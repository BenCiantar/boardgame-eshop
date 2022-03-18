// import { toggleLoadingScreen } from './rendering.js';

// export function userLogin (users, loginDetails, setUser) {
//     let loginSuccessful = false;

//     for (const user of users) {
//         if (user.email === loginDetails.email && user.password === loginDetails.password) {
//             setUser({
//                 "loggedIn": true,
//                 "firstName": user.firstName,
//                 "lastName": user.lastName,
//                 "email": user.Email,
//                 "address": user.Address,
//                 "city": user.city,
//                 "cart": user.cart,
//                 "isStaff": user.isStaff
//             });
//             loginSuccessful = true;
//             // toggleLoginScreen();
//             console.log("Login successful")
//         }
//     }
//     if (loginSuccessful == false){
//         console.log("Login failed");
//         //Tell the user somehow
//     }
// }