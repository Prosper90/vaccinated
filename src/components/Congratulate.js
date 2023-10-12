import React,{useEffect, useContext, useRef} from 'react';
import { ShopContext } from '../utils/contextShop';

export default function Congratulate() {

	const {
		clickout,
		setClickout,
		isSuccessVaccinate
	 } = useContext(ShopContext);

	const modal = useRef(null);

	useEffect(() => {

	 const handleOutsideClick = (event) => {
		console.log("listening 1");
		if (clickout === false && !modal.current.contains(event.target)) {
			setClickout(true);
		}
		};

		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
		document.removeEventListener('mousedown', handleOutsideClick);
		};

	}, [modal])
	

  return (
	<div className=" fixed w-[100%] h-0 md:h-screen top-[0] left-[0]  bg-[#fff] z-[9999999999] flex justify-center items-center" style={{
		background: 'rgba(0, 0, 0, 0.5)'
	}} >
    <div 
	 className='flex flex-col items-center  bg-white p-10 mt-5 md:w-2/5 w-4/5 rounded-md'
	 ref={modal}
	 >
					<div className=''>
						<svg
							width='132'
							height='131'
							viewBox='0 0 132 131'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<rect
								x='0.705566'
								y='0.0234375'
								width='130.476'
								height='130.476'
								rx='65.2381'
								fill='#446193'
								fillOpacity='0.13'
							/>
							<circle
								cx='66'
								cy='65'
								r='50'
								fill='#446193'
							/>
							<path
								d='M61.3469 79.8901C60.0033 79.8889 58.7152 79.3543 57.7658 78.4036L48.2218 68.8428C47.2728 67.8926 46.7397 66.6046 46.7397 65.2617C46.7397 63.9187 47.2728 62.6307 48.2218 61.6805L49.4042 60.4812C49.875 60.0088 50.4344 59.6339 51.0504 59.3782C51.6664 59.1224 52.3268 58.9907 52.9938 58.9907C53.6607 58.9907 54.3212 59.1224 54.9371 59.3782C55.5531 59.6339 56.1125 60.0088 56.5833 60.4812L61.3469 65.2617L74.4889 52.1197C75.4584 51.2013 76.743 50.6895 78.0784 50.6895C79.4138 50.6895 80.6985 51.2013 81.668 52.1197L82.8504 53.319C83.7994 54.2692 84.3324 55.5572 84.3324 56.9001C84.3324 58.243 83.7994 59.531 82.8504 60.4812L64.9449 78.4036C64.4727 78.8764 63.9118 79.251 63.2943 79.5062C62.6768 79.7613 62.015 79.8918 61.3469 79.8901ZM53.0022 62.3731C52.7787 62.374 52.5576 62.4193 52.3518 62.5063C52.1459 62.5933 51.9593 62.7203 51.8029 62.8799L50.6036 64.0623C50.4452 64.2194 50.3196 64.4062 50.2338 64.612C50.148 64.8179 50.1039 65.0387 50.1039 65.2617C50.1039 65.4846 50.148 65.7054 50.2338 65.9113C50.3196 66.1171 50.4452 66.3039 50.6036 66.461L60.1644 76.005C60.4809 76.3196 60.9091 76.4962 61.3553 76.4962C61.8016 76.4962 62.2297 76.3196 62.5462 76.005L80.4686 58.0994C80.627 57.9424 80.7526 57.7556 80.8384 57.5497C80.9241 57.3439 80.9683 57.1231 80.9683 56.9001C80.9683 56.6771 80.9241 56.4563 80.8384 56.2505C80.7526 56.0446 80.627 55.8578 80.4686 55.7008L79.2693 54.5183C78.9528 54.2037 78.5247 54.0271 78.0784 54.0271C77.6321 54.0271 77.204 54.2037 76.8875 54.5183L62.5462 68.8428C62.2297 69.1574 61.8016 69.334 61.3553 69.334C60.9091 69.334 60.4809 69.1574 60.1644 68.8428L54.1847 62.8799C53.8728 62.5616 53.4478 62.3795 53.0022 62.3731Z'
								fill='white'
							/>
						</svg>
					</div>
				
					<h1 className='text-base  text-[#5a5959] font-semibold mt-2'>
						 Vaccinated
					</h1>
				
						<div
							to='/login'
							className='bg-[#446193] text-center w-full rounded-lg mt-6 text-white font-semibold hover:scale-105 py-3'>
							 Done
						</div>
				</div>
			</div>
  )
}
