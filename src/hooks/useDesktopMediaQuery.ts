import { useMediaQuery } from 'react-responsive';
// const { publicRuntimeConfig } = getConfig()

const useDesktopMediaQuery = () => {
  // const { breakpoints } = publicRuntimeConfig
  // return useMediaQuery({ query: `(min-width: ${breakpoints.lg}` })
  return useMediaQuery({ query: `(min-width: 600px` });
};

export const useTouchDeviceMediaQuery = () => {
  return useMediaQuery({ query: `(hover: none) and (pointer: coarse)` });
};

export default useDesktopMediaQuery;
