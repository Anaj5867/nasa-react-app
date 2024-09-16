import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import { useState } from "react"
import { useEffect } from "react";


function App() {
  const [showModel,setshowModel]=useState(false);
  const [data,setData]=useState(null)
  const[loading,setLoading]=useState(false)


  function handletoggleBar(){
    setshowModel(!showModel)
  }



  useEffect(()=>{
    async function fetchAPIdata(){
      const NASA_KEY=import.meta.env.VITE_NASA_API_KEY
      const url='https://api.nasa.gov/planetary/apod'+
      `?api_key=${NASA_KEY}`

      const today=(new Date()).toDateString()
      const localkey=`NASA-$(today)`
      if(localStorage.getItem(localkey)){
        const apiData=JSON.parse(localStorage.getItem
        (localkey))
        setData(apiData)
        console.log('fetched from data today')
        return
      }
      localStorage.clear()

      try{
        const res=await fetch(url)
        const apiData=await res.json()
        localStorage.setItem(localkey,JSON.stringify(apiData))
        setData(apiData)
        console.log('fetched from API today')

      }catch(err){
        console.log(err.message)
    }
  }
     fetchAPIdata();
  },[])
  
  return (
    <>
     { data ?(<Main data={data}/>):
     <div className="loadingState">
        <i className="fa-solid fa-gears"></i>
      </div>}
      {showModel &&(<SideBar data={data} s={handletoggleBar}/>)}
      {data &&
      (<Footer data={data} s={handletoggleBar}/>)}
    </>
  )
}

export default App
