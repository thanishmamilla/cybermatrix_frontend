import {BsFacebook, BsInstagram,BsLinkedin, BsTwitter} from 'react-icons/bs';
import { FaWhatsapp, FaYoutube } from 'react-icons/fa'; 

function Footer(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return(
        <>
            <footer className=' relative left-0 bottom-0 sm:h-[10vh] h-[15vh] py-5 sm:px-20  sm:pb-2 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-900'>
                <section>
                        Copyright {year} | All rights resvered
                </section>
                <section className='flex  items-center justify-center gap-5 text-2xl text-white'>
                    <a href="https://wa.me/+918919862530" target='_blank' className=' hover:text-yellow-500 transition-all ease-in-out duration-300'>
                    <FaWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/cybermatrix1337?igsh=OXZjbXQ2YzRjaGFh" target="_blank" className=' hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsInstagram/>
                    </a>
                    <a href="https://www.youtube.com/@CyberMatrix1337" target="_blank" className=' hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <FaYoutube />
                    </a>
                    <a href="https://x.com/ethical977" target="_blank" className=' hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsTwitter/>
                    </a>
                </section>
            </footer>
        </>
    )
}
export default Footer;

// import { BsInstagram, BsTwitter } from 'react-icons/bs';
// import { FaWhatsapp, FaYoutube } from 'react-icons/fa'; // Import WhatsApp and YouTube icons

// function Footer() {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();

//     return (
//         <footer>
//             <div className="social-icons">
//                 <a href="https://www.instagram.com/cybermatrix1337?igsh=OXZjbXQ2YzRjaGFh" target="_blank" rel="noopener noreferrer">
//                     <BsInstagram />
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                     <BsTwitter />
//                 </a>
//                 <a href="https://wa.me/9553792996" target="_blank" rel="noopener noreferrer">
//                     <FaWhatsapp />
//                 </a>
//                 <a href="https://www.youtube.com/@CyberMatrix1337" target="_blank" rel="noopener noreferrer">
//                     <FaYoutube />
//                 </a>
//             </div>
//             <p>&copy; {year} Your Company Name</p>
//         </footer>
//     );
// }

// export default Footer;
