// import { Link } from "react-router-dom";

// import homeimg from '../Assets/Images/homePageMainImage.png'
// import HomeLayout from "../Layouts/HomeLayout";

// function HomePage(){
//     return(
//         <HomeLayout>
//             <div className="pt-10 text-white flex flex-col md:flex-row items-center justify-center  mx-5 gap-10 lg:mx-16  h-[50rem] sm:h-[90vh]">
//                 <div className=" mt-16 sm:mt-0  flex flex-col justify-center  md:w-1/2 space-y-6">
//                         <h1 className=" text-4xl sm:text-5xl font-semibold">
//                             Find out best   
//                             <span className=" text-yellow-500 font-bold">
//                                     CyberSecurity Coures 
//                             </span>
//                         </h1>
//                         <p className=" text-lg sm:text-xl text-gray-200">
//                             We have a large library of course taught by highly skilled and qualified faculties at a very affordable rate cost .
//                         </p>
//                         <div className=" space-x-6">
//                             <Link to="/courses">
//                                 <button className=" bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
//                                         Explore courses
//                                 </button>
//                             </Link>

//                             <Link to="/contact">
//                                 <button className=" border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
//                                         Contact Us
//                                 </button>
//                             </Link>


//                         </div>
//                 </div>
//                 <div className="lg:w-1/2 flex items-center justify-center ">
//                     <img src={homeimg} alt="homepage image" />
//                 </div>

//             </div>

//         </HomeLayout>
//     )
// }
// export default HomePage;

import { Link } from "react-router-dom";
import homeimg from '../Assets/Images/homePageMainImage.png';
import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import CarouselSlide from "../Compontents/CarouselSlide";
import { celebrities } from "../Constants/CelebrityData";
import HomeLayout from "../Layouts/HomeLayout";

// Example tutor data array
const tutors = [
    {
        name: "Kumbum Rahul",
        photo: "Client/src/Assets/Images/homePageMainImage.png", // Replace with actual image path
        description: "Rahul is an expert in cybersecurity with over 2 years of experience in the field."
    },
    {
        name: "Praneeth",
        photo: "/path-to-tutor-photo2.jpg", // Replace with actual image path
        description: "Praneeth is a professional ethical hacker and has worked with several global organizations."
    },
    {
        name: "M Rahul",
        photo: "/path-to-tutor-photo2.jpg", // Replace with actual image path
        description: "Rahul is a professional ethical hacker and has worked with several global organizations."
    },
];

function HomePage() {
    return (
        <HomeLayout>
            {/* Home Section */}
            <div className="pt-10 text-white flex flex-col md:flex-row items-center justify-center mx-5 gap-10 lg:mx-16 h-[50rem] sm:h-[90vh]">
                <div className="mt-16 sm:mt-0 flex flex-col justify-center md:w-1/2 space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-semibold">
                        Find out best
                        <span className="text-yellow-500 font-bold"> CyberSecurity Courses</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200">
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable rate.
                    </p>
                    <div className="space-x-6">
                        <Link to="/courses">
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore courses
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 flex items-center justify-center ">
                    <img src={homeimg} alt="homepage image" />
                </div>
            </div>

            {/* About Us Section */}
            <div id="about" className="lg:pl-20 pt-20 flex flex-col text-white min-h-[90vh]">
                <div className="flex flex-col lg:flex-row items-center gap-5 mx-10">
                    <section className="lg:w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide affordable quality education to the world. We provide a platform for aspiring teachers and students to share their skills, creativity, and knowledge to empower and contribute to the growth and wellness of mankind.
                        </p>
                    </section>
                    <div className="lg:w-1/2">
                        <img
                            id="test1"
                            style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"
                            }}
                            alt="about main image"
                            className="drop-shadow-2xl"
                            src={aboutMainImage}
                        />
                    </div>
                </div>

                <div className="w-[80vw] carousel lg:w-1/2 m-auto my-16">
                    {celebrities && celebrities.map((celebrity) => (
                        <CarouselSlide
                            {...celebrity}
                            key={celebrity.slideNumber}
                            totalSlides={celebrities.length}
                        />
                    ))}
                </div>
            </div>

            {/* Our Tutors Section */}
            <div id="tutors" className="py-20 bg-gray-900 text-white">
                <div className="text-center mb-12">
                    <h2 className="text-4xl text-yellow-500 font-semibold">
                        Our Tutors
                    </h2>
                    <p className="text-gray-300 text-xl mt-4">
                        Meet our highly skilled and professional tutors
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-10 mx-10">
                    {tutors.map((tutor, index) => (
                        <div key={index} className="max-w-xs bg-gray-800 rounded-lg p-6 shadow-lg">
                            {/* <img
                                src={tutor.photo}
                                alt={tutor.name}
                                className="w-full h-64 object-cover rounded-t-lg"
                            /> */}
                            <div className="mt-4">
                                <h3 className="text-2xl text-yellow-500 font-semibold">
                                    {tutor.name}
                                </h3>
                                <p className="text-gray-300 mt-2">
                                    {tutor.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </HomeLayout>
    );
}

export default HomePage;
