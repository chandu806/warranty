import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Home.css"
import styled from "styled-components"
import axios from "axios"
export const Header = () => {

    const url = "https://www.newsweek.com/uvalde-victims-google-doodle-note-shared-i-want-people-happy-1725206"

    const url2 = 'https://www.androidcentral.com/best-google-pixel-5-cases'


    const [news, setNews] = useState('')
    const [result, setResult] = useState([])

    const [topNews , setTopNews] = useState([])

    

    const getData = async () => {
        const response = await axios(url + news)
        console.log(response)


        if (response.status == 200 || response.status == 303) {
            console.log("working")
            console.log(response.data.articles)
            setResult(response.data.articles.map((topic) => {
                return topic
            }))

        }
    }

    const getTopNews = async() =>{
        const latestNews = await axios(url2)
       
        console.log(latestNews)
       
    }

    useEffect(() => {
        getTopNews()
    },[])

    const searchNews = () => {
        getData()
    }
    return (
        <div>
            <div>        
        <h1>News</h1>
            <input type="text" placeholder='Search the news' onChange={(e) => setNews(e.target.value)} />
            <button onClick={searchNews}>search</button>
            </div>

           
            <div>
                <h4>
                   Latest News
                </h4>
            </div>
            {
                !result ? 
                topNews.map((topic, index) => {
                    return <>
                       
                           <Title>{topic.title}</Title> 
                           <div>
                           
                            <img src= {topic.image} alt="title" />
                           
                            
                            <div>
                                {topic.content}
                            </div>

                           </div>
                       
                    </>
                })
                
                :
                    result.map((topic, index) => {
                        return <>
                           
                               <div>{topic.title}</div> 
                               <div>
                               
                                <img src= {topic.image} alt="title" />
                               
                                
                                <div>
                                    {topic.content}
                                </div>

                               </div>
                           
                        </>
                    })
            }
           
        </div>
    )
}

