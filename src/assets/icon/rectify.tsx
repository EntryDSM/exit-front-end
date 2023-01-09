import { IconResponse } from './@type';

function RectifyIcon({ width, height, fillColor }: IconResponse) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.8337 15.0834C45.8353 14.8093 45.7827 14.5375 45.6791 14.2836C45.5754 14.0298 45.4226 13.7989 45.2295 13.6043L36.3962 4.77095C36.2015 4.57786 35.9707 4.4251 35.7168 4.32143C35.463 4.21775 35.1912 4.1652 34.917 4.16678C34.6429 4.1652 34.3711 4.21775 34.1172 4.32143C33.8634 4.4251 33.6325 4.57786 33.4379 4.77095L27.542 10.6668L4.77119 33.4376C4.57811 33.6323 4.42535 33.8631 4.32167 34.117C4.21799 34.3708 4.16544 34.6426 4.16703 34.9168V43.7501C4.16703 44.3027 4.38652 44.8326 4.77722 45.2233C5.16792 45.614 5.69783 45.8335 6.25036 45.8335H15.0837C15.3752 45.8493 15.6668 45.8037 15.9396 45.6996C16.2123 45.5956 16.4602 45.4353 16.667 45.2293L39.3129 22.4584L45.2295 16.6668C45.4197 16.4649 45.5746 16.2325 45.6879 15.9793C45.7079 15.8132 45.7079 15.6453 45.6879 15.4793C45.6976 15.3823 45.6976 15.2846 45.6879 15.1876L45.8337 15.0834ZM14.2295 41.6668H8.33369V35.771L29.0212 15.0834L34.917 20.9793L14.2295 41.6668ZM37.8545 18.0418L31.9587 12.1459L34.917 9.20845L40.792 15.0834L37.8545 18.0418Z"
        fill={fillColor}
      />
    </svg>
  );
}

export default RectifyIcon;