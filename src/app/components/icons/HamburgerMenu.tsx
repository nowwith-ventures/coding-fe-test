const HamburgerMenu = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      aria-label="Menu"
      data-testid="icon-hamburgerMenu"
      width="20"
      height="20"
      {...props}
    >
      <path
        d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default HamburgerMenu
