// const { cache } = require('webpack');

// import React,{useState,useEffect} from "react"
// require('isomorphic-fetch');
// const Url=`https://www.instagram.com/graphql/query/?query_hash=7e1e0c68bbe459cf48cbd5533ddee9d4&variables=%7B%22user_id%22%3A%2221183801%22%2C%22include_chaining%22%3Atrue%7D`;
// async function getPosts(){
//     const timeSinceLastFetch =Data.now() - cache.lastFetch;
//     if( timeSinceLastFetch<= 1800000){
//         return cache.posts;
//     }
//     const data = await fetch(Url).then(res=>res.json());
//     console.log(data);
//     return data;
// }
// function slimUpPosts(response){
//     const slimPosts=response.data.user.edge_owener_to_timeline_media.edges.map(edge=>{
//         url:edge.node.edge_media_to_caption.edges[0].node.text,
//         id:edge.id,
//     });
// }
// exports.handle=async function (event,context,callback){
//     const posts= await getPosts();
//     callback(null,{
//         statusCode:200,
//         headers:{
//             "content-Type":'application/json'
//         },
//         body: JSON.stringify(posts),
//     })
// }
import axios from "axios";
export const getProfileDetailService = () =>{
  
    let baseURL = "https://www.instagram.com/graphql/query/?query_hash=7e1e0c68bbe459cf48cbd5533ddee9d4&variables=%7B%22user_id%22%3A%2221183801%22%2C%22include_chaining%22%3Atrue%7D";
    
   return  axios.get(baseURL)
  }