import React from 'react';

const Blog = () => {
    return (
        <div className="mx-20">
            <h2 className="text-4xl text-center font-bold text-primary my-7">Question & Answer</h2>
            <div>
                <h2 className="text-2xl font-bold mt-3">Q1: How will you improve the performance of a React Application?</h2>
                <p className="text-md">To optimize React picture, you need to make sure that factors admit only necessary props. It'll let you control the CPU consumption and avoidover-rendering gratuitous features. The result is to produce a functional element that will collect all props and redistribute them to other factors.</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold mt-3">Q2:What are the different ways to manage a state in a React application?</h2>
                <p>There are four main types of state I need to properly manage in My React apps: <br />
                    1. Local state. <br />
                    2.Global state. <br />
                    3.Server state. <br />
                    4.URL state.</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold mt-3">Q3: How does prototypical inheritance work?</h2>
                <p>The Prototypal Heritage is a point in javascript used to add styles and parcels in objects. It's a system by which an object can inherit the parcels and styles of another object. Traditionally, in order to get and set the of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold mt-3">Q4:Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p></p>
            </div>
            <div>
                <h2 className="text-2xl font-bold mt-3">Q5:You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>
                    Firstly, I import useState from react . Then, I import the Scroll and SearchList components. Next, in the Search function, I will use the useState hook to initialise the value of the searchField state with useState("") (an empty string). After this, I use the filter function on the details list received from the parent.</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold mt-3">Q6:What is a unit test? Why should write unit tests?</h2>
                <p>​​The main ideal of unit testing is to insulate written law to test and determine if it works as intended. Unit testing is an important step in the development process, because if done rightly, it can help descry early excrescencies in law which may be more delicate to find in after testing stages. </p>
            </div>
        </div>
    );
};

export default Blog;