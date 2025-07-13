import React from 'react'
import axios from 'axios'

export const foodapi=async()=>{
    const base_url='https://fooddeliveryapp-jtwk.onrender.com/api/dishes';
    console.log(base_url);
    
    try{
        const {data}=await axios.get(base_url);
        console.log(data);
        return data;
        

    }catch(err){
        return err;
    }

}
