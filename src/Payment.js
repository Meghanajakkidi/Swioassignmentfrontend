
    import { useState } from "react"
    import { useNavigate } from "react-router-dom"
    
    function Payment() {
        const [username, setusername] = useState()
        const [useramount, setuseramount] = useState()
        
        const [ formerr,setformerr] = useState({})
        const navigate = useNavigate()
        const onusernamechange = (e) => {
            setusername(e.target.value)
        }
        const onuseramountchange = (e) => {
            setuseramount(e.target.value)
        }
        const CreateTask = (UserData) => {
            let formerr = validatetaskform()
            setformerr(formerr)
            if(Object.keys(formerr).length===0){
              fetch("http://localhost:7000/api/payments/submit/", { method: "POST", headers: { 'content-type': "application/json" }, body: JSON.stringify(UserData) }).then(function (res) {
                return res.json()
            }).then(function (result) {
                if(result._id){
                    
              }
                console.log("data saved succesfully")
                navigate("/transactionlist")
               
            })
             }else{
                return;
             } }
       
        const validatetaskform = ()=>{
            let formerr ={}
                if(!username){
                    formerr.username="please enter your name"
                }if(!useramount){
                    formerr.useramount="please enter your amount"
                }
            return formerr
        }
        const savetransaction = (e) => {
            e.preventDefault();
            let UserData = {
                username,
                useramount,
            }
            CreateTask(UserData)
        }
        return (
            <div className="container" >
                <h2 style={{color:"rgb(102, 5, 5)"}}><i>Enroll yourself for The ultimate music accessory for your Mac.</i></h2>
                <div className="card" style={{ width: "30rem", margin: "30px" , borderRadius:"10%",marginLeft:"30%" }}>
                    <div className="card-body">
                        <form onSubmit={savetransaction}>
                            <div class="form-group" style={{ padding: "10px" }} value={{ username }} onChange={onusernamechange}>
                               <label >cardholderName:</label>
                                <input type="text" class="form-control" placeholder="Enter  fullname on card" /><i style={{color:"red"}}>{formerr?.taskName}</i><br/>
    
                            </div>
                            <div class="form-group" style={{ padding: "10px" }} value={{ useramount }} onChange={onuseramountchange}>
                                <label>Amount</label>
                                <input type="text" class="form-control" placeholder=" enter amount" /><i style={{color:"red"}}>{formerr?.taskDesc}</i><br/>
                            </div>
                            <div class="form-group" style={{ padding: "10px" }} value={{ useramount }} onChange={onuseramountchange}>
                                <label>card information</label>
                                <input type="date" class="form-control" placeholder=" MM/YY" /><i style={{color:"red"}}>{formerr?.taskDesc}</i>
                                <input type="text" class="form-control" placeholder="CVC NUMBER" /><i style={{color:"red"}}>{formerr?.taskDesc}</i><br/>
                            </div>
                            <button type="submit" class="btn btn-danger" style={{ width: "100px", height: "50px" }}>Submit</button>
                            </form>
    
                    </div>
                </div>
               
            </div>
        )
    }
    
   

export default Payment