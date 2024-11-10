import Main from "../components/main"
import Header from "../components/Header"
import MessageBox from "../components/MessageBox"
export default function Container(){
    return <div className="container"> 
     <Main/>
     <div className="right"> 
        <Header/>
        <MessageBox/>
     </div>
    </div>
}

