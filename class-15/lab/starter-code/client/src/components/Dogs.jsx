function Dogs(props) {

  return (
    <ul>
     {
       props.dogs.map( (dog, idx) => 
         <li key={dog._id}>{dog.name}</li>
       )
     }
   </ul>
  )
}

export default Dogs;