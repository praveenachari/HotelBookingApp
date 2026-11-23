import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={'/rooms/' + room._id}
      onClick={() => scrollTo(0, 0)}
      className='block w-full bg-white text-gray-500/90 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow'
    >
      {/* Image Wrapper */}
      <div className='relative h-48 w-full overflow-hidden'>
        <img
          src={room.images[0]}
          alt={room.hotel.name}
          className='w-full h-full object-cover'
        />
        {index % 2 === 0 && (
          <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow-sm'>
            Best Seller
          </p>
        )}
      </div>

      {/* Card Body */}
      <div className='p-4 pt-5'>
        <div className='flex items-center justify-between gap-2'>
          <p className='font-playfair text-xl font-medium text-gray-800 truncate'>
            {room.hotel.name}
          </p>
          <div className='flex items-center gap-1 shrink-0 text-sm text-gray-700'>
            <img src={assets.starIconFilled} alt='star-icon' className='w-4 h-4' />
            <span>4.5</span>
          </div>
        </div>

        <div className='flex items-center gap-1 text-sm mt-1'>
          <img src={assets.locationIcon} alt='location-icon' className='w-4 h-4 shrink-0' />
          <span className='truncate'>{room.hotel.address}</span>
        </div>

        <div className='flex items-center justify-between mt-4'>
          <p>
            <span className='text-xl font-medium text-gray-800'>${room.pricePerNight}</span>
            <span className='text-sm text-gray-500'>/night</span>
          </p>
          <button
            type='button'
            className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer'
          >
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard