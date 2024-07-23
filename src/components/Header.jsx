import yinyang from '../assets/images/Yin_yang.svg';

//! Header component

const Header = () => {
	return (
		<div className='container flex flex-col items-center'>
			<h1 className="text-5xl block text-gray-800 p-5 font-josefin italic hover:not-italic">
				<span>MOOD</span><span>FOOD</span>
			</h1>
			<img className="animate-spin-slow h-20 p-3" src={yinyang} alt="yinyang logo"/>
		</div>
	);
};

export default Header;
