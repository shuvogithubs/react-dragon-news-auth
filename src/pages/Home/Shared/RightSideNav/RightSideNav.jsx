
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import img1 from '../../../../assets/qZone1.png'
import img2 from '../../../../assets/qZone2.png'
import img3 from '../../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="3xl font-bold">Login With</h2>
                <button className='btn btn-outline w-full flex'>
                    <FaGoogle></FaGoogle>
                    Login with Google

                </button>
                <button className='btn btn-outline w-full flex'>
                    <FaGithub></FaGithub>
                    Login with Github

                </button>
            </div>
            <div className='p-4  mb-6'>
                <h2 className="3xl font-bold">Find Us On</h2>
                <a className='p-4 w-full flex text-lg items-center border rounded-t-lg '>
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>

                </a>
                <a className='p-4 w-full flex text-lg items-center border '>
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>

                </a>
                <a className='p-4 w-full flex text-lg items-center border rounded-b-lg '>
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span>Instagram</span>

                </a>
            </div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="3xl font-bold">Q-Zone</h2>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />



            </div>
        </div>
    );
};

export default RightSideNav;