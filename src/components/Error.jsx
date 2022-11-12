const Error = ({children}) => {
    return (
        <div className='bg-red-600 font-bold mb-3 rounded-md text-center p-3 uppercase'>
                                <p>{children}</p>
        </div>
      );
}
 
export default Error;