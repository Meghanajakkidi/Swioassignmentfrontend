import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg " style={{ backgroundColor: "black", color: "white" }}>
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"><b style={{ color: "white", fontWeight: "bold" }}>REPL<i class="fa-solid fa-backward-fast"></i>Y</b></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="payment" style={{ color: "white", fontWeight: "bold",marginLeft:"1000px" }}>ENROLLNOW</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="transactionlist" style={{ color: "white", fontWeight: "bold" ,marginLeft:"100px"}}>USERS</Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
           </div>
    )
}

export default Navbar