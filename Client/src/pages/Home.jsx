// Home.jsx or wherever you want to add the button
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ isAuthenticated }) => {
  const navigate = useNavigate()

  const handleCreateListing = () => {
    if (isAuthenticated) {
      navigate('/create-listing')  // Redirect to the listing creation page
    } else {
      alert('You must be signed in to create a listing.')
    }
  }

  return (
    <div>
      <h1>Welcome to the Marketplace</h1>
      <button onClick={handleCreateListing}>Create New Listing</button>
    </div>
  )
}

export default Home