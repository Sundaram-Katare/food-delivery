import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Hoarding from './Components/Hoarding'
import Services from './Components/Services'
import Category from './Components/Category'
import Footer from './Components/Footer'
import DownFoot from './Components/DownFoot'
import Tutorial from './Components/Tutorial'
import { CartProvider } from './Components/CartContext'

function App() {

  const [snacks, setSnacks] = useState([]); // State for storing fetched data
  const [diary, setDiary] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [skinCare, setSkinCare] = useState([]);
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const diaryResponse = await fetch("https://food-delivery-backend-zippy-grocers.vercel.app/api/diary");
        const snacksResponse = await fetch("https://food-delivery-backend-zippy-grocers.vercel.app/api/snacks"); 
        const drinksResponse = await fetch("https://food-delivery-backend-zippy-grocers.vercel.app/api/drinks");
        const skinCareResponse = await fetch("https://food-delivery-backend-zippy-grocers.vercel.app/api/skinCare");

        if (!snacksResponse.ok && !diaryResponse.ok && !drinksResponse.ok) {
          throw new Error("Failed to fetch data");
        }
        const diaryData = await diaryResponse.json();
        const snacksData = await snacksResponse.json();
        const drinksData = await drinksResponse.json();
        const skinCareData = await skinCareResponse.json();

        setDiary(diaryData);
        setSnacks(snacksData);
        setDrinks(drinksData);
        setSkinCare(skinCareData);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <CartProvider>
        <NavBar />
        <Hoarding />
        <Services />
        {/* Conditionally render loading and error states */}
        {loading && <p className="text-center text-gray-700">Loading snacks...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Render category only when data is loaded */}
        {!loading && !error && <Category heading="Snacks" items={snacks} />}
        {!loading && !error && <Category heading="Dairy, Milk and Eggs" items={diary} />}
        {!loading && !error && <Category heading="Drinks and Juices" items={drinks} />}
        {!loading && !error && <Category heading="Skin Care" items={skinCare} />}

        <Tutorial />
        <Footer />
        <DownFoot />
      </CartProvider>
    </>
  )
}

export default App
