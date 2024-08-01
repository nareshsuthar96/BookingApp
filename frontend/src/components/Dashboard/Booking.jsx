import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { fetchBooking } from '../redux/slices/bookingSlice';
const Booking = () => {
    const { booking } = useSelector((state) => state.booking);
   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooking());
      }, [dispatch]);
    const columns = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'date', headerName: 'Date', width: 130 },
        { field: 'time', headerName: 'Time', width: 130 },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          renderCell: (params) => (
            // console.log(params)
            <div>
               {params.row.userId.email}
            </div>
           
           
          
       
          
          ),
        },
        {
          field: 'user',
          headerName: 'ServiceName',
          width: 200,
          renderCell: (params) => (
            // console.log(params)
            <div>
               {params.row.serviceId.name}
            </div>
           
           
          
       
          
          ),
        },
        
    ]
  return (
    <div className='m-8'>
     <div className='flex justify-between mb-4'>
        <div >
               <h1 className="font-black">BOOKING</h1>
               <p>Total Bookings : {booking.length} </p>
        </div>
        
      </div>
      <div style={{ height: 350, width: '100%' }}>
        <DataGrid
          rows={booking}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          getRowId={(row) => row._id}
          pageSizeOptions={[5, 10]}
           sx={{
            boxShadow: 2,
        
           
          
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      </div>
    </div>
  )
}

export default Booking
