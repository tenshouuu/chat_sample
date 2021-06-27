import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getColor, getTypographyStyle } from 'theme';

export const ImageWrapper = styled.div`
	margin-left: 36px;
	margin-right: 16px;
`;

export const StyledMotion = styled(motion.div)`
	height: 100%;
	width: 2px;
  position: absolute;
  top: 0;
  left: 0;
	background-color: ${getColor('primary')};
`;

export const MenuItemRoot = styled.a`
	position: relative;
	display: flex;
	align-items: center;
	height: 40px;
	width: 100%;
  transition: .4s ease-in-out;

  &,
  & > ${ImageWrapper} path,
  & > ${ImageWrapper} rect {
    transition: 0.3s;
  }
	
	&:not(:last-child) {
		margin-bottom: 34px;
	}
	
	&:hover {
		color: ${getColor('primary')};
		
		& > ${ImageWrapper} path,
    & > ${ImageWrapper} rect {
			fill: ${getColor('primary')};
		}
	}
`;

export const Text = styled.div`
	text-transform: uppercase;
	font-weight: bold;
	${getTypographyStyle('paragraph3')};
`;
