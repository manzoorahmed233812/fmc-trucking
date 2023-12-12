import * as React from 'react';

function SvgSoundwave(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path
				fillRule='evenodd'
				d='M8.5 2a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11a.5.5 0 01.5-.5zm-2 2a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zm-6 1.5A.5.5 0 015 6v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm8 0a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm-10 1A.5.5 0 013 7v2a.5.5 0 01-1 0V7a.5.5 0 01.5-.5zm12 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0V7a.5.5 0 01.5-.5z'
			/>
		</svg>
	);
}

export default SvgSoundwave;
