import { IconResponse } from './@type';
import { Colors } from '../../styles/theme/color';

function LeftArrowIcon({ width, height, fillColor }: IconResponse) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5212 25L30.8962 17.625C31.2842 17.2347 31.502 16.7067 31.502 16.1563C31.502 15.6059 31.2842 15.0779 30.8962 14.6875C30.7025 14.4923 30.4721 14.3373 30.2182 14.2315C29.9644 14.1257 29.6921 14.0713 29.417 14.0713C29.142 14.0713 28.8697 14.1257 28.6158 14.2315C28.362 14.3373 28.1315 14.4923 27.9379 14.6875L19.1045 23.5209C18.9093 23.7145 18.7543 23.945 18.6485 24.1988C18.5427 24.4527 18.4883 24.725 18.4883 25C18.4883 25.2751 18.5427 25.5474 18.6485 25.8012C18.7543 26.0551 18.9093 26.2855 19.1045 26.4792L27.9379 35.4167C28.1325 35.6098 28.3634 35.7625 28.6172 35.8662C28.8711 35.9699 29.1428 36.0225 29.417 36.0209C29.6912 36.0225 29.963 35.9699 30.2168 35.8662C30.4707 35.7625 30.7015 35.6098 30.8962 35.4167C31.2842 35.0264 31.502 34.4983 31.502 33.948C31.502 33.3976 31.2842 32.8695 30.8962 32.4792L23.5212 25Z"
        fill={Colors[fillColor]}
      />
    </svg>
  );
}

export default LeftArrowIcon;
