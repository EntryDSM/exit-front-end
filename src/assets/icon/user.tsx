import { IconResponse } from './@type';
import { Colors } from '../../styles/theme/color';

function UserIcon({ width, height, fillColor }: IconResponse) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.729 26.4792C34.7715 24.8723 36.2624 22.6686 36.9941 20.1749C37.7259 17.6812 37.6622 15.0214 36.8119 12.5656C35.9617 10.1098 34.3671 7.98004 32.25 6.47267C30.133 4.9653 27.5987 4.15527 24.9999 4.15527C22.401 4.15527 19.8668 4.9653 17.7497 6.47267C15.6327 7.98004 14.0381 10.1098 13.1878 12.5656C12.3375 15.0214 12.2739 17.6812 13.0056 20.1749C13.7374 22.6686 15.2282 24.8723 17.2707 26.4792C13.7709 27.8814 10.7171 30.207 8.43506 33.2082C6.15299 36.2094 4.72813 39.7736 4.31237 43.5209C4.28228 43.7945 4.30636 44.0713 4.38326 44.3356C4.46015 44.5999 4.58834 44.8464 4.76052 45.0612C5.10824 45.4948 5.614 45.7726 6.16654 45.8334C6.71907 45.8942 7.27312 45.733 7.7068 45.3852C8.14048 45.0375 8.41826 44.5318 8.47904 43.9792C8.93651 39.9067 10.8784 36.1455 13.9337 33.4142C16.9889 30.6829 20.9434 29.173 25.0415 29.173C29.1397 29.173 33.0941 30.6829 36.1494 33.4142C39.2047 36.1455 41.1466 39.9067 41.604 43.9792C41.6607 44.4911 41.9049 44.9639 42.2897 45.3063C42.6744 45.6488 43.1723 45.8365 43.6874 45.8334H43.9165C44.4627 45.7706 44.9618 45.4944 45.3052 45.0652C45.6486 44.6359 45.8084 44.0883 45.7499 43.5417C45.3321 39.7838 43.8996 36.2104 41.6058 33.2047C39.312 30.1989 36.2434 27.874 32.729 26.4792ZM24.9999 25.0001C23.3517 25.0001 21.7405 24.5113 20.3701 23.5956C18.9997 22.68 17.9316 21.3785 17.3009 19.8558C16.6701 18.333 16.5051 16.6575 16.8267 15.041C17.1482 13.4245 17.9419 11.9396 19.1073 10.7742C20.2728 9.60873 21.7576 8.81506 23.3741 8.49351C24.9906 8.17197 26.6662 8.337 28.1889 8.96773C29.7116 9.59846 31.0131 10.6666 31.9288 12.037C32.8445 13.4074 33.3332 15.0185 33.3332 16.6667C33.3332 18.8769 32.4552 20.9965 30.8924 22.5593C29.3296 24.1221 27.21 25.0001 24.9999 25.0001Z"
        fill={Colors[fillColor]}
      />
    </svg>
  );
}

export default UserIcon;
