"use client"
import React, { useEffect, useState } from 'react'
import { IconGardenCart } from '@tabler/icons-react';
import { useSelector } from 'react-redux';

function TopNav() {
    const [hydration, setHydration] = useState(false);
    const { totalItemsCount } = useSelector((state) => state.product);
    // console.log(products);

    // HANDLING HYDRATION
    useEffect(() => {
        setHydration(true)
    }, [])

    if (!hydration) {
        return null;
    }

    return (
        <div className='w-full h-12 flex justify-end px-10 items-center text-white fixed top-0 bg-blue-800'>
            <IconGardenCart />
            <span>{totalItemsCount}</span>
        </div>
    )
}

export default TopNav