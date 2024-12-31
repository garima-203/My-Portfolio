import React from 'react'

function PageScroll() {
    const navigate = useNavigate();
    const location = useLocation(); 
    const pages = ['', 'about', 'skills', 'project', 'contact'];
   
    const currentPageIndex = pages.indexOf(location.pathname.replace('/', ''));
    const goToNextPage = () => {
      if (currentPageIndex < pages.length - 1) {
        navigate(`/${pages[currentPageIndex + 1]}`);
      } else {
        navigate(`/${pages[0]}`); 
      }
    };
    const goToPreviousPage = () => {
      if (currentPageIndex > 0) {
        navigate(`/${pages[currentPageIndex - 1]}`);
      } else {
        navigate(`/${pages[pages.length - 1]}`); 
      }
    };
    return (
        <div>
             <div className='gap-10'> 
        <button
         className="right-1/2 bottom-5 z-50 fixed flex justify-center items-center bg-black shadow-md mx-5 rounded-full w-12 h-12 text-white transform -translate-x-1/2 animate-bounce-right hover:scale-110"
         onClick={goToPreviousPage}
          aria-label="Go to Previous Page"
        >
          <FaArrowLeft />
        </button>  

 
        <button
          className="bottom-5 left-1/2 z-50 fixed flex justify-center items-center bg-black shadow-md mx-5 rounded-full w-12 h-12 text-white transform -translate-x-1/2 animate-bounce-right hover:scale-110"
          onClick={goToNextPage}
          aria-label="Go to Next Page"
        >
          <FaArrowRight />
        </button>
      </div>
        </div>
    )
}

export default PageScroll
