import Header from "../components/Header"

const Home = () => {
  return (
    <div className="home-container">
        <Header/>
        <div className="content">
            <h1>Are you hungry?</h1>
            <p>Generate your meal pass and come get your meal</p>
            <button>Generate Now&#10140;</button>
        </div>
    </div>
  )
}

export default Home