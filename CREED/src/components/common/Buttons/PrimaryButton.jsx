export default function PrimaryButton({ type, children, styles }) {
  return (
    <button
      type={type}
      className={`w-full px-4 py-2 font-bold text-white bg-SecondaryColor rounded-lg hover:bg-DarkColor transition-colors duration-200 ${styles}`}
    >
      {children}
    </button>
  );
}
