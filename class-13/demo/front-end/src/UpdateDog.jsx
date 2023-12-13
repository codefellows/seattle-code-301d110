import React, {useState, useEffect} from 'react';

function UpdateForm(props) {

    const [dog, setDog] = useState({});

    function handleChange(e) {
        // dog is { breed: "", name: "" }
        setDog( { ...dog,  [e.target.name]: e.target.value } );
    }

    function handleSubmit(e) { 
        e.preventDefault();
        props.handleSubmit(dog);
        e.target.reset();
        setDog({name:'', breed:''});
    }

    // useEffect runs when "something" changes. It watches for things
    useEffect( () => {
      console.log("I'm running becuase props.dog changed");
      setDog(props.dog || {});
    }, [props.dog])

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="name" value={dog.name} />
            <input onChange={handleChange} name="breed" value={dog.breed} />
            <button type="submit">Update Dog</button>
        </form>
    )

}

export default UpdateForm;