import React from 'react'
import axios from 'axios'

export const foodapi=async()=>{
    const base_url='http://localhost:5000/api/dishes';
    
    try{
        const {data}=await axios.get(base_url);
        return data;
        

    }catch(err){
        return err;
    }

}
