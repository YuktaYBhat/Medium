import axios from "axios";
import { useEffect, useState } from "react";
import { PRO_URL } from "../componenets/URL";
interface BlogType{
            "title": string,
            "content": string,
            "published": boolean,
            "id": string,
            "author": {
                "name": string
            }
}
// export const useBlogg = () => {
//   const [loading, setLoading] = useState(true);
//   const [Blogs, setBlogg] = useState<BlogType[] >([]);
//   const [user, setuser] = useState({});
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get(`${PRO_URL}/api/v1/blog`, {
//           headers: {
//               authorization:`berae ${localStorage.getItem("token")}`
//        }});

//        //const b= JSON.stringify(response.data)
//        //const c=JSON.parse(response.data.Blogs
//         setBlogg(response.data.Blogs)
//         setLoading(false);
//    const a=localStorage.getItem("username")
//     setuser(a || 'aonymous')
//       console.log("yu1"+ response.data)
//       console.log(localStorage.getItem("token"))
//       console.log("yu1", JSON.stringify(response.data, null, 2));
//  console.log("📦 Full response object:", response);

//       console.log("yu2"+ response.data.Blogs)
//       console.log("yu3"+Blogs)
//       console.log("yu77" +  Array.isArray(response.data.Blogs))
//         console.log("yu4"+ user)
//       }  catch (error) {
//         console.error("Error fetching blogs:", error);
//         setLoading(false); // <--- Add this line
//       }
//     };
//     fetchBlogs();
//   }, []);
//   return { loading, Blogs, user};
// };

export const useBlogg = () => {
  const [loading, setLoading] = useState(true);
  const [Blogs, setBlogg] = useState<BlogType[] >([]);
  const [user, setuser] = useState({});

   async function fetchBlogs (){
      try {
        const response = await axios.get(`${PRO_URL}/api/v1/blog`, {
          headers: {
              Authorization:`berae ${localStorage.getItem("token")}`
       }});
        setBlogg(response.data.Blogs)
        setLoading(false);
      const a=localStorage.getItem("username")
      setuser(a || 'aonymous')
      console.log("yu1"+ response.data)
      console.log("kkk" + localStorage.getItem("token"))
      console.log("yu1", JSON.stringify(response.data, null, 2));
 console.log("📦 Full response object:", response);

      console.log("yu2"+ response.data.Blogs)
      console.log("yu3"+Blogs)
      console.log("yu77" +  Array.isArray(response.data.Blogs))
        console.log("yu4"+ user)
        
       }  catch (error) {
         console.error("Error fetching blogs:", error);
         setLoading(false); // <--- Add this line
       }
      }
  useEffect(() => {
    fetchBlogs();
  }, []);
  return { loading, Blogs, user};
};