function Restaurants(props) {
  return (
    <>
      <h2>Enjoy some local food</h2>
      <ul>
        {
          props.restaurants.map( (restaurant,idx) =>
            <li key={`restaurants-${idx}`}>
              {restaurant.restaurant} features {restaurant.cuisines} in {restaurant.locality}
            </li>
          )
        }
      </ul>
    </>
  )
}

export default Restaurants;
