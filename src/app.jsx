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
    brandLogo: "https://imgs.search.brave.com/RJS2ALGdSuU6LD1niSWvknHpaHbFuyoXyt-1eNitlVo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudHVyYm9sb2dv/LmNvbS9ibG9nL2Vu/LzIwMTkvMDgvMTkw/ODUwMjMvbWljcm9z/b2Z0LWxvZ28tMjAx/Mi5wbmc",
    name: "Microsoft",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/kjAbMXJ5x9hzQWtuGKZE9T2TjFs-vQ3011HXJduDVog/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1sb2dv/LW1lYW5pbmctNTAw/eDI1MC5qcGc",
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
    brandLogo: "https://imgs.search.brave.com/HtWDOWTvB4NaVGgAGVUo583pYohTe9kSNXgo1HDSwPQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2Fkb2Jl/NzgxLmxvZ293aWsu/Y29tLndlYnA",
    name: "Adobe",
    datePosted: "4 days ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/pQVL0GlGfuLHTLPGfnvc4tP1jKHdjJNGSdQNoPotL00/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzAy/L0lCTS1Mb2dvLTE5/NTYtNTAweDI4MS5q/cGc",
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
                brandlogo={elem.brandLogo}
                datePosted={elem.datePosted}
                location={elem.location}/>


      })}
   
    </div> 
  );
}

export default App;