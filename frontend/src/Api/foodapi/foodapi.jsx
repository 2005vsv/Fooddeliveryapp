import React from 'react'
import axios from 'axios'

export const foodapi=async()=>{
    const base_url='https://fooddeliveryapp-jtwk.onrender.com/api/dishes';
    
    try{
        const {data}=await axios.get(base_url);
        return data;
        

    }catch(err){
        return err;
    }

}
