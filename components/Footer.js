function Footer() {
  return (
    <footer className="bg-black bg-opacity-90 b-0">
  <div className="container mx-auto px-3 ">
    <div className="sm:flex sm:flex-wrap  md:py-4 justify-evenly">
      <div className="px-4">
        <h5 className="text-2xl font-bold text-white mb-6">Follow US</h5>
        <ul className="footer-links">           
          <li className="mb-2">
            <a href="#" className="transparent hover:text-purple-400 text-white">Instagram</a>
          </li>
    
          <li className="mb-2">
            <a href="#" className="transparent hover:text-purple-400 text-white">Facebook</a>
          </li>
        </ul>
      </div>
      
      <div className="px-4">
        <h5 className="text-2xl text-white font-bold mb-6">About</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="transparent  hover:text-purple-400 text-white">History</a>
          </li>
        </ul>
      </div>
      <div className="px-4">
        <h5 className="text-2xl text-white font-bold mb-6">Help</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="transparent hover:text-purple-400 text-white">Support</a>
          </li>         
        </ul>
      </div>
        </div>

    <div className="sm:flex sm:flex-wrap  border-t  border-white justify-evenly">
      <div className="px-4 pt-2">
        <h6 className="font-bold text-2xl text-white mb-2">Address</h6>
        <address className="not-italic mb-4 text-sm text-white">
          ChengDu
        </address>
      </div>
      <div className="px-4 pt-2">
        <h6 className="font-bold text-2xl text-white mb-2">Email</h6>
        <p className="mb-4 text-sm text-white">973051062@qq.com</p>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
