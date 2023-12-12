import * as React from 'react';

function SvgHourglassTop(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M2 14.5a.5.5 0 00.5.5h11a.5.5 0 100-1h-1v-1a4.5 4.5 0 00-2.557-4.06c-.29-.139-.443-.377-.443-.59v-.7c0-.213.154-.451.443-.59A4.5 4.5 0 0012.5 3V2h1a.5.5 0 000-1h-11a.5.5 0 000 1h1v1a4.5 4.5 0 002.557 4.06c.29.139.443.377.443.59v.7c0 .213-.154.451-.443.59A4.5 4.5 0 003.5 13v1h-1a.5.5 0 00-.5.5zm2.5-.5v-1a3.5 3.5 0 011.989-3.158c.533-.256 1.011-.79 1.011-1.491v-.702s.18.101.5.101.5-.1.5-.1v.7c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0111.5 13v1h-7z' />
		</svg>
	);
}

export default SvgHourglassTop;
