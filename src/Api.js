import React,{useEffect,useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import {NavLink, Route} from 'react-router-dom'
import './App.css';
import Content from './Content'

export default function Api(){

    const[shows, setShows] = useState([])
    const[search,setSearch] = useState([])
    const[submit,setSubmit] = useState("")

    useEffect( ()=>{
        
        fetch(`https://api.tvmaze.com/search/shows?q=${submit}`)
        // fetch(`https://api.tvmaze.com/search/shows?q=batman`)
        .then((res)=>res.json())
        // .then((res)=>console.log(res))
        .then((res)=>setShows(res))
        .catch((err)=>console.log(err))
    },[submit])

    const searchSubmit = () =>{
        setSubmit(search)
        setSearch("")
    }

    return(
        
        < >
        {/* {console.log(shows)} */}
            <div className="navbar bg-primary text-white px-4">Show Finder</div>
            <div className=" content container bg-white">
                <div className=" d-flex flex-row justify-content-center">
                <input type="text"   placeholder="Search show titles" className=" my-4 form-control "
                 onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={(e)=>{e.key === "Enter" ? searchSubmit() : console.log()}}/>
                
                <button className="btn btn-primary my-4 ml-2" onClick={searchSubmit} >Search</button>
                 </div>
                {
                    shows.map((item,index)=>(
                        <Content data= {item} key={index}/> 
                    ))
                }
            </div>
        </>
    )
}