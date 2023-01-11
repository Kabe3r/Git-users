import React from 'react';
import styled from 'styled-components';

const Loading = () => {
      return (
            <Wrapper>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
            </Wrapper>
      )
}

const Wrapper = styled.div`
      --size: 100px;
      position: relative;
		bottom: 0;
		top: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		height: 55vh;
		align-items: center;
      transform: rotateX(55deg) rotateZ(-45deg);
      margin-bottom: calc(3 * var(--size));

      .box {
		position: absolute;
		width: var(--size);
		height: var(--size);
		background: #f9ae57;
		animation: slide 1s cubic-bezier(.1,.1,.65,1) infinite;
		&::before,
		&::after {
			position: absolute;
			width: 100%;
			height: 100%;
			content: '';
		}
		&::before {
			background: #040571;
			transform: skew(0deg, -45deg);
			right: 100%;
			top: 50%;
		}
		&::after {
			background: #ff5e62;
			transform: skew(-45deg, 0deg);
			top: 100%;
			right: 50%;
		}
	}
	.box:nth-child(1) {
		--sx: 50%;
		--ex: 150%;
		--sy: -50%;
		--ey: 50%;
	}
	.box:nth-child(2) {
		--sx: -50%;
		--sy: -50%;
		--ex: 50%;
		--ey: -50%;
	}
	.box:nth-child(3) {
		--sx: 150%;
		--sy: 50%;
		--ex: 50%;
		--ey: 50%;
	}
	.box:nth-child(4) {
		--sx: 50%;
		--sy: 50%;
		--ex: -50%;
		--ey: -50%;
	}

@keyframes slide {
	0% {
		transform: translate(var(--sx), var(--sy));
	}
	45%, 70% {
		transform: translate(var(--ex), var(--sy));
	}
	95%, 100% {
		transform: translate(var(--ex), var(--ey));
	}
}

@keyframes load {
	20% {
		content: '.';
	}
	40% {
		content: '..';
	}
	80%, 100% {
		content: '...';
	}
}

`

export default Loading;