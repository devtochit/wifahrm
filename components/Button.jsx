

const Button = ({ price, onClick }) => {
    return (
      <button onClick={ onClick}  className="flex flex-row justify-center items-center bg-[#32af2b] rounded-full text-slate-50 w-52 pt-4 pb-4 hover:opacity-95">
        <div className="mr-4"></div>
        <div>
          <h1>{price}</h1>
        </div>
      </button>
    );
  };
  export default Button;