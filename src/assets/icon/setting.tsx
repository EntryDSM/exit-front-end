import { IconResponse } from './@type';

function SettingIcon({ width, height, fillColor }: IconResponse) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.417 19.8959L40.4795 18.5834L42.3337 14.8751C42.5216 14.4869 42.5845 14.05 42.5136 13.6246C42.4427 13.1992 42.2415 12.8063 41.9378 12.5001L37.5003 8.06259C37.1925 7.75443 36.7958 7.55052 36.3661 7.47952C35.9363 7.40851 35.4951 7.474 35.1045 7.66675L31.3962 9.52092L30.0837 5.58342C29.945 5.17299 29.6819 4.81598 29.3309 4.56206C28.9799 4.30815 28.5585 4.16997 28.1253 4.16675H21.8753C21.4386 4.16563 21.0125 4.30179 20.6574 4.55601C20.3022 4.81022 20.0359 5.16963 19.8962 5.58342L18.5837 9.52092L14.8753 7.66675C14.4872 7.4788 14.0503 7.41593 13.6249 7.48683C13.1995 7.55773 12.8065 7.7589 12.5003 8.06259L8.06283 12.5001C7.75468 12.8079 7.55076 13.2046 7.47976 13.6344C7.40876 14.0641 7.47424 14.5053 7.667 14.8959L9.52117 18.6043L5.58367 19.9168C5.17323 20.0554 4.81622 20.3185 4.56231 20.6695C4.3084 21.0205 4.17022 21.4419 4.167 21.8751V28.1251C4.16587 28.5618 4.30204 28.9879 4.55625 29.3431C4.81047 29.6982 5.16987 29.9645 5.58367 30.1043L9.52117 31.4168L7.667 35.1251C7.47904 35.5132 7.41617 35.9502 7.48707 36.3756C7.55797 36.801 7.75915 37.1939 8.06283 37.5001L12.5003 41.9376C12.8082 42.2457 13.2049 42.4497 13.6346 42.5207C14.0644 42.5917 14.5056 42.5262 14.8962 42.3334L18.6045 40.4793L19.917 44.4168C20.0568 44.8305 20.323 45.19 20.6782 45.4442C21.0333 45.6984 21.4594 45.8345 21.8962 45.8334H28.1462C28.5829 45.8345 29.009 45.6984 29.3641 45.4442C29.7193 45.19 29.9856 44.8305 30.1253 44.4168L31.4378 40.4793L35.1462 42.3334C35.5318 42.5166 35.9645 42.5769 36.3856 42.5061C36.8066 42.4353 37.1958 42.2369 37.5003 41.9376L41.9378 37.5001C42.246 37.1922 42.4499 36.7956 42.5209 36.3658C42.5919 35.9361 42.5264 35.4949 42.3337 35.1043L40.4795 31.3959L44.417 30.0834C44.8274 29.9448 45.1844 29.6817 45.4384 29.3307C45.6923 28.9797 45.8304 28.5583 45.8337 28.1251V21.8751C45.8348 21.4383 45.6986 21.0123 45.4444 20.6571C45.1902 20.302 44.8308 20.0357 44.417 19.8959ZM41.667 26.6251L39.167 27.4584C38.5921 27.6449 38.0647 27.9542 37.6213 28.3649C37.1779 28.7756 36.8291 29.2778 36.5992 29.8367C36.3693 30.3956 36.2637 30.9979 36.2898 31.6017C36.3159 32.2055 36.473 32.7964 36.7503 33.3334L37.9378 35.7084L35.6462 38.0001L33.3337 36.7501C32.7994 36.4839 32.2142 36.3356 31.6176 36.3153C31.0211 36.2949 30.4271 36.403 29.876 36.6322C29.3248 36.8613 28.8294 37.2062 28.4231 37.6435C28.0168 38.0808 27.7092 38.6003 27.5212 39.1668L26.6878 41.6668H23.3753L22.542 39.1668C22.3555 38.5919 22.0462 38.0644 21.6355 37.621C21.2249 37.1776 20.7226 36.8289 20.1637 36.599C19.6048 36.369 19.0025 36.2635 18.3987 36.2896C17.7949 36.3157 17.204 36.4728 16.667 36.7501L14.292 37.9376L12.0003 35.6459L13.2503 33.3334C13.5276 32.7964 13.6847 32.2055 13.7108 31.6017C13.7369 30.9979 13.6314 30.3956 13.4015 29.8367C13.1715 29.2778 12.8228 28.7756 12.3794 28.3649C11.936 27.9542 11.4085 27.6449 10.8337 27.4584L8.33367 26.6251V23.3751L10.8337 22.5418C11.4085 22.3553 11.936 22.046 12.3794 21.6353C12.8228 21.2246 13.1715 20.7224 13.4015 20.1635C13.6314 19.6045 13.7369 19.0023 13.7108 18.3985C13.6847 17.7947 13.5276 17.2038 13.2503 16.6668L12.0628 14.3543L14.3545 12.0626L16.667 13.2501C17.204 13.5274 17.7949 13.6845 18.3987 13.7106C19.0025 13.7367 19.6048 13.6311 20.1637 13.4012C20.7226 13.1713 21.2249 12.8225 21.6355 12.3791C22.0462 11.9357 22.3555 11.4083 22.542 10.8334L23.3753 8.33342H26.6253L27.4587 10.8334C27.6451 11.4083 27.9544 11.9357 28.3651 12.3791C28.7758 12.8225 29.278 13.1713 29.837 13.4012C30.3959 13.6311 30.9981 13.7367 31.6019 13.7106C32.2058 13.6845 32.7967 13.5274 33.3337 13.2501L35.7087 12.0626L38.0003 14.3543L36.7503 16.6668C36.4842 17.201 36.3359 17.7862 36.3155 18.3828C36.2952 18.9793 36.4033 19.5733 36.6324 20.1244C36.8616 20.6756 37.2065 21.1711 37.6437 21.5773C38.081 21.9836 38.6005 22.2912 39.167 22.4793L41.667 23.3126V26.6251ZM25.0003 16.6668C23.3522 16.6668 21.741 17.1555 20.3706 18.0712C19.0002 18.9869 17.9321 20.2883 17.3013 21.8111C16.6706 23.3338 16.5056 25.0093 16.8271 26.6258C17.1487 28.2423 17.9423 29.7272 19.1078 30.8926C20.2732 32.0581 21.7581 32.8518 23.3746 33.1733C24.9911 33.4948 26.6666 33.3298 28.1894 32.6991C29.7121 32.0684 31.0136 31.0002 31.9292 29.6298C32.8449 28.2594 33.3337 26.6483 33.3337 25.0001C33.3337 22.7899 32.4557 20.6703 30.8929 19.1075C29.3301 17.5447 27.2105 16.6668 25.0003 16.6668ZM25.0003 29.1668C24.1762 29.1668 23.3707 28.9224 22.6855 28.4645C22.0002 28.0067 21.4662 27.356 21.1508 26.5946C20.8355 25.8332 20.753 24.9955 20.9137 24.1872C21.0745 23.379 21.4713 22.6365 22.0541 22.0538C22.6368 21.4711 23.3792 21.0743 24.1875 20.9135C24.9957 20.7527 25.8335 20.8352 26.5948 21.1506C27.3562 21.466 28.0069 22 28.4648 22.6852C28.9226 23.3704 29.167 24.176 29.167 25.0001C29.167 26.1052 28.728 27.165 27.9466 27.9464C27.1652 28.7278 26.1054 29.1668 25.0003 29.1668Z"
        fill={fillColor}
      />
    </svg>
  );
}

export default SettingIcon;
