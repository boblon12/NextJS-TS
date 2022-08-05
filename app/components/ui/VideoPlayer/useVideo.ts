import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { IVideoElement } from './video.interface';

export const useVideo = () => {
	const videoRef = useRef<IVideoElement>(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0); // текущее время
	const [videoTime, setVideoTime] = useState(0); // сколько всего
	const [progress, setProgress] = useState(0); //progress bar

	//время
	useEffect(() => {
		if (videoRef.current?.duration) setVideoTime(videoRef.current.duration);
	}, [videoRef.current?.duration]);

	// play pause
	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play();
			setIsPlaying(true);
		} else {
			videoRef.current?.pause();
			setIsPlaying(false);
		}
	}, [isPlaying]);

	// вперед 10 сек
	const forward = () => {
		if (videoRef.current) videoRef.current.currentTime += 10;
	};

	// назад 10 сек
	const revert = () => {
		if (videoRef.current) videoRef.current.currentTime -= 10;
	};

	// хоткеи
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight': {
					forward();
					break;
				}

				case 'ArrowLeft': {
					revert();
					break;
				}

				case ' ': {
					e.preventDefault();
					toggleVideo();
					break;
				}

				case 'f': {
					fullScreen();
					break;
				}

				default: {
					return;
				}
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [toggleVideo]);

	// прогресс бар
	useEffect(() => {
		const video = videoRef.current;

		if (!video) return;

		const updateProgressBar = () => {
			setCurrentTime(video.currentTime);
			setProgress((video.currentTime / videoTime) * 100);
		};

		video.addEventListener('timeupdate', updateProgressBar);
		return () => {
			video.removeEventListener('timeupdate', updateProgressBar);
		};
	}, [videoTime]);

	//фулл скрин
	const fullScreen = () => {
		const video = videoRef.current;

		if (!video) return;

		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen();
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen();
		}
	};

	return useMemo(
		() => ({
			videoRef,
			actions: {
				fullScreen,
				toggleVideo,
				forward,
				revert,
			},
			video: {
				isPlaying,
				currentTime,
				progress,
				videoTime,
			},
		}),
		[currentTime, isPlaying, progress, toggleVideo, videoTime]
	);
};
