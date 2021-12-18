import { useParams } from "react-router-dom"
import Comment from "./Comment"

const PostCode = ({codes}) => {

 const { id } = useParams()
 const code = codes.find(codes => (codes._id) == id ) //Takes the value of id from url and compares it to the parameters id value

 return (
     <div>
         {code && 
            <>
            <h2> Original code post "{code.code}" </h2>
            <Comment comment={code.comments} />
            </>
         }
         {!code &&
            <>
            <h1>Some weird error has happend and we didn't find the post, try again</h1>
            </>
         }
     </div>
 )

}

export default PostCode