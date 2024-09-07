import '../assets/css/customerdashboard.css'

const Nawbar = () => {

    return(
        <div className="navbar nav-container">
            <a href="#" className='logo'>FoodieApp</a>

            <div className="nav-links">
                <a href="/login">Home</a>
                <a href="/signup">About</a>
                <a href="#">Services</a>
                <a href='/customer'>Customer</a>
                <a href='/login'>Staff Login</a>
                
            </div>

            <div className='sidebar-btn active'>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

        </div>
    )
}

export default Nawbar;