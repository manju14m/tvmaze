import React from 'react'
// import {NavLink, Route} from 'react-router-dom'

export default function Content({data}){

    // const [episode, setEpisode] = useState([])

    const showEpisodes =  (url)=>{
        fetch(url.href)
        .then((res)=>res.json())
        // .then((res)=>setEpisode(res))
        .then((res)=>console.log(res))
        .catch(error => {
            throw(error);
        })
    }

        
           
    if(data.length !== 0){    
        return(
                <> 
               
                <div className="container-fluid  rounded  my-5 d-flex show p-3">
                    <img className=" rounded" src={`${data.show.image===null ? "https://static.tvmaze.com/images/tvm-header-logo.png" : data.show.image.medium}`}  alt= "series"/>
                    <div className="d-flex flex-column align-content-around ml-5">
                        <h4 style = {{"textAlign": "left"}}>{data.show.name}</h4>
                        <p className="data">
                            {data.show.summary !== null ? data.show.summary.replace(/<(.|\n)*?>/g, " ") : ""}
                            {/* {console.log(data)} */}
                        </p>
                        <button className="btn btn-primary" style={{"width":"150px"}} onClick={()=>{showEpisodes(data.show._links.previousepisode) }}>Show Episodes</button>
                    </div>
                </div>
                </>
        )}
    
}