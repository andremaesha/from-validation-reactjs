// import React from "react";
// import "./app.css";
// import { useForm } from "react-hook-form";

// const App = () => {
//     const {
//         register,
//         handleSubmit,
//         setError,
//         formState: { errors },
//     } = useForm();

//     // const onChangeFullname = (event) => {
//     //     setError("fullname", {
//     //         type: "manual",
//     //         message: "Fullname Required",
//     //     });
//     //     onChangeFullname(event);
//     // };

//     const onSubmit = (data) => {
//         console.log(data);
//     };

//     return (
//         <div>
//             <h1> Create an Account </h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <label> Fullname * </label>
//                 <input
//                     type="text"
//                     name="fullName"
//                     {...register("fullname", { required: "Fullname is required" })}
//                     // onChange={onChangeFullname}
//                 />
//                 {errors.fullname && <p>{errors.fullname.message}</p>}

//                 <label> Email *</label>
//                 <input
//                     type="email"
//                     name="email"
//                     {...register("email", { required: true })}
//                 />

//                 <label htmlFor=""> Password * </label>
//                 <input
//                     name="password"
//                     type="password"
//                     autoComplete="new-password"
//                     {...register("password", { required: true })}
//                 />

//                 <label htmlFor=""> Confirm Password * </label>
//                 <input
//                     name="confirmPassword"
//                     type="password"
//                     autoComplete="new-password"
//                 />

//                 <label className="row">
//                     <input name="agree" type="checkbox" />
//                     <span>
//                         I Agree to Term of Services and Privacy Policy *{" "}
//                     </span>
//                 </label>

//                 <label className="row">
//                     <input type="checkbox" name="subscribe" />
//                     <span>Subscribe to Newsletter</span>
//                 </label>

//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default App;
