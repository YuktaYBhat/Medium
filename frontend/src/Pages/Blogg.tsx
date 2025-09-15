// import { AppBar } from "../componenets/AppBar"
// import { BloggCard } from "../componenets/BloggCard"
// import { useBlogg } from "./useBlogg"

// export const Blogg=()=>{
         
//          const {loading,Blogs}=useBlogg()
//         if(loading==true){
//                   return(<div className="pt -2">
//                   Loading...
//                   </div>)
//         }
//         console.log("yu"+ Blogs)
//          return(<div className="pt -2">
//         <AppBar/>
//        {Blogs.map((blog )=>(
//          <div key={blog.id}>
//         <BloggCard  BloggImg={"../public/vite.svg  "} authname={blog.author.name || "Anonymous"}  content={blog.content} publishedDate={"05-09-2024"} title={blog.title}/>
//         </div>
//        )
//   )}
//   </div>)
// }

//  <BloggCard BloggImg={"../public/vite.svg  "} authname={"abcd"} content={"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ratione a \nconsectetur eos est deleniti quaerat alias ducimus esse ipsam excepturi nulla, temporibus suscipit perferendis, dolore  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ratione a consectetur eos est deleniti quaerat alias ducimus esse ipsam excepturi nulla, temporibus suscipit perferendis, dolore distinctio tenetur adipisci voluptas distinctio tenetur adipisci voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ratione a consectetur eos est deleniti quaerat alias ducimus esse ipsam excepturi nulla, temporibus suscipit perferendis, dolore distinctio tenetur adipisci voluptas  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ratione a consectetur eos est deleniti quaerat alias ducimus esse ipsam excepturi nulla, temporibus suscipit perferendis, dolore distinctio tenetur adipisci voluptas."} publishedDate={"05-09-2024"} title={"yyyu"}/> 
//     </div>)


import { AppBar } from "../componenets/AppBar";
import { BloggCard } from "../componenets/BloggCard";
import { useBlogg } from "./useBlogg";

export const Blogg = () => {
  const { loading, Blogs,user } = useBlogg();

  if (loading) {
    return (
      <div className="pt-2">
        Loading...
      </div>
    );
  }
console.log("we got :",Blogs)
  return (
    <div className="pt-2">
      <AppBar  authname={String(user)}/>
      {Blogs.map(blog=> (
        <div key={blog.id}>
          <BloggCard
            BloggImg={"../public/vite.svg "}
            authname={blog.author.name || "Anonymous"}
            content={blog.content}
            publishedDate={"05-09-2024"}
            title={blog.title}
          />
          
        </div>
        
      ))}
    </div>
  );
};

// src/pages/Blogg.tsx

// import { AppBar } from "../componenets/AppBar";
// import { BloggCard } from "../componenets/BloggCard";
// import { useBlogg } from "./useBlogg";

// export const Blogg = () => {
//   const { loading, Blogs } = useBlogg();

//   if (loading) {
//     return (
//       <div className="pt-2">
//         Loading...
//         </div>
//     );
//   }

// //   if (!Array.isArray(Blogs) || Blogs.length === 0) {
// //     return (
// //       <div className="pt-2">
// //         No blogs available.
// //       </div>
// //     );
// //   }

//   return (
//     <div className="pt-2">
//       <AppBar />
//       {Blogs.map((blog) => (
//         <div key={blog.id}>
//           <BloggCard
//             BloggImg={""}
//             authname={blog.author?.name || "Anonymous"}
//             content={blog.content || "No content available."}
//             publishedDate={"05-09-2024"}
//             title={blog.title || "No title available."}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };