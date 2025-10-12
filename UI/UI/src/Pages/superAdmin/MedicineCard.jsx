import React from 'react'
import Button from '@mui/material/Button';

function MedicineCard() {
    return (
        // <div>
        //  
        // <div className='border-2 h-54 w-150 border-black rounded-2xl flex flex-wrap'>
        //     <div>
        // <img src="/medic.jpg" alt=""  className='w-60 h-51 m-1 rounded-2xl'/>
        //    </div>
        // <h1>bucket -1</h1>
        // <Button variant="outlined" color='success' className='h-15 m-1'>View Cards</Button>

        // <div className='flex'>
        //     <select name="vendor" id="vendor">
        //         <option value="1">Suraj</option>
        //         <option value="2">Bharat</option>
        //         <option value="3">Tushar</option>
        //     </select>
        // </div>
        // </div>
        // </div>

        <>
            <h1>Card Details</h1>

            <div className="main flex flex-wrap h-60 w-170 border-2 ">
                <div className="image border-2 bg-sky-600 h-48 w-78 m-1">
                    <img src="/medic.jpg" alt="" />
                </div>
                <div className="detail  h-54 w-78 m-1 grid ">
                    <div className="div1  w-78 ">
                        <h1>Bucket One</h1>
                        <Button variant='outlined' color="success">View Card</Button>
                    </div>
                    <div className="div2  w-78  ">
                        <select name="vendor" id="vendor" className='border-1'>
                            <option value="1">Suraj</option>
                            <option value="2">Bharat</option>
                            <option value="3">Tushar</option>
                            <option value="4">Pinki</option>
                        </select>

                        <Button variant='outlined' color='warning' className='gap-1'>SEND</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MedicineCard
