// import { useForm } from "react-hook-form";

// import { MdOutlineEdit } from "react-icons/md";
// // import useMyParcels from "../../../../hooks/useMyParcels";
// ;
// import useAuth from "../../../../hooks/useAuth";
// import useAxiosPublic from "../../../../hooks/useAxiosPublic";



// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// const Profile = () => {
//   const { user, updateUserProfile } = useAuth();
//   // const [ , refetch] = useMyParcels();
//   const axiosPublic = useAxiosPublic();

//   const { register, handleSubmit, reset, control } = useForm();

//   const onSubmit = async(data) => {
//     console.log(data);
//     // const imageFile = { image: data.image[0] }
// //     const res = await axiosPublic.post(image_hosting_api, imageFile, {
// //         headers: {
// //             'content-type': 'multipart/form-data'
// //         }
// //     });

// //     if(res.data.success){
// //         // we have to update the photoURL of the use 

// //     }
// //     console.log(res.data);
// //   }

// if (data?.image) {
//     const imageFile = { image: data.image[0] };

//     try {
//       const res = await axiosPublic.post( image_hosting_api,imageFile, {
//         headers: {
//           'content-type': 'multipart/form-data',
//         },
//       });

//       if (res.data.success) {
//         console.log(res.data);
//         // Update photoURL
//         updateUserProfile(user.displayName, res.data.data.display_url);
//       }
//     }
//      catch (error) {
//       console.error('Error updating image:', error);
//     }
//   }

//   // new name
//   if (data.name) {
//     // Update user's display name
//     updateUserProfile(data.name, user.photoURL);
//   }

  
// };

//   return (
//     <div className="text-center bg-slate-200 min-h-screen">
//       <h1 className="text-4xl text-sky-500 mb-8">My Profile</h1>
      
//         <div className="card w-96 bg-base-100 shadow-xl mx-auto">
//           <div className="avatar mx-auto mt-14 ">
//             <div className="w-36 rounded-full overflow-hidden mx-auto">
//               <img
//                 src={user.photoURL}
//                 alt={user.displayName}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//           <div>
//           <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="form-control">
//             <input
//               {...register("image")}
//               type="file"
//               className="file-input mx-auto file-input-bordered w-[68.3%] mt-10"
//             />
//           </div>

//           <div className="card-body items-center text-center mt-4">
          
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 defaultValue={user.displayName}
//                 {...register("name")}
//                 className="input input-bordered w-full"
//               />
//               <h2 className="card-title"></h2>
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 readOnly
//                 defaultValue={user.email}
//                 {...register("email")}
//                 className="input input-bordered w-full"
//               />
//             </div>
//             <div className="card-actions mt-4">
             
//             </div>
//           </div>
//           <button className="btn bg-sky-500 text-white">
//                 Update Profile <MdOutlineEdit className=""></MdOutlineEdit>
//               </button>
//           </form>
//           </div>
//         </div>
     
//     </div>
//   );
// };


// export default Profile;


import { useForm } from "react-hook-form";
import { MdOutlineEdit } from "react-icons/md";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      let updatedPhotoURL = user.photoURL;

      // If a new image is uploaded
      if (data?.image?.[0]) {
        const imageFile = new FormData();
        imageFile.append("image", data.image[0]);

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });

        if (res.data.success) {
          updatedPhotoURL = res.data.data.display_url; // Updated image URL
        } else {
          throw new Error("Failed to upload image.");
        }
      }

      // Update the user profile with the new name and/or photo
      await updateUserProfile(data.name || user.displayName, updatedPhotoURL);

      // Show success alert
      Swal.fire({
        title: "Profile Updated",
        text: "Your profile has been updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset the form
      reset();
    } catch (error) {
      console.error("Error updating profile:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to update the profile. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="text-center bg-slate-200 min-h-screen">
      <h1 className="text-4xl text-sky-500 mb-8">My Profile</h1>

      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <div className="avatar mx-auto mt-14">
          <div className="w-36 rounded-full overflow-hidden mx-auto">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Image Upload */}
            <div className="form-control">
              <input
                {...register("image")}
                type="file"
                className="file-input mx-auto file-input-bordered w-[68.3%] mt-10"
              />
            </div>

            {/* Name and Email */}
            <div className="card-body items-center text-center mt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user.displayName}
                  {...register("name")}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  readOnly
                  defaultValue={user.email}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Update Button */}
            <button className="btn bg-sky-500 text-white">
              Update Profile <MdOutlineEdit />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

