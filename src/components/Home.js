import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';


function Home() {

    
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const getRecipes = (e) => {
        axios.get(`https://api.github.com/users/${query}`)
        .then(res => {
            console.log(res.data)
            setRecipes(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        getRecipes();
    }
   
  return (
    <div className='content'>
        <form onSubmit={onSubmit}>
            <div className="main-conten">
                <h1 className="main-h1">Developer Status</h1>
                <h3 className="main-h3">Check</h3>
                
                <input className='main-input' value={query}
                type="text" placeholder='Enter Github Username'
                onChange={(e) => setQuery(e.target.value)}/>
                <br />
                <button type='submit' className='main-button'>Check Status</button>
            </div>
        </form>
        <div className='git'>
            <h1 className='first-h1'>{recipes.name}</h1>
            <p className='p'>{recipes.bio}</p>

            <div className="contents">

            <p className='p-details'>{recipes.following} Following</p>
            <p className="p-det">{recipes.followers} Followers</p>
            </div>
            <div className='second-div'>
              <h3 className='h3-j'>About {recipes.login}</h3>
              <h3 className='main-j'>Check</h3>
            </div>
            <p className='arranged-p'>Repositories: {recipes.public_repos}</p>
            <img className='img' src={recipes.avatar_url} alt="" />
            <p className='arranged-p1'>Location: {recipes.location}</p>
            <p className='arranged-p2'>Website: {recipes.blog}</p>
            <p className='arranged-p2'>Company: {recipes.company}</p>
            <p className='arranged-p2'>Joined: {recipes.created_at}</p>
            

        
        </div>
    </div>
  )
}

export default Home