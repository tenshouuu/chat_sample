import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { getColor, getTypographyStyle } from 'theme';

export const ImageWrapper = styled.div`
	margin-left: 36px;
	margin-right: 16px;
`;

export const StyledMotion = styled(motion.div)`
	height: 100%;
	width: 3px;
  position: absolute;
  top: 0;
  left: 0;
	background-color: ${getColor('primary')};
  box-shadow: 1px 0px 10px rgba(42, 139, 242, 0.45), 0px 0px 10px rgba(42, 139, 242, 0.55), 4px 0px 25px rgba(42, 139, 242, 0.75);
  border-radius: 3px;
`;

export const Text = styled.div`
	text-transform: uppercase;
	font-weight: bold;
	${getTypographyStyle('paragraph3')};
`;

const activeStyles = css`
	& > ${Text} {
  	color: ${getColor('primary')};
  }

  & > ${ImageWrapper} path,
  & > ${ImageWrapper} rect {
    fill: ${getColor('primary')};
  }
`

export const MenuItemRoot = styled.a<{ isActive: boolean }>`
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
		${activeStyles};
	}
	
	${({ isActive }) => isActive && activeStyles}
`;
