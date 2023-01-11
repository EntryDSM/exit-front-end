import { IconResponse } from './@type';

function NonePreview({ width, height, fillColor }: IconResponse) {
  return (
    <svg
      width={width ?? '24'}
      height={height ?? '24'}
      viewBox="0 0 50 50"
      fill={fillColor ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.7917 12.6667C23.5225 12.5547 24.2608 12.499 25.0001 12.5001C31.6251 12.5001 37.8542 17.2709 41.4792 25.0001C40.9248 26.1763 40.2987 27.3173 39.6042 28.4167C39.3838 28.758 39.2679 29.1563 39.2709 29.5626C39.2755 30.0172 39.4288 30.4579 39.7073 30.8173C39.9858 31.1767 40.3742 31.4352 40.8133 31.5532C41.2524 31.6712 41.718 31.6424 42.1392 31.471C42.5604 31.2997 42.9139 30.9953 43.1459 30.6042C44.1166 29.0791 44.9597 27.4764 45.6667 25.8126C45.7785 25.5526 45.8361 25.2726 45.8361 24.9896C45.8361 24.7067 45.7785 24.4267 45.6667 24.1667C41.4584 14.3959 33.5417 8.33339 25.0001 8.33339C24.0223 8.32847 23.0461 8.41214 22.0834 8.58339C21.8098 8.6299 21.5481 8.72985 21.3131 8.87751C21.0781 9.02518 20.8746 9.21768 20.714 9.44402C20.5534 9.67037 20.439 9.92612 20.3773 10.1967C20.3156 10.4672 20.3077 10.7473 20.3542 11.0209C20.4007 11.2945 20.5007 11.5562 20.6483 11.7912C20.796 12.0262 20.9885 12.2297 21.2149 12.3903C21.4412 12.5509 21.697 12.6653 21.9675 12.727C22.2381 12.7887 22.5181 12.7966 22.7917 12.7501V12.6667ZM7.72923 4.77089C7.53498 4.57665 7.30438 4.42256 7.05058 4.31744C6.79678 4.21231 6.52477 4.1582 6.25006 4.1582C5.97535 4.1582 5.70334 4.21231 5.44954 4.31744C5.19575 4.42256 4.96514 4.57665 4.77089 4.77089C4.37859 5.16319 4.1582 5.69527 4.1582 6.25006C4.1582 6.80486 4.37859 7.33693 4.77089 7.72923L11.2292 14.1667C8.28251 17.0032 5.93726 20.4042 4.33339 24.1667C4.21868 24.4296 4.15947 24.7133 4.15947 25.0001C4.15947 25.2868 4.21868 25.5705 4.33339 25.8334C8.54173 35.6042 16.4584 41.6667 25.0001 41.6667C28.744 41.6409 32.3996 40.5261 35.5209 38.4584L42.2709 45.2292C42.4646 45.4245 42.695 45.5795 42.9489 45.6853C43.2027 45.791 43.475 45.8455 43.7501 45.8455C44.0251 45.8455 44.2974 45.791 44.5513 45.6853C44.8051 45.5795 45.0356 45.4245 45.2292 45.2292C45.4245 45.0356 45.5795 44.8051 45.6853 44.5513C45.791 44.2974 45.8455 44.0251 45.8455 43.7501C45.8455 43.475 45.791 43.2027 45.6853 42.9489C45.5795 42.695 45.4245 42.4646 45.2292 42.2709L7.72923 4.77089ZM20.9792 23.9167L26.0834 29.0209C25.7313 29.1219 25.3663 29.171 25.0001 29.1667C23.895 29.1667 22.8352 28.7277 22.0538 27.9463C21.2724 27.1649 20.8334 26.1051 20.8334 25.0001C20.8291 24.6338 20.8783 24.2688 20.9792 23.9167ZM25.0001 37.5001C18.3751 37.5001 12.1459 32.7292 8.54173 25.0001C9.88775 22.0287 11.7981 19.3471 14.1667 17.1042L17.8542 20.8334C16.9881 22.4142 16.6579 24.2333 16.9131 26.0177C17.1683 27.8021 17.9953 29.4556 19.2699 30.7302C20.5445 32.0048 22.198 32.8318 23.9824 33.087C25.7668 33.3423 27.5859 33.012 29.1667 32.1459L32.4792 35.4167C30.2107 36.7519 27.6322 37.4701 25.0001 37.5001Z"
        fill="black"
      />
    </svg>
  );
}

export default NonePreview;