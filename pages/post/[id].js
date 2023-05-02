import { blog} from "/data"
import { useRouter } from "next/router"


export default function details () {
     const router=useRouter
    const id=router.query

    
                
  return (
    <div>
      <h1>details page{id} </h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ad quibusdam amet autem distinctio perferendis debitis, ipsum harum voluptatem laborum alias fuga consequuntur fugiat voluptatibus, cupiditate pariatur tempora, blanditiis odio.

        

    </div>
  )
}
