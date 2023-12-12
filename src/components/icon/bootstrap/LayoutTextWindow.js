import * as React from 'react';

function SvgLayoutTextWindow(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M3 6.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 000 1h5a.5.5 0 000-1h-5z' />
			<path d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm12 1a1 1 0 011 1v1H1V2a1 1 0 011-1h12zm1 3v10a1 1 0 01-1 1h-2V4h3zm-4 0v11H2a1 1 0 01-1-1V4h10z' />
		</svg>
	);
}

export default SvgLayoutTextWindow;
