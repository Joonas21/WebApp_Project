import { useParams } from "react-router-dom"

const PostCode = ({codes, comments}) => {

 const { id } = useParams()
 const code = codes.find(codes => (codes._id) == id ) //Takes the value of id from url and compares it to the parameters id value
 console.log(comments)

 return (
     <div>
         <h2> {JSON.stringify(comments)} moro </h2>

         {code && 
            <>
            <h1>Lul löyty</h1>
            <h2> {code.code} </h2>
            </>
         }
         {!code &&
            <>
            <h1>Ha luuseri ei löydy</h1>
            </>
         }
     </div>
 )

}

export default PostCode