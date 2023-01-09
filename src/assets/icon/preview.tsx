import { IconResponse } from './@type';

function PreviewIcon({ width, height, fillColor }: IconResponse) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.6664 24.1666C41.4581 14.3958 33.5414 8.33325 24.9998 8.33325C16.4581 8.33325 8.54144 14.3958 4.33311 24.1666C4.21839 24.4294 4.15918 24.7131 4.15918 24.9999C4.15918 25.2867 4.21839 25.5704 4.33311 25.8333C8.54144 35.6041 16.4581 41.6666 24.9998 41.6666C33.5414 41.6666 41.4581 35.6041 45.6664 25.8333C45.7812 25.5704 45.8404 25.2867 45.8404 24.9999C45.8404 24.7131 45.7812 24.4294 45.6664 24.1666V24.1666ZM24.9998 37.4999C18.3748 37.4999 12.1456 32.7291 8.54144 24.9999C12.1456 17.2708 18.3748 12.4999 24.9998 12.4999C31.6248 12.4999 37.8539 17.2708 41.4581 24.9999C37.8539 32.7291 31.6248 37.4999 24.9998 37.4999ZM24.9998 16.6666C23.3516 16.6666 21.7404 17.1553 20.37 18.071C18.9996 18.9867 17.9315 20.2882 17.3008 21.8109C16.67 23.3336 16.505 25.0092 16.8266 26.6257C17.1481 28.2422 17.9418 29.727 19.1072 30.8925C20.2727 32.0579 21.7575 32.8516 23.374 33.1731C24.9905 33.4947 26.6661 33.3296 28.1888 32.6989C29.7115 32.0682 31.013 31.0001 31.9287 29.6297C32.8444 28.2593 33.3331 26.6481 33.3331 24.9999C33.3331 22.7898 32.4551 20.6702 30.8923 19.1074C29.3295 17.5446 27.2099 16.6666 24.9998 16.6666V16.6666ZM24.9998 29.1666C24.1757 29.1666 23.3701 28.9222 22.6849 28.4644C21.9997 28.0065 21.4656 27.3558 21.1503 26.5944C20.8349 25.8331 20.7524 24.9953 20.9132 24.187C21.0739 23.3788 21.4708 22.6364 22.0535 22.0536C22.6362 21.4709 23.3786 21.0741 24.1869 20.9133C24.9952 20.7525 25.8329 20.8351 26.5943 21.1504C27.3556 21.4658 28.0064 21.9998 28.4642 22.685C28.9221 23.3702 29.1664 24.1758 29.1664 24.9999C29.1664 26.105 28.7275 27.1648 27.946 27.9462C27.1646 28.7276 26.1048 29.1666 24.9998 29.1666Z"
        fill={fillColor}
      />
    </svg>
  );
}

export default PreviewIcon;
