import Card from './component/card.jsx';


function App() {
const jobOpenings = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/microsoft",
    name: "Microsoft",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/amazon",
    name: "Amazon",
    datePosted: "2 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    name: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    name: "Netflix",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/adobe",
    name: "Adobe",
    datePosted: "4 days ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/ibm",
    name: "IBM",
    datePosted: "10 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/intel",
    name: "Intel",
    datePosted: "8 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Chennai, India"
  }
];
   console.log(jobOpenings);
  return (
    <div className="parent">
      {jobOpenings.map(function(elem){
        return <Card company={elem.name}
                post={elem.post}
                tag1={elem.tag1}
                tag2={elem.tag2}
                pay={elem.pay}
                barndlogo={elem.brandLogo}
                datePosted={elem.datePosted}/>


      })}
   
    </div> 
  );
}

export default App;