import { Hono } from 'hono'
import { verify } from 'hono/jwt'
import { getPrisma } from '../prismaexports'
// export const blogRouter = new Hono<{
//   Bindings:{
//     DATABASE_URL:string,
//     SECRET:string
//   },Variables:{
//     prisma: PrismaClient,
//     userId:string | any
//   }
// }>()

export const blogRouter= new Hono<{
    Variables:{
    userId:string | any
  }}>()

  //authentication middelware for all
blogRouter.use(async(c:any,next) => {
    const prisma = getPrisma(c.env.ACCELERATE_URL);//user need to send onLY headers
    const head=c.req.header("Authorization") 
    if (!head) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
  try{
    const t=head.split(" ")[1]
    const verification=await verify(t,c.env.SECRET) //user id when user was created
    if(verification.id){
      c.set('userId',verification.id)
      await next()
     
    }else{
        return   c.text("not valid user")
    }
 }catch(e){
             return c.text('error : '+e)
     }
})


//add new post
blogRouter.post('/', async (c :any) => {
const prisma = getPrisma(c.env.ACCELERATE_URL);
    const userId =c.get('userId')
    try{
     const body= await c.req.json()
   const createdPost=await prisma.bloggerPosts.create({
    data :{
         title: body.title,
         content : body.content,
         published:body.published,
         authorId:userId
    }
   })
   if(createdPost){
    return  c.json({'successs your post id is':createdPost.id})
   }
  }catch(e){
             return c.text('error '+e)
     }
  return c.text('not sucesss')
})
blogRouter.put('update/',async (c:any) => {
  const prisma = getPrisma(c.env.ACCELERATE_URL);
     const userId =c.get('userId')
     const body=await c.req.json()
     try{
       const Blogs=await prisma.bloggerPosts.update({
        where :{
          id: body.id, //blog id
          authorId: userId
        },data: {
          title: body.title,
          content: body.content
        }
      })
      return c.text('upaated!')
     }catch(e){
             return c.text('error')
     }
})

blogRouter.get('/:id',async (c:any) => {
   const prisma = getPrisma(c.env.ACCELERATE_URL);
   const idtofind=c.req.param('id')
   try{
   const Blogs=await prisma.bloggerPosts.findUnique({
       where :{
            id:idtofind
          }
   })
   return c.json({"msg" : Blogs})
   }catch(e){
             return c.text('error'+e)
     }
})

//get all

// http://127.0.0.1:8787/api/v1/blog
blogRouter.get('/',async (c:any) => {
   const prisma = getPrisma(c.env.ACCELERATE_URL);
   try{
    const Blogs=await prisma.bloggerPosts.findMany({
    select: {
     title: true,
     content: true,
      published: true,
     id: true,
     author: {
       select: {
         name: true
       }
     }}

});

return c.status(200).json({"Blogs": Blogs})
}catch(e){
  return c.status(400).json('error'+e)
}
})

// // backend/src/routes/blogg.ts

// // ... your middleware code